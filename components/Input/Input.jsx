import React, { useRef, useState, useEffect } from "react";

import usePostImage from "components/Hooks/usePostImage";
import Toast from "components/Toast/Toast";

import styles from "./input.module.css";

const Input = () => {
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

  return (
    <>
      <form
        ref={form}
        id="post-image"
        className={styles.input}
        onSubmit={postImage}
      >
        <h2>Uploads</h2>
        <h3>Title</h3>
        <input type="text " name="Title" onChange={handleTitleInput} />
        <h3>Text</h3>
        <input type="text" onChange={handleTextInput} />
        <h3>File</h3>
        <input
          type="file"
          name="image"
          data-testid="file-upload"
          onChange={handleInput}
        />
        <button className={styles.submit}>Submit</button>
      </form>

      {loadingStatus === ("success" || "error") ? (
        <Toast className={loadingStatus}>
          <p>{toastMessage}</p>
        </Toast>
      ) : null}
    </>
  );
};

export default Input;
