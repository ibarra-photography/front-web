import { Suspense } from 'react';

import { PhotoPage } from 'components/layout/PhotoPage/PhotoPage';

import SuspenseFallback from 'components/SuspenseFallback';
import FullPhotoPage from 'components/layout/FullPhotoPage';

interface IParams {
  params: { photoId: string };
}

export default function FullPhoto({ params }: IParams) {
  console.log('params', params.photoId);
  return (
    <Suspense fallback={<SuspenseFallback />}>
      <FullPhotoPage photoId={params.photoId} />
    </Suspense>
  );
}
