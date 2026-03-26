import { useContext } from 'react';

import { ScrollPositionContext } from '@/providers/scrollPositionProvider';

export const useScrollPositionContext = (): number | null => {
  const context = useContext(ScrollPositionContext);
  if (context === undefined) {
    throw Error('useScrollPositionContext must be used within a ScrollPositionProvider');
  }
  return context;
};
