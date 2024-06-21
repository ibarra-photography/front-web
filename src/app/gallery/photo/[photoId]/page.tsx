import { Suspense, use } from 'react';

import { PhotoPage } from 'components/layout/PhotoPage/PhotoPage';

import SuspenseFallback from 'components/SuspenseFallback';
import PhotoPageSkeleton from 'components/layout/PhotoPage/PhotoPageSkeleton';
import { ApiPhoto } from 'domain/Models/Photo/ApiPhoto';
import { fetchPhotos } from 'service/fetchPhotos';

export async function generateStaticParams() {
  const res = await fetchPhotos(1);
  const photos: ApiPhoto[] = res.data;

  return photos.map(photo => photo._id);
}

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
