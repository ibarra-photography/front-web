import React, { useState } from 'react';

interface ICredentials {
  username: string;
  token: string;
}

interface IDashboardContext {
  credentials: ICredentials;
  onSetCredentials: (newCredentials: ICredentials) => void;
}

export const DashboardContext = React.createContext<IDashboardContext>({
  credentials: {} as ICredentials,
  onSetCredentials: (newCredentials: ICredentials) => {}
});

interface IProps {
  children: React.ReactNode;
}

export const DashboardContextProvider = ({ children }: IProps) => {
  const [credentials, setCredentials] = useState<ICredentials>({ username: '', token: '' });

  const onSetCredentials = (newCredentials: ICredentials) => {
    setCredentials(newCredentials);
  };

  return <DashboardContext.Provider value={{ credentials, onSetCredentials }}>{children}</DashboardContext.Provider>;
};
