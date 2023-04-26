import { cache } from 'react';

export const fetchPhotoById = cache((id: string) => {
  const endpoint = new URL(`${process.env.API_URL}/api/v1/photoById`);
  endpoint.searchParams.append('id', id);

  return fetch(endpoint).then(res => res.json());
});
