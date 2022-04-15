import React, { useState } from "react";

import styles from "./login.module.css";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const usernameHandler = (event) => {
    event.preventDefault();
    setUsername(event.target.value);
  };
  const passwordHandler = (event) => {
    event.preventDefault();
    setPassword(event.target.value);
  };

  const submitHandler = () => {};
  return (
    <div className={styles.login}>
      <h2>Login</h2>
      <h3>Username</h3>
      <input type="text" onChange={usernameHandler} />
      <h3>Password</h3>
      <input type="password" onChange={passwordHandler} />
      <input
        className={styles.submit}
        type="button"
        value="Submit"
        onClick={submitHandler}
      />
    </div>
  );
};

export default Login;
