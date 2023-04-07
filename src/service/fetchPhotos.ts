import { cache } from 'react';

export const fetchPhotos = cache((page: number) => {
  const endpoint = new URL(`${process.env.API_URL}/api/v1/photos`);
  endpoint.searchParams.append('page', String(page));

  return fetch(`http://localhost:4000/api/v1/photos?page=${page}`).then(res => res.json());
});
