import { Suspense, use } from 'react';

import { PhotoPage } from 'components/layout/PhotoPage/PhotoPage';

import SuspenseFallback from 'components/SuspenseFallback';
import PhotoPageSkeleton from 'components/layout/PhotoPage/PhotoPageSkeleton';
import { ApiPhoto } from 'domain/Models/Photo/ApiPhoto';
import { fetchPhotos } from 'service/fetchPhotos';

interface IParams {
  params: { photoId: string };
}

export default function Photo({ params }: IParams) {
  return (
    <Suspense fallback={<PhotoPageSkeleton />}>
      <PhotoPage photoId={params.photoId} />
    </Suspense>
  );
}
