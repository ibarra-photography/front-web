import PhotoCard from 'components/PhotoCard';

import { PhotoGridStyles } from './PhotoGridStyles';
import { usePhotoCardGrid } from './usePhotoCardGrid';

export const PhotoGrid = () => {
  const { photoData, fetchingStatus } = usePhotoCardGrid();

  return (
    <PhotoGridStyles.Container>
      {fetchingStatus === 'succeeded' &&
        photoData.map(({ _id, photo, text, title }) => <PhotoCard key={_id} description={text} link={photo} title={title} />)}
      {fetchingStatus === 'loading' && <p>Loading...</p>}
    </PhotoGridStyles.Container>
  );
};
