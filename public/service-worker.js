const baseUrl = 'https://push.qccareerschool.com';
const websiteName = 'QC Pet Studies';

self.addEventListener('install', () => {
  console.log('service worker installed');
  self.skipWaiting();
});

self.addEventListener('activate', event => {
  console.log('service worker activated');
  event.waitUntil(clients.claim());
});

self.addEventListener('push', event => {
  const data = event.data.json();

  const options = {
    // Visual Options,
    body: data.body,
    icon: data.icon ?? '/android-chrome-512x512.png',
    image: data.image,
    badge: data.badge ?? '/android-chrome-192x192.png',

    // Behavioral Options
    tag: data.tag, // string | undefined
    data: data.data, // any | undefined
    requireInteraction: data.requireInteraction ?? undefined, // boolean | undefined
    renotify: data.renotify, // boolean | undefined
    silent: data.silent, // boolean | undefined

    // Both visual & behavioral options
    actions: data.actions,

    // Information Option. No visual affect.
    timestamp: Date.now(),
  };
  console.log('event', event);
  console.log('options', options);

  const title = data.title ?? 'Notification from QC Pet Studies';

  event.waitUntil(self.registration.showNotification(title, options));
});

self.addEventListener('notificationclick', event => {
  console.log(event);
  if (event.action) {
    if (event.notification.data?.actions?.[event.action]?.url) {
      return event.waitUntil(clients.openWindow(event.notification.data.actions[event.action].url));
    }
  }
  const targetUrl = event.notification.data?.url ?? 'https://www.qcpetstudies.com';
  event.waitUntil(clients.openWindow(targetUrl));
});

self.addEventListener('pushsubscriptionchange', event => {
  console.log('pushsubscriptionchange', event);
  if (!event.oldSubscription || !event.newSubscription) {
    return;
  }
  const keys = event.newSubscription.toJSON().keys;
  // TODO: add fetch request to a queue to get processed when we know the client is online
  event.waitUntil(
    fetch(`${baseUrl}/subscriptions?websiteName=${encodeURIComponent(websiteName)}&endpoint=${encodeURIComponent(event.oldSubscription.endpoint)}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        websiteName,
        endpoint: event.newSubscription.endpoint,
        expirationTime: event.newSubscription.expirationTime ?? null,
        p256dh: keys?.p256dh ?? null,
        auth: keys?.auth ?? null,
      }),
    }),
  );
});

/**
 * Checks to see if the website is currently in focus
 *
 * Example usage:
 * isClientFocused().then(({ clientIsFocused, windowClients }) => {
 *   windowClients.forEach(function (windowClient) {
 *     windowClient.postMessage({
 *       message: 'Received a push message.',
 *       time: new Date().toString(),
 *     });
 *   });
 * });
 * @returns a promise that resolves to an object that indicates if the website is in focus and a list of the clients
 */
const isClientFocused = () => {
  return clients.matchAll({
    type: 'window',
    includeUncontrolled: true,
  }).then(windowClients => {
    const clientIsFocused = windowClients.some(windowClient => windowClient.focused);
    return { clientIsFocused, windowClients };
  });
}
