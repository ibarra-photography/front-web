import { useRef } from 'react';
import { redirect } from 'next/navigation';

import { IFetchParams, useFetch } from 'hooks/useFetch';

import { createHash } from 'crypto';

interface ILoginData {
  token: string;
}

interface IResponse {
  data: ILoginData;
  status: number;
}

interface IApiResponse {
  response: IResponse;
}

export const useLoginPage = () => {
  const { fetcher, fetchingStatus, response } = useFetch<IApiResponse>();

  const loginFormRef = useRef(null);
  const usernameRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);

  const logInHandler = () => {
    const username = usernameRef.current?.value;
    const password = passwordRef.current?.value;
    const hashPass = createHash('sha256').update(password!).digest('hex');
    const fetchConfiguration: IFetchParams = {
      url: `${process.env.API_URL}/api/v1/authenticate`,
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: { username, password: hashPass }
    };

    fetcher(fetchConfiguration);
  };
  const submitHandler = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
  };

  if (response?.response?.status == 200) {
    window.localStorage.setItem('token', response.response.data.token);
    console.log('response', response.response.data.token);
    redirect(`${usernameRef.current?.value}/dashboard`);
  }

  return { logInHandler, loginFormRef, usernameRef, passwordRef, response, fetchingStatus, submitHandler };
};
