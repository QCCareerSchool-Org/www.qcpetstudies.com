import { useContext } from 'react';

import { IpContext } from '@/providers/ipProvider';

export const useIp = (): string | null => {
  const context = useContext(IpContext);
  if (context === undefined) {
    throw Error('useIP must be used within an IpProvider');
  }
  return context;
};
