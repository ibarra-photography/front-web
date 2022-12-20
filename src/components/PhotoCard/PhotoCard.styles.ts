import styled from 'styled-components';

const PhotoCardContainer = styled('div')`
  height: 300px;
  overflow: hidden;
  width: 300px;
  display: block;
  border-radius: 1px;

  .image {
    height: 300px;
    width: 300px;
    overflow: hidden;
    object-fit: cover;
  }
`;

export const PhotoCardStyles = { PhotoCardContainer };
