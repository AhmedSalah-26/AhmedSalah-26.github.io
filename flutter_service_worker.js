'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"assets/AssetManifest.39cd1fc4.bin.json": "39cd1fc46b123e93437bc38cd295e874",
"assets/AssetManifest.8413a92b.bin": "8413a92b087ee6ee3f8e79d2951fef4a",
"assets/AssetManifest.a60adbf5.json": "a60adbf56d7da162bfe832a466427de6",
"assets/AssetManifest.bin": "f1a992706997de0d198b3c51d004bd4f",
"assets/AssetManifest.bin.json": "a65f21ede067dd8f38ea26e673ed81b5",
"assets/AssetManifest.json": "bd454926e6636f5779cf0d57c5ae7fa2",
"assets/assets/img/facebook.9be6010b.9be6010b.svg": "9be6010b4f608525131a2cb7fba53b13",
"assets/assets/img/facebook.svg": "9be6010b4f608525131a2cb7fba53b13",
"assets/assets/img/icons8-github.4d56b368.4d56b368.svg": "4d56b3683c48ed7c70e76b81fb262a4a",
"assets/assets/img/icons8-github.svg": "4d56b3683c48ed7c70e76b81fb262a4a",
"assets/assets/img/instagram.ab4374be.ab4374be.svg": "ab4374becfcbcc40e1ed714c2066a882",
"assets/assets/img/instagram.svg": "ab4374becfcbcc40e1ed714c2066a882",
"assets/assets/img/linkedin.262d2948.262d2948.svg": "262d294800f896ff16928fd020eeb7c4",
"assets/assets/img/linkedin.svg": "262d294800f896ff16928fd020eeb7c4",
"assets/assets/img/WebIcon.jpg": "f072e10114116871b2c5979b3dade4a2",
"assets/assets/img/whats-app.6424ab63.6424ab63.svg": "6424ab63d29ece68ed7c882f6c81074f",
"assets/assets/img/whats-app.svg": "6424ab63d29ece68ed7c882f6c81074f",
"assets/assets/img/whatsapp-svgrepo-com.f117e4f6.f117e4f6.svg": "f117e4f6872f31ad27d84c968485fc86",
"assets/assets/img/whatsapp-svgrepo-com.svg": "f117e4f6872f31ad27d84c968485fc86",
"assets/FontManifest.eda55ac1.json": "eda55ac1a82f205849951a2aae7de175",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.889e3deb.otf": "889e3deb3e6e2d7df6adf6255a37274e",
"assets/fonts/MaterialIcons-Regular.otf": "5801da0792de04118bc00e8ee79b62bd",
"assets/NOTICES": "88453d3bcc73ac13a2f55ba71cfc88bc",
"assets/packages/cupertino_icons/assets/CupertinoIcons.e986ebe4.ttf": "e986ebe42ef785b27164c36a9abc7818",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "e986ebe42ef785b27164c36a9abc7818",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "5fda3f1af7d6433d53b24083e2219fa0",
"canvaskit/canvaskit.js.symbols": "48c83a2ce573d9692e8d970e288d75f7",
"canvaskit/canvaskit.wasm": "1f237a213d7370cf95f443d896176460",
"canvaskit/chromium/canvaskit.js": "87325e67bf77a9b483250e1fb1b54677",
"canvaskit/chromium/canvaskit.js.symbols": "a012ed99ccba193cf96bb2643003f6fc",
"canvaskit/chromium/canvaskit.wasm": "b1ac05b29c127d86df4bcfbf50dd902a",
"canvaskit/skwasm.js": "9fa2ffe90a40d062dd2343c7b84caf01",
"canvaskit/skwasm.js.symbols": "262f4827a1317abb59d71d6c587a93e2",
"canvaskit/skwasm.wasm": "9f0c0c02b82a910d12ce0543ec130e60",
"canvaskit/skwasm.worker.js": "bfb704a6c714a75da9ef320991e88b03",
"favicon.5dcef449.png": "5dcef449791fa27946b3d35ad8803796",
"favicon.ico": "70d43074620a77cf1ebbe36bf463aeca",
"favicon.png": "e9f3d85b7c73ca7b00d1c79532bce39d",
"flutter.589d73e4.js": "589d73e47e88190ad84b9fefdb0e66c0",
"flutter.js": "f31737fb005cd3a3c6bd9355efd33061",
"flutter_bootstrap.js": "a439464ac4033d300c13dd74784ac7c4",
"flutter_web_optimizer.a23f6e5b.js": "a23f6e5b59688592503469fb92c39797",
"flutter_web_optimizer.c2689562.js": "c268956222035eda5f8f4cd5950e7870",
"icons/favicon.png": "f072e10114116871b2c5979b3dade4a2",
"icons/Icon-192.png": "a55184c0f96b6e67399890f850c8c195",
"icons/Icon-512.png": "3aae34d41ab6efb559e0df6af7cc5df5",
"icons/Icon-maskable-192.png": "a55184c0f96b6e67399890f850c8c195",
"icons/Icon-maskable-512.png": "3aae34d41ab6efb559e0df6af7cc5df5",
"index.html": "df6d5c97398f440f159968c5f5fa01fe",
"/": "df6d5c97398f440f159968c5f5fa01fe",
"main.0586da71.dart_5.js": "0586da71f0cca81b735f5711abe94f2f",
"main.1016128c.dart_1.js": "1016128c4c6943922cba92af73d790c4",
"main.186b9152.dart.js": "186b9152b155382326e1317abf3902ff",
"main.1c8f7cc7.dart_2.js": "1c8f7cc7a337ee153cd481bdbb8b1f92",
"main.7d7cc661.dart_4.js": "7d7cc661b97643b8f0a8f0280ef685f4",
"main.88c77374.dart_3.js": "88c77374623ea9365344c312debe5b87",
"main.88f055ec.dart_0.js": "88f055ec5c7fbb58f25126a8d0248cf4",
"main.90654f23.dart_4.js": "90654f235baaa4c087510d316e9f5bdb",
"main.9c0e9a5c.dart_3.js": "9c0e9a5c9e5cafb7578fb83c5cf58c04",
"main.b25dd115.dart_0.js": "b25dd1158e868f880a97284d5f3e83c0",
"main.cb5e1eed.dart_1.js": "cb5e1eed46ac5f0e46f6fbe8eb24bf4e",
"main.cdef24b3.dart_5.js": "cdef24b3bd5be70f0903614b8a331806",
"main.d4bc29b2.dart_2.js": "d4bc29b2744651cb42b05e8a2635620e",
"main.dart.js": "1c8cbe3ca958aaeee24a95ca2d2fc5c8",
"main.df41ea66.dart.js": "df41ea66851c904b48eb000d3b348856",
"manifest.852caeb4.json": "852caeb4c62f0d3fe267396511f96a74",
"manifest.json": "e9e663b467ab1b92604c6d30f9489f77",
"version.json": "12a92ef79835b40a6093bcc932b54998"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
