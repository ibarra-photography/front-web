import Link from 'next/link';
import React, { use } from 'react';
import { fetchPhotoById } from 'service/fetchPhotoById';

import photoStyles from './FullPhotoPage.module.css';

interface Props {
  photoId: string;
}
interface Response {
  _id: string;
  photo: string;
  text: string;
  title: string;
}

export const FullPhotoPage = ({ photoId }: Props) => {
  const res: Response = use(fetchPhotoById(photoId))[0];

  const { photo } = res;

  const srcBs64 = `data:image/jpeg;base64,${photo}`;
  return (
    <Link href={`/gallery/photo/${photoId}`} className={photoStyles.imageContainer}>
      <img className={photoStyles.image} src={srcBs64} />
    </Link>
  );
};
