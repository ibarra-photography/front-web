import React, { use } from 'react';

import PhotoCard from 'components/PhotoCard';

import { ApiPhoto } from 'domain/Models/Photo/ApiPhoto';

import { fetchPhotos } from 'service/fetchPhotos';

import GalleryStyles from './GalleryPage.module.css';

export const GalleryPage = () => {
  const photos: ApiPhoto[] = use(fetchPhotos(1)).data;
  return (
    <div>
      <h2>Gallery</h2>
      <div className={GalleryStyles.container}>
        {photos ? photos.map(({ _id, photo, text, title }) => <PhotoCard key={_id} description={text} link={photo} title={title} />) : null}
      </div>
    </div>
  );
};
