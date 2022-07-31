import useIsLogged from "components/Hooks/useIsLogged";

import Input from "/components/Input/Input";
import Login from "/components/Login/Login";

import style from "/styles/uploads.module.css";

const Uploads = () => {
  const { logOut, isLogged } = useIsLogged();

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
