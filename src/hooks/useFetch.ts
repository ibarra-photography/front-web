import { useState } from 'react';

interface IFetchParams {
  url: string;
  method?: 'GET' | 'POST' | 'PUT' | 'DELETE';
  params?: { [key: string]: string };
}

export const useFetch = <T>() => {
  const [fetchingStatus, setFetchingStatus] = useState<'idle' | 'loading' | 'succeeded' | 'failed'>('idle');
  const [response, setResponse] = useState<T>();

  const fetcher = async ({ url, method, params }: IFetchParams) => {
    try {
      setFetchingStatus('loading');
      const res: T = await (await fetch(url, { method: method, body: JSON.stringify(params) })).json();
      setResponse(res);
      setFetchingStatus('succeeded');
    } catch (error) {
      setFetchingStatus('failed');
    }
  };

  return { fetchingStatus, response, fetcher };
};
