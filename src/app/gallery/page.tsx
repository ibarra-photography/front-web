import PhotoCard from 'components/PhotoCard';
import { ApiPhoto } from 'domain/Models/Photo/ApiPhoto';
import { use, cache } from 'react';

const fetchPhotos = cache((page: number) => {
  const endpoint = new URL(`${process.env.API_URL}/api/v1/photos`);
  endpoint.searchParams.append('page', String(page));

  return fetch(`http://localhost:4000/api/v1/photos?page=${page}`).then(res => res.json());
});

export default function Home() {
  const photos: ApiPhoto[] = use(fetchPhotos(1)).data;
  return (
    <div>{photos ? photos.map(({ _id, photo, text, title }) => <PhotoCard key={_id} description={text} link={photo} title={title} />) : null}</div>
    // <div>{JSON.stringify(photos)}</div>
  );
}
