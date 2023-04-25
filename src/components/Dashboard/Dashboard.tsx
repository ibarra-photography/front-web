import React, { lazy, Suspense, useEffect } from 'react';
import { redirect } from 'next/navigation';

import { IFetchParams, useFetch } from 'hooks/useFetch';

const UploadImage = lazy(() => import('./UploadImage'));

import DashboardStyles from './Dashboard.module.css';
import Link from 'next/link';
import GenerateInvitation from './GenerateInvitation';
import RegisterUser from 'components/RegisterUser';
import SuspenseFallback from 'components/SuspenseFallback';

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

  const logOutHandler = () => {
    window.localStorage.setItem('token', '');
    redirect('/login');
  };

  if (fetchingStatus === 'succeeded' && !response?.isValid) redirect('/login');
  return (
    <div className={DashboardStyles.container}>
      <div className={DashboardStyles.header}>
        <h1>Hello {user}</h1>

        <Link href={'/login'} onClick={logOutHandler}>
          Log out
        </Link>
      </div>
      <div className={DashboardStyles.modulesContainer}>
        {fetchingStatus === 'loading' ? <p>loading...</p> : null}
        {fetchingStatus === 'succeeded' ? (
          <Suspense fallback={<SuspenseFallback />}>
            <UploadImage user={response?.user || ''} />
          </Suspense>
        ) : null}
        {fetchingStatus === 'succeeded' ? (
          <Suspense fallback={<p>Loading...</p>}>
            <RegisterUser />
          </Suspense>
        ) : null}
        {fetchingStatus === 'succeeded' ? <GenerateInvitation user={response?.user || ''} /> : null}
      </div>
    </div>
  );
};
