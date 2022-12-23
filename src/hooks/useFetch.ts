import React, { useState } from 'react';

interface IFetchParams {
  url: string;
  method?: 'GET' | 'POST' | 'PUT' | 'DELETE';
  params?: { [key: string]: string };
}

export const useFetch = () => {
  const [fetchingStatus, setFetchingStatus] = useState<'idle' | 'loading' | 'succeeded' | 'failed'>('idle');
  const [response, setResponse] = useState<any>(null);

  const fetcher = async ({ url, method, params }: IFetchParams) => {
    try {
      setFetchingStatus('loading');
      setResponse(await (await fetch(url, { method: method, body: JSON.stringify(params) })).json());
      setFetchingStatus('succeeded');
    } catch (error) {
      setFetchingStatus('failed');
    }
  };

  return { fetchingStatus, response, fetcher };
};
