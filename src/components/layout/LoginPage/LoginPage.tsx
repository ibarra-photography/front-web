'use client';
import { createHash } from 'crypto';
import { IFetchParams, useFetch } from 'hooks/useFetch';
import Link from 'next/link';
import React, { useRef } from 'react';
import LoginStyles from './LoginPage.module.css';

export const LoginPage = () => {
  const { fetcher, fetchingStatus, response } = useFetch();

  const loginFormRef = useRef(null);
  const usernameRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);

  const logInHandler = () => {
    const username = usernameRef.current?.value;
    const password = passwordRef.current?.value;
    const hashPass = createHash('sha256').update(password!).digest('hex');
    const fetchConfiguration: IFetchParams = {
      url: `${process.env.API_URL}/api/v1/photos/authenticate`,
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: { username, hashPass }
    };

    fetcher(fetchConfiguration);

    console.log('fetchingStatus', fetchingStatus);
    console.log('response', response);
  };
  const submitHandler = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
  };

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
