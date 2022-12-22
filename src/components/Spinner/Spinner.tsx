import React from 'react';

import { SpinnerStyles } from './Spinner.styles';

export const Spinner = () => {
  return (
    <SpinnerStyles>
      <span className="loader"></span>
    </SpinnerStyles>
  );
};
