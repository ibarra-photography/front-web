import Link from 'next/link';
import { use } from 'react';

import { fetchPhotoById } from 'service/fetchPhotoById';

import photoStyles from './page.module.css';
interface IParams {
  params: { photoId: string };
}

interface Response {
  _id: string;
  photo: string;
  text: string;
  title: string;
}

export default function Photo({ params }: IParams) {
  const res: Response = use(fetchPhotoById(params.photoId))[0];

  console.log('res.photo', res.photo);

  const srcBs64 = `data:image/jpeg;base64,${res.photo}`;

  return (
    <div className={photoStyles.photoPage}>
      <div className={photoStyles.imageContainer}>
        <img className={photoStyles.image} src={srcBs64} />
      </div>
      <div className={photoStyles.informationContainer}>
        <h2>{res.title}</h2>
        <p>
          {res.text} Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae numquam, doloribus explicabo vitae quas recusandae deserunt, cum
          impedit, beatae amet alias debitis minima repudiandae. Rem quis iure veritatis sed explicabo?
        </p>
        <Link href={'/gallery/1'}>Gallery</Link>
      </div>
    </div>
  );
}
