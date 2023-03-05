import React from 'react';

import Link from 'next/link';

import Navigation from 'components/Navigation';

import { LandingPageInformationStyles } from './LandingPageInformation.styles';
import SocialMedia from 'components/SocialMedia';

export function LandingPageInformation() {
  return (
    <LandingPageInformationStyles.InformationContainer>
      <LandingPageInformationStyles.NavigationContainer>
        <Navigation />
      </LandingPageInformationStyles.NavigationContainer>
      <LandingPageInformationStyles.Information>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero soluta ex ea et pariatur a obcaecati quis, dolores maxime. Nostrum perferendis
        reiciendis temporibus aspernatur et culpa beatae maiores nisi id! Labore eius, odio temporibus nesciunt ab maiores veniam ipsam odit
        laudantium ratione nihil. Vel dolorum doloremque, quam cum, eum cupiditate reiciendis maiores accusamus sunt, perferendis dolores aliquid
        laboriosam minus tempora? Rerum vero aperiam corrupti tempora provident quia et ratione officia voluptate sequi. Ad dignissimos ipsum id illum
        cumque alias fugiat delectus error maiores nostrum? Exercitationem deserunt veniam repudiandae fuga molestiae.
      </LandingPageInformationStyles.Information>
      <LandingPageInformationStyles.Information>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Doloribus ipsam ab laborum sint explicabo neque architecto tempore quaerat soluta
        distinctio? Repellendus, porro quod magnam perspiciatis possimus dolor soluta aut ad. Quos, voluptates perferendis iste commodi harum id amet
        esse delectus nemo dolor repellat quod totam dolorem, cupiditate molestiae est eaque ut accusamus a reiciendis! Laudantium totam magnam
        corrupti delectus in!
      </LandingPageInformationStyles.Information>
      <LandingPageInformationStyles.News>
        Prints available soon!
        <Link href={'notify-me/prints'} className="notify-me">
          Notify me
        </Link>
      </LandingPageInformationStyles.News>
      <LandingPageInformationStyles.SocialMediaContainer>
        <SocialMedia />
      </LandingPageInformationStyles.SocialMediaContainer>
      <LandingPageInformationStyles.Rights>© ibarra_photography 2023</LandingPageInformationStyles.Rights>
    </LandingPageInformationStyles.InformationContainer>
  );
}
