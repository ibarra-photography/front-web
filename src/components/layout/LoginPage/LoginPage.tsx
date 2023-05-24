'use client';
import Navigation from 'components/Navigation';
import Toast from 'components/Toast';
import LoginStyles from './LoginPage.module.css';
import { useLoginPage } from './useLoginPage';

export const LoginPage = () => {
  const { fetchingStatus, logInHandler, loginFormRef, passwordRef, response, submitHandler, usernameRef } = useLoginPage();

  return (
    <div className={LoginStyles.container}>
      <h1>Login</h1>
      <div className={LoginStyles.navigationContainer}>
        <Navigation />
      </div>
      <form className={LoginStyles.form} ref={loginFormRef} onSubmit={submitHandler}>
        <span>
          <label>Username or email</label>
          <input type="text" placeholder="john@example.com / John007" ref={usernameRef} />
        </span>
        <span>
          <label>Password</label>
          <input type="password" placeholder="Password" ref={passwordRef} />
        </span>
        {fetchingStatus !== 'loading' && response?.response.status == 401 ? (
          <Toast styles="error">
            <p>Invalid Username or Password</p>
          </Toast>
        ) : null}
        <div className={LoginStyles.buttonContainer}>
          {fetchingStatus === 'loading' ? <p>Login...</p> : <button onClick={logInHandler}>Log in</button>}
        </div>
      </form>
    </div>
  );
};
