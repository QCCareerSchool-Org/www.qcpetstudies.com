'use client';

import type { FC, PropsWithChildren } from 'react';
import { createContext } from 'react';
import { useWindowListener } from 'use-window-listener';

export const ScreenWidthContext = createContext<number | undefined>(undefined);

export const ScreenWidthProvider: FC<PropsWithChildren> = ({ children }) => {
  const state = useWindowListener('resize', w => w.innerWidth);

  return (
    <ScreenWidthContext.Provider value={state}>
      {children}
    </ScreenWidthContext.Provider>
  );
};
