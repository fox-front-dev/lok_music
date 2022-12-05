"use strict";
var common_vendor = require("./vendor.js");
var store_index = require("../store/index.js");
require("../http/req.js");
require("../http/http.js");
require("../uniStorage/index.js");
if (!Array) {
  const _easycom_uni_notice_bar2 = common_vendor.resolveComponent("uni-notice-bar");
  _easycom_uni_notice_bar2();
}
const _easycom_uni_notice_bar = () => "../uni_modules/uni-notice-bar/components/uni-notice-bar/uni-notice-bar.js";
if (!Math) {
  _easycom_uni_notice_bar();
}
const _sfc_main = {
  __name: "play_tabbar",
  props: {
    meauStatus: {
      type: Boolean,
      default: false
    }
  },
  setup(__props) {
    const props = __props;
    let firstOpen = common_vendor.ref(false);
    let roles = common_vendor.ref(true);
    let musicInfo = common_vendor.computed$1(() => {
      return store_index.store.state.musicInfo;
    });
    const settingPlay = (index) => {
      if (index == 0) {
        store_index.store.state.musicInfo.musicPlayStatus = false;
        roles.value = false;
        store_index.store.commit("pause");
        return;
      }
      if (!store_index.store.state.musicInfo.musicPlayStatus && store_index.store.state.musicInfo.firstPlay) {
        store_index.store.commit("play", 0);
        return;
      }
      roles.value = true;
      store_index.store.state.musicInfo.musicPlayStatus = true;
      store_index.store.commit("continueplay");
    };
    const showMeauStatus = common_vendor.ref(true);
    const showMeau = () => {
      showMeauStatus.value = !showMeauStatus.value;
      firstOpen.value = true;
    };
    return (_ctx, _cache) => {
      return {
        a: common_vendor.n(common_vendor.unref(store_index.store).state.css_style ? "play_tabbar_1_1" : ""),
        b: !common_vendor.unref(musicInfo).musicImage,
        c: common_vendor.unref(musicInfo).musicImage,
        d: common_vendor.unref(musicInfo).musicImage,
        e: common_vendor.t(common_vendor.unref(musicInfo).musicName),
        f: common_vendor.f(common_vendor.unref(musicInfo).musicAuthor, (item, k0, i0) => {
          return {
            a: common_vendor.t(item)
          };
        }),
        g: common_vendor.unref(musicInfo).musicPlayStatus,
        h: common_vendor.o(($event) => settingPlay(0)),
        i: !common_vendor.unref(musicInfo).musicPlayStatus,
        j: common_vendor.o(($event) => settingPlay(1)),
        k: common_vendor.o(($event) => common_vendor.unref(store_index.store).commit("next")),
        l: !common_vendor.unref(props).meauStatus,
        m: common_vendor.n(common_vendor.unref(store_index.store).state.css_style ? "gray_filter" : ""),
        n: common_vendor.p({
          speed: 300 + "px",
          scrollable: true,
          single: true,
          color: "#000000",
          ["background-color"]: "rgba(0,0, 0, 0)",
          text: common_vendor.unref(musicInfo).musicName
        }),
        o: common_vendor.unref(musicInfo).musicPlayStatus && !showMeauStatus.value,
        p: common_vendor.o(($event) => settingPlay(0)),
        q: !common_vendor.unref(musicInfo).musicPlayStatus && !showMeauStatus.value,
        r: common_vendor.o(($event) => settingPlay(1)),
        s: !showMeauStatus.value,
        t: common_vendor.o(($event) => common_vendor.unref(store_index.store).commit("next")),
        v: common_vendor.n(showMeauStatus.value ? "" : "tranX2"),
        w: common_vendor.n(showMeauStatus.value && common_vendor.unref(firstOpen) ? "tranX2-2" : ""),
        x: common_vendor.n(common_vendor.unref(store_index.store).state.css_style ? "gray_filter" : ""),
        y: !common_vendor.unref(musicInfo).musicImage,
        z: common_vendor.o(showMeau),
        A: common_vendor.unref(musicInfo).musicImage,
        B: common_vendor.unref(musicInfo).musicImage,
        C: common_vendor.n(common_vendor.unref(roles) ? "" : "rolesStop"),
        D: common_vendor.o(showMeau),
        E: common_vendor.n(common_vendor.unref(store_index.store).state.css_style ? "gray_filter" : ""),
        F: common_vendor.unref(props).meauStatus
      };
    };
  }
};
var Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-7d022d33"], ["__file", "/Users/fox/project/uniapp/lok\u97F3\u4E50/common/play_tabbar.vue"]]);
wx.createComponent(Component);
