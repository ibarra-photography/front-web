import React, { useState } from "react";

const LoginContext = React.createContext({
  isLogged: false,
  logOut: () => {},
  logIn: () => {},
  credentials: {},
  setCredentials: () => {},
});

export const LoginContextProvider = ({ children }) => {
  const [isLogged, setIsLogged] = useState(false);
  const [credentials, setCredentials] = useState({});

  const logoutHandler = () => {
    setIsLogged(false);
  };

  const logInHandler = () => {
    setIsLogged(true);
  };

  return (
    <LoginContext.Provider
      value={{
        isLogged: isLogged,
        logOut: logoutHandler,
        logIn: logInHandler,
        credentials,
        setCredentials,
      }}
    >
      {children}
    </LoginContext.Provider>
  );
};

export default LoginContext;
