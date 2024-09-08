    // The code below is injected by flutter web optimizer, do not edit!!!!!!

    // window.assetBase
    var assetBase = "http://192.168.101.93:9091/app/";
    
    // window.mainjsManifest
    var mainjsManifest = {
  "main.dart.js": "main.186b9152.dart.js",
  "main.dart_0.js": "main.88f055ec.dart_0.js",
  "main.dart_1.js": "main.cb5e1eed.dart_1.js",
  "main.dart_2.js": "main.1c8f7cc7.dart_2.js",
  "main.dart_3.js": "main.9c0e9a5c.dart_3.js",
  "main.dart_4.js": "main.7d7cc661.dart_4.js",
  "main.dart_5.js": "main.0586da71.dart_5.js"
};
    
    // window.hashFileManifest
    var hashFileManifest = {
  "assets/AssetManifest.bin": "assets/AssetManifest.8413a92b.bin",
  "assets/AssetManifest.bin.json": "assets/AssetManifest.39cd1fc4.bin.json",
  "assets/AssetManifest.json": "assets/AssetManifest.a60adbf5.json",
  "assets/FontManifest.json": "assets/FontManifest.eda55ac1.json",
  "assets/assets/img/facebook.9be6010b.svg": "assets/assets/img/facebook.9be6010b.9be6010b.svg",
  "assets/assets/img/facebook.svg": "assets/assets/img/facebook.9be6010b.svg",
  "assets/assets/img/icons8-github.4d56b368.svg": "assets/assets/img/icons8-github.4d56b368.4d56b368.svg",
  "assets/assets/img/icons8-github.svg": "assets/assets/img/icons8-github.4d56b368.svg",
  "assets/assets/img/instagram.ab4374be.svg": "assets/assets/img/instagram.ab4374be.ab4374be.svg",
  "assets/assets/img/instagram.svg": "assets/assets/img/instagram.ab4374be.svg",
  "assets/assets/img/linkedin.262d2948.svg": "assets/assets/img/linkedin.262d2948.262d2948.svg",
  "assets/assets/img/linkedin.svg": "assets/assets/img/linkedin.262d2948.svg",
  "assets/assets/img/whats-app.6424ab63.svg": "assets/assets/img/whats-app.6424ab63.6424ab63.svg",
  "assets/assets/img/whats-app.svg": "assets/assets/img/whats-app.6424ab63.svg",
  "assets/assets/img/whatsapp-svgrepo-com.f117e4f6.svg": "assets/assets/img/whatsapp-svgrepo-com.f117e4f6.f117e4f6.svg",
  "assets/assets/img/whatsapp-svgrepo-com.svg": "assets/assets/img/whatsapp-svgrepo-com.f117e4f6.svg",
  "assets/fonts/MaterialIcons-Regular.otf": "assets/fonts/MaterialIcons-Regular.889e3deb.otf",
  "assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "assets/packages/cupertino_icons/assets/CupertinoIcons.e986ebe4.ttf",
  "canvaskit/canvaskit.js": "canvaskit/canvaskit.js",
  "canvaskit/canvaskit.js.symbols": "canvaskit/canvaskit.js.symbols",
  "canvaskit/canvaskit.wasm": "canvaskit/canvaskit.wasm",
  "canvaskit/chromium/canvaskit.js": "canvaskit/chromium/canvaskit.js",
  "canvaskit/chromium/canvaskit.js.symbols": "canvaskit/chromium/canvaskit.js.symbols",
  "canvaskit/chromium/canvaskit.wasm": "canvaskit/chromium/canvaskit.wasm",
  "canvaskit/skwasm.js": "canvaskit/skwasm.js",
  "canvaskit/skwasm.js.symbols": "canvaskit/skwasm.js.symbols",
  "canvaskit/skwasm.wasm": "canvaskit/skwasm.wasm",
  "canvaskit/skwasm.worker.js": "canvaskit/skwasm.worker.js",
  "favicon.png": "favicon.5dcef449.png",
  "flutter.js": "flutter.589d73e4.js",
  "icons/Icon-192.png": "icons/Icon-192.ac9a721a.png",
  "icons/Icon-512.png": "icons/Icon-512.96e75261.png",
  "icons/Icon-maskable-192.png": "icons/Icon-maskable-192.c457ef57.png",
  "icons/Icon-maskable-512.png": "icons/Icon-maskable-512.301a7604.png",
  "main.dart.js": "main.186b9152.dart.js",
  "main.dart_0.js": "main.88f055ec.dart_0.js",
  "main.dart_1.js": "main.cb5e1eed.dart_1.js",
  "main.dart_2.js": "main.1c8f7cc7.dart_2.js",
  "main.dart_3.js": "main.9c0e9a5c.dart_3.js",
  "main.dart_4.js": "main.7d7cc661.dart_4.js",
  "main.dart_5.js": "main.0586da71.dart_5.js",
  "manifest.json": "manifest.852caeb4.json"
};
    
    // hook dynamic create element `src` `href` property
    (function(){
      var _defineProperty = function (element, property) {
        var value;
        Object.defineProperty(element, property, {
          get: function () {
            return element.getAttribute(property);
          },
          set: function (v) {
            value = v;
            if (typeof v === 'string') {
              if (v.startsWith(assetBase)) {
                v = v.replace(assetBase, '');
              }
              if (v.startsWith('./')) {
                v = v.replace('./', '');
              }
              if (hashFileManifest[v]) {
                value = assetBase + hashFileManifest[v];
              }
            }
            element.setAttribute(property, value);
          }
        })
    
        var _setAttribute = element.setAttribute;
        element.setAttribute = function () {
          var args = Array.prototype.slice.call(arguments);
          // if (args[0] === 'src') {
          //   //do something here
          //   console.log('setAttribute', args[1])
          // }
          _setAttribute.apply(element, args);
        }
      }
    
      var _createElement = document.createElement;
      var _hookProperties = {'link': 'href', 'script': 'src', 'audio': 'src', 'video': 'src', 'map': 'src', 'img': 'src'};
      document.createElement = function (tagName) {
        var element = _createElement.call(document, tagName);
        var property = _hookProperties[tagName.toLowerCase()];
        if (property) {
          _defineProperty(element, property);
        }
        return element;
      }
    })();
    
    // load main.dart.js_xxx.part js
    function dartDeferredLibraryLoader(uri, successCallback, errorCallback, loadId) {
      console.info('uri: ' + uri + ', loadId: '+ loadId);
    
      var key = uri.toString().replace(/(.*)(main\.dart\.(.+)\.js)/g, '$2');
      var src = assetBase + mainjsManifest[key];
    
      var script = document.createElement("script");
      script.type = "text/javascript";
      script.src = src;
      script.addEventListener("load", successCallback, false);
      script.addEventListener("error", errorCallback, false);
      document.body.appendChild(script);
    }
    