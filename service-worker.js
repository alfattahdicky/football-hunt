importScripts('https://storage.googleapis.com/workbox-cdn/releases/3.6.3/workbox-sw.js');
if (workbox) console.log('Workbox Berhasil dimuat');
else console.log('Workbox gagal dimuat');

workbox.precaching.precacheAndRoute([
  {
    url: '/',
    revision: '1'
  },
  {
    url: '/index.html',
    revision: '1'
  },
  {
    url: '/nav.html',
    revision: 'null'
  },
  {
    url: '/team.html',
    revision: 'null'
  },
  {
    url: '/push.js',
    revision: 'null'
  },
  {
    url: '/manifest.json',
    revision: 'null'
  },
  {
    url: '/pages/home.html',
    revision: 'null'
  },
  {
    url: '/pages/match.html',
    revision: 'null'
  },
  {
    url: '/pages/saved.html',
    revision: 'null'
  },
  {
    url: '/style/materialize.min.css',
    revision: 'null'
  },
  {
    url: '/style/style.css',
    revision: 'null'
  },
  {
    url: '/script/api.js',
    revision: 'null'
  },
  {
    url: '/script/db.js',
    revision: 'null'
  },
  {
    url: '/script/idb.js',
    revision: 'null'
  },
  {
    url: '/script/materialize.min.js',
    revision: 'null'
  },
  {
    url: '/script/nav.js',
    revision: 'null'
  },
  {
    url: '/script/script.js',
    revision: 'null'
  },
  {
    url: '/script/sw-register.js',
    revision: 'null'
  },
  {
    url: '/assets/1.jpg',
    revision: 'null'
  },
  {
    url: '/assets/2.jpg',
    revision: 'null'
  },
  {
    url: '/assets/3.jpg',
    revision: 'null'
  },
  {
    url: '/assets/icon/icon-144x144.png',
    revision: 'null'
  },
  {
    url: '/assets/icon/icon-192x192.png',
    revision: 'null'
  },
  {
    url: '/assets/icon/icon-512x512.png',
    revision: 'null'
  },
], {
  ignoreUrlParameterMatching: [/.*/],
})

workbox.routing.registerRoute(
  new RegExp('/pages/'),
  workbox.strategies.staleWhileRevalidate({
    cacheName: 'pages',
  })
)

workbox.routing.registerRoute(
  /\.(?:png|gif|jpg|jpeg|svg)$/,
  workbox.strategies.cacheFirst({
    cacheName: 'assets',
    plugins: [
      new workbox.expiration.Plugin({
        maxEntries: 30,
        maxAgeSeconds: 60 * 60 * 24 * 30,
      }),
    ],
  }),
);

workbox.routing.registerRoute(
  new RegExp('https://api.football-data.org'),
  workbox.strategies.staleWhileRevalidate({
    cacheName: 'api-football',
    plugins: [
      new workbox.expiration.Plugin({
        maxAgeSeconds: 60 * 60
      })
    ]
  })
)
workbox.routing.registerRoute(
  new RegExp('https://crests.football-data.org'),
  workbox.strategies.staleWhileRevalidate({
    cacheName: 'image-football',
    plugins: [
      new workbox.expiration.Plugin({
        maxAgeSeconds: 60 * 60
      })
    ]
  })
)

workbox.routing.registerRoute(
  new RegExp('https://fonts.gstatic.com/'),
  workbox.strategies.cacheFirst({
    cacheName: 'google-font',
    plugins: [
      new workbox.expiration.Plugin({
        maxAgeSeconds: 60 * 60 * 24 * 30,
        maxEntries: 30
      })
    ]
  })
)




// const CACHE_NAME = 'football-hunt-v3';
// const urlsToCache = [
//   '/manifest.json',
//   '/pages/home.html',
//   '/pages/match.html',
//   '/pages/saved.html',
//   'https://fonts.googleapis.com/icon?family=Material+Icons',
// 	'https://fonts.gstatic.com/s/materialicons/v55/flUhRq6tzZclQEJ-Vdg-IuiaDsNc.woff2',
//   '/style/style.css',
//   '/assets/1.jpg',
//   '/assets/2.jpg',
//   '/assets/3.jpg',
//   '/assets/icon/icon-144x144.png',
//   '/assets/icon/icon-192x192.svg',
//   '/assets/icon/icon-512x512.png',
// ]

self.addEventListener('push', event => {
  let body;
  if (event.data) {
    body = event.data.text();
  } else {
    body = "Push message no payload";
  }
  const title = 'Pertandingan Berakhir';
  const options = {
    body: body,
    icon: 'assets/icon/icon-144x144.png',
    vibrate: [100, 50, 100],
    data: {
      dateOfArrival: Date.now(),
      primaryKey: 1
    }
  };
  event.waitUntil(
    self.registration.showNotification(title, options)
  )
})