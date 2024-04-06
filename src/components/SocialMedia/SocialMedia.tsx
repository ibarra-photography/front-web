import Link from 'next/link';
import React from 'react';

import { FaInstagram, FaTwitter, FaTelegram } from 'react-icons/fa';

import SocialMediaStyles from './SocialMedia.module.css';

export const SocialMedia = () => {
  return (
    <div className={SocialMediaStyles.socialMediaContainer}>
      <div className={SocialMediaStyles.icon}>
        <Link href={'https://www.instagram.com/ibarra__photography/'} target="_blank" rel="noopener noreferrer">
          <FaInstagram />
        </Link>
      </div>
      <div className={SocialMediaStyles.icon}>
        <Link href={'https://twitter.com/ibarra_photo'} target="_blank" rel="noopener noreferrer">
          <FaTwitter />
        </Link>
      </div>
      <div className={SocialMediaStyles.icon}>
        <Link href={'/'}>
          <FaTelegram />
        </Link>
      </div>
    </div>
  );
};
