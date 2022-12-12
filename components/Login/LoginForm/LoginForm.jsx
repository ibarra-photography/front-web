import Spinner from "components/Spinner/Spinner";
import styles from "./login.module.css";
import { useLogin } from "./useLogin";
import Toast from "components/Toast/Toast";

const LoginForm = () => {
  const {
    loadingStatus,
    passwordHandler,
    submitHandler,
    usernameHandler,
    loginForm,
  } = useLogin();

  return (
    <>
      <form className={styles.form} onSubmit={submitHandler} ref={loginForm}>
        <h2>Login </h2>
        <h3>Username</h3>

        <input
          aria-label="username"
          name="username"
          onChange={usernameHandler}
          type="text"
        />
        <h3>Password</h3>
        <input
          aria-label="password"
          name="'password"
          onChange={passwordHandler}
          type="password"
        />
        {loadingStatus === "loading" ? (
          <Spinner />
        ) : (
          <button className={styles.submit}>Submit</button>
        )}
      </form>
      {loadingStatus === "error" ? (
        <Toast className={"error"}>
          <p>Incorrect username or password</p>
        </Toast>
      ) : null}
    </>
  );
};

export default LoginForm;
