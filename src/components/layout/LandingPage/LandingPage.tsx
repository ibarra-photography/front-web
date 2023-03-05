import React from 'react';

import Image from 'next/image';

import { LandingPageStyles } from './LandingPage.styles';

import landingPageImg from 'domain/media/img/landing-page.jpg';
import LandingPageInformation from 'components/LandingPageInformation';

export const LandingPage = () => {
  return (
    <LandingPageStyles.LandingPageWrapper>
      <LandingPageStyles.ImageContainer>
        <Image src={landingPageImg} fill className="landing-image" alt={''} />
      </LandingPageStyles.ImageContainer>
      <LandingPageStyles.InformationContainer>
        <LandingPageInformation />
      </LandingPageStyles.InformationContainer>
    </LandingPageStyles.LandingPageWrapper>
  );
};
