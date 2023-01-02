import styled from 'styled-components';

export const SpinnerStyles = styled('span')`
  .loader {
    border: 2px solid;
    border-color: transparent #020202;
    width: 48px;
    height: 48px;
    border-radius: 50%;
    display: inline-block;
    position: relative;
    box-sizing: border-box;
    animation: rotation 1.7s linear infinite;
  }
  .loader::after {
    content: '';
    box-sizing: border-box;
    position: absolute;
    left: 50%;
    top: 50%;
    border: 24px solid;
    border-color: transparent rgba(20, 20, 20, 0.15);
    border-radius: 50%;
    transform: translate(-50%, -50%);
  }

  @keyframes rotation {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;
