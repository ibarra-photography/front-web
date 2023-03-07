import React from 'react';

import Image from 'next/image';

import LandingPageStyles from './LandingPage.module.css';

import landingPageImg from 'domain/media/img/landing-page.jpg';
import LandingPageInformation from 'components/LandingPageInformation';

export const LandingPage = () => {
  return (
    <div className={LandingPageStyles.landingPageWrapper}>
      <div className={LandingPageStyles.imageContainer}>
        <Image src={landingPageImg} fill className={LandingPageStyles.landingImage} alt={''} />
      </div>
      <div className={LandingPageStyles.informationContainer}>
        <LandingPageInformation />
      </div>
    </div>
  );
};
