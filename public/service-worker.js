/* eslint-disable */

const baseUrl = 'https://api.qccareerschool.com';
const websiteName = 'QC Pet Studies';

self.addEventListener('install', function () {
  console.log('service worker installed');
  self.skipWaiting();
});

self.addEventListener('activate', function (event) {
  console.log('service worker activated');
  event.waitUntil(clients.claim());
});

self.addEventListener('push', function (event) {
  const options = {
    // Visual Options,
    body: event.data.body,
    icon: event.data.icon ?? '/android-chrome-512x512.png',
    image: event.data.image,
    badge: event.data.badge ?? '/android-chrome-192x192.png',

    // Behavioral Options
    tag: event.data.tag, // string | undefined
    data: event.data.data, // any | undefined
    requireInteraction: event.data.requireInteraction ?? undefined, // boolean | undefined
    renotify: event.data.renotify, // boolean | undefined
    silent: event.data.silent, // boolean | undefined

    // Both visual & behavioral options
    actions: event.data.actions,

    // Information Option. No visual affect.
    timestamp: Date.now(),
  };
  console.log(options);

  const title = event.data.title ?? 'Notification from QC Pet Studies';

  event.waitUntil(self.registration.showNotification(title, options));
});

self.addEventListener('notificationclick', function (event) {
  console.log(event);
  if (event.action) {
    if (event.notification.data?.actions?.[event.action]?.url) {
      return event.waitUntil(clients.openWindow(event.notification.data.actions[event.action].url));
    }
  }
  const targetUrl = event.notification.data?.url ?? 'https://www.qcpetstudies.com';
  event.waitUntil(clients.openWindow(targetUrl));
});

self.addEventListener('pushsubscriptionchange', function (event) {
  console.log('pushsubscriptionchange', event);
  if (!event.oldSubscription || !event.newSubscription) {
    return;
  }
  event.waitUntil(
    fetch(`${baseUrl}/subscriptions/${event.oldSubscription.endpoint}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        websiteName,
        endpoint: event.newSubscription.endpoint,
        expirationTime: event.newSubscription.expirationTime ?? null,
        p256dh: event.newSubscription.toJSON().keys?.p256dh ?? null,
        auth: event.newSubscription.toJSON().keys?.auth ?? null,
      }),
      credentials: 'include',
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
function isClientFocused() {
  return clients.matchAll({
    type: 'window',
    includeUncontrolled: true,
  }).then(windowClients => {
    const clientIsFocused = false;
    for (let i = 0; i < windowClients.length; i++) {
      const windowClient = windowClients[i];
      if (windowClient.focused) {
        clientIsFocused = true;
        break;
      }
    }
    return { clientIsFocused, windowClients };
  });
}
