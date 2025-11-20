'use client';

import type { FC, PropsWithChildren } from 'react';
import { createContext, useEffect, useState } from 'react';

export const ScreenWidthContext = createContext<number | undefined>(undefined);

export const ScreenWidthProvider: FC<PropsWithChildren> = ({ children }) => {
  const [ state, dispatch ] = useState(0);

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    dispatch(window.innerWidth);
    const handleResize = (): void => { dispatch(window.innerWidth); };
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <ScreenWidthContext.Provider value={state}>
      {children}
    </ScreenWidthContext.Provider>
  );
};
