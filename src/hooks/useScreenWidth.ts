import { useContext } from 'react';

import { ScreenWidthContext } from '../providers/ScreenWidthProvider';

export const useScreenWidth = (): number => {
  const context = useContext(ScreenWidthContext);
  if (context === undefined) {
    throw new Error('useScreenWidth must be used within a LocationProvider');
  }
  return context;
};
