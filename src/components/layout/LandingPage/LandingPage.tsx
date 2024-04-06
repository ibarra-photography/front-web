import React from 'react';

import Image from 'next/image';

import Navigation from 'components/Navigation';

import LandingPageStyles from './LandingPage.module.css';

import landingPageImg from '../../../../public/media/img/landing-page.jpg';
import LandingPageInformation from 'components/LandingPageInformation';

export const LandingPage = () => {
  return (
    <main className={LandingPageStyles.landingPageWrapper}>
      <section className={LandingPageStyles.heroSection}>
        <Image src={landingPageImg} height="500" width="1000" className={LandingPageStyles.landingImage} alt={'Image of a vulture in the sky'} />
        <div className={LandingPageStyles.titleContainer}>
          <h1 className={LandingPageStyles.title}>Ibarra Photography</h1>
          <nav className={LandingPageStyles.navigation}>
            <Navigation page="home" />
          </nav>
        </div>
      </section>

      <section>
        <div className={LandingPageStyles.informationContainer}>
          <LandingPageInformation />
        </div>
      </section>
    </main>
  );
};
