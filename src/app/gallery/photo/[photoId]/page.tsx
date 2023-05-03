import { Suspense } from 'react';

import { PhotoPage } from 'components/layout/PhotoPage/PhotoPage';

import SuspenseFallback from 'components/SuspenseFallback';

interface IParams {
  params: { photoId: string };
}

export default function Photo({ params }: IParams) {
  return (
    <Suspense fallback={<SuspenseFallback />}>
      <PhotoPage photoId={params.photoId} />
    </Suspense>
  );
}
