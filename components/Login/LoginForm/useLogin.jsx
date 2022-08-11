import { useState, useContext } from "react";
import { createHash } from "crypto";

import LoginContext from "store/login-context";

import authenticate from "services/authenticate";

export const useLogin = () => {
  const [loadingStatus, setLoadingStatus] = useState("idle");
  const loginCtx = useContext(LoginContext);
  const { logIn, setCredentials } = loginCtx;

  const loginHandler = async (username, password) => {
    if (loadingStatus === "loading") return;
    setLoadingStatus("loading");
    const credentials = {
      username: username,
      password: createHash("sha256").update(password).digest("hex"),
    };
    try {
      const { response } = await authenticate(credentials);
      const { token } = response.data;
      if (token) {
        const expirationDate = new Date(new Date().getTime() + 3600 * 1000);
        setCredentials({ token, expirationDate });
        logIn();
        setLoadingStatus("success");
      } else {
        setLoadingStatus("error");
        alert("Wrong username or password");
      }
    } catch (error) {
      setLoadingStatus("error");
      alert("Invalid username or password");
    }
  };
  return { loginHandler, loadingStatus };
};
