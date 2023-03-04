import styled from 'styled-components';

const LandingPageWrapper = styled('div')`
  display: flex;
  width: 100%;
  height: 100vh;
`;

const ImageContainer = styled('div')`
  flex: 2;
  overflow: hidden;

  position: relative;
  .landing-image {
    overflow: hidden;
    object-fit: cover;
  }
`;

const InformationContainer = styled('div')`
  flex: 1;
  background-image: linear-gradient(to right top, #252527, #2a2a2b, #2f2f30, #343434, #393939);
  box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
  backdrop-filter: blur(8px);
  -webkit-backdrop-filter: blur(8px);
`;

export const LandingPageStyles = { LandingPageWrapper, ImageContainer, InformationContainer };
