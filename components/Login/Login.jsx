import React, { useState, useContext, useEffect } from "react";

import LoginContext from "../../store/login-context";

import authenticate from "../../services/authenticate";

import { createHash } from "crypto";

import styles from "./login.module.css";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [loginCredentials, setLoginCredentials] = useState();
  const [response, setResponse] = useState();

  const loginCtx = useContext(LoginContext);

  const { logIn, setCredentials } = loginCtx;

  useEffect(() => {
    if (response?.response) {
      setCredentials(loginCredentials);
      logIn();
    }
  }, [response, logIn, setCredentials, loginCredentials]);

  const usernameHandler = (event) => {
    event.preventDefault();
    setUsername(event.target.value);
  };
  const passwordHandler = (event) => {
    event.preventDefault();
    setPassword(event.target.value);
  };

  const submitHandler = async () => {
    const credentials = {
      username: createHash("sha256").update(username).digest("hex"),
      password: createHash("sha256").update(password).digest("hex"),
    };
    setLoginCredentials(credentials);
    const res = await authenticate(credentials);
    setResponse(res);
  };

  return (
    <div className={styles.login}>
      <h2>Login</h2>
      <h3>Username</h3>
      <input type="text" onChange={usernameHandler} />
      <h3>Password</h3>
      <input type="password" onChange={passwordHandler} />
      <button className={styles.submit} onClick={submitHandler}>
        Submit
      </button>
    </div>
  );
};

export default Login;
