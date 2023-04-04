import React from 'react';

import Image, { ImageLoader } from 'next/image';

import { b64toBlob } from 'application/utils/base64toBlob';

import { PhotoCardStyles } from './PhotoCard.styles';
import './PhotoCard.css';
interface Props {
  link: Blob;
  title: string;
  description: string;
}

export const PhotoCard = ({ link, title, description }: Props) => {
  const srcBs64 = `data:image/jpeg;base64,${link}`;

  const myLoader: ImageLoader = ({ src, width, quality }) => {
    return `${src}?w=${width}&q=${quality || 100}`;
  };
  return (
    <div aria-label="image" className="container">
      {/* <Image className="image" loader={myLoader} src={srcBs64} alt={description} width={200} height={200} /> */}
      <img className="image" src={srcBs64} />
    </div>
  );
};
