import React, { useState, useContext } from "react";

import axios from "axios";
import uploadPhoto from "../../services/uploadPhotos";

import LoginContext from "../../store/login-context";

import styles from "./input.module.css";
import authenticate from "../../services/authenticate";

const Input = () => {
  const [uploadedImage, setUploadedImage] = useState();
  const [text, setText] = useState();
  const [title, setTitle] = useState();

  const loginCtx = useContext(LoginContext);

  const { credentials, logOut } = loginCtx;

  console.log("Cred: ", credentials);

  const handleInput = (event) => {
    console.log(event.target.files[0]);

    setUploadedImage(event.target.files[0]);
  };

  const formData = () => {
    if (uploadedImage) {
      const formData = new FormData();
      formData.append("photo", uploadedImage);
      formData.append("text", text);
      formData.append("title", title);
      formData.append("token", credentials.token);

      return formData;
    }
  };

  const handleTextInput = (event) => {
    event.preventDefault();
    setText(event.target.value);
  };

  const handleTitleInput = (event) => {
    event.preventDefault();
    setTitle(event.target.value);
  };

  const postImage = async () => {
    const photo = formData();
    try {
      const res = await uploadPhoto(photo);
    } catch (error) {
      console.log(error);
      if (error.response.status === 401) {
        logOut();
      }
    }
  };

  return (
    <div className={styles.input}>
      <h2>Uploads</h2>
      <h3>Title</h3>
      <input type="text " name="Title" onChange={handleTitleInput} />
      <h3>Text</h3>
      <input type="text" onChange={handleTextInput} value={text} />
      <h3>File</h3>
      <input type="file" name="image" onChange={handleInput} />
      <button onClick={() => postImage()} className={styles.submit}>
        Submit
      </button>
    </div>
  );
};

export default Input;
