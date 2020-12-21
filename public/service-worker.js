console.log('Hello from service-worker.js');
import { registerRoute } from 'workbox-routing';
import { StaleWhileRevalidate } from 'workbox-strategies';

registerRoute(
  ({ url }) => url.origin === self.location.origin &&
    url.pathname.startsWith('/static/'),
  new StaleWhileRevalidate({
    cacheName: 'my-cache', // Use the same cache name as before.
  })
);