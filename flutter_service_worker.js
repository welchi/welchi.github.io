'use strict';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "index.html": "f4775b4b45b51f33bd2e8d682de90bb5",
"/": "f4775b4b45b51f33bd2e8d682de90bb5",
"main.dart.js": "1419fcb58259b564ef0fcb6e295850fc",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "27b56d771558730627728ae1adb84ead",
"assets/LICENSE": "b24a5f5e38e672ae40dd36b3a69c7a28",
"assets/AssetManifest.json": "84c3c06d7c4bb2b4b2af2980877954cd",
"assets/FontManifest.json": "580ff1a5d08679ded8fcf5c6848cece7",
"assets/fonts/MaterialIcons-Regular.ttf": "56d3ffdef7a25659eab6a68a3fbfaf16",
"assets/assets/images/design.png": "a8799597a5f91ced46b4344b6706c190",
"assets/assets/images/works_2DR_lp_top.png": "864dc06ae43ff12d837405aff20a5a45",
"assets/assets/images/logo_symbol.png": "425d84ef3e74d22935c6d7cacbeff29c",
"assets/assets/images/works_namonaki.png": "5be59e4a32f869b97e67885018472c20",
"assets/assets/images/GitHub-Mark-120px-plus.png": "ef7a02b69836dc8b6a732a54c4200dcb",
"assets/assets/images/illustration.png": "d7b8d64d357c40bdeac46410480f7728",
"assets/assets/images/top.png": "2c0828e953b7a007b9ffe4895c3cf692",
"assets/assets/images/Twitter_Logo_Blue.png": "fef946b8bba756359e2a1e87ccd915ea",
"assets/assets/images/welchi.png": "72dbb2622c48064a00eb783eb2bcb0bf",
"assets/assets/images/logo.png": "7e0f5503da04652cf9719ad81022d03c",
"assets/assets/images/development.png": "c0c7d024369bfadd3e6ab1cac284fc0a",
"assets/assets/images/works_2DR.png": "6a915cc6af6185d5300fb03ebe8d427f",
"assets/assets/images/works_2DR_lp_comic.png": "e9fa0df25c8c676cf245c9964e03c2c6"
};

self.addEventListener('activate', function (event) {
  event.waitUntil(
    caches.keys().then(function (cacheName) {
      return caches.delete(cacheName);
    }).then(function (_) {
      return caches.open(CACHE_NAME);
    }).then(function (cache) {
      return cache.addAll(Object.keys(RESOURCES));
    })
  );
});

self.addEventListener('fetch', function (event) {
  event.respondWith(
    caches.match(event.request)
      .then(function (response) {
        if (response) {
          return response;
        }
        return fetch(event.request);
      })
  );
});
