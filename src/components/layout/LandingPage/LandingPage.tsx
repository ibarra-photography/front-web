import React from 'react';

import Image, { ImageLoader } from 'next/image';

import { LandingPageStyles } from './LandingPage.styles';

import landingPageImg from 'domain/media/img/landing-page.jpg';

export const LandingPage = () => {
  const myLoader: ImageLoader = ({ src, width, quality }) => {
    return `${src}?w=${width}&q=${quality || 100}`;
  };

  return (
    <LandingPageStyles.LandingPageWrapper>
      <LandingPageStyles.ImageContainer>
        <Image src={landingPageImg} fill className="landing-image" alt={''} />
      </LandingPageStyles.ImageContainer>
      <LandingPageStyles.InformationContainer>Information</LandingPageStyles.InformationContainer>
    </LandingPageStyles.LandingPageWrapper>
  );
};
