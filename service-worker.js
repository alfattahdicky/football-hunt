const CACHE_NAME = 'football-hunt-v3';
const urlsToCache = [
  '/',
  '/index.html',
  '/nav.html',
  '/team.html',
  '/push.js',
  '/service-worker.js',
  '/manifest.json',
  '/pages/home.html',
  '/pages/match.html',
  '/pages/saved.html',
  'https://fonts.googleapis.com/icon?family=Material+Icons',
	'https://fonts.gstatic.com/s/materialicons/v55/flUhRq6tzZclQEJ-Vdg-IuiaDsNc.woff2',
  '/style/materialize.min.css',
  '/style/style.css',
  '/script/api.js',
  '/script/db.js',
  '/script/idb.js',
  '/script/materialize.min.js',
  '/script/nav.js',
  '/script/script.js',
  '/script/sw-register.js',
  '/assets/1.jpg',
  '/assets/2.jpg',
  '/assets/3.jpg',
  '/assets/icon/icon-144x144.png',
  '/assets/icon/icon-192x192.svg',
  '/assets/icon/icon-512x512.png',
]

self.addEventListener("install", function(event) {
  event.waitUntil(
    caches.open(CACHE_NAME).then(function(cache) {
      return cache.addAll(urlsToCache);
    })
  );
});


//Menyimpan cache secara dinamis
self.addEventListener('fetch', function(event) {
  event.respondWith(
    caches.match(event.request, {cacheName:CACHE_NAME, ignoreSearch : true})
    .then(function(response) {
      if (response) {
        return response;
      }
      const fetchRequest = event.request.clone();
      return fetch(fetchRequest).then(
        function(response) {
          if(!response || response.status !== 200) {
            return response;
          }
          const responseToCache = response.clone();
          caches.open(CACHE_NAME)
          .then(function(cache) {
            cache.put(event.request, responseToCache);
          });
          return response;
        }
      );
    })
  );
});

self.addEventListener('activate', function(event) {
  event.waitUntil(
    caches.keys().then(function(cacheNames) {
      return Promise.all(
        cacheNames.map(function(cacheName) {
          if (cacheName !== CACHE_NAME && cacheName.startsWith("football-hunt")) {
            return caches.delete(cacheName);
          }
        })
      );
    })
  );
});

self.addEventListener('push', event => {
  let body;
  if(event.data) {
    body = event.data.text();
  } else {
    body ="Push message no payload";
  }
  const title = 'Pertandingan Berakhir';
  const options = {
    body: body,
    icon: 'assets/icon/icon-144x144.png',
    vibrate: [100,50,100],
    data: {
      dateOfArrival: Date.now(),
      primaryKey: 1
    }
  };
  event.waitUntil(
    self.registration.showNotification(title, options)
  )
})