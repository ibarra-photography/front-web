import { IFetchParams, useFetch } from 'hooks/useFetch';
import { redirect } from 'next/navigation';
import React, { useEffect } from 'react';

interface IProps {
  user: string;
}
interface IResponse {
  user: string;
  isValid: boolean;
}

export const Dashboard = ({ user }: IProps) => {
  const { fetcher, fetchingStatus, response } = useFetch<IResponse>();

  useEffect(() => {
    const token = window.localStorage.getItem('token');
    const body = { user, token };
    const validateSettings: IFetchParams = {
      method: 'POST',
      url: `${process.env.API_URL}/api/v1/validate/dashboard`,
      body,
      headers: { 'Content-Type': 'application/json' }
    };
    fetcher(validateSettings);
  }, []);

  if (fetchingStatus === 'succeeded' && !response?.isValid) redirect('/login');
  console.log('fetchingStatus', fetchingStatus);

  return (
    <div>
      <h1>{user}</h1>
      <div>
        {fetchingStatus === 'loading' ? <p>loading...</p> : null}
        {fetchingStatus === 'succeeded' ? <p>Dashboard: {response?.user}</p> : null}
      </div>
    </div>
  );
};
