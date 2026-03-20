'use client';

import type { FC, PropsWithChildren } from 'react';
import { createContext } from 'react';
import { useWindowListener } from 'use-window-listener';

export const ScrollPositionContext = createContext<number | undefined>(undefined);

export const ScrollPositionProvider: FC<PropsWithChildren> = ({ children }) => {
  const state = useWindowListener('scroll', w => w.scrollY);

  return (
    <ScrollPositionContext.Provider value={state}>
      {children}
    </ScrollPositionContext.Provider>
  );
};
