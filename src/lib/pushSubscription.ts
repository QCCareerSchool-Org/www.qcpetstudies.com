// import type { PushSubscription } from ''
import { getRegistration } from './serviceWorker';
import { urlBase64ToUint8Array } from './urlBase64ToUint8Array';

const publicKey = 'BHoi0aIhIzYg9Up6vlm9dMS2VzK2dDmDbCv9v5Oj1z_ubfHNgl1rmdzHMgVck0MNB2kjZYm5vCQ53MXHJn1YZzw';
const baseUrl = 'https://analytics.qccareerschool.com';
const websiteName = 'QC Pet Studies';

export class NotificationsUnsupported extends Error { }
export class NotificationPermissionDenied extends Error { }
export class StorageError extends Error { }

export const requestNotificationsPermission = async (): Promise<NotificationPermission> => {
  if (!('Notification' in window)) {
    throw new NotificationsUnsupported();
  }
  return new Promise((resolve, reject) => {
    const permissionResult = Notification.requestPermission(resolve);
    if (typeof permissionResult !== 'undefined') {
      permissionResult.then(resolve, reject);
    }
  });
};

export const createPushSubscription = async (): Promise<PushSubscription> => {
  const notificationPermission = await requestNotificationsPermission();
  if (notificationPermission !== 'granted') {
    throw new NotificationPermissionDenied('Notification permission denied');
  }
  const serviceWorkerRegistration = await getRegistration();
  const subscribeOptions = {
    userVisibleOnly: true,
    applicationServerKey: urlBase64ToUint8Array(publicKey),
  };
  return serviceWorkerRegistration.pushManager.subscribe(subscribeOptions);
};

export const getPushSubscription = async (): Promise<PushSubscription | null> => {
  const serviceWorkerRegistration = await getRegistration();
  return serviceWorkerRegistration.pushManager.getSubscription();
};

export const insertPushSubscription = async (pushSubscription: PushSubscription): Promise<void> => {
  const url = `${baseUrl}/subscriptions`;
  const response = await fetch(url, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      websiteName,
      endpoint: pushSubscription.endpoint,
      expirationTime: (pushSubscription as unknown as { expirationTime?: number | null }).expirationTime ?? null,
      p256dh: pushSubscription.toJSON().keys?.p256dh ?? null,
      auth: pushSubscription.toJSON().keys?.auth ?? null,
    }),
    credentials: 'include',
  });
  if (!response.ok) {
    throw new StorageError();
  }
};

export const deletePushSubscription = async (pushSubscription: PushSubscription): Promise<void> => {
  const url = `${baseUrl}/subscriptions?endpoint=${encodeURIComponent(pushSubscription.endpoint)}`;
  const response = await fetch(url, {
    method: 'DELETE',
    headers: { 'Content-Type': 'application/json' },
    credentials: 'include',
  });
  if (!response.ok) {
    throw new StorageError();
  }
};
