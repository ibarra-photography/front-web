import React from 'react';

import Link from 'next/link';

import NavigationStyles from './Navigation.module.css';

export const Navigation = () => {
  return (
    <nav className={NavigationStyles.navigationContainer}>
      <Link className={NavigationStyles.link} href={'/gallery'}>
        Gallery
      </Link>
      <Link className={NavigationStyles.link} href={'/login'}>
        Login
      </Link>
      <Link className={NavigationStyles.link} href={'/sign-in/wait-list'}>
        SignIn
      </Link>
    </nav>
  );
};
