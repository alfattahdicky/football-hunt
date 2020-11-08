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
  if (event.request.url.indexOf(ENDPOINT_COMPETITION) > -1 && event.request.url.indexOf(ENDPOINT_MATCH) > -1 && event.request.url.indexOf(ENDPOINT_TEAM) > -1) {
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
      caches.match(event.request, { ignoreSearch: true }).then(function(response) {
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
					if (cacheName !== CACHE_NAME && cacheName.startsWith('football-hunt')) {
						console.log(`ServiceWorker: cache ${cacheName} dihapus`);
						return caches.delete(cacheName);
					}
				}),
			);
		}),
	);
});
