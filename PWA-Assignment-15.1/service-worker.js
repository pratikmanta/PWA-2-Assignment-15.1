// cached files 
var cacheName = 'flight-status';
var cacheFiles = [
    './',
    '/index.html',
    '/style/style.css',
    '/scripts/app.js',
    'https://raw.githubusercontent.com/pratikmanta/flights-status/master/db.json'
] 

// installs the service worker and caches files when server online
self.addEventListener('install', (event) => {
    event.waitUntil(
      caches.open(cacheName).then(function(cache) {
        console.log('Caching files')
        return cache.addAll(cacheFiles);
      })
    );
   });

// removes previous cached files
self.addEventListener('activate', (event) => {
event.waitUntil(
    caches.keys().then((cacheNames) => {
        return Promise.all(cacheNames.map((thisCacheName) => {
            if(thisCacheName !== cacheName){
                console.log('Removing cached files')
                return caches.delete(thisCacheName);
            }
        }))
    })
);
});

// fetch the cached files when server offline
self.addEventListener('fetch', (event) => {
    console.log(event.request.url);
    event.respondWith(
      caches.match(event.request).then(function(response) {
        return response || fetch(event.request);
      })
    );
   });
   