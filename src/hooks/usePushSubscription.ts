import { useEffect, useState } from 'react';
import { createPushSubscription, deletePushSubscription, getPushSubscription, insertPushSubscription, NotificationPermissionDenied, NotificationsUnsupported, StorageError } from '../lib/pushSubscription';
import { ServiceWorkersUnsupported } from '../lib/serviceWorker';

type PushError = 'notifications unsupported' | 'notifications disabled' | 'service workers unsupported' | 'storage error' | 'unknown';

const subscribeAndStore = async (): Promise<void> => {
  const pushSubscription = await createPushSubscription();
  const p256dh = pushSubscription.getKey('p256dh');
  if (p256dh) {
    console.log(Buffer.from(p256dh).length);
  }
  try {
    await insertPushSubscription(pushSubscription);
  } catch (err) {
    await pushSubscription.unsubscribe();
    throw err;
  }
};

export const usePushSubscription = (): readonly [ subscribed: boolean | null, subscribe: () => Promise<void>, unsubscribe: () => Promise<void>, error?: PushError ] => {
  const [ subscribed, setSubscribed ] = useState<boolean | null>(null);
  const [ error, setError ] = useState<PushError>();

  useEffect(() => {
    getPushSubscription().then(pushSubscription => {
      setSubscribed(pushSubscription !== null);
    }).catch(err => {
      console.error(err);
      if (err instanceof ServiceWorkersUnsupported) {
        setError('service workers unsupported');
      } else {
        setError('unknown');
      }
    });
  }, []);

  const subscribe = async (): Promise<void> => {
    if (subscribed !== false) {
      return;
    }
    setError(undefined);
    try {
      await subscribeAndStore();
      setSubscribed(true);
    } catch (err) {
      console.error(err);
      if (err instanceof NotificationsUnsupported) {
        setError('notifications unsupported');
      } else if (err instanceof NotificationPermissionDenied) {
        setError('notifications disabled');
      } else if (err instanceof ServiceWorkersUnsupported) {
        setError('service workers unsupported');
      } else if (err instanceof StorageError) {
        setError('storage error');
      } else {
        setError('unknown');
      }
    }
  };

  const unsubscribe = async (): Promise<void> => {
    if (subscribed !== true) {
      return;
    }
    try {
      const pushSubscription = await getPushSubscription();
      if (pushSubscription !== null) {
        await pushSubscription.unsubscribe();
        try {
          await deletePushSubscription(pushSubscription);
        } catch (err) { /* ignore errors */ }
      }
      setSubscribed(false);
    } catch (err) {
      console.error(err);
      if (err instanceof ServiceWorkersUnsupported) {
        setError('service workers unsupported');
      } else {
        setError('unknown');
      }
    }
  };

  return [ subscribed, subscribe, unsubscribe, error ] as const;
};
