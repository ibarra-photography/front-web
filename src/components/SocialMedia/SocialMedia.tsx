import React from 'react';

import { FaInstagram, FaTwitter, FaTelegram } from 'react-icons/fa';

import SocialMediaStyles from './SocialMedia.module.css';

export const SocialMedia = () => {
  return (
    <div className={SocialMediaStyles.socialMediaContainer}>
      <div>
        <FaInstagram />
      </div>
      <div>
        <FaTwitter />
      </div>
      <div>
        <FaTelegram />
      </div>
    </div>
  );
};
