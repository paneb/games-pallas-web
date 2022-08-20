'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "version.json": "15235b5108d6a877ef74fe3317a96bf7",
"index.html": "166dbec46a07d2e5aa02569b6a2406b9",
"/": "166dbec46a07d2e5aa02569b6a2406b9",
"main.dart.js": "d34f8149c4878dc7b87533e09e43297c",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "fd091ea5bc8f3ccc10f74bd67179fb6a",
"assets/AssetManifest.json": "4fec476c15334f36096970ebd1208746",
"assets/NOTICES": "f6e91fae2bd53b8c435ca5b79a077ba6",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/fonts/MaterialIcons-Regular.otf": "4e6447691c9509f7acdbf8a931a85ca1",
"assets/assets/images/page_old_dig_D1.png": "81f1bea537e48c4de2dd3725a6f3b25c",
"assets/assets/images/page_old_dig_E.png": "d54605559c571c91a81785bba4e82a64",
"assets/assets/images/page_old_dig_S.png": "d795892748ad65c19041faa44f3c2d3f",
"assets/assets/images/page_old_dig_D.png": "f50d5fe543729bb895e650ceafbee2dc",
"assets/assets/images/page_old_dig_F.png": "f068b6e445e8ec7f97f659558712de14",
"assets/assets/images/page_old_dig_P.png": "5b9e615154a215a74e6a08057399fe83",
"assets/assets/images/page_old_dig_G.png": "c326dddb64cd3318e75fa5e5e400cd97",
"assets/assets/images/page_old_dig_T.png": "21dfb10a5a178af5b05d16e6aa032374",
"assets/assets/images/page_old_dig_C.png": "9f3ab6454c7ee0d8ee1f9f59b4f8a48b",
"assets/assets/images/page_old_dig_B.png": "da9ebf790526a0d3cfe7e6630785ec2c",
"assets/assets/images/page_old_dig_U.png": "b876d618c8312412e1b8e4b1aad779ec",
"assets/assets/images/page_old_dig_W.png": "2440310351a71b4d240ba6f6d15b1272",
"assets/assets/images/page_old_dig_A.png": "52adf10a6a85adb5d3a12b6f08ca07c9",
"assets/assets/images/page_old_dig_V.png": "21f59df77a5fc5de7894bd045e680e15",
"assets/assets/images/page_old_dig_B2.png": "c621f2683a588443a6afb4991135feb2",
"assets/assets/images/page_old_dig_B3.png": "da1879c20e5bf2c66ac8d0483807d563",
"assets/assets/images/page_old_dig_A2.png": "074d05ea8c821f4abf4130555fd802c2",
"assets/assets/images/page_old_dig_L.png": "b21d34a7a3019f684b3275320b49b2cd",
"assets/assets/images/pallas.png": "ea4236317bc9ae057ba2419c2ac2ccf8",
"assets/assets/images/page_old_dig_M.png": "c395d0b42f4fb99864bf68a6c77db9fb",
"assets/assets/images/page_old_dig_Z.png": "7b0125a5d1aa30cf0fcde07619f7bf74",
"assets/assets/images/page_old_dig_X.png": "273ce6738d619720e8487595ee9287c1",
"assets/assets/images/page_old_dig_N.png": "a09fc58ba07a1904b6d840f00d635cc9",
"assets/assets/images/page_old_dig_I.png": "fed6976c6a5ebd36ac59ce2027f8bc35",
"assets/assets/images/page_old_dig_H.png": "bc82105c69ce1a90b4bc7eb226efe4a0",
"assets/assets/pallas.png": "ada75ab81f1eeadc16e79854e5b16527",
"assets/assets/pages/page_old_dig_V.md": "7a8dc9152733c2342eb46b7aeff656d9",
"assets/assets/pages/page_002.md": "aa527a5c9dd0ada92a8420a1f543b91e",
"assets/assets/pages/page_old_dig_N.md": "250363749bd45ab095de24a15d6a8ac0",
"assets/assets/pages/page_old_dig_W.md": "596cb2e148e3d1601ce441a28b55537d",
"assets/assets/pages/page_003.md": "ba746bccdcf095b16ca300bf4dfb9334",
"assets/assets/pages/page_old_dig_O.md": "41ca3c9eb1047b99fd7f09532f79c15d",
"assets/assets/pages/page_old_dig_S.md": "9c48597f673795d864bd97adc83026d5",
"assets/assets/pages/page_old_dig_X.md": "e0ef8babe485268becc8d01381a6b747",
"assets/assets/pages/page_old_dig_D1.md": "1989717f2412f88482c3391fcd1fd1b5",
"assets/assets/pages/page_old_dig_D.md": "7429d9c5ae722209e3d10740000592d7",
"assets/assets/pages/page_old_dig_E.md": "00dde027bed5a55245b7a72de4790546",
"assets/assets/pages/page_old_dig_start.md": "53958fc82717d4df8eae138fe54a5f68",
"assets/assets/pages/page_old_dig_A.md": "6c7a42cf14252bd8be48304084d999eb",
"assets/assets/pages/page_old_dig_F.md": "30e91720224943e460a889294eb6584c",
"assets/assets/pages/page_old_dig_B2.md": "c979bf03f296a8f29ce1b5124013f629",
"assets/assets/pages/page_old_dig_Z.md": "e11809b436720eb4bc629ff6decec56a",
"assets/assets/pages/page_old_dig_A2.md": "ad7c33dd418a73176cde030e96fbdcf8",
"assets/assets/pages/page_old_dig_B.md": "b008cd1d89c43df570ef7ff10cd0319d",
"assets/assets/pages/page_old_dig_C.md": "509d39d8cdb58b93ccd7f3d620789256",
"assets/assets/pages/page_old_dig_G.md": "e40b2068f138d969501a172dd5908589",
"assets/assets/pages/page_old_dig_B3.md": "5376e8b0896faee27c25c7314326f59f",
"assets/assets/pages/page_old_dig_T.md": "21a0e7acb2021376f8fc43b528e48533",
"assets/assets/pages/page_old_dig_L.md": "f9951738ae50166c2521c1cf9ab938f1",
"assets/assets/pages/page_old_dig_P.md": "e6d0f4e0425f4ac6a4a809f50a085682",
"assets/assets/pages/page_old_dig_H.md": "c025f65424841707af63f2eb4b8c00b8",
"assets/assets/pages/page_old_dig_I.md": "e9f473642442f387d16164a52913554d",
"assets/assets/pages/page_old_dig_U.md": "269c495365d7feef5ffeac01fdbc7422",
"assets/assets/pages/page_old_dig_M.md": "774c3583222dd819713a3a7f5c70dc73",
"assets/assets/pages/page_001.md": "1180a369822f82de1ca31c1ba918edfe",
"canvaskit/canvaskit.js": "43fa9e17039a625450b6aba93baf521e",
"canvaskit/profiling/canvaskit.js": "f3bfccc993a1e0bfdd3440af60d99df4",
"canvaskit/profiling/canvaskit.wasm": "a9610cf39260f60fbe7524a785c66101",
"canvaskit/canvaskit.wasm": "04ed3c745ff1dee16504be01f9623498"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "/",
"main.dart.js",
"index.html",
"assets/NOTICES",
"assets/AssetManifest.json",
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
        // lazily populate the cache.
        return response || fetch(event.request).then((response) => {
          cache.put(event.request, response.clone());
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
