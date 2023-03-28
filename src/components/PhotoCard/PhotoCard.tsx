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
  // const blob = b64toBlob(link);
  const src = window.URL.createObjectURL(link);

  // const src = '';

  const myLoader: ImageLoader = ({ src, width, quality }) => {
    return `${src}?w=${width}&q=${quality || 100}`;
  };
  return (
    <div aria-label="image" className="container">
      <Image className="image" loader={myLoader} src={src} alt={description} width={200} height={200} />
    </div>
  );
};
