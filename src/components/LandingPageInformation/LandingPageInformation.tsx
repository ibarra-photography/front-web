import React from 'react';

import Link from 'next/link';

import Navigation from 'components/Navigation';

import SocialMedia from 'components/SocialMedia';

import LandingPageInformationStyles from './LandingPage.module.css';

import homePageTexts from 'domain/texts/homePage/homePage.json';

export function LandingPageInformation() {
  return (
    <div className={LandingPageInformationStyles.informationContainer}>
      <div className={LandingPageInformationStyles.descriptionContainer}>
        {homePageTexts.description.map(description => (
          <p className={LandingPageInformationStyles.information}>{description}</p>
        ))}
      </div>

      <h3 className={LandingPageInformationStyles.news}>
        Prints available soon!
        <Link href={'notify-me/prints'} className={LandingPageInformationStyles.notifyMe}>
          Notify me
        </Link>
      </h3>
    </div>
  );
}
