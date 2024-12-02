'use client';

import { FC } from 'react';
import { Provider } from '@/providers';

export const RootLayoutWrapper: FC<{
  children: React.ReactNode;
}> = ({ children }) => {
  return (
    <Provider>
      {children}
    </Provider>
  );
};
