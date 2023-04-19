import { isEmailValid } from 'application/utils/isEmailValid';
import { isNumeric } from 'application/utils/isNumeric';
import { doPasswordMatch } from 'application/utils/matchPasswords';
import { textToHash } from 'application/utils/textToHash';
import { IFetchParams, useFetch } from 'hooks/useFetch';
import React, { useRef } from 'react';

import RegisterStyles from './RegisterUser.module.css';

interface IResponse {
  message: 'registered';
  status: number;
}

interface IApiResponse {
  response: IResponse;
}

interface RegisterUserSettings {
  username: string;
  password: string;
  email: string;
  invitationTicket: string;
}

export const RegisterUser = () => {
  const { fetcher, fetchingStatus, response } = useFetch<IApiResponse>();

  const loginFormRef = useRef(null);
  const usernameRef = useRef<HTMLInputElement>(null);
  const emailRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);
  const confirmPasswordRef = useRef<HTMLInputElement>(null);
  const invitationNumberRef = useRef<HTMLInputElement>(null);

  const registerHandler = async () => {
    const password = passwordRef.current?.value || '';
    const confirmPassword = confirmPasswordRef.current?.value || '';
    const username = usernameRef.current?.value || '';
    const email = emailRef.current?.value || '';
    const invitationNumber = invitationNumberRef.current?.value || '';

    const isPasswordMatching = doPasswordMatch(password, confirmPassword);
    const isEmailCorrect = isEmailValid(email);
    const isInvitationNumberNumber = isNumeric(invitationNumber);

    if (username && invitationNumber && isPasswordMatching && isInvitationNumberNumber && email && isEmailCorrect) {
      const registerUserRequest: RegisterUserSettings = {
        email,
        invitationTicket: invitationNumber,
        password,
        username
      };
      const fetchConfiguration: IFetchParams = {
        url: `${process.env.API_URL}/api/v1/registerUser`,
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: registerUserRequest
      };
      fetcher(fetchConfiguration);
    } else {
      debugger;
      console.log('Error');
    }
  };

  const submitHandler = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    registerHandler();
  };

  return (
    <div className={RegisterStyles.container}>
      <h3>Register</h3>
      <form className={RegisterStyles.form} ref={loginFormRef} onSubmit={submitHandler}>
        <span className={RegisterStyles.inputContainer}>
          <label>Username</label>
          <input type="text" placeholder="john@example.com / John007" ref={usernameRef} />
        </span>
        <span className={RegisterStyles.inputContainer}>
          <label>Email</label>
          <input type="text" placeholder="john@example.com / John007" ref={emailRef} />
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
      {fetchingStatus === 'loading' ? <p>Loading...</p> : null}
      {fetchingStatus === 'succeeded' ? <p> {JSON.stringify(response)} </p> : null}
      {fetchingStatus === 'failed' ? <p style={{ color: 'red' }}> {JSON.stringify(response)} </p> : null}
    </div>
  );
};
