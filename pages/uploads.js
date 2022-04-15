import React from "react";

import Input from "../components/Input/Input";
import Login from "../components/Login/Login";

import style from "../styles/uploads.module.css";

const uploads = () => {
  const logoutHandler = () => {};

  return (
    <div className={style.uploads}>
      <button className={style.logout} onClick={logoutHandler}>
        Logout
      </button>
      <Input />
      <Login />
    </div>
  );
};

export default uploads;
