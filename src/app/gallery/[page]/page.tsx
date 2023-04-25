import { GalleryPage } from 'components/layout/GalleryPage/GalleryPage';

interface IParams {
  params: { page: string };
}

export default function Home({ params }: IParams) {
  console.log(params.page);
  return <GalleryPage page={params.page} />;
}
