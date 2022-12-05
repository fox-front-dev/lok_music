"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports[Symbol.toStringTag] = "Module";
var common_vendor = require("./common/vendor.js");
var store_index = require("./store/index.js");
require("./http/req.js");
require("./http/http.js");
require("./uniStorage/index.js");
if (!Math) {
  "./pages/mainEntrance/mainEntrance.js";
  "./pages/trending/charts/charts.js";
  "./pages/login/login/login.js";
  "./pages/login/register/register.js";
  "./pages/home/playlists/playlists.js";
  "./pages/home/albums/albums.js";
  "./pages/home/songs/songs.js";
  "./pages/home/artists/artists.js";
  "./pages/home/dailyrecommendations/dailyrecommendations.js";
  "./pages/home/issuanceTrends/issuanceTrends.js";
  "./pages/home/event/event.js";
  "./pages/login/scan/scan.js";
  "./pages/detailedInformation/detailedInformation.js";
}
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
    this.keepAlive = common_vendor.index.requireNativePlugin("Ba-KeepAlive");
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
  },
  onHide: function() {
  }
};
var App = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__file", "/Users/fox/project/uniapp/lok\u97F3\u4E50/App.vue"]]);
function createApp() {
  const app = common_vendor.createSSRApp(App);
  app.use(store_index.store);
  return {
    app
  };
}
createApp().app.mount("#app");
exports.createApp = createApp;
