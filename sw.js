// Network-first (bypassing the browser HTTP cache) so updates arrive immediately when online;
// falls back to the offline cache when there is no connection.
const VERSION = '2026.10.21-8';
const CACHE = 'nihongo-' + VERSION;
const ASSETS = ['./', 'index.html', 'style.css', 'version.js', 'data.js', 'core.js', 'content-vocab.js', 'content-vocab2.js', 'content-life1.js', 'content-life2.js', 'content-lifekanji.js', 'content-lifegrammar.js', 'content-liferead.js', 'content-lifeunits.js',
  'content-kanji.js', 'content-kanji2.js', 'content-grammar.js', 'content-grammar2.js', 'content-read.js', 'content-path.js',
  'content-pitch.js', 'strokes.js', 'practice.js', 'catalog.js', 'study.js', 'views-main.js',
  'views-lib.js', 'views-read.js', 'views-translate.js', 'views-me.js', 'manifest.webmanifest', 'icons/icon.svg',
  'icons/icon-180.png', 'icons/icon-192.png', 'icons/icon-512.png'];

self.addEventListener('install', e => {
  e.waitUntil(caches.open(CACHE)
    .then(c => Promise.all(ASSETS.map(a => fetch(new Request(a, { cache: 'reload' })).then(r => r.ok && c.put(a, r)))))
    .then(() => self.skipWaiting()));
});
self.addEventListener('activate', e => {
  e.waitUntil(caches.keys()
    .then(keys => Promise.all(keys.filter(k => k !== CACHE).map(k => caches.delete(k))))
    .then(() => self.clients.claim()));
});
self.addEventListener('fetch', e => {
  if (e.request.method !== 'GET') return;
  const url = new URL(e.request.url);
  if (url.origin !== location.origin) return;
  e.respondWith(
    fetch(e.request, { cache: 'no-store' }).then(res => {
      if (res.ok) { const copy = res.clone(); caches.open(CACHE).then(c => c.put(e.request, copy)); }
      return res;
    }).catch(() => caches.match(e.request, { ignoreSearch: true }))
  );
});
