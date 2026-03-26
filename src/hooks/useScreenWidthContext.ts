import { useContext } from 'react';

import { ScreenWidthContext } from '@/providers/screenWidthProvider';

export const useScreenWidthContext = (): number | null => {
  const context = useContext(ScreenWidthContext);
  if (context === undefined) {
    throw Error('useScreenWidthContex must be used within a ScreenWidthProvider');
  }
  return context;
};
