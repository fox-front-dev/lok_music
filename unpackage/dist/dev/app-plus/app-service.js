var __defProp = Object.defineProperty;
var __defProps = Object.defineProperties;
var __getOwnPropDescs = Object.getOwnPropertyDescriptors;
var __getOwnPropSymbols = Object.getOwnPropertySymbols;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __propIsEnum = Object.prototype.propertyIsEnumerable;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp.call(b, prop))
      __defNormalProp(a, prop, b[prop]);
  if (__getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(b)) {
      if (__propIsEnum.call(b, prop))
        __defNormalProp(a, prop, b[prop]);
    }
  return a;
};
var __spreadProps = (a, b) => __defProps(a, __getOwnPropDescs(b));
if (typeof Promise !== "undefined" && !Promise.prototype.finally) {
  Promise.prototype.finally = function(callback) {
    const promise = this.constructor;
    return this.then((value) => promise.resolve(callback()).then(() => value), (reason) => promise.resolve(callback()).then(() => {
      throw reason;
    }));
  };
}
;
if (typeof uni !== "undefined" && uni && uni.requireGlobal) {
  const global2 = uni.requireGlobal();
  ArrayBuffer = global2.ArrayBuffer;
  Int8Array = global2.Int8Array;
  Uint8Array = global2.Uint8Array;
  Uint8ClampedArray = global2.Uint8ClampedArray;
  Int16Array = global2.Int16Array;
  Uint16Array = global2.Uint16Array;
  Int32Array = global2.Int32Array;
  Uint32Array = global2.Uint32Array;
  Float32Array = global2.Float32Array;
  Float64Array = global2.Float64Array;
  BigInt64Array = global2.BigInt64Array;
  BigUint64Array = global2.BigUint64Array;
}
;
if (uni.restoreGlobal) {
  uni.restoreGlobal(Vue, weex, plus, setTimeout, clearTimeout, setInterval, clearInterval);
}
(function(vue, shared) {
  "use strict";
  const ON_LOAD = "onLoad";
  const ON_UNLOAD = "onUnload";
  function requireNativePlugin(name) {
    return weex.requireModule(name);
  }
  function formatAppLog(type, filename, ...args) {
    if (uni.__log__) {
      uni.__log__(type, filename, ...args);
    } else {
      console[type].apply(console, [...args, filename]);
    }
  }
  function resolveEasycom(component, easycom) {
    return shared.isString(component) ? easycom : component;
  }
  const createHook = (lifecycle) => (hook, target = vue.getCurrentInstance()) => {
    !vue.isInSSRComponentSetup && vue.injectHook(lifecycle, hook, target);
  };
  const onLoad = /* @__PURE__ */ createHook(ON_LOAD);
  const onUnload = /* @__PURE__ */ createHook(ON_UNLOAD);
  var icons = {
    "id": "2852637",
    "name": "uniui\u56FE\u6807\u5E93",
    "font_family": "uniicons",
    "css_prefix_text": "uniui-",
    "description": "",
    "glyphs": [
      {
        "icon_id": "25027049",
        "name": "yanse",
        "font_class": "color",
        "unicode": "e6cf",
        "unicode_decimal": 59087
      },
      {
        "icon_id": "25027048",
        "name": "wallet",
        "font_class": "wallet",
        "unicode": "e6b1",
        "unicode_decimal": 59057
      },
      {
        "icon_id": "25015720",
        "name": "settings-filled",
        "font_class": "settings-filled",
        "unicode": "e6ce",
        "unicode_decimal": 59086
      },
      {
        "icon_id": "25015434",
        "name": "shimingrenzheng-filled",
        "font_class": "auth-filled",
        "unicode": "e6cc",
        "unicode_decimal": 59084
      },
      {
        "icon_id": "24934246",
        "name": "shop-filled",
        "font_class": "shop-filled",
        "unicode": "e6cd",
        "unicode_decimal": 59085
      },
      {
        "icon_id": "24934159",
        "name": "staff-filled-01",
        "font_class": "staff-filled",
        "unicode": "e6cb",
        "unicode_decimal": 59083
      },
      {
        "icon_id": "24932461",
        "name": "VIP-filled",
        "font_class": "vip-filled",
        "unicode": "e6c6",
        "unicode_decimal": 59078
      },
      {
        "icon_id": "24932462",
        "name": "plus_circle_fill",
        "font_class": "plus-filled",
        "unicode": "e6c7",
        "unicode_decimal": 59079
      },
      {
        "icon_id": "24932463",
        "name": "folder_add-filled",
        "font_class": "folder-add-filled",
        "unicode": "e6c8",
        "unicode_decimal": 59080
      },
      {
        "icon_id": "24932464",
        "name": "yanse-filled",
        "font_class": "color-filled",
        "unicode": "e6c9",
        "unicode_decimal": 59081
      },
      {
        "icon_id": "24932465",
        "name": "tune-filled",
        "font_class": "tune-filled",
        "unicode": "e6ca",
        "unicode_decimal": 59082
      },
      {
        "icon_id": "24932455",
        "name": "a-rilidaka-filled",
        "font_class": "calendar-filled",
        "unicode": "e6c0",
        "unicode_decimal": 59072
      },
      {
        "icon_id": "24932456",
        "name": "notification-filled",
        "font_class": "notification-filled",
        "unicode": "e6c1",
        "unicode_decimal": 59073
      },
      {
        "icon_id": "24932457",
        "name": "wallet-filled",
        "font_class": "wallet-filled",
        "unicode": "e6c2",
        "unicode_decimal": 59074
      },
      {
        "icon_id": "24932458",
        "name": "paihangbang-filled",
        "font_class": "medal-filled",
        "unicode": "e6c3",
        "unicode_decimal": 59075
      },
      {
        "icon_id": "24932459",
        "name": "gift-filled",
        "font_class": "gift-filled",
        "unicode": "e6c4",
        "unicode_decimal": 59076
      },
      {
        "icon_id": "24932460",
        "name": "fire-filled",
        "font_class": "fire-filled",
        "unicode": "e6c5",
        "unicode_decimal": 59077
      },
      {
        "icon_id": "24928001",
        "name": "refreshempty",
        "font_class": "refreshempty",
        "unicode": "e6bf",
        "unicode_decimal": 59071
      },
      {
        "icon_id": "24926853",
        "name": "location-ellipse",
        "font_class": "location-filled",
        "unicode": "e6af",
        "unicode_decimal": 59055
      },
      {
        "icon_id": "24926735",
        "name": "person-filled",
        "font_class": "person-filled",
        "unicode": "e69d",
        "unicode_decimal": 59037
      },
      {
        "icon_id": "24926703",
        "name": "personadd-filled",
        "font_class": "personadd-filled",
        "unicode": "e698",
        "unicode_decimal": 59032
      },
      {
        "icon_id": "24923351",
        "name": "back",
        "font_class": "back",
        "unicode": "e6b9",
        "unicode_decimal": 59065
      },
      {
        "icon_id": "24923352",
        "name": "forward",
        "font_class": "forward",
        "unicode": "e6ba",
        "unicode_decimal": 59066
      },
      {
        "icon_id": "24923353",
        "name": "arrowthinright",
        "font_class": "arrow-right",
        "unicode": "e6bb",
        "unicode_decimal": 59067
      },
      {
        "icon_id": "24923353",
        "name": "arrowthinright",
        "font_class": "arrowthinright",
        "unicode": "e6bb",
        "unicode_decimal": 59067
      },
      {
        "icon_id": "24923354",
        "name": "arrowthinleft",
        "font_class": "arrow-left",
        "unicode": "e6bc",
        "unicode_decimal": 59068
      },
      {
        "icon_id": "24923354",
        "name": "arrowthinleft",
        "font_class": "arrowthinleft",
        "unicode": "e6bc",
        "unicode_decimal": 59068
      },
      {
        "icon_id": "24923355",
        "name": "arrowthinup",
        "font_class": "arrow-up",
        "unicode": "e6bd",
        "unicode_decimal": 59069
      },
      {
        "icon_id": "24923355",
        "name": "arrowthinup",
        "font_class": "arrowthinup",
        "unicode": "e6bd",
        "unicode_decimal": 59069
      },
      {
        "icon_id": "24923356",
        "name": "arrowthindown",
        "font_class": "arrow-down",
        "unicode": "e6be",
        "unicode_decimal": 59070
      },
      {
        "icon_id": "24923356",
        "name": "arrowthindown",
        "font_class": "arrowthindown",
        "unicode": "e6be",
        "unicode_decimal": 59070
      },
      {
        "icon_id": "24923349",
        "name": "arrowdown",
        "font_class": "bottom",
        "unicode": "e6b8",
        "unicode_decimal": 59064
      },
      {
        "icon_id": "24923349",
        "name": "arrowdown",
        "font_class": "arrowdown",
        "unicode": "e6b8",
        "unicode_decimal": 59064
      },
      {
        "icon_id": "24923346",
        "name": "arrowright",
        "font_class": "right",
        "unicode": "e6b5",
        "unicode_decimal": 59061
      },
      {
        "icon_id": "24923346",
        "name": "arrowright",
        "font_class": "arrowright",
        "unicode": "e6b5",
        "unicode_decimal": 59061
      },
      {
        "icon_id": "24923347",
        "name": "arrowup",
        "font_class": "top",
        "unicode": "e6b6",
        "unicode_decimal": 59062
      },
      {
        "icon_id": "24923347",
        "name": "arrowup",
        "font_class": "arrowup",
        "unicode": "e6b6",
        "unicode_decimal": 59062
      },
      {
        "icon_id": "24923348",
        "name": "arrowleft",
        "font_class": "left",
        "unicode": "e6b7",
        "unicode_decimal": 59063
      },
      {
        "icon_id": "24923348",
        "name": "arrowleft",
        "font_class": "arrowleft",
        "unicode": "e6b7",
        "unicode_decimal": 59063
      },
      {
        "icon_id": "24923334",
        "name": "eye",
        "font_class": "eye",
        "unicode": "e651",
        "unicode_decimal": 58961
      },
      {
        "icon_id": "24923335",
        "name": "eye-filled",
        "font_class": "eye-filled",
        "unicode": "e66a",
        "unicode_decimal": 58986
      },
      {
        "icon_id": "24923336",
        "name": "eye-slash",
        "font_class": "eye-slash",
        "unicode": "e6b3",
        "unicode_decimal": 59059
      },
      {
        "icon_id": "24923337",
        "name": "eye-slash-filled",
        "font_class": "eye-slash-filled",
        "unicode": "e6b4",
        "unicode_decimal": 59060
      },
      {
        "icon_id": "24923305",
        "name": "info-filled",
        "font_class": "info-filled",
        "unicode": "e649",
        "unicode_decimal": 58953
      },
      {
        "icon_id": "24923299",
        "name": "reload-01",
        "font_class": "reload",
        "unicode": "e6b2",
        "unicode_decimal": 59058
      },
      {
        "icon_id": "24923195",
        "name": "mic_slash_fill",
        "font_class": "micoff-filled",
        "unicode": "e6b0",
        "unicode_decimal": 59056
      },
      {
        "icon_id": "24923165",
        "name": "map-pin-ellipse",
        "font_class": "map-pin-ellipse",
        "unicode": "e6ac",
        "unicode_decimal": 59052
      },
      {
        "icon_id": "24923166",
        "name": "map-pin",
        "font_class": "map-pin",
        "unicode": "e6ad",
        "unicode_decimal": 59053
      },
      {
        "icon_id": "24923167",
        "name": "location",
        "font_class": "location",
        "unicode": "e6ae",
        "unicode_decimal": 59054
      },
      {
        "icon_id": "24923064",
        "name": "starhalf",
        "font_class": "starhalf",
        "unicode": "e683",
        "unicode_decimal": 59011
      },
      {
        "icon_id": "24923065",
        "name": "star",
        "font_class": "star",
        "unicode": "e688",
        "unicode_decimal": 59016
      },
      {
        "icon_id": "24923066",
        "name": "star-filled",
        "font_class": "star-filled",
        "unicode": "e68f",
        "unicode_decimal": 59023
      },
      {
        "icon_id": "24899646",
        "name": "a-rilidaka",
        "font_class": "calendar",
        "unicode": "e6a0",
        "unicode_decimal": 59040
      },
      {
        "icon_id": "24899647",
        "name": "fire",
        "font_class": "fire",
        "unicode": "e6a1",
        "unicode_decimal": 59041
      },
      {
        "icon_id": "24899648",
        "name": "paihangbang",
        "font_class": "medal",
        "unicode": "e6a2",
        "unicode_decimal": 59042
      },
      {
        "icon_id": "24899649",
        "name": "font",
        "font_class": "font",
        "unicode": "e6a3",
        "unicode_decimal": 59043
      },
      {
        "icon_id": "24899650",
        "name": "gift",
        "font_class": "gift",
        "unicode": "e6a4",
        "unicode_decimal": 59044
      },
      {
        "icon_id": "24899651",
        "name": "link",
        "font_class": "link",
        "unicode": "e6a5",
        "unicode_decimal": 59045
      },
      {
        "icon_id": "24899652",
        "name": "notification",
        "font_class": "notification",
        "unicode": "e6a6",
        "unicode_decimal": 59046
      },
      {
        "icon_id": "24899653",
        "name": "staff",
        "font_class": "staff",
        "unicode": "e6a7",
        "unicode_decimal": 59047
      },
      {
        "icon_id": "24899654",
        "name": "VIP",
        "font_class": "vip",
        "unicode": "e6a8",
        "unicode_decimal": 59048
      },
      {
        "icon_id": "24899655",
        "name": "folder_add",
        "font_class": "folder-add",
        "unicode": "e6a9",
        "unicode_decimal": 59049
      },
      {
        "icon_id": "24899656",
        "name": "tune",
        "font_class": "tune",
        "unicode": "e6aa",
        "unicode_decimal": 59050
      },
      {
        "icon_id": "24899657",
        "name": "shimingrenzheng",
        "font_class": "auth",
        "unicode": "e6ab",
        "unicode_decimal": 59051
      },
      {
        "icon_id": "24899565",
        "name": "person",
        "font_class": "person",
        "unicode": "e699",
        "unicode_decimal": 59033
      },
      {
        "icon_id": "24899566",
        "name": "email-filled",
        "font_class": "email-filled",
        "unicode": "e69a",
        "unicode_decimal": 59034
      },
      {
        "icon_id": "24899567",
        "name": "phone-filled",
        "font_class": "phone-filled",
        "unicode": "e69b",
        "unicode_decimal": 59035
      },
      {
        "icon_id": "24899568",
        "name": "phone",
        "font_class": "phone",
        "unicode": "e69c",
        "unicode_decimal": 59036
      },
      {
        "icon_id": "24899570",
        "name": "email",
        "font_class": "email",
        "unicode": "e69e",
        "unicode_decimal": 59038
      },
      {
        "icon_id": "24899571",
        "name": "personadd",
        "font_class": "personadd",
        "unicode": "e69f",
        "unicode_decimal": 59039
      },
      {
        "icon_id": "24899558",
        "name": "chatboxes-filled",
        "font_class": "chatboxes-filled",
        "unicode": "e692",
        "unicode_decimal": 59026
      },
      {
        "icon_id": "24899559",
        "name": "contact",
        "font_class": "contact",
        "unicode": "e693",
        "unicode_decimal": 59027
      },
      {
        "icon_id": "24899560",
        "name": "chatbubble-filled",
        "font_class": "chatbubble-filled",
        "unicode": "e694",
        "unicode_decimal": 59028
      },
      {
        "icon_id": "24899561",
        "name": "contact-filled",
        "font_class": "contact-filled",
        "unicode": "e695",
        "unicode_decimal": 59029
      },
      {
        "icon_id": "24899562",
        "name": "chatboxes",
        "font_class": "chatboxes",
        "unicode": "e696",
        "unicode_decimal": 59030
      },
      {
        "icon_id": "24899563",
        "name": "chatbubble",
        "font_class": "chatbubble",
        "unicode": "e697",
        "unicode_decimal": 59031
      },
      {
        "icon_id": "24881290",
        "name": "upload-filled",
        "font_class": "upload-filled",
        "unicode": "e68e",
        "unicode_decimal": 59022
      },
      {
        "icon_id": "24881292",
        "name": "upload",
        "font_class": "upload",
        "unicode": "e690",
        "unicode_decimal": 59024
      },
      {
        "icon_id": "24881293",
        "name": "weixin",
        "font_class": "weixin",
        "unicode": "e691",
        "unicode_decimal": 59025
      },
      {
        "icon_id": "24881274",
        "name": "compose",
        "font_class": "compose",
        "unicode": "e67f",
        "unicode_decimal": 59007
      },
      {
        "icon_id": "24881275",
        "name": "qq",
        "font_class": "qq",
        "unicode": "e680",
        "unicode_decimal": 59008
      },
      {
        "icon_id": "24881276",
        "name": "download-filled",
        "font_class": "download-filled",
        "unicode": "e681",
        "unicode_decimal": 59009
      },
      {
        "icon_id": "24881277",
        "name": "pengyouquan",
        "font_class": "pyq",
        "unicode": "e682",
        "unicode_decimal": 59010
      },
      {
        "icon_id": "24881279",
        "name": "sound",
        "font_class": "sound",
        "unicode": "e684",
        "unicode_decimal": 59012
      },
      {
        "icon_id": "24881280",
        "name": "trash-filled",
        "font_class": "trash-filled",
        "unicode": "e685",
        "unicode_decimal": 59013
      },
      {
        "icon_id": "24881281",
        "name": "sound-filled",
        "font_class": "sound-filled",
        "unicode": "e686",
        "unicode_decimal": 59014
      },
      {
        "icon_id": "24881282",
        "name": "trash",
        "font_class": "trash",
        "unicode": "e687",
        "unicode_decimal": 59015
      },
      {
        "icon_id": "24881284",
        "name": "videocam-filled",
        "font_class": "videocam-filled",
        "unicode": "e689",
        "unicode_decimal": 59017
      },
      {
        "icon_id": "24881285",
        "name": "spinner-cycle",
        "font_class": "spinner-cycle",
        "unicode": "e68a",
        "unicode_decimal": 59018
      },
      {
        "icon_id": "24881286",
        "name": "weibo",
        "font_class": "weibo",
        "unicode": "e68b",
        "unicode_decimal": 59019
      },
      {
        "icon_id": "24881288",
        "name": "videocam",
        "font_class": "videocam",
        "unicode": "e68c",
        "unicode_decimal": 59020
      },
      {
        "icon_id": "24881289",
        "name": "download",
        "font_class": "download",
        "unicode": "e68d",
        "unicode_decimal": 59021
      },
      {
        "icon_id": "24879601",
        "name": "help",
        "font_class": "help",
        "unicode": "e679",
        "unicode_decimal": 59001
      },
      {
        "icon_id": "24879602",
        "name": "navigate-filled",
        "font_class": "navigate-filled",
        "unicode": "e67a",
        "unicode_decimal": 59002
      },
      {
        "icon_id": "24879603",
        "name": "plusempty",
        "font_class": "plusempty",
        "unicode": "e67b",
        "unicode_decimal": 59003
      },
      {
        "icon_id": "24879604",
        "name": "smallcircle",
        "font_class": "smallcircle",
        "unicode": "e67c",
        "unicode_decimal": 59004
      },
      {
        "icon_id": "24879605",
        "name": "minus-filled",
        "font_class": "minus-filled",
        "unicode": "e67d",
        "unicode_decimal": 59005
      },
      {
        "icon_id": "24879606",
        "name": "micoff",
        "font_class": "micoff",
        "unicode": "e67e",
        "unicode_decimal": 59006
      },
      {
        "icon_id": "24879588",
        "name": "closeempty",
        "font_class": "closeempty",
        "unicode": "e66c",
        "unicode_decimal": 58988
      },
      {
        "icon_id": "24879589",
        "name": "clear",
        "font_class": "clear",
        "unicode": "e66d",
        "unicode_decimal": 58989
      },
      {
        "icon_id": "24879590",
        "name": "navigate",
        "font_class": "navigate",
        "unicode": "e66e",
        "unicode_decimal": 58990
      },
      {
        "icon_id": "24879591",
        "name": "minus",
        "font_class": "minus",
        "unicode": "e66f",
        "unicode_decimal": 58991
      },
      {
        "icon_id": "24879592",
        "name": "image",
        "font_class": "image",
        "unicode": "e670",
        "unicode_decimal": 58992
      },
      {
        "icon_id": "24879593",
        "name": "mic",
        "font_class": "mic",
        "unicode": "e671",
        "unicode_decimal": 58993
      },
      {
        "icon_id": "24879594",
        "name": "paperplane",
        "font_class": "paperplane",
        "unicode": "e672",
        "unicode_decimal": 58994
      },
      {
        "icon_id": "24879595",
        "name": "close",
        "font_class": "close",
        "unicode": "e673",
        "unicode_decimal": 58995
      },
      {
        "icon_id": "24879596",
        "name": "help-filled",
        "font_class": "help-filled",
        "unicode": "e674",
        "unicode_decimal": 58996
      },
      {
        "icon_id": "24879597",
        "name": "plus-filled",
        "font_class": "paperplane-filled",
        "unicode": "e675",
        "unicode_decimal": 58997
      },
      {
        "icon_id": "24879598",
        "name": "plus",
        "font_class": "plus",
        "unicode": "e676",
        "unicode_decimal": 58998
      },
      {
        "icon_id": "24879599",
        "name": "mic-filled",
        "font_class": "mic-filled",
        "unicode": "e677",
        "unicode_decimal": 58999
      },
      {
        "icon_id": "24879600",
        "name": "image-filled",
        "font_class": "image-filled",
        "unicode": "e678",
        "unicode_decimal": 59e3
      },
      {
        "icon_id": "24855900",
        "name": "locked-filled",
        "font_class": "locked-filled",
        "unicode": "e668",
        "unicode_decimal": 58984
      },
      {
        "icon_id": "24855901",
        "name": "info",
        "font_class": "info",
        "unicode": "e669",
        "unicode_decimal": 58985
      },
      {
        "icon_id": "24855903",
        "name": "locked",
        "font_class": "locked",
        "unicode": "e66b",
        "unicode_decimal": 58987
      },
      {
        "icon_id": "24855884",
        "name": "camera-filled",
        "font_class": "camera-filled",
        "unicode": "e658",
        "unicode_decimal": 58968
      },
      {
        "icon_id": "24855885",
        "name": "chat-filled",
        "font_class": "chat-filled",
        "unicode": "e659",
        "unicode_decimal": 58969
      },
      {
        "icon_id": "24855886",
        "name": "camera",
        "font_class": "camera",
        "unicode": "e65a",
        "unicode_decimal": 58970
      },
      {
        "icon_id": "24855887",
        "name": "circle",
        "font_class": "circle",
        "unicode": "e65b",
        "unicode_decimal": 58971
      },
      {
        "icon_id": "24855888",
        "name": "checkmarkempty",
        "font_class": "checkmarkempty",
        "unicode": "e65c",
        "unicode_decimal": 58972
      },
      {
        "icon_id": "24855889",
        "name": "chat",
        "font_class": "chat",
        "unicode": "e65d",
        "unicode_decimal": 58973
      },
      {
        "icon_id": "24855890",
        "name": "circle-filled",
        "font_class": "circle-filled",
        "unicode": "e65e",
        "unicode_decimal": 58974
      },
      {
        "icon_id": "24855891",
        "name": "flag",
        "font_class": "flag",
        "unicode": "e65f",
        "unicode_decimal": 58975
      },
      {
        "icon_id": "24855892",
        "name": "flag-filled",
        "font_class": "flag-filled",
        "unicode": "e660",
        "unicode_decimal": 58976
      },
      {
        "icon_id": "24855893",
        "name": "gear-filled",
        "font_class": "gear-filled",
        "unicode": "e661",
        "unicode_decimal": 58977
      },
      {
        "icon_id": "24855894",
        "name": "home",
        "font_class": "home",
        "unicode": "e662",
        "unicode_decimal": 58978
      },
      {
        "icon_id": "24855895",
        "name": "home-filled",
        "font_class": "home-filled",
        "unicode": "e663",
        "unicode_decimal": 58979
      },
      {
        "icon_id": "24855896",
        "name": "gear",
        "font_class": "gear",
        "unicode": "e664",
        "unicode_decimal": 58980
      },
      {
        "icon_id": "24855897",
        "name": "smallcircle-filled",
        "font_class": "smallcircle-filled",
        "unicode": "e665",
        "unicode_decimal": 58981
      },
      {
        "icon_id": "24855898",
        "name": "map-filled",
        "font_class": "map-filled",
        "unicode": "e666",
        "unicode_decimal": 58982
      },
      {
        "icon_id": "24855899",
        "name": "map",
        "font_class": "map",
        "unicode": "e667",
        "unicode_decimal": 58983
      },
      {
        "icon_id": "24855825",
        "name": "refresh-filled",
        "font_class": "refresh-filled",
        "unicode": "e656",
        "unicode_decimal": 58966
      },
      {
        "icon_id": "24855826",
        "name": "refresh",
        "font_class": "refresh",
        "unicode": "e657",
        "unicode_decimal": 58967
      },
      {
        "icon_id": "24855808",
        "name": "cloud-upload",
        "font_class": "cloud-upload",
        "unicode": "e645",
        "unicode_decimal": 58949
      },
      {
        "icon_id": "24855809",
        "name": "cloud-download-filled",
        "font_class": "cloud-download-filled",
        "unicode": "e646",
        "unicode_decimal": 58950
      },
      {
        "icon_id": "24855810",
        "name": "cloud-download",
        "font_class": "cloud-download",
        "unicode": "e647",
        "unicode_decimal": 58951
      },
      {
        "icon_id": "24855811",
        "name": "cloud-upload-filled",
        "font_class": "cloud-upload-filled",
        "unicode": "e648",
        "unicode_decimal": 58952
      },
      {
        "icon_id": "24855813",
        "name": "redo",
        "font_class": "redo",
        "unicode": "e64a",
        "unicode_decimal": 58954
      },
      {
        "icon_id": "24855814",
        "name": "images-filled",
        "font_class": "images-filled",
        "unicode": "e64b",
        "unicode_decimal": 58955
      },
      {
        "icon_id": "24855815",
        "name": "undo-filled",
        "font_class": "undo-filled",
        "unicode": "e64c",
        "unicode_decimal": 58956
      },
      {
        "icon_id": "24855816",
        "name": "more",
        "font_class": "more",
        "unicode": "e64d",
        "unicode_decimal": 58957
      },
      {
        "icon_id": "24855817",
        "name": "more-filled",
        "font_class": "more-filled",
        "unicode": "e64e",
        "unicode_decimal": 58958
      },
      {
        "icon_id": "24855818",
        "name": "undo",
        "font_class": "undo",
        "unicode": "e64f",
        "unicode_decimal": 58959
      },
      {
        "icon_id": "24855819",
        "name": "images",
        "font_class": "images",
        "unicode": "e650",
        "unicode_decimal": 58960
      },
      {
        "icon_id": "24855821",
        "name": "paperclip",
        "font_class": "paperclip",
        "unicode": "e652",
        "unicode_decimal": 58962
      },
      {
        "icon_id": "24855822",
        "name": "settings",
        "font_class": "settings",
        "unicode": "e653",
        "unicode_decimal": 58963
      },
      {
        "icon_id": "24855823",
        "name": "search",
        "font_class": "search",
        "unicode": "e654",
        "unicode_decimal": 58964
      },
      {
        "icon_id": "24855824",
        "name": "redo-filled",
        "font_class": "redo-filled",
        "unicode": "e655",
        "unicode_decimal": 58965
      },
      {
        "icon_id": "24841702",
        "name": "list",
        "font_class": "list",
        "unicode": "e644",
        "unicode_decimal": 58948
      },
      {
        "icon_id": "24841489",
        "name": "mail-open-filled",
        "font_class": "mail-open-filled",
        "unicode": "e63a",
        "unicode_decimal": 58938
      },
      {
        "icon_id": "24841491",
        "name": "hand-thumbsdown-filled",
        "font_class": "hand-down-filled",
        "unicode": "e63c",
        "unicode_decimal": 58940
      },
      {
        "icon_id": "24841492",
        "name": "hand-thumbsdown",
        "font_class": "hand-down",
        "unicode": "e63d",
        "unicode_decimal": 58941
      },
      {
        "icon_id": "24841493",
        "name": "hand-thumbsup-filled",
        "font_class": "hand-up-filled",
        "unicode": "e63e",
        "unicode_decimal": 58942
      },
      {
        "icon_id": "24841494",
        "name": "hand-thumbsup",
        "font_class": "hand-up",
        "unicode": "e63f",
        "unicode_decimal": 58943
      },
      {
        "icon_id": "24841496",
        "name": "heart-filled",
        "font_class": "heart-filled",
        "unicode": "e641",
        "unicode_decimal": 58945
      },
      {
        "icon_id": "24841498",
        "name": "mail-open",
        "font_class": "mail-open",
        "unicode": "e643",
        "unicode_decimal": 58947
      },
      {
        "icon_id": "24841488",
        "name": "heart",
        "font_class": "heart",
        "unicode": "e639",
        "unicode_decimal": 58937
      },
      {
        "icon_id": "24839963",
        "name": "loop",
        "font_class": "loop",
        "unicode": "e633",
        "unicode_decimal": 58931
      },
      {
        "icon_id": "24839866",
        "name": "pulldown",
        "font_class": "pulldown",
        "unicode": "e632",
        "unicode_decimal": 58930
      },
      {
        "icon_id": "24813798",
        "name": "scan",
        "font_class": "scan",
        "unicode": "e62a",
        "unicode_decimal": 58922
      },
      {
        "icon_id": "24813786",
        "name": "bars",
        "font_class": "bars",
        "unicode": "e627",
        "unicode_decimal": 58919
      },
      {
        "icon_id": "24813788",
        "name": "cart-filled",
        "font_class": "cart-filled",
        "unicode": "e629",
        "unicode_decimal": 58921
      },
      {
        "icon_id": "24813790",
        "name": "checkbox",
        "font_class": "checkbox",
        "unicode": "e62b",
        "unicode_decimal": 58923
      },
      {
        "icon_id": "24813791",
        "name": "checkbox-filled",
        "font_class": "checkbox-filled",
        "unicode": "e62c",
        "unicode_decimal": 58924
      },
      {
        "icon_id": "24813794",
        "name": "shop",
        "font_class": "shop",
        "unicode": "e62f",
        "unicode_decimal": 58927
      },
      {
        "icon_id": "24813795",
        "name": "headphones",
        "font_class": "headphones",
        "unicode": "e630",
        "unicode_decimal": 58928
      },
      {
        "icon_id": "24813796",
        "name": "cart",
        "font_class": "cart",
        "unicode": "e631",
        "unicode_decimal": 58929
      }
    ]
  };
  var _export_sfc = (sfc, props) => {
    const target = sfc.__vccOpts || sfc;
    for (const [key, val] of props) {
      target[key] = val;
    }
    return target;
  };
  const getVal = (val) => {
    const reg = /^[0-9]*$/g;
    return typeof val === "number" || reg.test(val) ? val + "px" : val;
  };
  const _sfc_main$u = {
    name: "UniIcons",
    emits: ["click"],
    props: {
      type: {
        type: String,
        default: ""
      },
      color: {
        type: String,
        default: "#333333"
      },
      size: {
        type: [Number, String],
        default: 16
      },
      customPrefix: {
        type: String,
        default: ""
      }
    },
    data() {
      return {
        icons: icons.glyphs
      };
    },
    computed: {
      unicode() {
        let code = this.icons.find((v2) => v2.font_class === this.type);
        if (code) {
          return unescape(`%u${code.unicode}`);
        }
        return "";
      },
      iconSize() {
        return getVal(this.size);
      }
    },
    methods: {
      _onClick() {
        this.$emit("click");
      }
    }
  };
  function _sfc_render$8(_ctx, _cache, $props, $setup, $data, $options) {
    return vue.openBlock(), vue.createElementBlock("text", {
      style: vue.normalizeStyle({ color: $props.color, "font-size": $options.iconSize }),
      class: vue.normalizeClass(["uni-icons", ["uniui-" + $props.type, $props.customPrefix, $props.customPrefix ? $props.type : ""]]),
      onClick: _cache[0] || (_cache[0] = (...args) => $options._onClick && $options._onClick(...args))
    }, null, 6);
  }
  var __easycom_0$3 = /* @__PURE__ */ _export_sfc(_sfc_main$u, [["render", _sfc_render$8], ["__scopeId", "data-v-a2e81f6e"], ["__file", "/Users/fox/project/uniapp/lok\u97F3\u4E50/uni_modules/uni-icons/components/uni-icons/uni-icons.vue"]]);
  var popup = {
    data() {
      return {};
    },
    created() {
      this.popup = this.getParent();
    },
    methods: {
      getParent(name = "uniPopup") {
        let parent = this.$parent;
        let parentName = parent.$options.name;
        while (parentName !== name) {
          parent = parent.$parent;
          if (!parent)
            return false;
          parentName = parent.$options.name;
        }
        return parent;
      }
    }
  };
  const isObject$1 = (val) => val !== null && typeof val === "object";
  const defaultDelimiters = ["{", "}"];
  class BaseFormatter {
    constructor() {
      this._caches = /* @__PURE__ */ Object.create(null);
    }
    interpolate(message, values, delimiters = defaultDelimiters) {
      if (!values) {
        return [message];
      }
      let tokens = this._caches[message];
      if (!tokens) {
        tokens = parse(message, delimiters);
        this._caches[message] = tokens;
      }
      return compile(tokens, values);
    }
  }
  const RE_TOKEN_LIST_VALUE = /^(?:\d)+/;
  const RE_TOKEN_NAMED_VALUE = /^(?:\w)+/;
  function parse(format, [startDelimiter, endDelimiter]) {
    const tokens = [];
    let position = 0;
    let text = "";
    while (position < format.length) {
      let char = format[position++];
      if (char === startDelimiter) {
        if (text) {
          tokens.push({ type: "text", value: text });
        }
        text = "";
        let sub = "";
        char = format[position++];
        while (char !== void 0 && char !== endDelimiter) {
          sub += char;
          char = format[position++];
        }
        const isClosed = char === endDelimiter;
        const type = RE_TOKEN_LIST_VALUE.test(sub) ? "list" : isClosed && RE_TOKEN_NAMED_VALUE.test(sub) ? "named" : "unknown";
        tokens.push({ value: sub, type });
      } else {
        text += char;
      }
    }
    text && tokens.push({ type: "text", value: text });
    return tokens;
  }
  function compile(tokens, values) {
    const compiled = [];
    let index = 0;
    const mode = Array.isArray(values) ? "list" : isObject$1(values) ? "named" : "unknown";
    if (mode === "unknown") {
      return compiled;
    }
    while (index < tokens.length) {
      const token = tokens[index];
      switch (token.type) {
        case "text":
          compiled.push(token.value);
          break;
        case "list":
          compiled.push(values[parseInt(token.value, 10)]);
          break;
        case "named":
          if (mode === "named") {
            compiled.push(values[token.value]);
          } else {
            {
              console.warn(`Type of token '${token.type}' and format of value '${mode}' don't match!`);
            }
          }
          break;
        case "unknown":
          {
            console.warn(`Detect 'unknown' type of token!`);
          }
          break;
      }
      index++;
    }
    return compiled;
  }
  const LOCALE_ZH_HANS = "zh-Hans";
  const LOCALE_ZH_HANT = "zh-Hant";
  const LOCALE_EN = "en";
  const LOCALE_FR = "fr";
  const LOCALE_ES = "es";
  const hasOwnProperty = Object.prototype.hasOwnProperty;
  const hasOwn = (val, key) => hasOwnProperty.call(val, key);
  const defaultFormatter = new BaseFormatter();
  function include(str, parts) {
    return !!parts.find((part) => str.indexOf(part) !== -1);
  }
  function startsWith(str, parts) {
    return parts.find((part) => str.indexOf(part) === 0);
  }
  function normalizeLocale(locale, messages2) {
    if (!locale) {
      return;
    }
    locale = locale.trim().replace(/_/g, "-");
    if (messages2 && messages2[locale]) {
      return locale;
    }
    locale = locale.toLowerCase();
    if (locale === "chinese") {
      return LOCALE_ZH_HANS;
    }
    if (locale.indexOf("zh") === 0) {
      if (locale.indexOf("-hans") > -1) {
        return LOCALE_ZH_HANS;
      }
      if (locale.indexOf("-hant") > -1) {
        return LOCALE_ZH_HANT;
      }
      if (include(locale, ["-tw", "-hk", "-mo", "-cht"])) {
        return LOCALE_ZH_HANT;
      }
      return LOCALE_ZH_HANS;
    }
    const lang = startsWith(locale, [LOCALE_EN, LOCALE_FR, LOCALE_ES]);
    if (lang) {
      return lang;
    }
  }
  class I18n {
    constructor({ locale, fallbackLocale, messages: messages2, watcher, formater }) {
      this.locale = LOCALE_EN;
      this.fallbackLocale = LOCALE_EN;
      this.message = {};
      this.messages = {};
      this.watchers = [];
      if (fallbackLocale) {
        this.fallbackLocale = fallbackLocale;
      }
      this.formater = formater || defaultFormatter;
      this.messages = messages2 || {};
      this.setLocale(locale || LOCALE_EN);
      if (watcher) {
        this.watchLocale(watcher);
      }
    }
    setLocale(locale) {
      const oldLocale = this.locale;
      this.locale = normalizeLocale(locale, this.messages) || this.fallbackLocale;
      if (!this.messages[this.locale]) {
        this.messages[this.locale] = {};
      }
      this.message = this.messages[this.locale];
      if (oldLocale !== this.locale) {
        this.watchers.forEach((watcher) => {
          watcher(this.locale, oldLocale);
        });
      }
    }
    getLocale() {
      return this.locale;
    }
    watchLocale(fn2) {
      const index = this.watchers.push(fn2) - 1;
      return () => {
        this.watchers.splice(index, 1);
      };
    }
    add(locale, message, override = true) {
      const curMessages = this.messages[locale];
      if (curMessages) {
        if (override) {
          Object.assign(curMessages, message);
        } else {
          Object.keys(message).forEach((key) => {
            if (!hasOwn(curMessages, key)) {
              curMessages[key] = message[key];
            }
          });
        }
      } else {
        this.messages[locale] = message;
      }
    }
    f(message, values, delimiters) {
      return this.formater.interpolate(message, values, delimiters).join("");
    }
    t(key, locale, values) {
      let message = this.message;
      if (typeof locale === "string") {
        locale = normalizeLocale(locale, this.messages);
        locale && (message = this.messages[locale]);
      } else {
        values = locale;
      }
      if (!hasOwn(message, key)) {
        console.warn(`Cannot translate the value of keypath ${key}. Use the value of keypath as default.`);
        return key;
      }
      return this.formater.interpolate(message[key], values).join("");
    }
  }
  function watchAppLocale(appVm, i18n) {
    if (appVm.$watchLocale) {
      appVm.$watchLocale((newLocale) => {
        i18n.setLocale(newLocale);
      });
    } else {
      appVm.$watch(() => appVm.$locale, (newLocale) => {
        i18n.setLocale(newLocale);
      });
    }
  }
  function getDefaultLocale() {
    if (typeof uni !== "undefined" && uni.getLocale) {
      return uni.getLocale();
    }
    if (typeof global !== "undefined" && global.getLocale) {
      return global.getLocale();
    }
    return LOCALE_EN;
  }
  function initVueI18n(locale, messages2 = {}, fallbackLocale, watcher) {
    if (typeof locale !== "string") {
      [locale, messages2] = [
        messages2,
        locale
      ];
    }
    if (typeof locale !== "string") {
      locale = getDefaultLocale();
    }
    if (typeof fallbackLocale !== "string") {
      fallbackLocale = typeof __uniConfig !== "undefined" && __uniConfig.fallbackLocale || LOCALE_EN;
    }
    const i18n = new I18n({
      locale,
      fallbackLocale,
      messages: messages2,
      watcher
    });
    let t2 = (key, values) => {
      if (typeof getApp !== "function") {
        t2 = function(key2, values2) {
          return i18n.t(key2, values2);
        };
      } else {
        let isWatchedAppLocale = false;
        t2 = function(key2, values2) {
          const appVm = getApp().$vm;
          if (appVm) {
            appVm.$locale;
            if (!isWatchedAppLocale) {
              isWatchedAppLocale = true;
              watchAppLocale(appVm, i18n);
            }
          }
          return i18n.t(key2, values2);
        };
      }
      return t2(key, values);
    };
    return {
      i18n,
      f(message, values, delimiters) {
        return i18n.f(message, values, delimiters);
      },
      t(key, values) {
        return t2(key, values);
      },
      add(locale2, message, override = true) {
        return i18n.add(locale2, message, override);
      },
      watch(fn2) {
        return i18n.watchLocale(fn2);
      },
      getLocale() {
        return i18n.getLocale();
      },
      setLocale(newLocale) {
        return i18n.setLocale(newLocale);
      }
    };
  }
  var en$1 = {
    "uni-popup.cancel": "cancel",
    "uni-popup.ok": "ok",
    "uni-popup.placeholder": "pleace enter",
    "uni-popup.title": "Hint",
    "uni-popup.shareTitle": "Share to"
  };
  var zhHans = {
    "uni-popup.cancel": "\u53D6\u6D88",
    "uni-popup.ok": "\u786E\u5B9A",
    "uni-popup.placeholder": "\u8BF7\u8F93\u5165",
    "uni-popup.title": "\u63D0\u793A",
    "uni-popup.shareTitle": "\u5206\u4EAB\u5230"
  };
  var zhHant = {
    "uni-popup.cancel": "\u53D6\u6D88",
    "uni-popup.ok": "\u78BA\u5B9A",
    "uni-popup.placeholder": "\u8ACB\u8F38\u5165",
    "uni-popup.title": "\u63D0\u793A",
    "uni-popup.shareTitle": "\u5206\u4EAB\u5230"
  };
  var messages = {
    en: en$1,
    "zh-Hans": zhHans,
    "zh-Hant": zhHant
  };
  const { t: t$1 } = initVueI18n(messages);
  const _sfc_main$t = {
    name: "uniPopupDialog",
    mixins: [popup],
    emits: ["confirm", "close"],
    props: {
      value: {
        type: [String, Number],
        default: ""
      },
      placeholder: {
        type: [String, Number],
        default: ""
      },
      type: {
        type: String,
        default: "error"
      },
      mode: {
        type: String,
        default: "base"
      },
      title: {
        type: String,
        default: ""
      },
      content: {
        type: String,
        default: ""
      },
      beforeClose: {
        type: Boolean,
        default: false
      },
      cancelText: {
        type: String,
        default: ""
      },
      confirmText: {
        type: String,
        default: ""
      }
    },
    data() {
      return {
        dialogType: "error",
        focus: false,
        val: ""
      };
    },
    computed: {
      okText() {
        return this.confirmText || t$1("uni-popup.ok");
      },
      closeText() {
        return this.cancelText || t$1("uni-popup.cancel");
      },
      placeholderText() {
        return this.placeholder || t$1("uni-popup.placeholder");
      },
      titleText() {
        return this.title || t$1("uni-popup.title");
      }
    },
    watch: {
      type(val) {
        this.dialogType = val;
      },
      mode(val) {
        if (val === "input") {
          this.dialogType = "info";
        }
      },
      value(val) {
        this.val = val;
      }
    },
    created() {
      this.popup.disableMask();
      if (this.mode === "input") {
        this.dialogType = "info";
        this.val = this.value;
      } else {
        this.dialogType = this.type;
      }
    },
    mounted() {
      this.focus = true;
    },
    methods: {
      onOk() {
        if (this.mode === "input") {
          this.$emit("confirm", this.val);
        } else {
          this.$emit("confirm");
        }
        if (this.beforeClose)
          return;
        this.popup.close();
      },
      closeDialog() {
        this.$emit("close");
        if (this.beforeClose)
          return;
        this.popup.close();
      },
      close() {
        this.popup.close();
      }
    }
  };
  function _sfc_render$7(_ctx, _cache, $props, $setup, $data, $options) {
    return vue.openBlock(), vue.createElementBlock("view", { class: "uni-popup-dialog" }, [
      vue.createElementVNode("view", { class: "uni-dialog-title" }, [
        vue.createElementVNode("text", {
          class: vue.normalizeClass(["uni-dialog-title-text", ["uni-popup__" + $data.dialogType]])
        }, vue.toDisplayString($options.titleText), 3)
      ]),
      $props.mode === "base" ? (vue.openBlock(), vue.createElementBlock("view", {
        key: 0,
        class: "uni-dialog-content"
      }, [
        vue.renderSlot(_ctx.$slots, "default", {}, () => [
          vue.createElementVNode("text", { class: "uni-dialog-content-text" }, vue.toDisplayString($props.content), 1)
        ], true)
      ])) : (vue.openBlock(), vue.createElementBlock("view", {
        key: 1,
        class: "uni-dialog-content"
      }, [
        vue.renderSlot(_ctx.$slots, "default", {}, () => [
          vue.withDirectives(vue.createElementVNode("input", {
            class: "uni-dialog-input",
            "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => $data.val = $event),
            type: "text",
            placeholder: $options.placeholderText,
            focus: $data.focus
          }, null, 8, ["placeholder", "focus"]), [
            [vue.vModelText, $data.val]
          ])
        ], true)
      ])),
      vue.createElementVNode("view", { class: "uni-dialog-button-group" }, [
        vue.createElementVNode("view", {
          class: "uni-dialog-button",
          onClick: _cache[1] || (_cache[1] = (...args) => $options.closeDialog && $options.closeDialog(...args))
        }, [
          vue.createElementVNode("text", { class: "uni-dialog-button-text" }, vue.toDisplayString($options.closeText), 1)
        ]),
        vue.createElementVNode("view", {
          class: "uni-dialog-button uni-border-left",
          onClick: _cache[2] || (_cache[2] = (...args) => $options.onOk && $options.onOk(...args))
        }, [
          vue.createElementVNode("text", { class: "uni-dialog-button-text uni-button-color" }, vue.toDisplayString($options.okText), 1)
        ])
      ])
    ]);
  }
  var __easycom_0$2 = /* @__PURE__ */ _export_sfc(_sfc_main$t, [["render", _sfc_render$7], ["__scopeId", "data-v-6f54520a"], ["__file", "/Users/fox/project/uniapp/lok\u97F3\u4E50/uni_modules/uni-popup/components/uni-popup-dialog/uni-popup-dialog.vue"]]);
  class MPAnimation {
    constructor(options, _this) {
      this.options = options;
      this.animation = uni.createAnimation(options);
      this.currentStepAnimates = {};
      this.next = 0;
      this.$ = _this;
    }
    _nvuePushAnimates(type, args) {
      let aniObj = this.currentStepAnimates[this.next];
      let styles = {};
      if (!aniObj) {
        styles = {
          styles: {},
          config: {}
        };
      } else {
        styles = aniObj;
      }
      if (animateTypes1.includes(type)) {
        if (!styles.styles.transform) {
          styles.styles.transform = "";
        }
        let unit = "";
        if (type === "rotate") {
          unit = "deg";
        }
        styles.styles.transform += `${type}(${args + unit}) `;
      } else {
        styles.styles[type] = `${args}`;
      }
      this.currentStepAnimates[this.next] = styles;
    }
    _animateRun(styles = {}, config = {}) {
      let ref = this.$.$refs["ani"].ref;
      if (!ref)
        return;
      return new Promise((resolve, reject) => {
        nvueAnimation.transition(ref, __spreadValues({
          styles
        }, config), (res) => {
          resolve();
        });
      });
    }
    _nvueNextAnimate(animates, step = 0, fn2) {
      let obj = animates[step];
      if (obj) {
        let {
          styles,
          config
        } = obj;
        this._animateRun(styles, config).then(() => {
          step += 1;
          this._nvueNextAnimate(animates, step, fn2);
        });
      } else {
        this.currentStepAnimates = {};
        typeof fn2 === "function" && fn2();
        this.isEnd = true;
      }
    }
    step(config = {}) {
      this.animation.step(config);
      return this;
    }
    run(fn2) {
      this.$.animationData = this.animation.export();
      this.$.timer = setTimeout(() => {
        typeof fn2 === "function" && fn2();
      }, this.$.durationTime);
    }
  }
  const animateTypes1 = [
    "matrix",
    "matrix3d",
    "rotate",
    "rotate3d",
    "rotateX",
    "rotateY",
    "rotateZ",
    "scale",
    "scale3d",
    "scaleX",
    "scaleY",
    "scaleZ",
    "skew",
    "skewX",
    "skewY",
    "translate",
    "translate3d",
    "translateX",
    "translateY",
    "translateZ"
  ];
  const animateTypes2 = ["opacity", "backgroundColor"];
  const animateTypes3 = ["width", "height", "left", "right", "top", "bottom"];
  animateTypes1.concat(animateTypes2, animateTypes3).forEach((type) => {
    MPAnimation.prototype[type] = function(...args) {
      this.animation[type](...args);
      return this;
    };
  });
  function createAnimation(option, _this) {
    if (!_this)
      return;
    clearTimeout(_this.timer);
    return new MPAnimation(option, _this);
  }
  const _sfc_main$s = {
    name: "uniTransition",
    emits: ["click", "change"],
    props: {
      show: {
        type: Boolean,
        default: false
      },
      modeClass: {
        type: [Array, String],
        default() {
          return "fade";
        }
      },
      duration: {
        type: Number,
        default: 300
      },
      styles: {
        type: Object,
        default() {
          return {};
        }
      },
      customClass: {
        type: String,
        default: ""
      }
    },
    data() {
      return {
        isShow: false,
        transform: "",
        opacity: 1,
        animationData: {},
        durationTime: 300,
        config: {}
      };
    },
    watch: {
      show: {
        handler(newVal) {
          if (newVal) {
            this.open();
          } else {
            if (this.isShow) {
              this.close();
            }
          }
        },
        immediate: true
      }
    },
    computed: {
      stylesObject() {
        let styles = __spreadProps(__spreadValues({}, this.styles), {
          "transition-duration": this.duration / 1e3 + "s"
        });
        let transform = "";
        for (let i2 in styles) {
          let line = this.toLine(i2);
          transform += line + ":" + styles[i2] + ";";
        }
        return transform;
      },
      transformStyles() {
        return "transform:" + this.transform + ";opacity:" + this.opacity + ";" + this.stylesObject;
      }
    },
    created() {
      this.config = {
        duration: this.duration,
        timingFunction: "ease",
        transformOrigin: "50% 50%",
        delay: 0
      };
      this.durationTime = this.duration;
    },
    methods: {
      init(obj = {}) {
        if (obj.duration) {
          this.durationTime = obj.duration;
        }
        this.animation = createAnimation(Object.assign(this.config, obj), this);
      },
      onClick() {
        this.$emit("click", {
          detail: this.isShow
        });
      },
      step(obj, config = {}) {
        if (!this.animation)
          return;
        for (let i2 in obj) {
          try {
            if (typeof obj[i2] === "object") {
              this.animation[i2](...obj[i2]);
            } else {
              this.animation[i2](obj[i2]);
            }
          } catch (e) {
            formatAppLog("error", "at uni_modules/uni-transition/components/uni-transition/uni-transition.vue:139", `\u65B9\u6CD5 ${i2} \u4E0D\u5B58\u5728`);
          }
        }
        this.animation.step(config);
        return this;
      },
      run(fn2) {
        if (!this.animation)
          return;
        this.animation.run(fn2);
      },
      open() {
        clearTimeout(this.timer);
        this.transform = "";
        this.isShow = true;
        let { opacity, transform } = this.styleInit(false);
        if (typeof opacity !== "undefined") {
          this.opacity = opacity;
        }
        this.transform = transform;
        this.$nextTick(() => {
          this.timer = setTimeout(() => {
            this.animation = createAnimation(this.config, this);
            this.tranfromInit(false).step();
            this.animation.run();
            this.$emit("change", {
              detail: this.isShow
            });
          }, 20);
        });
      },
      close(type) {
        if (!this.animation)
          return;
        this.tranfromInit(true).step().run(() => {
          this.isShow = false;
          this.animationData = null;
          this.animation = null;
          let { opacity, transform } = this.styleInit(false);
          this.opacity = opacity || 1;
          this.transform = transform;
          this.$emit("change", {
            detail: this.isShow
          });
        });
      },
      styleInit(type) {
        let styles = {
          transform: ""
        };
        let buildStyle = (type2, mode) => {
          if (mode === "fade") {
            styles.opacity = this.animationType(type2)[mode];
          } else {
            styles.transform += this.animationType(type2)[mode] + " ";
          }
        };
        if (typeof this.modeClass === "string") {
          buildStyle(type, this.modeClass);
        } else {
          this.modeClass.forEach((mode) => {
            buildStyle(type, mode);
          });
        }
        return styles;
      },
      tranfromInit(type) {
        let buildTranfrom = (type2, mode) => {
          let aniNum = null;
          if (mode === "fade") {
            aniNum = type2 ? 0 : 1;
          } else {
            aniNum = type2 ? "-100%" : "0";
            if (mode === "zoom-in") {
              aniNum = type2 ? 0.8 : 1;
            }
            if (mode === "zoom-out") {
              aniNum = type2 ? 1.2 : 1;
            }
            if (mode === "slide-right") {
              aniNum = type2 ? "100%" : "0";
            }
            if (mode === "slide-bottom") {
              aniNum = type2 ? "100%" : "0";
            }
          }
          this.animation[this.animationMode()[mode]](aniNum);
        };
        if (typeof this.modeClass === "string") {
          buildTranfrom(type, this.modeClass);
        } else {
          this.modeClass.forEach((mode) => {
            buildTranfrom(type, mode);
          });
        }
        return this.animation;
      },
      animationType(type) {
        return {
          fade: type ? 1 : 0,
          "slide-top": `translateY(${type ? "0" : "-100%"})`,
          "slide-right": `translateX(${type ? "0" : "100%"})`,
          "slide-bottom": `translateY(${type ? "0" : "100%"})`,
          "slide-left": `translateX(${type ? "0" : "-100%"})`,
          "zoom-in": `scaleX(${type ? 1 : 0.8}) scaleY(${type ? 1 : 0.8})`,
          "zoom-out": `scaleX(${type ? 1 : 1.2}) scaleY(${type ? 1 : 1.2})`
        };
      },
      animationMode() {
        return {
          fade: "opacity",
          "slide-top": "translateY",
          "slide-right": "translateX",
          "slide-bottom": "translateY",
          "slide-left": "translateX",
          "zoom-in": "scale",
          "zoom-out": "scale"
        };
      },
      toLine(name) {
        return name.replace(/([A-Z])/g, "-$1").toLowerCase();
      }
    }
  };
  function _sfc_render$6(_ctx, _cache, $props, $setup, $data, $options) {
    return $data.isShow ? (vue.openBlock(), vue.createElementBlock("view", {
      key: 0,
      ref: "ani",
      animation: $data.animationData,
      class: vue.normalizeClass($props.customClass),
      style: vue.normalizeStyle($options.transformStyles),
      onClick: _cache[0] || (_cache[0] = (...args) => $options.onClick && $options.onClick(...args))
    }, [
      vue.renderSlot(_ctx.$slots, "default")
    ], 14, ["animation"])) : vue.createCommentVNode("v-if", true);
  }
  var __easycom_0$1 = /* @__PURE__ */ _export_sfc(_sfc_main$s, [["render", _sfc_render$6], ["__file", "/Users/fox/project/uniapp/lok\u97F3\u4E50/uni_modules/uni-transition/components/uni-transition/uni-transition.vue"]]);
  const _sfc_main$r = {
    name: "uniPopup",
    components: {},
    emits: ["change", "maskClick"],
    props: {
      animation: {
        type: Boolean,
        default: true
      },
      type: {
        type: String,
        default: "center"
      },
      isMaskClick: {
        type: Boolean,
        default: null
      },
      maskClick: {
        type: Boolean,
        default: null
      },
      backgroundColor: {
        type: String,
        default: "none"
      },
      safeArea: {
        type: Boolean,
        default: true
      },
      maskBackgroundColor: {
        type: String,
        default: "rgba(0, 0, 0, 0.4)"
      }
    },
    watch: {
      type: {
        handler: function(type) {
          if (!this.config[type])
            return;
          this[this.config[type]](true);
        },
        immediate: true
      },
      isDesktop: {
        handler: function(newVal) {
          if (!this.config[newVal])
            return;
          this[this.config[this.type]](true);
        },
        immediate: true
      },
      maskClick: {
        handler: function(val) {
          this.mkclick = val;
        },
        immediate: true
      },
      isMaskClick: {
        handler: function(val) {
          this.mkclick = val;
        },
        immediate: true
      },
      showPopup(show) {
      }
    },
    data() {
      return {
        duration: 300,
        ani: [],
        showPopup: false,
        showTrans: false,
        popupWidth: 0,
        popupHeight: 0,
        config: {
          top: "top",
          bottom: "bottom",
          center: "center",
          left: "left",
          right: "right",
          message: "top",
          dialog: "center",
          share: "bottom"
        },
        maskClass: {
          position: "fixed",
          bottom: 0,
          top: 0,
          left: 0,
          right: 0,
          backgroundColor: "rgba(0, 0, 0, 0.4)"
        },
        transClass: {
          position: "fixed",
          left: 0,
          right: 0
        },
        maskShow: true,
        mkclick: true,
        popupstyle: this.isDesktop ? "fixforpc-top" : "top"
      };
    },
    computed: {
      isDesktop() {
        return this.popupWidth >= 500 && this.popupHeight >= 500;
      },
      bg() {
        if (this.backgroundColor === "" || this.backgroundColor === "none") {
          return "transparent";
        }
        return this.backgroundColor;
      }
    },
    mounted() {
      const fixSize = () => {
        const {
          windowWidth,
          windowHeight,
          windowTop,
          safeArea,
          screenHeight,
          safeAreaInsets
        } = uni.getSystemInfoSync();
        this.popupWidth = windowWidth;
        this.popupHeight = windowHeight + (windowTop || 0);
        if (safeArea && this.safeArea) {
          this.safeAreaInsets = safeAreaInsets.bottom;
        } else {
          this.safeAreaInsets = 0;
        }
      };
      fixSize();
    },
    unmounted() {
      this.setH5Visible();
    },
    created() {
      if (this.isMaskClick === null && this.maskClick === null) {
        this.mkclick = true;
      } else {
        this.mkclick = this.isMaskClick !== null ? this.isMaskClick : this.maskClick;
      }
      if (this.animation) {
        this.duration = 300;
      } else {
        this.duration = 0;
      }
      this.messageChild = null;
      this.clearPropagation = false;
      this.maskClass.backgroundColor = this.maskBackgroundColor;
    },
    methods: {
      setH5Visible() {
      },
      closeMask() {
        this.maskShow = false;
      },
      disableMask() {
        this.mkclick = false;
      },
      clear(e) {
        e.stopPropagation();
        this.clearPropagation = true;
      },
      open(direction) {
        if (this.showPopup) {
          clearTimeout(this.timer);
          this.showPopup = false;
        }
        let innerType = ["top", "center", "bottom", "left", "right", "message", "dialog", "share"];
        if (!(direction && innerType.indexOf(direction) !== -1)) {
          direction = this.type;
        }
        if (!this.config[direction]) {
          formatAppLog("error", "at uni_modules/uni-popup/components/uni-popup/uni-popup.vue:280", "\u7F3A\u5C11\u7C7B\u578B\uFF1A", direction);
          return;
        }
        this[this.config[direction]]();
        this.$emit("change", {
          show: true,
          type: direction
        });
      },
      close(type) {
        this.showTrans = false;
        this.$emit("change", {
          show: false,
          type: this.type
        });
        clearTimeout(this.timer);
        this.timer = setTimeout(() => {
          this.showPopup = false;
        }, 300);
      },
      touchstart() {
        this.clearPropagation = false;
      },
      onTap() {
        if (this.clearPropagation) {
          this.clearPropagation = false;
          return;
        }
        this.$emit("maskClick");
        if (!this.mkclick)
          return;
        this.close();
      },
      top(type) {
        this.popupstyle = this.isDesktop ? "fixforpc-top" : "top";
        this.ani = ["slide-top"];
        this.transClass = {
          position: "fixed",
          left: 0,
          right: 0,
          backgroundColor: this.bg
        };
        if (type)
          return;
        this.showPopup = true;
        this.showTrans = true;
        this.$nextTick(() => {
          if (this.messageChild && this.type === "message") {
            this.messageChild.timerClose();
          }
        });
      },
      bottom(type) {
        this.popupstyle = "bottom";
        this.ani = ["slide-bottom"];
        this.transClass = {
          position: "fixed",
          left: 0,
          right: 0,
          bottom: 0,
          paddingBottom: this.safeAreaInsets + "px",
          backgroundColor: this.bg
        };
        if (type)
          return;
        this.showPopup = true;
        this.showTrans = true;
      },
      center(type) {
        this.popupstyle = "center";
        this.ani = ["zoom-out", "fade"];
        this.transClass = {
          position: "fixed",
          display: "flex",
          flexDirection: "column",
          bottom: 0,
          left: 0,
          right: 0,
          top: 0,
          justifyContent: "center",
          alignItems: "center"
        };
        if (type)
          return;
        this.showPopup = true;
        this.showTrans = true;
      },
      left(type) {
        this.popupstyle = "left";
        this.ani = ["slide-left"];
        this.transClass = {
          position: "fixed",
          left: 0,
          bottom: 0,
          top: 0,
          backgroundColor: this.bg,
          display: "flex",
          flexDirection: "column"
        };
        if (type)
          return;
        this.showPopup = true;
        this.showTrans = true;
      },
      right(type) {
        this.popupstyle = "right";
        this.ani = ["slide-right"];
        this.transClass = {
          position: "fixed",
          bottom: 0,
          right: 0,
          top: 0,
          backgroundColor: this.bg,
          display: "flex",
          flexDirection: "column"
        };
        if (type)
          return;
        this.showPopup = true;
        this.showTrans = true;
      }
    }
  };
  function _sfc_render$5(_ctx, _cache, $props, $setup, $data, $options) {
    const _component_uni_transition = resolveEasycom(vue.resolveDynamicComponent("uni-transition"), __easycom_0$1);
    return $data.showPopup ? (vue.openBlock(), vue.createElementBlock("view", {
      key: 0,
      class: vue.normalizeClass(["uni-popup", [$data.popupstyle, $options.isDesktop ? "fixforpc-z-index" : ""]])
    }, [
      vue.createElementVNode("view", {
        onTouchstart: _cache[1] || (_cache[1] = (...args) => $options.touchstart && $options.touchstart(...args))
      }, [
        $data.maskShow ? (vue.openBlock(), vue.createBlock(_component_uni_transition, {
          key: "1",
          name: "mask",
          "mode-class": "fade",
          styles: $data.maskClass,
          duration: $data.duration,
          show: $data.showTrans,
          onClick: $options.onTap
        }, null, 8, ["styles", "duration", "show", "onClick"])) : vue.createCommentVNode("v-if", true),
        vue.createVNode(_component_uni_transition, {
          key: "2",
          "mode-class": $data.ani,
          name: "content",
          styles: $data.transClass,
          duration: $data.duration,
          show: $data.showTrans,
          onClick: $options.onTap
        }, {
          default: vue.withCtx(() => [
            vue.createElementVNode("view", {
              class: vue.normalizeClass(["uni-popup__wrapper", [$data.popupstyle]]),
              style: vue.normalizeStyle({ backgroundColor: $options.bg }),
              onClick: _cache[0] || (_cache[0] = (...args) => $options.clear && $options.clear(...args))
            }, [
              vue.renderSlot(_ctx.$slots, "default", {}, void 0, true)
            ], 6)
          ]),
          _: 3
        }, 8, ["mode-class", "styles", "duration", "show", "onClick"])
      ], 32)
    ], 2)) : vue.createCommentVNode("v-if", true);
  }
  var __easycom_1$1 = /* @__PURE__ */ _export_sfc(_sfc_main$r, [["render", _sfc_render$5], ["__scopeId", "data-v-7c43d41b"], ["__file", "/Users/fox/project/uniapp/lok\u97F3\u4E50/uni_modules/uni-popup/components/uni-popup/uni-popup.vue"]]);
  var shape1 = "/static/image/Shape1.png";
  var shape2 = "/static/image/Shape2.png";
  var shape3 = "/static/image/Shape3.png";
  function getDevtoolsGlobalHook() {
    return getTarget().__VUE_DEVTOOLS_GLOBAL_HOOK__;
  }
  function getTarget() {
    return typeof navigator !== "undefined" && typeof window !== "undefined" ? window : typeof global !== "undefined" ? global : {};
  }
  const isProxyAvailable = typeof Proxy === "function";
  const HOOK_SETUP = "devtools-plugin:setup";
  const HOOK_PLUGIN_SETTINGS_SET = "plugin:settings:set";
  class ApiProxy {
    constructor(plugin, hook) {
      this.target = null;
      this.targetQueue = [];
      this.onQueue = [];
      this.plugin = plugin;
      this.hook = hook;
      const defaultSettings = {};
      if (plugin.settings) {
        for (const id in plugin.settings) {
          const item = plugin.settings[id];
          defaultSettings[id] = item.defaultValue;
        }
      }
      const localSettingsSaveId = `__vue-devtools-plugin-settings__${plugin.id}`;
      let currentSettings = __spreadValues({}, defaultSettings);
      try {
        const raw = localStorage.getItem(localSettingsSaveId);
        const data = JSON.parse(raw);
        Object.assign(currentSettings, data);
      } catch (e) {
      }
      this.fallbacks = {
        getSettings() {
          return currentSettings;
        },
        setSettings(value) {
          try {
            localStorage.setItem(localSettingsSaveId, JSON.stringify(value));
          } catch (e) {
          }
          currentSettings = value;
        }
      };
      hook.on(HOOK_PLUGIN_SETTINGS_SET, (pluginId, value) => {
        if (pluginId === this.plugin.id) {
          this.fallbacks.setSettings(value);
        }
      });
      this.proxiedOn = new Proxy({}, {
        get: (_target, prop) => {
          if (this.target) {
            return this.target.on[prop];
          } else {
            return (...args) => {
              this.onQueue.push({
                method: prop,
                args
              });
            };
          }
        }
      });
      this.proxiedTarget = new Proxy({}, {
        get: (_target, prop) => {
          if (this.target) {
            return this.target[prop];
          } else if (prop === "on") {
            return this.proxiedOn;
          } else if (Object.keys(this.fallbacks).includes(prop)) {
            return (...args) => {
              this.targetQueue.push({
                method: prop,
                args,
                resolve: () => {
                }
              });
              return this.fallbacks[prop](...args);
            };
          } else {
            return (...args) => {
              return new Promise((resolve) => {
                this.targetQueue.push({
                  method: prop,
                  args,
                  resolve
                });
              });
            };
          }
        }
      });
    }
    async setRealTarget(target) {
      this.target = target;
      for (const item of this.onQueue) {
        this.target.on[item.method](...item.args);
      }
      for (const item of this.targetQueue) {
        item.resolve(await this.target[item.method](...item.args));
      }
    }
  }
  function setupDevtoolsPlugin(pluginDescriptor, setupFn) {
    const target = getTarget();
    const hook = getDevtoolsGlobalHook();
    const enableProxy = isProxyAvailable && pluginDescriptor.enableEarlyProxy;
    if (hook && (target.__VUE_DEVTOOLS_PLUGIN_API_AVAILABLE__ || !enableProxy)) {
      hook.emit(HOOK_SETUP, pluginDescriptor, setupFn);
    } else {
      const proxy = enableProxy ? new ApiProxy(pluginDescriptor, hook) : null;
      const list = target.__VUE_DEVTOOLS_PLUGINS__ = target.__VUE_DEVTOOLS_PLUGINS__ || [];
      list.push({
        pluginDescriptor,
        setupFn,
        proxy
      });
      if (proxy)
        setupFn(proxy.proxiedTarget);
    }
  }
  /*!
   * vuex v4.0.2
   * (c) 2021 Evan You
   * @license MIT
   */
  var storeKey = "store";
  function forEachValue(obj, fn2) {
    Object.keys(obj).forEach(function(key) {
      return fn2(obj[key], key);
    });
  }
  function isObject(obj) {
    return obj !== null && typeof obj === "object";
  }
  function isPromise(val) {
    return val && typeof val.then === "function";
  }
  function assert(condition, msg) {
    if (!condition) {
      throw new Error("[vuex] " + msg);
    }
  }
  function partial(fn2, arg) {
    return function() {
      return fn2(arg);
    };
  }
  function genericSubscribe(fn2, subs, options) {
    if (subs.indexOf(fn2) < 0) {
      options && options.prepend ? subs.unshift(fn2) : subs.push(fn2);
    }
    return function() {
      var i2 = subs.indexOf(fn2);
      if (i2 > -1) {
        subs.splice(i2, 1);
      }
    };
  }
  function resetStore(store2, hot) {
    store2._actions = /* @__PURE__ */ Object.create(null);
    store2._mutations = /* @__PURE__ */ Object.create(null);
    store2._wrappedGetters = /* @__PURE__ */ Object.create(null);
    store2._modulesNamespaceMap = /* @__PURE__ */ Object.create(null);
    var state = store2.state;
    installModule(store2, state, [], store2._modules.root, true);
    resetStoreState(store2, state, hot);
  }
  function resetStoreState(store2, state, hot) {
    var oldState = store2._state;
    store2.getters = {};
    store2._makeLocalGettersCache = /* @__PURE__ */ Object.create(null);
    var wrappedGetters = store2._wrappedGetters;
    var computedObj = {};
    forEachValue(wrappedGetters, function(fn2, key) {
      computedObj[key] = partial(fn2, store2);
      Object.defineProperty(store2.getters, key, {
        get: function() {
          return computedObj[key]();
        },
        enumerable: true
      });
    });
    store2._state = vue.reactive({
      data: state
    });
    if (store2.strict) {
      enableStrictMode(store2);
    }
    if (oldState) {
      if (hot) {
        store2._withCommit(function() {
          oldState.data = null;
        });
      }
    }
  }
  function installModule(store2, rootState, path, module, hot) {
    var isRoot = !path.length;
    var namespace = store2._modules.getNamespace(path);
    if (module.namespaced) {
      if (store2._modulesNamespaceMap[namespace] && true) {
        console.error("[vuex] duplicate namespace " + namespace + " for the namespaced module " + path.join("/"));
      }
      store2._modulesNamespaceMap[namespace] = module;
    }
    if (!isRoot && !hot) {
      var parentState = getNestedState(rootState, path.slice(0, -1));
      var moduleName = path[path.length - 1];
      store2._withCommit(function() {
        {
          if (moduleName in parentState) {
            console.warn('[vuex] state field "' + moduleName + '" was overridden by a module with the same name at "' + path.join(".") + '"');
          }
        }
        parentState[moduleName] = module.state;
      });
    }
    var local = module.context = makeLocalContext(store2, namespace, path);
    module.forEachMutation(function(mutation, key) {
      var namespacedType = namespace + key;
      registerMutation(store2, namespacedType, mutation, local);
    });
    module.forEachAction(function(action, key) {
      var type = action.root ? key : namespace + key;
      var handler = action.handler || action;
      registerAction(store2, type, handler, local);
    });
    module.forEachGetter(function(getter, key) {
      var namespacedType = namespace + key;
      registerGetter(store2, namespacedType, getter, local);
    });
    module.forEachChild(function(child, key) {
      installModule(store2, rootState, path.concat(key), child, hot);
    });
  }
  function makeLocalContext(store2, namespace, path) {
    var noNamespace = namespace === "";
    var local = {
      dispatch: noNamespace ? store2.dispatch : function(_type, _payload, _options) {
        var args = unifyObjectStyle(_type, _payload, _options);
        var payload = args.payload;
        var options = args.options;
        var type = args.type;
        if (!options || !options.root) {
          type = namespace + type;
          if (!store2._actions[type]) {
            console.error("[vuex] unknown local action type: " + args.type + ", global type: " + type);
            return;
          }
        }
        return store2.dispatch(type, payload);
      },
      commit: noNamespace ? store2.commit : function(_type, _payload, _options) {
        var args = unifyObjectStyle(_type, _payload, _options);
        var payload = args.payload;
        var options = args.options;
        var type = args.type;
        if (!options || !options.root) {
          type = namespace + type;
          if (!store2._mutations[type]) {
            console.error("[vuex] unknown local mutation type: " + args.type + ", global type: " + type);
            return;
          }
        }
        store2.commit(type, payload, options);
      }
    };
    Object.defineProperties(local, {
      getters: {
        get: noNamespace ? function() {
          return store2.getters;
        } : function() {
          return makeLocalGetters(store2, namespace);
        }
      },
      state: {
        get: function() {
          return getNestedState(store2.state, path);
        }
      }
    });
    return local;
  }
  function makeLocalGetters(store2, namespace) {
    if (!store2._makeLocalGettersCache[namespace]) {
      var gettersProxy = {};
      var splitPos = namespace.length;
      Object.keys(store2.getters).forEach(function(type) {
        if (type.slice(0, splitPos) !== namespace) {
          return;
        }
        var localType = type.slice(splitPos);
        Object.defineProperty(gettersProxy, localType, {
          get: function() {
            return store2.getters[type];
          },
          enumerable: true
        });
      });
      store2._makeLocalGettersCache[namespace] = gettersProxy;
    }
    return store2._makeLocalGettersCache[namespace];
  }
  function registerMutation(store2, type, handler, local) {
    var entry = store2._mutations[type] || (store2._mutations[type] = []);
    entry.push(function wrappedMutationHandler(payload) {
      handler.call(store2, local.state, payload);
    });
  }
  function registerAction(store2, type, handler, local) {
    var entry = store2._actions[type] || (store2._actions[type] = []);
    entry.push(function wrappedActionHandler(payload) {
      var res = handler.call(store2, {
        dispatch: local.dispatch,
        commit: local.commit,
        getters: local.getters,
        state: local.state,
        rootGetters: store2.getters,
        rootState: store2.state
      }, payload);
      if (!isPromise(res)) {
        res = Promise.resolve(res);
      }
      if (store2._devtoolHook) {
        return res.catch(function(err) {
          store2._devtoolHook.emit("vuex:error", err);
          throw err;
        });
      } else {
        return res;
      }
    });
  }
  function registerGetter(store2, type, rawGetter, local) {
    if (store2._wrappedGetters[type]) {
      {
        console.error("[vuex] duplicate getter key: " + type);
      }
      return;
    }
    store2._wrappedGetters[type] = function wrappedGetter(store3) {
      return rawGetter(local.state, local.getters, store3.state, store3.getters);
    };
  }
  function enableStrictMode(store2) {
    vue.watch(function() {
      return store2._state.data;
    }, function() {
      {
        assert(store2._committing, "do not mutate vuex store state outside mutation handlers.");
      }
    }, { deep: true, flush: "sync" });
  }
  function getNestedState(state, path) {
    return path.reduce(function(state2, key) {
      return state2[key];
    }, state);
  }
  function unifyObjectStyle(type, payload, options) {
    if (isObject(type) && type.type) {
      options = payload;
      payload = type;
      type = type.type;
    }
    {
      assert(typeof type === "string", "expects string as the type, but found " + typeof type + ".");
    }
    return { type, payload, options };
  }
  var LABEL_VUEX_BINDINGS = "vuex bindings";
  var MUTATIONS_LAYER_ID = "vuex:mutations";
  var ACTIONS_LAYER_ID = "vuex:actions";
  var INSPECTOR_ID = "vuex";
  var actionId = 0;
  function addDevtools(app, store2) {
    setupDevtoolsPlugin({
      id: "org.vuejs.vuex",
      app,
      label: "Vuex",
      homepage: "https://next.vuex.vuejs.org/",
      logo: "https://vuejs.org/images/icons/favicon-96x96.png",
      packageName: "vuex",
      componentStateTypes: [LABEL_VUEX_BINDINGS]
    }, function(api) {
      api.addTimelineLayer({
        id: MUTATIONS_LAYER_ID,
        label: "Vuex Mutations",
        color: COLOR_LIME_500
      });
      api.addTimelineLayer({
        id: ACTIONS_LAYER_ID,
        label: "Vuex Actions",
        color: COLOR_LIME_500
      });
      api.addInspector({
        id: INSPECTOR_ID,
        label: "Vuex",
        icon: "storage",
        treeFilterPlaceholder: "Filter stores..."
      });
      api.on.getInspectorTree(function(payload) {
        if (payload.app === app && payload.inspectorId === INSPECTOR_ID) {
          if (payload.filter) {
            var nodes = [];
            flattenStoreForInspectorTree(nodes, store2._modules.root, payload.filter, "");
            payload.rootNodes = nodes;
          } else {
            payload.rootNodes = [
              formatStoreForInspectorTree(store2._modules.root, "")
            ];
          }
        }
      });
      api.on.getInspectorState(function(payload) {
        if (payload.app === app && payload.inspectorId === INSPECTOR_ID) {
          var modulePath = payload.nodeId;
          makeLocalGetters(store2, modulePath);
          payload.state = formatStoreForInspectorState(getStoreModule(store2._modules, modulePath), modulePath === "root" ? store2.getters : store2._makeLocalGettersCache, modulePath);
        }
      });
      api.on.editInspectorState(function(payload) {
        if (payload.app === app && payload.inspectorId === INSPECTOR_ID) {
          var modulePath = payload.nodeId;
          var path = payload.path;
          if (modulePath !== "root") {
            path = modulePath.split("/").filter(Boolean).concat(path);
          }
          store2._withCommit(function() {
            payload.set(store2._state.data, path, payload.state.value);
          });
        }
      });
      store2.subscribe(function(mutation, state) {
        var data = {};
        if (mutation.payload) {
          data.payload = mutation.payload;
        }
        data.state = state;
        api.notifyComponentUpdate();
        api.sendInspectorTree(INSPECTOR_ID);
        api.sendInspectorState(INSPECTOR_ID);
        api.addTimelineEvent({
          layerId: MUTATIONS_LAYER_ID,
          event: {
            time: Date.now(),
            title: mutation.type,
            data
          }
        });
      });
      store2.subscribeAction({
        before: function(action, state) {
          var data = {};
          if (action.payload) {
            data.payload = action.payload;
          }
          action._id = actionId++;
          action._time = Date.now();
          data.state = state;
          api.addTimelineEvent({
            layerId: ACTIONS_LAYER_ID,
            event: {
              time: action._time,
              title: action.type,
              groupId: action._id,
              subtitle: "start",
              data
            }
          });
        },
        after: function(action, state) {
          var data = {};
          var duration = Date.now() - action._time;
          data.duration = {
            _custom: {
              type: "duration",
              display: duration + "ms",
              tooltip: "Action duration",
              value: duration
            }
          };
          if (action.payload) {
            data.payload = action.payload;
          }
          data.state = state;
          api.addTimelineEvent({
            layerId: ACTIONS_LAYER_ID,
            event: {
              time: Date.now(),
              title: action.type,
              groupId: action._id,
              subtitle: "end",
              data
            }
          });
        }
      });
    });
  }
  var COLOR_LIME_500 = 8702998;
  var COLOR_DARK = 6710886;
  var COLOR_WHITE = 16777215;
  var TAG_NAMESPACED = {
    label: "namespaced",
    textColor: COLOR_WHITE,
    backgroundColor: COLOR_DARK
  };
  function extractNameFromPath(path) {
    return path && path !== "root" ? path.split("/").slice(-2, -1)[0] : "Root";
  }
  function formatStoreForInspectorTree(module, path) {
    return {
      id: path || "root",
      label: extractNameFromPath(path),
      tags: module.namespaced ? [TAG_NAMESPACED] : [],
      children: Object.keys(module._children).map(function(moduleName) {
        return formatStoreForInspectorTree(module._children[moduleName], path + moduleName + "/");
      })
    };
  }
  function flattenStoreForInspectorTree(result, module, filter, path) {
    if (path.includes(filter)) {
      result.push({
        id: path || "root",
        label: path.endsWith("/") ? path.slice(0, path.length - 1) : path || "Root",
        tags: module.namespaced ? [TAG_NAMESPACED] : []
      });
    }
    Object.keys(module._children).forEach(function(moduleName) {
      flattenStoreForInspectorTree(result, module._children[moduleName], filter, path + moduleName + "/");
    });
  }
  function formatStoreForInspectorState(module, getters, path) {
    getters = path === "root" ? getters : getters[path];
    var gettersKeys = Object.keys(getters);
    var storeState = {
      state: Object.keys(module.state).map(function(key) {
        return {
          key,
          editable: true,
          value: module.state[key]
        };
      })
    };
    if (gettersKeys.length) {
      var tree = transformPathsToObjectTree(getters);
      storeState.getters = Object.keys(tree).map(function(key) {
        return {
          key: key.endsWith("/") ? extractNameFromPath(key) : key,
          editable: false,
          value: canThrow(function() {
            return tree[key];
          })
        };
      });
    }
    return storeState;
  }
  function transformPathsToObjectTree(getters) {
    var result = {};
    Object.keys(getters).forEach(function(key) {
      var path = key.split("/");
      if (path.length > 1) {
        var target = result;
        var leafKey = path.pop();
        path.forEach(function(p2) {
          if (!target[p2]) {
            target[p2] = {
              _custom: {
                value: {},
                display: p2,
                tooltip: "Module",
                abstract: true
              }
            };
          }
          target = target[p2]._custom.value;
        });
        target[leafKey] = canThrow(function() {
          return getters[key];
        });
      } else {
        result[key] = canThrow(function() {
          return getters[key];
        });
      }
    });
    return result;
  }
  function getStoreModule(moduleMap, path) {
    var names = path.split("/").filter(function(n2) {
      return n2;
    });
    return names.reduce(function(module, moduleName, i2) {
      var child = module[moduleName];
      if (!child) {
        throw new Error('Missing module "' + moduleName + '" for path "' + path + '".');
      }
      return i2 === names.length - 1 ? child : child._children;
    }, path === "root" ? moduleMap : moduleMap.root._children);
  }
  function canThrow(cb) {
    try {
      return cb();
    } catch (e) {
      return e;
    }
  }
  var Module = function Module2(rawModule, runtime) {
    this.runtime = runtime;
    this._children = /* @__PURE__ */ Object.create(null);
    this._rawModule = rawModule;
    var rawState = rawModule.state;
    this.state = (typeof rawState === "function" ? rawState() : rawState) || {};
  };
  var prototypeAccessors$1 = { namespaced: { configurable: true } };
  prototypeAccessors$1.namespaced.get = function() {
    return !!this._rawModule.namespaced;
  };
  Module.prototype.addChild = function addChild(key, module) {
    this._children[key] = module;
  };
  Module.prototype.removeChild = function removeChild(key) {
    delete this._children[key];
  };
  Module.prototype.getChild = function getChild(key) {
    return this._children[key];
  };
  Module.prototype.hasChild = function hasChild(key) {
    return key in this._children;
  };
  Module.prototype.update = function update2(rawModule) {
    this._rawModule.namespaced = rawModule.namespaced;
    if (rawModule.actions) {
      this._rawModule.actions = rawModule.actions;
    }
    if (rawModule.mutations) {
      this._rawModule.mutations = rawModule.mutations;
    }
    if (rawModule.getters) {
      this._rawModule.getters = rawModule.getters;
    }
  };
  Module.prototype.forEachChild = function forEachChild(fn2) {
    forEachValue(this._children, fn2);
  };
  Module.prototype.forEachGetter = function forEachGetter(fn2) {
    if (this._rawModule.getters) {
      forEachValue(this._rawModule.getters, fn2);
    }
  };
  Module.prototype.forEachAction = function forEachAction(fn2) {
    if (this._rawModule.actions) {
      forEachValue(this._rawModule.actions, fn2);
    }
  };
  Module.prototype.forEachMutation = function forEachMutation(fn2) {
    if (this._rawModule.mutations) {
      forEachValue(this._rawModule.mutations, fn2);
    }
  };
  Object.defineProperties(Module.prototype, prototypeAccessors$1);
  var ModuleCollection = function ModuleCollection2(rawRootModule) {
    this.register([], rawRootModule, false);
  };
  ModuleCollection.prototype.get = function get(path) {
    return path.reduce(function(module, key) {
      return module.getChild(key);
    }, this.root);
  };
  ModuleCollection.prototype.getNamespace = function getNamespace(path) {
    var module = this.root;
    return path.reduce(function(namespace, key) {
      module = module.getChild(key);
      return namespace + (module.namespaced ? key + "/" : "");
    }, "");
  };
  ModuleCollection.prototype.update = function update$1(rawRootModule) {
    update([], this.root, rawRootModule);
  };
  ModuleCollection.prototype.register = function register2(path, rawModule, runtime) {
    var this$1$1 = this;
    if (runtime === void 0)
      runtime = true;
    {
      assertRawModule(path, rawModule);
    }
    var newModule = new Module(rawModule, runtime);
    if (path.length === 0) {
      this.root = newModule;
    } else {
      var parent = this.get(path.slice(0, -1));
      parent.addChild(path[path.length - 1], newModule);
    }
    if (rawModule.modules) {
      forEachValue(rawModule.modules, function(rawChildModule, key) {
        this$1$1.register(path.concat(key), rawChildModule, runtime);
      });
    }
  };
  ModuleCollection.prototype.unregister = function unregister(path) {
    var parent = this.get(path.slice(0, -1));
    var key = path[path.length - 1];
    var child = parent.getChild(key);
    if (!child) {
      {
        console.warn("[vuex] trying to unregister module '" + key + "', which is not registered");
      }
      return;
    }
    if (!child.runtime) {
      return;
    }
    parent.removeChild(key);
  };
  ModuleCollection.prototype.isRegistered = function isRegistered(path) {
    var parent = this.get(path.slice(0, -1));
    var key = path[path.length - 1];
    if (parent) {
      return parent.hasChild(key);
    }
    return false;
  };
  function update(path, targetModule, newModule) {
    {
      assertRawModule(path, newModule);
    }
    targetModule.update(newModule);
    if (newModule.modules) {
      for (var key in newModule.modules) {
        if (!targetModule.getChild(key)) {
          {
            console.warn("[vuex] trying to add a new module '" + key + "' on hot reloading, manual reload is needed");
          }
          return;
        }
        update(path.concat(key), targetModule.getChild(key), newModule.modules[key]);
      }
    }
  }
  var functionAssert = {
    assert: function(value) {
      return typeof value === "function";
    },
    expected: "function"
  };
  var objectAssert = {
    assert: function(value) {
      return typeof value === "function" || typeof value === "object" && typeof value.handler === "function";
    },
    expected: 'function or object with "handler" function'
  };
  var assertTypes = {
    getters: functionAssert,
    mutations: functionAssert,
    actions: objectAssert
  };
  function assertRawModule(path, rawModule) {
    Object.keys(assertTypes).forEach(function(key) {
      if (!rawModule[key]) {
        return;
      }
      var assertOptions = assertTypes[key];
      forEachValue(rawModule[key], function(value, type) {
        assert(assertOptions.assert(value), makeAssertionMessage(path, key, type, value, assertOptions.expected));
      });
    });
  }
  function makeAssertionMessage(path, key, type, value, expected) {
    var buf = key + " should be " + expected + ' but "' + key + "." + type + '"';
    if (path.length > 0) {
      buf += ' in module "' + path.join(".") + '"';
    }
    buf += " is " + JSON.stringify(value) + ".";
    return buf;
  }
  function createStore(options) {
    return new Store(options);
  }
  var Store = function Store2(options) {
    var this$1$1 = this;
    if (options === void 0)
      options = {};
    {
      assert(typeof Promise !== "undefined", "vuex requires a Promise polyfill in this browser.");
      assert(this instanceof Store2, "store must be called with the new operator.");
    }
    var plugins = options.plugins;
    if (plugins === void 0)
      plugins = [];
    var strict = options.strict;
    if (strict === void 0)
      strict = false;
    var devtools = options.devtools;
    this._committing = false;
    this._actions = /* @__PURE__ */ Object.create(null);
    this._actionSubscribers = [];
    this._mutations = /* @__PURE__ */ Object.create(null);
    this._wrappedGetters = /* @__PURE__ */ Object.create(null);
    this._modules = new ModuleCollection(options);
    this._modulesNamespaceMap = /* @__PURE__ */ Object.create(null);
    this._subscribers = [];
    this._makeLocalGettersCache = /* @__PURE__ */ Object.create(null);
    this._devtools = devtools;
    var store2 = this;
    var ref = this;
    var dispatch = ref.dispatch;
    var commit = ref.commit;
    this.dispatch = function boundDispatch(type, payload) {
      return dispatch.call(store2, type, payload);
    };
    this.commit = function boundCommit(type, payload, options2) {
      return commit.call(store2, type, payload, options2);
    };
    this.strict = strict;
    var state = this._modules.root.state;
    installModule(this, state, [], this._modules.root);
    resetStoreState(this, state);
    plugins.forEach(function(plugin) {
      return plugin(this$1$1);
    });
  };
  var prototypeAccessors = { state: { configurable: true } };
  Store.prototype.install = function install(app, injectKey) {
    app.provide(injectKey || storeKey, this);
    app.config.globalProperties.$store = this;
    var useDevtools = this._devtools !== void 0 ? this._devtools : true;
    if (useDevtools) {
      addDevtools(app, this);
    }
  };
  prototypeAccessors.state.get = function() {
    return this._state.data;
  };
  prototypeAccessors.state.set = function(v2) {
    {
      assert(false, "use store.replaceState() to explicit replace store state.");
    }
  };
  Store.prototype.commit = function commit(_type, _payload, _options) {
    var this$1$1 = this;
    var ref = unifyObjectStyle(_type, _payload, _options);
    var type = ref.type;
    var payload = ref.payload;
    var options = ref.options;
    var mutation = { type, payload };
    var entry = this._mutations[type];
    if (!entry) {
      {
        console.error("[vuex] unknown mutation type: " + type);
      }
      return;
    }
    this._withCommit(function() {
      entry.forEach(function commitIterator(handler) {
        handler(payload);
      });
    });
    this._subscribers.slice().forEach(function(sub) {
      return sub(mutation, this$1$1.state);
    });
    if (options && options.silent) {
      console.warn("[vuex] mutation type: " + type + ". Silent option has been removed. Use the filter functionality in the vue-devtools");
    }
  };
  Store.prototype.dispatch = function dispatch(_type, _payload) {
    var this$1$1 = this;
    var ref = unifyObjectStyle(_type, _payload);
    var type = ref.type;
    var payload = ref.payload;
    var action = { type, payload };
    var entry = this._actions[type];
    if (!entry) {
      {
        console.error("[vuex] unknown action type: " + type);
      }
      return;
    }
    try {
      this._actionSubscribers.slice().filter(function(sub) {
        return sub.before;
      }).forEach(function(sub) {
        return sub.before(action, this$1$1.state);
      });
    } catch (e) {
      {
        console.warn("[vuex] error in before action subscribers: ");
        console.error(e);
      }
    }
    var result = entry.length > 1 ? Promise.all(entry.map(function(handler) {
      return handler(payload);
    })) : entry[0](payload);
    return new Promise(function(resolve, reject) {
      result.then(function(res) {
        try {
          this$1$1._actionSubscribers.filter(function(sub) {
            return sub.after;
          }).forEach(function(sub) {
            return sub.after(action, this$1$1.state);
          });
        } catch (e) {
          {
            console.warn("[vuex] error in after action subscribers: ");
            console.error(e);
          }
        }
        resolve(res);
      }, function(error) {
        try {
          this$1$1._actionSubscribers.filter(function(sub) {
            return sub.error;
          }).forEach(function(sub) {
            return sub.error(action, this$1$1.state, error);
          });
        } catch (e) {
          {
            console.warn("[vuex] error in error action subscribers: ");
            console.error(e);
          }
        }
        reject(error);
      });
    });
  };
  Store.prototype.subscribe = function subscribe(fn2, options) {
    return genericSubscribe(fn2, this._subscribers, options);
  };
  Store.prototype.subscribeAction = function subscribeAction(fn2, options) {
    var subs = typeof fn2 === "function" ? { before: fn2 } : fn2;
    return genericSubscribe(subs, this._actionSubscribers, options);
  };
  Store.prototype.watch = function watch$1(getter, cb, options) {
    var this$1$1 = this;
    {
      assert(typeof getter === "function", "store.watch only accepts a function.");
    }
    return vue.watch(function() {
      return getter(this$1$1.state, this$1$1.getters);
    }, cb, Object.assign({}, options));
  };
  Store.prototype.replaceState = function replaceState(state) {
    var this$1$1 = this;
    this._withCommit(function() {
      this$1$1._state.data = state;
    });
  };
  Store.prototype.registerModule = function registerModule(path, rawModule, options) {
    if (options === void 0)
      options = {};
    if (typeof path === "string") {
      path = [path];
    }
    {
      assert(Array.isArray(path), "module path must be a string or an Array.");
      assert(path.length > 0, "cannot register the root module by using registerModule.");
    }
    this._modules.register(path, rawModule);
    installModule(this, this.state, path, this._modules.get(path), options.preserveState);
    resetStoreState(this, this.state);
  };
  Store.prototype.unregisterModule = function unregisterModule(path) {
    var this$1$1 = this;
    if (typeof path === "string") {
      path = [path];
    }
    {
      assert(Array.isArray(path), "module path must be a string or an Array.");
    }
    this._modules.unregister(path);
    this._withCommit(function() {
      var parentState = getNestedState(this$1$1.state, path.slice(0, -1));
      delete parentState[path[path.length - 1]];
    });
    resetStore(this);
  };
  Store.prototype.hasModule = function hasModule(path) {
    if (typeof path === "string") {
      path = [path];
    }
    {
      assert(Array.isArray(path), "module path must be a string or an Array.");
    }
    return this._modules.isRegistered(path);
  };
  Store.prototype.hotUpdate = function hotUpdate(newOptions) {
    this._modules.update(newOptions);
    resetStore(this, true);
  };
  Store.prototype._withCommit = function _withCommit(fn2) {
    var committing = this._committing;
    this._committing = true;
    fn2();
    this._committing = committing;
  };
  Object.defineProperties(Store.prototype, prototypeAccessors);
  const setStorage = (key, data) => {
    uni.setStorage({
      key,
      data: JSON.stringify(data),
      success(val) {
      },
      fail() {
      }
    });
  };
  const getStorage = (key) => {
    const data = uni.getStorageSync(key);
    if (data) {
      return JSON.parse(data);
    } else {
      return "";
    }
  };
  const removeStorage = (key) => {
    uni.removeStorageSync(key);
  };
  const clearStorage = () => {
    uni.clearStorage();
  };
  var unistroage = {
    setStorage,
    getStorage,
    removeStorage,
    clearStorage
  };
  let baseUrl = "http://81.68.206.160:3000";
  var http = {
    get(opt) {
      return new Promise((resolve, reject) => {
        uni.request({
          data: opt.data || {},
          url: baseUrl + opt.url,
          method: opt.methods || "GET",
          header: {
            "content-type": " application/json; charset=utf-8",
            "Authorization": unistroage.getStorage("token")
          },
          success: (data) => {
            resolve(data);
          },
          fail: (err) => {
            reject(err);
          }
        });
      });
    },
    post(opt) {
      return new Promise((resolve, reject) => {
        uni.request({
          data: opt.data,
          url: baseUrl + opt.url,
          method: opt.method || "POST",
          header: {
            "content-type": " application/json; charset=utf-8",
            Authorization: uni.getStorageSync("token")
          },
          success: (data) => {
            resolve(data);
          },
          fail: (err) => {
            reject(err);
          }
        });
      });
    }
  };
  let timestamp;
  const search$1 = (data) => {
    timestamp = new Date().getTime();
    return http.get({
      url: "/search",
      data: __spreadProps(__spreadValues({}, data), {
        timestamp
      })
    });
  };
  const logout = () => {
    return http.get({
      url: "/logout"
    });
  };
  const login = (data) => {
    timestamp = new Date().getTime();
    return http.get({
      url: "/login/cellphone",
      data: __spreadProps(__spreadValues({}, data), {
        timestamp
      })
    });
  };
  const captcha = (data) => {
    timestamp = new Date().getTime();
    return http.get({
      url: "/captcha/sent",
      data: __spreadProps(__spreadValues({}, data), {
        timestamp
      })
    });
  };
  const register = (data) => {
    timestamp = new Date().getTime();
    return http.get({
      url: "/register/cellphone",
      data: __spreadProps(__spreadValues({}, data), {
        timestamp
      })
    });
  };
  const anonimous = () => {
    return http.get({
      url: "/register/anonimous"
    });
  };
  const recommendsheet = (data) => {
    timestamp = new Date().getTime();
    return http.get({
      url: "/personalized",
      data: __spreadProps(__spreadValues({}, data), {
        timestamp
      })
    });
  };
  const highquality = (data) => {
    timestamp = new Date().getTime();
    return http.get({
      url: "/top/playlist/highquality",
      data: __spreadProps(__spreadValues({}, data), {
        timestamp
      })
    });
  };
  const hottopic = (data) => {
    timestamp = new Date().getTime();
    return http.get({
      url: "/hot/topic",
      data: __spreadProps(__spreadValues({}, data), {
        timestamp
      })
    });
  };
  const hotdjtoplist = (data) => {
    timestamp = new Date().getTime();
    return http.get({
      url: "/dj/toplist",
      data: __spreadProps(__spreadValues({}, data), {
        timestamp
      })
    });
  };
  const recommendmusic = (data) => {
    timestamp = new Date().getTime();
    return http.get({
      url: "/personalized/newsong",
      data: __spreadProps(__spreadValues({}, data), {
        timestamp
      })
    });
  };
  const hotartists = (data) => {
    timestamp = new Date().getTime();
    return http.get({
      url: "/top/artists",
      data: __spreadProps(__spreadValues({}, data), {
        timestamp
      })
    });
  };
  const searchs = (data) => {
    timestamp = new Date().getTime();
    return http.get({
      url: "/search",
      data: __spreadProps(__spreadValues({}, data), {
        timestamp
      })
    });
  };
  const djprogram = () => {
    return http.get({
      url: "/personalized/djprogram"
    });
  };
  const hotdj = (data) => {
    timestamp = new Date().getTime();
    return http.get({
      url: "/dj/hot",
      data: __spreadProps(__spreadValues({}, data), {
        timestamp
      })
    });
  };
  const getqrkey = (data) => {
    timestamp = new Date().getTime();
    return http.get({
      url: "/login/qr/key",
      data: __spreadProps(__spreadValues({}, data), {
        timestamp
      })
    });
  };
  const getqrbase64 = (data) => {
    timestamp = new Date().getTime();
    return http.get({
      url: "/login/qr/create",
      data: __spreadProps(__spreadValues({}, data), {
        timestamp
      })
    });
  };
  const getqrstatus = (data) => {
    timestamp = new Date().getTime();
    return http.get({
      url: "/login/qr/check",
      data: __spreadProps(__spreadValues({}, data), {
        timestamp
      })
    });
  };
  const getuserInfo = () => {
    return http.get({
      url: "/user/account"
    });
  };
  const loginstatus = () => {
    return http.get({
      url: "/login/status"
    });
  };
  const getuserallevent = (data) => {
    timestamp = new Date().getTime();
    return http.get({
      url: "/event",
      data: __spreadProps(__spreadValues({}, data), {
        timestamp
      })
    });
  };
  const getsongsInfo = (data) => {
    timestamp = new Date().getTime();
    return http.get({
      url: "/song/detail",
      data: __spreadProps(__spreadValues({}, data), {
        timestamp
      })
    });
  };
  const dailyrecommend = (data) => {
    timestamp = new Date().getTime();
    return http.get({
      url: "/recommend/resource",
      data: __spreadProps(__spreadValues({}, data), {
        timestamp
      })
    });
  };
  const dailyrecommendsongs = (data) => {
    timestamp = new Date().getTime();
    return http.get({
      url: "/recommend/songs",
      data: __spreadProps(__spreadValues({}, data), {
        timestamp
      })
    });
  };
  const userplaylist = (data) => {
    timestamp = new Date().getTime();
    return http.get({
      url: "/user/playlist",
      data: __spreadProps(__spreadValues({}, data), {
        timestamp
      })
    });
  };
  const sublistalbum = (data) => {
    timestamp = new Date().getTime();
    return http.get({
      url: "/album/sublist",
      data: __spreadProps(__spreadValues({}, data), {
        timestamp
      })
    });
  };
  const lovesongslist = (data) => {
    timestamp = new Date().getTime();
    return http.get({
      url: "/likelist",
      data: __spreadProps(__spreadValues({}, data), {
        timestamp
      })
    });
  };
  const getsheetallsongs = (data) => {
    timestamp = new Date().getTime();
    return http.get({
      url: "/playlist/track/all",
      data: __spreadValues({
        timestamp
      }, data)
    });
  };
  const songsheepsInfo = (data) => {
    timestamp = new Date().getTime();
    return http.get({
      url: "/playlist/detail",
      data: __spreadValues({
        timestamp
      }, data)
    });
  };
  const getcommentevent = (data) => {
    timestamp = new Date().getTime();
    return http.get({
      url: "/comment/event",
      data: __spreadValues({
        timestamp
      }, data)
    });
  };
  const shareevent = (data) => {
    timestamp = new Date().getTime();
    return http.get({
      url: "/share/resource",
      data: __spreadValues({
        timestamp
      }, data)
    });
  };
  const lastplaysong = (data) => {
    timestamp = new Date().getTime();
    return http.get({
      url: "/record/recent/song",
      data: __spreadValues({
        timestamp
      }, data)
    });
  };
  const checknickname = (data) => {
    timestamp = new Date().getTime();
    return http.get({
      url: "/nickname/check",
      data: __spreadValues({
        timestamp
      }, data)
    });
  };
  const allToplist = () => {
    timestamp = new Date().getTime();
    return http.get({
      url: "/toplist"
    });
  };
  const toplistartist = () => {
    return http.get({
      url: "/toplist/artist"
    });
  };
  const createplaylist = (data) => {
    timestamp = new Date().getTime();
    return http.get({
      url: "/playlist/create",
      data: __spreadValues({
        timestamp
      }, data)
    });
  };
  const getsongsurl = (data) => {
    timestamp = new Date().getTime();
    return http.get({
      url: "/song/url",
      data: __spreadValues({
        timestamp
      }, data)
    });
  };
  const banner = () => {
    return http.get({
      url: "/banner?type=2"
    });
  };
  const binding = (data) => {
    return http.get({
      url: "/user/binding",
      data: __spreadValues({}, data)
    });
  };
  const updateUserInfo = (data) => {
    return http.get({
      url: "/user/update",
      data: __spreadValues({}, data)
    });
  };
  var axios$1 = {
    search: search$1,
    login,
    captcha,
    register,
    anonimous,
    recommendsheet,
    hottopic,
    hotdjtoplist,
    recommendmusic,
    hotartists,
    searchs,
    djprogram,
    hotdj,
    getqrkey,
    getqrbase64,
    getqrstatus,
    getuserInfo,
    loginstatus,
    getuserallevent,
    getsongsInfo,
    dailyrecommend,
    dailyrecommendsongs,
    userplaylist,
    sublistalbum,
    lovesongslist,
    getsheetallsongs,
    songsheepsInfo,
    getcommentevent,
    shareevent,
    lastplaysong,
    checknickname,
    logout,
    allToplist,
    toplistartist,
    highquality,
    createplaylist,
    getsongsurl,
    banner,
    binding,
    updateUserInfo
  };
  const store = createStore({
    state: {
      phoneInfo: {
        statusbarHeight: 0
      },
      token: "",
      userId: "",
      userInfo: {
        nickname: "\u8BF7\u767B\u5F55",
        userId: "",
        userAvatar: ""
      },
      musicPlay: {
        playMusicList: [],
        playMusicURL: "",
        schedule: 0,
        player: uni.getBackgroundAudioManager(),
        maxtime: 0,
        playStatus: false,
        musicIndex: 0,
        rando: false
      },
      musicInfo: {
        musicName: "\u7545\u4EAB\u751F\u6D3B",
        musicAuthor: ["lok\u97F3\u4E50"],
        musicImage: "",
        musicPlayStatus: false,
        firstPlay: true
      },
      css_style: false
    },
    mutations: {
      phoneInfo(state, val) {
        state.phoneInfo = val;
      },
      token(state, val) {
        state.token = val;
      },
      userId(state, val) {
        state.userId = val;
      },
      userInfo(state, val) {
        state.userInfo = val;
      },
      changeMusic(state, val) {
        state.musicPlay.playMusicList = val.musiclist;
        state.musicPlay.musicIndex = val.index;
      },
      async play(state, val) {
        state.musicInfo.firstPlay = false;
        state.musicInfo.musicName = state.musicPlay.playMusicList[state.musicPlay.musicIndex].name;
        state.musicInfo.musicImage = state.musicPlay.playMusicList[state.musicPlay.musicIndex].al.picUrl;
        state.musicInfo.musicPlayStatus = true;
        let list = [];
        state.musicPlay.playMusicList[state.musicPlay.musicIndex].ar.forEach((item) => {
          list.push(item.name);
        });
        state.musicInfo.musicAuthor = list;
        await axios$1.getsongsurl({
          id: state.musicPlay.playMusicList[state.musicPlay.musicIndex].id
        }).then((res) => {
          state.musicPlay.playMusicURL = res.data.data[0];
        });
        state.musicPlay.player.src = state.musicPlay.playMusicURL.url;
      },
      async next(state) {
        if (state.musicPlay.rando) {
          state.musicPlay.musicIndex = Math.floor(Math.random() * state.musicPlay.playMusicList.length);
          formatAppLog("log", "at store/index.js:92", state.musicPlay.musicIndex);
        } else {
          state.musicPlay.musicIndex++;
          formatAppLog("log", "at store/index.js:95", state.musicPlay.musicIndex);
        }
        state.musicInfo.musicName = state.musicPlay.playMusicList[state.musicPlay.musicIndex].name;
        state.musicInfo.musicImage = state.musicPlay.playMusicList[state.musicPlay.musicIndex].al.picUrl;
        state.musicInfo.musicPlayStatus = true;
        let list = [];
        state.musicPlay.playMusicList[state.musicPlay.musicIndex].ar.forEach((item) => {
          list.push(item.name);
        });
        state.musicInfo.musicAuthor = list;
        await axios$1.getsongsurl({
          id: state.musicPlay.playMusicList[state.musicPlay.musicIndex].id
        }).then((res) => {
          state.musicPlay.playMusicURL = res.data.data[0];
        });
        state.musicPlay.player.src = state.musicPlay.playMusicURL.url;
      },
      stop(state, val) {
        state.musicPlay.musicIndex = val;
        state.musicPlay.player.stop();
      },
      pause(state) {
        state.musicPlay.player.pause();
      },
      continueplay(state) {
        state.musicPlay.player.play();
      },
      async PlayOutMusic(state, value) {
        state.musicPlay.player.stop();
        state.musicInfo.firstPlay = false;
        state.musicInfo.musicName = value.name;
        state.musicInfo.musicImage = value.al.picUrl;
        state.musicInfo.musicPlayStatus = true;
        await axios$1.getsongsurl({
          id: value.id
        }).then((res) => {
          state.musicPlay.playMusicURL = res.data.data[0];
        });
        state.musicPlay.player.src = state.musicPlay.playMusicURL.url;
      },
      rando(state, value) {
        state.musicPlay.rando = value;
      },
      musicPlayStatus(state, value) {
        state.musicPlay.musicPlayStatus = value;
      }
    },
    actions: {}
  });
  const _sfc_main$q = {
    __name: "home",
    setup(__props) {
      let loadingStatus = vue.ref(true);
      let issuanceStatus = vue.ref(false);
      let loginStatus = vue.ref(false);
      const proxy = vue.getCurrentInstance();
      vue.ref("");
      let statusBarHeight = vue.ref(0);
      let home_meaus = [{
        name: "\u6B4C\u5355",
        imgurl: shape1
      }, {
        name: "\u4E13\u8F91",
        imgurl: shape2
      }, {
        name: "\u97F3\u4E50",
        imgurl: shape3
      }];
      vue.ref({
        method: "pause"
      });
      vue.onMounted(() => {
        gettitleheight();
        getrecommondsongsheet();
        userInfo();
        gethottopic();
        if (unistroage.getStorage("userId")) {
          getuserallevent2();
          usersongsheet(store.state.userId);
          getUserInfo();
        }
        POWER_SERVICE();
        register2();
      });
      onLoad(() => {
        uni.$on("refreshData", () => {
          useralleventdata.value.lasttime = "";
          useralleventdata.value.pagesize = 20;
          useralleventdatares.value = [];
          getuserallevent2();
        });
      });
      let useralleventdata = vue.ref({
        pagesize: 20,
        lasttime: ""
      });
      let useralleventdatares = vue.ref([]);
      const getuserallevent2 = async () => {
        await axios$1.getuserallevent(useralleventdata.value).then((res) => {
          if (res.data.event) {
            useralleventdata.value.lasttime = res.data.lasttime;
            useralleventdatares.value = useralleventdatares.value.concat(res.data.event);
            useralleventdatares.value.forEach((item) => {
              let date = new Date(item.showTime);
              let year = date.getFullYear() >= 10 ? date.getFullYear() : "0" + date.getFullYear();
              let month = date.getMonth() + 1 >= 10 ? date.getMonth() + 1 : "0" + date.getMonth() + 1;
              let dates = date.getDate() >= 10 ? date.getDate() : "0" + date.getDate();
              item.showTime2 = year + "-" + month + "-" + dates;
              if ("song" in JSON.parse(item.json)) {
                item.song2 = JSON.parse(item.json).song;
              }
              if ("msg" in JSON.parse(item.json)) {
                item.msg2 = JSON.parse(item.json).msg;
              }
            });
          }
        }).catch((err) => {
          setTimeout(() => {
            getuserallevent2();
          }, 1e3);
        });
      };
      const getUserInfo = async () => {
        await axios$1.getuserInfo({
          uid: store.state.userId
        }).then((res) => {
          userInfo.value = res.data;
          store.commit("userInfo", {
            userId: res.data.account.id,
            userAvatar: res.data.profile.avatarUrl,
            nickname: res.data.profile.nickname
          });
          loadingStatus.value = false;
        }).catch((err) => {
          setTimeout(() => {
            getUserInfo();
          }, 1e3);
        });
      };
      let songssheetlist = vue.ref("");
      const usersongsheet = async (uid) => {
        await axios$1.userplaylist({
          uid,
          limit: 1
        }).then((res) => {
          songssheetlist.value = res.data.playlist[0].id;
          getsheetallsongs2(songssheetlist.value);
        }).catch((err) => {
          setTimeout(() => {
            usersongsheet(uid);
          }, 1e3);
        });
      };
      const scroll_event = (event) => {
        if (event.detail.scrollTop >= 710 && !issuanceStatus.value) {
          issuanceStatus.value = true;
        } else if (event.detail.scrollTop < 710 && issuanceStatus.value) {
          issuanceStatus.value = false;
        }
      };
      const userInfo = () => {
        store.commit("userId", unistroage.getStorage("userId"));
        store.commit("token", unistroage.getStorage("token"));
        if (store.state.token && store.state.userId) {
          loginStatus.value = true;
        }
        if (!store.state.token) {
          anonimous2();
        }
      };
      const gettitleheight = () => {
        uni.getSystemInfo({
          success(res) {
            if (res.statusBarHeight == 0)
              return;
            statusBarHeight.value = res.statusBarHeight;
            store.commit("phoneInfo", {
              statusbarHeight: res.statusBarHeight
            });
          }
        });
      };
      const scrolltolower = async () => {
        getuserallevent2();
      };
      const anonimous2 = async () => {
        await axios$1.anonimous().then((res) => {
          if (res.data.code == 200) {
            unistroage.setStorage("token", res.data.cookie);
          }
        }).catch((err) => {
          setTimeout(() => {
            anonimous2();
          }, 1e3);
        });
      };
      let recommendsheetlist = vue.ref([]);
      const getrecommondsongsheet = async () => {
        await axios$1.recommendsheet({
          limit: 10
        }).then((res) => {
          recommendsheetlist.value = res.data.result;
        }).catch((err) => {
          setTimeout(() => {
            getrecommondsongsheet();
          }, 1e3);
        });
      };
      let hottopiclist = vue.ref();
      const gethottopic = async () => {
        await axios$1.hottopic({
          limit: 6,
          offset: 1
        }).then((res) => {
          hottopiclist.value = res.data.hot;
          if (!unistroage.getStorage("userId")) {
            loadingStatus.value = false;
          }
        }).catch((err) => {
          setTimeout(() => {
            gethottopic();
          }, 1e3);
        });
      };
      const songslist = vue.ref([]);
      const getsheetallsongs2 = async (id) => {
        await axios$1.getsheetallsongs({
          id
        }).then((res) => {
          songslist.value = res.data.songs;
          store.commit("changeMusic", {
            musiclist: songslist.value,
            index: 0
          });
        });
      };
      const gotoPage = (item, songsid) => {
        if (store.state.token && store.state.userId) {
          switch (item) {
            case 0:
              uni.navigateTo({
                url: "/pages/home/playlists/playlists"
              });
              break;
            case 1:
              uni.navigateTo({
                url: "/pages/home/albums/albums"
              });
              break;
            case 2:
              uni.navigateTo({
                url: `/pages/home/songs/songs?songssheetId=${songssheetlist.value}&userId=${store.state.userId}`
              });
              break;
            case 3:
              uni.showToast({
                title: "\u529F\u80FD\u672A\u5B9E\u73B0\uFF0C\u592A\u7B80\u5355\u4E86\u4E0D\u60F3\u505A",
                icon: "none"
              });
              return;
            case 4:
              uni.navigateTo({
                url: "/pages/home/dailyrecommendations/dailyrecommendations"
              });
              break;
            case 5:
              uni.navigateTo({
                url: "/pages/home/issuanceTrends/issuanceTrends",
                events: {
                  acceptDataFromOpenedPage() {
                    formatAppLog("log", "at pages/home/home.vue:421", 213);
                  },
                  someEvent() {
                    formatAppLog("log", "at pages/home/home.vue:424", 345);
                  }
                }
              });
              break;
            case 6:
              uni.navigateTo({
                url: `/pages/home/event/event?event=${JSON.stringify(songsid)}`
              });
              break;
            case 7:
              uni.navigateTo({
                url: `/pages/home/songs/songs?songssheetId=${songsid}`
              });
              break;
          }
        } else {
          uni.navigateTo({
            url: "/pages/login/login/login"
          });
        }
      };
      const info = vue.ref({
        pausePlay: null,
        channelId: "Ba-KeepAlive",
        channelName: "Ba-KeepAlive",
        title: "lok\u97F3\u4E50",
        content: "lok\u97F3\u4E50\u6B63\u5728\u8FD0\u884C",
        dataResult: "",
        type: void 0
      });
      const register2 = () => {
        let keepAlive = requireNativePlugin("Ba-KeepAlive");
        keepAlive.register({
          channelId: info.value.channelId,
          channelName: info.value.channelName,
          title: info.value.title,
          content: info.value.content,
          backgroundMusicEnabled: true,
          musicInterval: 2
        }, (res) => {
        });
      };
      const whiteList2 = () => {
        let keepAlive = requireNativePlugin("Ba-KeepAlive");
        keepAlive.whiteList({
          isDialog: true,
          reason: "\u8F68\u8FF9\u670D\u52A1",
          whiteType: 0
        }, (res) => {
          proxy.refs.popup.close();
          if (res.msg != "success") {
            uni.showToast({
              title: "\u8BF7\u624B\u52A8\u6253\u5F00\u6743\u9650"
            });
          }
        });
      };
      const POWER_SERVICE = () => {
        let main = plus.android.runtimeMainActivity();
        let packName = main.getPackageName();
        let Context = plus.android.importClass("android.content.Context");
        plus.android.importClass("android.os.PowerManager");
        let pm = main.getSystemService(Context.POWER_SERVICE);
        let whiteList = pm.isIgnoringBatteryOptimizations(packName);
        if (!whiteList && !unistroage.getStorage("firstOpenApp")) {
          proxy.refs.popup.open();
        }
      };
      const confirm = () => {
        whiteList2();
        return;
      };
      const close = () => {
        proxy.refs.popup.close();
        unistorage.setStorage("firstOpenApp", true);
        uni.showToast({
          title: "\u65E0\u6CD5\u540E\u53F0\u64AD\u653E\uFF01\u8BF7\u4EE5\u540E\u624B\u52A8\u6DFB\u52A0",
          icon: "none"
        });
      };
      return (_ctx, _cache) => {
        const _component_uni_icons = resolveEasycom(vue.resolveDynamicComponent("uni-icons"), __easycom_0$3);
        const _component_uni_popup_dialog = resolveEasycom(vue.resolveDynamicComponent("uni-popup-dialog"), __easycom_0$2);
        const _component_uni_popup = resolveEasycom(vue.resolveDynamicComponent("uni-popup"), __easycom_1$1);
        return vue.openBlock(), vue.createElementBlock(vue.Fragment, null, [
          vue.createElementVNode("scroll-view", {
            onScroll: scroll_event,
            "scroll-y": "",
            onScrolltolower: scrolltolower
          }, [
            vue.createElementVNode("view", {
              class: vue.normalizeClass(["home_content", vue.unref(store).state.css_style ? "gray_filter" : ""]),
              style: vue.normalizeStyle({ paddingTop: vue.unref(statusBarHeight) + "px" })
            }, [
              vue.createElementVNode("view", { class: "title" }, [
                vue.createElementVNode("view", { class: "title_left" }, [
                  vue.createTextVNode(" \u97F3\u4E50\u5BA4 "),
                  vue.createElementVNode("view", null, " \u97F3\u4E50\u5217\u8868 ")
                ]),
                vue.createElementVNode("view", { class: "title_right" }, [
                  !vue.unref(store).state.userInfo.userAvatar ? (vue.openBlock(), vue.createElementBlock("image", {
                    key: 0,
                    "lazy-load": "",
                    style: { "width": "50px", "height": "50px" },
                    src: "/static/image/Avatar.png",
                    mode: ""
                  })) : (vue.openBlock(), vue.createElementBlock("image", {
                    key: 1,
                    "lazy-load": "",
                    style: { "width": "50px", "height": "50px", "border-radius": "50%" },
                    src: vue.unref(store).state.userInfo.userAvatar,
                    mode: ""
                  }, null, 8, ["src"]))
                ])
              ]),
              vue.unref(loadingStatus) ? (vue.openBlock(), vue.createElementBlock("view", {
                key: 0,
                class: "loader",
                style: { "margin-top": "30vh" }
              })) : vue.createCommentVNode("v-if", true),
              vue.withDirectives(vue.createElementVNode("view", { class: "home_meaus" }, [
                (vue.openBlock(true), vue.createElementBlock(vue.Fragment, null, vue.renderList(vue.unref(home_meaus), (item, index) => {
                  return vue.openBlock(), vue.createElementBlock("view", {
                    class: "meaus_item",
                    onClick: ($event) => gotoPage(index)
                  }, [
                    vue.createElementVNode("image", {
                      "lazy-load": "",
                      style: { "width": "40rpx", "height": "40rpx", "vertical-align": "middle" },
                      src: item.imgurl,
                      mode: ""
                    }, null, 8, ["src"]),
                    vue.createTextVNode(" " + vue.toDisplayString(item.name) + " ", 1),
                    vue.createElementVNode("view", { class: "meaus_right" }, [
                      vue.createVNode(_component_uni_icons, {
                        type: "right",
                        size: "20"
                      })
                    ])
                  ], 8, ["onClick"]);
                }), 256))
              ], 512), [
                [vue.vShow, !vue.unref(loadingStatus)]
              ]),
              vue.withDirectives(vue.createElementVNode("view", { class: "SongsSheets" }, [
                vue.createElementVNode("view", { class: "sheets_title" }, [
                  vue.createTextVNode(" \u6BCF\u65E5\u63A8\u8350 "),
                  vue.createElementVNode("view", { class: "sheets_right" }, [
                    vue.createVNode(_component_uni_icons, {
                      onClick: _cache[0] || (_cache[0] = ($event) => gotoPage(4)),
                      type: "forward",
                      size: "16"
                    })
                  ])
                ]),
                vue.withDirectives(vue.createElementVNode("view", { class: "swiperModel" }, [
                  vue.createElementVNode("view", { class: "uni-margin-wrap" }, [
                    vue.createElementVNode("swiper", {
                      class: "swiper",
                      "display-multiple-items": "3",
                      "next-margin": "26px"
                    }, [
                      (vue.openBlock(true), vue.createElementBlock(vue.Fragment, null, vue.renderList(vue.unref(recommendsheetlist), (item, index) => {
                        return vue.openBlock(), vue.createElementBlock("swiper-item", null, [
                          vue.createElementVNode("view", {
                            class: "swiper-item",
                            onClick: ($event) => gotoPage(7, item.id)
                          }, [
                            vue.createElementVNode("view", { class: "imageView" }, [
                              vue.createElementVNode("image", {
                                "lazy-load": "",
                                src: item.picUrl,
                                style: { "width": "100%", "height": "100%" }
                              }, null, 8, ["src"])
                            ]),
                            vue.createElementVNode("view", { class: "swiper_content" }, vue.toDisplayString(item.name), 1)
                          ], 8, ["onClick"])
                        ]);
                      }), 256))
                    ])
                  ])
                ], 512), [
                  [vue.vShow, !vue.unref(loadingStatus)]
                ])
              ], 512), [
                [vue.vShow, !vue.unref(loadingStatus)]
              ]),
              vue.unref(loginStatus) ? vue.withDirectives((vue.openBlock(), vue.createElementBlock("view", {
                key: 1,
                class: "comment"
              }, [
                vue.createElementVNode("view", { class: "comment_title sheets_title" }, " \u70ED\u95E8\u8BDD\u9898 "),
                vue.createElementVNode("view", { class: "swiper_comment" }, [
                  vue.createElementVNode("swiper", {
                    class: "swiper swiper-style",
                    "next-margin": "40rpx"
                  }, [
                    (vue.openBlock(true), vue.createElementBlock(vue.Fragment, null, vue.renderList(vue.unref(hottopiclist), (item, index) => {
                      return vue.openBlock(), vue.createElementBlock("swiper-item", null, [
                        vue.createElementVNode("view", { class: "swiper-item3 uni-bg-red" }, [
                          vue.createElementVNode("view", { class: "swiper-item3-item-style" }, [
                            vue.createElementVNode("view", { class: "swiper-item3-item-style_item" }, [
                              vue.createElementVNode("view", { class: "swiper-item3-item-style_title" }, vue.toDisplayString(item.title), 1),
                              vue.createElementVNode("view", { class: "swiper-item3-item-style_title2" }, " 22w\u70ED\u5EA6 "),
                              vue.createElementVNode("view", { class: "swiper-item3-item-style_title3" }, vue.toDisplayString(item.text[0] ? item.text[0] : "\u6682\u65E0\u5185\u5BB9"), 1)
                            ]),
                            item.sharePicUrl ? (vue.openBlock(), vue.createElementBlock("image", {
                              key: 0,
                              "lazy-load": "",
                              class: "swiper-item3-item-style-image",
                              src: item.sharePicUrl,
                              mode: ""
                            }, null, 8, ["src"])) : vue.createCommentVNode("v-if", true)
                          ])
                        ])
                      ]);
                    }), 256))
                  ])
                ])
              ], 512)), [
                [vue.vShow, !vue.unref(loadingStatus)]
              ]) : vue.createCommentVNode("v-if", true),
              !vue.unref(loginStatus) ? vue.withDirectives((vue.openBlock(), vue.createElementBlock("view", {
                key: 2,
                class: "loginstatus swiper-item3-item-style",
                onClick: _cache[1] || (_cache[1] = ($event) => gotoPage())
              }, [
                vue.createTextVNode(" \u8FD8\u672A"),
                vue.createElementVNode("text", null, "\u767B\u5F55"),
                vue.createTextVNode("\uFF1F\u70B9\u51FB\u7ACB\u9A6C\u89E3\u9501\u5185\u5BB9 ")
              ], 512)), [
                [vue.vShow, !vue.unref(loadingStatus)]
              ]) : vue.createCommentVNode("v-if", true),
              vue.unref(loginStatus) ? (vue.openBlock(true), vue.createElementBlock(vue.Fragment, { key: 3 }, vue.renderList(vue.unref(useralleventdatares), (item, index) => {
                return vue.withDirectives((vue.openBlock(), vue.createElementBlock("view", {
                  class: "event_item",
                  onClick: ($event) => gotoPage(6, item)
                }, [
                  vue.createElementVNode("view", { class: "event_item_title" }, [
                    vue.createElementVNode("image", {
                      "lazy-load": "",
                      class: "event_item_title_avart",
                      src: item.user.avatarUrl
                    }, null, 8, ["src"]),
                    vue.createElementVNode("view", { class: "event_item-name" }, [
                      vue.createElementVNode("view", { class: "event_item-name-title" }, vue.toDisplayString(item.user.nickname), 1),
                      vue.createElementVNode("view", { class: "event_item-name-time" }, vue.toDisplayString(item.showTime2), 1)
                    ])
                  ]),
                  vue.createElementVNode("view", { class: "event_item_content" }, vue.toDisplayString(item.msg2), 1),
                  item.pics.length ? (vue.openBlock(), vue.createElementBlock("view", {
                    key: 0,
                    class: "event_item_image"
                  }, [
                    (vue.openBlock(true), vue.createElementBlock(vue.Fragment, null, vue.renderList(item.pics, (item2, index2) => {
                      return vue.openBlock(), vue.createElementBlock("image", {
                        "lazy-load": "",
                        mode: "aspectFill",
                        class: "event_item_image-item",
                        src: item2.originUrl
                      }, null, 8, ["src"]);
                    }), 256))
                  ])) : vue.createCommentVNode("v-if", true),
                  item.song2 ? (vue.openBlock(), vue.createElementBlock("view", {
                    key: 1,
                    class: "playmusic_item"
                  }, [
                    vue.createElementVNode("image", {
                      "lazy-load": "",
                      class: "playmusic_item-image",
                      src: item.song2.album.picUrl
                    }, null, 8, ["src"]),
                    vue.createElementVNode("view", { class: "playmusic_item-right" }, [
                      vue.createElementVNode("view", { class: "playmusic_item-right-title" }, vue.toDisplayString(item.song2.name), 1),
                      vue.createElementVNode("view", { class: "playmusic_item-right-art" }, vue.toDisplayString(item.song2.album.artists[0].name), 1)
                    ])
                  ])) : vue.createCommentVNode("v-if", true),
                  vue.withDirectives(vue.createElementVNode("view", { class: "click_btn" }, [
                    vue.createElementVNode("view", { class: "" }, [
                      vue.createVNode(_component_uni_icons, {
                        color: "#9194AE",
                        type: "redo",
                        size: "20"
                      }),
                      vue.createTextVNode(" " + vue.toDisplayString(item.info.commentThread.hotCount), 1)
                    ]),
                    vue.createElementVNode("view", { class: "" }, [
                      vue.createVNode(_component_uni_icons, {
                        color: "#9194AE",
                        type: "chatboxes",
                        size: "20"
                      }),
                      vue.createTextVNode(vue.toDisplayString(item.info.commentThread.commentCount), 1)
                    ]),
                    vue.createElementVNode("view", { class: "" }, [
                      vue.createVNode(_component_uni_icons, {
                        color: "#9194AE",
                        type: "hand-up",
                        size: "20"
                      }),
                      vue.createTextVNode(vue.toDisplayString(item.info.commentThread.likedCount), 1)
                    ])
                  ], 512), [
                    [vue.vShow, !vue.unref(loadingStatus)]
                  ])
                ], 8, ["onClick"])), [
                  [vue.vShow, !vue.unref(loadingStatus)]
                ]);
              }), 256)) : vue.createCommentVNode("v-if", true)
            ], 6),
            vue.unref(issuanceStatus) && vue.unref(loginStatus) ? vue.withDirectives((vue.openBlock(), vue.createElementBlock("view", {
              key: 0,
              class: "issuance",
              onClick: _cache[2] || (_cache[2] = ($event) => gotoPage(5))
            }, " \u53D1\u5E03 ", 512)), [
              [vue.vShow, !vue.unref(loadingStatus)]
            ]) : vue.createCommentVNode("v-if", true)
          ], 32),
          vue.createVNode(_component_uni_popup, {
            ref: "popup",
            type: "dialog"
          }, {
            default: vue.withCtx(() => [
              vue.createVNode(_component_uni_popup_dialog, {
                mode: "base",
                content: "\u8BF7\u5148\u6253\u5F00\u6743\u9650,\u5426\u5219\u65E0\u6CD5\u7184\u5C4F\u64AD\u653E",
                message: "\u6210\u529F\u6D88\u606F",
                duration: 2e3,
                "before-close": true,
                onClose: close,
                onConfirm: confirm
              })
            ]),
            _: 1
          }, 512)
        ], 64);
      };
    }
  };
  var home = /* @__PURE__ */ _export_sfc(_sfc_main$q, [["__scopeId", "data-v-92bb8f34"], ["__file", "/Users/fox/project/uniapp/lok\u97F3\u4E50/pages/home/home.vue"]]);
  const _sfc_main$p = {
    __name: "trending",
    setup(__props) {
      let statusBarHeight = vue.ref(0);
      let loadingStatus = vue.ref(true);
      const gocharts = () => {
        uni.navigateTo({
          url: "/pages/trending/charts/charts"
        });
      };
      vue.onMounted(() => {
        uni.preloadPage({ url: "/pages/detailedInformation/detailedInformation" });
        statusBarHeight.value = store.state.phoneInfo.statusbarHeight;
        getdjtoplist();
        getrecommendmusic();
        gethotartists();
        gethotmusic();
        banner2();
      });
      let bannerlist = vue.ref([]);
      const banner2 = () => {
        axios$1.banner().then((res) => {
          bannerlist.value = res.data.banners;
          loadingStatus.value = false;
        }).catch((err) => {
          setTimeout(() => {
            banner2();
          }, 1e3);
        });
      };
      let djtoplist = vue.ref();
      const getdjtoplist = async () => {
        await axios$1.hotdjtoplist({
          type: "new",
          limit: 6,
          offset: 0
        }).then((res) => {
          djtoplist.value = res.data.toplist;
        }).catch((err) => {
          setTimeout(() => {
            getdjtoplist();
          }, 1e3);
        });
      };
      const recommendmusiclist = vue.ref([]);
      const getrecommendmusic = async (index) => {
        await axios$1.recommendmusic({
          limit: 9
        }).then((res) => {
          let list = [];
          res.data.result.forEach((item, index2) => {
            if ((index2 + 1) % 3 == 0) {
              list = list.concat(item);
              recommendmusiclist.value.push(list);
              list = [];
            } else {
              list = list.concat(item);
            }
          });
        }).catch((err) => {
          setTimeout(() => {
            getrecommendmusic(index);
          }, 1e3);
        });
      };
      const hotartistslist = vue.ref();
      const gethotartists = async () => {
        await axios$1.hotartists({
          limit: 10
        }).then((res) => {
          hotartistslist.value = res.data.artists;
        }).catch((err) => {
          setTimeout(() => {
            gethotartists();
          }, 1e3);
        });
      };
      let hotmusiclist = vue.ref([]);
      const gethotmusic = async () => {
        await axios$1.recommendmusic({
          limit: 20
        }).then((res) => {
          res.data.result.forEach((item, index) => {
            if (index >= 10) {
              hotmusiclist.value = hotmusiclist.value.concat(item);
            }
          });
        }).catch((err) => {
          setTimeout(() => {
            gethotmusic();
          }, 1e3);
        });
      };
      const gotodetailedInformation = (...arg) => {
        uni.navigateTo({
          url: `/pages/detailedInformation/detailedInformation?id=${arg[0].id}`
        });
      };
      return (_ctx, _cache) => {
        const _component_uni_icons = resolveEasycom(vue.resolveDynamicComponent("uni-icons"), __easycom_0$3);
        return vue.openBlock(), vue.createElementBlock(vue.Fragment, null, [
          vue.withDirectives(vue.createElementVNode("view", {
            class: "loader",
            style: { "margin-top": "30vh" }
          }, null, 512), [
            [vue.vShow, vue.unref(loadingStatus)]
          ]),
          vue.withDirectives(vue.createElementVNode("scroll-view", {
            "scroll-y": "",
            class: vue.normalizeClass(vue.unref(store).state.css_style ? "gray_filter" : "")
          }, [
            vue.createElementVNode("view", {
              class: "trending_content",
              style: vue.normalizeStyle({ paddingTop: vue.unref(statusBarHeight) + "px" })
            }, [
              vue.createElementVNode("view", { class: "trending_title" }, [
                vue.createElementVNode("view", { class: "title_left" }, [
                  vue.createTextVNode(" \u6392\u884C\u699C "),
                  vue.createElementVNode("view", null, " 2022 10-29 ")
                ]),
                vue.createElementVNode("view", { class: "title_right" }, [
                  !vue.unref(store).state.userInfo.userAvatar ? (vue.openBlock(), vue.createElementBlock("image", {
                    key: 0,
                    "lazy-load": "",
                    style: { "width": "50px", "height": "50px" },
                    src: "/static/image/Avatar.png",
                    mode: ""
                  })) : (vue.openBlock(), vue.createElementBlock("image", {
                    key: 1,
                    "lazy-load": "",
                    style: { "width": "50px", "height": "50px", "border-radius": "50%" },
                    src: vue.unref(store).state.userInfo.userAvatar,
                    mode: ""
                  }, null, 8, ["src"]))
                ])
              ]),
              vue.createElementVNode("view", {
                class: "trendingSwiper",
                style: { "border-top": "1px solid #e6e6e6" }
              }, [
                vue.createElementVNode("view", { class: "uni-margin-wrap" }, [
                  vue.createElementVNode("swiper", {
                    class: "swiper",
                    autoplay: false,
                    duration: 500,
                    "display-multiple-items": "1",
                    "next-margin": "20px"
                  }, [
                    (vue.openBlock(true), vue.createElementBlock(vue.Fragment, null, vue.renderList(vue.unref(bannerlist), (item) => {
                      return vue.openBlock(), vue.createElementBlock("swiper-item", null, [
                        vue.createElementVNode("view", { class: "swiper-item2" }, [
                          vue.createElementVNode("image", {
                            "lazy-load": "",
                            class: "swiper-item2_image",
                            src: item.pic,
                            mode: ""
                          }, null, 8, ["src"])
                        ])
                      ]);
                    }), 256))
                  ])
                ])
              ]),
              vue.createElementVNode("view", { class: "hotsongs" }, [
                vue.createTextVNode(" \u65B0\u661F\u97F3\u4E50 "),
                vue.createElementVNode("view", { class: "right" }, [
                  vue.createVNode(_component_uni_icons, {
                    type: "forward",
                    onClick: gocharts,
                    size: "20"
                  })
                ])
              ]),
              vue.createElementVNode("view", {
                class: "trendingSwiper",
                style: { "padding-top": "0rpx" }
              }, [
                vue.createElementVNode("view", { class: "uni-margin-wrap" }, [
                  vue.createElementVNode("swiper", {
                    class: "swiper",
                    autoplay: false,
                    duration: 500,
                    "display-multiple-items": "1",
                    "next-margin": "30px"
                  }, [
                    (vue.openBlock(true), vue.createElementBlock(vue.Fragment, null, vue.renderList(recommendmusiclist.value, (item) => {
                      return vue.openBlock(), vue.createElementBlock("swiper-item", null, [
                        vue.createElementVNode("view", { class: "swiper-item" }, [
                          (vue.openBlock(true), vue.createElementBlock(vue.Fragment, null, vue.renderList(item, (item_re) => {
                            return vue.openBlock(), vue.createElementBlock("view", {
                              class: "swiper-item1",
                              onClick: ($event) => gotodetailedInformation(item_re)
                            }, [
                              vue.createElementVNode("view", { class: "imageview" }, [
                                vue.createElementVNode("image", {
                                  "lazy-load": "",
                                  style: { "height": "40px", "width": "40px", "border-radius": "20rpx" },
                                  src: item_re.picUrl,
                                  mode: ""
                                }, null, 8, ["src"])
                              ]),
                              vue.createElementVNode("view", { class: "swiper-item_content" }, [
                                vue.createElementVNode("view", { class: "swiper-item_content_title" }, vue.toDisplayString(item_re.name), 1),
                                vue.createElementVNode("view", { class: "swiper-item_content_co" }, vue.toDisplayString(item_re.song.artists[0].name), 1)
                              ])
                            ], 8, ["onClick"]);
                          }), 256))
                        ])
                      ]);
                    }), 256))
                  ])
                ])
              ]),
              vue.createElementVNode("view", {
                class: "hotsongs",
                style: { "margin-top": "10px" }
              }, [
                vue.createTextVNode(" \u70ED\u95E8\u6B4C\u624B "),
                vue.createElementVNode("view", { class: "right" }, [
                  vue.createVNode(_component_uni_icons, {
                    onClick: gocharts,
                    type: "forward",
                    size: "20"
                  })
                ])
              ]),
              vue.createElementVNode("view", { class: "newAlbums" }, [
                vue.createElementVNode("swiper", {
                  class: "swiper",
                  autoplay: false,
                  duration: 500,
                  "display-multiple-items": "3",
                  "next-margin": "30px"
                }, [
                  (vue.openBlock(true), vue.createElementBlock(vue.Fragment, null, vue.renderList(hotartistslist.value, (item) => {
                    return vue.openBlock(), vue.createElementBlock("swiper-item", null, [
                      vue.createElementVNode("view", { class: "swiper-item3" }, [
                        vue.createElementVNode("image", {
                          "lazy-load": "",
                          src: item.picUrl,
                          style: { "width": "100%", "height": "180rpx", "border-radius": "10px" },
                          mode: ""
                        }, null, 8, ["src"])
                      ]),
                      vue.createElementVNode("view", { class: "albums_name" }, vue.toDisplayString(item.name), 1)
                    ]);
                  }), 256))
                ])
              ]),
              vue.createElementVNode("view", {
                class: "hotsongs",
                style: { "margin-top": "10px" }
              }, [
                vue.createTextVNode(" \u70ED\u95E8\u97F3\u4E50 "),
                vue.createElementVNode("view", { class: "right" }, [
                  vue.createVNode(_component_uni_icons, {
                    onClick: gocharts,
                    type: "forward",
                    size: "20"
                  })
                ])
              ]),
              vue.createElementVNode("view", { class: "hotMusic" }, [
                vue.createElementVNode("view", null, [
                  (vue.openBlock(true), vue.createElementBlock(vue.Fragment, null, vue.renderList(vue.unref(hotmusiclist), (item) => {
                    return vue.openBlock(), vue.createElementBlock("view", { class: "hotMusic_item" }, [
                      vue.createTextVNode(vue.toDisplayString(item.name) + " ", 1),
                      vue.createElementVNode("view", null, [
                        vue.createVNode(_component_uni_icons, {
                          type: "forward",
                          size: "12"
                        })
                      ])
                    ]);
                  }), 256))
                ])
              ])
            ], 4)
          ], 2), [
            [vue.vShow, !vue.unref(loadingStatus)]
          ])
        ], 64);
      };
    }
  };
  var trending = /* @__PURE__ */ _export_sfc(_sfc_main$p, [["__scopeId", "data-v-2ac50026"], ["__file", "/Users/fox/project/uniapp/lok\u97F3\u4E50/pages/trending/trending.vue"]]);
  function debounce(func, delay = 300, immediate = false) {
    let timer = null;
    return function() {
      if (timer) {
        clearTimeout(timer);
      }
      if (immediate && !timer) {
        func.call(this);
      }
      timer = setTimeout(() => {
        func.call(this);
      }, delay);
    };
  }
  const _sfc_main$o = {
    __name: "search",
    setup(__props) {
      vue.getCurrentInstance();
      let statusBarHeight = vue.ref(0);
      let searchData = vue.ref({
        keywords: "",
        offset: 0,
        limit: 20
      });
      vue.onMounted(() => {
        statusBarHeight.value = store.state.phoneInfo.statusbarHeight;
      });
      let searchresult = vue.ref([]);
      const inputclick = debounce(function() {
        axios$1.searchs(searchData.value).then((res) => {
          if (res.data.result) {
            searchresult.value = res.data.result.songs;
          } else {
            searchresult.value = [];
          }
        });
      }, 1e3);
      const scrolltolower = async () => {
        searchData.value.offset++;
        await axios$1.searchs({
          keywords: searchData.value.keywords,
          offset: searchData.value.offset * searchData.value.limit,
          limit: 20
        }).then((res) => {
          if (res.data.result && res.data.result.songs) {
            searchresult.value = searchresult.value.concat(res.data.result.songs);
          } else {
            uni.showToast({
              title: "\u5DF2\u7ECF\u5212\u5230\u5E95\u90E8\u4E86",
              icon: "none"
            });
          }
        });
      };
      return (_ctx, _cache) => {
        const _component_uni_icons = resolveEasycom(vue.resolveDynamicComponent("uni-icons"), __easycom_0$3);
        return vue.openBlock(), vue.createElementBlock("scroll-view", {
          "scroll-y": "",
          onScrolltolower: scrolltolower,
          class: vue.normalizeClass(vue.unref(store).state.css_style ? "gray_filter" : "")
        }, [
          vue.createElementVNode("view", {
            class: "search_content",
            style: vue.normalizeStyle({ paddingTop: vue.unref(statusBarHeight) + "px" })
          }, [
            vue.createElementVNode("view", { class: "title" }, [
              vue.createElementVNode("view", { class: "title_left" }, [
                vue.createTextVNode(" \u641C\u7D22 "),
                vue.createElementVNode("view", { class: "input_search" }, [
                  vue.createElementVNode("image", {
                    class: "input_left",
                    src: "/static/image/search1.png",
                    style: {},
                    mode: ""
                  }),
                  vue.withDirectives(vue.createElementVNode("input", {
                    "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => vue.unref(searchData).keywords = $event),
                    type: "text",
                    onInput: _cache[1] || (_cache[1] = (...args) => vue.unref(inputclick) && vue.unref(inputclick)(...args)),
                    style: { "width": "100%", "height": "72rpx", "margin-left": "10rpx" },
                    placeholder: "search"
                  }, null, 544), [
                    [vue.vModelText, vue.unref(searchData).keywords]
                  ])
                ])
              ])
            ]),
            vue.createElementVNode("view", { class: "search_result" }, [
              (vue.openBlock(true), vue.createElementBlock(vue.Fragment, null, vue.renderList(vue.unref(searchresult), (item, index) => {
                return vue.openBlock(), vue.createElementBlock("view", { class: "search_result_item" }, [
                  vue.createElementVNode("image", {
                    src: "/static/image/demo.jpeg",
                    class: "search_result_item_image",
                    mode: ""
                  }),
                  vue.createElementVNode("view", { class: "right_result" }, [
                    vue.createElementVNode("view", { class: "right_result_top" }, vue.toDisplayString(item.name), 1),
                    vue.createElementVNode("view", { class: "right_result_bottom" }, vue.toDisplayString(item.artists[0].name), 1)
                  ]),
                  vue.createElementVNode("view", { class: "righ_result_right" }, [
                    index % 2 == 0 ? (vue.openBlock(), vue.createBlock(_component_uni_icons, {
                      key: 0,
                      type: "heart",
                      size: "30"
                    })) : vue.createCommentVNode("v-if", true),
                    index % 2 != 0 ? (vue.openBlock(), vue.createBlock(_component_uni_icons, {
                      key: 1,
                      type: "heart-filled",
                      size: "30"
                    })) : vue.createCommentVNode("v-if", true)
                  ])
                ]);
              }), 256))
            ])
          ], 4)
        ], 34);
      };
    }
  };
  var search = /* @__PURE__ */ _export_sfc(_sfc_main$o, [["__scopeId", "data-v-4cedc0c6"], ["__file", "/Users/fox/project/uniapp/lok\u97F3\u4E50/pages/search/search.vue"]]);
  const _sfc_main$n = {
    __name: "radios",
    setup(__props) {
      vue.getCurrentInstance();
      let statusBarHeight = vue.ref(0);
      let loadingStatus = vue.ref(true);
      vue.onMounted(() => {
        statusBarHeight.value = store.state.phoneInfo.statusbarHeight;
        getdjprogram();
        gethotdj();
      });
      let djprogramlist = vue.ref([]);
      const getdjprogram = async () => {
        await axios$1.djprogram().then((res) => {
          djprogramlist.value = res.data.result;
        }).catch((err) => {
          setTimeout(() => {
            getdjprogram();
          }, 1e3);
        });
      };
      let hotdjlist = vue.ref([]);
      const gethotdj = async () => {
        await axios$1.hotdj({
          limit: 10
        }).then((res) => {
          hotdjlist.value = res.data.djRadios;
          loadingStatus.value = false;
        }).catch((err) => {
          setTimeout(() => {
            gethotdj();
          }, 1e3);
        });
      };
      return (_ctx, _cache) => {
        const _component_uni_icons = resolveEasycom(vue.resolveDynamicComponent("uni-icons"), __easycom_0$3);
        return vue.openBlock(), vue.createElementBlock(vue.Fragment, null, [
          vue.withDirectives(vue.createElementVNode("view", {
            class: "loader",
            style: { "margin-top": "30vh" }
          }, null, 512), [
            [vue.vShow, vue.unref(loadingStatus)]
          ]),
          vue.withDirectives(vue.createElementVNode("scroll-view", {
            "scroll-y": "",
            class: vue.normalizeClass(vue.unref(store).state.css_style ? "gray_filter" : "")
          }, [
            vue.createElementVNode("view", {
              class: "radios_content",
              style: vue.normalizeStyle({ paddingTop: vue.unref(statusBarHeight) + "px" })
            }, [
              vue.createElementVNode("view", { class: "title" }, [
                vue.createElementVNode("view", { class: "title_left" }, " \u7535\u53F0 ")
              ]),
              vue.createElementVNode("view", { class: "change_tabs" }),
              vue.createElementVNode("view", { class: "curren0" }, [
                vue.createElementVNode("view", { class: "video_swiper" }, [
                  vue.createElementVNode("view", { class: "uni-margin-wrap" }, [
                    vue.createElementVNode("swiper", {
                      class: "swiper",
                      duration: "500",
                      "next-margin": "50px"
                    }, [
                      (vue.openBlock(true), vue.createElementBlock(vue.Fragment, null, vue.renderList(vue.unref(djprogramlist), (item, index) => {
                        return vue.openBlock(), vue.createElementBlock("swiper-item", null, [
                          vue.createElementVNode("view", { class: "swiper-item1" }, [
                            vue.createElementVNode("image", {
                              "lazy-load": "",
                              src: item.picUrl,
                              mode: "",
                              class: "video_css"
                            }, null, 8, ["src"]),
                            vue.createElementVNode("view", { class: "swiper-item1_title" }, [
                              vue.createElementVNode("view", { class: "content" }, vue.toDisplayString(item.name), 1),
                              vue.createElementVNode("view", { class: "icon" }, [
                                vue.createVNode(_component_uni_icons, {
                                  color: "#e2e2e2",
                                  style: { "vertical-align": "middle" },
                                  type: "headphones",
                                  size: "20"
                                }),
                                vue.createElementVNode("text", null, vue.toDisplayString(item.program.adjustedPlayCount), 1)
                              ])
                            ])
                          ])
                        ]);
                      }), 256))
                    ])
                  ])
                ]),
                vue.createElementVNode("view", { class: "popular" }, [
                  vue.createElementVNode("view", { class: "popular_title" }, [
                    vue.createTextVNode(" \u6D41\u884C\u7684 "),
                    vue.createElementVNode("view", null, [
                      vue.createVNode(_component_uni_icons, {
                        type: "forward",
                        size: "20"
                      })
                    ])
                  ]),
                  vue.createElementVNode("view", { class: "popular_content" }, [
                    (vue.openBlock(true), vue.createElementBlock(vue.Fragment, null, vue.renderList(vue.unref(hotdjlist), (item, index) => {
                      return vue.openBlock(), vue.createElementBlock("view", { class: "content_item" }, [
                        vue.createElementVNode("image", {
                          "lazy-load": "",
                          src: item.picUrl,
                          style: { "width": "80rpx", "height": "80rpx", "border-radius": "50%" },
                          mode: ""
                        }, null, 8, ["src"]),
                        vue.createElementVNode("view", { class: "popular_item_content" }, [
                          vue.createElementVNode("view", { class: "top" }, vue.toDisplayString(item.rcmdtext), 1),
                          vue.createElementVNode("view", { class: "bottom" }, vue.toDisplayString(item.name), 1)
                        ]),
                        vue.createElementVNode("view", { class: "popular_item_right" }, [
                          vue.createVNode(_component_uni_icons, {
                            type: "headphones",
                            style: { "vertical-align": "middle" },
                            size: "19"
                          }),
                          vue.createElementVNode("text", { style: { "line-height": "80rpx", "font-size": "14px" } }, vue.toDisplayString(Math.round(item.playCount / 1e4)) + "\u4E07 ", 1)
                        ])
                      ]);
                    }), 256))
                  ])
                ])
              ])
            ], 4)
          ], 2), [
            [vue.vShow, !vue.unref(loadingStatus)]
          ])
        ], 64);
      };
    }
  };
  var radios = /* @__PURE__ */ _export_sfc(_sfc_main$n, [["__scopeId", "data-v-40ce6ac6"], ["__file", "/Users/fox/project/uniapp/lok\u97F3\u4E50/pages/radios/radios.vue"]]);
  const _sfc_main$m = {
    __name: "setting",
    setup(__props) {
      let statusBarHeight = vue.ref(0);
      let testlogin = vue.ref("\u767B\u5F55");
      let token = vue.ref("");
      let userinfo = vue.ref({
        nickname: "\u8BF7\u767B\u5F55",
        avt: ""
      });
      const gologin = () => {
        if (token.value) {
          unistroage.clearStorage();
          store.commit("userId", null);
          store.commit("token", null);
          axios.logout();
        }
        uni.redirectTo({
          url: "/pages/login/login/login"
        });
      };
      const gotoPage = () => {
        uni.navigateTo({
          url: "/pages/setting/userInfo/userInfo"
        });
      };
      vue.onMounted(() => {
        statusBarHeight.value = store.state.phoneInfo.statusbarHeight;
        token.value = unistroage.getStorage("token");
        if (token.value && unistroage.getStorage("userId")) {
          testlogin.value = "\u9000\u51FA\u767B\u5F55";
        } else {
          testlogin.value = "\u767B\u5F55";
        }
        userinfo.value.nickname = store.state.userInfo.nickname;
        userinfo.value.avt = store.state.userInfo.userAvatar;
      });
      const gotoSettingInfo = () => {
        uni.showToast({
          title: "\u6682\u65E0\u8BE5\u529F\u80FD",
          icon: "none"
        });
      };
      return (_ctx, _cache) => {
        const _component_uni_icons = resolveEasycom(vue.resolveDynamicComponent("uni-icons"), __easycom_0$3);
        return vue.openBlock(), vue.createElementBlock("view", {
          class: vue.normalizeClass(["setting_content", vue.unref(store).state.css_style ? "gray_filter" : ""]),
          style: vue.normalizeStyle({ paddingTop: vue.unref(statusBarHeight) + "px" })
        }, [
          vue.createElementVNode("view", { class: "title" }, [
            !vue.unref(store).state.userInfo.userAvatar ? (vue.openBlock(), vue.createElementBlock("image", {
              key: 0,
              style: { "width": "50px", "height": "50px" },
              src: "/static/image/Avatar.png",
              mode: ""
            })) : (vue.openBlock(), vue.createElementBlock("image", {
              key: 1,
              style: { "width": "50px", "height": "50px", "border-radius": "50%" },
              onClick: gotoPage,
              src: vue.unref(store).state.userInfo.userAvatar,
              mode: ""
            }, null, 8, ["src"])),
            vue.createElementVNode("view", { class: "username" }, vue.toDisplayString(vue.unref(store).state.userInfo.nickname), 1),
            vue.createElementVNode("view", null, [
              vue.createVNode(_component_uni_icons, {
                onClick: gotoSettingInfo,
                type: "compose",
                size: "20"
              })
            ])
          ]),
          vue.createElementVNode("view", { class: "btnMeau" }, [
            vue.createElementVNode("view", { class: "first" }, [
              vue.createElementVNode("view", { class: "left" }, [
                vue.createElementVNode("view", { onClick: gotoPage }, " \u4E2A\u4EBA\u4FE1\u606F ")
              ]),
              vue.createElementVNode("view", { class: "left" }, [
                vue.createElementVNode("view", null, "\u6D88\u606F")
              ])
            ]),
            vue.createElementVNode("view", { class: "bottom" }, [
              vue.createElementVNode("view", { onClick: gologin }, vue.toDisplayString(vue.unref(testlogin)), 1)
            ])
          ])
        ], 6);
      };
    }
  };
  var setting = /* @__PURE__ */ _export_sfc(_sfc_main$m, [["__scopeId", "data-v-9543fcb0"], ["__file", "/Users/fox/project/uniapp/lok\u97F3\u4E50/pages/setting/setting.vue"]]);
  var library1 = "/static/image/library1.png";
  var library2 = "/static/image/library2.png";
  var data1 = "/static/image/data1.png";
  var data2 = "/static/image/data2.png";
  var search1 = "/static/image/search1.png";
  var search2 = "/static/image/search2.png";
  var radio1 = "/static/image/radio1.png";
  var radio2 = "/static/image/radio2.png";
  var setting1 = "/static/image/setting1.png";
  var setting2 = "/static/image/setting2.png";
  const _sfc_main$l = {
    __name: "tabbar",
    setup(__props) {
      const proxy = vue.getCurrentInstance();
      let ctabbarItem = vue.ref(0);
      let tabbar2 = vue.ref([
        {
          name: "\u97F3\u4E50\u9986",
          cimage: library2,
          unimage: library1
        },
        {
          name: "\u6392\u884C\u699C",
          cimage: data2,
          unimage: data1
        },
        {
          name: "\u641C\u7D22",
          cimage: search2,
          unimage: search1
        },
        {
          name: "\u7535\u53F0",
          cimage: radio2,
          unimage: radio1
        },
        {
          name: "\u8BBE\u7F6E",
          cimage: setting2,
          unimage: setting1
        }
      ]);
      const changeTabbar = (index) => {
        switch (index) {
          case 0:
            ctabbarItem.value = 0;
            proxy.emit("ctabbarItem", 0);
            break;
          case 1:
            ctabbarItem.value = 1;
            proxy.emit("ctabbarItem", 1);
            break;
          case 2:
            ctabbarItem.value = 2;
            proxy.emit("ctabbarItem", 2);
            break;
          case 3:
            ctabbarItem.value = 3;
            proxy.emit("ctabbarItem", 3);
            break;
          case 4:
            ctabbarItem.value = 4;
            proxy.emit("ctabbarItem", 4);
            break;
        }
      };
      return (_ctx, _cache) => {
        return vue.openBlock(), vue.createElementBlock("view", {
          class: vue.normalizeClass(["tabbar", vue.unref(store).state.css_style ? "gray_filter" : ""])
        }, [
          (vue.openBlock(true), vue.createElementBlock(vue.Fragment, null, vue.renderList(vue.unref(tabbar2), (item, index) => {
            return vue.openBlock(), vue.createElementBlock("view", {
              onClick: ($event) => changeTabbar(index)
            }, [
              vue.createElementVNode("view", null, [
                vue.createElementVNode("image", {
                  style: { "width": "40rpx", "height": "40rpx" },
                  src: vue.unref(ctabbarItem) == index ? item.cimage : item.unimage,
                  mode: ""
                }, null, 8, ["src"])
              ]),
              vue.createElementVNode("view", {
                class: vue.normalizeClass(["tabbarfonts", vue.unref(ctabbarItem) == index ? "fontcolor" : ""])
              }, vue.toDisplayString(item.name), 3)
            ], 8, ["onClick"]);
          }), 256))
        ], 2);
      };
    }
  };
  var tabbar = /* @__PURE__ */ _export_sfc(_sfc_main$l, [["__scopeId", "data-v-6b6b6164"], ["__file", "/Users/fox/project/uniapp/lok\u97F3\u4E50/common/tabbar.vue"]]);
  const _sfc_main$k = {
    name: "UniNoticeBar",
    emits: ["click", "getmore", "close"],
    props: {
      text: {
        type: String,
        default: ""
      },
      moreText: {
        type: String,
        default: ""
      },
      backgroundColor: {
        type: String,
        default: "#FFF9EA"
      },
      speed: {
        type: Number,
        default: 100
      },
      color: {
        type: String,
        default: "#FF9A43"
      },
      fontSize: {
        type: Number,
        default: 14
      },
      moreColor: {
        type: String,
        default: "#FF9A43"
      },
      single: {
        type: [Boolean, String],
        default: false
      },
      scrollable: {
        type: [Boolean, String],
        default: false
      },
      showIcon: {
        type: [Boolean, String],
        default: false
      },
      showGetMore: {
        type: [Boolean, String],
        default: false
      },
      showClose: {
        type: [Boolean, String],
        default: false
      }
    },
    data() {
      const elId = `Uni_${Math.ceil(Math.random() * 1e6).toString(36)}`;
      const elIdBox = `Uni_${Math.ceil(Math.random() * 1e6).toString(36)}`;
      return {
        textWidth: 0,
        boxWidth: 0,
        wrapWidth: "",
        webviewHide: false,
        elId,
        elIdBox,
        show: true,
        animationDuration: "none",
        animationPlayState: "paused",
        animationDelay: "0s"
      };
    },
    computed: {
      isShowGetMore() {
        return this.showGetMore === true || this.showGetMore === "true";
      },
      isShowClose() {
        return (this.showClose === true || this.showClose === "true") && (this.showGetMore === false || this.showGetMore === "false");
      }
    },
    mounted() {
      var pages2 = getCurrentPages();
      var page = pages2[pages2.length - 1];
      var currentWebview = page.$getAppWebview();
      currentWebview.addEventListener("hide", () => {
        this.webviewHide = true;
      });
      currentWebview.addEventListener("show", () => {
        this.webviewHide = false;
      });
      this.$nextTick(() => {
        this.initSize();
      });
    },
    methods: {
      initSize() {
        if (this.scrollable) {
          let query = [];
          let textQuery = new Promise((resolve, reject) => {
            uni.createSelectorQuery().in(this).select(`#${this.elId}`).boundingClientRect().exec((ret) => {
              this.textWidth = ret[0].width;
              resolve();
            });
          });
          let boxQuery = new Promise((resolve, reject) => {
            uni.createSelectorQuery().in(this).select(`#${this.elIdBox}`).boundingClientRect().exec((ret) => {
              this.boxWidth = ret[0].width;
              resolve();
            });
          });
          query.push(textQuery);
          query.push(boxQuery);
          Promise.all(query).then(() => {
            this.animationDuration = `${this.textWidth / this.speed}s`;
            this.animationDelay = `-${this.boxWidth / this.speed}s`;
            setTimeout(() => {
              this.animationPlayState = "running";
            }, 1e3);
          });
        }
      },
      loopAnimation() {
      },
      clickMore() {
        this.$emit("getmore");
      },
      close() {
        this.show = false;
        this.$emit("close");
      },
      onClick() {
        this.$emit("click");
      }
    }
  };
  function _sfc_render$4(_ctx, _cache, $props, $setup, $data, $options) {
    const _component_uni_icons = resolveEasycom(vue.resolveDynamicComponent("uni-icons"), __easycom_0$3);
    return $data.show ? (vue.openBlock(), vue.createElementBlock("view", {
      key: 0,
      class: "uni-noticebar",
      style: vue.normalizeStyle({ backgroundColor: $props.backgroundColor }),
      onClick: _cache[1] || (_cache[1] = (...args) => $options.onClick && $options.onClick(...args))
    }, [
      $props.showIcon === true || $props.showIcon === "true" ? (vue.openBlock(), vue.createBlock(_component_uni_icons, {
        key: 0,
        class: "uni-noticebar-icon",
        type: "sound",
        color: $props.color,
        size: $props.fontSize * 1.5
      }, null, 8, ["color", "size"])) : vue.createCommentVNode("v-if", true),
      vue.createElementVNode("view", {
        ref: "textBox",
        class: vue.normalizeClass(["uni-noticebar__content-wrapper", {
          "uni-noticebar__content-wrapper--scrollable": $props.scrollable,
          "uni-noticebar__content-wrapper--single": !$props.scrollable && ($props.single || $props.moreText)
        }]),
        style: vue.normalizeStyle({ height: $props.scrollable ? $props.fontSize * 1.5 + "px" : "auto" })
      }, [
        vue.createElementVNode("view", {
          id: $data.elIdBox,
          class: vue.normalizeClass(["uni-noticebar__content", {
            "uni-noticebar__content--scrollable": $props.scrollable,
            "uni-noticebar__content--single": !$props.scrollable && ($props.single || $props.moreText)
          }])
        }, [
          vue.createElementVNode("text", {
            id: $data.elId,
            ref: "animationEle",
            class: vue.normalizeClass(["uni-noticebar__content-text", {
              "uni-noticebar__content-text--scrollable": $props.scrollable,
              "uni-noticebar__content-text--single": !$props.scrollable && ($props.single || $props.showGetMore)
            }]),
            style: vue.normalizeStyle({
              color: $props.color,
              fontSize: $props.fontSize + "px",
              lineHeight: $props.fontSize * 1.5 + "px",
              width: $data.wrapWidth + "px",
              "animationDuration": $data.animationDuration,
              "-webkit-animationDuration": $data.animationDuration,
              animationPlayState: $data.webviewHide ? "paused" : $data.animationPlayState,
              "-webkit-animationPlayState": $data.webviewHide ? "paused" : $data.animationPlayState,
              animationDelay: $data.animationDelay,
              "-webkit-animationDelay": $data.animationDelay
            })
          }, vue.toDisplayString($props.text), 15, ["id"])
        ], 10, ["id"])
      ], 6),
      $options.isShowGetMore ? (vue.openBlock(), vue.createElementBlock("view", {
        key: 1,
        class: "uni-noticebar__more uni-cursor-point",
        onClick: _cache[0] || (_cache[0] = (...args) => $options.clickMore && $options.clickMore(...args))
      }, [
        $props.moreText.length > 0 ? (vue.openBlock(), vue.createElementBlock("text", {
          key: 0,
          style: vue.normalizeStyle({ color: $props.moreColor, fontSize: $props.fontSize + "px" })
        }, vue.toDisplayString($props.moreText), 5)) : (vue.openBlock(), vue.createBlock(_component_uni_icons, {
          key: 1,
          type: "right",
          color: $props.moreColor,
          size: $props.fontSize * 1.1
        }, null, 8, ["color", "size"]))
      ])) : vue.createCommentVNode("v-if", true),
      $options.isShowClose ? (vue.openBlock(), vue.createElementBlock("view", {
        key: 2,
        class: "uni-noticebar-close uni-cursor-point"
      }, [
        vue.createVNode(_component_uni_icons, {
          type: "closeempty",
          color: $props.color,
          size: $props.fontSize * 1.1,
          onClick: $options.close
        }, null, 8, ["color", "size", "onClick"])
      ])) : vue.createCommentVNode("v-if", true)
    ], 4)) : vue.createCommentVNode("v-if", true);
  }
  var __easycom_0 = /* @__PURE__ */ _export_sfc(_sfc_main$k, [["render", _sfc_render$4], ["__scopeId", "data-v-a1596656"], ["__file", "/Users/fox/project/uniapp/lok\u97F3\u4E50/uni_modules/uni-notice-bar/components/uni-notice-bar/uni-notice-bar.vue"]]);
  const _sfc_main$j = {
    __name: "play_tabbar",
    props: {
      meauStatus: {
        type: Boolean,
        default: false
      }
    },
    setup(__props) {
      const props = __props;
      let firstOpen = vue.ref(false);
      let roles = vue.ref(true);
      let musicInfo = vue.computed(() => {
        return store.state.musicInfo;
      });
      vue.getCurrentInstance();
      const settingPlay = (index) => {
        if (index == 0) {
          store.state.musicInfo.musicPlayStatus = false;
          roles.value = false;
          store.commit("pause");
          return;
        }
        if (!store.state.musicInfo.musicPlayStatus && store.state.musicInfo.firstPlay) {
          store.commit("play", 0);
          return;
        }
        roles.value = true;
        store.state.musicInfo.musicPlayStatus = true;
        store.commit("continueplay");
      };
      const showMeauStatus = vue.ref(true);
      const showMeau = () => {
        showMeauStatus.value = !showMeauStatus.value;
        firstOpen.value = true;
      };
      return (_ctx, _cache) => {
        const _component_uni_notice_bar = resolveEasycom(vue.resolveDynamicComponent("uni-notice-bar"), __easycom_0);
        return vue.openBlock(), vue.createElementBlock(vue.Fragment, null, [
          vue.withDirectives(vue.createElementVNode("view", {
            class: vue.normalizeClass(["play_tabbar", vue.unref(store).state.css_style ? "gray_filter" : ""])
          }, [
            vue.createElementVNode("view", {
              class: vue.normalizeClass(["play_tabbar_1", vue.unref(store).state.css_style ? "play_tabbar_1_1" : ""])
            }, null, 2),
            vue.createElementVNode("view", { class: "playsetting" }, [
              vue.withDirectives(vue.createElementVNode("image", {
                src: "/static/image/demo.jpeg",
                class: "imagesetting",
                mode: ""
              }, null, 512), [
                [vue.vShow, !vue.unref(musicInfo).musicImage]
              ]),
              vue.withDirectives(vue.createElementVNode("image", {
                src: vue.unref(musicInfo).musicImage,
                class: "imagesetting",
                mode: ""
              }, null, 8, ["src"]), [
                [vue.vShow, vue.unref(musicInfo).musicImage]
              ]),
              vue.createElementVNode("view", { class: "musicInfo" }, [
                vue.createElementVNode("view", {
                  class: "title",
                  style: { "font-size": "16px" }
                }, vue.toDisplayString(vue.unref(musicInfo).musicName), 1),
                vue.createCommentVNode(' <video src=""></video> '),
                vue.createElementVNode("view", {
                  class: "albums",
                  style: { "font-size": "14px" }
                }, [
                  (vue.openBlock(true), vue.createElementBlock(vue.Fragment, null, vue.renderList(vue.unref(musicInfo).musicAuthor, (item) => {
                    return vue.openBlock(), vue.createElementBlock("text", null, vue.toDisplayString(item) + "\xA0", 1);
                  }), 256))
                ])
              ]),
              vue.createElementVNode("view", { class: "right_" }, [
                vue.createElementVNode("view", { class: "radioView" }, [
                  vue.withDirectives(vue.createElementVNode("image", {
                    class: "imageadd",
                    src: "/static/image/stop.png",
                    style: {},
                    mode: "",
                    onClick: _cache[0] || (_cache[0] = ($event) => settingPlay(0))
                  }, null, 512), [
                    [vue.vShow, vue.unref(musicInfo).musicPlayStatus]
                  ]),
                  vue.withDirectives(vue.createElementVNode("image", {
                    class: "imageadd imageadd2",
                    src: "/static/image/play.png",
                    mode: "",
                    onClick: _cache[1] || (_cache[1] = ($event) => settingPlay(1))
                  }, null, 512), [
                    [vue.vShow, !vue.unref(musicInfo).musicPlayStatus]
                  ])
                ]),
                vue.createElementVNode("image", {
                  src: "/static/image/next.png",
                  style: { "width": "23px", "height": "23px" },
                  mode: "",
                  onClick: _cache[2] || (_cache[2] = ($event) => vue.unref(store).commit("next"))
                })
              ])
            ])
          ], 2), [
            [vue.vShow, !vue.unref(props).meauStatus]
          ]),
          vue.withDirectives(vue.createElementVNode("view", { class: "" }, [
            vue.createElementVNode("view", {
              class: vue.normalizeClass(["radioMeau_left", [showMeauStatus.value ? "" : "tranX2", showMeauStatus.value && vue.unref(firstOpen) ? "tranX2-2" : "", vue.unref(store).state.css_style ? "gray_filter" : ""]])
            }, [
              vue.createElementVNode("view", {
                class: "titles",
                style: { "font-size": "16px" }
              }, [
                vue.createCommentVNode(" {{musicInfo.musicName}} "),
                vue.createVNode(_component_uni_notice_bar, {
                  speed: 300 + "px",
                  scrollable: "",
                  single: "",
                  color: "#000000",
                  "background-color": "rgba(0,0, 0, 0)",
                  text: vue.unref(musicInfo).musicName
                }, null, 8, ["text"])
              ]),
              vue.withDirectives(vue.createElementVNode("image", {
                class: "imageadd",
                src: "/static/image/stop.png",
                style: {},
                mode: "",
                onClick: _cache[3] || (_cache[3] = ($event) => settingPlay(0))
              }, null, 512), [
                [vue.vShow, vue.unref(musicInfo).musicPlayStatus && !showMeauStatus.value]
              ]),
              vue.withDirectives(vue.createElementVNode("image", {
                class: "imageadd",
                src: "/static/image/play.png",
                mode: "",
                onClick: _cache[4] || (_cache[4] = ($event) => settingPlay(1))
              }, null, 512), [
                [vue.vShow, !vue.unref(musicInfo).musicPlayStatus && !showMeauStatus.value]
              ]),
              vue.withDirectives(vue.createElementVNode("image", {
                src: "/static/image/next.png",
                class: "imageadd imageadd3",
                style: { "width": "23px", "height": "23px" },
                mode: "",
                onClick: _cache[5] || (_cache[5] = ($event) => vue.unref(store).commit("next"))
              }, null, 512), [
                [vue.vShow, !showMeauStatus.value]
              ])
            ], 2),
            vue.createElementVNode("view", {
              class: vue.normalizeClass(["radioMeau_right", vue.unref(store).state.css_style ? "gray_filter" : ""])
            }, [
              vue.createCommentVNode("  "),
              vue.withDirectives(vue.createElementVNode("image", {
                src: "/static/image/firefox.png",
                class: "imagesetting bradius",
                mode: "",
                onClick: showMeau
              }, null, 512), [
                [vue.vShow, !vue.unref(musicInfo).musicImage]
              ]),
              vue.withDirectives(vue.createElementVNode("image", {
                src: vue.unref(musicInfo).musicImage,
                class: vue.normalizeClass(["imagesetting bradius imageroles", [vue.unref(roles) ? "" : "rolesStop"]]),
                mode: "",
                onClick: showMeau
              }, null, 10, ["src"]), [
                [vue.vShow, vue.unref(musicInfo).musicImage]
              ])
            ], 2)
          ], 512), [
            [vue.vShow, vue.unref(props).meauStatus]
          ])
        ], 64);
      };
    }
  };
  var playtabbar = /* @__PURE__ */ _export_sfc(_sfc_main$j, [["__scopeId", "data-v-7d022d33"], ["__file", "/Users/fox/project/uniapp/lok\u97F3\u4E50/common/play_tabbar.vue"]]);
  const _sfc_main$i = {
    __name: "mainEntrance",
    setup(__props) {
      vue.getCurrentInstance();
      let ctabbarItem = vue.ref(0);
      const ctabbarEvent = (value) => {
        ctabbarItem.value = value;
      };
      return (_ctx, _cache) => {
        return vue.openBlock(), vue.createElementBlock("view", { class: "main" }, [
          vue.unref(ctabbarItem) === 0 ? (vue.openBlock(), vue.createBlock(home, { key: 0 })) : vue.createCommentVNode("v-if", true),
          vue.unref(ctabbarItem) === 1 ? (vue.openBlock(), vue.createBlock(trending, { key: 1 })) : vue.createCommentVNode("v-if", true),
          vue.unref(ctabbarItem) === 2 ? (vue.openBlock(), vue.createBlock(search, { key: 2 })) : vue.createCommentVNode("v-if", true),
          vue.unref(ctabbarItem) === 3 ? (vue.openBlock(), vue.createBlock(radios, { key: 3 })) : vue.createCommentVNode("v-if", true),
          vue.unref(ctabbarItem) === 4 ? (vue.openBlock(), vue.createBlock(setting, { key: 4 })) : vue.createCommentVNode("v-if", true),
          vue.createVNode(playtabbar),
          vue.createVNode(tabbar, { onCtabbarItem: ctabbarEvent })
        ]);
      };
    }
  };
  var PagesMainEntranceMainEntrance = /* @__PURE__ */ _export_sfc(_sfc_main$i, [["__file", "/Users/fox/project/uniapp/lok\u97F3\u4E50/pages/mainEntrance/mainEntrance.vue"]]);
  const _sfc_main$h = {
    __name: "charts",
    setup(__props) {
      let current = vue.ref(0);
      let statusBarHeight = vue.ref(0);
      const changeView = (index) => {
        if (index == current.value)
          return;
        current.value = index;
      };
      vue.onMounted(() => {
        gettitleheight();
        gettoplist();
        toplistartist2();
        highquality2();
      });
      let toplist = vue.ref({});
      let toplistid = vue.ref("");
      const gettoplist = async () => {
        await axios$1.allToplist().then((res) => {
          toplist.value = res.data.list[0];
          toplistid.value = res.data.list[0].id;
        }).catch((err) => {
          setTimeout(() => {
            gettoplist();
          }, 1e3);
        });
        getsheetallsongs2();
      };
      let sheetsonglist = vue.ref([]);
      const getsheetallsongs2 = async () => {
        await axios$1.getsheetallsongs({
          id: toplistid.value
        }).then((res) => {
          sheetsonglist.value = res.data.songs;
          sheetsonglist.value.length = 20;
        }).catch((err) => {
          setTimeout(() => {
            getsheetallsongs2();
          }, 1e3);
        });
      };
      const gettitleheight = () => {
        uni.getSystemInfo({
          success(res) {
            if (res.statusBarHeight == 0)
              return;
            statusBarHeight.value = res.statusBarHeight;
            store.commit("phoneInfo", {
              statusbarHeight: res.statusBarHeight
            });
          }
        });
      };
      let toplistart = vue.ref([]);
      let toplistart2 = vue.ref([]);
      const toplistartist2 = async () => {
        await axios$1.toplistartist().then((res) => {
          toplistart2.value = res.data.list.artists;
          toplistart.value = [...toplistart2.value];
          toplistart.value.length = 20;
        }).catch((err) => {
          setTimeout(() => {
            toplistartist2();
          }, 1e3);
        });
      };
      let highqualitydata = vue.ref({
        limit: 20,
        before: ""
      });
      let highqualitylist = vue.ref([]);
      const highquality2 = async () => {
        await axios$1.highquality(highqualitydata.value).then((res) => {
          highqualitylist.value = res.data.playlists;
          highqualitydata.value.before = res.data.lasttime;
        }).catch((err) => {
          setTimeout(() => {
            highquality2();
          }, 1e3);
        });
      };
      return (_ctx, _cache) => {
        const _component_uni_icons = resolveEasycom(vue.resolveDynamicComponent("uni-icons"), __easycom_0$3);
        return vue.openBlock(), vue.createElementBlock("scroll-view", {
          "scroll-y": "",
          "show-scrollbar": false,
          class: vue.normalizeClass(vue.unref(store).state.css_style ? "gray_filter" : "")
        }, [
          vue.createElementVNode("view", {
            class: "charts",
            style: vue.normalizeStyle({ paddingTop: vue.unref(statusBarHeight) + "px" })
          }, [
            vue.createElementVNode("view", { class: "title" }, [
              vue.createElementVNode("view", {
                class: "title_left",
                onClick: _cache[0] || (_cache[0] = (...args) => _ctx.get && _ctx.get(...args))
              }, vue.toDisplayString(vue.unref(current) == 0 ? "\u6B4C\u66F2" : vue.unref(current) == 1 ? "\u4E13\u8F91" : "\u6B4C\u624B"), 1)
            ]),
            vue.createElementVNode("view", { class: "change_tabs" }, [
              vue.createElementVNode("view", {
                class: vue.normalizeClass(vue.unref(current) == 0 ? "bordergreen" : ""),
                onClick: _cache[1] || (_cache[1] = ($event) => changeView(0))
              }, vue.toDisplayString(vue.unref(toplist).name), 3),
              vue.createElementVNode("view", {
                class: vue.normalizeClass(vue.unref(current) == 1 ? "bordergreen" : ""),
                onClick: _cache[2] || (_cache[2] = ($event) => changeView(1))
              }, " \u6B4C\u5355\u699C ", 2),
              vue.createElementVNode("view", {
                class: vue.normalizeClass(vue.unref(current) == 2 ? "bordergreen" : ""),
                onClick: _cache[3] || (_cache[3] = ($event) => changeView(2))
              }, " \u6B4C\u624B\u699C ", 2)
            ]),
            vue.withDirectives(vue.createElementVNode("view", { class: "charts_content" }, [
              (vue.openBlock(true), vue.createElementBlock(vue.Fragment, null, vue.renderList(vue.unref(sheetsonglist), (item, index) => {
                return vue.openBlock(), vue.createElementBlock("view", { class: "charts_item" }, [
                  vue.createElementVNode("view", { class: "charts_item1" }, vue.toDisplayString(index + 1), 1),
                  vue.createElementVNode("view", { class: "charts_item2" }, [
                    vue.createElementVNode("image", {
                      "lazy-load": "",
                      style: { "width": "100%", "height": "100%", "border-radius": "10px" },
                      src: item.al.picUrl,
                      mode: ""
                    }, null, 8, ["src"])
                  ]),
                  vue.createElementVNode("view", { class: "charts_item3" }, [
                    vue.createElementVNode("view", { class: "charts_item3_title" }, vue.toDisplayString(item.name), 1),
                    vue.createElementVNode("view", { class: "charts_item3_content" }, [
                      (vue.openBlock(true), vue.createElementBlock(vue.Fragment, null, vue.renderList(item.ar, (i2) => {
                        return vue.openBlock(), vue.createElementBlock("text", null, vue.toDisplayString(i2.name) + "\xA0\xA0", 1);
                      }), 256))
                    ])
                  ]),
                  vue.createElementVNode("view", { class: "charts_item4" }, [
                    vue.createVNode(_component_uni_icons, {
                      type: "more-filled",
                      color: "#B9B9B9",
                      size: "25"
                    })
                  ])
                ]);
              }), 256))
            ], 512), [
              [vue.vShow, vue.unref(current) == 0]
            ]),
            vue.withDirectives(vue.createElementVNode("view", { class: "charts_albums" }, [
              (vue.openBlock(true), vue.createElementBlock(vue.Fragment, null, vue.renderList(vue.unref(highqualitylist), (item, index) => {
                return vue.openBlock(), vue.createElementBlock("view", { class: "charts_albums_item" }, [
                  vue.createElementVNode("view", { class: "charts_albums_item1" }, vue.toDisplayString(index + 1), 1),
                  vue.createElementVNode("view", { class: "charts_albums_item2" }, [
                    vue.createElementVNode("image", {
                      "lazy-load": "",
                      style: { "width": "100%", "height": "100%", "border-radius": "10px" },
                      src: item.coverImgUrl,
                      mode: ""
                    }, null, 8, ["src"])
                  ]),
                  vue.createElementVNode("view", { class: "charts_albums_item3" }, [
                    vue.createElementVNode("view", { class: "charts_item3_title" }, vue.toDisplayString(item.name), 1),
                    vue.createElementVNode("view", { class: "charts_item3_content" }, [
                      vue.createElementVNode("view", { class: "reviews" }, vue.toDisplayString(item.creator.nickname), 1),
                      vue.createElementVNode("view", { class: "star" }, vue.toDisplayString(item.shareCount) + "\u6B21\u5206\u4EAB ", 1)
                    ])
                  ]),
                  vue.createElementVNode("view", { class: "charts_albums_item4" }, [
                    vue.createVNode(_component_uni_icons, {
                      type: "more-filled",
                      color: "#B9B9B9",
                      size: "25"
                    })
                  ])
                ]);
              }), 256))
            ], 512), [
              [vue.vShow, vue.unref(current) == 1]
            ]),
            vue.withDirectives(vue.createElementVNode("view", { class: "charts_content" }, [
              (vue.openBlock(true), vue.createElementBlock(vue.Fragment, null, vue.renderList(vue.unref(toplistart), (item, index) => {
                return vue.openBlock(), vue.createElementBlock("view", { class: "charts_item" }, [
                  vue.createElementVNode("view", {
                    class: vue.normalizeClass(["charts_item1", index < 3 ? "hot" : ""])
                  }, vue.toDisplayString(index < 3 ? "Hot" : index + 1 + ""), 3),
                  vue.createElementVNode("view", { class: "charts_item2" }, [
                    vue.createElementVNode("image", {
                      "lazy-load": "",
                      style: { "width": "100%", "height": "100%", "border-radius": "10px" },
                      src: item.picUrl,
                      mode: ""
                    }, null, 8, ["src"])
                  ]),
                  vue.createElementVNode("view", { class: "charts_item3" }, [
                    vue.createElementVNode("view", { class: "charts_item3_title" }, vue.toDisplayString(item.name), 1),
                    vue.createElementVNode("view", { class: "charts_item3_content" }, vue.toDisplayString(item.score), 1)
                  ]),
                  vue.createElementVNode("view", { class: "charts_item4" }, [
                    vue.createVNode(_component_uni_icons, {
                      type: "more-filled",
                      color: "#B9B9B9",
                      size: "25"
                    })
                  ])
                ]);
              }), 256))
            ], 512), [
              [vue.vShow, vue.unref(current) == 2]
            ])
          ], 4)
        ], 2);
      };
    }
  };
  var PagesTrendingChartsCharts = /* @__PURE__ */ _export_sfc(_sfc_main$h, [["__scopeId", "data-v-514f111e"], ["__file", "/Users/fox/project/uniapp/lok\u97F3\u4E50/pages/trending/charts/charts.vue"]]);
  const _sfc_main$g = {
    __name: "login",
    setup(__props) {
      let login_data = vue.ref({
        phone: "",
        password: ""
      });
      let login_data2 = vue.ref({
        phone: "",
        captcha: ""
      });
      let getCodeText = vue.ref("\u83B7\u53D6\u9A8C\u8BC1\u7801");
      let loginStatus = vue.ref(true);
      let login2 = async (index) => {
        if (index == 1) {
          if (!/^1[3456789]\d{9}$/.test(login_data.value.phone)) {
            uni.showToast({
              title: "\u624B\u673A\u53F7\u586B\u5199\u9519\u8BEF",
              duration: 2e3,
              icon: "none"
            });
          } else {
            await axios$1.login(login_data.value).then((res) => {
              if (res.data.code !== 200) {
                uni.showToast({
                  title: "\u8BF7\u7A0D\u540E\u91CD\u8BD5\uFF0C\u6216\u8005\u9A8C\u8BC1\u7801\u767B\u5F55",
                  duration: 2e3,
                  icon: "none"
                });
              } else {
                if (res.code == 200) {
                  unistroage.setStorage("token", res.data.token);
                } else {
                  uni.showToast({
                    title: "\u8BF7\u7A0D\u540E\u91CD\u8BD5",
                    duration: 2e3,
                    icon: "none"
                  });
                }
              }
            });
          }
        } else if (index == 2) {
          if (!/^1[3456789]\d{9}$/.test(login_data2.value.phone)) {
            uni.showToast({
              title: "\u624B\u673A\u53F7\u586B\u5199\u9519\u8BEF",
              duration: 2e3,
              icon: "none"
            });
          } else {
            if (login_data2.value.captcha) {
              await axios$1.login(login_data2.value).then((res) => {
                if (res.data.code == 200) {
                  unistroage.setStorage("token", res.data.token);
                  unistroage.setStorage("userId", res.data.account.id);
                  uni.redirectTo({
                    url: "/pages/mainEntrance/mainEntrance"
                  });
                } else {
                  uni.showToast({
                    title: "\u8BF7\u7A0D\u540E\u91CD\u8BD5",
                    duration: 2e3,
                    icon: "none"
                  });
                }
              });
            }
          }
        }
      };
      const getCode = async () => {
        if (getCodeText.value == "\u83B7\u53D6\u9A8C\u8BC1\u7801") {
          if (!/^1[3456789]\d{9}$/.test(login_data2.value.phone)) {
            uni.showToast({
              title: "\u624B\u673A\u53F7\u9519\u8BEF",
              duration: 2e3,
              icon: "error"
            });
          } else {
            getCodeText.value = 60;
            let mysetInterval = setInterval(() => {
              getCodeText.value--;
              if (getCodeText.value <= 0) {
                clearInterval(mysetInterval);
                getCodeText.value = "\u83B7\u53D6\u9A8C\u8BC1\u7801";
              }
            }, 1e3);
            await axios$1.captcha({
              phone: login_data2.value.phone
            });
          }
        }
      };
      const goregister = () => {
        uni.navigateTo({
          url: "/pages/login/register/register"
        });
      };
      const changeloginStatus = (val) => {
        loginStatus.value = !val;
      };
      const gotoqj = () => {
        uni.navigateTo({
          url: "/pages/login/scan/scan"
        });
      };
      vue.onMounted(() => {
      });
      return (_ctx, _cache) => {
        const _component_uni_icons = resolveEasycom(vue.resolveDynamicComponent("uni-icons"), __easycom_0$3);
        return vue.openBlock(), vue.createElementBlock(vue.Fragment, null, [
          vue.unref(loginStatus) ? (vue.openBlock(), vue.createElementBlock("view", {
            key: 0,
            class: vue.normalizeClass(vue.unref(store).state.css_style ? "gray_filter" : "")
          }, [
            vue.createElementVNode("view", { class: "login" }, [
              vue.createElementVNode("image", {
                style: { "width": "100%", "height": "100%" },
                src: "/static/image/firefox.png",
                mode: ""
              })
            ]),
            vue.createElementVNode("view", { class: "login_title" }, " lok\u97F3\u4E50 "),
            vue.createElementVNode("view", { class: "form form--address" }, [
              vue.createElementVNode("view", { class: "form_item" }, [
                vue.withDirectives(vue.createElementVNode("input", {
                  type: "text",
                  placeholder: "\u624B\u673A\u53F7\u7801",
                  "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => vue.unref(login_data).phone = $event)
                }, null, 512), [
                  [vue.vModelText, vue.unref(login_data).phone]
                ])
              ]),
              vue.createElementVNode("view", { class: "form_item" }, [
                vue.withDirectives(vue.createElementVNode("input", {
                  type: "text",
                  placeholder: "\u5BC6\u7801",
                  "onUpdate:modelValue": _cache[1] || (_cache[1] = ($event) => vue.unref(login_data).password = $event)
                }, null, 512), [
                  [vue.vModelText, vue.unref(login_data).password]
                ])
              ]),
              vue.createElementVNode("button", {
                class: "logbtn",
                onClick: _cache[2] || (_cache[2] = ($event) => vue.unref(login2)(1))
              }, "\u767B\u5F55")
            ]),
            vue.createElementVNode("view", { class: "changePassword" }, [
              vue.createElementVNode("view", { class: "changePassword_icon" }, [
                vue.createVNode(_component_uni_icons, {
                  type: "loop",
                  color: "white",
                  size: "16"
                })
              ]),
              vue.createElementVNode("text", {
                onClick: _cache[3] || (_cache[3] = ($event) => changeloginStatus(true))
              }, "\u9A8C\u8BC1\u7801\u767B\u5F55")
            ]),
            vue.createCommentVNode(" \u626B\u7801\u767B\u5F55 "),
            vue.createElementVNode("view", { class: "gotoqj" }, [
              vue.createElementVNode("view", { class: "changePassword_icon" }, [
                vue.createVNode(_component_uni_icons, {
                  type: "loop",
                  color: "white",
                  size: "16"
                })
              ]),
              vue.createElementVNode("text", { onClick: gotoqj }, "go\u626B\u7801\u767B\u5F55")
            ]),
            vue.createElementVNode("view", { class: "sign_up" }, [
              vue.createElementVNode("view", null, [
                vue.createVNode(_component_uni_icons, {
                  onClick: goregister,
                  color: "green",
                  type: "redo-filled",
                  size: "18"
                }),
                vue.createElementVNode("text", { onClick: goregister }, "\u6CE8\u518C")
              ])
            ])
          ], 2)) : vue.createCommentVNode("v-if", true),
          vue.createCommentVNode(" //\u9A8C\u8BC1\u7801\u767B\u5F55 "),
          !vue.unref(loginStatus) ? (vue.openBlock(), vue.createElementBlock("view", {
            key: 1,
            class: vue.normalizeClass(["codelogin", vue.unref(store).state.css_style ? "gray_filter" : ""])
          }, [
            vue.createElementVNode("view", { class: "login" }, [
              vue.createElementVNode("image", {
                style: { "width": "100%", "height": "100%" },
                src: "/static/image/firefox.png",
                mode: ""
              })
            ]),
            vue.createElementVNode("view", { class: "login_title" }, " lok\u97F3\u4E50 "),
            vue.createElementVNode("view", { class: "form form--address" }, [
              vue.createElementVNode("view", { class: "form_item" }, [
                vue.withDirectives(vue.createElementVNode("input", {
                  type: "text",
                  placeholder: "\u624B\u673A\u53F7\u7801",
                  "onUpdate:modelValue": _cache[4] || (_cache[4] = ($event) => vue.unref(login_data2).phone = $event)
                }, null, 512), [
                  [vue.vModelText, vue.unref(login_data2).phone]
                ])
              ]),
              vue.createElementVNode("view", { class: "form_item for_item2" }, [
                vue.withDirectives(vue.createElementVNode("input", {
                  type: "text",
                  placeholder: "\u9A8C\u8BC1\u7801",
                  "onUpdate:modelValue": _cache[5] || (_cache[5] = ($event) => vue.unref(login_data2).captcha = $event)
                }, null, 512), [
                  [vue.vModelText, vue.unref(login_data2).captcha]
                ]),
                vue.createElementVNode("view", { onClick: getCode }, vue.toDisplayString(vue.unref(getCodeText)), 1)
              ]),
              vue.createElementVNode("button", {
                class: "logbtn",
                onClick: _cache[6] || (_cache[6] = ($event) => vue.unref(login2)(2))
              }, "\u767B\u5F55")
            ]),
            vue.createElementVNode("view", { class: "changePassword" }, [
              vue.createElementVNode("view", { class: "changePassword_icon" }, [
                vue.createVNode(_component_uni_icons, {
                  type: "loop",
                  color: "white",
                  size: "16"
                })
              ]),
              vue.createElementVNode("text", {
                onClick: _cache[7] || (_cache[7] = ($event) => changeloginStatus(false))
              }, "\u5BC6\u7801\u767B\u5F55")
            ]),
            vue.createElementVNode("view", { class: "sign_up" }, [
              vue.createElementVNode("view", null, [
                vue.createVNode(_component_uni_icons, {
                  onClick: goregister,
                  color: "green",
                  type: "redo-filled",
                  size: "18"
                }),
                vue.createElementVNode("text", { onClick: goregister }, "\u6CE8\u518C")
              ])
            ])
          ], 2)) : vue.createCommentVNode("v-if", true)
        ], 64);
      };
    }
  };
  var PagesLoginLoginLogin = /* @__PURE__ */ _export_sfc(_sfc_main$g, [["__scopeId", "data-v-1389b5f4"], ["__file", "/Users/fox/project/uniapp/lok\u97F3\u4E50/pages/login/login/login.vue"]]);
  const _sfc_main$f = {
    __name: "register",
    setup(__props) {
      vue.getCurrentInstance();
      let inputstatus = vue.ref(true);
      let textstatus = vue.ref(true);
      let passwordstatus = vue.ref(true);
      let formInfo = vue.ref({
        captcha: "",
        phone: "",
        password: "",
        password2: "",
        nickname: ""
      });
      const getCodeText = vue.ref("\u83B7\u53D6\u9A8C\u8BC1\u7801");
      const goback = () => {
        uni.navigateBack({
          delta: 1
        });
      };
      const checkusername = () => {
        d2();
      };
      const d2 = debounce(() => {
        axios$1.checknickname({ nickname: formInfo.value.nickname }).then((res) => {
          if (res.data.duplicated) {
            textstatus.value = false;
          } else {
            textstatus.value = true;
          }
        });
      }, 1e3);
      const passwordstatusinput = () => {
        if (formInfo.value.password.length <= 6) {
          passwordstatus.value = false;
        } else {
          passwordstatus.value = true;
        }
      };
      const getcatch = async () => {
        if (getCodeText.value == "\u83B7\u53D6\u9A8C\u8BC1\u7801") {
          if (!/^1[3456789]\d{9}$/.test(formInfo.value.phone)) {
            uni.showToast({
              title: "\u624B\u673A\u53F7\u9519\u8BEF",
              duration: 2e3,
              icon: "none"
            });
          } else {
            getCodeText.value = 60;
            let mysetInterval = setInterval(() => {
              getCodeText.value--;
              if (getCodeText.value <= 0) {
                clearInterval(mysetInterval);
                getCodeText.value = "\u83B7\u53D6\u9A8C\u8BC1\u7801";
              }
            }, 1e3);
            await axios$1.captcha({
              phone: formInfo.value.phone
            }).then((res) => {
              inputstatus.value = false;
            });
          }
        }
      };
      const register2 = async () => {
        if (formInfo.value.password != formInfo.value.password2) {
          uni.showToast({
            title: "\u4E24\u6B21\u5BC6\u7801\u8F93\u5165\u7684\u4E0D\u4E00\u81F4",
            icon: "none"
          });
        } else {
          if (formInfo.value.captcha) {
            inputstatus.value = true;
            await axios$1.register(formInfo.value).then((res) => {
              formatAppLog("log", "at pages/login/register/register.vue:127", res);
              if (res.data.code == 200) {
                uni.showToast({
                  title: "\u529F\u80FD\u672A\u6D4B\u8BD5\uFF0C\u5982\u679C\u6CE8\u518C\u5931\u8D25\u8BF7\u8054\u7CFB\u6211",
                  icon: "none"
                });
                unistroage.setStorage("token", res.data.token);
                unistroage.setStorage("userId", res.data.account.id);
                uni.redirectTo({
                  url: "/pages/mainEntrance/mainEntrance"
                });
              } else {
                uni.showToast({
                  title: "\u6CE8\u518C\u5931\u8D25\uFF0C\u8BF7\u7A0D\u540E\u518D\u8BD5",
                  icon: "none"
                });
              }
            });
          }
        }
      };
      return (_ctx, _cache) => {
        const _component_uni_icons = resolveEasycom(vue.resolveDynamicComponent("uni-icons"), __easycom_0$3);
        return vue.openBlock(), vue.createElementBlock("view", {
          class: vue.normalizeClass(_ctx.store.state.css_style ? "gray_filter" : "")
        }, [
          vue.createElementVNode("view", { class: "logins" }, [
            vue.createElementVNode("image", {
              style: { "width": "100%", "height": "100%" },
              src: "/static/image/firefox.png",
              mode: "aspectFill"
            })
          ]),
          vue.createElementVNode("view", { class: "login_title" }, " \u6CE8\u518C "),
          vue.createElementVNode("view", { class: "form" }, [
            vue.createElementVNode("view", { class: "form_item" }, [
              vue.unref(inputstatus) ? vue.withDirectives((vue.openBlock(), vue.createElementBlock("input", {
                key: 0,
                "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => vue.unref(formInfo).phone = $event),
                type: "text",
                placeholder: "\u624B\u673A\u53F7\u7801"
              }, null, 512)), [
                [vue.vModelText, vue.unref(formInfo).phone]
              ]) : vue.createCommentVNode("v-if", true),
              !vue.unref(inputstatus) ? vue.withDirectives((vue.openBlock(), vue.createElementBlock("input", {
                key: 1,
                "onUpdate:modelValue": _cache[1] || (_cache[1] = ($event) => vue.unref(formInfo).phone = $event),
                disabled: "",
                type: "text",
                placeholder: "\u624B\u673A\u53F7\u7801"
              }, null, 512)), [
                [vue.vModelText, vue.unref(formInfo).phone]
              ]) : vue.createCommentVNode("v-if", true),
              vue.createElementVNode("view", {
                class: "getcatch",
                onClick: getcatch
              }, vue.toDisplayString(getCodeText.value), 1)
            ]),
            vue.createElementVNode("view", { class: "form_item" }, [
              vue.withDirectives(vue.createElementVNode("input", {
                "onUpdate:modelValue": _cache[2] || (_cache[2] = ($event) => vue.unref(formInfo).nickname = $event),
                onInput: checkusername,
                class: vue.normalizeClass(vue.unref(textstatus) ? "" : "redtext"),
                type: "text",
                placeholder: "\u7528\u6237\u540D"
              }, null, 34), [
                [vue.vModelText, vue.unref(formInfo).nickname]
              ])
            ]),
            vue.createElementVNode("view", { class: "form_item" }, [
              vue.withDirectives(vue.createElementVNode("input", {
                "onUpdate:modelValue": _cache[3] || (_cache[3] = ($event) => vue.unref(formInfo).password = $event),
                onInput: passwordstatusinput,
                class: vue.normalizeClass(vue.unref(passwordstatus) ? "" : "redtext"),
                type: "text",
                placeholder: "\u5BC6\u7801"
              }, null, 34), [
                [vue.vModelText, vue.unref(formInfo).password]
              ])
            ]),
            vue.createElementVNode("view", { class: "form_item" }, [
              vue.withDirectives(vue.createElementVNode("input", {
                "onUpdate:modelValue": _cache[4] || (_cache[4] = ($event) => vue.unref(formInfo).password2 = $event),
                type: "text",
                placeholder: "\u786E\u8BA4\u5BC6\u7801"
              }, null, 512), [
                [vue.vModelText, vue.unref(formInfo).password2]
              ])
            ]),
            vue.createElementVNode("view", { class: "form_item" }, [
              vue.withDirectives(vue.createElementVNode("input", {
                "onUpdate:modelValue": _cache[5] || (_cache[5] = ($event) => vue.unref(formInfo).captcha = $event),
                type: "text",
                placeholder: "\u9A8C\u8BC1\u7801"
              }, null, 512), [
                [vue.vModelText, vue.unref(formInfo).captcha]
              ])
            ]),
            vue.createElementVNode("button", {
              class: "logbtn",
              onClick: register2
            }, "\u6CE8\u518C")
          ]),
          vue.createElementVNode("view", { class: "sign_up" }, [
            vue.createElementVNode("view", null, [
              vue.createVNode(_component_uni_icons, {
                onClick: goback,
                color: "green",
                type: "redo-filled",
                size: "18"
              }),
              vue.createElementVNode("text", { onClick: goback }, "\u8FD4\u56DE")
            ])
          ])
        ], 2);
      };
    }
  };
  var PagesLoginRegisterRegister = /* @__PURE__ */ _export_sfc(_sfc_main$f, [["__scopeId", "data-v-417ad080"], ["__file", "/Users/fox/project/uniapp/lok\u97F3\u4E50/pages/login/register/register.vue"]]);
  const _sfc_main$e = {
    __name: "playlists",
    setup(__props) {
      let index = vue.ref(true);
      vue.ref(true);
      let firstopen = vue.ref(false);
      let statusBarHeight = vue.ref(0);
      const goback = () => {
        uni.navigateBack(1);
      };
      vue.onMounted(() => {
        uni.getSystemInfo({
          success(res) {
            if (res.statusBarHeight == 0)
              return;
            statusBarHeight.value = res.statusBarHeight;
            store.commit("phoneInfo", {
              statusbarHeight: res.statusBarHeight
            });
          }
        });
        userplaylist2();
      });
      let addsongsheetname = vue.ref("");
      const addsongsheet = async () => {
        await axios$1.createplaylist({
          name: addsongsheetname.value
        }).then((res) => {
          if (res.data.code == 200) {
            uni.showToast({
              title: "\u521B\u5EFA\u6210\u529F",
              icon: "none"
            });
          }
        }).catch((err) => {
          setTimeout(() => {
            addsongsheet();
          }, 1e3);
        });
      };
      let userplayreslist = vue.ref([]);
      const userplaylist2 = async () => {
        let uid = unistroage.getStorage("userId");
        await axios$1.userplaylist({ uid }).then((res) => {
          userplayreslist.value = res.data.playlist;
        });
      };
      const gotopage = (item) => {
        uni.navigateTo({
          url: `/pages/home/songs/songs?songssheetId=${item.id}`
        });
      };
      return (_ctx, _cache) => {
        const _component_uni_icons = resolveEasycom(vue.resolveDynamicComponent("uni-icons"), __easycom_0$3);
        return vue.openBlock(), vue.createElementBlock("view", {
          class: vue.normalizeClass(["playlists", vue.unref(store).state.css_style ? "gray_filter" : ""]),
          style: vue.normalizeStyle({ paddingTop: vue.unref(statusBarHeight) + "px" })
        }, [
          vue.createElementVNode("view", {
            class: "title",
            onClick: goback
          }, [
            vue.createVNode(_component_uni_icons, {
              style: { "vertical-align": "middle" },
              type: "back",
              size: "30"
            }),
            vue.createElementVNode("view", { class: "title_left" }, " \u6B4C\u5355 ")
          ]),
          vue.createElementVNode("view", { class: "addSongsSheet" }, [
            vue.withDirectives(vue.createElementVNode("input", {
              type: "text",
              "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => vue.isRef(addsongsheetname) ? addsongsheetname.value = $event : addsongsheetname = $event),
              placeholder: "\u8BF7\u8F93\u5165\u6DFB\u52A0\u7684\u6B4C\u5355\u540D\u79F0"
            }, null, 512), [
              [vue.vModelText, vue.unref(addsongsheetname)]
            ]),
            vue.createVNode(_component_uni_icons, {
              onClick: addsongsheet,
              type: "plus-filled",
              color: "#00AC5A",
              size: "30"
            })
          ]),
          vue.createElementVNode("view", {
            class: vue.normalizeClass(["playlists_result", [!vue.unref(index) ? "ani" : "", vue.unref(index) && vue.unref(firstopen) ? "ani2" : ""]])
          }, [
            (vue.openBlock(true), vue.createElementBlock(vue.Fragment, null, vue.renderList(vue.unref(userplayreslist), (item, index2) => {
              return vue.openBlock(), vue.createElementBlock("view", {
                class: "playlists_result_item",
                onClick: ($event) => gotopage(item)
              }, [
                vue.createElementVNode("image", {
                  class: "playlists_result_image",
                  src: item.coverImgUrl,
                  mode: ""
                }, null, 8, ["src"]),
                vue.createElementVNode("view", { class: "playlists_result_name" }, vue.toDisplayString(item.name), 1),
                vue.createCommentVNode(' <view  v-if="(index==7)" class="showmore">\n					\u67E5\u770B\u5168\u90E8<uni-icons style="vertical-align: middle;" type="arrow-right" size="18"></uni-icons>\n				</view> ')
              ], 8, ["onClick"]);
            }), 256))
          ], 2),
          vue.createCommentVNode(' <view v-if="userplayreslist.length>=8" class="selectmore" @click="addindex">\n			{{index?"\u67E5\u770B\u66F4\u591A...":"\u7F29\u8D77..."}}\n		</view> '),
          vue.createCommentVNode(` <view class="title songsheets">
			\u6536\u85CF\u6B4C\u5355
		</view>
		<view class="playlists_result2" :class="[!index2?'ani':'',index2&&firstopen?'ani2':'']">
			<view class="playlists_result_item" v-for="item,index in 8">
				<image v-if="!(index==7)" class="playlists_result_image" src="../../../static/image/demo.jpeg" mode=""></image>
				<view  v-if="!(index==7)" class="playlists_result_name">
					\u6B4C\u5355\u540D\u79F0\u6B4C\u5355\u540D\u79F0\u6B4C\u5355\u540D\u79F0\u6B4C\u5355\u540D\u79F0\u6B4C\u5355\u540D\u79F0\u6B4C\u5355\u540D\u79F0
				</view>
				<view  v-if="(index==7)" class="showmore">
					\u67E5\u770B\u5168\u90E8<uni-icons style="vertical-align: middle;" type="arrow-right" size="18"></uni-icons>
				</view>
			</view>
		</view>
		<view class="selectmore" @click="addindex2">
			{{index2?"\u67E5\u770B\u66F4\u591A...":"\u7F29\u8D77..."}}
		</view> `)
        ], 6);
      };
    }
  };
  var PagesHomePlaylistsPlaylists = /* @__PURE__ */ _export_sfc(_sfc_main$e, [["__scopeId", "data-v-6a3d4dfc"], ["__file", "/Users/fox/project/uniapp/lok\u97F3\u4E50/pages/home/playlists/playlists.vue"]]);
  const _sfc_main$d = {
    __name: "albums",
    setup(__props) {
      let statusBarHeight = vue.ref(0);
      const goback = () => {
        uni.navigateBack(1);
      };
      vue.onMounted(() => {
        uni.getSystemInfo({
          success(res) {
            if (res.statusBarHeight == 0)
              return;
            statusBarHeight.value = res.statusBarHeight;
            store.commit("phoneInfo", {
              statusbarHeight: res.statusBarHeight
            });
          }
        });
        getsublistalbum();
      });
      let albumlist = vue.ref([]);
      const getsublistalbum = async () => {
        await axios$1.sublistalbum({}).then((res) => {
          albumlist.value = res.data.data;
        }).catch((err) => {
          setTimeout(() => {
            getsublistalbum();
          }, 1e3);
        });
      };
      return (_ctx, _cache) => {
        const _component_uni_icons = resolveEasycom(vue.resolveDynamicComponent("uni-icons"), __easycom_0$3);
        return vue.openBlock(), vue.createElementBlock("view", {
          class: vue.normalizeClass(["albums", vue.unref(store).state.css_style ? "gray_filter" : ""]),
          style: vue.normalizeStyle({ paddingTop: vue.unref(statusBarHeight) + "px" })
        }, [
          vue.createElementVNode("view", {
            class: "title",
            onClick: goback
          }, [
            vue.createVNode(_component_uni_icons, {
              style: { "vertical-align": "middle" },
              type: "back",
              size: "30"
            }),
            vue.createElementVNode("view", { class: "title_left" }, " \u4E13\u8F91 ")
          ]),
          vue.createElementVNode("view", { class: "albums_container" }, [
            (vue.openBlock(true), vue.createElementBlock(vue.Fragment, null, vue.renderList(vue.unref(albumlist), (item, index) => {
              return vue.openBlock(), vue.createElementBlock("view", { class: "albums_container_item1" }, [
                vue.createElementVNode("image", {
                  class: "albums_image",
                  src: item.picUrl,
                  mode: ""
                }, null, 8, ["src"]),
                vue.createElementVNode("view", { class: "albums_name" }, vue.toDisplayString(item.name), 1)
              ]);
            }), 256))
          ])
        ], 6);
      };
    }
  };
  var PagesHomeAlbumsAlbums = /* @__PURE__ */ _export_sfc(_sfc_main$d, [["__scopeId", "data-v-80346010"], ["__file", "/Users/fox/project/uniapp/lok\u97F3\u4E50/pages/home/albums/albums.vue"]]);
  const _sfc_main$c = {
    __name: "songs",
    setup(__props) {
      let statusBarHeight = vue.ref();
      vue.getCurrentInstance();
      let loadingStatus = vue.ref(true);
      const gobacks = () => {
        uni.navigateBack(-1);
      };
      vue.nextTick(() => {
      });
      onUnload(() => {
        formatAppLog("log", "at pages/home/songs/songs.vue:96", 123);
      });
      onLoad((option) => {
        uni.getSystemInfo({
          success(res) {
            if (res.statusBarHeight == 0)
              return;
            statusBarHeight.value = res.statusBarHeight;
            store.commit("phoneInfo", {
              statusbarHeight: res.statusBarHeight
            });
          }
        });
        songsheepsInfo2(option.songssheetId);
        getsheetallsongs2(option.songssheetId);
      });
      let songslists = vue.ref({
        creator: {
          nickname: "",
          coverImgUrl: ""
        }
      });
      const songsheepsInfo2 = async (id) => {
        await axios$1.songsheepsInfo({
          id
        }).then((res) => {
          songslists.value = res.data.playlist;
        }).catch((err) => {
          setTimeout(() => {
            songsheepsInfo2(id);
          }, 1e3);
        });
      };
      const songslist = vue.ref([]);
      const getsheetallsongs2 = async (id) => {
        await axios$1.getsheetallsongs({
          id
        }).then((res) => {
          songslist.value = res.data.songs;
          setTimeout(() => {
            loadingStatus.value = false;
          }, 1e3);
        }).catch((err) => {
          setTimeout(() => {
            getsheetallsongs2(id);
          }, 1e3);
        });
      };
      const playAll = () => {
        store.commit("changeMusic", {
          musiclist: songslist.value,
          index: 0
        });
        store.commit("stop", 0);
        store.commit("play");
      };
      let musicIndex = vue.ref(0);
      const changeMusic = (index) => {
        musicIndex.value = index;
        debounces();
      };
      const debounces = debounce(() => {
        store.commit("changeMusic", {
          musiclist: songslist.value,
          index: musicIndex.value
        });
        store.commit("stop", musicIndex.value);
        store.commit("play");
      }, 1e3);
      return (_ctx, _cache) => {
        const _component_uni_icons = resolveEasycom(vue.resolveDynamicComponent("uni-icons"), __easycom_0$3);
        return vue.openBlock(), vue.createElementBlock(vue.Fragment, null, [
          vue.createElementVNode("view", {
            class: vue.normalizeClass([vue.unref(store).state.css_style ? "gray_filter" : "", vue.unref(loadingStatus) ? "" : "songs"]),
            style: vue.normalizeStyle([{ "box-sizing": "border-box" }, { paddingTop: vue.unref(statusBarHeight) + "px" }])
          }, [
            vue.createCommentVNode(' <uni-load-more iconType="circle" /> '),
            vue.createElementVNode("view", { class: "goback" }, [
              vue.createVNode(_component_uni_icons, {
                onClick: gobacks,
                type: "back",
                size: "20"
              })
            ]),
            vue.unref(loadingStatus) ? (vue.openBlock(), vue.createElementBlock("view", {
              key: 0,
              class: "loader",
              style: { "margin-top": "30vh" }
            })) : vue.createCommentVNode("v-if", true),
            vue.withDirectives(vue.createElementVNode("view", null, [
              vue.createElementVNode("view", { class: "songs_title" }, " \u6B4C\u5355 "),
              vue.createElementVNode("view", { class: "songs_act" }, [
                vue.createElementVNode("image", {
                  class: "songs_act_image",
                  src: vue.unref(songslists).coverImgUrl,
                  mode: ""
                }, null, 8, ["src"]),
                vue.createElementVNode("view", { class: "songs_act_right" }, [
                  vue.createElementVNode("view", null, [
                    vue.createElementVNode("view", { class: "songs_act_right_title" }, vue.toDisplayString(vue.unref(songslists).name), 1),
                    vue.createElementVNode("view", { class: "songs_act_right_content" }, [
                      vue.createElementVNode("image", {
                        class: "songs_act_right_content_image",
                        src: vue.unref(songslists).creator.avatarUrl,
                        mode: ""
                      }, null, 8, ["src"]),
                      vue.createTextVNode(" " + vue.toDisplayString(vue.unref(songslists).creator.nickname), 1)
                    ]),
                    vue.createElementVNode("view", { class: "Comment" }, vue.toDisplayString(vue.unref(songslists).playCount > 1e4 ? Math.round(vue.unref(songslists).playCount / 1e4) + "\u4E07" : vue.unref(songslists).playCount) + "\u6B21\u64AD\u653E ", 1)
                  ])
                ])
              ]),
              vue.createElementVNode("view", { class: "songsPlayList" }, [
                vue.createElementVNode("view", {
                  class: "playall",
                  onClick: playAll
                }, [
                  vue.createTextVNode(" \u64AD\u653E\u5168\u90E8 "),
                  vue.createElementVNode("view", { class: "playall_image_border" }, [
                    vue.createElementVNode("image", {
                      class: "playall_image",
                      src: "/static/image/play.png",
                      mode: ""
                    })
                  ])
                ]),
                songslist.value.length ? (vue.openBlock(true), vue.createElementBlock(vue.Fragment, { key: 0 }, vue.renderList(songslist.value, (item, index) => {
                  return vue.openBlock(), vue.createElementBlock("view", {
                    class: "songList",
                    onClick: ($event) => changeMusic(index)
                  }, [
                    vue.createElementVNode("view", { class: "songIndex" }, vue.toDisplayString(index + 1), 1),
                    vue.createElementVNode("view", { class: "songs_info" }, [
                      vue.createElementVNode("view", { class: "songs_info_title" }, vue.toDisplayString(item.name), 1),
                      vue.createElementVNode("view", { class: "songs_info_author" }, [
                        (vue.openBlock(true), vue.createElementBlock(vue.Fragment, null, vue.renderList(item.ar, (i2, index2) => {
                          return vue.openBlock(), vue.createElementBlock("text", null, [
                            vue.createTextVNode(vue.toDisplayString(i2.name) + " ", 1),
                            index2 != item.ar.length - 1 ? (vue.openBlock(), vue.createElementBlock("text", { key: 0 }, ", ")) : vue.createCommentVNode("v-if", true)
                          ]);
                        }), 256))
                      ])
                    ])
                  ], 8, ["onClick"]);
                }), 256)) : (vue.openBlock(), vue.createElementBlock("view", {
                  key: 1,
                  class: "nomusic"
                }, [
                  vue.createTextVNode(" \u6682\u65E0\u97F3\u4E50,\u8BF7\u5148\u6DFB\u52A0"),
                  vue.createElementVNode("text", { style: { "color": "blue" } }, "\u97F3\u4E50")
                ]))
              ])
            ], 512), [
              [vue.vShow, !vue.unref(loadingStatus)]
            ])
          ], 6),
          vue.createVNode(playtabbar, { meauStatus: true })
        ], 64);
      };
    }
  };
  var PagesHomeSongsSongs = /* @__PURE__ */ _export_sfc(_sfc_main$c, [["__scopeId", "data-v-279f1b76"], ["__file", "/Users/fox/project/uniapp/lok\u97F3\u4E50/pages/home/songs/songs.vue"]]);
  const _sfc_main$b = {
    __name: "artists",
    setup(__props) {
      let statusBarHeight = vue.ref(0);
      let indexList = vue.ref([
        "A",
        "B",
        "C",
        "D",
        "E",
        "F",
        "G",
        "H",
        "I",
        "J",
        "K",
        "L",
        "M",
        "N",
        "O",
        "P",
        "Q",
        "R",
        "S",
        "T",
        "U",
        "V",
        "W",
        "X",
        "Y",
        "Z"
      ]);
      let toview = vue.ref();
      let data = vue.ref([
        {
          id: "A",
          data: []
        },
        {
          id: "B",
          data: []
        },
        {
          id: "C",
          data: []
        },
        {
          id: "D",
          data: []
        },
        {
          id: "E",
          data: []
        },
        {
          id: "F",
          data: []
        },
        {
          id: "G",
          data: []
        },
        {
          id: "Z",
          data: []
        }
      ]);
      const select_id = (id) => {
        toview.value = id;
      };
      vue.onMounted(() => {
        uni.getSystemInfo({
          success(res) {
            if (res.statusBarHeight == 0)
              return;
            statusBarHeight.value = res.statusBarHeight;
            store.commit("phoneInfo", {
              statusbarHeight: res.statusBarHeight
            });
          }
        });
      });
      return (_ctx, _cache) => {
        return vue.openBlock(), vue.createElementBlock(vue.Fragment, null, [
          vue.createElementVNode("view", {
            class: vue.normalizeClass(["songs", vue.unref(store).state.css_style ? "gray_filter" : ""]),
            style: { "box-sizing": "border-box" }
          }, [
            vue.createCommentVNode(` <view class="title" :style="{paddingTop:statusBarHeight+'px'}">\r
			<uni-icons @click="goback" style="vertical-align: middle;" type="back" size="30"></uni-icons>\r
			<view class="title_left">\r
				\u97F3\u4E50\r
			</view>\r
		</view> `),
            vue.createElementVNode("view", { class: "songs_container" }, [
              vue.createElementVNode("scroll-view", {
                "scroll-y": "true",
                class: "scroll-container",
                "scroll-with-animation": "true",
                "scroll-into-view": vue.unref(toview)
              }, [
                (vue.openBlock(true), vue.createElementBlock(vue.Fragment, null, vue.renderList(vue.unref(data), (item, index) => {
                  return vue.openBlock(), vue.createElementBlock("view", {
                    id: item.id,
                    key: index
                  }, [
                    vue.createElementVNode("view", { class: "scroll_id-style" }, [
                      vue.createCommentVNode(" ABCDEFG\u6807\u9898 "),
                      vue.createTextVNode(vue.toDisplayString(item.id), 1)
                    ]),
                    vue.createCommentVNode(" \u5143\u7D20\u904D\u5386 "),
                    (vue.openBlock(), vue.createElementBlock(vue.Fragment, null, vue.renderList(20, (item2, index2) => {
                      return vue.createElementVNode("view", { class: "scrolly_item" }, [
                        vue.createElementVNode("image", {
                          class: "scrolly_image",
                          src: "/static/image/demo.jpeg",
                          mode: ""
                        }),
                        vue.createElementVNode("view", { class: "scrolly_item-info" }, [
                          vue.createElementVNode("view", { class: "scrolly-title" }, " \u6807\u9898 "),
                          vue.createElementVNode("view", { class: "scrolly-name" }, " \u4F5C\u8005 ")
                        ])
                      ]);
                    }), 64))
                  ], 8, ["id"]);
                }), 128))
              ], 8, ["scroll-into-view"])
            ])
          ], 2),
          vue.createElementVNode("view", { class: "letter-nav" }, [
            (vue.openBlock(true), vue.createElementBlock(vue.Fragment, null, vue.renderList(vue.unref(indexList), (item, index) => {
              return vue.openBlock(), vue.createElementBlock("view", {
                class: "item",
                onClick: ($event) => select_id(item)
              }, vue.toDisplayString(item), 9, ["onClick"]);
            }), 256))
          ])
        ], 64);
      };
    }
  };
  var PagesHomeArtistsArtists = /* @__PURE__ */ _export_sfc(_sfc_main$b, [["__scopeId", "data-v-0b792752"], ["__file", "/Users/fox/project/uniapp/lok\u97F3\u4E50/pages/home/artists/artists.vue"]]);
  const _sfc_main$a = {
    __name: "dailyrecommendations",
    setup(__props) {
      let statusBarHeight = vue.ref();
      const gobacks = () => {
        uni.navigateBack(-1);
      };
      vue.onMounted(() => {
        uni.getSystemInfo({
          success(res) {
            if (res.statusBarHeight == 0)
              return;
            statusBarHeight.value = res.statusBarHeight;
            store.commit("phoneInfo", {
              statusbarHeight: res.statusBarHeight
            });
          }
        });
        getDailyrecommend();
        getdailyrecommendsongs();
      });
      let dailyrecommendreslist = vue.ref([]);
      const getDailyrecommend = async () => {
        await axios$1.dailyrecommend({}).then((res) => {
          dailyrecommendreslist.value = res.data.recommend;
        }).catch((err) => {
          setTimeout(() => {
            getDailyrecommend();
          }, 1e3);
        });
      };
      let dailyrecommendsongslist = vue.ref([]);
      const getdailyrecommendsongs = async () => {
        await axios$1.dailyrecommendsongs({}).then((res) => {
          dailyrecommendsongslist.value = res.data.data.dailySongs;
          dailyrecommendsongslist.value.length = 20;
        }).catch((err) => {
          setTimeout(() => {
            getdailyrecommendsongs();
          }, 1e3);
        });
      };
      return (_ctx, _cache) => {
        const _component_uni_icons = resolveEasycom(vue.resolveDynamicComponent("uni-icons"), __easycom_0$3);
        return vue.openBlock(), vue.createElementBlock("view", {
          class: vue.normalizeClass(["dailyrecommendations", vue.unref(store).state.css_style ? "gray_filter" : ""]),
          style: vue.normalizeStyle({ paddingTop: vue.unref(statusBarHeight) + "px" })
        }, [
          vue.createElementVNode("view", { class: "goback" }, [
            vue.createVNode(_component_uni_icons, {
              onClick: gobacks,
              type: "back",
              size: "20"
            }),
            vue.createTextVNode(" \u6BCF\u65E5\u63A8\u8350 ")
          ]),
          vue.createElementVNode("view", { class: "uni-margin-wrap swiper_recommend" }, [
            vue.createElementVNode("swiper", {
              class: "swiper",
              circular: "",
              duration: 500,
              "next-margin": "100px"
            }, [
              (vue.openBlock(true), vue.createElementBlock(vue.Fragment, null, vue.renderList(vue.unref(dailyrecommendreslist), (item, index) => {
                return vue.openBlock(), vue.createElementBlock("swiper-item", null, [
                  vue.createElementVNode("view", { class: "swiper-item" }, [
                    vue.createElementVNode("image", {
                      mode: "aspectFill",
                      class: "swiper-item_image",
                      src: item.picUrl
                    }, null, 8, ["src"]),
                    vue.createCommentVNode(' <view class="seeweek">\r\n							<uni-icons color="white" type="eye-filled" size="20"></uni-icons>\r\n							{{Math.round(item.playcount/10000)}}\u4E07\u6B21\u70B9\u51FB\r\n						</view> '),
                    vue.createCommentVNode(' <view class="swiper_title">\n							{{item.name}}\n						</view> ')
                  ])
                ]);
              }), 256))
            ])
          ]),
          vue.createElementVNode("view", { class: "moreRecommend_title" }, " \u66F4\u591A\u63A8\u8350 "),
          vue.createElementVNode("view", { class: "moreRecommend_list" }, [
            (vue.openBlock(true), vue.createElementBlock(vue.Fragment, null, vue.renderList(vue.unref(dailyrecommendsongslist), (item, index) => {
              return vue.openBlock(), vue.createElementBlock("view", { class: "list_recommends" }, [
                vue.createElementVNode("image", {
                  class: "list_recommends_image",
                  src: item.al.picUrl,
                  mode: ""
                }, null, 8, ["src"]),
                vue.createElementVNode("view", { class: "list_recommends_info" }, [
                  vue.createElementVNode("view", { class: "list_recommends_info_title" }, vue.toDisplayString(item.name), 1),
                  vue.createElementVNode("view", { class: "list_recommends_info_synopsis" }, vue.toDisplayString(item.ar[0].name), 1)
                ]),
                vue.createElementVNode("view", { class: "list_recommends_info_timer" }, vue.toDisplayString("\u64AD\u653E"))
              ]);
            }), 256))
          ])
        ], 6);
      };
    }
  };
  var PagesHomeDailyrecommendationsDailyrecommendations = /* @__PURE__ */ _export_sfc(_sfc_main$a, [["__scopeId", "data-v-47143558"], ["__file", "/Users/fox/project/uniapp/lok\u97F3\u4E50/pages/home/dailyrecommendations/dailyrecommendations.vue"]]);
  function obj2strClass(obj) {
    let classess = "";
    for (let key in obj) {
      const val = obj[key];
      if (val) {
        classess += `${key} `;
      }
    }
    return classess;
  }
  function obj2strStyle(obj) {
    let style = "";
    for (let key in obj) {
      const val = obj[key];
      style += `${key}:${val};`;
    }
    return style;
  }
  const _sfc_main$9 = {
    name: "uni-easyinput",
    emits: ["click", "iconClick", "update:modelValue", "input", "focus", "blur", "confirm", "clear", "eyes", "change"],
    model: {
      prop: "modelValue",
      event: "update:modelValue"
    },
    options: {
      virtualHost: true
    },
    inject: {
      form: {
        from: "uniForm",
        default: null
      },
      formItem: {
        from: "uniFormItem",
        default: null
      }
    },
    props: {
      name: String,
      value: [Number, String],
      modelValue: [Number, String],
      type: {
        type: String,
        default: "text"
      },
      clearable: {
        type: Boolean,
        default: true
      },
      autoHeight: {
        type: Boolean,
        default: false
      },
      placeholder: {
        type: String,
        default: " "
      },
      placeholderStyle: String,
      focus: {
        type: Boolean,
        default: false
      },
      disabled: {
        type: Boolean,
        default: false
      },
      maxlength: {
        type: [Number, String],
        default: 140
      },
      confirmType: {
        type: String,
        default: "done"
      },
      clearSize: {
        type: [Number, String],
        default: 24
      },
      inputBorder: {
        type: Boolean,
        default: true
      },
      prefixIcon: {
        type: String,
        default: ""
      },
      suffixIcon: {
        type: String,
        default: ""
      },
      trim: {
        type: [Boolean, String],
        default: true
      },
      passwordIcon: {
        type: Boolean,
        default: true
      },
      primaryColor: {
        type: String,
        default: "#2979ff"
      },
      styles: {
        type: Object,
        default() {
          return {
            color: "#333",
            backgroundColor: "#fff",
            disableColor: "#F7F6F6",
            borderColor: "#e5e5e5"
          };
        }
      },
      errorMessage: {
        type: [String, Boolean],
        default: ""
      }
    },
    data() {
      return {
        focused: false,
        val: "",
        showMsg: "",
        border: false,
        isFirstBorder: false,
        showClearIcon: false,
        showPassword: false,
        focusShow: false,
        localMsg: "",
        isEnter: false
      };
    },
    computed: {
      isVal() {
        const val = this.val;
        if (val || val === 0) {
          return true;
        }
        return false;
      },
      msg() {
        return this.localMsg || this.errorMessage;
      },
      inputMaxlength() {
        return Number(this.maxlength);
      },
      boxStyle() {
        return `color:${this.inputBorder && this.msg ? "#e43d33" : this.styles.color};`;
      },
      inputContentClass() {
        return obj2strClass({
          "is-input-border": this.inputBorder,
          "is-input-error-border": this.inputBorder && this.msg,
          "is-textarea": this.type === "textarea",
          "is-disabled": this.disabled
        });
      },
      inputContentStyle() {
        const focusColor = this.focusShow ? this.primaryColor : this.styles.borderColor;
        const borderColor = this.inputBorder && this.msg ? "#dd524d" : focusColor;
        return obj2strStyle({
          "border-color": borderColor || "#e5e5e5",
          "background-color": this.disabled ? this.styles.disableColor : this.styles.backgroundColor
        });
      },
      inputStyle() {
        const paddingRight = this.type === "password" || this.clearable || this.prefixIcon ? "" : "10px";
        return obj2strStyle({
          "padding-right": paddingRight,
          "padding-left": this.prefixIcon ? "" : "10px"
        });
      }
    },
    watch: {
      value(newVal) {
        this.val = newVal;
      },
      modelValue(newVal) {
        this.val = newVal;
      },
      focus(newVal) {
        this.$nextTick(() => {
          this.focused = this.focus;
          this.focusShow = this.focus;
        });
      }
    },
    created() {
      this.init();
      if (this.form && this.formItem) {
        this.$watch("formItem.errMsg", (newVal) => {
          this.localMsg = newVal;
        });
      }
    },
    mounted() {
      this.$nextTick(() => {
        this.focused = this.focus;
        this.focusShow = this.focus;
      });
    },
    methods: {
      init() {
        if (this.value || this.value === 0) {
          this.val = this.value;
        } else if (this.modelValue || this.modelValue === 0) {
          this.val = this.modelValue;
        } else {
          this.val = null;
        }
      },
      onClickIcon(type) {
        this.$emit("iconClick", type);
      },
      onEyes() {
        this.showPassword = !this.showPassword;
        this.$emit("eyes", this.showPassword);
      },
      onInput(event) {
        let value = event.detail.value;
        if (this.trim) {
          if (typeof this.trim === "boolean" && this.trim) {
            value = this.trimStr(value);
          }
          if (typeof this.trim === "string") {
            value = this.trimStr(value, this.trim);
          }
        }
        if (this.errMsg)
          this.errMsg = "";
        this.val = value;
        this.$emit("input", value);
        this.$emit("update:modelValue", value);
      },
      onFocus() {
        this.$nextTick(() => {
          this.focused = true;
        });
        this.$emit("focus", null);
      },
      _Focus(event) {
        this.focusShow = true;
        this.$emit("focus", event);
      },
      onBlur() {
        this.focused = false;
        this.$emit("focus", null);
      },
      _Blur(event) {
        event.detail.value;
        this.focusShow = false;
        this.$emit("blur", event);
        if (this.isEnter === false) {
          this.$emit("change", this.val);
        }
        if (this.form && this.formItem) {
          const { validateTrigger } = this.form;
          if (validateTrigger === "blur") {
            this.formItem.onFieldChange();
          }
        }
      },
      onConfirm(e) {
        this.$emit("confirm", this.val);
        this.isEnter = true;
        this.$emit("change", this.val);
        this.$nextTick(() => {
          this.isEnter = false;
        });
      },
      onClear(event) {
        this.val = "";
        this.$emit("input", "");
        this.$emit("update:modelValue", "");
        this.$emit("clear");
      },
      trimStr(str, pos = "both") {
        if (pos === "both") {
          return str.trim();
        } else if (pos === "left") {
          return str.trimLeft();
        } else if (pos === "right") {
          return str.trimRight();
        } else if (pos === "start") {
          return str.trimStart();
        } else if (pos === "end") {
          return str.trimEnd();
        } else if (pos === "all") {
          return str.replace(/\s+/g, "");
        } else if (pos === "none") {
          return str;
        }
        return str;
      }
    }
  };
  function _sfc_render$3(_ctx, _cache, $props, $setup, $data, $options) {
    const _component_uni_icons = resolveEasycom(vue.resolveDynamicComponent("uni-icons"), __easycom_0$3);
    return vue.openBlock(), vue.createElementBlock("view", {
      class: vue.normalizeClass(["uni-easyinput", { "uni-easyinput-error": $options.msg }]),
      style: vue.normalizeStyle($options.boxStyle)
    }, [
      vue.createElementVNode("view", {
        class: vue.normalizeClass(["uni-easyinput__content", $options.inputContentClass]),
        style: vue.normalizeStyle($options.inputContentStyle)
      }, [
        $props.prefixIcon ? (vue.openBlock(), vue.createBlock(_component_uni_icons, {
          key: 0,
          class: "content-clear-icon",
          type: $props.prefixIcon,
          color: "#c0c4cc",
          onClick: _cache[0] || (_cache[0] = ($event) => $options.onClickIcon("prefix")),
          size: "22"
        }, null, 8, ["type"])) : vue.createCommentVNode("v-if", true),
        $props.type === "textarea" ? (vue.openBlock(), vue.createElementBlock("textarea", {
          key: 1,
          class: vue.normalizeClass(["uni-easyinput__content-textarea", { "input-padding": $props.inputBorder }]),
          name: $props.name,
          value: $data.val,
          placeholder: $props.placeholder,
          placeholderStyle: $props.placeholderStyle,
          disabled: $props.disabled,
          "placeholder-class": "uni-easyinput__placeholder-class",
          maxlength: $options.inputMaxlength,
          focus: $data.focused,
          autoHeight: $props.autoHeight,
          onInput: _cache[1] || (_cache[1] = (...args) => $options.onInput && $options.onInput(...args)),
          onBlur: _cache[2] || (_cache[2] = (...args) => $options._Blur && $options._Blur(...args)),
          onFocus: _cache[3] || (_cache[3] = (...args) => $options._Focus && $options._Focus(...args)),
          onConfirm: _cache[4] || (_cache[4] = (...args) => $options.onConfirm && $options.onConfirm(...args))
        }, null, 42, ["name", "value", "placeholder", "placeholderStyle", "disabled", "maxlength", "focus", "autoHeight"])) : (vue.openBlock(), vue.createElementBlock("input", {
          key: 2,
          type: $props.type === "password" ? "text" : $props.type,
          class: "uni-easyinput__content-input",
          style: vue.normalizeStyle($options.inputStyle),
          name: $props.name,
          value: $data.val,
          password: !$data.showPassword && $props.type === "password",
          placeholder: $props.placeholder,
          placeholderStyle: $props.placeholderStyle,
          "placeholder-class": "uni-easyinput__placeholder-class",
          disabled: $props.disabled,
          maxlength: $options.inputMaxlength,
          focus: $data.focused,
          confirmType: $props.confirmType,
          onFocus: _cache[5] || (_cache[5] = (...args) => $options._Focus && $options._Focus(...args)),
          onBlur: _cache[6] || (_cache[6] = (...args) => $options._Blur && $options._Blur(...args)),
          onInput: _cache[7] || (_cache[7] = (...args) => $options.onInput && $options.onInput(...args)),
          onConfirm: _cache[8] || (_cache[8] = (...args) => $options.onConfirm && $options.onConfirm(...args))
        }, null, 44, ["type", "name", "value", "password", "placeholder", "placeholderStyle", "disabled", "maxlength", "focus", "confirmType"])),
        $props.type === "password" && $props.passwordIcon ? (vue.openBlock(), vue.createElementBlock(vue.Fragment, { key: 3 }, [
          vue.createCommentVNode(" \u5F00\u542F\u5BC6\u7801\u65F6\u663E\u793A\u5C0F\u773C\u775B "),
          $options.isVal ? (vue.openBlock(), vue.createBlock(_component_uni_icons, {
            key: 0,
            class: vue.normalizeClass(["content-clear-icon", { "is-textarea-icon": $props.type === "textarea" }]),
            type: $data.showPassword ? "eye-slash-filled" : "eye-filled",
            size: 22,
            color: $data.focusShow ? $props.primaryColor : "#c0c4cc",
            onClick: $options.onEyes
          }, null, 8, ["class", "type", "color", "onClick"])) : vue.createCommentVNode("v-if", true)
        ], 64)) : $props.suffixIcon ? (vue.openBlock(), vue.createElementBlock(vue.Fragment, { key: 4 }, [
          $props.suffixIcon ? (vue.openBlock(), vue.createBlock(_component_uni_icons, {
            key: 0,
            class: "content-clear-icon",
            type: $props.suffixIcon,
            color: "#c0c4cc",
            onClick: _cache[9] || (_cache[9] = ($event) => $options.onClickIcon("suffix")),
            size: "22"
          }, null, 8, ["type"])) : vue.createCommentVNode("v-if", true)
        ], 64)) : (vue.openBlock(), vue.createElementBlock(vue.Fragment, { key: 5 }, [
          $props.clearable && $options.isVal && !$props.disabled && $props.type !== "textarea" ? (vue.openBlock(), vue.createBlock(_component_uni_icons, {
            key: 0,
            class: vue.normalizeClass(["content-clear-icon", { "is-textarea-icon": $props.type === "textarea" }]),
            type: "clear",
            size: $props.clearSize,
            color: $options.msg ? "#dd524d" : $data.focusShow ? $props.primaryColor : "#c0c4cc",
            onClick: $options.onClear
          }, null, 8, ["class", "size", "color", "onClick"])) : vue.createCommentVNode("v-if", true)
        ], 64)),
        vue.renderSlot(_ctx.$slots, "right", {}, void 0, true)
      ], 6)
    ], 6);
  }
  var __easycom_1 = /* @__PURE__ */ _export_sfc(_sfc_main$9, [["render", _sfc_render$3], ["__scopeId", "data-v-abe12412"], ["__file", "/Users/fox/project/uniapp/lok\u97F3\u4E50/uni_modules/uni-easyinput/components/uni-easyinput/uni-easyinput.vue"]]);
  const pages = [
    {
      path: "pages/mainEntrance/mainEntrance",
      style: {
        navigationBarTitleText: "mainEntrance",
        enablePullDownRefresh: false,
        navigationStyle: "custom"
      }
    },
    {
      path: "pages/trending/charts/charts",
      style: {
        navigationBarTitleText: "",
        enablePullDownRefresh: false,
        backgroundColor: "#ffffff",
        navigationBarBackgroundColor: "#ffffff",
        navigationStyle: "custom"
      }
    },
    {
      path: "pages/login/login/login",
      style: {
        navigationBarTitleText: "login",
        enablePullDownRefresh: false,
        navigationStyle: "custom"
      }
    },
    {
      path: "pages/login/register/register",
      style: {
        navigationBarTitleText: "register",
        enablePullDownRefresh: false,
        navigationStyle: "custom"
      }
    },
    {
      path: "pages/home/playlists/playlists",
      style: {
        navigationBarTitleText: "",
        enablePullDownRefresh: false,
        navigationBarTextStyle: "black",
        backgroundColor: "#ffffff",
        navigationBarBackgroundColor: "#ffffff",
        navigationStyle: "custom"
      }
    },
    {
      path: "pages/home/albums/albums",
      style: {
        navigationBarTitleText: "",
        enablePullDownRefresh: false,
        navigationBarTextStyle: "black",
        backgroundColor: "#ffffff",
        navigationBarBackgroundColor: "#ffffff",
        navigationStyle: "custom"
      }
    },
    {
      path: "pages/home/songs/songs",
      style: {
        navigationBarTitleText: "\u97F3\u4E50",
        enablePullDownRefresh: false,
        navigationBarTextStyle: "black",
        backgroundColor: "#ffffff",
        navigationBarBackgroundColor: "#ffffff",
        navigationStyle: "custom",
        "app-plus": {
          scrollIndicator: "none",
          titleNView: {
            type: "float",
            backgroundColor: "#ffffff",
            bounce: "none",
            background: "#ffffff"
          }
        }
      }
    },
    {
      path: "pages/home/artists/artists",
      style: {
        navigationBarTitleText: "\u6B4C\u624B",
        enablePullDownRefresh: false,
        navigationBarTextStyle: "black",
        backgroundColor: "#ffffff",
        navigationBarBackgroundColor: "#ffffff",
        "app-plus": {
          scrollIndicator: "none"
        }
      }
    },
    {
      path: "pages/home/dailyrecommendations/dailyrecommendations",
      style: {
        navigationBarTitleText: "dailyrecommendations",
        enablePullDownRefresh: false,
        navigationStyle: "custom"
      }
    },
    {
      path: "pages/home/issuanceTrends/issuanceTrends",
      style: {
        navigationBarTitleText: "issuanceTrends",
        enablePullDownRefresh: false,
        navigationStyle: "custom"
      }
    },
    {
      path: "pages/home/event/event",
      style: {
        navigationBarTitleText: "event",
        enablePullDownRefresh: false,
        navigationStyle: "custom"
      }
    },
    {
      path: "pages/login/scan/scan",
      style: {
        navigationBarTitleText: "\u626B\u7801\u767B\u5F55",
        enablePullDownRefresh: false
      }
    },
    {
      path: "pages/detailedInformation/detailedInformation",
      style: {
        navigationBarTitleText: "detailedInformation",
        enablePullDownRefresh: false,
        navigationStyle: "custom"
      }
    },
    {
      path: "pages/setting/userInfo/userInfo",
      style: {
        navigationBarTitleText: "\u4E2A\u4EBA\u8D44\u6599",
        enablePullDownRefresh: false,
        backgroundColor: "#FFFFFF",
        navigationBarBackgroundColor: "#FFFFFF"
      }
    }
  ];
  const globalStyle = {
    navigationBarTextStyle: "black",
    navigationBarTitleText: "uni-app",
    navigationBarBackgroundColor: "#ffffff",
    backgroundColor: "#ffffff",
    "app-plus": {
      bounce: "none"
    }
  };
  const uniIdRouter = {};
  var t = {
    pages,
    globalStyle,
    uniIdRouter
  };
  function n(e) {
    return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
  }
  function s(e, t2, n2) {
    return e(n2 = { path: t2, exports: {}, require: function(e2, t3) {
      return function() {
        throw new Error("Dynamic requires are not currently supported by @rollup/plugin-commonjs");
      }(t3 == null && n2.path);
    } }, n2.exports), n2.exports;
  }
  var o = s(function(e, t2) {
    var n2;
    e.exports = (n2 = n2 || function(e2, t3) {
      var n3 = Object.create || function() {
        function e3() {
        }
        return function(t4) {
          var n4;
          return e3.prototype = t4, n4 = new e3(), e3.prototype = null, n4;
        };
      }(), s2 = {}, o2 = s2.lib = {}, r2 = o2.Base = { extend: function(e3) {
        var t4 = n3(this);
        return e3 && t4.mixIn(e3), t4.hasOwnProperty("init") && this.init !== t4.init || (t4.init = function() {
          t4.$super.init.apply(this, arguments);
        }), t4.init.prototype = t4, t4.$super = this, t4;
      }, create: function() {
        var e3 = this.extend();
        return e3.init.apply(e3, arguments), e3;
      }, init: function() {
      }, mixIn: function(e3) {
        for (var t4 in e3)
          e3.hasOwnProperty(t4) && (this[t4] = e3[t4]);
        e3.hasOwnProperty("toString") && (this.toString = e3.toString);
      }, clone: function() {
        return this.init.prototype.extend(this);
      } }, i2 = o2.WordArray = r2.extend({ init: function(e3, n4) {
        e3 = this.words = e3 || [], this.sigBytes = n4 != t3 ? n4 : 4 * e3.length;
      }, toString: function(e3) {
        return (e3 || c2).stringify(this);
      }, concat: function(e3) {
        var t4 = this.words, n4 = e3.words, s3 = this.sigBytes, o3 = e3.sigBytes;
        if (this.clamp(), s3 % 4)
          for (var r3 = 0; r3 < o3; r3++) {
            var i3 = n4[r3 >>> 2] >>> 24 - r3 % 4 * 8 & 255;
            t4[s3 + r3 >>> 2] |= i3 << 24 - (s3 + r3) % 4 * 8;
          }
        else
          for (r3 = 0; r3 < o3; r3 += 4)
            t4[s3 + r3 >>> 2] = n4[r3 >>> 2];
        return this.sigBytes += o3, this;
      }, clamp: function() {
        var t4 = this.words, n4 = this.sigBytes;
        t4[n4 >>> 2] &= 4294967295 << 32 - n4 % 4 * 8, t4.length = e2.ceil(n4 / 4);
      }, clone: function() {
        var e3 = r2.clone.call(this);
        return e3.words = this.words.slice(0), e3;
      }, random: function(t4) {
        for (var n4, s3 = [], o3 = function(t5) {
          t5 = t5;
          var n5 = 987654321, s4 = 4294967295;
          return function() {
            var o4 = ((n5 = 36969 * (65535 & n5) + (n5 >> 16) & s4) << 16) + (t5 = 18e3 * (65535 & t5) + (t5 >> 16) & s4) & s4;
            return o4 /= 4294967296, (o4 += 0.5) * (e2.random() > 0.5 ? 1 : -1);
          };
        }, r3 = 0; r3 < t4; r3 += 4) {
          var a3 = o3(4294967296 * (n4 || e2.random()));
          n4 = 987654071 * a3(), s3.push(4294967296 * a3() | 0);
        }
        return new i2.init(s3, t4);
      } }), a2 = s2.enc = {}, c2 = a2.Hex = { stringify: function(e3) {
        for (var t4 = e3.words, n4 = e3.sigBytes, s3 = [], o3 = 0; o3 < n4; o3++) {
          var r3 = t4[o3 >>> 2] >>> 24 - o3 % 4 * 8 & 255;
          s3.push((r3 >>> 4).toString(16)), s3.push((15 & r3).toString(16));
        }
        return s3.join("");
      }, parse: function(e3) {
        for (var t4 = e3.length, n4 = [], s3 = 0; s3 < t4; s3 += 2)
          n4[s3 >>> 3] |= parseInt(e3.substr(s3, 2), 16) << 24 - s3 % 8 * 4;
        return new i2.init(n4, t4 / 2);
      } }, u2 = a2.Latin1 = { stringify: function(e3) {
        for (var t4 = e3.words, n4 = e3.sigBytes, s3 = [], o3 = 0; o3 < n4; o3++) {
          var r3 = t4[o3 >>> 2] >>> 24 - o3 % 4 * 8 & 255;
          s3.push(String.fromCharCode(r3));
        }
        return s3.join("");
      }, parse: function(e3) {
        for (var t4 = e3.length, n4 = [], s3 = 0; s3 < t4; s3++)
          n4[s3 >>> 2] |= (255 & e3.charCodeAt(s3)) << 24 - s3 % 4 * 8;
        return new i2.init(n4, t4);
      } }, l2 = a2.Utf8 = { stringify: function(e3) {
        try {
          return decodeURIComponent(escape(u2.stringify(e3)));
        } catch (e4) {
          throw new Error("Malformed UTF-8 data");
        }
      }, parse: function(e3) {
        return u2.parse(unescape(encodeURIComponent(e3)));
      } }, h2 = o2.BufferedBlockAlgorithm = r2.extend({ reset: function() {
        this._data = new i2.init(), this._nDataBytes = 0;
      }, _append: function(e3) {
        typeof e3 == "string" && (e3 = l2.parse(e3)), this._data.concat(e3), this._nDataBytes += e3.sigBytes;
      }, _process: function(t4) {
        var n4 = this._data, s3 = n4.words, o3 = n4.sigBytes, r3 = this.blockSize, a3 = o3 / (4 * r3), c3 = (a3 = t4 ? e2.ceil(a3) : e2.max((0 | a3) - this._minBufferSize, 0)) * r3, u3 = e2.min(4 * c3, o3);
        if (c3) {
          for (var l3 = 0; l3 < c3; l3 += r3)
            this._doProcessBlock(s3, l3);
          var h3 = s3.splice(0, c3);
          n4.sigBytes -= u3;
        }
        return new i2.init(h3, u3);
      }, clone: function() {
        var e3 = r2.clone.call(this);
        return e3._data = this._data.clone(), e3;
      }, _minBufferSize: 0 });
      o2.Hasher = h2.extend({ cfg: r2.extend(), init: function(e3) {
        this.cfg = this.cfg.extend(e3), this.reset();
      }, reset: function() {
        h2.reset.call(this), this._doReset();
      }, update: function(e3) {
        return this._append(e3), this._process(), this;
      }, finalize: function(e3) {
        return e3 && this._append(e3), this._doFinalize();
      }, blockSize: 16, _createHelper: function(e3) {
        return function(t4, n4) {
          return new e3.init(n4).finalize(t4);
        };
      }, _createHmacHelper: function(e3) {
        return function(t4, n4) {
          return new d2.HMAC.init(e3, n4).finalize(t4);
        };
      } });
      var d2 = s2.algo = {};
      return s2;
    }(Math), n2);
  }), r = (s(function(e, t2) {
    var n2;
    e.exports = (n2 = o, function(e2) {
      var t3 = n2, s2 = t3.lib, o2 = s2.WordArray, r2 = s2.Hasher, i2 = t3.algo, a2 = [];
      !function() {
        for (var t4 = 0; t4 < 64; t4++)
          a2[t4] = 4294967296 * e2.abs(e2.sin(t4 + 1)) | 0;
      }();
      var c2 = i2.MD5 = r2.extend({ _doReset: function() {
        this._hash = new o2.init([1732584193, 4023233417, 2562383102, 271733878]);
      }, _doProcessBlock: function(e3, t4) {
        for (var n3 = 0; n3 < 16; n3++) {
          var s3 = t4 + n3, o3 = e3[s3];
          e3[s3] = 16711935 & (o3 << 8 | o3 >>> 24) | 4278255360 & (o3 << 24 | o3 >>> 8);
        }
        var r3 = this._hash.words, i3 = e3[t4 + 0], c3 = e3[t4 + 1], f2 = e3[t4 + 2], g2 = e3[t4 + 3], p2 = e3[t4 + 4], m2 = e3[t4 + 5], y = e3[t4 + 6], _2 = e3[t4 + 7], w2 = e3[t4 + 8], k2 = e3[t4 + 9], v2 = e3[t4 + 10], T2 = e3[t4 + 11], S2 = e3[t4 + 12], P2 = e3[t4 + 13], A2 = e3[t4 + 14], I2 = e3[t4 + 15], b2 = r3[0], O2 = r3[1], C2 = r3[2], E2 = r3[3];
        b2 = u2(b2, O2, C2, E2, i3, 7, a2[0]), E2 = u2(E2, b2, O2, C2, c3, 12, a2[1]), C2 = u2(C2, E2, b2, O2, f2, 17, a2[2]), O2 = u2(O2, C2, E2, b2, g2, 22, a2[3]), b2 = u2(b2, O2, C2, E2, p2, 7, a2[4]), E2 = u2(E2, b2, O2, C2, m2, 12, a2[5]), C2 = u2(C2, E2, b2, O2, y, 17, a2[6]), O2 = u2(O2, C2, E2, b2, _2, 22, a2[7]), b2 = u2(b2, O2, C2, E2, w2, 7, a2[8]), E2 = u2(E2, b2, O2, C2, k2, 12, a2[9]), C2 = u2(C2, E2, b2, O2, v2, 17, a2[10]), O2 = u2(O2, C2, E2, b2, T2, 22, a2[11]), b2 = u2(b2, O2, C2, E2, S2, 7, a2[12]), E2 = u2(E2, b2, O2, C2, P2, 12, a2[13]), C2 = u2(C2, E2, b2, O2, A2, 17, a2[14]), b2 = l2(b2, O2 = u2(O2, C2, E2, b2, I2, 22, a2[15]), C2, E2, c3, 5, a2[16]), E2 = l2(E2, b2, O2, C2, y, 9, a2[17]), C2 = l2(C2, E2, b2, O2, T2, 14, a2[18]), O2 = l2(O2, C2, E2, b2, i3, 20, a2[19]), b2 = l2(b2, O2, C2, E2, m2, 5, a2[20]), E2 = l2(E2, b2, O2, C2, v2, 9, a2[21]), C2 = l2(C2, E2, b2, O2, I2, 14, a2[22]), O2 = l2(O2, C2, E2, b2, p2, 20, a2[23]), b2 = l2(b2, O2, C2, E2, k2, 5, a2[24]), E2 = l2(E2, b2, O2, C2, A2, 9, a2[25]), C2 = l2(C2, E2, b2, O2, g2, 14, a2[26]), O2 = l2(O2, C2, E2, b2, w2, 20, a2[27]), b2 = l2(b2, O2, C2, E2, P2, 5, a2[28]), E2 = l2(E2, b2, O2, C2, f2, 9, a2[29]), C2 = l2(C2, E2, b2, O2, _2, 14, a2[30]), b2 = h2(b2, O2 = l2(O2, C2, E2, b2, S2, 20, a2[31]), C2, E2, m2, 4, a2[32]), E2 = h2(E2, b2, O2, C2, w2, 11, a2[33]), C2 = h2(C2, E2, b2, O2, T2, 16, a2[34]), O2 = h2(O2, C2, E2, b2, A2, 23, a2[35]), b2 = h2(b2, O2, C2, E2, c3, 4, a2[36]), E2 = h2(E2, b2, O2, C2, p2, 11, a2[37]), C2 = h2(C2, E2, b2, O2, _2, 16, a2[38]), O2 = h2(O2, C2, E2, b2, v2, 23, a2[39]), b2 = h2(b2, O2, C2, E2, P2, 4, a2[40]), E2 = h2(E2, b2, O2, C2, i3, 11, a2[41]), C2 = h2(C2, E2, b2, O2, g2, 16, a2[42]), O2 = h2(O2, C2, E2, b2, y, 23, a2[43]), b2 = h2(b2, O2, C2, E2, k2, 4, a2[44]), E2 = h2(E2, b2, O2, C2, S2, 11, a2[45]), C2 = h2(C2, E2, b2, O2, I2, 16, a2[46]), b2 = d2(b2, O2 = h2(O2, C2, E2, b2, f2, 23, a2[47]), C2, E2, i3, 6, a2[48]), E2 = d2(E2, b2, O2, C2, _2, 10, a2[49]), C2 = d2(C2, E2, b2, O2, A2, 15, a2[50]), O2 = d2(O2, C2, E2, b2, m2, 21, a2[51]), b2 = d2(b2, O2, C2, E2, S2, 6, a2[52]), E2 = d2(E2, b2, O2, C2, g2, 10, a2[53]), C2 = d2(C2, E2, b2, O2, v2, 15, a2[54]), O2 = d2(O2, C2, E2, b2, c3, 21, a2[55]), b2 = d2(b2, O2, C2, E2, w2, 6, a2[56]), E2 = d2(E2, b2, O2, C2, I2, 10, a2[57]), C2 = d2(C2, E2, b2, O2, y, 15, a2[58]), O2 = d2(O2, C2, E2, b2, P2, 21, a2[59]), b2 = d2(b2, O2, C2, E2, p2, 6, a2[60]), E2 = d2(E2, b2, O2, C2, T2, 10, a2[61]), C2 = d2(C2, E2, b2, O2, f2, 15, a2[62]), O2 = d2(O2, C2, E2, b2, k2, 21, a2[63]), r3[0] = r3[0] + b2 | 0, r3[1] = r3[1] + O2 | 0, r3[2] = r3[2] + C2 | 0, r3[3] = r3[3] + E2 | 0;
      }, _doFinalize: function() {
        var t4 = this._data, n3 = t4.words, s3 = 8 * this._nDataBytes, o3 = 8 * t4.sigBytes;
        n3[o3 >>> 5] |= 128 << 24 - o3 % 32;
        var r3 = e2.floor(s3 / 4294967296), i3 = s3;
        n3[15 + (o3 + 64 >>> 9 << 4)] = 16711935 & (r3 << 8 | r3 >>> 24) | 4278255360 & (r3 << 24 | r3 >>> 8), n3[14 + (o3 + 64 >>> 9 << 4)] = 16711935 & (i3 << 8 | i3 >>> 24) | 4278255360 & (i3 << 24 | i3 >>> 8), t4.sigBytes = 4 * (n3.length + 1), this._process();
        for (var a3 = this._hash, c3 = a3.words, u3 = 0; u3 < 4; u3++) {
          var l3 = c3[u3];
          c3[u3] = 16711935 & (l3 << 8 | l3 >>> 24) | 4278255360 & (l3 << 24 | l3 >>> 8);
        }
        return a3;
      }, clone: function() {
        var e3 = r2.clone.call(this);
        return e3._hash = this._hash.clone(), e3;
      } });
      function u2(e3, t4, n3, s3, o3, r3, i3) {
        var a3 = e3 + (t4 & n3 | ~t4 & s3) + o3 + i3;
        return (a3 << r3 | a3 >>> 32 - r3) + t4;
      }
      function l2(e3, t4, n3, s3, o3, r3, i3) {
        var a3 = e3 + (t4 & s3 | n3 & ~s3) + o3 + i3;
        return (a3 << r3 | a3 >>> 32 - r3) + t4;
      }
      function h2(e3, t4, n3, s3, o3, r3, i3) {
        var a3 = e3 + (t4 ^ n3 ^ s3) + o3 + i3;
        return (a3 << r3 | a3 >>> 32 - r3) + t4;
      }
      function d2(e3, t4, n3, s3, o3, r3, i3) {
        var a3 = e3 + (n3 ^ (t4 | ~s3)) + o3 + i3;
        return (a3 << r3 | a3 >>> 32 - r3) + t4;
      }
      t3.MD5 = r2._createHelper(c2), t3.HmacMD5 = r2._createHmacHelper(c2);
    }(Math), n2.MD5);
  }), s(function(e, t2) {
    var n2, s2, r2;
    e.exports = (s2 = (n2 = o).lib.Base, r2 = n2.enc.Utf8, void (n2.algo.HMAC = s2.extend({ init: function(e2, t3) {
      e2 = this._hasher = new e2.init(), typeof t3 == "string" && (t3 = r2.parse(t3));
      var n3 = e2.blockSize, s3 = 4 * n3;
      t3.sigBytes > s3 && (t3 = e2.finalize(t3)), t3.clamp();
      for (var o2 = this._oKey = t3.clone(), i2 = this._iKey = t3.clone(), a2 = o2.words, c2 = i2.words, u2 = 0; u2 < n3; u2++)
        a2[u2] ^= 1549556828, c2[u2] ^= 909522486;
      o2.sigBytes = i2.sigBytes = s3, this.reset();
    }, reset: function() {
      var e2 = this._hasher;
      e2.reset(), e2.update(this._iKey);
    }, update: function(e2) {
      return this._hasher.update(e2), this;
    }, finalize: function(e2) {
      var t3 = this._hasher, n3 = t3.finalize(e2);
      return t3.reset(), t3.finalize(this._oKey.clone().concat(n3));
    } })));
  }), s(function(e, t2) {
    e.exports = o.HmacMD5;
  }));
  const i = "FUNCTION", a = "OBJECT", c = "CLIENT_DB";
  function u(e) {
    return Object.prototype.toString.call(e).slice(8, -1).toLowerCase();
  }
  function l(e) {
    return u(e) === "object";
  }
  function h(e) {
    return e && typeof e == "string" ? JSON.parse(e) : e;
  }
  const d = true, f = "app";
  let g;
  switch (f) {
    case "h5":
      g = "web";
      break;
    case "app-plus":
      g = "app";
      break;
    default:
      g = f;
  }
  const p = h({}.UNICLOUD_DEBUG), m = h("[]") || [];
  let _ = "";
  try {
    _ = "__UNI__E2FE6D7";
  } catch (e) {
  }
  let w = {};
  function k(e, t2 = {}) {
    var n2, s2;
    return n2 = w, s2 = e, Object.prototype.hasOwnProperty.call(n2, s2) || (w[e] = t2), w[e];
  }
  g === "app" && (w = uni._globalUniCloudObj ? uni._globalUniCloudObj : uni._globalUniCloudObj = {});
  const v = ["invoke", "success", "fail", "complete"], T = k("_globalUniCloudInterceptor");
  function S(e, t2) {
    T[e] || (T[e] = {}), l(t2) && Object.keys(t2).forEach((n2) => {
      v.indexOf(n2) > -1 && function(e2, t3, n3) {
        let s2 = T[e2][t3];
        s2 || (s2 = T[e2][t3] = []), s2.indexOf(n3) === -1 && typeof n3 == "function" && s2.push(n3);
      }(e, n2, t2[n2]);
    });
  }
  function P(e, t2) {
    T[e] || (T[e] = {}), l(t2) ? Object.keys(t2).forEach((n2) => {
      v.indexOf(n2) > -1 && function(e2, t3, n3) {
        const s2 = T[e2][t3];
        if (!s2)
          return;
        const o2 = s2.indexOf(n3);
        o2 > -1 && s2.splice(o2, 1);
      }(e, n2, t2[n2]);
    }) : delete T[e];
  }
  function A(e, t2) {
    return e && e.length !== 0 ? e.reduce((e2, n2) => e2.then(() => n2(t2)), Promise.resolve()) : Promise.resolve();
  }
  function I(e, t2) {
    return T[e] && T[e][t2] || [];
  }
  function b(e) {
    S("callObject", e);
  }
  const O = k("_globalUniCloudListener"), C = "response", E = "needLogin", R = "refreshToken", U = "clientdb", x = "cloudfunction", L = "cloudobject";
  function D(e) {
    return O[e] || (O[e] = []), O[e];
  }
  function N(e, t2) {
    const n2 = D(e);
    n2.includes(t2) || n2.push(t2);
  }
  function q(e, t2) {
    const n2 = D(e), s2 = n2.indexOf(t2);
    s2 !== -1 && n2.splice(s2, 1);
  }
  function F(e, t2) {
    const n2 = D(e);
    for (let e2 = 0; e2 < n2.length; e2++) {
      (0, n2[e2])(t2);
    }
  }
  let M = false;
  const j = new Promise((e) => {
    M && e(), function t2() {
      if (typeof getCurrentPages == "function") {
        const t3 = getCurrentPages();
        t3 && t3[0] && (M = true, e());
      }
      M || setTimeout(() => {
        t2();
      }, 30);
    }();
  });
  function $() {
    return j;
  }
  function K(e, t2) {
    return t2 ? function(n2) {
      let s2 = false;
      if (t2 === "callFunction") {
        const e2 = n2 && n2.type || i;
        s2 = e2 !== i;
      }
      const o2 = t2 === "callFunction" && !s2;
      let r2;
      r2 = this.isReady ? Promise.resolve() : this.initUniCloud, n2 = n2 || {};
      const a2 = r2.then(() => s2 ? Promise.resolve() : A(I(t2, "invoke"), n2)).then(() => e.call(this, n2)).then((e2) => s2 ? Promise.resolve(e2) : A(I(t2, "success"), e2).then(() => A(I(t2, "complete"), e2)).then(() => (o2 && F(C, { type: x, content: e2 }), Promise.resolve(e2))), (e2) => s2 ? Promise.reject(e2) : A(I(t2, "fail"), e2).then(() => A(I(t2, "complete"), e2)).then(() => (F(C, { type: x, content: e2 }), Promise.reject(e2))));
      if (!(n2.success || n2.fail || n2.complete))
        return a2;
      a2.then((e2) => {
        n2.success && n2.success(e2), n2.complete && n2.complete(e2), o2 && F(C, { type: x, content: e2 });
      }, (e2) => {
        n2.fail && n2.fail(e2), n2.complete && n2.complete(e2), o2 && F(C, { type: x, content: e2 });
      });
    } : function(t3) {
      if (!((t3 = t3 || {}).success || t3.fail || t3.complete))
        return e.call(this, t3);
      e.call(this, t3).then((e2) => {
        t3.success && t3.success(e2), t3.complete && t3.complete(e2);
      }, (e2) => {
        t3.fail && t3.fail(e2), t3.complete && t3.complete(e2);
      });
    };
  }
  class B extends Error {
    constructor(e) {
      super(e.message), this.errMsg = e.message || "", this.errCode = this.code = e.code || "SYSTEM_ERROR", this.requestId = e.requestId;
    }
  }
  function H() {
    let e, t2;
    try {
      if (uni.getLaunchOptionsSync) {
        if (uni.getLaunchOptionsSync.toString().indexOf("not yet implemented") > -1)
          return;
        const { scene: n2, channel: s2 } = uni.getLaunchOptionsSync();
        e = s2, t2 = n2;
      }
    } catch (e2) {
    }
    return { channel: e, scene: t2 };
  }
  let W;
  function z() {
    const e = uni.getLocale && uni.getLocale() || "en";
    if (W)
      return __spreadProps(__spreadValues({}, W), { locale: e, LOCALE: e });
    const t2 = uni.getSystemInfoSync(), { deviceId: n2, osName: s2, uniPlatform: o2, appId: r2 } = t2, i2 = ["pixelRatio", "brand", "model", "system", "language", "version", "platform", "host", "SDKVersion", "swanNativeVersion", "app", "AppPlatform", "fontSizeSetting"];
    for (let e2 = 0; e2 < i2.length; e2++) {
      delete t2[i2[e2]];
    }
    return W = __spreadValues(__spreadValues({ PLATFORM: o2, OS: s2, APPID: r2, DEVICEID: n2 }, H()), t2), __spreadProps(__spreadValues({}, W), { locale: e, LOCALE: e });
  }
  var J = { sign: function(e, t2) {
    let n2 = "";
    return Object.keys(e).sort().forEach(function(t3) {
      e[t3] && (n2 = n2 + "&" + t3 + "=" + e[t3]);
    }), n2 = n2.slice(1), r(n2, t2).toString();
  }, wrappedRequest: function(e, t2) {
    return new Promise((n2, s2) => {
      t2(Object.assign(e, { complete(e2) {
        e2 || (e2 = {}), g === "web" && e2.errMsg && e2.errMsg.indexOf("request:fail") === 0 && console.warn("\u53D1\u5E03H5\uFF0C\u9700\u8981\u5728uniCloud\u540E\u53F0\u64CD\u4F5C\uFF0C\u7ED1\u5B9A\u5B89\u5168\u57DF\u540D\uFF0C\u5426\u5219\u4F1A\u56E0\u4E3A\u8DE8\u57DF\u95EE\u9898\u800C\u65E0\u6CD5\u8BBF\u95EE\u3002\u6559\u7A0B\u53C2\u8003\uFF1Ahttps://uniapp.dcloud.io/uniCloud/quickstart?id=useinh5");
        const t3 = e2.data && e2.data.header && e2.data.header["x-serverless-request-id"] || e2.header && e2.header["request-id"];
        if (!e2.statusCode || e2.statusCode >= 400)
          return s2(new B({ code: "SYS_ERR", message: e2.errMsg || "request:fail", requestId: t3 }));
        const o2 = e2.data;
        if (o2.error)
          return s2(new B({ code: o2.error.code, message: o2.error.message, requestId: t3 }));
        o2.result = o2.data, o2.requestId = t3, delete o2.data, n2(o2);
      } }));
    });
  } };
  var V = { request: (e) => uni.request(e), uploadFile: (e) => uni.uploadFile(e), setStorageSync: (e, t2) => uni.setStorageSync(e, t2), getStorageSync: (e) => uni.getStorageSync(e), removeStorageSync: (e) => uni.removeStorageSync(e), clearStorageSync: () => uni.clearStorageSync() }, Y = { "uniCloud.init.paramRequired": "{param} required", "uniCloud.uploadFile.fileError": "filePath should be instance of File" };
  const { t: X } = initVueI18n({ "zh-Hans": { "uniCloud.init.paramRequired": "\u7F3A\u5C11\u53C2\u6570\uFF1A{param}", "uniCloud.uploadFile.fileError": "filePath\u5E94\u4E3AFile\u5BF9\u8C61" }, "zh-Hant": { "uniCloud.init.paramRequired": "\u7F3A\u5C11\u53C2\u6570\uFF1A{param}", "uniCloud.uploadFile.fileError": "filePath\u5E94\u4E3AFile\u5BF9\u8C61" }, en: Y, fr: { "uniCloud.init.paramRequired": "{param} required", "uniCloud.uploadFile.fileError": "filePath should be instance of File" }, es: { "uniCloud.init.paramRequired": "{param} required", "uniCloud.uploadFile.fileError": "filePath should be instance of File" }, ja: Y }, "zh-Hans");
  var G = class {
    constructor(e) {
      ["spaceId", "clientSecret"].forEach((t2) => {
        if (!Object.prototype.hasOwnProperty.call(e, t2))
          throw new Error(X("uniCloud.init.paramRequired", { param: t2 }));
      }), this.config = Object.assign({}, { endpoint: "https://api.bspapp.com" }, e), this.config.provider = "aliyun", this.config.requestUrl = this.config.endpoint + "/client", this.config.envType = this.config.envType || "public", this.config.accessTokenKey = "access_token_" + this.config.spaceId, this.adapter = V, this._getAccessTokenPromise = null, this._getAccessTokenPromiseStatus = null;
    }
    get hasAccessToken() {
      return !!this.accessToken;
    }
    setAccessToken(e) {
      this.accessToken = e;
    }
    requestWrapped(e) {
      return J.wrappedRequest(e, this.adapter.request);
    }
    requestAuth(e) {
      return this.requestWrapped(e);
    }
    request(e, t2) {
      return Promise.resolve().then(() => this.hasAccessToken ? t2 ? this.requestWrapped(e) : this.requestWrapped(e).catch((t3) => new Promise((e2, n2) => {
        !t3 || t3.code !== "GATEWAY_INVALID_TOKEN" && t3.code !== "InvalidParameter.InvalidToken" ? n2(t3) : e2();
      }).then(() => this.getAccessToken()).then(() => {
        const t4 = this.rebuildRequest(e);
        return this.request(t4, true);
      })) : this.getAccessToken().then(() => {
        const t3 = this.rebuildRequest(e);
        return this.request(t3, true);
      }));
    }
    rebuildRequest(e) {
      const t2 = Object.assign({}, e);
      return t2.data.token = this.accessToken, t2.header["x-basement-token"] = this.accessToken, t2.header["x-serverless-sign"] = J.sign(t2.data, this.config.clientSecret), t2;
    }
    setupRequest(e, t2) {
      const n2 = Object.assign({}, e, { spaceId: this.config.spaceId, timestamp: Date.now() }), s2 = { "Content-Type": "application/json" };
      return t2 !== "auth" && (n2.token = this.accessToken, s2["x-basement-token"] = this.accessToken), s2["x-serverless-sign"] = J.sign(n2, this.config.clientSecret), { url: this.config.requestUrl, method: "POST", data: n2, dataType: "json", header: s2 };
    }
    getAccessToken() {
      if (this._getAccessTokenPromiseStatus === "pending")
        return this._getAccessTokenPromise;
      this._getAccessTokenPromiseStatus = "pending";
      return this._getAccessTokenPromise = this.requestAuth(this.setupRequest({ method: "serverless.auth.user.anonymousAuthorize", params: "{}" }, "auth")).then((e) => new Promise((t2, n2) => {
        e.result && e.result.accessToken ? (this.setAccessToken(e.result.accessToken), this._getAccessTokenPromiseStatus = "fulfilled", t2(this.accessToken)) : (this._getAccessTokenPromiseStatus = "rejected", n2(new B({ code: "AUTH_FAILED", message: "\u83B7\u53D6accessToken\u5931\u8D25" })));
      }), (e) => (this._getAccessTokenPromiseStatus = "rejected", Promise.reject(e))), this._getAccessTokenPromise;
    }
    authorize() {
      this.getAccessToken();
    }
    callFunction(e) {
      const t2 = { method: "serverless.function.runtime.invoke", params: JSON.stringify({ functionTarget: e.name, functionArgs: e.data || {} }) };
      return this.request(this.setupRequest(t2));
    }
    getOSSUploadOptionsFromPath(e) {
      const t2 = { method: "serverless.file.resource.generateProximalSign", params: JSON.stringify(e) };
      return this.request(this.setupRequest(t2));
    }
    uploadFileToOSS({ url: e, formData: t2, name: n2, filePath: s2, fileType: o2, onUploadProgress: r2 }) {
      return new Promise((i2, a2) => {
        const c2 = this.adapter.uploadFile({ url: e, formData: t2, name: n2, filePath: s2, fileType: o2, header: { "X-OSS-server-side-encrpytion": "AES256" }, success(e2) {
          e2 && e2.statusCode < 400 ? i2(e2) : a2(new B({ code: "UPLOAD_FAILED", message: "\u6587\u4EF6\u4E0A\u4F20\u5931\u8D25" }));
        }, fail(e2) {
          a2(new B({ code: e2.code || "UPLOAD_FAILED", message: e2.message || e2.errMsg || "\u6587\u4EF6\u4E0A\u4F20\u5931\u8D25" }));
        } });
        typeof r2 == "function" && c2 && typeof c2.onProgressUpdate == "function" && c2.onProgressUpdate((e2) => {
          r2({ loaded: e2.totalBytesSent, total: e2.totalBytesExpectedToSend });
        });
      });
    }
    reportOSSUpload(e) {
      const t2 = { method: "serverless.file.resource.report", params: JSON.stringify(e) };
      return this.request(this.setupRequest(t2));
    }
    uploadFile({ filePath: e, cloudPath: t2, fileType: n2 = "image", onUploadProgress: s2, config: o2 }) {
      if (u(t2) !== "string")
        throw new B({ code: "INVALID_PARAM", message: "cloudPath\u5FC5\u987B\u4E3A\u5B57\u7B26\u4E32\u7C7B\u578B" });
      if (!(t2 = t2.trim()))
        throw new B({ code: "CLOUDPATH_REQUIRED", message: "cloudPath\u4E0D\u53EF\u4E3A\u7A7A" });
      if (/:\/\//.test(t2))
        throw new B({ code: "INVALID_PARAM", message: "cloudPath\u4E0D\u5408\u6CD5" });
      const r2 = o2 && o2.envType || this.config.envType;
      let i2, a2;
      return this.getOSSUploadOptionsFromPath({ env: r2, filename: t2 }).then((t3) => {
        const o3 = t3.result;
        i2 = o3.id, a2 = "https://" + o3.cdnDomain + "/" + o3.ossPath;
        const r3 = { url: "https://" + o3.host, formData: { "Cache-Control": "max-age=2592000", "Content-Disposition": "attachment", OSSAccessKeyId: o3.accessKeyId, Signature: o3.signature, host: o3.host, id: i2, key: o3.ossPath, policy: o3.policy, success_action_status: 200 }, fileName: "file", name: "file", filePath: e, fileType: n2 };
        return this.uploadFileToOSS(Object.assign({}, r3, { onUploadProgress: s2 }));
      }).then(() => this.reportOSSUpload({ id: i2 })).then((t3) => new Promise((n3, s3) => {
        t3.success ? n3({ success: true, filePath: e, fileID: a2 }) : s3(new B({ code: "UPLOAD_FAILED", message: "\u6587\u4EF6\u4E0A\u4F20\u5931\u8D25" }));
      }));
    }
    deleteFile({ fileList: e }) {
      const t2 = { method: "serverless.file.resource.delete", params: JSON.stringify({ id: e[0] }) };
      return this.request(this.setupRequest(t2));
    }
    getTempFileURL({ fileList: e } = {}) {
      return new Promise((t2, n2) => {
        Array.isArray(e) && e.length !== 0 || n2(new B({ code: "INVALID_PARAM", message: "fileList\u7684\u5143\u7D20\u5FC5\u987B\u662F\u975E\u7A7A\u7684\u5B57\u7B26\u4E32" })), t2({ fileList: e.map((e2) => ({ fileID: e2, tempFileURL: e2 })) });
      });
    }
  };
  var Q = { init(e) {
    const t2 = new G(e), n2 = { signInAnonymously: function() {
      return t2.authorize();
    }, getLoginState: function() {
      return Promise.resolve(false);
    } };
    return t2.auth = function() {
      return n2;
    }, t2.customAuth = t2.auth, t2;
  } };
  const Z = typeof location != "undefined" && location.protocol === "http:" ? "http:" : "https:";
  var ee;
  !function(e) {
    e.local = "local", e.none = "none", e.session = "session";
  }(ee || (ee = {}));
  var te = function() {
  };
  const ne = () => {
    let e;
    if (!Promise) {
      e = () => {
      }, e.promise = {};
      const t3 = () => {
        throw new B({ message: 'Your Node runtime does support ES6 Promises. Set "global.Promise" to your preferred implementation of promises.' });
      };
      return Object.defineProperty(e.promise, "then", { get: t3 }), Object.defineProperty(e.promise, "catch", { get: t3 }), e;
    }
    const t2 = new Promise((t3, n2) => {
      e = (e2, s2) => e2 ? n2(e2) : t3(s2);
    });
    return e.promise = t2, e;
  };
  function se(e) {
    return e === void 0;
  }
  function oe(e) {
    return Object.prototype.toString.call(e) === "[object Null]";
  }
  var re;
  function ie(e) {
    const t2 = (n2 = e, Object.prototype.toString.call(n2) === "[object Array]" ? e : [e]);
    var n2;
    for (const e2 of t2) {
      const { isMatch: t3, genAdapter: n3, runtime: s2 } = e2;
      if (t3())
        return { adapter: n3(), runtime: s2 };
    }
  }
  !function(e) {
    e.WEB = "web", e.WX_MP = "wx_mp";
  }(re || (re = {}));
  const ae = { adapter: null, runtime: void 0 }, ce = ["anonymousUuidKey"];
  class ue extends te {
    constructor() {
      super(), ae.adapter.root.tcbObject || (ae.adapter.root.tcbObject = {});
    }
    setItem(e, t2) {
      ae.adapter.root.tcbObject[e] = t2;
    }
    getItem(e) {
      return ae.adapter.root.tcbObject[e];
    }
    removeItem(e) {
      delete ae.adapter.root.tcbObject[e];
    }
    clear() {
      delete ae.adapter.root.tcbObject;
    }
  }
  function le(e, t2) {
    switch (e) {
      case "local":
        return t2.localStorage || new ue();
      case "none":
        return new ue();
      default:
        return t2.sessionStorage || new ue();
    }
  }
  class he {
    constructor(e) {
      if (!this._storage) {
        this._persistence = ae.adapter.primaryStorage || e.persistence, this._storage = le(this._persistence, ae.adapter);
        const t2 = `access_token_${e.env}`, n2 = `access_token_expire_${e.env}`, s2 = `refresh_token_${e.env}`, o2 = `anonymous_uuid_${e.env}`, r2 = `login_type_${e.env}`, i2 = `user_info_${e.env}`;
        this.keys = { accessTokenKey: t2, accessTokenExpireKey: n2, refreshTokenKey: s2, anonymousUuidKey: o2, loginTypeKey: r2, userInfoKey: i2 };
      }
    }
    updatePersistence(e) {
      if (e === this._persistence)
        return;
      const t2 = this._persistence === "local";
      this._persistence = e;
      const n2 = le(e, ae.adapter);
      for (const e2 in this.keys) {
        const s2 = this.keys[e2];
        if (t2 && ce.includes(e2))
          continue;
        const o2 = this._storage.getItem(s2);
        se(o2) || oe(o2) || (n2.setItem(s2, o2), this._storage.removeItem(s2));
      }
      this._storage = n2;
    }
    setStore(e, t2, n2) {
      if (!this._storage)
        return;
      const s2 = { version: n2 || "localCachev1", content: t2 }, o2 = JSON.stringify(s2);
      try {
        this._storage.setItem(e, o2);
      } catch (e2) {
        throw e2;
      }
    }
    getStore(e, t2) {
      try {
        if (!this._storage)
          return;
      } catch (e2) {
        return "";
      }
      t2 = t2 || "localCachev1";
      const n2 = this._storage.getItem(e);
      if (!n2)
        return "";
      if (n2.indexOf(t2) >= 0) {
        return JSON.parse(n2).content;
      }
      return "";
    }
    removeStore(e) {
      this._storage.removeItem(e);
    }
  }
  const de = {}, fe = {};
  function ge(e) {
    return de[e];
  }
  class pe {
    constructor(e, t2) {
      this.data = t2 || null, this.name = e;
    }
  }
  class me extends pe {
    constructor(e, t2) {
      super("error", { error: e, data: t2 }), this.error = e;
    }
  }
  const ye = new class {
    constructor() {
      this._listeners = {};
    }
    on(e, t2) {
      return function(e2, t3, n2) {
        n2[e2] = n2[e2] || [], n2[e2].push(t3);
      }(e, t2, this._listeners), this;
    }
    off(e, t2) {
      return function(e2, t3, n2) {
        if (n2 && n2[e2]) {
          const s2 = n2[e2].indexOf(t3);
          s2 !== -1 && n2[e2].splice(s2, 1);
        }
      }(e, t2, this._listeners), this;
    }
    fire(e, t2) {
      if (e instanceof me)
        return console.error(e.error), this;
      const n2 = typeof e == "string" ? new pe(e, t2 || {}) : e;
      const s2 = n2.name;
      if (this._listens(s2)) {
        n2.target = this;
        const e2 = this._listeners[s2] ? [...this._listeners[s2]] : [];
        for (const t3 of e2)
          t3.call(this, n2);
      }
      return this;
    }
    _listens(e) {
      return this._listeners[e] && this._listeners[e].length > 0;
    }
  }();
  function _e(e, t2) {
    ye.on(e, t2);
  }
  function we(e, t2 = {}) {
    ye.fire(e, t2);
  }
  function ke(e, t2) {
    ye.off(e, t2);
  }
  const ve = "loginStateChanged", Te = "loginStateExpire", Se = "loginTypeChanged", Pe = "anonymousConverted", Ae = "refreshAccessToken";
  var Ie;
  !function(e) {
    e.ANONYMOUS = "ANONYMOUS", e.WECHAT = "WECHAT", e.WECHAT_PUBLIC = "WECHAT-PUBLIC", e.WECHAT_OPEN = "WECHAT-OPEN", e.CUSTOM = "CUSTOM", e.EMAIL = "EMAIL", e.USERNAME = "USERNAME", e.NULL = "NULL";
  }(Ie || (Ie = {}));
  const be = ["auth.getJwt", "auth.logout", "auth.signInWithTicket", "auth.signInAnonymously", "auth.signIn", "auth.fetchAccessTokenWithRefreshToken", "auth.signUpWithEmailAndPassword", "auth.activateEndUserMail", "auth.sendPasswordResetEmail", "auth.resetPasswordWithToken", "auth.isUsernameRegistered"], Oe = { "X-SDK-Version": "1.3.5" };
  function Ce(e, t2, n2) {
    const s2 = e[t2];
    e[t2] = function(t3) {
      const o2 = {}, r2 = {};
      n2.forEach((n3) => {
        const { data: s3, headers: i3 } = n3.call(e, t3);
        Object.assign(o2, s3), Object.assign(r2, i3);
      });
      const i2 = t3.data;
      return i2 && (() => {
        var e2;
        if (e2 = i2, Object.prototype.toString.call(e2) !== "[object FormData]")
          t3.data = __spreadValues(__spreadValues({}, i2), o2);
        else
          for (const e3 in o2)
            i2.append(e3, o2[e3]);
      })(), t3.headers = __spreadValues(__spreadValues({}, t3.headers || {}), r2), s2.call(e, t3);
    };
  }
  function Ee() {
    const e = Math.random().toString(16).slice(2);
    return { data: { seqId: e }, headers: __spreadProps(__spreadValues({}, Oe), { "x-seqid": e }) };
  }
  class Re {
    constructor(e = {}) {
      var t2;
      this.config = e, this._reqClass = new ae.adapter.reqClass({ timeout: this.config.timeout, timeoutMsg: `\u8BF7\u6C42\u5728${this.config.timeout / 1e3}s\u5185\u672A\u5B8C\u6210\uFF0C\u5DF2\u4E2D\u65AD`, restrictedMethods: ["post"] }), this._cache = ge(this.config.env), this._localCache = (t2 = this.config.env, fe[t2]), Ce(this._reqClass, "post", [Ee]), Ce(this._reqClass, "upload", [Ee]), Ce(this._reqClass, "download", [Ee]);
    }
    async post(e) {
      return await this._reqClass.post(e);
    }
    async upload(e) {
      return await this._reqClass.upload(e);
    }
    async download(e) {
      return await this._reqClass.download(e);
    }
    async refreshAccessToken() {
      let e, t2;
      this._refreshAccessTokenPromise || (this._refreshAccessTokenPromise = this._refreshAccessToken());
      try {
        e = await this._refreshAccessTokenPromise;
      } catch (e2) {
        t2 = e2;
      }
      if (this._refreshAccessTokenPromise = null, this._shouldRefreshAccessTokenHook = null, t2)
        throw t2;
      return e;
    }
    async _refreshAccessToken() {
      const { accessTokenKey: e, accessTokenExpireKey: t2, refreshTokenKey: n2, loginTypeKey: s2, anonymousUuidKey: o2 } = this._cache.keys;
      this._cache.removeStore(e), this._cache.removeStore(t2);
      let r2 = this._cache.getStore(n2);
      if (!r2)
        throw new B({ message: "\u672A\u767B\u5F55CloudBase" });
      const i2 = { refresh_token: r2 }, a2 = await this.request("auth.fetchAccessTokenWithRefreshToken", i2);
      if (a2.data.code) {
        const { code: e2 } = a2.data;
        if (e2 === "SIGN_PARAM_INVALID" || e2 === "REFRESH_TOKEN_EXPIRED" || e2 === "INVALID_REFRESH_TOKEN") {
          if (this._cache.getStore(s2) === Ie.ANONYMOUS && e2 === "INVALID_REFRESH_TOKEN") {
            const e3 = this._cache.getStore(o2), t3 = this._cache.getStore(n2), s3 = await this.send("auth.signInAnonymously", { anonymous_uuid: e3, refresh_token: t3 });
            return this.setRefreshToken(s3.refresh_token), this._refreshAccessToken();
          }
          we(Te), this._cache.removeStore(n2);
        }
        throw new B({ code: a2.data.code, message: `\u5237\u65B0access token\u5931\u8D25\uFF1A${a2.data.code}` });
      }
      if (a2.data.access_token)
        return we(Ae), this._cache.setStore(e, a2.data.access_token), this._cache.setStore(t2, a2.data.access_token_expire + Date.now()), { accessToken: a2.data.access_token, accessTokenExpire: a2.data.access_token_expire };
      a2.data.refresh_token && (this._cache.removeStore(n2), this._cache.setStore(n2, a2.data.refresh_token), this._refreshAccessToken());
    }
    async getAccessToken() {
      const { accessTokenKey: e, accessTokenExpireKey: t2, refreshTokenKey: n2 } = this._cache.keys;
      if (!this._cache.getStore(n2))
        throw new B({ message: "refresh token\u4E0D\u5B58\u5728\uFF0C\u767B\u5F55\u72B6\u6001\u5F02\u5E38" });
      let s2 = this._cache.getStore(e), o2 = this._cache.getStore(t2), r2 = true;
      return this._shouldRefreshAccessTokenHook && !await this._shouldRefreshAccessTokenHook(s2, o2) && (r2 = false), (!s2 || !o2 || o2 < Date.now()) && r2 ? this.refreshAccessToken() : { accessToken: s2, accessTokenExpire: o2 };
    }
    async request(e, t2, n2) {
      const s2 = `x-tcb-trace_${this.config.env}`;
      let o2 = "application/x-www-form-urlencoded";
      const r2 = __spreadValues({ action: e, env: this.config.env, dataVersion: "2019-08-16" }, t2);
      if (be.indexOf(e) === -1) {
        const { refreshTokenKey: e2 } = this._cache.keys;
        this._cache.getStore(e2) && (r2.access_token = (await this.getAccessToken()).accessToken);
      }
      let i2;
      if (e === "storage.uploadFile") {
        i2 = new FormData();
        for (let e2 in i2)
          i2.hasOwnProperty(e2) && i2[e2] !== void 0 && i2.append(e2, r2[e2]);
        o2 = "multipart/form-data";
      } else {
        o2 = "application/json", i2 = {};
        for (let e2 in r2)
          r2[e2] !== void 0 && (i2[e2] = r2[e2]);
      }
      let a2 = { headers: { "content-type": o2 } };
      n2 && n2.onUploadProgress && (a2.onUploadProgress = n2.onUploadProgress);
      const c2 = this._localCache.getStore(s2);
      c2 && (a2.headers["X-TCB-Trace"] = c2);
      const { parse: u2, inQuery: l2, search: h2 } = t2;
      let d2 = { env: this.config.env };
      u2 && (d2.parse = true), l2 && (d2 = __spreadValues(__spreadValues({}, l2), d2));
      let f2 = function(e2, t3, n3 = {}) {
        const s3 = /\?/.test(t3);
        let o3 = "";
        for (let e3 in n3)
          o3 === "" ? !s3 && (t3 += "?") : o3 += "&", o3 += `${e3}=${encodeURIComponent(n3[e3])}`;
        return /^http(s)?\:\/\//.test(t3 += o3) ? t3 : `${e2}${t3}`;
      }(Z, "//tcb-api.tencentcloudapi.com/web", d2);
      h2 && (f2 += h2);
      const g2 = await this.post(__spreadValues({ url: f2, data: i2 }, a2)), p2 = g2.header && g2.header["x-tcb-trace"];
      if (p2 && this._localCache.setStore(s2, p2), Number(g2.status) !== 200 && Number(g2.statusCode) !== 200 || !g2.data)
        throw new B({ code: "NETWORK_ERROR", message: "network request error" });
      return g2;
    }
    async send(e, t2 = {}) {
      const n2 = await this.request(e, t2, { onUploadProgress: t2.onUploadProgress });
      if (n2.data.code === "ACCESS_TOKEN_EXPIRED" && be.indexOf(e) === -1) {
        await this.refreshAccessToken();
        const n3 = await this.request(e, t2, { onUploadProgress: t2.onUploadProgress });
        if (n3.data.code)
          throw new B({ code: n3.data.code, message: n3.data.message });
        return n3.data;
      }
      if (n2.data.code)
        throw new B({ code: n2.data.code, message: n2.data.message });
      return n2.data;
    }
    setRefreshToken(e) {
      const { accessTokenKey: t2, accessTokenExpireKey: n2, refreshTokenKey: s2 } = this._cache.keys;
      this._cache.removeStore(t2), this._cache.removeStore(n2), this._cache.setStore(s2, e);
    }
  }
  const Ue = {};
  function xe(e) {
    return Ue[e];
  }
  class Le {
    constructor(e) {
      this.config = e, this._cache = ge(e.env), this._request = xe(e.env);
    }
    setRefreshToken(e) {
      const { accessTokenKey: t2, accessTokenExpireKey: n2, refreshTokenKey: s2 } = this._cache.keys;
      this._cache.removeStore(t2), this._cache.removeStore(n2), this._cache.setStore(s2, e);
    }
    setAccessToken(e, t2) {
      const { accessTokenKey: n2, accessTokenExpireKey: s2 } = this._cache.keys;
      this._cache.setStore(n2, e), this._cache.setStore(s2, t2);
    }
    async refreshUserInfo() {
      const { data: e } = await this._request.send("auth.getUserInfo", {});
      return this.setLocalUserInfo(e), e;
    }
    setLocalUserInfo(e) {
      const { userInfoKey: t2 } = this._cache.keys;
      this._cache.setStore(t2, e);
    }
  }
  class De {
    constructor(e) {
      if (!e)
        throw new B({ code: "PARAM_ERROR", message: "envId is not defined" });
      this._envId = e, this._cache = ge(this._envId), this._request = xe(this._envId), this.setUserInfo();
    }
    linkWithTicket(e) {
      if (typeof e != "string")
        throw new B({ code: "PARAM_ERROR", message: "ticket must be string" });
      return this._request.send("auth.linkWithTicket", { ticket: e });
    }
    linkWithRedirect(e) {
      e.signInWithRedirect();
    }
    updatePassword(e, t2) {
      return this._request.send("auth.updatePassword", { oldPassword: t2, newPassword: e });
    }
    updateEmail(e) {
      return this._request.send("auth.updateEmail", { newEmail: e });
    }
    updateUsername(e) {
      if (typeof e != "string")
        throw new B({ code: "PARAM_ERROR", message: "username must be a string" });
      return this._request.send("auth.updateUsername", { username: e });
    }
    async getLinkedUidList() {
      const { data: e } = await this._request.send("auth.getLinkedUidList", {});
      let t2 = false;
      const { users: n2 } = e;
      return n2.forEach((e2) => {
        e2.wxOpenId && e2.wxPublicId && (t2 = true);
      }), { users: n2, hasPrimaryUid: t2 };
    }
    setPrimaryUid(e) {
      return this._request.send("auth.setPrimaryUid", { uid: e });
    }
    unlink(e) {
      return this._request.send("auth.unlink", { platform: e });
    }
    async update(e) {
      const { nickName: t2, gender: n2, avatarUrl: s2, province: o2, country: r2, city: i2 } = e, { data: a2 } = await this._request.send("auth.updateUserInfo", { nickName: t2, gender: n2, avatarUrl: s2, province: o2, country: r2, city: i2 });
      this.setLocalUserInfo(a2);
    }
    async refresh() {
      const { data: e } = await this._request.send("auth.getUserInfo", {});
      return this.setLocalUserInfo(e), e;
    }
    setUserInfo() {
      const { userInfoKey: e } = this._cache.keys, t2 = this._cache.getStore(e);
      ["uid", "loginType", "openid", "wxOpenId", "wxPublicId", "unionId", "qqMiniOpenId", "email", "hasPassword", "customUserId", "nickName", "gender", "avatarUrl"].forEach((e2) => {
        this[e2] = t2[e2];
      }), this.location = { country: t2.country, province: t2.province, city: t2.city };
    }
    setLocalUserInfo(e) {
      const { userInfoKey: t2 } = this._cache.keys;
      this._cache.setStore(t2, e), this.setUserInfo();
    }
  }
  class Ne {
    constructor(e) {
      if (!e)
        throw new B({ code: "PARAM_ERROR", message: "envId is not defined" });
      this._cache = ge(e);
      const { refreshTokenKey: t2, accessTokenKey: n2, accessTokenExpireKey: s2 } = this._cache.keys, o2 = this._cache.getStore(t2), r2 = this._cache.getStore(n2), i2 = this._cache.getStore(s2);
      this.credential = { refreshToken: o2, accessToken: r2, accessTokenExpire: i2 }, this.user = new De(e);
    }
    get isAnonymousAuth() {
      return this.loginType === Ie.ANONYMOUS;
    }
    get isCustomAuth() {
      return this.loginType === Ie.CUSTOM;
    }
    get isWeixinAuth() {
      return this.loginType === Ie.WECHAT || this.loginType === Ie.WECHAT_OPEN || this.loginType === Ie.WECHAT_PUBLIC;
    }
    get loginType() {
      return this._cache.getStore(this._cache.keys.loginTypeKey);
    }
  }
  class qe extends Le {
    async signIn() {
      this._cache.updatePersistence("local");
      const { anonymousUuidKey: e, refreshTokenKey: t2 } = this._cache.keys, n2 = this._cache.getStore(e) || void 0, s2 = this._cache.getStore(t2) || void 0, o2 = await this._request.send("auth.signInAnonymously", { anonymous_uuid: n2, refresh_token: s2 });
      if (o2.uuid && o2.refresh_token) {
        this._setAnonymousUUID(o2.uuid), this.setRefreshToken(o2.refresh_token), await this._request.refreshAccessToken(), we(ve), we(Se, { env: this.config.env, loginType: Ie.ANONYMOUS, persistence: "local" });
        const e2 = new Ne(this.config.env);
        return await e2.user.refresh(), e2;
      }
      throw new B({ message: "\u533F\u540D\u767B\u5F55\u5931\u8D25" });
    }
    async linkAndRetrieveDataWithTicket(e) {
      const { anonymousUuidKey: t2, refreshTokenKey: n2 } = this._cache.keys, s2 = this._cache.getStore(t2), o2 = this._cache.getStore(n2), r2 = await this._request.send("auth.linkAndRetrieveDataWithTicket", { anonymous_uuid: s2, refresh_token: o2, ticket: e });
      if (r2.refresh_token)
        return this._clearAnonymousUUID(), this.setRefreshToken(r2.refresh_token), await this._request.refreshAccessToken(), we(Pe, { env: this.config.env }), we(Se, { loginType: Ie.CUSTOM, persistence: "local" }), { credential: { refreshToken: r2.refresh_token } };
      throw new B({ message: "\u533F\u540D\u8F6C\u5316\u5931\u8D25" });
    }
    _setAnonymousUUID(e) {
      const { anonymousUuidKey: t2, loginTypeKey: n2 } = this._cache.keys;
      this._cache.removeStore(t2), this._cache.setStore(t2, e), this._cache.setStore(n2, Ie.ANONYMOUS);
    }
    _clearAnonymousUUID() {
      this._cache.removeStore(this._cache.keys.anonymousUuidKey);
    }
  }
  class Fe extends Le {
    async signIn(e) {
      if (typeof e != "string")
        throw new B({ param: "PARAM_ERROR", message: "ticket must be a string" });
      const { refreshTokenKey: t2 } = this._cache.keys, n2 = await this._request.send("auth.signInWithTicket", { ticket: e, refresh_token: this._cache.getStore(t2) || "" });
      if (n2.refresh_token)
        return this.setRefreshToken(n2.refresh_token), await this._request.refreshAccessToken(), we(ve), we(Se, { env: this.config.env, loginType: Ie.CUSTOM, persistence: this.config.persistence }), await this.refreshUserInfo(), new Ne(this.config.env);
      throw new B({ message: "\u81EA\u5B9A\u4E49\u767B\u5F55\u5931\u8D25" });
    }
  }
  class Me extends Le {
    async signIn(e, t2) {
      if (typeof e != "string")
        throw new B({ code: "PARAM_ERROR", message: "email must be a string" });
      const { refreshTokenKey: n2 } = this._cache.keys, s2 = await this._request.send("auth.signIn", { loginType: "EMAIL", email: e, password: t2, refresh_token: this._cache.getStore(n2) || "" }), { refresh_token: o2, access_token: r2, access_token_expire: i2 } = s2;
      if (o2)
        return this.setRefreshToken(o2), r2 && i2 ? this.setAccessToken(r2, i2) : await this._request.refreshAccessToken(), await this.refreshUserInfo(), we(ve), we(Se, { env: this.config.env, loginType: Ie.EMAIL, persistence: this.config.persistence }), new Ne(this.config.env);
      throw s2.code ? new B({ code: s2.code, message: `\u90AE\u7BB1\u767B\u5F55\u5931\u8D25: ${s2.message}` }) : new B({ message: "\u90AE\u7BB1\u767B\u5F55\u5931\u8D25" });
    }
    async activate(e) {
      return this._request.send("auth.activateEndUserMail", { token: e });
    }
    async resetPasswordWithToken(e, t2) {
      return this._request.send("auth.resetPasswordWithToken", { token: e, newPassword: t2 });
    }
  }
  class je extends Le {
    async signIn(e, t2) {
      if (typeof e != "string")
        throw new B({ code: "PARAM_ERROR", message: "username must be a string" });
      typeof t2 != "string" && (t2 = "", console.warn("password is empty"));
      const { refreshTokenKey: n2 } = this._cache.keys, s2 = await this._request.send("auth.signIn", { loginType: Ie.USERNAME, username: e, password: t2, refresh_token: this._cache.getStore(n2) || "" }), { refresh_token: o2, access_token_expire: r2, access_token: i2 } = s2;
      if (o2)
        return this.setRefreshToken(o2), i2 && r2 ? this.setAccessToken(i2, r2) : await this._request.refreshAccessToken(), await this.refreshUserInfo(), we(ve), we(Se, { env: this.config.env, loginType: Ie.USERNAME, persistence: this.config.persistence }), new Ne(this.config.env);
      throw s2.code ? new B({ code: s2.code, message: `\u7528\u6237\u540D\u5BC6\u7801\u767B\u5F55\u5931\u8D25: ${s2.message}` }) : new B({ message: "\u7528\u6237\u540D\u5BC6\u7801\u767B\u5F55\u5931\u8D25" });
    }
  }
  class $e {
    constructor(e) {
      this.config = e, this._cache = ge(e.env), this._request = xe(e.env), this._onAnonymousConverted = this._onAnonymousConverted.bind(this), this._onLoginTypeChanged = this._onLoginTypeChanged.bind(this), _e(Se, this._onLoginTypeChanged);
    }
    get currentUser() {
      const e = this.hasLoginState();
      return e && e.user || null;
    }
    get loginType() {
      return this._cache.getStore(this._cache.keys.loginTypeKey);
    }
    anonymousAuthProvider() {
      return new qe(this.config);
    }
    customAuthProvider() {
      return new Fe(this.config);
    }
    emailAuthProvider() {
      return new Me(this.config);
    }
    usernameAuthProvider() {
      return new je(this.config);
    }
    async signInAnonymously() {
      return new qe(this.config).signIn();
    }
    async signInWithEmailAndPassword(e, t2) {
      return new Me(this.config).signIn(e, t2);
    }
    signInWithUsernameAndPassword(e, t2) {
      return new je(this.config).signIn(e, t2);
    }
    async linkAndRetrieveDataWithTicket(e) {
      this._anonymousAuthProvider || (this._anonymousAuthProvider = new qe(this.config)), _e(Pe, this._onAnonymousConverted);
      return await this._anonymousAuthProvider.linkAndRetrieveDataWithTicket(e);
    }
    async signOut() {
      if (this.loginType === Ie.ANONYMOUS)
        throw new B({ message: "\u533F\u540D\u7528\u6237\u4E0D\u652F\u6301\u767B\u51FA\u64CD\u4F5C" });
      const { refreshTokenKey: e, accessTokenKey: t2, accessTokenExpireKey: n2 } = this._cache.keys, s2 = this._cache.getStore(e);
      if (!s2)
        return;
      const o2 = await this._request.send("auth.logout", { refresh_token: s2 });
      return this._cache.removeStore(e), this._cache.removeStore(t2), this._cache.removeStore(n2), we(ve), we(Se, { env: this.config.env, loginType: Ie.NULL, persistence: this.config.persistence }), o2;
    }
    async signUpWithEmailAndPassword(e, t2) {
      return this._request.send("auth.signUpWithEmailAndPassword", { email: e, password: t2 });
    }
    async sendPasswordResetEmail(e) {
      return this._request.send("auth.sendPasswordResetEmail", { email: e });
    }
    onLoginStateChanged(e) {
      _e(ve, () => {
        const t3 = this.hasLoginState();
        e.call(this, t3);
      });
      const t2 = this.hasLoginState();
      e.call(this, t2);
    }
    onLoginStateExpired(e) {
      _e(Te, e.bind(this));
    }
    onAccessTokenRefreshed(e) {
      _e(Ae, e.bind(this));
    }
    onAnonymousConverted(e) {
      _e(Pe, e.bind(this));
    }
    onLoginTypeChanged(e) {
      _e(Se, () => {
        const t2 = this.hasLoginState();
        e.call(this, t2);
      });
    }
    async getAccessToken() {
      return { accessToken: (await this._request.getAccessToken()).accessToken, env: this.config.env };
    }
    hasLoginState() {
      const { refreshTokenKey: e } = this._cache.keys;
      return this._cache.getStore(e) ? new Ne(this.config.env) : null;
    }
    async isUsernameRegistered(e) {
      if (typeof e != "string")
        throw new B({ code: "PARAM_ERROR", message: "username must be a string" });
      const { data: t2 } = await this._request.send("auth.isUsernameRegistered", { username: e });
      return t2 && t2.isRegistered;
    }
    getLoginState() {
      return Promise.resolve(this.hasLoginState());
    }
    async signInWithTicket(e) {
      return new Fe(this.config).signIn(e);
    }
    shouldRefreshAccessToken(e) {
      this._request._shouldRefreshAccessTokenHook = e.bind(this);
    }
    getUserInfo() {
      return this._request.send("auth.getUserInfo", {}).then((e) => e.code ? e : __spreadProps(__spreadValues({}, e.data), { requestId: e.seqId }));
    }
    getAuthHeader() {
      const { refreshTokenKey: e, accessTokenKey: t2 } = this._cache.keys, n2 = this._cache.getStore(e);
      return { "x-cloudbase-credentials": this._cache.getStore(t2) + "/@@/" + n2 };
    }
    _onAnonymousConverted(e) {
      const { env: t2 } = e.data;
      t2 === this.config.env && this._cache.updatePersistence(this.config.persistence);
    }
    _onLoginTypeChanged(e) {
      const { loginType: t2, persistence: n2, env: s2 } = e.data;
      s2 === this.config.env && (this._cache.updatePersistence(n2), this._cache.setStore(this._cache.keys.loginTypeKey, t2));
    }
  }
  const Ke = function(e, t2) {
    t2 = t2 || ne();
    const n2 = xe(this.config.env), { cloudPath: s2, filePath: o2, onUploadProgress: r2, fileType: i2 = "image" } = e;
    return n2.send("storage.getUploadMetadata", { path: s2 }).then((e2) => {
      const { data: { url: a2, authorization: c2, token: u2, fileId: l2, cosFileId: h2 }, requestId: d2 } = e2, f2 = { key: s2, signature: c2, "x-cos-meta-fileid": h2, success_action_status: "201", "x-cos-security-token": u2 };
      n2.upload({ url: a2, data: f2, file: o2, name: s2, fileType: i2, onUploadProgress: r2 }).then((e3) => {
        e3.statusCode === 201 ? t2(null, { fileID: l2, requestId: d2 }) : t2(new B({ code: "STORAGE_REQUEST_FAIL", message: `STORAGE_REQUEST_FAIL: ${e3.data}` }));
      }).catch((e3) => {
        t2(e3);
      });
    }).catch((e2) => {
      t2(e2);
    }), t2.promise;
  }, Be = function(e, t2) {
    t2 = t2 || ne();
    const n2 = xe(this.config.env), { cloudPath: s2 } = e;
    return n2.send("storage.getUploadMetadata", { path: s2 }).then((e2) => {
      t2(null, e2);
    }).catch((e2) => {
      t2(e2);
    }), t2.promise;
  }, He = function({ fileList: e }, t2) {
    if (t2 = t2 || ne(), !e || !Array.isArray(e))
      return { code: "INVALID_PARAM", message: "fileList\u5FC5\u987B\u662F\u975E\u7A7A\u7684\u6570\u7EC4" };
    for (let t3 of e)
      if (!t3 || typeof t3 != "string")
        return { code: "INVALID_PARAM", message: "fileList\u7684\u5143\u7D20\u5FC5\u987B\u662F\u975E\u7A7A\u7684\u5B57\u7B26\u4E32" };
    const n2 = { fileid_list: e };
    return xe(this.config.env).send("storage.batchDeleteFile", n2).then((e2) => {
      e2.code ? t2(null, e2) : t2(null, { fileList: e2.data.delete_list, requestId: e2.requestId });
    }).catch((e2) => {
      t2(e2);
    }), t2.promise;
  }, We = function({ fileList: e }, t2) {
    t2 = t2 || ne(), e && Array.isArray(e) || t2(null, { code: "INVALID_PARAM", message: "fileList\u5FC5\u987B\u662F\u975E\u7A7A\u7684\u6570\u7EC4" });
    let n2 = [];
    for (let s3 of e)
      typeof s3 == "object" ? (s3.hasOwnProperty("fileID") && s3.hasOwnProperty("maxAge") || t2(null, { code: "INVALID_PARAM", message: "fileList\u7684\u5143\u7D20\u5FC5\u987B\u662F\u5305\u542BfileID\u548CmaxAge\u7684\u5BF9\u8C61" }), n2.push({ fileid: s3.fileID, max_age: s3.maxAge })) : typeof s3 == "string" ? n2.push({ fileid: s3 }) : t2(null, { code: "INVALID_PARAM", message: "fileList\u7684\u5143\u7D20\u5FC5\u987B\u662F\u5B57\u7B26\u4E32" });
    const s2 = { file_list: n2 };
    return xe(this.config.env).send("storage.batchGetDownloadUrl", s2).then((e2) => {
      e2.code ? t2(null, e2) : t2(null, { fileList: e2.data.download_list, requestId: e2.requestId });
    }).catch((e2) => {
      t2(e2);
    }), t2.promise;
  }, ze = async function({ fileID: e }, t2) {
    const n2 = (await We.call(this, { fileList: [{ fileID: e, maxAge: 600 }] })).fileList[0];
    if (n2.code !== "SUCCESS")
      return t2 ? t2(n2) : new Promise((e2) => {
        e2(n2);
      });
    const s2 = xe(this.config.env);
    let o2 = n2.download_url;
    if (o2 = encodeURI(o2), !t2)
      return s2.download({ url: o2 });
    t2(await s2.download({ url: o2 }));
  }, Je = function({ name: e, data: t2, query: n2, parse: s2, search: o2 }, r2) {
    const i2 = r2 || ne();
    let a2;
    try {
      a2 = t2 ? JSON.stringify(t2) : "";
    } catch (e2) {
      return Promise.reject(e2);
    }
    if (!e)
      return Promise.reject(new B({ code: "PARAM_ERROR", message: "\u51FD\u6570\u540D\u4E0D\u80FD\u4E3A\u7A7A" }));
    const c2 = { inQuery: n2, parse: s2, search: o2, function_name: e, request_data: a2 };
    return xe(this.config.env).send("functions.invokeFunction", c2).then((e2) => {
      if (e2.code)
        i2(null, e2);
      else {
        let t3 = e2.data.response_data;
        if (s2)
          i2(null, { result: t3, requestId: e2.requestId });
        else
          try {
            t3 = JSON.parse(e2.data.response_data), i2(null, { result: t3, requestId: e2.requestId });
          } catch (e3) {
            i2(new B({ message: "response data must be json" }));
          }
      }
      return i2.promise;
    }).catch((e2) => {
      i2(e2);
    }), i2.promise;
  }, Ve = { timeout: 15e3, persistence: "session" }, Ye = {};
  class Xe {
    constructor(e) {
      this.config = e || this.config, this.authObj = void 0;
    }
    init(e) {
      switch (ae.adapter || (this.requestClient = new ae.adapter.reqClass({ timeout: e.timeout || 5e3, timeoutMsg: `\u8BF7\u6C42\u5728${(e.timeout || 5e3) / 1e3}s\u5185\u672A\u5B8C\u6210\uFF0C\u5DF2\u4E2D\u65AD` })), this.config = __spreadValues(__spreadValues({}, Ve), e), true) {
        case this.config.timeout > 6e5:
          console.warn("timeout\u5927\u4E8E\u53EF\u914D\u7F6E\u4E0A\u9650[10\u5206\u949F]\uFF0C\u5DF2\u91CD\u7F6E\u4E3A\u4E0A\u9650\u6570\u503C"), this.config.timeout = 6e5;
          break;
        case this.config.timeout < 100:
          console.warn("timeout\u5C0F\u4E8E\u53EF\u914D\u7F6E\u4E0B\u9650[100ms]\uFF0C\u5DF2\u91CD\u7F6E\u4E3A\u4E0B\u9650\u6570\u503C"), this.config.timeout = 100;
      }
      return new Xe(this.config);
    }
    auth({ persistence: e } = {}) {
      if (this.authObj)
        return this.authObj;
      const t2 = e || ae.adapter.primaryStorage || Ve.persistence;
      var n2;
      return t2 !== this.config.persistence && (this.config.persistence = t2), function(e2) {
        const { env: t3 } = e2;
        de[t3] = new he(e2), fe[t3] = new he(__spreadProps(__spreadValues({}, e2), { persistence: "local" }));
      }(this.config), n2 = this.config, Ue[n2.env] = new Re(n2), this.authObj = new $e(this.config), this.authObj;
    }
    on(e, t2) {
      return _e.apply(this, [e, t2]);
    }
    off(e, t2) {
      return ke.apply(this, [e, t2]);
    }
    callFunction(e, t2) {
      return Je.apply(this, [e, t2]);
    }
    deleteFile(e, t2) {
      return He.apply(this, [e, t2]);
    }
    getTempFileURL(e, t2) {
      return We.apply(this, [e, t2]);
    }
    downloadFile(e, t2) {
      return ze.apply(this, [e, t2]);
    }
    uploadFile(e, t2) {
      return Ke.apply(this, [e, t2]);
    }
    getUploadMetadata(e, t2) {
      return Be.apply(this, [e, t2]);
    }
    registerExtension(e) {
      Ye[e.name] = e;
    }
    async invokeExtension(e, t2) {
      const n2 = Ye[e];
      if (!n2)
        throw new B({ message: `\u6269\u5C55${e} \u5FC5\u987B\u5148\u6CE8\u518C` });
      return await n2.invoke(t2, this);
    }
    useAdapters(e) {
      const { adapter: t2, runtime: n2 } = ie(e) || {};
      t2 && (ae.adapter = t2), n2 && (ae.runtime = n2);
    }
  }
  var Ge = new Xe();
  function Qe(e, t2, n2) {
    n2 === void 0 && (n2 = {});
    var s2 = /\?/.test(t2), o2 = "";
    for (var r2 in n2)
      o2 === "" ? !s2 && (t2 += "?") : o2 += "&", o2 += r2 + "=" + encodeURIComponent(n2[r2]);
    return /^http(s)?:\/\//.test(t2 += o2) ? t2 : "" + e + t2;
  }
  class Ze {
    post(e) {
      const { url: t2, data: n2, headers: s2 } = e;
      return new Promise((e2, o2) => {
        V.request({ url: Qe("https:", t2), data: n2, method: "POST", header: s2, success(t3) {
          e2(t3);
        }, fail(e3) {
          o2(e3);
        } });
      });
    }
    upload(e) {
      return new Promise((t2, n2) => {
        const { url: s2, file: o2, data: r2, headers: i2, fileType: a2 } = e, c2 = V.uploadFile({ url: Qe("https:", s2), name: "file", formData: Object.assign({}, r2), filePath: o2, fileType: a2, header: i2, success(e2) {
          const n3 = { statusCode: e2.statusCode, data: e2.data || {} };
          e2.statusCode === 200 && r2.success_action_status && (n3.statusCode = parseInt(r2.success_action_status, 10)), t2(n3);
        }, fail(e2) {
          n2(new Error(e2.errMsg || "uploadFile:fail"));
        } });
        typeof e.onUploadProgress == "function" && c2 && typeof c2.onProgressUpdate == "function" && c2.onProgressUpdate((t3) => {
          e.onUploadProgress({ loaded: t3.totalBytesSent, total: t3.totalBytesExpectedToSend });
        });
      });
    }
  }
  const et = { setItem(e, t2) {
    V.setStorageSync(e, t2);
  }, getItem: (e) => V.getStorageSync(e), removeItem(e) {
    V.removeStorageSync(e);
  }, clear() {
    V.clearStorageSync();
  } };
  var tt = { genAdapter: function() {
    return { root: {}, reqClass: Ze, localStorage: et, primaryStorage: "local" };
  }, isMatch: function() {
    return true;
  }, runtime: "uni_app" };
  Ge.useAdapters(tt);
  const nt = Ge, st = nt.init;
  nt.init = function(e) {
    e.env = e.spaceId;
    const t2 = st.call(this, e);
    t2.config.provider = "tencent", t2.config.spaceId = e.spaceId;
    const n2 = t2.auth;
    return t2.auth = function(e2) {
      const t3 = n2.call(this, e2);
      return ["linkAndRetrieveDataWithTicket", "signInAnonymously", "signOut", "getAccessToken", "getLoginState", "signInWithTicket", "getUserInfo"].forEach((e3) => {
        t3[e3] = K(t3[e3]).bind(t3);
      }), t3;
    }, t2.customAuth = t2.auth, t2;
  };
  var ot = nt;
  function rt(e) {
    return e && rt(e.__v_raw) || e;
  }
  function it() {
    return { token: V.getStorageSync("uni_id_token") || V.getStorageSync("uniIdToken"), tokenExpired: V.getStorageSync("uni_id_token_expired") };
  }
  function at({ token: e, tokenExpired: t2 } = {}) {
    e && V.setStorageSync("uni_id_token", e), t2 && V.setStorageSync("uni_id_token_expired", t2);
  }
  function ct() {
    if (g !== "web")
      return;
    uni.getStorageSync("__LAST_DCLOUD_APPID") !== _ && (uni.setStorageSync("__LAST_DCLOUD_APPID", _), console.warn("\u68C0\u6D4B\u5230\u5F53\u524D\u9879\u76EE\u4E0E\u4E0A\u6B21\u8FD0\u884C\u5230\u6B64\u7AEF\u53E3\u7684\u9879\u76EE\u4E0D\u4E00\u81F4\uFF0C\u81EA\u52A8\u6E05\u7406uni-id\u4FDD\u5B58\u7684token\u4FE1\u606F\uFF08\u4EC5\u5F00\u53D1\u8C03\u8BD5\u65F6\u751F\u6548\uFF09"), V.removeStorageSync("uni_id_token"), V.removeStorageSync("uniIdToken"), V.removeStorageSync("uni_id_token_expired"));
  }
  var ut = class extends G {
    getAccessToken() {
      return new Promise((e, t2) => {
        const n2 = "Anonymous_Access_token";
        this.setAccessToken(n2), e(n2);
      });
    }
    setupRequest(e, t2) {
      const n2 = Object.assign({}, e, { spaceId: this.config.spaceId, timestamp: Date.now() }), s2 = { "Content-Type": "application/json" };
      t2 !== "auth" && (n2.token = this.accessToken, s2["x-basement-token"] = this.accessToken), s2["x-serverless-sign"] = J.sign(n2, this.config.clientSecret);
      const o2 = z();
      s2["x-client-info"] = encodeURIComponent(JSON.stringify(o2));
      const { token: r2 } = it();
      return s2["x-client-token"] = r2, { url: this.config.requestUrl, method: "POST", data: n2, dataType: "json", header: JSON.parse(JSON.stringify(s2)) };
    }
    uploadFileToOSS({ url: e, formData: t2, name: n2, filePath: s2, fileType: o2, onUploadProgress: r2 }) {
      return new Promise((i2, a2) => {
        const c2 = this.adapter.uploadFile({ url: e, formData: t2, name: n2, filePath: s2, fileType: o2, success(e2) {
          e2 && e2.statusCode < 400 ? i2(e2) : a2(new B({ code: "UPLOAD_FAILED", message: "\u6587\u4EF6\u4E0A\u4F20\u5931\u8D25" }));
        }, fail(e2) {
          a2(new B({ code: e2.code || "UPLOAD_FAILED", message: e2.message || e2.errMsg || "\u6587\u4EF6\u4E0A\u4F20\u5931\u8D25" }));
        } });
        typeof r2 == "function" && c2 && typeof c2.onProgressUpdate == "function" && c2.onProgressUpdate((e2) => {
          r2({ loaded: e2.totalBytesSent, total: e2.totalBytesExpectedToSend });
        });
      });
    }
    uploadFile({ filePath: e, cloudPath: t2, fileType: n2 = "image", onUploadProgress: s2 }) {
      if (!t2)
        throw new B({ code: "CLOUDPATH_REQUIRED", message: "cloudPath\u4E0D\u53EF\u4E3A\u7A7A" });
      let o2;
      return this.getOSSUploadOptionsFromPath({ cloudPath: t2 }).then((t3) => {
        const { url: r2, formData: i2, name: a2 } = t3.result;
        o2 = t3.result.fileUrl;
        const c2 = { url: r2, formData: i2, name: a2, filePath: e, fileType: n2 };
        return this.uploadFileToOSS(Object.assign({}, c2, { onUploadProgress: s2 }));
      }).then(() => this.reportOSSUpload({ cloudPath: t2 })).then((t3) => new Promise((n3, s3) => {
        t3.success ? n3({ success: true, filePath: e, fileID: o2 }) : s3(new B({ code: "UPLOAD_FAILED", message: "\u6587\u4EF6\u4E0A\u4F20\u5931\u8D25" }));
      }));
    }
    deleteFile({ fileList: e }) {
      const t2 = { method: "serverless.file.resource.delete", params: JSON.stringify({ fileList: e }) };
      return this.request(this.setupRequest(t2));
    }
    getTempFileURL({ fileList: e } = {}) {
      const t2 = { method: "serverless.file.resource.getTempFileURL", params: JSON.stringify({ fileList: e }) };
      return this.request(this.setupRequest(t2));
    }
  };
  var lt = { init(e) {
    const t2 = new ut(e), n2 = { signInAnonymously: function() {
      return t2.authorize();
    }, getLoginState: function() {
      return Promise.resolve(false);
    } };
    return t2.auth = function() {
      return n2;
    }, t2.customAuth = t2.auth, t2;
  } };
  function ht({ data: e }) {
    let t2;
    t2 = z();
    const n2 = JSON.parse(JSON.stringify(e || {}));
    if (Object.assign(n2, { clientInfo: t2 }), !n2.uniIdToken) {
      const { token: e2 } = it();
      e2 && (n2.uniIdToken = e2);
    }
    return n2;
  }
  function dt({ name: e, data: t2 } = {}) {
    const { localAddress: n2, localPort: s2 } = this.__dev__, o2 = { aliyun: "aliyun", tencent: "tcb" }[this.config.provider], r2 = this.config.spaceId, i2 = `http://${n2}:${s2}/system/check-function`, a2 = `http://${n2}:${s2}/cloudfunctions/${e}`;
    return new Promise((t3, n3) => {
      V.request({ method: "POST", url: i2, data: { name: e, platform: g, provider: o2, spaceId: r2 }, timeout: 3e3, success(e2) {
        t3(e2);
      }, fail() {
        t3({ data: { code: "NETWORK_ERROR", message: "\u8FDE\u63A5\u672C\u5730\u8C03\u8BD5\u670D\u52A1\u5931\u8D25\uFF0C\u8BF7\u68C0\u67E5\u5BA2\u6237\u7AEF\u662F\u5426\u548C\u4E3B\u673A\u5728\u540C\u4E00\u5C40\u57DF\u7F51\u4E0B\uFF0C\u81EA\u52A8\u5207\u6362\u4E3A\u5DF2\u90E8\u7F72\u7684\u4E91\u51FD\u6570\u3002" } });
      } });
    }).then(({ data: e2 } = {}) => {
      const { code: t3, message: n3 } = e2 || {};
      return { code: t3 === 0 ? 0 : t3 || "SYS_ERR", message: n3 || "SYS_ERR" };
    }).then(({ code: n3, message: s3 }) => {
      if (n3 !== 0) {
        switch (n3) {
          case "MODULE_ENCRYPTED":
            console.error(`\u6B64\u4E91\u51FD\u6570\uFF08${e}\uFF09\u4F9D\u8D56\u52A0\u5BC6\u516C\u5171\u6A21\u5757\u4E0D\u53EF\u672C\u5730\u8C03\u8BD5\uFF0C\u81EA\u52A8\u5207\u6362\u4E3A\u4E91\u7AEF\u5DF2\u90E8\u7F72\u7684\u4E91\u51FD\u6570`);
            break;
          case "FUNCTION_ENCRYPTED":
            console.error(`\u6B64\u4E91\u51FD\u6570\uFF08${e}\uFF09\u5DF2\u52A0\u5BC6\u4E0D\u53EF\u672C\u5730\u8C03\u8BD5\uFF0C\u81EA\u52A8\u5207\u6362\u4E3A\u4E91\u7AEF\u5DF2\u90E8\u7F72\u7684\u4E91\u51FD\u6570`);
            break;
          case "ACTION_ENCRYPTED":
            console.error(s3 || "\u9700\u8981\u8BBF\u95EE\u52A0\u5BC6\u7684uni-clientDB-action\uFF0C\u81EA\u52A8\u5207\u6362\u4E3A\u4E91\u7AEF\u73AF\u5883");
            break;
          case "NETWORK_ERROR": {
            const e2 = "\u8FDE\u63A5\u672C\u5730\u8C03\u8BD5\u670D\u52A1\u5931\u8D25\uFF0C\u8BF7\u68C0\u67E5\u5BA2\u6237\u7AEF\u662F\u5426\u548C\u4E3B\u673A\u5728\u540C\u4E00\u5C40\u57DF\u7F51\u4E0B";
            throw console.error(e2), new Error(e2);
          }
          case "SWITCH_TO_CLOUD":
            break;
          default: {
            const e2 = `\u68C0\u6D4B\u672C\u5730\u8C03\u8BD5\u670D\u52A1\u51FA\u73B0\u9519\u8BEF\uFF1A${s3}\uFF0C\u8BF7\u68C0\u67E5\u7F51\u7EDC\u73AF\u5883\u6216\u91CD\u542F\u5BA2\u6237\u7AEF\u518D\u8BD5`;
            throw console.error(e2), new Error(e2);
          }
        }
        return this._callCloudFunction({ name: e, data: t2 });
      }
      return new Promise((e2, n4) => {
        const s4 = ht.call(this, { data: t2 });
        V.request({ method: "POST", url: a2, data: { provider: o2, platform: g, param: s4 }, success: ({ statusCode: t3, data: s5 } = {}) => !t3 || t3 >= 400 ? n4(new B({ code: s5.code || "SYS_ERR", message: s5.message || "request:fail" })) : e2({ result: s5 }), fail(e3) {
          n4(new B({ code: e3.code || e3.errCode || "SYS_ERR", message: e3.message || e3.errMsg || "request:fail" }));
        } });
      });
    });
  }
  const ft = [{ rule: /fc_function_not_found|FUNCTION_NOT_FOUND/, content: "\uFF0C\u4E91\u51FD\u6570[{functionName}]\u5728\u4E91\u7AEF\u4E0D\u5B58\u5728\uFF0C\u8BF7\u68C0\u67E5\u6B64\u4E91\u51FD\u6570\u540D\u79F0\u662F\u5426\u6B63\u786E\u4EE5\u53CA\u8BE5\u4E91\u51FD\u6570\u662F\u5426\u5DF2\u4E0A\u4F20\u5230\u670D\u52A1\u7A7A\u95F4", mode: "append" }];
  var gt = /[\\^$.*+?()[\]{}|]/g, pt = RegExp(gt.source);
  function mt(e, t2, n2) {
    return e.replace(new RegExp((s2 = t2) && pt.test(s2) ? s2.replace(gt, "\\$&") : s2, "g"), n2);
    var s2;
  }
  function yt({ functionName: e, result: t2, logPvd: n2 }) {
    if (this.__dev__.debugLog && t2 && t2.requestId) {
      const s2 = JSON.stringify({ spaceId: this.config.spaceId, functionName: e, requestId: t2.requestId });
      console.log(`[${n2}-request]${s2}[/${n2}-request]`);
    }
  }
  function _t(e) {
    const t2 = e.callFunction, n2 = function(n3) {
      const s2 = n3.name;
      n3.data = ht.call(e, { data: n3.data });
      const o2 = { aliyun: "aliyun", tencent: "tcb", tcb: "tcb" }[this.config.provider];
      return t2.call(this, n3).then((e2) => (e2.errCode = 0, yt.call(this, { functionName: s2, result: e2, logPvd: o2 }), Promise.resolve(e2)), (e2) => (yt.call(this, { functionName: s2, result: e2, logPvd: o2 }), e2 && e2.message && (e2.message = function({ message: e3 = "", extraInfo: t3 = {}, formatter: n4 = [] } = {}) {
        for (let s3 = 0; s3 < n4.length; s3++) {
          const { rule: o3, content: r2, mode: i2 } = n4[s3], a2 = e3.match(o3);
          if (!a2)
            continue;
          let c2 = r2;
          for (let e4 = 1; e4 < a2.length; e4++)
            c2 = mt(c2, `{$${e4}}`, a2[e4]);
          for (const e4 in t3)
            c2 = mt(c2, `{${e4}}`, t3[e4]);
          return i2 === "replace" ? c2 : e3 + c2;
        }
        return e3;
      }({ message: `[${n3.name}]: ${e2.message}`, formatter: ft, extraInfo: { functionName: s2 } })), Promise.reject(e2)));
    };
    e.callFunction = function(t3) {
      let s2;
      e.__dev__.debugInfo && !e.__dev__.debugInfo.forceRemote && m ? (e._callCloudFunction || (e._callCloudFunction = n2, e._callLocalFunction = dt), s2 = dt) : s2 = n2;
      const o2 = s2.call(this, t3);
      return Object.defineProperty(o2, "result", { get: () => (console.warn("\u5F53\u524D\u8FD4\u56DE\u7ED3\u679C\u4E3APromise\u7C7B\u578B\uFF0C\u4E0D\u53EF\u76F4\u63A5\u8BBF\u95EE\u5176result\u5C5E\u6027\uFF0C\u8BE6\u60C5\u8BF7\u53C2\u8003\uFF1Ahttps://uniapp.dcloud.net.cn/uniCloud/faq?id=promise"), {}) }), o2;
    };
  }
  const wt = Symbol("CLIENT_DB_INTERNAL");
  function kt(e, t2) {
    return e.then = "DoNotReturnProxyWithAFunctionNamedThen", e._internalType = wt, e.__v_raw = void 0, new Proxy(e, { get(e2, n2, s2) {
      if (n2 === "_uniClient")
        return null;
      if (n2 in e2 || typeof n2 != "string") {
        const t3 = e2[n2];
        return typeof t3 == "function" ? t3.bind(e2) : t3;
      }
      return t2.get(e2, n2, s2);
    } });
  }
  function vt(e) {
    return { on: (t2, n2) => {
      e[t2] = e[t2] || [], e[t2].indexOf(n2) > -1 || e[t2].push(n2);
    }, off: (t2, n2) => {
      e[t2] = e[t2] || [];
      const s2 = e[t2].indexOf(n2);
      s2 !== -1 && e[t2].splice(s2, 1);
    } };
  }
  const Tt = ["db.Geo", "db.command", "command.aggregate"];
  function St(e, t2) {
    return Tt.indexOf(`${e}.${t2}`) > -1;
  }
  function Pt(e) {
    switch (u(e = rt(e))) {
      case "array":
        return e.map((e2) => Pt(e2));
      case "object":
        return e._internalType === wt || Object.keys(e).forEach((t2) => {
          e[t2] = Pt(e[t2]);
        }), e;
      case "regexp":
        return { $regexp: { source: e.source, flags: e.flags } };
      case "date":
        return { $date: e.toISOString() };
      default:
        return e;
    }
  }
  function At(e) {
    return e && e.content && e.content.$method;
  }
  class It {
    constructor(e, t2, n2) {
      this.content = e, this.prevStage = t2 || null, this.udb = null, this._database = n2;
    }
    toJSON() {
      let e = this;
      const t2 = [e.content];
      for (; e.prevStage; )
        e = e.prevStage, t2.push(e.content);
      return { $db: t2.reverse().map((e2) => ({ $method: e2.$method, $param: Pt(e2.$param) })) };
    }
    getAction() {
      const e = this.toJSON().$db.find((e2) => e2.$method === "action");
      return e && e.$param && e.$param[0];
    }
    getCommand() {
      return { $db: this.toJSON().$db.filter((e) => e.$method !== "action") };
    }
    get isAggregate() {
      let e = this;
      for (; e; ) {
        const t2 = At(e), n2 = At(e.prevStage);
        if (t2 === "aggregate" && n2 === "collection" || t2 === "pipeline")
          return true;
        e = e.prevStage;
      }
      return false;
    }
    get isCommand() {
      let e = this;
      for (; e; ) {
        if (At(e) === "command")
          return true;
        e = e.prevStage;
      }
      return false;
    }
    get isAggregateCommand() {
      let e = this;
      for (; e; ) {
        const t2 = At(e), n2 = At(e.prevStage);
        if (t2 === "aggregate" && n2 === "command")
          return true;
        e = e.prevStage;
      }
      return false;
    }
    get count() {
      if (!this.isAggregate)
        return function() {
          return this._send("count", Array.from(arguments));
        };
      const e = this;
      return function() {
        return bt({ $method: "count", $param: Pt(Array.from(arguments)) }, e, this._database);
      };
    }
    get remove() {
      if (!this.isCommand)
        return function() {
          return this._send("remove", Array.from(arguments));
        };
      const e = this;
      return function() {
        return bt({ $method: "remove", $param: Pt(Array.from(arguments)) }, e, this._database);
      };
    }
    get() {
      return this._send("get", Array.from(arguments));
    }
    add() {
      return this._send("add", Array.from(arguments));
    }
    update() {
      return this._send("update", Array.from(arguments));
    }
    end() {
      return this._send("end", Array.from(arguments));
    }
    get set() {
      if (!this.isCommand)
        return function() {
          throw new Error("JQL\u7981\u6B62\u4F7F\u7528set\u65B9\u6CD5");
        };
      const e = this;
      return function() {
        return bt({ $method: "set", $param: Pt(Array.from(arguments)) }, e, this._database);
      };
    }
    _send(e, t2) {
      const n2 = this.getAction(), s2 = this.getCommand();
      if (s2.$db.push({ $method: e, $param: Pt(t2) }), d) {
        const e2 = s2.$db.find((e3) => e3.$method === "collection"), t3 = e2 && e2.$param;
        t3 && t3.length === 1 && typeof e2.$param[0] == "string" && e2.$param[0].indexOf(",") > -1 && console.warn("\u68C0\u6D4B\u5230\u4F7F\u7528JQL\u8BED\u6CD5\u8054\u8868\u67E5\u8BE2\u65F6\uFF0C\u672A\u4F7F\u7528getTemp\u5148\u8FC7\u6EE4\u4E3B\u8868\u6570\u636E\uFF0C\u5728\u4E3B\u8868\u6570\u636E\u91CF\u5927\u7684\u60C5\u51B5\u4E0B\u53EF\u80FD\u4F1A\u67E5\u8BE2\u7F13\u6162\u3002\n- \u5982\u4F55\u4F18\u5316\u8BF7\u53C2\u8003\u6B64\u6587\u6863\uFF1Ahttps://uniapp.dcloud.net.cn/uniCloud/jql?id=lookup-with-temp \n- \u5982\u679C\u4E3B\u8868\u6570\u636E\u91CF\u5F88\u5C0F\u8BF7\u5FFD\u7565\u6B64\u4FE1\u606F\uFF0C\u9879\u76EE\u53D1\u884C\u65F6\u4E0D\u4F1A\u51FA\u73B0\u6B64\u63D0\u793A\u3002");
      }
      return this._database._callCloudFunction({ action: n2, command: s2 });
    }
  }
  function bt(e, t2, n2) {
    return kt(new It(e, t2, n2), { get(e2, t3) {
      let s2 = "db";
      return e2 && e2.content && (s2 = e2.content.$method), St(s2, t3) ? bt({ $method: t3 }, e2, n2) : function() {
        return bt({ $method: t3, $param: Pt(Array.from(arguments)) }, e2, n2);
      };
    } });
  }
  function Ot({ path: e, method: t2 }) {
    return class {
      constructor() {
        this.param = Array.from(arguments);
      }
      toJSON() {
        return { $newDb: [...e.map((e2) => ({ $method: e2 })), { $method: t2, $param: this.param }] };
      }
    };
  }
  class Ct extends class {
    constructor({ uniClient: e = {} } = {}) {
      this._uniClient = e, this._authCallBacks = {}, this._dbCallBacks = {}, e.isDefault && (this._dbCallBacks = k("_globalUniCloudDatabaseCallback")), this.auth = vt(this._authCallBacks), Object.assign(this, vt(this._dbCallBacks)), this.env = kt({}, { get: (e2, t2) => ({ $env: t2 }) }), this.Geo = kt({}, { get: (e2, t2) => Ot({ path: ["Geo"], method: t2 }) }), this.serverDate = Ot({ path: [], method: "serverDate" }), this.RegExp = Ot({ path: [], method: "RegExp" });
    }
    getCloudEnv(e) {
      if (typeof e != "string" || !e.trim())
        throw new Error("getCloudEnv\u53C2\u6570\u9519\u8BEF");
      return { $env: e.replace("$cloudEnv_", "") };
    }
    _callback(e, t2) {
      const n2 = this._dbCallBacks;
      n2[e] && n2[e].forEach((e2) => {
        e2(...t2);
      });
    }
    _callbackAuth(e, t2) {
      const n2 = this._authCallBacks;
      n2[e] && n2[e].forEach((e2) => {
        e2(...t2);
      });
    }
    multiSend() {
      const e = Array.from(arguments), t2 = e.map((e2) => {
        const t3 = e2.getAction(), n2 = e2.getCommand();
        if (n2.$db[n2.$db.length - 1].$method !== "getTemp")
          throw new Error("multiSend\u53EA\u652F\u6301\u5B50\u547D\u4EE4\u5185\u4F7F\u7528getTemp");
        return { action: t3, command: n2 };
      });
      return this._callCloudFunction({ multiCommand: t2, queryList: e });
    }
  } {
    _callCloudFunction({ action: e, command: t2, multiCommand: n2, queryList: s2 }) {
      function o2(e2, t3) {
        if (n2 && s2)
          for (let n3 = 0; n3 < s2.length; n3++) {
            const o3 = s2[n3];
            o3.udb && typeof o3.udb.setResult == "function" && (t3 ? o3.udb.setResult(t3) : o3.udb.setResult(e2.result.dataList[n3]));
          }
      }
      const r2 = this;
      function i2(e2) {
        return r2._callback("error", [e2]), A(I("database", "fail"), e2).then(() => A(I("database", "complete"), e2)).then(() => (o2(null, e2), F(C, { type: U, content: e2 }), Promise.reject(e2)));
      }
      const a2 = A(I("database", "invoke")), u2 = this._uniClient;
      return a2.then(() => u2.callFunction({ name: "DCloud-clientDB", type: c, data: { action: e, command: t2, multiCommand: n2 } })).then((e2) => {
        const { code: t3, message: n3, token: s3, tokenExpired: r3, systemInfo: a3 = [] } = e2.result;
        if (a3)
          for (let e3 = 0; e3 < a3.length; e3++) {
            const { level: t4, message: n4, detail: s4 } = a3[e3], o3 = console[g === "app" && t4 === "warn" ? "error" : t4] || console.log;
            let r4 = "[System Info]" + n4;
            s4 && (r4 = `${r4}
\u8BE6\u7EC6\u4FE1\u606F\uFF1A${s4}`), o3(r4);
          }
        if (t3) {
          return i2(new B({ code: t3, message: n3, requestId: e2.requestId }));
        }
        e2.result.errCode = e2.result.code, e2.result.errMsg = e2.result.message, s3 && r3 && (at({ token: s3, tokenExpired: r3 }), this._callbackAuth("refreshToken", [{ token: s3, tokenExpired: r3 }]), this._callback("refreshToken", [{ token: s3, tokenExpired: r3 }]), F(R, { token: s3, tokenExpired: r3 }));
        const c2 = [{ prop: "affectedDocs", tips: "affectedDocs\u4E0D\u518D\u63A8\u8350\u4F7F\u7528\uFF0C\u8BF7\u4F7F\u7528inserted/deleted/updated/data.length\u66FF\u4EE3" }, { prop: "code", tips: "code\u4E0D\u518D\u63A8\u8350\u4F7F\u7528\uFF0C\u8BF7\u4F7F\u7528errCode\u66FF\u4EE3" }, { prop: "message", tips: "message\u4E0D\u518D\u63A8\u8350\u4F7F\u7528\uFF0C\u8BF7\u4F7F\u7528errMsg\u66FF\u4EE3" }];
        for (let t4 = 0; t4 < c2.length; t4++) {
          const { prop: n4, tips: s4 } = c2[t4];
          if (n4 in e2.result) {
            const t5 = e2.result[n4];
            Object.defineProperty(e2.result, n4, { get: () => (console.warn(s4), t5) });
          }
        }
        return function(e3) {
          return A(I("database", "success"), e3).then(() => A(I("database", "complete"), e3)).then(() => (o2(e3, null), F(C, { type: U, content: e3 }), Promise.resolve(e3)));
        }(e2);
      }, (e2) => {
        /fc_function_not_found|FUNCTION_NOT_FOUND/g.test(e2.message) && console.warn("clientDB\u672A\u521D\u59CB\u5316\uFF0C\u8BF7\u5728web\u63A7\u5236\u53F0\u4FDD\u5B58\u4E00\u6B21schema\u4EE5\u5F00\u542FclientDB");
        return i2(new B({ code: e2.code || "SYSTEM_ERROR", message: e2.message, requestId: e2.requestId }));
      });
    }
  }
  function Et(e) {
    e.database = function(t2) {
      if (t2 && Object.keys(t2).length > 0)
        return e.init(t2).database();
      if (this._database)
        return this._database;
      const n2 = function(e2, t3 = {}) {
        return kt(new e2(t3), { get: (e3, t4) => St("db", t4) ? bt({ $method: t4 }, null, e3) : function() {
          return bt({ $method: t4, $param: Pt(Array.from(arguments)) }, null, e3);
        } });
      }(Ct, { uniClient: e });
      return this._database = n2, n2;
    };
  }
  const Rt = "token\u65E0\u6548\uFF0C\u8DF3\u8F6C\u767B\u5F55\u9875\u9762", Ut = "token\u8FC7\u671F\uFF0C\u8DF3\u8F6C\u767B\u5F55\u9875\u9762", xt = { TOKEN_INVALID_TOKEN_EXPIRED: Ut, TOKEN_INVALID_INVALID_CLIENTID: Rt, TOKEN_INVALID: Rt, TOKEN_INVALID_WRONG_TOKEN: Rt, TOKEN_INVALID_ANONYMOUS_USER: Rt }, Lt = { "uni-id-token-expired": Ut, "uni-id-check-token-failed": Rt, "uni-id-token-not-exist": Rt, "uni-id-check-device-feature-failed": Rt };
  function Dt(e, t2) {
    let n2 = "";
    return n2 = e ? `${e}/${t2}` : t2, n2.replace(/^\//, "");
  }
  function Nt(e = [], t2 = "") {
    const n2 = [], s2 = [];
    return e.forEach((e2) => {
      e2.needLogin === true ? n2.push(Dt(t2, e2.path)) : e2.needLogin === false && s2.push(Dt(t2, e2.path));
    }), { needLoginPage: n2, notNeedLoginPage: s2 };
  }
  function qt(e) {
    return e.split("?")[0].replace(/^\//, "");
  }
  function Ft() {
    return function(e) {
      let t2 = e && e.$page && e.$page.fullPath || "";
      return t2 ? (t2.charAt(0) !== "/" && (t2 = "/" + t2), t2) : t2;
    }(function() {
      const e = getCurrentPages();
      return e[e.length - 1];
    }());
  }
  function Mt() {
    return qt(Ft());
  }
  function jt(e = "", t2 = {}) {
    if (!e)
      return false;
    if (!(t2 && t2.list && t2.list.length))
      return false;
    const n2 = t2.list, s2 = qt(e);
    return n2.some((e2) => e2.pagePath === s2);
  }
  const $t = !!t.uniIdRouter;
  const { loginPage: Kt, routerNeedLogin: Bt, resToLogin: Ht, needLoginPage: Wt, notNeedLoginPage: zt, loginPageInTabBar: Jt } = function({ pages: e = [], subPackages: n2 = [], uniIdRouter: s2 = {}, tabBar: o2 = {} } = t) {
    const { loginPage: r2, needLogin: i2 = [], resToLogin: a2 = true } = s2, { needLoginPage: c2, notNeedLoginPage: u2 } = Nt(e), { needLoginPage: l2, notNeedLoginPage: h2 } = function(e2 = []) {
      const t2 = [], n3 = [];
      return e2.forEach((e3) => {
        const { root: s3, pages: o3 = [] } = e3, { needLoginPage: r3, notNeedLoginPage: i3 } = Nt(o3, s3);
        t2.push(...r3), n3.push(...i3);
      }), { needLoginPage: t2, notNeedLoginPage: n3 };
    }(n2);
    return { loginPage: r2, routerNeedLogin: i2, resToLogin: a2, needLoginPage: [...c2, ...l2], notNeedLoginPage: [...u2, ...h2], loginPageInTabBar: jt(r2, o2) };
  }();
  if (Wt.indexOf(Kt) > -1)
    throw new Error(`Login page [${Kt}] should not be "needLogin", please check your pages.json`);
  function Vt(e) {
    const t2 = qt(function(e2) {
      const t3 = Mt(), n2 = e2.charAt(0), s2 = e2.split("?")[0];
      if (n2 === "/")
        return s2;
      const o2 = s2.replace(/^\//, "").split("/"), r2 = t3.split("/");
      r2.pop();
      for (let e3 = 0; e3 < o2.length; e3++) {
        const t4 = o2[e3];
        t4 === ".." ? r2.pop() : t4 !== "." && r2.push(t4);
      }
      return r2[0] === "" && r2.shift(), r2.join("/");
    }(e));
    return !(zt.indexOf(t2) > -1) && (Wt.indexOf(t2) > -1 || Bt.some((t3) => function(e2, t4) {
      return new RegExp(t4).test(e2);
    }(e, t3)));
  }
  function Yt({ redirect: e }) {
    const t2 = qt(e), n2 = qt(Kt);
    return Mt() !== n2 && t2 !== n2;
  }
  function Xt({ api: e, redirect: t2 } = {}) {
    if (!t2 || !Yt({ redirect: t2 }))
      return;
    const n2 = function(e2, t3) {
      return e2.charAt(0) !== "/" && (e2 = "/" + e2), t3 ? e2.indexOf("?") > -1 ? e2 + `&uniIdRedirectUrl=${encodeURIComponent(t3)}` : e2 + `?uniIdRedirectUrl=${encodeURIComponent(t3)}` : e2;
    }(Kt, t2);
    Jt ? e !== "navigateTo" && e !== "redirectTo" || (e = "switchTab") : e === "switchTab" && (e = "navigateTo"), setTimeout(() => {
      uni[e]({ url: n2 });
    });
  }
  function Gt({ url: e } = {}) {
    const t2 = { abortLoginPageJump: false, autoToLoginPage: false }, n2 = function() {
      const { token: e2, tokenExpired: t3 } = it();
      let n3;
      if (e2) {
        if (t3 < Date.now()) {
          const e3 = "uni-id-token-expired";
          n3 = { errCode: e3, errMsg: Lt[e3] };
        }
      } else {
        const e3 = "uni-id-check-token-failed";
        n3 = { errCode: e3, errMsg: Lt[e3] };
      }
      return n3;
    }();
    if (Vt(e) && n2) {
      n2.uniIdRedirectUrl = e;
      if (D(E).length > 0)
        return setTimeout(() => {
          F(E, n2);
        }, 0), t2.abortLoginPageJump = true, t2;
      t2.autoToLoginPage = true;
    }
    return t2;
  }
  function Qt() {
    !function() {
      const e2 = Ft(), { abortLoginPageJump: t2, autoToLoginPage: n2 } = Gt({ url: e2 });
      t2 || n2 && Xt({ api: "redirectTo", redirect: e2 });
    }();
    const e = ["navigateTo", "redirectTo", "reLaunch", "switchTab"];
    for (let t2 = 0; t2 < e.length; t2++) {
      const n2 = e[t2];
      uni.addInterceptor(n2, { invoke(e2) {
        const { abortLoginPageJump: t3, autoToLoginPage: s2 } = Gt({ url: e2.url });
        return t3 ? e2 : s2 ? (Xt({ api: n2, redirect: e2.url }), false) : e2;
      } });
    }
  }
  function Zt() {
    this.onResponse((e) => {
      const { type: t2, content: n2 } = e;
      let s2 = false;
      switch (t2) {
        case "cloudobject":
          s2 = function(e2) {
            const { errCode: t3 } = e2;
            return t3 in Lt;
          }(n2);
          break;
        case "clientdb":
          s2 = function(e2) {
            const { errCode: t3 } = e2;
            return t3 in xt;
          }(n2);
      }
      s2 && function(e2 = {}) {
        const t3 = D(E);
        $().then(() => {
          const n3 = Ft();
          if (n3 && Yt({ redirect: n3 }))
            return t3.length > 0 ? F(E, Object.assign({ uniIdRedirectUrl: n3 }, e2)) : void (Kt && Xt({ api: "navigateTo", redirect: n3 }));
        });
      }(n2);
    });
  }
  function en(e) {
    !function(e2) {
      e2.onResponse = function(e3) {
        N(C, e3);
      }, e2.offResponse = function(e3) {
        q(C, e3);
      };
    }(e), function(e2) {
      e2.onNeedLogin = function(e3) {
        N(E, e3);
      }, e2.offNeedLogin = function(e3) {
        q(E, e3);
      }, $t && (k("uni-cloud-status").needLoginInit || (k("uni-cloud-status").needLoginInit = true, $().then(() => {
        Qt.call(e2);
      }), Ht && Zt.call(e2)));
    }(e), function(e2) {
      e2.onRefreshToken = function(e3) {
        N(R, e3);
      }, e2.offRefreshToken = function(e3) {
        q(R, e3);
      };
    }(e);
  }
  let tn;
  const nn = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=", sn = /^(?:[A-Za-z\d+/]{4})*?(?:[A-Za-z\d+/]{2}(?:==)?|[A-Za-z\d+/]{3}=?)?$/;
  function on() {
    const e = it().token || "", t2 = e.split(".");
    if (!e || t2.length !== 3)
      return { uid: null, role: [], permission: [], tokenExpired: 0 };
    let n2;
    try {
      n2 = JSON.parse((s2 = t2[1], decodeURIComponent(tn(s2).split("").map(function(e2) {
        return "%" + ("00" + e2.charCodeAt(0).toString(16)).slice(-2);
      }).join(""))));
    } catch (e2) {
      throw new Error("\u83B7\u53D6\u5F53\u524D\u7528\u6237\u4FE1\u606F\u51FA\u9519\uFF0C\u8BE6\u7EC6\u9519\u8BEF\u4FE1\u606F\u4E3A\uFF1A" + e2.message);
    }
    var s2;
    return n2.tokenExpired = 1e3 * n2.exp, delete n2.exp, delete n2.iat, n2;
  }
  tn = typeof atob != "function" ? function(e) {
    if (e = String(e).replace(/[\t\n\f\r ]+/g, ""), !sn.test(e))
      throw new Error("Failed to execute 'atob' on 'Window': The string to be decoded is not correctly encoded.");
    var t2;
    e += "==".slice(2 - (3 & e.length));
    for (var n2, s2, o2 = "", r2 = 0; r2 < e.length; )
      t2 = nn.indexOf(e.charAt(r2++)) << 18 | nn.indexOf(e.charAt(r2++)) << 12 | (n2 = nn.indexOf(e.charAt(r2++))) << 6 | (s2 = nn.indexOf(e.charAt(r2++))), o2 += n2 === 64 ? String.fromCharCode(t2 >> 16 & 255) : s2 === 64 ? String.fromCharCode(t2 >> 16 & 255, t2 >> 8 & 255) : String.fromCharCode(t2 >> 16 & 255, t2 >> 8 & 255, 255 & t2);
    return o2;
  } : atob;
  var rn = s(function(e, t2) {
    Object.defineProperty(t2, "__esModule", { value: true });
    const n2 = "chooseAndUploadFile:ok", s2 = "chooseAndUploadFile:fail";
    function o2(e2, t3) {
      return e2.tempFiles.forEach((e3, n3) => {
        e3.name || (e3.name = e3.path.substring(e3.path.lastIndexOf("/") + 1)), t3 && (e3.fileType = t3), e3.cloudPath = Date.now() + "_" + n3 + e3.name.substring(e3.name.lastIndexOf("."));
      }), e2.tempFilePaths || (e2.tempFilePaths = e2.tempFiles.map((e3) => e3.path)), e2;
    }
    function r2(e2, t3, { onChooseFile: s3, onUploadProgress: o3 }) {
      return t3.then((e3) => {
        if (s3) {
          const t4 = s3(e3);
          if (t4 !== void 0)
            return Promise.resolve(t4).then((t5) => t5 === void 0 ? e3 : t5);
        }
        return e3;
      }).then((t4) => t4 === false ? { errMsg: n2, tempFilePaths: [], tempFiles: [] } : function(e3, t5, s4 = 5, o4) {
        (t5 = Object.assign({}, t5)).errMsg = n2;
        const r3 = t5.tempFiles, i2 = r3.length;
        let a2 = 0;
        return new Promise((n3) => {
          for (; a2 < s4; )
            c2();
          function c2() {
            const s5 = a2++;
            if (s5 >= i2)
              return void (!r3.find((e4) => !e4.url && !e4.errMsg) && n3(t5));
            const u2 = r3[s5];
            e3.uploadFile({ filePath: u2.path, cloudPath: u2.cloudPath, fileType: u2.fileType, onUploadProgress(e4) {
              e4.index = s5, e4.tempFile = u2, e4.tempFilePath = u2.path, o4 && o4(e4);
            } }).then((e4) => {
              u2.url = e4.fileID, s5 < i2 && c2();
            }).catch((e4) => {
              u2.errMsg = e4.errMsg || e4.message, s5 < i2 && c2();
            });
          }
        });
      }(e2, t4, 5, o3));
    }
    t2.initChooseAndUploadFile = function(e2) {
      return function(t3 = { type: "all" }) {
        return t3.type === "image" ? r2(e2, function(e3) {
          const { count: t4, sizeType: n3, sourceType: r3 = ["album", "camera"], extension: i2 } = e3;
          return new Promise((e4, a2) => {
            uni.chooseImage({ count: t4, sizeType: n3, sourceType: r3, extension: i2, success(t5) {
              e4(o2(t5, "image"));
            }, fail(e5) {
              a2({ errMsg: e5.errMsg.replace("chooseImage:fail", s2) });
            } });
          });
        }(t3), t3) : t3.type === "video" ? r2(e2, function(e3) {
          const { camera: t4, compressed: n3, maxDuration: r3, sourceType: i2 = ["album", "camera"], extension: a2 } = e3;
          return new Promise((e4, c2) => {
            uni.chooseVideo({ camera: t4, compressed: n3, maxDuration: r3, sourceType: i2, extension: a2, success(t5) {
              const { tempFilePath: n4, duration: s3, size: r4, height: i3, width: a3 } = t5;
              e4(o2({ errMsg: "chooseVideo:ok", tempFilePaths: [n4], tempFiles: [{ name: t5.tempFile && t5.tempFile.name || "", path: n4, size: r4, type: t5.tempFile && t5.tempFile.type || "", width: a3, height: i3, duration: s3, fileType: "video", cloudPath: "" }] }, "video"));
            }, fail(e5) {
              c2({ errMsg: e5.errMsg.replace("chooseVideo:fail", s2) });
            } });
          });
        }(t3), t3) : r2(e2, function(e3) {
          const { count: t4, extension: n3 } = e3;
          return new Promise((e4, r3) => {
            let i2 = uni.chooseFile;
            if (typeof wx != "undefined" && typeof wx.chooseMessageFile == "function" && (i2 = wx.chooseMessageFile), typeof i2 != "function")
              return r3({ errMsg: s2 + " \u8BF7\u6307\u5B9A type \u7C7B\u578B\uFF0C\u8BE5\u5E73\u53F0\u4EC5\u652F\u6301\u9009\u62E9 image \u6216 video\u3002" });
            i2({ type: "all", count: t4, extension: n3, success(t5) {
              e4(o2(t5));
            }, fail(e5) {
              r3({ errMsg: e5.errMsg.replace("chooseFile:fail", s2) });
            } });
          });
        }(t3), t3);
      };
    };
  }), an = n(rn);
  const cn = "manual";
  function un(e) {
    return { props: { localdata: { type: Array, default: () => [] }, options: { type: [Object, Array], default: () => ({}) }, spaceInfo: { type: Object, default: () => ({}) }, collection: { type: [String, Array], default: "" }, action: { type: String, default: "" }, field: { type: String, default: "" }, orderby: { type: String, default: "" }, where: { type: [String, Object], default: "" }, pageData: { type: String, default: "add" }, pageCurrent: { type: Number, default: 1 }, pageSize: { type: Number, default: 20 }, getcount: { type: [Boolean, String], default: false }, gettree: { type: [Boolean, String], default: false }, gettreepath: { type: [Boolean, String], default: false }, startwith: { type: String, default: "" }, limitlevel: { type: Number, default: 10 }, groupby: { type: String, default: "" }, groupField: { type: String, default: "" }, distinct: { type: [Boolean, String], default: false }, foreignKey: { type: String, default: "" }, loadtime: { type: String, default: "auto" }, manual: { type: Boolean, default: false } }, data: () => ({ mixinDatacomLoading: false, mixinDatacomHasMore: false, mixinDatacomResData: [], mixinDatacomErrorMessage: "", mixinDatacomPage: {} }), created() {
      this.mixinDatacomPage = { current: this.pageCurrent, size: this.pageSize, count: 0 }, this.$watch(() => {
        var e2 = [];
        return ["pageCurrent", "pageSize", "localdata", "collection", "action", "field", "orderby", "where", "getont", "getcount", "gettree", "groupby", "groupField", "distinct"].forEach((t2) => {
          e2.push(this[t2]);
        }), e2;
      }, (e2, t2) => {
        if (this.loadtime === cn)
          return;
        let n2 = false;
        const s2 = [];
        for (let o2 = 2; o2 < e2.length; o2++)
          e2[o2] !== t2[o2] && (s2.push(e2[o2]), n2 = true);
        e2[0] !== t2[0] && (this.mixinDatacomPage.current = this.pageCurrent), this.mixinDatacomPage.size = this.pageSize, this.onMixinDatacomPropsChange(n2, s2);
      });
    }, methods: { onMixinDatacomPropsChange(e2, t2) {
    }, mixinDatacomEasyGet({ getone: e2 = false, success: t2, fail: n2 } = {}) {
      this.mixinDatacomLoading || (this.mixinDatacomLoading = true, this.mixinDatacomErrorMessage = "", this.mixinDatacomGet().then((n3) => {
        this.mixinDatacomLoading = false;
        const { data: s2, count: o2 } = n3.result;
        this.getcount && (this.mixinDatacomPage.count = o2), this.mixinDatacomHasMore = s2.length < this.pageSize;
        const r2 = e2 ? s2.length ? s2[0] : void 0 : s2;
        this.mixinDatacomResData = r2, t2 && t2(r2);
      }).catch((e3) => {
        this.mixinDatacomLoading = false, this.mixinDatacomErrorMessage = e3, n2 && n2(e3);
      }));
    }, mixinDatacomGet(t2 = {}) {
      let n2 = e.database(this.spaceInfo);
      const s2 = t2.action || this.action;
      s2 && (n2 = n2.action(s2));
      const o2 = t2.collection || this.collection;
      n2 = Array.isArray(o2) ? n2.collection(...o2) : n2.collection(o2);
      const r2 = t2.where || this.where;
      r2 && Object.keys(r2).length && (n2 = n2.where(r2));
      const i2 = t2.field || this.field;
      i2 && (n2 = n2.field(i2));
      const a2 = t2.foreignKey || this.foreignKey;
      a2 && (n2 = n2.foreignKey(a2));
      const c2 = t2.groupby || this.groupby;
      c2 && (n2 = n2.groupBy(c2));
      const u2 = t2.groupField || this.groupField;
      u2 && (n2 = n2.groupField(u2));
      (t2.distinct !== void 0 ? t2.distinct : this.distinct) === true && (n2 = n2.distinct());
      const l2 = t2.orderby || this.orderby;
      l2 && (n2 = n2.orderBy(l2));
      const h2 = t2.pageCurrent !== void 0 ? t2.pageCurrent : this.mixinDatacomPage.current, d2 = t2.pageSize !== void 0 ? t2.pageSize : this.mixinDatacomPage.size, f2 = t2.getcount !== void 0 ? t2.getcount : this.getcount, g2 = t2.gettree !== void 0 ? t2.gettree : this.gettree, p2 = t2.gettreepath !== void 0 ? t2.gettreepath : this.gettreepath, m2 = { getCount: f2 }, y = { limitLevel: t2.limitlevel !== void 0 ? t2.limitlevel : this.limitlevel, startWith: t2.startwith !== void 0 ? t2.startwith : this.startwith };
      return g2 && (m2.getTree = y), p2 && (m2.getTreePath = y), n2 = n2.skip(d2 * (h2 - 1)).limit(d2).get(m2), n2;
    } } };
  }
  function ln(e) {
    return function(t2, n2 = {}) {
      n2 = function(e2, t3 = {}) {
        return e2.customUI = t3.customUI || e2.customUI, Object.assign(e2.loadingOptions, t3.loadingOptions), Object.assign(e2.errorOptions, t3.errorOptions), typeof t3.secretMethods == "object" && (e2.secretMethods = t3.secretMethods), e2;
      }({ customUI: false, loadingOptions: { title: "\u52A0\u8F7D\u4E2D...", mask: true }, errorOptions: { type: "modal", retry: false } }, n2);
      const { customUI: s2, loadingOptions: o2, errorOptions: r2 } = n2, i2 = !s2;
      return new Proxy({}, { get: (s3, c2) => function({ fn: e2, interceptorName: t3, getCallbackArgs: n3 } = {}) {
        return async function(...s4) {
          const o3 = n3 ? n3({ params: s4 }) : {};
          let r3, i3;
          try {
            return await A(I(t3, "invoke"), __spreadValues({}, o3)), r3 = await e2(...s4), await A(I(t3, "success"), __spreadProps(__spreadValues({}, o3), { result: r3 })), r3;
          } catch (e3) {
            throw i3 = e3, await A(I(t3, "fail"), __spreadProps(__spreadValues({}, o3), { error: i3 })), i3;
          } finally {
            await A(I(t3, "complete"), i3 ? __spreadProps(__spreadValues({}, o3), { error: i3 }) : __spreadProps(__spreadValues({}, o3), { result: r3 }));
          }
        };
      }({ fn: async function s4(...u2) {
        let l2;
        i2 && uni.showLoading({ title: o2.title, mask: o2.mask });
        const h2 = { name: t2, type: a, data: { method: c2, params: u2 } };
        typeof n2.secretMethods == "object" && function(e2, t3) {
          const n3 = t3.data.method, s5 = e2.secretMethods[n3];
          s5 && (t3.secret = s5);
        }(n2, h2);
        try {
          l2 = await e.callFunction(h2);
        } catch (e2) {
          l2 = { result: e2 };
        }
        const { errCode: d2, errMsg: f2, newToken: g2 } = l2.result || {};
        if (i2 && uni.hideLoading(), g2 && g2.token && g2.tokenExpired && (at(g2), F(R, __spreadValues({}, g2))), d2) {
          if (i2)
            if (r2.type === "toast")
              uni.showToast({ title: f2, icon: "none" });
            else {
              if (r2.type !== "modal")
                throw new Error(`Invalid errorOptions.type: ${r2.type}`);
              {
                const { confirm: e3 } = await async function({ title: e4, content: t3, showCancel: n3, cancelText: s5, confirmText: o3 } = {}) {
                  return new Promise((r3, i3) => {
                    uni.showModal({ title: e4, content: t3, showCancel: n3, cancelText: s5, confirmText: o3, success(e5) {
                      r3(e5);
                    }, fail() {
                      r3({ confirm: false, cancel: true });
                    } });
                  });
                }({ title: "\u63D0\u793A", content: f2, showCancel: r2.retry, cancelText: "\u53D6\u6D88", confirmText: r2.retry ? "\u91CD\u8BD5" : "\u786E\u5B9A" });
                if (r2.retry && e3)
                  return s4(...u2);
              }
            }
          const e2 = new B({ code: d2, message: f2, requestId: l2.requestId });
          throw e2.detail = l2.result, F(C, { type: L, content: e2 }), e2;
        }
        return F(C, { type: L, content: l2.result }), l2.result;
      }, interceptorName: "callObject", getCallbackArgs: function({ params: e2 } = {}) {
        return { objectName: t2, methodName: c2, params: e2 };
      } }) });
    };
  }
  async function hn(e, t2) {
    const n2 = `http://${e}:${t2}/system/ping`;
    try {
      const e2 = await (s2 = { url: n2, timeout: 500 }, new Promise((e3, t3) => {
        V.request(__spreadProps(__spreadValues({}, s2), { success(t4) {
          e3(t4);
        }, fail(e4) {
          t3(e4);
        } }));
      }));
      return !(!e2.data || e2.data.code !== 0);
    } catch (e2) {
      return false;
    }
    var s2;
  }
  function dn(e) {
    if (e.initUniCloudStatus && e.initUniCloudStatus !== "rejected")
      return;
    let t2 = Promise.resolve();
    var n2;
    n2 = 1, t2 = new Promise((e2, t3) => {
      setTimeout(() => {
        e2();
      }, n2);
    }), e.isReady = false, e.isDefault = false;
    const s2 = e.auth();
    e.initUniCloudStatus = "pending", e.initUniCloud = t2.then(() => s2.getLoginState()).then((e2) => e2 ? Promise.resolve() : s2.signInAnonymously()).then(() => {
      if (g === "app") {
        const { osName: e2, osVersion: t3 } = uni.getSystemInfoSync();
        e2 === "ios" && function(e3) {
          if (!e3 || typeof e3 != "string")
            return 0;
          const t4 = e3.match(/^(\d+)./);
          return t4 && t4[1] ? parseInt(t4[1]) : 0;
        }(t3) >= 14 && console.warn("iOS 14\u53CA\u4EE5\u4E0A\u7248\u672C\u8FDE\u63A5uniCloud\u672C\u5730\u8C03\u8BD5\u670D\u52A1\u9700\u8981\u5141\u8BB8\u5BA2\u6237\u7AEF\u67E5\u627E\u5E76\u8FDE\u63A5\u5230\u672C\u5730\u7F51\u7EDC\u4E0A\u7684\u8BBE\u5907\uFF08\u4EC5\u5F00\u53D1\u6A21\u5F0F\u751F\u6548\uFF0C\u53D1\u884C\u6A21\u5F0F\u4F1A\u8FDE\u63A5uniCloud\u4E91\u7AEF\u670D\u52A1\uFF09");
      }
      if (e.__dev__.debugInfo) {
        const { address: t3, servePort: n3 } = e.__dev__.debugInfo;
        return async function(e2, t4) {
          let n4;
          for (let s3 = 0; s3 < e2.length; s3++) {
            const o2 = e2[s3];
            if (await hn(o2, t4)) {
              n4 = o2;
              break;
            }
          }
          return { address: n4, port: t4 };
        }(t3, n3);
      }
    }).then(({ address: t3, port: n3 } = {}) => {
      const s3 = console[g === "app" ? "error" : "warn"];
      if (t3)
        e.__dev__.localAddress = t3, e.__dev__.localPort = n3;
      else if (e.__dev__.debugInfo) {
        let t4 = "";
        e.__dev__.debugInfo.initialLaunchType === "remote" ? (e.__dev__.debugInfo.forceRemote = true, t4 = "\u5F53\u524D\u5BA2\u6237\u7AEF\u548CHBuilderX\u4E0D\u5728\u540C\u4E00\u5C40\u57DF\u7F51\u4E0B\uFF08\u6216\u5176\u4ED6\u7F51\u7EDC\u539F\u56E0\u65E0\u6CD5\u8FDE\u63A5HBuilderX\uFF09\uFF0CuniCloud\u672C\u5730\u8C03\u8BD5\u670D\u52A1\u4E0D\u5BF9\u5F53\u524D\u5BA2\u6237\u7AEF\u751F\u6548\u3002\n- \u5982\u679C\u4E0D\u4F7F\u7528uniCloud\u672C\u5730\u8C03\u8BD5\u670D\u52A1\uFF0C\u8BF7\u76F4\u63A5\u5FFD\u7565\u6B64\u4FE1\u606F\u3002\n- \u5982\u9700\u4F7F\u7528uniCloud\u672C\u5730\u8C03\u8BD5\u670D\u52A1\uFF0C\u8BF7\u5C06\u5BA2\u6237\u7AEF\u4E0E\u4E3B\u673A\u8FDE\u63A5\u5230\u540C\u4E00\u5C40\u57DF\u7F51\u4E0B\u5E76\u91CD\u65B0\u8FD0\u884C\u5230\u5BA2\u6237\u7AEF\u3002\n- \u5982\u679C\u5728HBuilderX\u5F00\u542F\u7684\u72B6\u6001\u4E0B\u5207\u6362\u8FC7\u7F51\u7EDC\u73AF\u5883\uFF0C\u8BF7\u91CD\u542FHBuilderX\u540E\u518D\u8BD5\n- \u68C0\u67E5\u7CFB\u7EDF\u9632\u706B\u5899\u662F\u5426\u62E6\u622A\u4E86HBuilderX\u81EA\u5E26\u7684nodejs") : t4 = "\u65E0\u6CD5\u8FDE\u63A5uniCloud\u672C\u5730\u8C03\u8BD5\u670D\u52A1\uFF0C\u8BF7\u68C0\u67E5\u5F53\u524D\u5BA2\u6237\u7AEF\u662F\u5426\u4E0E\u4E3B\u673A\u5728\u540C\u4E00\u5C40\u57DF\u7F51\u4E0B\u3002\n- \u5982\u9700\u4F7F\u7528uniCloud\u672C\u5730\u8C03\u8BD5\u670D\u52A1\uFF0C\u8BF7\u5C06\u5BA2\u6237\u7AEF\u4E0E\u4E3B\u673A\u8FDE\u63A5\u5230\u540C\u4E00\u5C40\u57DF\u7F51\u4E0B\u5E76\u91CD\u65B0\u8FD0\u884C\u5230\u5BA2\u6237\u7AEF\u3002\n- \u5982\u679C\u5728HBuilderX\u5F00\u542F\u7684\u72B6\u6001\u4E0B\u5207\u6362\u8FC7\u7F51\u7EDC\u73AF\u5883\uFF0C\u8BF7\u91CD\u542FHBuilderX\u540E\u518D\u8BD5\n- \u68C0\u67E5\u7CFB\u7EDF\u9632\u706B\u5899\u662F\u5426\u62E6\u622A\u4E86HBuilderX\u81EA\u5E26\u7684nodejs", g === "web" && (t4 += "\n- \u90E8\u5206\u6D4F\u89C8\u5668\u5F00\u542F\u8282\u6D41\u6A21\u5F0F\u4E4B\u540E\u8BBF\u95EE\u672C\u5730\u5730\u5740\u53D7\u9650\uFF0C\u8BF7\u68C0\u67E5\u662F\u5426\u542F\u7528\u4E86\u8282\u6D41\u6A21\u5F0F"), g.indexOf("mp-") === 0 && (t4 += "\n- \u5C0F\u7A0B\u5E8F\u4E2D\u5982\u4F55\u4F7F\u7528uniCloud\uFF0C\u8BF7\u53C2\u8003\uFF1Ahttps://uniapp.dcloud.net.cn/uniCloud/publish.html#useinmp"), s3(t4);
      }
    }).then(() => {
      ct(), e.isReady = true, e.initUniCloudStatus = "fulfilled";
    }).catch((t3) => {
      console.error(t3), e.initUniCloudStatus = "rejected";
    });
  }
  const fn = { tcb: ot, tencent: ot, aliyun: Q, private: lt };
  let gn = new class {
    init(e) {
      let t2 = {};
      const n2 = fn[e.provider];
      if (!n2)
        throw new Error("\u672A\u63D0\u4F9B\u6B63\u786E\u7684provider\u53C2\u6570");
      t2 = n2.init(e), t2.__dev__ = {}, t2.__dev__.debugLog = g === "web" && navigator.userAgent.indexOf("HBuilderX") > 0 || g === "app";
      const s2 = p;
      s2 && !s2.code && (t2.__dev__.debugInfo = s2), dn(t2), t2.reInit = function() {
        dn(this);
      }, _t(t2), function(e2) {
        const t3 = e2.uploadFile;
        e2.uploadFile = function(e3) {
          return t3.call(this, e3);
        };
      }(t2), Et(t2), function(e2) {
        e2.getCurrentUserInfo = on, e2.chooseAndUploadFile = an.initChooseAndUploadFile(e2), Object.assign(e2, { get mixinDatacom() {
          return un(e2);
        } }), e2.importObject = ln(e2);
      }(t2);
      return ["callFunction", "uploadFile", "deleteFile", "getTempFileURL", "downloadFile", "chooseAndUploadFile"].forEach((e2) => {
        if (!t2[e2])
          return;
        const n3 = t2[e2];
        t2[e2] = function() {
          return t2.reInit(), n3.apply(t2, Array.from(arguments));
        }, t2[e2] = K(t2[e2], e2).bind(t2);
      }), t2.init = this.init, t2;
    }
  }();
  (() => {
    const e = m;
    let t2 = {};
    if (e && e.length === 1)
      t2 = e[0], gn = gn.init(t2), gn.isDefault = true;
    else {
      const t3 = ["auth", "callFunction", "uploadFile", "deleteFile", "getTempFileURL", "downloadFile", "database", "getCurrentUSerInfo", "importObject"];
      let n2;
      n2 = e && e.length > 0 ? "\u5E94\u7528\u6709\u591A\u4E2A\u670D\u52A1\u7A7A\u95F4\uFF0C\u8BF7\u901A\u8FC7uniCloud.init\u65B9\u6CD5\u6307\u5B9A\u8981\u4F7F\u7528\u7684\u670D\u52A1\u7A7A\u95F4" : "\u5E94\u7528\u672A\u5173\u8054\u670D\u52A1\u7A7A\u95F4\uFF0C\u8BF7\u5728uniCloud\u76EE\u5F55\u53F3\u952E\u5173\u8054\u670D\u52A1\u7A7A\u95F4", t3.forEach((e2) => {
        gn[e2] = function() {
          return console.error(n2), Promise.reject(new B({ code: "SYS_ERR", message: n2 }));
        };
      });
    }
    Object.assign(gn, { get mixinDatacom() {
      return un(gn);
    } }), en(gn), gn.addInterceptor = S, gn.removeInterceptor = P, gn.interceptObject = b, g === "web" && (window.uniCloud = gn);
  })();
  var pn = gn;
  const ERR_MSG_OK = "chooseAndUploadFile:ok";
  const ERR_MSG_FAIL = "chooseAndUploadFile:fail";
  function chooseImage(opts) {
    const {
      count,
      sizeType = ["original", "compressed"],
      sourceType = ["album", "camera"],
      extension
    } = opts;
    return new Promise((resolve, reject) => {
      uni.chooseImage({
        count,
        sizeType,
        sourceType,
        extension,
        success(res) {
          resolve(normalizeChooseAndUploadFileRes(res, "image"));
        },
        fail(res) {
          reject({
            errMsg: res.errMsg.replace("chooseImage:fail", ERR_MSG_FAIL)
          });
        }
      });
    });
  }
  function chooseVideo(opts) {
    const {
      camera,
      compressed,
      maxDuration,
      sourceType = ["album", "camera"],
      extension
    } = opts;
    return new Promise((resolve, reject) => {
      uni.chooseVideo({
        camera,
        compressed,
        maxDuration,
        sourceType,
        extension,
        success(res) {
          const {
            tempFilePath,
            duration,
            size,
            height,
            width
          } = res;
          resolve(normalizeChooseAndUploadFileRes({
            errMsg: "chooseVideo:ok",
            tempFilePaths: [tempFilePath],
            tempFiles: [
              {
                name: res.tempFile && res.tempFile.name || "",
                path: tempFilePath,
                size,
                type: res.tempFile && res.tempFile.type || "",
                width,
                height,
                duration,
                fileType: "video",
                cloudPath: ""
              }
            ]
          }, "video"));
        },
        fail(res) {
          reject({
            errMsg: res.errMsg.replace("chooseVideo:fail", ERR_MSG_FAIL)
          });
        }
      });
    });
  }
  function chooseAll(opts) {
    const {
      count,
      extension
    } = opts;
    return new Promise((resolve, reject) => {
      let chooseFile = uni.chooseFile;
      if (typeof wx !== "undefined" && typeof wx.chooseMessageFile === "function") {
        chooseFile = wx.chooseMessageFile;
      }
      if (typeof chooseFile !== "function") {
        return reject({
          errMsg: ERR_MSG_FAIL + " \u8BF7\u6307\u5B9A type \u7C7B\u578B\uFF0C\u8BE5\u5E73\u53F0\u4EC5\u652F\u6301\u9009\u62E9 image \u6216 video\u3002"
        });
      }
      chooseFile({
        type: "all",
        count,
        extension,
        success(res) {
          resolve(normalizeChooseAndUploadFileRes(res));
        },
        fail(res) {
          reject({
            errMsg: res.errMsg.replace("chooseFile:fail", ERR_MSG_FAIL)
          });
        }
      });
    });
  }
  function normalizeChooseAndUploadFileRes(res, fileType) {
    res.tempFiles.forEach((item, index) => {
      if (!item.name) {
        item.name = item.path.substring(item.path.lastIndexOf("/") + 1);
      }
      if (fileType) {
        item.fileType = fileType;
      }
      item.cloudPath = Date.now() + "_" + index + item.name.substring(item.name.lastIndexOf("."));
    });
    if (!res.tempFilePaths) {
      res.tempFilePaths = res.tempFiles.map((file) => file.path);
    }
    return res;
  }
  function uploadCloudFiles(files, max = 5, onUploadProgress) {
    files = JSON.parse(JSON.stringify(files));
    const len = files.length;
    let count = 0;
    let self = this;
    return new Promise((resolve) => {
      while (count < max) {
        next();
      }
      function next() {
        let cur = count++;
        if (cur >= len) {
          !files.find((item) => !item.url && !item.errMsg) && resolve(files);
          return;
        }
        const fileItem = files[cur];
        const index = self.files.findIndex((v2) => v2.uuid === fileItem.uuid);
        fileItem.url = "";
        delete fileItem.errMsg;
        pn.uploadFile({
          filePath: fileItem.path,
          cloudPath: fileItem.cloudPath,
          fileType: fileItem.fileType,
          onUploadProgress: (res) => {
            res.index = index;
            onUploadProgress && onUploadProgress(res);
          }
        }).then((res) => {
          fileItem.url = res.fileID;
          fileItem.index = index;
          if (cur < len) {
            next();
          }
        }).catch((res) => {
          fileItem.errMsg = res.errMsg || res.message;
          fileItem.index = index;
          if (cur < len) {
            next();
          }
        });
      }
    });
  }
  function uploadFiles(choosePromise, {
    onChooseFile,
    onUploadProgress
  }) {
    return choosePromise.then((res) => {
      if (onChooseFile) {
        const customChooseRes = onChooseFile(res);
        if (typeof customChooseRes !== "undefined") {
          return Promise.resolve(customChooseRes).then((chooseRes) => typeof chooseRes === "undefined" ? res : chooseRes);
        }
      }
      return res;
    }).then((res) => {
      if (res === false) {
        return {
          errMsg: ERR_MSG_OK,
          tempFilePaths: [],
          tempFiles: []
        };
      }
      return res;
    });
  }
  function chooseAndUploadFile(opts = {
    type: "all"
  }) {
    if (opts.type === "image") {
      return uploadFiles(chooseImage(opts), opts);
    } else if (opts.type === "video") {
      return uploadFiles(chooseVideo(opts), opts);
    }
    return uploadFiles(chooseAll(opts), opts);
  }
  const get_file_ext = (name) => {
    const last_len = name.lastIndexOf(".");
    const len = name.length;
    return {
      name: name.substring(0, last_len),
      ext: name.substring(last_len + 1, len)
    };
  };
  const get_extname = (fileExtname) => {
    if (!Array.isArray(fileExtname)) {
      let extname = fileExtname.replace(/(\[|\])/g, "");
      return extname.split(",");
    } else {
      return fileExtname;
    }
  };
  const get_files_and_is_max = (res, _extname) => {
    let filePaths = [];
    let files = [];
    if (!_extname || _extname.length === 0) {
      return {
        filePaths,
        files
      };
    }
    res.tempFiles.forEach((v2) => {
      let fileFullName = get_file_ext(v2.name);
      const extname = fileFullName.ext.toLowerCase();
      if (_extname.indexOf(extname) !== -1) {
        files.push(v2);
        filePaths.push(v2.path);
      }
    });
    if (files.length !== res.tempFiles.length) {
      uni.showToast({
        title: `\u5F53\u524D\u9009\u62E9\u4E86${res.tempFiles.length}\u4E2A\u6587\u4EF6 \uFF0C${res.tempFiles.length - files.length} \u4E2A\u6587\u4EF6\u683C\u5F0F\u4E0D\u6B63\u786E`,
        icon: "none",
        duration: 5e3
      });
    }
    return {
      filePaths,
      files
    };
  };
  const get_file_info = (filepath) => {
    return new Promise((resolve, reject) => {
      uni.getImageInfo({
        src: filepath,
        success(res) {
          resolve(res);
        },
        fail(err) {
          reject(err);
        }
      });
    });
  };
  const get_file_data = async (files, type = "image") => {
    let fileFullName = get_file_ext(files.name);
    const extname = fileFullName.ext.toLowerCase();
    let filedata = {
      name: files.name,
      uuid: files.uuid,
      extname: extname || "",
      cloudPath: files.cloudPath,
      fileType: files.fileType,
      url: files.path || files.path,
      size: files.size,
      image: {},
      path: files.path,
      video: {}
    };
    if (type === "image") {
      const imageinfo = await get_file_info(files.path);
      delete filedata.video;
      filedata.image.width = imageinfo.width;
      filedata.image.height = imageinfo.height;
      filedata.image.location = imageinfo.path;
    } else {
      delete filedata.image;
    }
    return filedata;
  };
  const _sfc_main$8 = {
    name: "uploadImage",
    emits: ["uploadFiles", "choose", "delFile"],
    props: {
      filesList: {
        type: Array,
        default() {
          return [];
        }
      },
      disabled: {
        type: Boolean,
        default: false
      },
      disablePreview: {
        type: Boolean,
        default: false
      },
      limit: {
        type: [Number, String],
        default: 9
      },
      imageStyles: {
        type: Object,
        default() {
          return {
            width: "auto",
            height: "auto",
            border: {}
          };
        }
      },
      delIcon: {
        type: Boolean,
        default: true
      },
      readonly: {
        type: Boolean,
        default: false
      }
    },
    computed: {
      styles() {
        let styles = {
          width: "auto",
          height: "auto",
          border: {}
        };
        return Object.assign(styles, this.imageStyles);
      },
      boxStyle() {
        const {
          width = "auto",
          height = "auto"
        } = this.styles;
        let obj = {};
        if (height === "auto") {
          if (width !== "auto") {
            obj.height = this.value2px(width);
            obj["padding-top"] = 0;
          } else {
            obj.height = 0;
          }
        } else {
          obj.height = this.value2px(height);
          obj["padding-top"] = 0;
        }
        if (width === "auto") {
          if (height !== "auto") {
            obj.width = this.value2px(height);
          } else {
            obj.width = "33.3%";
          }
        } else {
          obj.width = this.value2px(width);
        }
        let classles = "";
        for (let i2 in obj) {
          classles += `${i2}:${obj[i2]};`;
        }
        return classles;
      },
      borderStyle() {
        let {
          border
        } = this.styles;
        let obj = {};
        const widthDefaultValue = 1;
        const radiusDefaultValue = 3;
        if (typeof border === "boolean") {
          obj.border = border ? "1px #eee solid" : "none";
        } else {
          let width = border && border.width || widthDefaultValue;
          width = this.value2px(width);
          let radius = border && border.radius || radiusDefaultValue;
          radius = this.value2px(radius);
          obj = {
            "border-width": width,
            "border-style": border && border.style || "solid",
            "border-color": border && border.color || "#eee",
            "border-radius": radius
          };
        }
        let classles = "";
        for (let i2 in obj) {
          classles += `${i2}:${obj[i2]};`;
        }
        return classles;
      }
    },
    methods: {
      uploadFiles(item, index) {
        this.$emit("uploadFiles", item);
      },
      choose() {
        this.$emit("choose");
      },
      delFile(index) {
        this.$emit("delFile", index);
      },
      prviewImage(img, index) {
        let urls = [];
        if (Number(this.limit) === 1 && this.disablePreview && !this.disabled) {
          this.$emit("choose");
        }
        if (this.disablePreview)
          return;
        this.filesList.forEach((i2) => {
          urls.push(i2.url);
        });
        uni.previewImage({
          urls,
          current: index
        });
      },
      value2px(value) {
        if (typeof value === "number") {
          value += "px";
        } else {
          if (value.indexOf("%") === -1) {
            value = value.indexOf("px") !== -1 ? value : value + "px";
          }
        }
        return value;
      }
    }
  };
  function _sfc_render$2(_ctx, _cache, $props, $setup, $data, $options) {
    return vue.openBlock(), vue.createElementBlock("view", { class: "uni-file-picker__container" }, [
      (vue.openBlock(true), vue.createElementBlock(vue.Fragment, null, vue.renderList($props.filesList, (item, index) => {
        return vue.openBlock(), vue.createElementBlock("view", {
          class: "file-picker__box",
          key: index,
          style: vue.normalizeStyle($options.boxStyle)
        }, [
          vue.createElementVNode("view", {
            class: "file-picker__box-content",
            style: vue.normalizeStyle($options.borderStyle)
          }, [
            vue.createElementVNode("image", {
              class: "file-image",
              src: item.url,
              mode: "aspectFill",
              onClick: vue.withModifiers(($event) => $options.prviewImage(item, index), ["stop"])
            }, null, 8, ["src", "onClick"]),
            $props.delIcon && !$props.readonly ? (vue.openBlock(), vue.createElementBlock("view", {
              key: 0,
              class: "icon-del-box",
              onClick: vue.withModifiers(($event) => $options.delFile(index), ["stop"])
            }, [
              vue.createElementVNode("view", { class: "icon-del" }),
              vue.createElementVNode("view", { class: "icon-del rotate" })
            ], 8, ["onClick"])) : vue.createCommentVNode("v-if", true),
            item.progress && item.progress !== 100 || item.progress === 0 ? (vue.openBlock(), vue.createElementBlock("view", {
              key: 1,
              class: "file-picker__progress"
            }, [
              vue.createElementVNode("progress", {
                class: "file-picker__progress-item",
                percent: item.progress === -1 ? 0 : item.progress,
                "stroke-width": "4",
                backgroundColor: item.errMsg ? "#ff5a5f" : "#EBEBEB"
              }, null, 8, ["percent", "backgroundColor"])
            ])) : vue.createCommentVNode("v-if", true),
            item.errMsg ? (vue.openBlock(), vue.createElementBlock("view", {
              key: 2,
              class: "file-picker__mask",
              onClick: vue.withModifiers(($event) => $options.uploadFiles(item, index), ["stop"])
            }, " \u70B9\u51FB\u91CD\u8BD5 ", 8, ["onClick"])) : vue.createCommentVNode("v-if", true)
          ], 4)
        ], 4);
      }), 128)),
      $props.filesList.length < $props.limit && !$props.readonly ? (vue.openBlock(), vue.createElementBlock("view", {
        key: 0,
        class: "file-picker__box",
        style: vue.normalizeStyle($options.boxStyle)
      }, [
        vue.createElementVNode("view", {
          class: "file-picker__box-content is-add",
          style: vue.normalizeStyle($options.borderStyle),
          onClick: _cache[0] || (_cache[0] = (...args) => $options.choose && $options.choose(...args))
        }, [
          vue.renderSlot(_ctx.$slots, "default", {}, () => [
            vue.createElementVNode("view", { class: "icon-add" }),
            vue.createElementVNode("view", { class: "icon-add rotate" })
          ], true)
        ], 4)
      ], 4)) : vue.createCommentVNode("v-if", true)
    ]);
  }
  var uploadImage = /* @__PURE__ */ _export_sfc(_sfc_main$8, [["render", _sfc_render$2], ["__scopeId", "data-v-4c5c5653"], ["__file", "/Users/fox/project/uniapp/lok\u97F3\u4E50/uni_modules/uni-file-picker/components/uni-file-picker/upload-image.vue"]]);
  const _sfc_main$7 = {
    name: "uploadFile",
    emits: ["uploadFiles", "choose", "delFile"],
    props: {
      filesList: {
        type: Array,
        default() {
          return [];
        }
      },
      delIcon: {
        type: Boolean,
        default: true
      },
      limit: {
        type: [Number, String],
        default: 9
      },
      showType: {
        type: String,
        default: ""
      },
      listStyles: {
        type: Object,
        default() {
          return {
            border: true,
            dividline: true,
            borderStyle: {}
          };
        }
      },
      readonly: {
        type: Boolean,
        default: false
      }
    },
    computed: {
      list() {
        let files = [];
        this.filesList.forEach((v2) => {
          files.push(v2);
        });
        return files;
      },
      styles() {
        let styles = {
          border: true,
          dividline: true,
          "border-style": {}
        };
        return Object.assign(styles, this.listStyles);
      },
      borderStyle() {
        let {
          borderStyle,
          border
        } = this.styles;
        let obj = {};
        if (!border) {
          obj.border = "none";
        } else {
          let width = borderStyle && borderStyle.width || 1;
          width = this.value2px(width);
          let radius = borderStyle && borderStyle.radius || 5;
          radius = this.value2px(radius);
          obj = {
            "border-width": width,
            "border-style": borderStyle && borderStyle.style || "solid",
            "border-color": borderStyle && borderStyle.color || "#eee",
            "border-radius": radius
          };
        }
        let classles = "";
        for (let i2 in obj) {
          classles += `${i2}:${obj[i2]};`;
        }
        return classles;
      },
      borderLineStyle() {
        let obj = {};
        let {
          borderStyle
        } = this.styles;
        if (borderStyle && borderStyle.color) {
          obj["border-color"] = borderStyle.color;
        }
        if (borderStyle && borderStyle.width) {
          let width = borderStyle && borderStyle.width || 1;
          let style = borderStyle && borderStyle.style || 0;
          if (typeof width === "number") {
            width += "px";
          } else {
            width = width.indexOf("px") ? width : width + "px";
          }
          obj["border-width"] = width;
          if (typeof style === "number") {
            style += "px";
          } else {
            style = style.indexOf("px") ? style : style + "px";
          }
          obj["border-top-style"] = style;
        }
        let classles = "";
        for (let i2 in obj) {
          classles += `${i2}:${obj[i2]};`;
        }
        return classles;
      }
    },
    methods: {
      uploadFiles(item, index) {
        this.$emit("uploadFiles", {
          item,
          index
        });
      },
      choose() {
        this.$emit("choose");
      },
      delFile(index) {
        this.$emit("delFile", index);
      },
      value2px(value) {
        if (typeof value === "number") {
          value += "px";
        } else {
          value = value.indexOf("px") !== -1 ? value : value + "px";
        }
        return value;
      }
    }
  };
  function _sfc_render$1(_ctx, _cache, $props, $setup, $data, $options) {
    return vue.openBlock(), vue.createElementBlock("view", { class: "uni-file-picker__files" }, [
      !$props.readonly ? (vue.openBlock(), vue.createElementBlock("view", {
        key: 0,
        class: "files-button",
        onClick: _cache[0] || (_cache[0] = (...args) => $options.choose && $options.choose(...args))
      }, [
        vue.renderSlot(_ctx.$slots, "default", {}, void 0, true)
      ])) : vue.createCommentVNode("v-if", true),
      vue.createCommentVNode(` :class="{'is-text-box':showType === 'list'}" `),
      $options.list.length > 0 ? (vue.openBlock(), vue.createElementBlock("view", {
        key: 1,
        class: "uni-file-picker__lists is-text-box",
        style: vue.normalizeStyle($options.borderStyle)
      }, [
        vue.createCommentVNode(" ,'is-list-card':showType === 'list-card' "),
        (vue.openBlock(true), vue.createElementBlock(vue.Fragment, null, vue.renderList($options.list, (item, index) => {
          return vue.openBlock(), vue.createElementBlock("view", {
            class: vue.normalizeClass(["uni-file-picker__lists-box", {
              "files-border": index !== 0 && $options.styles.dividline
            }]),
            key: index,
            style: vue.normalizeStyle(index !== 0 && $options.styles.dividline && $options.borderLineStyle)
          }, [
            vue.createElementVNode("view", { class: "uni-file-picker__item" }, [
              vue.createCommentVNode(` :class="{'is-text-image':showType === 'list'}" `),
              vue.createCommentVNode(' 	<view class="files__image is-text-image">\n						<image class="header-image" :src="item.logo" mode="aspectFit"></image>\n					</view> '),
              vue.createElementVNode("view", { class: "files__name" }, vue.toDisplayString(item.name), 1),
              $props.delIcon && !$props.readonly ? (vue.openBlock(), vue.createElementBlock("view", {
                key: 0,
                class: "icon-del-box icon-files",
                onClick: ($event) => $options.delFile(index)
              }, [
                vue.createElementVNode("view", { class: "icon-del icon-files" }),
                vue.createElementVNode("view", { class: "icon-del rotate" })
              ], 8, ["onClick"])) : vue.createCommentVNode("v-if", true)
            ]),
            item.progress && item.progress !== 100 || item.progress === 0 ? (vue.openBlock(), vue.createElementBlock("view", {
              key: 0,
              class: "file-picker__progress"
            }, [
              vue.createElementVNode("progress", {
                class: "file-picker__progress-item",
                percent: item.progress === -1 ? 0 : item.progress,
                "stroke-width": "4",
                backgroundColor: item.errMsg ? "#ff5a5f" : "#EBEBEB"
              }, null, 8, ["percent", "backgroundColor"])
            ])) : vue.createCommentVNode("v-if", true),
            item.status === "error" ? (vue.openBlock(), vue.createElementBlock("view", {
              key: 1,
              class: "file-picker__mask",
              onClick: vue.withModifiers(($event) => $options.uploadFiles(item, index), ["stop"])
            }, " \u70B9\u51FB\u91CD\u8BD5 ", 8, ["onClick"])) : vue.createCommentVNode("v-if", true)
          ], 6);
        }), 128))
      ], 4)) : vue.createCommentVNode("v-if", true)
    ]);
  }
  var uploadFile = /* @__PURE__ */ _export_sfc(_sfc_main$7, [["render", _sfc_render$1], ["__scopeId", "data-v-4f822398"], ["__file", "/Users/fox/project/uniapp/lok\u97F3\u4E50/uni_modules/uni-file-picker/components/uni-file-picker/upload-file.vue"]]);
  const _sfc_main$6 = {
    name: "uniFilePicker",
    components: {
      uploadImage,
      uploadFile
    },
    options: {
      virtualHost: true
    },
    emits: ["select", "success", "fail", "progress", "delete", "update:modelValue", "input"],
    props: {
      modelValue: {
        type: [Array, Object],
        default() {
          return [];
        }
      },
      disabled: {
        type: Boolean,
        default: false
      },
      disablePreview: {
        type: Boolean,
        default: false
      },
      delIcon: {
        type: Boolean,
        default: true
      },
      autoUpload: {
        type: Boolean,
        default: true
      },
      limit: {
        type: [Number, String],
        default: 9
      },
      mode: {
        type: String,
        default: "grid"
      },
      fileMediatype: {
        type: String,
        default: "image"
      },
      fileExtname: {
        type: [Array, String],
        default() {
          return [];
        }
      },
      title: {
        type: String,
        default: ""
      },
      listStyles: {
        type: Object,
        default() {
          return {
            border: true,
            dividline: true,
            borderStyle: {}
          };
        }
      },
      imageStyles: {
        type: Object,
        default() {
          return {
            width: "auto",
            height: "auto"
          };
        }
      },
      readonly: {
        type: Boolean,
        default: false
      },
      returnType: {
        type: String,
        default: "array"
      },
      sizeType: {
        type: Array,
        default() {
          return ["original", "compressed"];
        }
      }
    },
    data() {
      return {
        files: [],
        localValue: []
      };
    },
    watch: {
      modelValue: {
        handler(newVal, oldVal) {
          this.setValue(newVal, oldVal);
        },
        immediate: true
      }
    },
    computed: {
      filesList() {
        let files = [];
        this.files.forEach((v2) => {
          files.push(v2);
        });
        return files;
      },
      showType() {
        if (this.fileMediatype === "image") {
          return this.mode;
        }
        return "list";
      },
      limitLength() {
        if (this.returnType === "object") {
          return 1;
        }
        if (!this.limit) {
          return 1;
        }
        if (this.limit >= 9) {
          return 9;
        }
        return this.limit;
      }
    },
    created() {
      if (!(pn.config && pn.config.provider)) {
        this.noSpace = true;
        pn.chooseAndUploadFile = chooseAndUploadFile;
      }
      this.form = this.getForm("uniForms");
      this.formItem = this.getForm("uniFormsItem");
      if (this.form && this.formItem) {
        if (this.formItem.name) {
          this.rename = this.formItem.name;
          this.form.inputChildrens.push(this);
        }
      }
    },
    methods: {
      clearFiles(index) {
        if (index !== 0 && !index) {
          this.files = [];
          this.$nextTick(() => {
            this.setEmit();
          });
        } else {
          this.files.splice(index, 1);
        }
        this.$nextTick(() => {
          this.setEmit();
        });
      },
      upload() {
        let files = [];
        this.files.forEach((v2, index) => {
          if (v2.status === "ready" || v2.status === "error") {
            files.push(Object.assign({}, v2));
          }
        });
        return this.uploadFiles(files);
      },
      async setValue(newVal, oldVal) {
        const newData = async (v2) => {
          const reg = /cloud:\/\/([\w.]+\/?)\S*/;
          let url = "";
          if (v2.fileID) {
            url = v2.fileID;
          } else {
            url = v2.url;
          }
          if (reg.test(url)) {
            v2.fileID = url;
            v2.url = await this.getTempFileURL(url);
          }
          if (v2.url)
            v2.path = v2.url;
          return v2;
        };
        if (this.returnType === "object") {
          if (newVal) {
            await newData(newVal);
          } else {
            newVal = {};
          }
        } else {
          if (!newVal)
            newVal = [];
          for (let i2 = 0; i2 < newVal.length; i2++) {
            let v2 = newVal[i2];
            await newData(v2);
          }
        }
        this.localValue = newVal;
        if (this.form && this.formItem && !this.is_reset) {
          this.is_reset = false;
          this.formItem.setValue(this.localValue);
        }
        let filesData = Object.keys(newVal).length > 0 ? newVal : [];
        this.files = [].concat(filesData);
      },
      choose() {
        if (this.disabled)
          return;
        if (this.files.length >= Number(this.limitLength) && this.showType !== "grid" && this.returnType === "array") {
          uni.showToast({
            title: `\u60A8\u6700\u591A\u9009\u62E9 ${this.limitLength} \u4E2A\u6587\u4EF6`,
            icon: "none"
          });
          return;
        }
        this.chooseFiles();
      },
      chooseFiles() {
        const _extname = get_extname(this.fileExtname);
        pn.chooseAndUploadFile({
          type: this.fileMediatype,
          compressed: false,
          sizeType: this.sizeType,
          extension: _extname.length > 0 ? _extname : void 0,
          count: this.limitLength - this.files.length,
          onChooseFile: this.chooseFileCallback,
          onUploadProgress: (progressEvent) => {
            this.setProgress(progressEvent, progressEvent.index);
          }
        }).then((result) => {
          this.setSuccessAndError(result.tempFiles);
        }).catch((err) => {
          formatAppLog("log", "at uni_modules/uni-file-picker/components/uni-file-picker/uni-file-picker.vue:364", "\u9009\u62E9\u5931\u8D25", err);
        });
      },
      async chooseFileCallback(res) {
        const _extname = get_extname(this.fileExtname);
        const is_one = Number(this.limitLength) === 1 && this.disablePreview && !this.disabled || this.returnType === "object";
        if (is_one) {
          this.files = [];
        }
        let {
          filePaths,
          files
        } = get_files_and_is_max(res, _extname);
        if (!(_extname && _extname.length > 0)) {
          filePaths = res.tempFilePaths;
          files = res.tempFiles;
        }
        let currentData = [];
        for (let i2 = 0; i2 < files.length; i2++) {
          if (this.limitLength - this.files.length <= 0)
            break;
          files[i2].uuid = Date.now();
          let filedata = await get_file_data(files[i2], this.fileMediatype);
          filedata.progress = 0;
          filedata.status = "ready";
          this.files.push(filedata);
          currentData.push(__spreadProps(__spreadValues({}, filedata), {
            file: files[i2]
          }));
        }
        this.$emit("select", {
          tempFiles: currentData,
          tempFilePaths: filePaths
        });
        res.tempFiles = files;
        if (!this.autoUpload || this.noSpace) {
          res.tempFiles = [];
        }
      },
      uploadFiles(files) {
        files = [].concat(files);
        return uploadCloudFiles.call(this, files, 5, (res) => {
          this.setProgress(res, res.index, true);
        }).then((result) => {
          this.setSuccessAndError(result);
          return result;
        }).catch((err) => {
          formatAppLog("log", "at uni_modules/uni-file-picker/components/uni-file-picker/uni-file-picker.vue:430", err);
        });
      },
      async setSuccessAndError(res, fn2) {
        let successData = [];
        let errorData = [];
        let tempFilePath = [];
        let errorTempFilePath = [];
        for (let i2 = 0; i2 < res.length; i2++) {
          const item = res[i2];
          const index = item.uuid ? this.files.findIndex((p2) => p2.uuid === item.uuid) : item.index;
          if (index === -1 || !this.files)
            break;
          if (item.errMsg === "request:fail") {
            this.files[index].url = item.path;
            this.files[index].status = "error";
            this.files[index].errMsg = item.errMsg;
            errorData.push(this.files[index]);
            errorTempFilePath.push(this.files[index].url);
          } else {
            this.files[index].errMsg = "";
            this.files[index].fileID = item.url;
            const reg = /cloud:\/\/([\w.]+\/?)\S*/;
            if (reg.test(item.url)) {
              this.files[index].url = await this.getTempFileURL(item.url);
            } else {
              this.files[index].url = item.url;
            }
            this.files[index].status = "success";
            this.files[index].progress += 1;
            successData.push(this.files[index]);
            tempFilePath.push(this.files[index].fileID);
          }
        }
        if (successData.length > 0) {
          this.setEmit();
          this.$emit("success", {
            tempFiles: this.backObject(successData),
            tempFilePaths: tempFilePath
          });
        }
        if (errorData.length > 0) {
          this.$emit("fail", {
            tempFiles: this.backObject(errorData),
            tempFilePaths: errorTempFilePath
          });
        }
      },
      setProgress(progressEvent, index, type) {
        this.files.length;
        const percentCompleted = Math.round(progressEvent.loaded * 100 / progressEvent.total);
        let idx = index;
        if (!type) {
          idx = this.files.findIndex((p2) => p2.uuid === progressEvent.tempFile.uuid);
        }
        if (idx === -1 || !this.files[idx])
          return;
        this.files[idx].progress = percentCompleted - 1;
        this.$emit("progress", {
          index: idx,
          progress: parseInt(percentCompleted),
          tempFile: this.files[idx]
        });
      },
      delFile(index) {
        this.$emit("delete", {
          tempFile: this.files[index],
          tempFilePath: this.files[index].url
        });
        this.files.splice(index, 1);
        this.$nextTick(() => {
          this.setEmit();
        });
      },
      getFileExt(name) {
        const last_len = name.lastIndexOf(".");
        const len = name.length;
        return {
          name: name.substring(0, last_len),
          ext: name.substring(last_len + 1, len)
        };
      },
      setEmit() {
        let data = [];
        if (this.returnType === "object") {
          data = this.backObject(this.files)[0];
          this.localValue = data ? data : null;
        } else {
          data = this.backObject(this.files);
          if (!this.localValue) {
            this.localValue = [];
          }
          this.localValue = [...data];
        }
        this.$emit("update:modelValue", this.localValue);
      },
      backObject(files) {
        let newFilesData = [];
        files.forEach((v2) => {
          newFilesData.push({
            extname: v2.extname,
            fileType: v2.fileType,
            image: v2.image,
            name: v2.name,
            path: v2.path,
            size: v2.size,
            fileID: v2.fileID,
            url: v2.url
          });
        });
        return newFilesData;
      },
      async getTempFileURL(fileList) {
        fileList = {
          fileList: [].concat(fileList)
        };
        const urls = await pn.getTempFileURL(fileList);
        return urls.fileList[0].tempFileURL || "";
      },
      getForm(name = "uniForms") {
        let parent = this.$parent;
        let parentName = parent.$options.name;
        while (parentName !== name) {
          parent = parent.$parent;
          if (!parent)
            return false;
          parentName = parent.$options.name;
        }
        return parent;
      }
    }
  };
  function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
    const _component_upload_image = vue.resolveComponent("upload-image");
    const _component_upload_file = vue.resolveComponent("upload-file");
    return vue.openBlock(), vue.createElementBlock("view", { class: "uni-file-picker" }, [
      $props.title ? (vue.openBlock(), vue.createElementBlock("view", {
        key: 0,
        class: "uni-file-picker__header"
      }, [
        vue.createElementVNode("text", { class: "file-title" }, vue.toDisplayString($props.title), 1),
        vue.createElementVNode("text", { class: "file-count" }, vue.toDisplayString($options.filesList.length) + "/" + vue.toDisplayString($options.limitLength), 1)
      ])) : vue.createCommentVNode("v-if", true),
      $props.fileMediatype === "image" && $options.showType === "grid" ? (vue.openBlock(), vue.createBlock(_component_upload_image, {
        key: 1,
        readonly: $props.readonly,
        "image-styles": $props.imageStyles,
        "files-list": $options.filesList,
        limit: $options.limitLength,
        disablePreview: $props.disablePreview,
        delIcon: $props.delIcon,
        onUploadFiles: $options.uploadFiles,
        onChoose: $options.choose,
        onDelFile: $options.delFile
      }, {
        default: vue.withCtx(() => [
          vue.renderSlot(_ctx.$slots, "default", {}, () => [
            vue.createElementVNode("view", { class: "is-add" }, [
              vue.createElementVNode("view", { class: "icon-add" }),
              vue.createElementVNode("view", { class: "icon-add rotate" })
            ])
          ], true)
        ]),
        _: 3
      }, 8, ["readonly", "image-styles", "files-list", "limit", "disablePreview", "delIcon", "onUploadFiles", "onChoose", "onDelFile"])) : vue.createCommentVNode("v-if", true),
      $props.fileMediatype !== "image" || $options.showType !== "grid" ? (vue.openBlock(), vue.createBlock(_component_upload_file, {
        key: 2,
        readonly: $props.readonly,
        "list-styles": $props.listStyles,
        "files-list": $options.filesList,
        showType: $options.showType,
        delIcon: $props.delIcon,
        onUploadFiles: $options.uploadFiles,
        onChoose: $options.choose,
        onDelFile: $options.delFile
      }, {
        default: vue.withCtx(() => [
          vue.renderSlot(_ctx.$slots, "default", {}, () => [
            vue.createElementVNode("button", {
              type: "primary",
              size: "mini"
            }, "\u9009\u62E9\u6587\u4EF6")
          ], true)
        ]),
        _: 3
      }, 8, ["readonly", "list-styles", "files-list", "showType", "delIcon", "onUploadFiles", "onChoose", "onDelFile"])) : vue.createCommentVNode("v-if", true)
    ]);
  }
  var __easycom_2 = /* @__PURE__ */ _export_sfc(_sfc_main$6, [["render", _sfc_render], ["__scopeId", "data-v-363ace0e"], ["__file", "/Users/fox/project/uniapp/lok\u97F3\u4E50/uni_modules/uni-file-picker/components/uni-file-picker/uni-file-picker.vue"]]);
  const _sfc_main$5 = {
    __name: "issuanceTrends",
    setup(__props) {
      let statusBarHeight = vue.ref();
      let testvalue = vue.ref("");
      let placeholderStyle = "font-size:16px";
      let selectPeople = vue.ref(false);
      let startrecordericon = vue.ref(false);
      let tempFilePath = vue.ref("");
      let selectsongs = vue.ref("");
      const recorderManager = vue.ref();
      const proxy = vue.getCurrentInstance();
      const gobacks = () => {
        setTimeout(() => {
          uni.$emit("refreshData");
          uni.navigateBack(-1);
        }, 1e3);
      };
      const selectvalue = vue.ref([]);
      const searchbtn = async () => {
        if (selectsongs.value) {
          await axios$1.search({ keywords: selectsongs.value }).then((res) => {
            selectvalue.value = res.data.result.songs;
          }).catch((err) => {
            setTimeout(() => {
              searchbtn();
            }, 1e3);
          });
        } else {
          return;
        }
      };
      const changeselectPeople = () => {
        selectPeople.value = !selectPeople.value;
      };
      const uploadImage2 = () => {
        proxy.refs.files.chooseFiles();
      };
      const tempFile = (flag) => {
        if (flag == "play") {
          const innerAudioContext = uni.createInnerAudioContext();
          innerAudioContext.src = tempFilePath.value;
          innerAudioContext.play();
        } else {
          tempFilePath.value = "";
        }
      };
      const recorderManagers = () => {
        proxy.refs.popup.open();
      };
      const startrecorder = () => {
        if (!startrecordericon.value && !tempFilePath.value) {
          startrecordericon.value = !startrecordericon.value;
          const options = {
            duration: 6e5,
            sampleRate: 44100,
            numberOfChannels: 1,
            encodeBitRate: 192e3,
            format: "mp3",
            frameSize: 50
          };
          recorderManager.value.start(options);
        } else if (tempFilePath.value) {
          uni.showToast({
            title: "\u5DF2\u7ECF\u5B58\u5728\u5F55\u97F3\u4E86",
            duration: 2e3
          });
          return;
        } else {
          startrecordericon.value = !startrecordericon.value;
          recorderManager.value.stop();
        }
      };
      const gotoselectsongsPage = () => {
        getlastplaysong();
        proxy.refs.popup2.open();
      };
      const lastplaymusic = vue.ref([]);
      const getlastplaysong = async () => {
        await axios$1.lastplaysong({}).then((res) => {
          lastplaymusic.value = res.data.data.list;
        });
      };
      let selectmusicval = vue.ref("");
      let musicid = vue.ref("");
      const selectmusic = async (id) => {
        await axios$1.getsongsInfo({ ids: id }).then((res) => {
          selectmusicval.value = res.data.songs;
        }).catch((err) => {
          setTimeout(() => {
            selectmusic(id);
          }, 1e3);
        });
        musicid.value = id;
        proxy.refs.popup2.close();
      };
      const send = async () => {
        if (!testvalue.value) {
          uni.showToast({
            title: "\u8BF7\u5148\u8F93\u5165\u5185\u5BB9",
            icon: "none"
          });
          return;
        }
        await axios$1.shareevent({ id: musicid.value, type: "song", msg: testvalue.value }).then((res) => {
          gobacks();
        }).catch((err) => {
          uni.showToast({
            title: "\u7F51\u7EDC\u4E0D\u4F73\u8BF7\u7A0D\u540E\u518D\u8BD5",
            icon: "none"
          });
        });
      };
      vue.onMounted(() => {
        uni.getSystemInfo({
          success(res) {
            if (res.statusBarHeight == 0)
              return;
            statusBarHeight.value = res.statusBarHeight;
            store.commit("phoneInfo", {
              statusbarHeight: res.statusBarHeight
            });
          }
        });
        recorderManager.value = uni.getRecorderManager();
        recorderManager.value.onStop((e) => {
          tempFilePath.value = e.tempFilePath;
        });
      });
      return (_ctx, _cache) => {
        const _component_uni_icons = resolveEasycom(vue.resolveDynamicComponent("uni-icons"), __easycom_0$3);
        const _component_uni_easyinput = resolveEasycom(vue.resolveDynamicComponent("uni-easyinput"), __easycom_1);
        const _component_uni_file_picker = resolveEasycom(vue.resolveDynamicComponent("uni-file-picker"), __easycom_2);
        const _component_uni_popup = resolveEasycom(vue.resolveDynamicComponent("uni-popup"), __easycom_1$1);
        return vue.openBlock(), vue.createElementBlock(vue.Fragment, null, [
          vue.createElementVNode("view", {
            class: vue.normalizeClass(["issuanceTrends", vue.unref(store).state.css_style ? "gray_filter" : ""]),
            style: vue.normalizeStyle({ paddingTop: vue.unref(statusBarHeight) + "px" })
          }, [
            vue.createElementVNode("view", { class: "issuanceTrends_title" }, [
              vue.createVNode(_component_uni_icons, {
                type: "back",
                onClick: gobacks,
                size: "20"
              }),
              vue.createTextVNode(" \u53D1\u56FE\u6587 "),
              vue.createElementVNode("view", {
                class: "issuancebtn",
                onClick: send
              }, " \u53D1\u5E03 ")
            ]),
            vue.createElementVNode("view", { class: "issuanceTest" }, [
              vue.createVNode(_component_uni_easyinput, {
                borderColor: "white",
                maxlength: "-1",
                placeholderStyle: vue.unref(placeholderStyle),
                autoHeight: "",
                focus: "",
                inputBorder: false,
                type: "textarea",
                modelValue: vue.unref(testvalue),
                "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => vue.isRef(testvalue) ? testvalue.value = $event : testvalue = $event),
                placeholder: "Tips:\u8BE5\u9875\u9762\u6CA1\u6709\u63A5\u53E3,\u9664\u4E86\u5206\u4EAB\u97F3\u4E50\u548C\u6587\u5B57,\u5176\u4ED6\u529F\u80FD\u6682\u672A\u5B9E\u73B0"
              }, null, 8, ["placeholderStyle", "modelValue"])
            ]),
            vue.createElementVNode("view", { class: "changeimage" }, [
              vue.createElementVNode("view", { class: "example-body" }, [
                vue.createVNode(_component_uni_file_picker, {
                  ref: "files",
                  "auto-upload": false,
                  limit: "9"
                }, null, 512)
              ])
            ]),
            vue.unref(selectmusicval) ? (vue.openBlock(), vue.createElementBlock("view", {
              key: 0,
              class: "changemusic"
            }, [
              vue.createElementVNode("view", { class: "scroll_item_item2" }, [
                vue.createElementVNode("image", {
                  class: "scroll_item_image",
                  src: vue.unref(selectmusicval)[0].al.picUrl,
                  mode: ""
                }, null, 8, ["src"]),
                vue.createElementVNode("view", { class: "songsname" }, [
                  vue.createElementVNode("view", { class: "songsname_top" }, vue.toDisplayString(vue.unref(selectmusicval)[0].name), 1),
                  vue.createElementVNode("view", { class: "songsname_bottom" }, [
                    (vue.openBlock(true), vue.createElementBlock(vue.Fragment, null, vue.renderList(vue.unref(selectmusicval)[0].ar, (item) => {
                      return vue.openBlock(), vue.createElementBlock("text", null, vue.toDisplayString(item.name) + "\xA0", 1);
                    }), 256))
                  ])
                ])
              ])
            ])) : vue.createCommentVNode("v-if", true),
            vue.createElementVNode("view", { class: "iconmeau" }, [
              vue.createElementVNode("view", null, [
                vue.createVNode(_component_uni_icons, {
                  onClick: _cache[1] || (_cache[1] = ($event) => gotoselectsongsPage()),
                  color: "#676767",
                  size: "23",
                  "custom-prefix": "iconfont",
                  type: "icon-music"
                })
              ]),
              vue.createElementVNode("view", null, [
                vue.createVNode(_component_uni_icons, {
                  onClick: uploadImage2,
                  color: "#676767",
                  size: "25",
                  "custom-prefix": "iconfont",
                  type: "icon-tupian"
                })
              ]),
              vue.createElementVNode("view", null, [
                vue.createVNode(_component_uni_icons, {
                  onClick: recorderManagers,
                  color: "#676767",
                  size: "25",
                  "custom-prefix": "iconfont",
                  type: "icon-maikefeng"
                })
              ]),
              vue.createElementVNode("view", null, [
                vue.createVNode(_component_uni_icons, {
                  color: "#676767",
                  size: "23",
                  "custom-prefix": "iconfont",
                  type: "icon-aite"
                })
              ]),
              vue.unref(selectPeople) ? (vue.openBlock(), vue.createElementBlock("view", {
                key: 0,
                class: "selectPeople"
              }, [
                vue.createElementVNode("view", { class: "" }, " \u7C89\u4E1D\u53EF\u89C1 "),
                vue.createElementVNode("view", { class: "" }, " \u81EA\u5DF1\u53EF\u89C1 ")
              ])) : vue.createCommentVNode("v-if", true),
              vue.createElementVNode("view", {
                class: "changepeople",
                onClick: changeselectPeople
              }, [
                vue.createTextVNode(" \u6240\u6709\u4EBA\u53EF\u89C1 "),
                !vue.unref(selectPeople) ? (vue.openBlock(), vue.createBlock(_component_uni_icons, {
                  key: 0,
                  "custom-prefix": "custom-icon",
                  type: "bottom",
                  size: "12"
                })) : vue.createCommentVNode("v-if", true),
                vue.unref(selectPeople) ? (vue.openBlock(), vue.createBlock(_component_uni_icons, {
                  key: 1,
                  "custom-prefix": "custom-icon",
                  type: "top",
                  size: "12"
                })) : vue.createCommentVNode("v-if", true)
              ])
            ])
          ], 6),
          vue.createVNode(_component_uni_popup, {
            ref: "popup",
            type: "bottom"
          }, {
            default: vue.withCtx(() => [
              vue.createElementVNode("view", { class: "recorderManagerpopup" }, [
                vue.unref(tempFilePath) ? (vue.openBlock(), vue.createElementBlock("view", {
                  key: 0,
                  class: "around1",
                  onClick: _cache[2] || (_cache[2] = ($event) => tempFile("play"))
                }, " \u64AD\u653E ")) : vue.createCommentVNode("v-if", true),
                vue.createElementVNode("view", {
                  class: "around",
                  onTouchstart: startrecorder
                }, [
                  !vue.unref(startrecordericon) ? (vue.openBlock(), vue.createBlock(_component_uni_icons, {
                    key: 0,
                    color: "white",
                    type: "mic-filled",
                    size: "40"
                  })) : vue.createCommentVNode("v-if", true),
                  vue.unref(startrecordericon) ? (vue.openBlock(), vue.createBlock(_component_uni_icons, {
                    key: 1,
                    color: "white",
                    type: "spinner-cycle",
                    size: "40"
                  })) : vue.createCommentVNode("v-if", true)
                ], 32),
                vue.unref(tempFilePath) ? (vue.openBlock(), vue.createElementBlock("view", {
                  key: 1,
                  class: "around2",
                  onClick: _cache[3] || (_cache[3] = ($event) => tempFile("del"))
                }, " \u5220\u9664 ")) : vue.createCommentVNode("v-if", true)
              ])
            ]),
            _: 1
          }, 512),
          vue.createVNode(_component_uni_popup, {
            ref: "popup2",
            type: "bottom"
          }, {
            default: vue.withCtx(() => [
              vue.createElementVNode("view", { class: "selectmusic" }, [
                vue.createElementVNode("view", { class: "selectmusic_container" }, [
                  vue.createElementVNode("view", { class: "select_input_view" }, [
                    vue.withDirectives(vue.createElementVNode("input", {
                      "onUpdate:modelValue": _cache[4] || (_cache[4] = ($event) => vue.isRef(selectsongs) ? selectsongs.value = $event : selectsongs = $event),
                      placeholder: "\u8BF7\u641C\u7D22\u8981\u5206\u4EAB\u7684\u97F3\u4E50",
                      type: "text"
                    }, null, 512), [
                      [vue.vModelText, vue.unref(selectsongs)]
                    ]),
                    vue.createElementVNode("view", { onClick: searchbtn }, [
                      vue.createVNode(_component_uni_icons, {
                        type: "search",
                        size: "20"
                      })
                    ])
                  ]),
                  vue.createElementVNode("view", { class: "scroll-container" }, [
                    vue.createElementVNode("scroll-view", {
                      "scroll-y": "true",
                      class: "scroll-Y"
                    }, [
                      vue.createElementVNode("view", { class: "scroll_item" }, [
                        !selectvalue.value.length ? (vue.openBlock(), vue.createElementBlock("view", { key: 0 }, [
                          (vue.openBlock(true), vue.createElementBlock(vue.Fragment, null, vue.renderList(lastplaymusic.value, (item, index) => {
                            return vue.openBlock(), vue.createElementBlock("view", {
                              class: "scroll_item_item",
                              onClick: ($event) => selectmusic(item.data.id)
                            }, [
                              vue.createElementVNode("image", {
                                class: "scroll_item_image",
                                src: item.data.al.picUrl,
                                mode: ""
                              }, null, 8, ["src"]),
                              vue.createElementVNode("view", { class: "songsname" }, [
                                vue.createElementVNode("view", { class: "songsname_top" }, vue.toDisplayString(item.data.name), 1),
                                vue.createElementVNode("view", { class: "songsname_bottom" }, [
                                  (vue.openBlock(true), vue.createElementBlock(vue.Fragment, null, vue.renderList(item.data.ar, (i2) => {
                                    return vue.openBlock(), vue.createElementBlock("text", null, vue.toDisplayString(i2.name) + "\xA0", 1);
                                  }), 256))
                                ])
                              ])
                            ], 8, ["onClick"]);
                          }), 256))
                        ])) : vue.createCommentVNode("v-if", true),
                        selectvalue.value.length ? (vue.openBlock(), vue.createElementBlock("view", { key: 1 }, [
                          (vue.openBlock(true), vue.createElementBlock(vue.Fragment, null, vue.renderList(selectvalue.value, (item, index) => {
                            return vue.openBlock(), vue.createElementBlock("view", {
                              class: "scroll_item_item",
                              onClick: ($event) => selectmusic(item.id)
                            }, [
                              vue.createElementVNode("view", { class: "indexsum" }, vue.toDisplayString(index + 1), 1),
                              vue.createElementVNode("view", { class: "songsname" }, [
                                vue.createElementVNode("view", { class: "songsname_top" }, vue.toDisplayString(item.album.name), 1),
                                vue.createElementVNode("view", { class: "songsname_bottom" }, [
                                  (vue.openBlock(true), vue.createElementBlock(vue.Fragment, null, vue.renderList(item.artists, (i2) => {
                                    return vue.openBlock(), vue.createElementBlock("text", null, vue.toDisplayString(i2.name) + "\xA0", 1);
                                  }), 256))
                                ])
                              ])
                            ], 8, ["onClick"]);
                          }), 256))
                        ])) : vue.createCommentVNode("v-if", true)
                      ])
                    ])
                  ])
                ])
              ])
            ]),
            _: 1
          }, 512)
        ], 64);
      };
    }
  };
  var PagesHomeIssuanceTrendsIssuanceTrends = /* @__PURE__ */ _export_sfc(_sfc_main$5, [["__scopeId", "data-v-72546150"], ["__file", "/Users/fox/project/uniapp/lok\u97F3\u4E50/pages/home/issuanceTrends/issuanceTrends.vue"]]);
  const _sfc_main$4 = {
    __name: "event",
    setup(__props) {
      let statusBarHeight = vue.ref();
      const gobacks = () => {
        uni.navigateBack(-1);
      };
      let tabsStatus = vue.ref(1);
      let data = vue.ref({ artists: [""] });
      onLoad((option) => {
        uni.getSystemInfo({
          success(res) {
            if (res.statusBarHeight == 0)
              return;
            statusBarHeight.value = res.statusBarHeight;
            store.commit("phoneInfo", {
              statusbarHeight: res.statusBarHeight
            });
          }
        });
        data.value = JSON.parse(option.event);
        getcommentevent2();
      });
      let commenteventlist = vue.ref([]);
      let commenteventlist2 = vue.ref([]);
      const getcommentevent2 = () => {
        axios$1.getcommentevent({ threadId: data.value.xInfo.info.threadId }).then((res) => {
          commenteventlist.value = res.data.hotComments;
          let commenteventlist_firstfitler = [];
          let commenteventlist_secondfitler = [];
          commenteventlist.value.forEach((item, index) => {
            if (!item.beReplied.length) {
              item.commentobj = [];
              commenteventlist_firstfitler.push(item);
            } else {
              commenteventlist_secondfitler.push(item);
            }
          });
          commenteventlist_firstfitler.forEach((item1, index1) => {
            commenteventlist_secondfitler.forEach((item2, index2) => {
              if (item1.commentId == item2.parentCommentId) {
                item1.commentobj.push(item2);
              } else {
                item1.commentobj = [];
              }
            });
          });
          commenteventlist2.value = commenteventlist_firstfitler;
        }).catch((err) => {
          setTimeout(() => {
            getcommentevent2();
          }, 1e3);
        });
      };
      return (_ctx, _cache) => {
        const _component_uni_icons = resolveEasycom(vue.resolveDynamicComponent("uni-icons"), __easycom_0$3);
        return vue.openBlock(), vue.createElementBlock("view", {
          class: vue.normalizeClass(["event", vue.unref(store).state.css_style ? "gray_filter" : ""]),
          style: vue.normalizeStyle({ paddingTop: vue.unref(statusBarHeight) + "px" })
        }, [
          vue.createElementVNode("view", { class: "goback" }, [
            vue.createVNode(_component_uni_icons, {
              onClick: gobacks,
              type: "back",
              size: "20"
            }),
            vue.createTextVNode(" \u52A8\u6001 ")
          ]),
          vue.createElementVNode("view", { class: "event_title" }, [
            vue.createElementVNode("image", {
              class: "event_title_avart",
              src: vue.unref(data).user.avatarUrl,
              mode: ""
            }, null, 8, ["src"]),
            vue.createElementVNode("view", { class: "event_title_title" }, [
              vue.createTextVNode(vue.toDisplayString(vue.unref(data).user.nickname) + " ", 1),
              vue.createElementVNode("view", { class: "event_title_time" }, vue.toDisplayString(vue.unref(data).showTime2), 1)
            ]),
            vue.createElementVNode("view", { class: "event_title_Focus" }, [
              vue.createVNode(_component_uni_icons, {
                color: "red",
                type: "plusempty",
                size: "16"
              }),
              vue.createTextVNode(" \u5173\u6CE8 ")
            ])
          ]),
          vue.createElementVNode("view", { class: "event_content" }, vue.toDisplayString(vue.unref(data).msg2), 1),
          vue.withDirectives(vue.createElementVNode("view", { class: "event_a" }, [
            vue.createVNode(_component_uni_icons, {
              color: "#115ab3",
              type: "paperclip",
              size: "16"
            }),
            vue.createTextVNode(" \u7F51\u9875\u94FE\u63A5 ")
          ], 512), [
            [vue.vShow, false]
          ]),
          vue.withDirectives(vue.createElementVNode("view", { class: "event_a" }, " # \u9ED1\u80F6\u804A\u5929\u5BA4 ", 512), [
            [vue.vShow, false]
          ]),
          vue.createElementVNode("view", { class: "event_image" }, [
            (vue.openBlock(true), vue.createElementBlock(vue.Fragment, null, vue.renderList(vue.unref(data).pics, (i2) => {
              return vue.openBlock(), vue.createElementBlock("image", {
                class: "event_image_image",
                src: i2.originUrl,
                mode: "aspectFill"
              }, null, 8, ["src"]);
            }), 256))
          ]),
          vue.unref(data).song2 ? (vue.openBlock(), vue.createElementBlock("view", {
            key: 0,
            class: "event_music"
          }, [
            vue.createElementVNode("image", {
              class: "event_music_image",
              src: vue.unref(data).song2.img80x80,
              mode: ""
            }, null, 8, ["src"]),
            vue.createElementVNode("view", { class: "event_music_content" }, [
              vue.createElementVNode("view", null, vue.toDisplayString(vue.unref(data).song2.name), 1),
              vue.createElementVNode("view", null, vue.toDisplayString(vue.unref(data).song2.artists[0].name), 1)
            ])
          ])) : vue.createCommentVNode("v-if", true),
          vue.createElementVNode("view", { class: "event_iconmeau" }, [
            vue.createElementVNode("view", { class: "" }, [
              vue.createTextVNode(" \u8BC4\u8BBA"),
              vue.createElementVNode("text", null, "96")
            ]),
            vue.createElementVNode("view", { class: "" }, [
              vue.createTextVNode(" \u8F6C\u53D1"),
              vue.createElementVNode("text", null, "96")
            ]),
            vue.createElementVNode("view", { class: "" }, [
              vue.createTextVNode(" \u8D5E"),
              vue.createElementVNode("text", null, "96")
            ])
          ]),
          vue.createElementVNode("view", { class: "event_iconmeau_content" }, [
            vue.unref(tabsStatus) == 1 ? (vue.openBlock(), vue.createElementBlock("view", {
              key: 0,
              class: "event_iconmeau_first"
            }, [
              vue.createElementVNode("view", { class: "event_iconmeau_first_title" }, " \u7CBE\u5F69\u8BC4\u8BBA "),
              (vue.openBlock(true), vue.createElementBlock(vue.Fragment, null, vue.renderList(vue.unref(commenteventlist2), (item, index) => {
                return vue.openBlock(), vue.createElementBlock("view", {
                  class: "event_item",
                  onClick: _cache[0] || (_cache[0] = ($event) => _ctx.gotoPage(6))
                }, [
                  vue.createElementVNode("view", { class: "event_item_title" }, [
                    vue.createElementVNode("image", {
                      class: "event_item_title_avart",
                      src: item.user.avatarUrl,
                      mode: ""
                    }, null, 8, ["src"]),
                    vue.createElementVNode("view", { class: "event_item-name" }, [
                      vue.createElementVNode("view", { class: "event_item-name-title" }, vue.toDisplayString(item.user.nickname), 1),
                      vue.createElementVNode("view", { class: "event_item-name-time" }, vue.toDisplayString(item.timeStr), 1)
                    ]),
                    vue.createElementVNode("view", { class: "zan" }, [
                      vue.createTextVNode(vue.toDisplayString(item.likedCount) + " ", 1),
                      vue.createCommentVNode("v-if", true),
                      vue.createVNode(_component_uni_icons, {
                        type: "hand-up",
                        size: "20"
                      })
                    ])
                  ]),
                  vue.createElementVNode("view", { class: "event_item_content" }, vue.toDisplayString(item.content), 1),
                  vue.createElementVNode("view", { class: "showmoretext" }, [
                    vue.createTextVNode(vue.toDisplayString(item.commentobj.length) + "\u6761\u56DE\u590D", 1),
                    vue.createVNode(_component_uni_icons, {
                      type: "forward",
                      size: "12"
                    })
                  ])
                ]);
              }), 256))
            ])) : vue.unref(tabsStatus) == 2 ? (vue.openBlock(), vue.createElementBlock("view", {
              key: 1,
              class: "event_iconmeau_first"
            }, " 345 ")) : (vue.openBlock(), vue.createElementBlock("view", {
              key: 2,
              class: "event_iconmeau_first"
            }, " 678 "))
          ])
        ], 6);
      };
    }
  };
  var PagesHomeEventEvent = /* @__PURE__ */ _export_sfc(_sfc_main$4, [["__scopeId", "data-v-83b238a4"], ["__file", "/Users/fox/project/uniapp/lok\u97F3\u4E50/pages/home/event/event.vue"]]);
  const _sfc_main$3 = {
    __name: "scan",
    setup(__props) {
      let qrurl = vue.ref("");
      let test = vue.ref("\u8BF7\u626B\u63CF\u4E8C\u7EF4\u7801");
      let timer = vue.ref(0);
      let checkqrInterval = vue.ref();
      let qrcodekey = vue.ref();
      const getqrcode = async () => {
        await axios$1.getqrkey().then(async (res) => {
          qrcodekey.value = res.data.data.unikey;
          await axios$1.getqrbase64({ key: res.data.data.unikey, qrimg: "1" }).then((res2) => {
            qrurl.value = res2.data.data.qrimg;
          });
        });
      };
      const checkqrstatus = async () => {
        await axios$1.getqrstatus({ key: qrcodekey.value }).then((res) => {
          if (res.data.code == 800) {
            clearInterval(checkqrInterval.value);
            test.value = res.data.message;
          } else if (res.data.code == 801 || res.data.code == 802) {
            timer.value += 1;
            test.value = res.data.message;
            if (timer.value >= 60) {
              clearInterval(checkqrInterval.value);
              test.value = res.data.message;
            }
          } else {
            unistroage.setStorage("token", res.data.cookie);
            test.value = res.data.message;
            currentloginstatus();
            getuserInfo2();
            clearInterval(checkqrInterval.value);
          }
        });
      };
      onpagehide(() => {
        clearInterval(checkqrInterval.value);
      });
      const currentloginstatus = async () => {
        await axios$1.loginstatus().then((res) => {
        });
      };
      const getuserInfo2 = async () => {
        await axios$1.getuserInfo().then((res) => {
        });
      };
      vue.onMounted(() => {
        getqrcode();
        checkqrInterval.value = setInterval(() => {
          if (qrcodekey.value && qrurl.value) {
            checkqrstatus();
          }
        }, 1e3);
      });
      return (_ctx, _cache) => {
        return vue.openBlock(), vue.createElementBlock(vue.Fragment, null, [
          vue.createElementVNode("view", { class: "qr-box" }, [
            vue.createElementVNode("image", {
              style: { "width": "100%", "height": "100%" },
              src: vue.unref(qrurl),
              mode: ""
            }, null, 8, ["src"])
          ]),
          vue.createElementVNode("view", { class: "qrlogin" }, vue.toDisplayString(vue.unref(test)), 1)
        ], 64);
      };
    }
  };
  var PagesLoginScanScan = /* @__PURE__ */ _export_sfc(_sfc_main$3, [["__scopeId", "data-v-506d47c0"], ["__file", "/Users/fox/project/uniapp/lok\u97F3\u4E50/pages/login/scan/scan.vue"]]);
  const _sfc_main$2 = {
    __name: "detailedInformation",
    setup(__props) {
      let musicId = vue.ref("");
      let statusBarHeight = vue.ref("");
      let pgList = vue.ref([0, 0, 0, 0]);
      let loadingStatus = vue.ref(true);
      let playbackstate = vue.ref(false);
      onLoad((option) => {
        statusBarHeight.value = store.state.phoneInfo.statusbarHeight;
        randomBFStatus.value = unistroage.getStorage("rando");
        musicId.value = option.id;
        getMusicInfo();
      });
      const goBack = () => {
        uni.navigateBack({
          delta: 1,
          animationType: "slide-out-bottom",
          animationDuration: 700
        });
      };
      vue.watch(() => store.state.musicPlay.musicIndex, (newVal, oldVal) => {
        let obj = store.state.musicPlay.playMusicList[store.state.musicPlay.musicIndex];
        musicInfo.value = obj;
      });
      let musicInfo = vue.ref({});
      const getMusicInfo = async () => {
        await axios$1.getsongsInfo({
          ids: musicId.value
        }).then((res) => {
          musicInfo.value = res.data.songs[0];
          setTimeout(() => {
            loadingStatus.value = false;
          }, 1e3);
        });
      };
      const changePlaybackstate = (bool) => {
        playbackstate.value = bool;
        if (bool) {
          store.commit("PlayOutMusic", musicInfo.value);
        } else {
          store.commit("pause");
        }
      };
      const laster = () => {
      };
      let randomBFStatus = vue.ref(false);
      const next = () => {
        store.commit("next");
      };
      const randomBF = (bool) => {
        randomBFStatus.value = !bool;
        unistroage.setStorage("rando", !bool);
        store.commit("rando", !bool);
      };
      return (_ctx, _cache) => {
        const _component_uni_icons = resolveEasycom(vue.resolveDynamicComponent("uni-icons"), __easycom_0$3);
        return vue.openBlock(), vue.createElementBlock(vue.Fragment, null, [
          vue.unref(loadingStatus) ? (vue.openBlock(), vue.createElementBlock("view", {
            key: 0,
            class: "loader",
            style: { "margin-top": "30vh" }
          })) : vue.createCommentVNode("v-if", true),
          !vue.unref(loadingStatus) ? (vue.openBlock(), vue.createElementBlock("view", {
            key: 1,
            class: "detailedInformation"
          }, [
            vue.createElementVNode("image", {
              class: "imagebackground",
              src: vue.unref(musicInfo).al.picUrl,
              mode: ""
            }, null, 8, ["src"]),
            vue.createElementVNode("view", {
              style: vue.normalizeStyle([{ marginTop: vue.unref(statusBarHeight) + "px" }]),
              class: "detailedInformation_title"
            }, [
              vue.createElementVNode("view", { class: "detailedInformation_title-style" }, [
                vue.createElementVNode("view", { class: "iconsview" }, [
                  vue.createVNode(_component_uni_icons, {
                    type: "bottom",
                    size: "20",
                    onClick: goBack
                  })
                ]),
                vue.createElementVNode("view", { class: "" }, [
                  vue.createTextVNode(vue.toDisplayString(vue.unref(musicInfo).name) + " ", 1),
                  vue.createElementVNode("view", { class: "" }, [
                    (vue.openBlock(true), vue.createElementBlock(vue.Fragment, null, vue.renderList(vue.unref(musicInfo).ar, (item, index) => {
                      return vue.openBlock(), vue.createElementBlock("text", null, vue.toDisplayString(item.name) + "\xA0", 1);
                    }), 256))
                  ])
                ])
              ])
            ], 4),
            vue.createElementVNode("view", { class: "detailedInformation_center" }, [
              vue.createElementVNode("view", { class: "detailedInformation_center-style" }, [
                vue.createElementVNode("view", {
                  class: vue.normalizeClass(["detailedInformation_center-style_image", vue.unref(playbackstate) ? "animation running" : "animation pause"])
                }, [
                  vue.createElementVNode("image", {
                    class: "detailedInformation_center_image",
                    src: vue.unref(musicInfo).al.picUrl,
                    mode: ""
                  }, null, 8, ["src"])
                ], 2),
                vue.createElementVNode("view", { class: "radio" })
              ])
            ]),
            vue.createElementVNode("view", { class: "bottom_item" }, [
              vue.createElementVNode("view", { class: "progress" }, [
                vue.createElementVNode("view", { class: "startTime" }, "\u65F6\u95F4"),
                vue.createElementVNode("view", { class: "progress-box" }, [
                  vue.createElementVNode("progress", {
                    percent: vue.unref(pgList)[3],
                    activeColor: "#10AEFF",
                    "stroke-width": "3"
                  }, null, 8, ["percent"])
                ]),
                vue.createElementVNode("view", { class: "endTime" }, "\u603B\u65F6\u95F4")
              ]),
              vue.createElementVNode("view", { class: "iconMeaus" }, [
                vue.createElementVNode("view", { class: "" }, [
                  vue.unref(randomBFStatus) ? (vue.openBlock(), vue.createBlock(_component_uni_icons, {
                    key: 0,
                    "custom-prefix": "iconfont",
                    onClick: _cache[0] || (_cache[0] = ($event) => randomBF(true)),
                    color: "white",
                    type: "icon-xunhuanbofang",
                    size: "30"
                  })) : vue.createCommentVNode("v-if", true),
                  !vue.unref(randomBFStatus) ? (vue.openBlock(), vue.createBlock(_component_uni_icons, {
                    key: 1,
                    "custom-prefix": "iconfont",
                    onClick: _cache[1] || (_cache[1] = ($event) => randomBF(false)),
                    color: "white",
                    type: "icon-24gl-repeat2",
                    size: "30"
                  })) : vue.createCommentVNode("v-if", true)
                ]),
                vue.createElementVNode("view", { class: "" }, [
                  vue.createVNode(_component_uni_icons, {
                    "custom-prefix": "iconfont",
                    class: "uni-icons",
                    onClick: laster,
                    color: "white",
                    type: "icon-shangyishoushangyige",
                    size: "30"
                  })
                ]),
                vue.createElementVNode("view", { class: "" }, [
                  vue.unref(playbackstate) ? (vue.openBlock(), vue.createBlock(_component_uni_icons, {
                    key: 0,
                    "custom-prefix": "iconfont",
                    onClick: _cache[2] || (_cache[2] = ($event) => changePlaybackstate(false)),
                    class: "uni-icons",
                    color: "white",
                    type: "icon-pause-full",
                    size: "30"
                  })) : vue.createCommentVNode("v-if", true),
                  !vue.unref(playbackstate) ? (vue.openBlock(), vue.createBlock(_component_uni_icons, {
                    key: 1,
                    onClick: _cache[3] || (_cache[3] = ($event) => changePlaybackstate(true)),
                    "custom-prefix": "iconfont",
                    class: "uni-icons",
                    color: "white",
                    type: "icon-kaishi1",
                    size: "30"
                  })) : vue.createCommentVNode("v-if", true)
                ]),
                vue.createElementVNode("view", { class: "" }, [
                  vue.createVNode(_component_uni_icons, {
                    "custom-prefix": "iconfont",
                    onClick: next,
                    class: "uni-icons",
                    color: "white",
                    type: "icon-xiayigexiayishou",
                    size: "30"
                  })
                ]),
                vue.createElementVNode("view", { class: "" }, [
                  vue.createVNode(_component_uni_icons, {
                    class: "uni-icons",
                    color: "white",
                    type: "bars",
                    size: "30"
                  })
                ])
              ])
            ])
          ])) : vue.createCommentVNode("v-if", true)
        ], 64);
      };
    }
  };
  var PagesDetailedInformationDetailedInformation = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["__scopeId", "data-v-4d2d2940"], ["__file", "/Users/fox/project/uniapp/lok\u97F3\u4E50/pages/detailedInformation/detailedInformation.vue"]]);
  const _sfc_main$1 = {
    __name: "userInfo",
    setup(__props) {
      let proxy = vue.getCurrentInstance();
      let userInfo = vue.ref({
        first: [{
          key: "\u5934\u50CF",
          msg: "\u5934\u50CF",
          value: false
        }, {
          key: "\u6635\u79F0",
          msg: "text",
          value: "lok"
        }, {
          key: "\u6027\u522B",
          msg: "text",
          value: "\u7537"
        }, {
          key: "\u4E8C\u7EF4\u7801",
          msg: "image",
          value: ""
        }],
        second: [{
          key: "\u751F\u65E5",
          msg: "text",
          value: "\u672A\u8BBE\u7F6E"
        }, {
          key: "\u8D26\u53F7\u7ED1\u5B9A",
          msg: "text",
          value: "\u672A\u586B\u5199"
        }, {
          key: "\u97F3\u4E50\u6807\u7B7E",
          msg: "text",
          value: "\u9009\u62E9\u6807\u7B7E"
        }, {
          key: "\u7B80\u4ECB",
          msg: "text",
          value: "\u8FD8\u6CA1\u6709\u7B80\u4ECB"
        }]
      });
      let userId = vue.ref("");
      vue.onMounted(() => {
        userId.value = unistroage.getStorage("userId");
        binding2();
        getUserInfo();
      });
      const binding2 = async () => {
        await axios$1.binding({
          uid: userId.value
        }).then((res) => {
          userInfo.value.second[1].value = JSON.parse(res.data.bindings[0]["tokenJsonStr"]).cellphone;
        });
      };
      const getUserInfo = async () => {
        await axios$1.getuserInfo({
          uid: userId.value
        }).then((res) => {
          userInfo.value.first[2].value = res.data.profile.gender == "0" ? "\u7537" : "\u5973";
          userInfo.value.first[0].value = res.data.profile.avatarUrl;
          if (res.data.profile.birthday > 0) {
            let date = new Date(res.data.profile.birthday);
            userInfo.value.second[0].value = date.getFullYear() + "-" + (date.getMonth() + 1) + "-" + date.getDate();
          }
          userInfo.value.second[3].value = res.data.profile.signature;
          userInfo.value.first[1].value = res.data.profile.nickname;
        });
      };
      const click = (item) => {
        uni.showToast({
          title: "\u8BE5\u9875\u9762\u4FEE\u6539\u7528\u6237\u6682\u65E0\u63A5\u53E3",
          icon: "none"
        });
        switch (item) {
          case "\u5934\u50CF":
            break;
          case "\u6635\u79F0":
            proxy.refs.inputDialog.open();
            break;
        }
      };
      const inputover = (nickname) => {
        return;
      };
      return (_ctx, _cache) => {
        const _component_uni_popup_dialog = resolveEasycom(vue.resolveDynamicComponent("uni-popup-dialog"), __easycom_0$2);
        const _component_uni_popup = resolveEasycom(vue.resolveDynamicComponent("uni-popup"), __easycom_1$1);
        return vue.openBlock(), vue.createElementBlock(vue.Fragment, null, [
          vue.createElementVNode("view", { class: "userInfo" }, [
            vue.createElementVNode("view", { class: "userInfo_first" }, [
              (vue.openBlock(true), vue.createElementBlock(vue.Fragment, null, vue.renderList(vue.unref(userInfo).first, (item, index) => {
                return vue.openBlock(), vue.createElementBlock("view", {
                  class: "userInfo_first-item",
                  onClick: ($event) => click(item.key)
                }, [
                  vue.createElementVNode("text", null, vue.toDisplayString(item.key), 1),
                  vue.createElementVNode("view", { class: "" }, [
                    item.msg == "\u5934\u50CF" && item.value != "" ? (vue.openBlock(), vue.createElementBlock("image", {
                      key: 0,
                      class: "headPortrait",
                      src: item.value,
                      mode: ""
                    }, null, 8, ["src"])) : item.msg == "\u5934\u50CF" ? (vue.openBlock(), vue.createElementBlock("image", {
                      key: 1,
                      class: "headPortrait",
                      src: "/static/image/Avatar.png",
                      mode: ""
                    })) : vue.createCommentVNode("v-if", true)
                  ]),
                  vue.withDirectives(vue.createElementVNode("text", null, vue.toDisplayString(item.value), 513), [
                    [vue.vShow, item.msg == "text"]
                  ])
                ], 8, ["onClick"]);
              }), 256))
            ]),
            vue.createElementVNode("view", { class: "userInfo_first second" }, [
              (vue.openBlock(true), vue.createElementBlock(vue.Fragment, null, vue.renderList(vue.unref(userInfo).second, (item, index) => {
                return vue.openBlock(), vue.createElementBlock("view", {
                  class: "userInfo_first-item",
                  onClick: ($event) => click(item.key)
                }, [
                  vue.createElementVNode("text", null, vue.toDisplayString(item.key), 1),
                  item.msg == "text" ? (vue.openBlock(), vue.createElementBlock("text", { key: 0 }, vue.toDisplayString(item.value), 1)) : vue.createCommentVNode("v-if", true)
                ], 8, ["onClick"]);
              }), 256))
            ])
          ]),
          vue.createVNode(_component_uni_popup, {
            ref: "inputDialog",
            type: "dialog"
          }, {
            default: vue.withCtx(() => [
              vue.createVNode(_component_uni_popup_dialog, {
                ref: "inputClose",
                mode: "input",
                title: "\u4FEE\u6539\u6635\u79F0",
                placeholder: "\u8BF7\u8F93\u5165\u8981\u4FEE\u6539\u7684\u6635\u79F0",
                onConfirm: inputover
              }, null, 512)
            ]),
            _: 1
          }, 512)
        ], 64);
      };
    }
  };
  var PagesSettingUserInfoUserInfo = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["__scopeId", "data-v-3ecdb927"], ["__file", "/Users/fox/project/uniapp/lok\u97F3\u4E50/pages/setting/userInfo/userInfo.vue"]]);
  __definePage("pages/mainEntrance/mainEntrance", PagesMainEntranceMainEntrance);
  __definePage("pages/trending/charts/charts", PagesTrendingChartsCharts);
  __definePage("pages/login/login/login", PagesLoginLoginLogin);
  __definePage("pages/login/register/register", PagesLoginRegisterRegister);
  __definePage("pages/home/playlists/playlists", PagesHomePlaylistsPlaylists);
  __definePage("pages/home/albums/albums", PagesHomeAlbumsAlbums);
  __definePage("pages/home/songs/songs", PagesHomeSongsSongs);
  __definePage("pages/home/artists/artists", PagesHomeArtistsArtists);
  __definePage("pages/home/dailyrecommendations/dailyrecommendations", PagesHomeDailyrecommendationsDailyrecommendations);
  __definePage("pages/home/issuanceTrends/issuanceTrends", PagesHomeIssuanceTrendsIssuanceTrends);
  __definePage("pages/home/event/event", PagesHomeEventEvent);
  __definePage("pages/login/scan/scan", PagesLoginScanScan);
  __definePage("pages/detailedInformation/detailedInformation", PagesDetailedInformationDetailedInformation);
  __definePage("pages/setting/userInfo/userInfo", PagesSettingUserInfoUserInfo);
  const _sfc_main = {
    data() {
      return {
        pausePlay: null,
        channelId: "Ba-KeepAlive",
        channelName: "Ba-KeepAlive",
        title: "lok\u97F3\u4E50",
        content: "lok\u97F3\u4E50\u6B63\u5728\u8FD0\u884C",
        dataResult: "",
        type: void 0,
        keepAlive: null
      };
    },
    methods: {
      register() {
        this.keepAlive.register({
          channelId: this.channelId,
          channelName: this.channelName,
          title: this.title,
          content: this.content,
          backgroundMusicEnabled: true,
          musicInterval: 2
        }, (res) => {
        });
      },
      isRunning() {
        this.keepAlive.isRunning((res) => {
          if (!res.isRunning) {
            this.register();
            this.restart();
          }
        });
      },
      restart() {
        this.keepAlive.restart((res) => {
        });
      },
      unregister() {
        this.keepAlive.unregister((res) => {
        });
      },
      whiteList() {
        this.keepAlive.whiteList({
          isDialog: true,
          reason: "\u8F68\u8FF9\u670D\u52A1",
          whiteType: 0
        }, (res) => {
        });
      },
      openWhiteList() {
        try {
          var list = JSON.parse(this.dataResult);
          this.keepAlive.openWhiteList({
            isDialog: true,
            reason: "\u8F68\u8FF9\u670D\u52A1",
            type: list[0].type
          }, (res) => {
          });
        } catch (e) {
        }
      },
      getWhiteList() {
        this.keepAlive.getWhiteList({
          whiteType: 0
        }, (res) => {
          this.dataResult = res.data ? JSON.stringify(res.data) : "";
        });
      }
    },
    onLaunch: function() {
      this.keepAlive = requireNativePlugin("Ba-KeepAlive");
      this.$store.state.musicPlay.player.onEnded(() => {
        this.$store.commit("next");
      });
      this.$store.state.musicPlay.player.onError(() => {
        this.$store.commit("next");
      });
      this.$store.state.musicPlay.player.onPlay(() => {
        this.isRunning();
      });
    },
    onShow: function() {
      if (this.$store.state.musicPlay.player.paused) {
        this.$store.commit("musicPlayStatus", false);
      } else {
        this.$store.commit("musicPlayStatus", true);
      }
    },
    onHide: function() {
    }
  };
  var App = /* @__PURE__ */ _export_sfc(_sfc_main, [["__file", "/Users/fox/project/uniapp/lok\u97F3\u4E50/App.vue"]]);
  function createApp() {
    const app = vue.createVueApp(App);
    app.use(store);
    return {
      app
    };
  }
  const { app: __app__, Vuex: __Vuex__, Pinia: __Pinia__ } = createApp();
  uni.Vuex = __Vuex__;
  uni.Pinia = __Pinia__;
  __app__.provide("__globalStyles", __uniConfig.styles);
  __app__._component.mpType = "app";
  __app__._component.render = () => {
  };
  __app__.mount("#app");
})(Vue, uni.VueShared);
