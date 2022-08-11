import React, { useState, useRef, useEffect } from "react";

import Spinner from "components/Spinner/Spinner";
import styles from "./login.module.css";
import { useLogin } from "./useLogin";
import Toast from "components/Toast/Toast";

const LoginForm = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const { loadingStatus, loginHandler } = useLogin();
  const loginForm = useRef();

  useEffect(() => {
    if (loadingStatus === "error") loginForm.current.reset();
  }, [loadingStatus]);

  const usernameHandler = (event) => {
    event.preventDefault();
    setUsername(event.target.value);
  };
  const passwordHandler = (event) => {
    event.preventDefault();
    setPassword(event.target.value);
  };

  const submitHandler = async (event) => {
    event.preventDefault();
    await loginHandler(username, password);
  };

  return (
    <>
      <form ref={loginForm} className={styles.form} onSubmit={submitHandler}>
        <h2>Login </h2>
        <h3>Username</h3>

        <input
          type="text"
          name="username"
          onChange={usernameHandler}
          aria-label="username"
        />
        <h3>Password</h3>
        <input
          type="password"
          name="'password"
          onChange={passwordHandler}
          aria-label="password"
        />
        {loadingStatus === "loading" ? (
          <Spinner />
        ) : (
          <button className={styles.submit}>Submit</button>
        )}
      </form>
      {loadingStatus === "error" ? (
        <Toast className={"error"}>
          <p>Incorrect username or password</p>
        </Toast>
      ) : null}
    </>
  );
};

export default LoginForm;
