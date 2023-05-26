import { Suspense } from 'react';

import { PhotoPage } from 'components/layout/PhotoPage/PhotoPage';

import SuspenseFallback from 'components/SuspenseFallback';
import PhotoPageSkeleton from 'components/layout/PhotoPage/PhotoPageSkeleton';

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
