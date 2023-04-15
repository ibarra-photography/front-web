import React, { useRef } from 'react';

import RegisterStyles from './RegisterUser.module.css';

export const RegisterUser = () => {
  const loginFormRef = useRef(null);
  const usernameRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);
  const confirmPasswordRef = useRef<HTMLInputElement>(null);
  const invitationNumberRef = useRef<HTMLInputElement>(null);

  const registerHandler = () => {};

  const submitHandler = () => {};

  return (
    <div className={RegisterStyles.container}>
      <h3>Register</h3>
      <form className={RegisterStyles.form} ref={loginFormRef} onSubmit={submitHandler}>
        <span className={RegisterStyles.inputContainer}>
          <label>Username or email</label>
          <input type="text" placeholder="john@example.com / John007" ref={usernameRef} />
        </span>
        <span className={RegisterStyles.inputContainer}>
          <label>Password</label>
          <input type="password" placeholder="Password" ref={passwordRef} />
        </span>
        <span className={RegisterStyles.inputContainer}>
          <label>Confirm Password</label>
          <input type="password" placeholder="Password" ref={confirmPasswordRef} />
        </span>
        <span className={RegisterStyles.inputContainer}>
          <label>Invitation number</label>
          <input type="text" placeholder="012345" ref={invitationNumberRef} />
        </span>

        <div className={RegisterStyles.buttonContainer}>
          <button onClick={registerHandler}>Register</button>
        </div>
      </form>
    </div>
  );
};
