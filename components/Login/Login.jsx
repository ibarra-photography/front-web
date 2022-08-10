import React, { Fragment } from "react";

import Navigation from "components/layout/Navigation/Navigation";
import LoginForm from "./LoginForm/LoginForm";

const Login = () => {
  return (
    <Fragment>
      <Navigation />
      <LoginForm />
    </Fragment>
  );
};

export default Login;
