import React, { useRef, useState } from "react";

import usePostImage from "components/Hooks/usePostImage";
import Toast from "components/Toast/Toast";

import styles from "./input.module.css";

const Input = () => {
  const [uploadedImage, setUploadedImage] = useState();
  const [text, setText] = useState("");
  const [title, setTitle] = useState("");
  const [toastMessage, setToastMessage] = useState("");

  const form = useRef();

  const { uploadImage } = usePostImage();

  const postImage = async (event) => {
    event.preventDefault();
    setToastMessage("Loading");
    try {
      const response = await uploadImage(uploadedImage, title, text);
      setToastMessage(response);
      form.current.reset();
    } catch (error) {
      setToastMessage("Error " + JSON.stringify(error));
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

      {toastMessage ? (
        <Toast>
          <p>{toastMessage}</p>
        </Toast>
      ) : null}
    </>
  );
};

export default Input;
