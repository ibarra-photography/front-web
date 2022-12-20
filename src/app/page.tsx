'use client';

import { useEffect, useState } from 'react';

import HomePage from 'components/layout/HomePage';
import { PhotoData } from '../domain/Models/Photo/PhotoData';

const defaultPhotoData: PhotoData = {
  data: [],
  page: '1',
  totalPages: 1
};
export default function Home() {
  const [photoData, setPhotoData] = useState<PhotoData>(defaultPhotoData);

  async function getData(endpoint: URL) {
    try {
      const res = await fetch(endpoint);
      return res.json();
    } catch (error) {}
  }

  const getPhotosHandler = async () => {
    try {
      const endpoint = new URL(`${process.env.API_URL}/api/v1/photos?page=1`);
      endpoint.searchParams.append('page', String(1));
      const photos = await getData(endpoint);
      setPhotoData(photos);
    } catch (error) {
      console.log('error', error);
      throw new Error('Error fetching photos');
    }
  };

  useEffect(() => {
    getPhotosHandler();
  }, []);

  return <HomePage photosData={photoData} />;
}
