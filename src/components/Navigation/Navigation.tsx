import React from 'react';

import Link from 'next/link';

import NavigationStyles from './Navigation.module.css';

type Page = 'home' | 'gallery' | 'login' | 'sign-in';
interface Props {
  page?: Page;
}

export const Navigation = ({ page }: Props) => {
  const currentPage = page ? page : '';
  return (
    <nav className={NavigationStyles.navigationContainer}>
      <Link className={currentPage === 'home' ? NavigationStyles.active : NavigationStyles.link} href={'/'}>
        Home
      </Link>
      <Link className={currentPage === 'gallery' ? NavigationStyles.active : NavigationStyles.link} href={'/gallery/1'}>
        Gallery
      </Link>
      <Link className={currentPage === 'login' ? NavigationStyles.active : NavigationStyles.link} href={'/login'}>
        Login
      </Link>
      <Link className={currentPage === 'sign-in' ? NavigationStyles.active : NavigationStyles.link} href={'/sign-in/wait-list'}>
        SignIn
      </Link>
    </nav>
  );
};
