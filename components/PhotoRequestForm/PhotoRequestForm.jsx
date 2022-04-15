import React, { useReducer } from "react";

import styles from "./photo-request-form.module.css";

const PhotoRequestForm = ({ setIsFormOpen }) => {
  const handleSend = () => {
    setIsFormOpen(false);
  };
  const handleCancel = () => {
    setIsFormOpen(false);
  };
  return (
    <form className={styles.form}>
      <h2 className={styles.title}>Request this Photo, it is free</h2>
      <div className={styles["input-container"]}>
        <label htmlFor="name">Name:</label>
        <input
          type="text"
          id="name"
          name="name"
          placeholder="Enter your name"
        />
      </div>
      <div className={styles["input-container"]}>
        <label htmlFor="surname">Surname:</label>
        <input
          type="text"
          id="surname"
          name="surname"
          placeholder="Enter your surname"
        />
      </div>
      <div className={styles["input-container"]}>
        <label htmlFor="email">Email:</label>
        <input
          type="text"
          id="email"
          name="email"
          placeholder="Enter your email"
        />
      </div>
      <div className={styles["input-container"]}>
        <label htmlFor="email">You can leave some love here:</label>
        <input
          type="text"
          id="message"
          name="message"
          placeholder="Optional"
          className={styles.comment}
        />
      </div>
      <div className={styles.buttons}>
        <div onClick={handleSend} className={styles["button-send"]}>
          Send
        </div>
        <div onClick={handleCancel} className={styles["button-cancel"]}>
          Cancel
        </div>
      </div>
    </form>
  );
};

export default PhotoRequestForm;
