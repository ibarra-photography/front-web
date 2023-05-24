import React, { ReactNode } from 'react';

import toastStyles from './Toast.module.css';

interface Props {
  children: ReactNode;
  styles?: 'error';
}

export const Toast = ({ children, styles }: Props) => {
  return <div className={`${toastStyles.container} ${styles === 'error' && toastStyles.error}`}>{children}</div>;
};
