import React, { useRef, useState, useEffect } from "react";

import usePostImage from "components/Hooks/usePostImage";
import Toast from "components/Toast/Toast";

import styles from "./input.module.css";
import { useInput } from "./useInput";

const Input = () => {
  const {
    form,
    handleInput,
    handleTextInput,
    handleTitleInput,
    loadingStatus,
    postImage,
    toastMessage,
  } = useInput();

  return (
    <>
      <form
        className={styles.input}
        id="post-image"
        onSubmit={postImage}
        ref={form}
      >
        <h2>Uploads</h2>
        <h3>Title</h3>
        <input name="Title" onChange={handleTitleInput} type="text" />
        <h3>Text</h3>
        <input onChange={handleTextInput} type="text" />
        <h3>File</h3>
        <input
          data-testid="file-upload"
          name="image"
          onChange={handleInput}
          type="file"
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
