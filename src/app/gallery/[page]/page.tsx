import { Suspense } from 'react';

import { GalleryPage } from 'components/layout/GalleryPage/GalleryPage';
import { GallerySuspense } from 'components/layout/GalleryPage/GallerySuspense';

interface IParams {
  params: { page: string };
}

export default function Home({ params }: IParams) {
  return (
    <Suspense fallback={<GallerySuspense />}>
      <GalleryPage page={params.page} />;
    </Suspense>
  );
}
