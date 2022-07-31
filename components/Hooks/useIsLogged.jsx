import { useContext, useEffect } from "react";

import LoginContext from "store/login-context";

const useIsLogged = () => {
  const loginCtx = useContext(LoginContext);

  const { isLogged, logOut, credentials } = loginCtx;

  useEffect(() => {
    if (credentials.expirationDate < Date.now()) {
      logOut();
    }
  }, [credentials, logOut]);

  return { isLogged, logOut, credentials };
};

export default useIsLogged;
