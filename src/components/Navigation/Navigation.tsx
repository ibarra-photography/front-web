import React from 'react';

import Link from 'next/link';

import { NavigationStyles } from './Navigation.styles';

export const Navigation = () => {
  return (
    <NavigationStyles.NavigationContainer>
      <Link className="link" href={'/gallery'}>
        Gallery
      </Link>
      <Link className="link" href={'/login'}>
        Login
      </Link>
      <Link className="link" href={'/register'}>
        SignIn
      </Link>
    </NavigationStyles.NavigationContainer>
  );
};
