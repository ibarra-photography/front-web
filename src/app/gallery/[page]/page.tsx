import { GalleryPage } from 'components/layout/GalleryPage/GalleryPage';
import SuspenseFallback from 'components/SuspenseFallback';
import { Suspense } from 'react';

interface IParams {
  params: { page: string };
}

export default function Home({ params }: IParams) {
  return (
    <Suspense fallback={<SuspenseFallback />}>
      <GalleryPage page={params.page} />;
    </Suspense>
  );
}
