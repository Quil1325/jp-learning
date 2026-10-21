// Network-first so updates arrive when online; falls back to cache offline.
const CACHE = 'nihongo-v5';
const ASSETS = ['./', 'index.html', 'style.css', 'data.js', 'core.js', 'content-vocab.js', 'content-vocab2.js',
  'content-kanji.js', 'content-kanji2.js', 'content-grammar.js', 'content-grammar2.js', 'content-read.js', 'content-path.js', 'content-pitch.js', 'strokes.js', 'practice.js', 'catalog.js', 'study.js', 'views-main.js',
  'views-lib.js', 'views-read.js', 'views-me.js', 'manifest.webmanifest', 'icons/icon.svg',
  'icons/icon-180.png', 'icons/icon-192.png', 'icons/icon-512.png'];

self.addEventListener('install', e => {
  e.waitUntil(caches.open(CACHE).then(c => c.addAll(ASSETS)).then(() => self.skipWaiting()));
});
self.addEventListener('activate', e => {
  e.waitUntil(caches.keys()
    .then(keys => Promise.all(keys.filter(k => k !== CACHE).map(k => caches.delete(k))))
    .then(() => self.clients.claim()));
});
self.addEventListener('fetch', e => {
  if (e.request.method !== 'GET') return;
  e.respondWith(
    fetch(e.request).then(res => {
      if (res.ok && new URL(e.request.url).origin === location.origin) {
        const copy = res.clone(); caches.open(CACHE).then(c => c.put(e.request, copy));
      }
      return res;
    }).catch(() => caches.match(e.request))
  );
});
