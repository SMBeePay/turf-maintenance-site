// Kill-switch service worker.
//
// An earlier version of this file cached /, /services, /locations, /about and
// /contact "cache-first" under a cache name that never changed. After each
// deploy, returning visitors were served stale HTML that pointed at
// stylesheets which no longer existed, so those pages rendered as unstyled
// text. The site no longer registers a service worker; this replacement
// exists only so browsers that still have the old one installed pick it up,
// wipe its caches, unregister it and reload the open pages fresh.

self.addEventListener('install', () => {
  self.skipWaiting();
});

self.addEventListener('activate', (event) => {
  event.waitUntil(
    (async () => {
      const keys = await caches.keys();
      await Promise.all(keys.map((key) => caches.delete(key)));
      await self.registration.unregister();
      const clients = await self.clients.matchAll({ type: 'window' });
      clients.forEach((client) => client.navigate(client.url));
    })()
  );
});
