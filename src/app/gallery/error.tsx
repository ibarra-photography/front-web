'use client';
import Navigation from 'components/Navigation';
import Link from 'next/link';

import ErrorStyles from './error.module.css';

export default function GalleryErrorPage() {
  return (
    <div className={ErrorStyles.page}>
      <div className={ErrorStyles.header}>
        <h2 className={ErrorStyles.title}>Gallery</h2>
        <Navigation />
      </div>
      <div className={ErrorStyles.container}>
        <h2>Some thing went wrong on loading the gallery</h2>
        <p>Try reloading it ot visit the page later</p>
        <p>If the error persists contact to incidents@ibarraphoto.me</p>
        <Link href={'/gallery'}>Try to reload</Link>
      </div>
    </div>
  );
}
