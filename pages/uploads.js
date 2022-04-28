import React, { useContext } from "react";

import Input from "../components/Input/Input";
import Login from "../components/Login/Login";

import LoginContext from "../store/login-context";

import style from "../styles/uploads.module.css";

const Uploads = () => {
  const loginCtx = useContext(LoginContext);

  const { isLogged, logIn, logOut } = loginCtx;

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
