import { IFetchParams, useFetch } from 'hooks/useFetch';
import React from 'react';

interface IProps {
  user: string;
}

interface IGenerateInvitationSettings {
  username: string;
  token: string;
}
interface IInvitationResponse {
  invitationNumber: string;
}

export const GenerateInvitation = ({ user }: IProps) => {
  const { fetcher, fetchingStatus, response } = useFetch<IInvitationResponse>();
  const generateInvitationHandler = () => {
    const generateInvitationSettings: IGenerateInvitationSettings = {
      username: user,
      token: window.localStorage.getItem('token') || ''
    };
    const fetcherSettings: IFetchParams = {
      url: `${process.env.API_URL}/api/v1/generateInvitation`,
      method: 'POST',
      body: generateInvitationSettings,
      headers: { 'Content-Type': 'application/json' }
    };
    fetcher(fetcherSettings);

    console.log('response', response);
  };
  return (
    <div>
      <h2>Generate invitation</h2>
      <button onClick={generateInvitationHandler}>Generate invitation</button>
      <p>Invitation: </p>
      {fetchingStatus === 'succeeded' ? <p>{response?.invitationNumber}</p> : null}
    </div>
  );
};
