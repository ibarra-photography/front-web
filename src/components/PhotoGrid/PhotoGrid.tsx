import PhotoCard from 'components/PhotoCard';

import { ApiPhoto } from 'domain/Models/Photo/ApiPhoto';

import { PhotoGridStyles } from './PhotoGridStyles';

interface Props {
  photos: Array<ApiPhoto>;
}

export const PhotoGrid = ({ photos }: Props) => {
  return (
    <PhotoGridStyles.Container>
      {photos && photos.map(({ _id, photo, text, title }) => <PhotoCard key={_id} description={text} link={photo} title={title} />)}
    </PhotoGridStyles.Container>
  );
};
