import { useState, useRef, useEffect } from "react";

import usePostImage from "components/Hooks/usePostImage";

export const useInput = () => {
  const [uploadedImage, setUploadedImage] = useState();
  const [text, setText] = useState("");
  const [title, setTitle] = useState("");
  const [toastMessage, setToastMessage] = useState("");

  const { uploadImage, loadingStatus } = usePostImage();

  const form = useRef();

  useEffect(() => {
    if (loadingStatus === "success") {
      setToastMessage("Photo successfully loaded");
      return;
    }
    setToastMessage("Error loading photo");
  }, [loadingStatus]);

  const postImage = async (event) => {
    event.preventDefault();
    setToastMessage("Loading");
    await uploadImage(uploadedImage, title, text);
    form.current.reset();
    setTitle("");
    setUploadedImage(null);
  };

  const handleInput = (event) => {
    setUploadedImage(event.target.files[0]);
  };

  const handleTextInput = (event) => {
    event.preventDefault();
    setText(event.target.value);
  };

  const handleTitleInput = (event) => {
    event.preventDefault();
    setTitle(event.target.value);
  };

  return {
    form,
    handleInput,
    handleTextInput,
    handleTitleInput,
    loadingStatus,
    postImage,
    toastMessage,
  };
};
