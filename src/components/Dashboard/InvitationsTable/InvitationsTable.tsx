import { IFetchParams, useFetch } from 'hooks/useFetch';
import React, { useEffect } from 'react';
import Table from './Table/Table';

interface Invitation extends Record<string, string | boolean | number> {
  generationDate: string;
  invitedBy: string;
  isValid: boolean;
  number: number;
  useDate: string;
  username: string;
  _id: string;
}

interface InvitationsResponse {
  invitations: Invitation[];
}

export const InvitationsTable = () => {
  const { fetcher, fetchingStatus, response } = useFetch<InvitationsResponse>();

  const fetchInvitationsHandler = () => {
    const token = window.localStorage.getItem('token')!;
    const fetchConfiguration: IFetchParams = {
      url: `${process.env.API_URL}/api/v1/getInvitations`,
      method: 'GET',
      headers: { Authorization: token }
    };

    fetcher(fetchConfiguration);
  };

  console.log('response', response?.invitations);
  const columns = [
    { key: 'generationDate', header: 'Generation Date' },
    { key: 'invitedBy', header: 'Invited By' },
    { key: 'isValid', header: 'Is Valid' },
    { key: 'number', header: 'Number' },
    { key: 'useDate', header: 'Use Date' },
    { key: 'username', header: 'Username' },
    { key: '_id', header: 'ID' }
  ];

  useEffect(() => {
    fetchInvitationsHandler();

    return () => {};
  }, []);

  return <div>{fetchingStatus !== 'loading' && response?.invitations && <Table columns={columns} data={response.invitations} />}</div>;
};
