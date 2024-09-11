'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"flutter_bootstrap.js": "5cc29d8eed522663a7b31a166620e123",
"version.json": "d84e36f4ab52ec8a619a893bf98f9789",
"favicon.ico": "e5ecba36a83441237d255cf87568d316",
"index.html": "a593550f258bbbe952840490fc6a067a",
"/": "a593550f258bbbe952840490fc6a067a",
"main.dart.js": "3b0788dabffe1ee6623882bdbd659bb4",
"flutter.js": "f393d3c16b631f36852323de8e583132",
"icons/Icon-192.png": "518337d0cfdfac64dd371051680a0c06",
"icons/Icon-maskable-192.png": "518337d0cfdfac64dd371051680a0c06",
"icons/Icon-maskable-512.png": "8eabb53c0579ae3d723e628fb462df25",
"icons/Icon-512.png": "8eabb53c0579ae3d723e628fb462df25",
"manifest.json": "566eba39fb221ea534f37e8e133eb891",
"assets/AssetManifest.json": "ed241a949dc34694a289573509cc36a5",
"assets/NOTICES": "6865ca9586998632d52a937a626ec987",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/AssetManifest.bin.json": "6adec08f1a258b86c4b518c550ff377d",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "e986ebe42ef785b27164c36a9abc7818",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/AssetManifest.bin": "224bac95bfc059b40f3dc8be2467e966",
"assets/fonts/MaterialIcons-Regular.otf": "025d597488cf331b27c7931e0fc02d94",
"assets/assets/projects/tech_time/design/picture_3_pun_settings_and_work_info.png": "30d03b140401a35fe66ff83dd942bb43",
"assets/assets/projects/tech_time/design/picture_2_worktime.png": "0b75476ad36275f5b164b80c6161bb89",
"assets/assets/projects/tech_time/design/picture_4_change_duration.png": "7a7046552265c64c2248847e53af0aa2",
"assets/assets/projects/tech_time/design/picture_1_login.png": "8997831309bb7cc727c9b53d111e1f07",
"assets/assets/projects/tech_time/app/picture_2_duration.png": "95b0d1be31fa247f1ac1634ad90c0e37",
"assets/assets/projects/tech_time/app/picture_3_push_notification.png": "5d867462c4dff8d2b2a4e08cffbceabb",
"assets/assets/projects/tech_time/app/picture_1_login.png": "b84cf898e648eabdad9a0ba1737dbd90",
"assets/assets/projects/lotto/picture_8_barcode_keno_page.png": "840f52dff9e783aa1de054ea6eba0a0f",
"assets/assets/projects/lotto/picture_3_gluecksspirale_page.PNG": "a3af1c59f6ade9b675822421a31bedd7",
"assets/assets/projects/lotto/picture_6_push_notification_settings.png": "91c40cbf37ecd94b2c75c7c445228289",
"assets/assets/projects/lotto/picture_1_profile_dashboard.png": "4ecc8968c08be37f6ca71c30d199db71",
"assets/assets/projects/lotto/picture_7_barcode_list.png": "7623b7528936df71006f80ed8acdbfc4",
"assets/assets/projects/lotto/picture_10_barcode_info.png": "3c181b20b817a79095d012fcdae4f91c",
"assets/assets/projects/lotto/picture_4_gluecksspirale_page.PNG": "9ecd3d88e013c6dee69c540198643ab8",
"assets/assets/projects/lotto/picture_9_barcode_eurojackpot_page.png": "1b54ebdfb9cbbc890f36fc67dcef8b5a",
"assets/assets/projects/lotto/picture_2_profile_dashboard.png": "03644a516ab633d4f08b792734fa4fb0",
"assets/assets/projects/lotto/picture_5_push_notification.png": "fcf510e60a5edfc51f0ff588314b9323",
"assets/assets/projects/dy_epic/picture_18_drawer_in_logged_in_state.png": "c820086b5e523384c69a37f204414c44",
"assets/assets/projects/dy_epic/picture_2_home_page.png": "b933d921c6d919f2737fa6f3099374db",
"assets/assets/projects/dy_epic/picture_3_category_workingtable.png": "bd72e2f85d5d69ecd3aeb890e0e4cdc0",
"assets/assets/projects/dy_epic/picture_25_order_page.png": "f4aa1a6ada830d2c30ad3f937b02485e",
"assets/assets/projects/dy_epic/picture_30_order_does_no_exist.png": "9513b1b479cb17488869f355e658b373",
"assets/assets/projects/dy_epic/picture_23_customer_ino_checke_if_changes_stated_are_okay.png": "249382741936e1e57ae113ef5f15bf65",
"assets/assets/projects/dy_epic/picture_24_delivery_address_changed_successful.png": "ce1ee5a0143505433c54d00d10a7103a",
"assets/assets/projects/dy_epic/picture_29_search_order_based_on_text_second_part.png": "5c74849c132e15ca198d2b1006810651",
"assets/assets/projects/dy_epic/picture_4_category_office_chair.png": "434c443b11b03375c58bb92f2d48b871",
"assets/assets/projects/dy_epic/picture_28_search_order_based_on_text.png": "653dc933a46996c5993b4aee1a89a68a",
"assets/assets/projects/dy_epic/picture_7_drawer.png": "e00df6346dc7ec9f5077ac80a486a2aa",
"assets/assets/projects/dy_epic/picture_15_shopping_basket_change_count.png": "7275a99cabe3dc649bc2b3b76baa7d23",
"assets/assets/projects/dy_epic/picture_10_product_page_scrolled.png": "4f79474df332c474b35622d28f89eca9",
"assets/assets/projects/dy_epic/picture_26_order_page_drop_down.png": "51052f75c484284060e4af9283c0c747",
"assets/assets/projects/dy_epic/picture_32_logo.png": "3e8fed90f65b6387f7862abe371132ec",
"assets/assets/projects/dy_epic/picture_27_order_searched_for_finish.png": "cf6b27830bf4301cee5929ccb8dd02ae",
"assets/assets/projects/dy_epic/picture_16_shopping_basket_send_info.png": "1f107df10a22cc8899ebb359153a94ae",
"assets/assets/projects/dy_epic/picture_6_second_offer_info.png": "51d773d2a80045edf0ea19af3e3432cf",
"assets/assets/projects/dy_epic/picture_22_delivery_address.png": "c6f8dc7453469fecffa8df56d9c17e1a",
"assets/assets/projects/dy_epic/picture_11_product_page_with_active_shopping_basket.png": "bef67f0db4d76a8837d51b5185e9b564",
"assets/assets/projects/dy_epic/picture_14_shopping_basket_delete_product.png": "0c1ff9b7b677d4c0173ced702d579de1",
"assets/assets/projects/dy_epic/picture_8_product_page.png": "b090b56a00bd8d431f844c1274f29552",
"assets/assets/projects/dy_epic/picture_20_notification_settings.png": "01899382ad4bb2a1f37d00a76066888d",
"assets/assets/projects/dy_epic/picture_17_login.png": "67bde5dc138b4e782a5cecfc097d8e53",
"assets/assets/projects/dy_epic/picture_13_shopping_basket_product_information.png": "04e1b129532368593adf36eb2b93c86b",
"assets/assets/projects/dy_epic/picture_21_customer_info.png": "b6eac9362fdda822a5b59cd9d4f37460",
"assets/assets/projects/dy_epic/picture_12_shopping_basket.png": "1a641ef35ae3c63385999e2a3c34e236",
"assets/assets/projects/dy_epic/picture_31_copyright.png": "ba3dd32a6d974a80a8e3f19b4c6c0bbe",
"assets/assets/projects/dy_epic/picture_1_init_loading_screen_scaled.png": "06901bd6f3065b1bd4f9ae3342d59892",
"assets/assets/projects/dy_epic/picture_19_home_page_logged_in_shopping_basket.png": "500aca5057cde4ba5b72c770a2d7f943",
"assets/assets/projects/dy_epic/picture_5_category_office_chair_bottom.png": "cde689654df8eaaf6d19895dee4ed8e4",
"assets/assets/projects/dy_epic/picture_9_product_page_increased_counter.png": "4bac5f1a886f0c5a220bdc22c8cbbf3e",
"assets/assets/profile/application_photo.jpg": "3204bb6efa9985adb18fe8e2f6efbd0a",
"assets/assets/barcode_lotto_page.PNG": "6eea1853ff807d4b1f612a67a099e477",
"assets/assets/php_mascot.png": "646f8e486001242cba91c4e3b803c8f9",
"canvaskit/skwasm.js": "694fda5704053957c2594de355805228",
"canvaskit/skwasm.js.symbols": "262f4827a1317abb59d71d6c587a93e2",
"canvaskit/canvaskit.js.symbols": "48c83a2ce573d9692e8d970e288d75f7",
"canvaskit/skwasm.wasm": "9f0c0c02b82a910d12ce0543ec130e60",
"canvaskit/chromium/canvaskit.js.symbols": "a012ed99ccba193cf96bb2643003f6fc",
"canvaskit/chromium/canvaskit.js": "671c6b4f8fcc199dcc551c7bb125f239",
"canvaskit/chromium/canvaskit.wasm": "b1ac05b29c127d86df4bcfbf50dd902a",
"canvaskit/canvaskit.js": "66177750aff65a66cb07bb44b8c6422b",
"canvaskit/canvaskit.wasm": "1f237a213d7370cf95f443d896176460",
"canvaskit/skwasm.worker.js": "89990e8c92bcb123999aa81f7e203b1c"};
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
