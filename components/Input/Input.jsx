import React, { useState } from "react";

import usePostImage from "components/Hooks/usePostImage";

import styles from "./input.module.css";

const Input = () => {
  const [uploadedImage, setUploadedImage] = useState();
  const [text, setText] = useState("");
  const [title, setTitle] = useState("");
  const [loadingStatus, setLoadingStatus] = useState("idle");

  const { uploadImage } = usePostImage();

  const postImage = async (event) => {
    setLoadingStatus("loading");
    event.preventDefault();
    console.log("Enter");
    const response = await uploadImage(uploadedImage, title, text);
    if (response === "success") {
      document.getElementById("post-image").reset();
      setLoadingStatus("success");
    }
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
    <form id="post-image" className={styles.input} onSubmit={postImage}>
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
  );
};

export default Input;
