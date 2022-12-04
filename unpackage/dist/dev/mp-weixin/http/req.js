"use strict";
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
var http_http = require("./http.js");
let timestamp;
const search = (data) => {
  timestamp = new Date().getTime();
  return http_http.http.get({
    url: "/search",
    data: __spreadProps(__spreadValues({}, data), {
      timestamp
    })
  });
};
const logout = () => {
  return http_http.http.get({
    url: "/logout"
  });
};
const login = (data) => {
  timestamp = new Date().getTime();
  return http_http.http.get({
    url: "/login/cellphone",
    data: __spreadProps(__spreadValues({}, data), {
      timestamp
    })
  });
};
const captcha = (data) => {
  timestamp = new Date().getTime();
  return http_http.http.get({
    url: "/captcha/sent",
    data: __spreadProps(__spreadValues({}, data), {
      timestamp
    })
  });
};
const register = (data) => {
  timestamp = new Date().getTime();
  return http_http.http.get({
    url: "/register/cellphone",
    data: __spreadProps(__spreadValues({}, data), {
      timestamp
    })
  });
};
const anonimous = () => {
  return http_http.http.get({
    url: "/register/anonimous"
  });
};
const recommendsheet = (data) => {
  timestamp = new Date().getTime();
  return http_http.http.get({
    url: "/personalized",
    data: __spreadProps(__spreadValues({}, data), {
      timestamp
    })
  });
};
const highquality = (data) => {
  timestamp = new Date().getTime();
  return http_http.http.get({
    url: "/top/playlist/highquality",
    data: __spreadProps(__spreadValues({}, data), {
      timestamp
    })
  });
};
const hottopic = (data) => {
  timestamp = new Date().getTime();
  return http_http.http.get({
    url: "/hot/topic",
    data: __spreadProps(__spreadValues({}, data), {
      timestamp
    })
  });
};
const hotdjtoplist = (data) => {
  timestamp = new Date().getTime();
  return http_http.http.get({
    url: "/dj/toplist",
    data: __spreadProps(__spreadValues({}, data), {
      timestamp
    })
  });
};
const recommendmusic = (data) => {
  timestamp = new Date().getTime();
  return http_http.http.get({
    url: "/personalized/newsong",
    data: __spreadProps(__spreadValues({}, data), {
      timestamp
    })
  });
};
const hotartists = (data) => {
  timestamp = new Date().getTime();
  return http_http.http.get({
    url: "/top/artists",
    data: __spreadProps(__spreadValues({}, data), {
      timestamp
    })
  });
};
const searchs = (data) => {
  timestamp = new Date().getTime();
  return http_http.http.get({
    url: "/search",
    data: __spreadProps(__spreadValues({}, data), {
      timestamp
    })
  });
};
const djprogram = () => {
  return http_http.http.get({
    url: "/personalized/djprogram"
  });
};
const hotdj = (data) => {
  timestamp = new Date().getTime();
  return http_http.http.get({
    url: "/dj/hot",
    data: __spreadProps(__spreadValues({}, data), {
      timestamp
    })
  });
};
const getqrkey = (data) => {
  timestamp = new Date().getTime();
  return http_http.http.get({
    url: "/login/qr/key",
    data: __spreadProps(__spreadValues({}, data), {
      timestamp
    })
  });
};
const getqrbase64 = (data) => {
  timestamp = new Date().getTime();
  return http_http.http.get({
    url: "/login/qr/create",
    data: __spreadProps(__spreadValues({}, data), {
      timestamp
    })
  });
};
const getqrstatus = (data) => {
  timestamp = new Date().getTime();
  return http_http.http.get({
    url: "/login/qr/check",
    data: __spreadProps(__spreadValues({}, data), {
      timestamp
    })
  });
};
const getuserInfo = () => {
  return http_http.http.get({
    url: "/user/account"
  });
};
const loginstatus = () => {
  return http_http.http.get({
    url: "/login/status"
  });
};
const getuserallevent = (data) => {
  timestamp = new Date().getTime();
  return http_http.http.get({
    url: "/event",
    data: __spreadProps(__spreadValues({}, data), {
      timestamp
    })
  });
};
const getsongsInfo = (data) => {
  timestamp = new Date().getTime();
  return http_http.http.get({
    url: "/song/detail",
    data: __spreadProps(__spreadValues({}, data), {
      timestamp
    })
  });
};
const dailyrecommend = (data) => {
  timestamp = new Date().getTime();
  return http_http.http.get({
    url: "/recommend/resource",
    data: __spreadProps(__spreadValues({}, data), {
      timestamp
    })
  });
};
const dailyrecommendsongs = (data) => {
  timestamp = new Date().getTime();
  return http_http.http.get({
    url: "/recommend/songs",
    data: __spreadProps(__spreadValues({}, data), {
      timestamp
    })
  });
};
const userplaylist = (data) => {
  timestamp = new Date().getTime();
  return http_http.http.get({
    url: "/user/playlist",
    data: __spreadProps(__spreadValues({}, data), {
      timestamp
    })
  });
};
const sublistalbum = (data) => {
  timestamp = new Date().getTime();
  return http_http.http.get({
    url: "/album/sublist",
    data: __spreadProps(__spreadValues({}, data), {
      timestamp
    })
  });
};
const lovesongslist = (data) => {
  timestamp = new Date().getTime();
  return http_http.http.get({
    url: "/likelist",
    data: __spreadProps(__spreadValues({}, data), {
      timestamp
    })
  });
};
const getsheetallsongs = (data) => {
  timestamp = new Date().getTime();
  return http_http.http.get({
    url: "/playlist/track/all",
    data: __spreadValues({
      timestamp
    }, data)
  });
};
const songsheepsInfo = (data) => {
  timestamp = new Date().getTime();
  return http_http.http.get({
    url: "/playlist/detail",
    data: __spreadValues({
      timestamp
    }, data)
  });
};
const getcommentevent = (data) => {
  timestamp = new Date().getTime();
  return http_http.http.get({
    url: "/comment/event",
    data: __spreadValues({
      timestamp
    }, data)
  });
};
const shareevent = (data) => {
  timestamp = new Date().getTime();
  return http_http.http.get({
    url: "/share/resource",
    data: __spreadValues({
      timestamp
    }, data)
  });
};
const lastplaysong = (data) => {
  timestamp = new Date().getTime();
  return http_http.http.get({
    url: "/record/recent/song",
    data: __spreadValues({
      timestamp
    }, data)
  });
};
const checknickname = (data) => {
  timestamp = new Date().getTime();
  return http_http.http.get({
    url: "/nickname/check",
    data: __spreadValues({
      timestamp
    }, data)
  });
};
const allToplist = () => {
  timestamp = new Date().getTime();
  return http_http.http.get({
    url: "/toplist"
  });
};
const toplistartist = () => {
  return http_http.http.get({
    url: "/toplist/artist"
  });
};
const createplaylist = (data) => {
  timestamp = new Date().getTime();
  return http_http.http.get({
    url: "/playlist/create",
    data: __spreadValues({
      timestamp
    }, data)
  });
};
const getsongsurl = (data) => {
  timestamp = new Date().getTime();
  return http_http.http.get({
    url: "/song/url",
    data: __spreadValues({
      timestamp
    }, data)
  });
};
var axios = {
  search,
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
  getsongsurl
};
exports.axios = axios;
