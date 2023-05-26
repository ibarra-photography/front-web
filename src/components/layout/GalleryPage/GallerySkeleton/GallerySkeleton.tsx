import PhotoSkeleton from './PhotoSkeleton';

import styles from './GallerySkeleton.module.css';

export const GallerySkeleton = () => {
  return (
    <div className={styles.photoSkeletonContainer}>
      <PhotoSkeleton />
      <PhotoSkeleton />
      <PhotoSkeleton />
      <PhotoSkeleton />
      <PhotoSkeleton />
      <PhotoSkeleton />
      <PhotoSkeleton />
      <PhotoSkeleton />
    </div>
  );
};
