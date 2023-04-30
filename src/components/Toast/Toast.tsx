import React, { ReactNode } from 'react';

import toastStyles from './Toast.module.css';

interface Props {
  children: ReactNode;
}

export const Toast = ({ children }: Props) => {
  return <div className={toastStyles.container}>{children}</div>;
};
