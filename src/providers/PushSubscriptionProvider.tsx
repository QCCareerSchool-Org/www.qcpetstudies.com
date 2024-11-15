import type { FC, PropsWithChildren } from 'react';
import { createContext, useEffect, useReducer } from 'react';

import { createPushSubscription, deletePushSubscription, getPushSubscription, removePushSubscription, SubscriptionMetaData } from '../lib/pushSubscription';
import { getRegistration } from '../lib/serviceWorker';

export const PushSubscriptionContext = createContext<UsePushSubscriptionResult | undefined>(undefined);

type PushSubscriptionState = {
  serviceWorkerRegistration: ServiceWorkerRegistration | null;
  pushSubscription: PushSubscription | false | null;
  notificationPermissionStatus: PermissionStatus | null;
  showInfo: boolean;
  showError: boolean;
};

type PushSubscriptionAction =
  | { type: 'SERVICE_WORKER_REGISTRATION_SUCCEEDED'; payload: ServiceWorkerRegistration }
  | { type: 'SERVICE_WORKER_REGISTRATION_FAILED' }
  | { type: 'PERMISSION_STATUS_SET'; payload: PermissionStatus }
  | { type: 'PUSH_SUBSCRIPTION_FOUND'; payload: PushSubscription }
  | { type: 'PUSH_SUBSCRIPTION_MISSING' }
  | { type: 'PUSH_SUBSCRIPTION_REQUESTED' }
  | { type: 'PUSH_SUBSCRIPTION_CREATED'; payload: { pushSubscription: PushSubscription } }
  | { type: 'PUSH_SUBSCRIPTION_DENIED' }
  | { type: 'PUSH_SUBSCRIPTION_DELETED' }
  | { type: 'INFO_DISMISSED' }
  | { type: 'ERROR_DISMISSED' };

const pushSubscriptionReducer = (state: PushSubscriptionState, action: PushSubscriptionAction): PushSubscriptionState => {
  switch (action.type) {
    case 'SERVICE_WORKER_REGISTRATION_SUCCEEDED':
      return { ...state, serviceWorkerRegistration: action.payload };
    case 'SERVICE_WORKER_REGISTRATION_FAILED':
      return { ...state, serviceWorkerRegistration: null, pushSubscription: null };
    case 'PERMISSION_STATUS_SET':
      return { ...state, notificationPermissionStatus: action.payload };
    case 'PUSH_SUBSCRIPTION_FOUND':
      return { ...state, pushSubscription: action.payload };
    case 'PUSH_SUBSCRIPTION_MISSING':
      return { ...state, pushSubscription: false };
    case 'PUSH_SUBSCRIPTION_REQUESTED':
      return { ...state, showInfo: true };
    case 'PUSH_SUBSCRIPTION_CREATED':
      return { ...state, pushSubscription: action.payload.pushSubscription, showInfo: false };
    case 'PUSH_SUBSCRIPTION_DENIED':
      return { ...state, showError: true, showInfo: false };
    case 'PUSH_SUBSCRIPTION_DELETED':
      return { ...state, pushSubscription: false };
    case 'INFO_DISMISSED':
      return { ...state, showInfo: false };
    case 'ERROR_DISMISSED':
      return { ...state, showError: false };
  }
};

const pushSubscriptionInitialState: PushSubscriptionState = {
  serviceWorkerRegistration: null,
  pushSubscription: null,
  notificationPermissionStatus: null,
  showInfo: false,
  showError: false,
};

export type UsePushSubscriptionResult = [
  pushSubscription: PushSubscription | false | null,
  subscribe: (meta: SubscriptionMetaData, showPrompt?: boolean) => void,
  unsubscribe: () => void,
  info: boolean,
  dismissInfo: () => void,
  error: boolean,
  dismissError: () => void,
];

export const PushSubscriptionProvider: FC<PropsWithChildren> = ({ children }) => {
  const [ state, dispatch ] = useReducer(pushSubscriptionReducer, pushSubscriptionInitialState);

  // on load, register the service worker
  useEffect(() => {
    getRegistration().then(registration => {
      if (registration) {
        dispatch({ type: 'SERVICE_WORKER_REGISTRATION_SUCCEEDED', payload: registration });
      } else {
        dispatch({ type: 'SERVICE_WORKER_REGISTRATION_FAILED' });
      }
    }).catch(console.error);
  }, []);

  // after registering the service worker, find out if we already have a subscription and, re-store it if we do
  useEffect(() => {
    if (!state.serviceWorkerRegistration) {
      return;
    }
    getPushSubscription(state.serviceWorkerRegistration).then(pushSubscription => {
      if (pushSubscription) {
        dispatch({ type: 'PUSH_SUBSCRIPTION_FOUND', payload: pushSubscription });
      } else {
        dispatch({ type: 'PUSH_SUBSCRIPTION_MISSING' });
      }
    }).catch(console.error);
  }, [ state.serviceWorkerRegistration ]);

  useEffect(() => {
    if (!('permissions' in navigator)) {
      return;
    }
    navigator.permissions.query({ name: 'notifications' }).then(permissionStatus => {
      dispatch({ type: 'PERMISSION_STATUS_SET', payload: permissionStatus });
    }).catch(console.error);
  }, []);

  // set up change handler for notification permission
  useEffect(() => {
    if (!state.pushSubscription || !state.notificationPermissionStatus) {
      return;
    }

    const pushSubscription = state.pushSubscription;
    const permissionStatus = state.notificationPermissionStatus;

    const handler = (): void => {
      if (permissionStatus.state !== 'granted') {
        removePushSubscription(pushSubscription).then(() => {
          dispatch({ type: 'PUSH_SUBSCRIPTION_DELETED' });
        }).catch(console.error);
      }
    };

    state.notificationPermissionStatus.addEventListener('change', handler);

    return () => permissionStatus.removeEventListener('change', handler);
  }, [ state.pushSubscription, state.notificationPermissionStatus ]);

  const subscribe = (meta: SubscriptionMetaData, showPrompt = true): void => {
    if (!state.serviceWorkerRegistration) {
      return;
    }
    if (showPrompt) {
      dispatch({ type: 'PUSH_SUBSCRIPTION_REQUESTED' });
    }
    createPushSubscription(state.serviceWorkerRegistration, meta).then(s => {
      if (s) {
        dispatch({ type: 'PUSH_SUBSCRIPTION_CREATED', payload: { pushSubscription: s } });
      } else {
        dispatch({ type: 'PUSH_SUBSCRIPTION_DENIED' });
      }
    }).catch(console.error);
  };

  const unsubscribe = (): void => {
    if (!state.serviceWorkerRegistration) {
      return;
    }
    deletePushSubscription(state.serviceWorkerRegistration).then(() => {
      dispatch({ type: 'PUSH_SUBSCRIPTION_DELETED' });
    }).catch(console.error);
  };

  const dismissInfo = (): void => {
    dispatch({ type: 'INFO_DISMISSED' });
  };

  const dismissError = (): void => {
    dispatch({ type: 'ERROR_DISMISSED' });
  };

  return (
    <PushSubscriptionContext.Provider value={[ state.pushSubscription, subscribe, unsubscribe, state.showInfo, dismissInfo, state.showError, dismissError ]}>
      {children}
    </PushSubscriptionContext.Provider>
  );
};
