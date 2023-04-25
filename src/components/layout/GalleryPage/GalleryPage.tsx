import React, { use } from 'react';

import { redirect } from 'next/navigation';

import PhotoCard from 'components/PhotoCard';

import { ApiPhoto } from 'domain/Models/Photo/ApiPhoto';

import { fetchPhotos } from 'service/fetchPhotos';

import GalleryStyles from './GalleryPage.module.css';
import Navigation from 'components/Navigation';

export const GalleryPage = () => {
  const photos: ApiPhoto[] = use(fetchPhotos(1)).data;

  return (
    <div className={GalleryStyles.page}>
      <div className={GalleryStyles.header}>
        <h2 className={GalleryStyles.title}>Gallery</h2>
        <Navigation />
      </div>
      <div className={GalleryStyles.container}>
        {photos ? photos.map(({ _id, photo, text, title }) => <PhotoCard key={_id} id={_id} description={text} link={photo} title={title} />) : null}
      </div>
    </div>
  );
};
