import React from 'react';

import Navigation from 'components/Navigation';
import SuspenseFallback from 'components/SuspenseFallback';

import GalleryStyles from './GalleryPage.module.css';
import GallerySkeleton from './GallerySkeleton';

export const GallerySuspense = () => {
  return (
    <div className={GalleryStyles.page}>
      <div className={GalleryStyles.header}>
        <h2 className={GalleryStyles.title}>Gallery</h2>
        <Navigation />
      </div>
      <GallerySkeleton />
    </div>
  );
};
