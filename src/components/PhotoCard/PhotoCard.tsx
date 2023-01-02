import React from 'react';

import Image, { ImageLoader } from 'next/image';

import { b64toBlob } from 'application/utils/base64toBlob';

import { PhotoCardStyles } from './PhotoCard.styles';
interface Props {
  link: string;
  title: string;
  description: string;
}

export const PhotoCard = ({ link, title, description }: Props) => {
  const blob = b64toBlob(link);
  const src = window.URL.createObjectURL(blob);

  const myLoader: ImageLoader = ({ src, width, quality }) => {
    return `${src}?w=${width}&q=${quality || 100}`;
  };
  return (
    <PhotoCardStyles.PhotoCardContainer aria-label="image">
      <Image className="image" loader={myLoader} src={src} alt={description} width={200} height={200} />
    </PhotoCardStyles.PhotoCardContainer>
  );
};
