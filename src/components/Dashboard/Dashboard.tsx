import React, { useEffect } from 'react';
import { redirect } from 'next/navigation';

import { IFetchParams, useFetch } from 'hooks/useFetch';

import UploadImage from './UploadImage';

import DashboardStyles from './Dashboard.module.css';

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
    <div className={DashboardStyles.container}>
      <h1>Hello {user}</h1>
      <div>
        {fetchingStatus === 'loading' ? <p>loading...</p> : null}
        {fetchingStatus === 'succeeded' ? <UploadImage user={response?.user || ''} /> : null}
      </div>
    </div>
  );
};
