import React from 'react';
import { ThemeProvider } from 'styled-components';

import { Cormorant_Garamond } from '@next/font/google';

import { HomePageStyles } from './HomePage.styles';
import PhotoGrid from 'components/PhotoGrid';
import { PhotoData } from 'domain/Models/Photo/PhotoData';

const font = Cormorant_Garamond({ weight: ['300'] });

interface Props {
  photosData: PhotoData;
}

export const HomePage = ({ photosData }: Props) => {
  return (
    <ThemeProvider theme={{}}>
      <HomePageStyles.HomePageContainer className={font.className}>
        <HomePageStyles.Title>Ibarra Photography</HomePageStyles.Title>
        {photosData?.data && <PhotoGrid photos={photosData.data} />}
      </HomePageStyles.HomePageContainer>
    </ThemeProvider>
  );
};
