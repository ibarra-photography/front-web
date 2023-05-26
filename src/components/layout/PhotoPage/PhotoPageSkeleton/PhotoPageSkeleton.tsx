import Navigation from 'components/Navigation';

import styles from './PhotoPageSkeleton.module.css';

export const PhotoPageSkeleton = () => {
  return (
    <div className={styles.photoPageSkeleton}>
      <div></div>
      <div className={styles.imageContainerSkeleton}>
        <div className={styles.imageSkeleton}></div>
      </div>
      <div className={styles.informationContainerSkeleton}>
        <Navigation />
        <h1 className={styles.titleSkeleton}></h1>
        <p></p>
        <div className={styles.footerSkeleton}></div>
      </div>
    </div>
  );
};
