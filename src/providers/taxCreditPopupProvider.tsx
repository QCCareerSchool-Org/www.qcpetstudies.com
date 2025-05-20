'use client';

import type { FC, PropsWithChildren } from 'react';
import { createContext } from 'react';

import { useToggle } from '@/hooks/useToggle';

export const TaxCreditPopupContext = createContext<[ show: boolean, toggle: () => void ] | undefined>(undefined);

export const TaxCreditPopupProvider: FC<PropsWithChildren> = ({ children }) => {
  const [ show, toggle ] = useToggle();

  return (
    <TaxCreditPopupContext.Provider value={[ show, toggle ]}>
      {children}
    </TaxCreditPopupContext.Provider>
  );
};
