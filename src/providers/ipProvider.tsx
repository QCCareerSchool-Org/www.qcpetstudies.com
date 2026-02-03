'use client';

import type { FC, PropsWithChildren } from 'react';
import { createContext, useEffect, useState } from 'react';

import { fetchIpAddress } from '@/lib/fetchIpAddress';

interface Props {
  serverIp: string | null;
}

export const IpContext = createContext<string | null | undefined>(undefined);

export const IPProvider: FC<PropsWithChildren<Props>> = ({ serverIp, children }) => {
  const [ ip, setIp ] = useState(serverIp);

  useEffect(() => {
    // doesn't throw
    void fetchIpAddress().then(result => {
      if (result.success) {
        setIp(result.value);
      }
    });
  }, []);

  return (
    <IpContext.Provider value={ip}>
      {children}
    </IpContext.Provider>
  );
};
