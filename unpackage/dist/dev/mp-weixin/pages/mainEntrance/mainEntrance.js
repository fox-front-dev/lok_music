"use strict";
var common_vendor = require("../../common/vendor.js");
var store_index = require("../../store/index.js");
var uniStorage_index = require("../../uniStorage/index.js");
require("../../http/req.js");
require("../../http/http.js");
if (!Array) {
  const _easycom_uni_popup_dialog2 = common_vendor.resolveComponent("uni-popup-dialog");
  const _easycom_uni_popup2 = common_vendor.resolveComponent("uni-popup");
  (_easycom_uni_popup_dialog2 + _easycom_uni_popup2)();
}
const _easycom_uni_popup_dialog = () => "../../uni_modules/uni-popup/components/uni-popup-dialog/uni-popup-dialog.js";
const _easycom_uni_popup = () => "../../uni_modules/uni-popup/components/uni-popup/uni-popup.js";
if (!Math) {
  (home + trending + search + radios + setting + playTabbar + tabbar + _easycom_uni_popup_dialog + _easycom_uni_popup)();
}
const home = () => "../home/home.js";
const trending = () => "../trending/trending.js";
const search = () => "../search/search.js";
const radios = () => "../radios/radios.js";
const setting = () => "../setting/setting.js";
const tabbar = () => "../../common/tabbar.js";
const playTabbar = () => "../../common/play_tabbar.js";
const _sfc_main = {
  __name: "mainEntrance",
  setup(__props) {
    const proxy = common_vendor.getCurrentInstance();
    let ctabbarItem = common_vendor.ref(0);
    const ctabbarEvent = (value) => {
      ctabbarItem.value = 0;
      ctabbarItem.value = value;
    };
    const info = common_vendor.ref({
      pausePlay: null,
      channelId: "Ba-KeepAlive",
      channelName: "Ba-KeepAlive",
      title: "lok\u97F3\u4E50",
      content: "lok\u97F3\u4E50\u6B63\u5728\u8FD0\u884C",
      dataResult: "",
      type: void 0
    });
    const register = () => {
      let keepAlive = common_vendor.index.requireNativePlugin("Ba-KeepAlive");
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
      let keepAlive = common_vendor.index.requireNativePlugin("Ba-KeepAlive");
      keepAlive.whiteList({
        isDialog: true,
        reason: "\u8F68\u8FF9\u670D\u52A1",
        whiteType: 0
      }, (res) => {
        proxy.refs.popup.close();
        if (res.msg != "success") {
          common_vendor.index.showToast({
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
      if (!whiteList && !uniStorage_index.unistorage.getStorage("firstOpenApp")) {
        proxy.refs.popup.open();
      }
    };
    const confirm = () => {
      whiteList2();
      return;
    };
    const close = () => {
      proxy.refs.popup.close();
      uniStorage_index.unistorage.setStorage("firstOpenApp", true);
      common_vendor.index.showToast({
        title: "\u65E0\u6CD5\u540E\u53F0\u64AD\u653E\uFF01\u8BF7\u4EE5\u540E\u624B\u52A8\u6DFB\u52A0",
        icon: "none"
      });
    };
    common_vendor.onMounted(() => {
      POWER_SERVICE();
      register();
    });
    return (_ctx, _cache) => {
      return {
        a: common_vendor.unref(ctabbarItem) === 0,
        b: common_vendor.unref(ctabbarItem) === 1,
        c: common_vendor.unref(ctabbarItem) === 2,
        d: common_vendor.unref(ctabbarItem) === 3,
        e: common_vendor.unref(ctabbarItem) === 4,
        f: common_vendor.unref(store_index.store).state.musicPlay.playMusicURL,
        g: common_vendor.o(ctabbarEvent),
        h: common_vendor.o(close),
        i: common_vendor.o(confirm),
        j: common_vendor.p({
          mode: "base",
          content: "\u8BF7\u5148\u6253\u5F00\u6743\u9650,\u5426\u5219\u65E0\u6CD5\u7184\u5C4F\u64AD\u653E",
          message: "\u6210\u529F\u6D88\u606F",
          duration: 2e3,
          ["before-close"]: true
        }),
        k: common_vendor.sr("popup", "c6347eac-7"),
        l: common_vendor.p({
          type: "dialog"
        })
      };
    };
  }
};
var MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__file", "/Users/fox/project/uniapp/lok\u97F3\u4E50/pages/mainEntrance/mainEntrance.vue"]]);
wx.createPage(MiniProgramPage);
