const CACHE_NAME = 'football-hunt-v1';
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
  '/assets/3.jpg'
]

self.addEventListener('install', (event) => {
	event.waitUntil(
		caches.open(CACHE_NAME).then((cache) => {
			return cache.addAll(urlsToCache);
		}),
	);
});

self.addEventListener("fetch", (event) =>{
  const BASE_URL = 'https://api.football-data.org/v2';  
  const LEAGUE_ID = 2021;
  const ENDPOINT_COMPETITION = `${BASE_URL}/competitions/${LEAGUE_ID}/standings`;
  const ENDPOINT_MATCH = `${BASE_URL}/competitions/${LEAGUE_ID}/matches?status=SCHEDULED`;
  const ENDPOINT_TEAM = `${BASE_URL}/teams`;
  let ARRAY_ENDPOINT = [ENDPOINT_COMPETITION,ENDPOINT_MATCH,ENDPOINT_TEAM];
  if (event.request.url.indexOf(...ARRAY_ENDPOINT) > -1) {
    event.respondWith(
      caches.open(CACHE_NAME).then((cache) => {
        return fetch(event.request).then((response) => {
          cache.put(event.request.url, response.clone());
          return response;
        })
      })
    );
  } else {
    event.respondWith(
      caches.match(event.request).then((response) => {
        return response || fetch (event.request);
      })
    )
  }
});


self.addEventListener('activate', (event) => {
	event.waitUntil(
		caches.keys().then((cacheNames) => {
			return Promise.all(
				cacheNames.map((cacheName) => {
					if (cacheName !== CACHE_NAME) {
						console.log(`ServiceWorker: cache ${cacheName} dihapus`);
						return caches.delete(cacheName);
					}
				}),
			);
		}),
	);
});
