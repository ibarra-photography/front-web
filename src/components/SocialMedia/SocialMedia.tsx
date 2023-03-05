import React from 'react';

import { FaInstagram, FaTwitter, FaTelegram } from 'react-icons/fa';

import { SocialMediaStyles } from './SocialMedia.styles';

export const SocialMedia = () => {
  return (
    <SocialMediaStyles.SocialMediaContainer>
      <div>
        <FaInstagram />
      </div>
      <div>
        <FaTwitter />
      </div>
      <div>
        <FaTelegram />
      </div>
    </SocialMediaStyles.SocialMediaContainer>
  );
};
