import styled from 'styled-components';

const PhotoCardContainer = styled('div')`
  height: 300px;
  overflow: hidden;
  width: 300px;
  display: block;
  border-radius: 1px;
  box-shadow: 10px 10px 25px 0px rgba(0, 0, 0, 0.64);

  .image {
    height: 300px;
    width: 300px;
    overflow: hidden;
    object-fit: cover;
  }
`;

export const PhotoCardStyles = { PhotoCardContainer };
