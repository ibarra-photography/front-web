import React, { use } from 'react';

import PhotoCard from 'components/PhotoCard';

import { ApiPhoto } from 'domain/Models/Photo/ApiPhoto';

import { fetchPhotos } from 'service/fetchPhotos';

import GalleryStyles from './GalleryPage.module.css';
import Navigation from 'components/Navigation';
import Link from 'next/link';

interface Props {
  page: string;
}

export const GalleryPage = ({ page }: Props) => {
  const res = use(fetchPhotos(+page));
  const photos: ApiPhoto[] = res.data;
  const currentPage: string = res.page;
  const totalPages: number = res.totalPages;

  const calculateNextPage = () => {
    if (+currentPage === totalPages) return totalPages;
    return +currentPage + 1;
  };

  const calculatePrevPage = () => {
    if (currentPage === '1') return 1;
    return +currentPage - 1;
  };

  const nextPage = calculateNextPage();
  const prevPage = calculatePrevPage();

  return (
    <div className={GalleryStyles.page}>
      <div className={GalleryStyles.header}>
        <h2 className={GalleryStyles.title}>Gallery</h2>
        <Navigation />
      </div>
      <div className={GalleryStyles.container}>
        {photos ? photos.map(({ _id, photo, text, title }) => <PhotoCard key={_id} id={_id} description={text} link={photo} title={title} />) : null}
      </div>
      <div className={GalleryStyles.pagination}>
        <Link href={`/gallery/${prevPage}`}> Prev</Link>
        <Link href={`/gallery/${nextPage}`}>Next</Link>
      </div>
    </div>
  );
};
