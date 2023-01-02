import { useEffect, useState } from 'react';

import { PhotoData } from 'domain/Models/Photo/PhotoData';
import { useFetch } from 'hooks/useFetch';
import { ApiPhoto } from 'domain/Models/Photo/ApiPhoto';

const defaultPhotoData: PhotoData = {
  data: [],
  page: '1',
  totalPages: 1
};
const endpoint = new URL(`${process.env.API_URL}/api/v1/photos`);
endpoint.searchParams.append('page', String(1));

export const usePhotoCardGrid = () => {
  const { fetcher, fetchingStatus, response } = useFetch<PhotoData>();

  const [photoData, setPhotoData] = useState<ApiPhoto[]>([]);

  useEffect(() => {
    setPhotoData(response?.data || []);
  }, [response]);

  useEffect(() => {
    fetcher({ url: endpoint.toString() });
  }, []);
  return { photoData, fetchingStatus };
};
