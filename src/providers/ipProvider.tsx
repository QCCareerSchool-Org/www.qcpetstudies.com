'use client';

import type { FC, PropsWithChildren } from 'react';
import { createContext, useEffect, useState } from 'react';

import { fetchIpAddress } from '@/lib/fetchIpAddress';

interface Props {
  clientIp: string | null;
}

export const IpContext = createContext<string | null | undefined>(undefined);

export const IPProvider: FC<PropsWithChildren<Props>> = ({ clientIp, children }) => {
  const [ ip, setIp ] = useState(clientIp);

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
