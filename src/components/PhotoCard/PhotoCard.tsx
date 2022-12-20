import React from 'react';

import Image, { ImageLoader } from 'next/image';

import { b64toBlob } from 'application/utils/base64toBlob';

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
    <div aria-label="image">
      <Image loader={myLoader} src={src} alt={description} layout="fix" width={200} height={200} />
    </div>
  );
};
