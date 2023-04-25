import React from 'react';

import Image, { ImageLoader } from 'next/image';

import { b64toBlob } from 'application/utils/base64toBlob';

import { PhotoCardStyles } from './PhotoCard.styles';
import './PhotoCard.css';
import { redirect } from 'next/navigation';
import Link from 'next/link';
interface Props {
  link: Blob;
  title: string;
  description: string;
  id: string;
}

export const PhotoCard = ({ link, title, description, id }: Props) => {
  const srcBs64 = `data:image/jpeg;base64,${link}`;

  const myLoader: ImageLoader = ({ src, width, quality }) => {
    return `${src}?w=${width}&q=${quality || 100}`;
  };

  return (
    <Link href={`gallery/photo/${id}`} aria-label="image" className="container">
      <img className="image" src={srcBs64} />
    </Link>
  );
};
