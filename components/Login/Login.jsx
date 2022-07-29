import React, { useState, useContext, useEffect } from "react";

import LoginContext from "../../store/login-context";

import authenticate from "../../services/authenticate";

import { createHash } from "crypto";

import styles from "./login.module.css";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const loginCtx = useContext(LoginContext);

  const { logIn, setCredentials } = loginCtx;

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
    const credentials = {
      username: username,
      password: createHash("sha256").update(password).digest("hex"),
    };
    try {
      const res = await authenticate(credentials);
      if (res.response.data.token) {
        const expirationDate = new Date(new Date().getTime() + 3600 * 1000);
        setCredentials({
          token: res.response.data.token,
          expirationDate: expirationDate,
        });
        setPassword("");
        setUsername("");
        logIn();
      } else {
        alert("Wrong username or password");
        console.log("Error: ", res);
        setPassword("");
        setUsername("");
      }
    } catch (error) {
      alert("Invalid username or password");
      console.log(error);
    }
  };

  return (
    <form className={styles.form} onSubmit={submitHandler}>
      <h2>Login</h2>
      <h3>Username</h3>

      <input type="text" onChange={usernameHandler} value={username} />
      <h3>Password</h3>
      <input type="password" onChange={passwordHandler} value={password} />
      <button className={styles.submit}>Submit</button>
    </form>
  );
};

export default Login;
