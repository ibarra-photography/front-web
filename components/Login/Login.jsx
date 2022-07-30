import React, { useState, useContext, Fragment } from "react";

import LoginContext from "../../store/login-context";

import authenticate from "../../services/authenticate";

import { createHash } from "crypto";

import Spinner from "components/Spinner/Spinner";
import Navigation from "components/layout/Navigation/Navigation";

import styles from "./login.module.css";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [loadingStatus, setLoadingStatus] = useState("idle");

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
    if (loadingStatus === "loading") return;

    setLoadingStatus("loading");
    const credentials = {
      username,
      password: createHash("sha256").update(password).digest("hex"),
    };

    try {
      const { response } = await authenticate(credentials);
      const { token } = response.data;

      if (token) {
        const expirationDate = new Date(new Date().getTime() + 3600 * 1000);

        setCredentials({ token, expirationDate });
        setPassword("");
        setUsername("");

        logIn();
        setLoadingStatus("success");
      } else {
        setLoadingStatus("error");
        alert("Wrong username or password");
        setPassword("");
        setUsername("");
      }
    } catch (error) {
      setLoadingStatus("error");
      alert("Invalid username or password");
      console.log(error);
    }
  };

  return (
    <Fragment>
      <Navigation />
      <form className={styles.form} onSubmit={submitHandler}>
        <h2>Login </h2>
        <h3>Username</h3>

        <input type="text" onChange={usernameHandler} value={username} />
        <h3>Password</h3>
        <input type="password" onChange={passwordHandler} value={password} />
        {loadingStatus === "loading" ? (
          <Spinner />
        ) : (
          <button className={styles.submit}>Submit</button>
        )}
      </form>
    </Fragment>
  );
};

export default Login;
