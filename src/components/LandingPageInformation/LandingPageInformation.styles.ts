import styled from 'styled-components';

const InformationContainer = styled('div')`
  display: flex;
  flex-direction: column;
  padding: 1rem;
  gap: 2rem;
  color: white;
  height: 100%;
`;

const NavigationContainer = styled('div')`
  flex: 0.5;
`;

const Information = styled('p')`
  flex: 4;
  text-align: justify;
  padding: 1rem 3rem;
  letter-spacing: 0.1rem;
`;

const News = styled('h2')`
  flex: 1;
  flex-direction: column;
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: 400;
  gap: 3px;
  .notify-me {
    color: white;
    /* text-decoration: none; */
    font-size: 0.75rem;
  }
`;

const SocialMediaContainer = styled('div')`
  flex: 1;
`;

const Rights = styled('p')`
  font-size: 0.7rem;
  text-align: center;
`;

export const LandingPageInformationStyles = { News, InformationContainer, NavigationContainer, Information, SocialMediaContainer, Rights };
