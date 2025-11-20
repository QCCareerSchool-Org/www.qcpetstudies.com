'use client';

import type { FC, PropsWithChildren } from 'react';
import { createContext, useEffect, useState } from 'react';

export const ScrollPositionContext = createContext<number | undefined>(undefined);

export const ScrollPositionProvider: FC<PropsWithChildren> = ({ children }) => {
  const [ state, dispatch ] = useState(0);

  useEffect(() => {
    queueMicrotask(() => {
      dispatch(window.scrollY);
    });
    const handleScroll = (): void => dispatch(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <ScrollPositionContext.Provider value={state}>
      {children}
    </ScrollPositionContext.Provider>
  );
};
