import React from 'react';
import { ThemeProvider } from 'styled-components';

import { Cormorant_Garamond } from '@next/font/google';

import { HomePageStyles } from './HomePage.styles';
import PhotoGrid from 'components/PhotoGrid';

const font = Cormorant_Garamond({ weight: ['300'] });

export const HomePage = () => {
  return (
    <ThemeProvider theme={{}}>
      <HomePageStyles.HomePageContainer className={font.className}>
        <HomePageStyles.Title>Ibarra Photography</HomePageStyles.Title>
        <PhotoGrid />
      </HomePageStyles.HomePageContainer>
    </ThemeProvider>
  );
};
