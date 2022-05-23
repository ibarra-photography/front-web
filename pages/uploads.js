import React, { useContext, useEffect } from "react";

import Input from "../components/Input/Input";
import Login from "../components/Login/Login";

import LoginContext from "../store/login-context";

import style from "../styles/uploads.module.css";

const Uploads = () => {
  const loginCtx = useContext(LoginContext);

  const { isLogged, logOut, credentials } = loginCtx;

  useEffect(() => {
    if (credentials.expirationDate < Date.now()) {
      logOut();
    }
  }, [credentials, logOut]);

  const logoutHandler = () => {
    logOut();
  };

  return (
    <div className={style.uploads}>
      {isLogged && (
        <button className={style.logout} onClick={logoutHandler}>
          Logout
        </button>
      )}

      {isLogged && <Input />}
      {!isLogged && <Login />}
    </div>
  );
};

export default Uploads;
