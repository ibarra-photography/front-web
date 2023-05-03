import Navigation from 'components/Navigation';
import Link from 'next/link';
import React, { use } from 'react';
import { fetchPhotoById } from 'service/fetchPhotoById';

import photoStyles from './page.module.css';

interface Props {
  photoId: string;
}
interface Response {
  _id: string;
  photo: string;
  text: string;
  title: string;
}

export const PhotoPage = ({ photoId }: Props) => {
  const res: Response = use(fetchPhotoById(photoId))[0];

  const { photo, text, title } = res;

  const srcBs64 = `data:image/jpeg;base64,${photo}`;
  return (
    <div className={photoStyles.photoPage}>
      <div></div>
      <div className={photoStyles.imageContainer}>
        <img className={photoStyles.image} src={srcBs64} />
      </div>
      <div className={photoStyles.informationContainer}>
        <Navigation />
        <h1>{title}</h1>
        <p>{text}</p>
        <div className={photoStyles.footer}>
          <Link href={'notify-me/prints'}>Prints available soon!! </Link>
        </div>
      </div>
    </div>
  );
};
