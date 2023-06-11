const publicKey = 'BHoi0aIhIzYg9Up6vlm9dMS2VzK2dDmDbCv9v5Oj1z_ubfHNgl1rmdzHMgVck0MNB2kjZYm5vCQ53MXHJn1YZzw';
const baseUrl = 'https://push.qccareerschool.com';
const websiteName = 'QC Pet Studies';

const subscribeOptions = {
  userVisibleOnly: true,
  applicationServerKey: publicKey,
};

export type SubscriptionDTO = {
  /** uuid */
  subscriptionId: string;
  /** uuid */
  websiteId: string;
  endpoint: string;
  expirationTime: number | null;
  p256dh: string | null;
  auth: string | null;
  firstName: string | null;
  lastName: string | null;
  emailAddress: string | null;
  errorCode: number | null;
  created: Date;
  modified: Date;
  interests: string[];
};

export type RawSubscriptionDTO = {
  /** uuid */
  subscriptionId: string;
  /** uuid */
  websiteId: string;
  endpoint: string;
  expirationTime: number | null;
  p256dh: string | null;
  auth: string | null;
  firstName: string | null;
  lastName: string | null;
  emailAddress: string | null;
  errorCode: number | null;
  /** date string */
  created: string;
  /** date string */
  modified: string;
  interests: string[];
};

export class StorageError extends Error { }

export type SubscriptionMetaData = {
  firstName: string | null;
  lastName: string | null;
  emailAddress: string | null;
  interests?: string[];
};

/**
 * Creates a push subscription and stores it
 * @param serviceWorkerRegistration the service worker registration
 * @returns the push subscription
 */
export const createPushSubscription = async (serviceWorkerRegistration: ServiceWorkerRegistration, meta: SubscriptionMetaData): Promise<PushSubscription | null> => {
  // register the subscription
  let pushSubscription: PushSubscription | null;
  try {
    pushSubscription = await serviceWorkerRegistration.pushManager.subscribe(subscribeOptions);
  } catch (err) {
    pushSubscription = null;
  }

  if (pushSubscription) {
    // store the subscription and unsubscribe if storage fails
    try {
      await storePushSubscription(pushSubscription, meta);
    } catch (err) {
      await pushSubscription.unsubscribe(); // unsubscribe if there was an storage error
      throw err;
    }
  }

  return pushSubscription;
};

export const deletePushSubscription = async (serviceWorkerRegistration: ServiceWorkerRegistration): Promise<void> => {
  const pushSubscription = await serviceWorkerRegistration.pushManager.getSubscription();
  if (pushSubscription) {
    await pushSubscription.unsubscribe();
    await removePushSubscription(pushSubscription);
  }
};

export const getPushSubscription = async (serviceWorkerRegistration: ServiceWorkerRegistration, meta: SubscriptionMetaData): Promise<PushSubscription | null> => {
  const pushSubscription = await serviceWorkerRegistration.pushManager.getSubscription();
  if (pushSubscription) {
    await storePushSubscription(pushSubscription, meta);
  }
  return pushSubscription;
};

const storePushSubscription = async (pushSubscription: PushSubscription, meta: SubscriptionMetaData): Promise<SubscriptionDTO> => {
  const keys = pushSubscription.toJSON().keys;
  const url = `${baseUrl}/subscriptions`;
  const response = await fetch(url, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      websiteName,
      endpoint: pushSubscription.endpoint,
      expirationTime: pushSubscription.expirationTime,
      p256dh: keys?.p256dh ?? null,
      auth: keys?.auth ?? null,
      firstName: meta.firstName,
      lastName: meta.lastName,
      emailAddress: meta.emailAddress,
      interests: meta.interests,
    }),
  });
  if (!response.ok) {
    throw new StorageError();
  }
  const body = await response.json() as RawSubscriptionDTO;
  return {
    ...body,
    created: new Date(body.created),
    modified: new Date(body.modified),
  };
};

const removePushSubscription = async (pushSubscription: PushSubscription): Promise<void> => {
  const url = `${baseUrl}/subscriptions?websiteName=${encodeURIComponent(websiteName)}&endpoint=${encodeURIComponent(pushSubscription.endpoint)}`;
  const response = await fetch(url, {
    method: 'DELETE',
  });
  if (!response.ok) {
    throw new StorageError();
  }
};
