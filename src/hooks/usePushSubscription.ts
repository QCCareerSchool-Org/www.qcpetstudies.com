import { useContext } from 'react';
import { PushSubscriptionContext, UsePushSubscriptionResult } from '@/providers/PushSubscriptionProvider';

export const usePushSubscription = (): UsePushSubscriptionResult => {
  const context = useContext(PushSubscriptionContext);
  if (context === undefined) {
    throw new Error('usePushSubscription must be used within a PushSusbscriptionProvider');
  }
  return context;
};
