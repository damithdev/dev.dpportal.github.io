'use strict';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "assets/AssetManifest.json": "6d8d8e4c563641938346682968bd440e",
"assets/assets/fonts/Merriweather-Bold.ttf": "d9f26381ab442285d6c40582942f9a55",
"assets/assets/fonts/OpenSans-Regular.ttf": "5a798cdadc7cd321e3f72425b70bface",
"assets/assets/fonts/SF-Pro-Text-Bold.ttf": "23ae29cff15becd829501874372fa850",
"assets/assets/fonts/SF-Pro-Text-Medium.ttf": "8b61dea99518b51d5511dc3963a5537c",
"assets/assets/fonts/SF-Pro-Text-Regular.ttf": "12d8580f658f54bd0a4c4fc5a5983a94",
"assets/assets/fonts/SF-Pro-Text-Semibold.ttf": "77690a3c3c360557395489fa2e9ce27a",
"assets/assets/icon/nav-icon.png": "e2144cdf3701e64a507b56b16fce9fc6",
"assets/assets/images/american_express.png": "671947fe3ff8646123a6e1fd566ba3b0",
"assets/assets/images/android.png": "7a34eb0198e8fb5947db86a1202eaa76",
"assets/assets/images/apple.png": "957b0ab762be8f30acbe5dd48b8a05fd",
"assets/assets/images/arrow_in_circle.png": "50ab9671d1a6febdce10fa0c5c35fbdf",
"assets/assets/images/bar_chart@2x.png": "b97b58c53d3d4d1f55394067b1c7dffd",
"assets/assets/images/bar_chart_blue.png": "e4defc2e8fa1ecfb886b59f08658b485",
"assets/assets/images/bar_chart_green.png": "7a6d87cfaa639de001833a3d6a4cd706",
"assets/assets/images/bar_chart_purple.png": "a209cf793a37fc724ebb6dc1907e5bce",
"assets/assets/images/bg_create_account.png": "d2fc7ef1fe3679e911c50e26b7b18e4a",
"assets/assets/images/calendar.png": "1ace850edad95118bfe9a48262033f0c",
"assets/assets/images/certificate.png": "202538bd9c01b5790b7ec7cd9a41c5a3",
"assets/assets/images/chart.png": "cff0e771ae55a1adc7b9b16a86e13297",
"assets/assets/images/cloud.png": "7d234ac6f6bb4de6c570c2be766b87bc",
"assets/assets/images/copyicon.png": "ead04ed1d59511f456bbcf7891a023b8",
"assets/assets/images/csv.png": "0d24bb8ca49960f1d6d6c9c54af5a242",
"assets/assets/images/directpay-sandbox.png": "f476a0f665bffd95825a004db0cb8942",
"assets/assets/images/directpay-white-sandbox.png": "4c66f8323b549910fef366506813afdf",
"assets/assets/images/directpay-white.png": "e74dcfbfa869779395e4d75c8693f75b",
"assets/assets/images/directpay.png": "7c8b5113a83dfe4ac37702e69f13e69d",
"assets/assets/images/directpaylogo.png": "56a54bddd15c8f5d96cfef66eb046c84",
"assets/assets/images/double_down_arrow.png": "b8f7d5902dc41ad224cccdea4a6b81cb",
"assets/assets/images/download_arrow.png": "a4369722c4b2b812a4766192dd832887",
"assets/assets/images/dp_loading.gif": "774d7139ec48bb6b56de41e3c0dc3cd1",
"assets/assets/images/drop_arrow.png": "14de6227ab7c9ef775df7feb26e3ebe8",
"assets/assets/images/emailicon_Icon.png": "609e3550927dcfe164a69570f1fce5cf",
"assets/assets/images/filter.png": "ae94cfb66980967aa1eda5437622abd7",
"assets/assets/images/filter_button.png": "9c86aa72b585851323cfa533e3dc883c",
"assets/assets/images/hidepassword_icon%2520-%2520Copy.png": "68715c81a547165f50f96f68c3da67a4",
"assets/assets/images/hidepassword_icon.png": "68715c81a547165f50f96f68c3da67a4",
"assets/assets/images/icomagento_plugin.png": "0c9604b8843350b912c8347b410918ec",
"assets/assets/images/icoopencart_plugin.png": "c8f689ff64dcd3e1741d5a97f9281aea",
"assets/assets/images/icoshopify_plugin.png": "db25540150c50c87781ddab1df5eba7e",
"assets/assets/images/icowoo_commerce_plugin.png": "2e8fe22407f7ebebdc26b5a1682c45a9",
"assets/assets/images/iosicon.png": "244705b26afc0b8865290d550f55b35d",
"assets/assets/images/ipgimage.jpg": "d8355a89d89a21605830ff6e6129b258",
"assets/assets/images/js.png": "a585f959442d375884c4164a48e4ba3b",
"assets/assets/images/list.png": "d81f8146fb75317a8f9371e049425acc",
"assets/assets/images/list@2x.png": "5b173f7588b257be4516f15a9f121bbe",
"assets/assets/images/lock.png": "95d71027fca8b876c18964f0a6c42f62",
"assets/assets/images/lock_icon.png": "58ef4ae9e9f4da28f610856e81ec2068",
"assets/assets/images/login_page_image.png": "a40a9d1c2e806bea29f49a32e92f1f7b",
"assets/assets/images/logo.png": "2cfd065d8ed56a25e1b1a3150e3b1694",
"assets/assets/images/mastercard.png": "64d1f60da5485b9856e09c080b8ab645",
"assets/assets/images/mc_vrt_opt_pos_73_3x.png": "478335ad73f557740203d17075778d29",
"assets/assets/images/money_bag.png": "634d36a70079da3dc69ee5c4f55f8eba",
"assets/assets/images/package.png": "be8d1edba0f17618df23a74a7f359252",
"assets/assets/images/payment@2x.png": "e171e5eddfd8af5bf375c055533eca52",
"assets/assets/images/pen.png": "268f65aba054ee59de2a3dddac3b8f26",
"assets/assets/images/pen@2x.png": "194f7789ed775320efc04794ddb9c740",
"assets/assets/images/photo_camera.png": "34bc4a21b56564e2cb0b54c6b8fe1711",
"assets/assets/images/point.png": "ce33457f6584d85300c1d86f9c5b4abb",
"assets/assets/images/print.png": "2de321457012bd3c9117b208bd86eb7f",
"assets/assets/images/redmo.png": "42579992f906c0bc9eb812284ceddb6b",
"assets/assets/images/star.png": "59975ae175691a07fb0bfc5319bd62e0",
"assets/assets/images/stats.svg": "1ba17781719d4a7e5157e74110563215",
"assets/assets/images/test123.png": "b9ca67695099f8980cc52c00cec3df3d",
"assets/assets/images/up_arrow.png": "6659512a6eac64d0f5780ed9de4fd36a",
"assets/assets/images/visa.png": "f03f09763b06fb903cd0cade4900e4d1",
"assets/assets/images/visa_logo.png": "f31898f64d540a32e14e94c4dffc32be",
"assets/assets/images/waiting.png": "6e186a51fc145f57e20c364fa52262aa",
"assets/assets/images/_certificate.png": "826e3ce1cfd47f6033460cc6cd58ec50",
"assets/assets/images/_chart.png": "a3a529c8c271a5a180a8e3d80edd5cd0",
"assets/assets/images/_pen.png": "39ea91e7f9b355d8f423f76e878b73c1",
"assets/assets/js/directpayCardPayment.js": "9db0caf6ee801911c42fb10f4d63a43a",
"assets/FontManifest.json": "d0c9667a50ac572345c210ef43216b9e",
"assets/fonts/MaterialIcons-Regular.ttf": "56d3ffdef7a25659eab6a68a3fbfaf16",
"assets/LICENSE": "390623c32353089c2744462d410e0249",
"assets/packages/rflutter_alert/assets/images/2.0x/close.png": "abaa692ee4fa94f76ad099a7a437bd4f",
"assets/packages/rflutter_alert/assets/images/2.0x/icon_error.png": "2da9704815c606109493d8af19999a65",
"assets/packages/rflutter_alert/assets/images/2.0x/icon_info.png": "612ea65413e042e3df408a8548cefe71",
"assets/packages/rflutter_alert/assets/images/2.0x/icon_success.png": "7d6abdd1b85e78df76b2837996749a43",
"assets/packages/rflutter_alert/assets/images/2.0x/icon_warning.png": "e4606e6910d7c48132912eb818e3a55f",
"assets/packages/rflutter_alert/assets/images/3.0x/close.png": "98d2de9ca72dc92b1c9a2835a7464a8c",
"assets/packages/rflutter_alert/assets/images/3.0x/icon_error.png": "15ca57e31f94cadd75d8e2b2098239bd",
"assets/packages/rflutter_alert/assets/images/3.0x/icon_info.png": "e68e8527c1eb78949351a6582469fe55",
"assets/packages/rflutter_alert/assets/images/3.0x/icon_success.png": "1c04416085cc343b99d1544a723c7e62",
"assets/packages/rflutter_alert/assets/images/3.0x/icon_warning.png": "e5f369189faa13e7586459afbe4ffab9",
"assets/packages/rflutter_alert/assets/images/close.png": "13c168d8841fcaba94ee91e8adc3617f",
"assets/packages/rflutter_alert/assets/images/icon_error.png": "f2b71a724964b51ac26239413e73f787",
"assets/packages/rflutter_alert/assets/images/icon_info.png": "3f71f68cae4d420cecbf996f37b0763c",
"assets/packages/rflutter_alert/assets/images/icon_success.png": "8bb472ce3c765f567aa3f28915c1a8f4",
"assets/packages/rflutter_alert/assets/images/icon_warning.png": "ccfc1396d29de3ac730da38a8ab20098",
"index.html": "a36406994b765ef0b48b90b35cfea2dd",
"/": "a36406994b765ef0b48b90b35cfea2dd",
"jquery.dart": "50f4876313fad908fc7042875507d047",
"main.dart.js": "e3d3510faee1a2ed6c1e006f1770e080",
"map.html": "a915ef34a0cdd2f31eea779184bbb725",
"mapIntigration.js": "1452296d4a468898289bf508753f2bf6"
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
