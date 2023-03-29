'use client';
import Link from 'next/link';
import LoginStyles from './LoginPage.module.css';
import { useLoginPage } from './useLoginPage';

export const LoginPage = () => {
  const { fetchingStatus, logInHandler, loginFormRef, passwordRef, response, submitHandler, usernameRef } = useLoginPage();

  return (
    <div className={LoginStyles.container}>
      <h1>Login</h1>
      <form className={LoginStyles.form} ref={loginFormRef} onSubmit={submitHandler}>
        <span>
          <label>Username or email</label>
          <input type="text" placeholder="john@example.com / John007" ref={usernameRef} />
        </span>
        <span>
          <label>Password</label>
          <input type="password" placeholder="Password" ref={passwordRef} />
        </span>
        <div className={LoginStyles.buttonContainer}>
          <button onClick={logInHandler}>Log in</button>
        </div>
      </form>
      <div>
        <Link href={'/'}>Home</Link>
        <Link href={'/sign-in/wait-list'}>Sign in</Link>
      </div>
    </div>
  );
};
