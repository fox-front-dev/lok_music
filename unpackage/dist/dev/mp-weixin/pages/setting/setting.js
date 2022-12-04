"use strict";
var common_vendor = require("../../common/vendor.js");
var store_index = require("../../store/index.js");
var http_req = require("../../http/req.js");
var uniStorage_index = require("../../uniStorage/index.js");
require("../../http/http.js");
if (!Array) {
  const _easycom_uni_icons2 = common_vendor.resolveComponent("uni-icons");
  _easycom_uni_icons2();
}
const _easycom_uni_icons = () => "../../uni_modules/uni-icons/components/uni-icons/uni-icons.js";
if (!Math) {
  _easycom_uni_icons();
}
const _sfc_main = {
  __name: "setting",
  setup(__props) {
    let statusBarHeight = common_vendor.ref(0);
    let testlogin = common_vendor.ref("\u767B\u5F55");
    let token = common_vendor.ref("");
    let userinfo = common_vendor.ref({
      nickname: "\u8BF7\u767B\u5F55",
      avt: ""
    });
    const gologin = () => {
      if (token.value) {
        uniStorage_index.unistorage.clearStorage();
        store_index.store.commit("userId", null);
        store_index.store.commit("token", null);
        http_req.axios.logout();
      }
      common_vendor.index.redirectTo({
        url: "/pages/login/login/login"
      });
    };
    common_vendor.onMounted(() => {
      statusBarHeight.value = store_index.store.state.phoneInfo.statusbarHeight;
      token.value = uniStorage_index.unistorage.getStorage("token");
      if (token.value && uniStorage_index.unistorage.getStorage("userId")) {
        testlogin.value = "\u9000\u51FA\u767B\u5F55";
      } else {
        testlogin.value = "\u767B\u5F55";
      }
      userinfo.value.nickname = store_index.store.state.userInfo.nickname;
      userinfo.value.avt = store_index.store.state.userInfo.userAvatar;
    });
    return (_ctx, _cache) => {
      return common_vendor.e({
        a: !common_vendor.unref(store_index.store).state.userInfo.userAvatar
      }, !common_vendor.unref(store_index.store).state.userInfo.userAvatar ? {} : {
        b: common_vendor.unref(store_index.store).state.userInfo.userAvatar
      }, {
        c: common_vendor.t(common_vendor.unref(store_index.store).state.userInfo.nickname),
        d: common_vendor.p({
          type: "compose",
          size: "20"
        }),
        e: common_vendor.t(common_vendor.unref(testlogin)),
        f: common_vendor.o(gologin),
        g: common_vendor.unref(statusBarHeight) + "px",
        h: common_vendor.n(common_vendor.unref(store_index.store).state.css_style ? "gray_filter" : "")
      });
    };
  }
};
var Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-9543fcb0"], ["__file", "/Users/fox/project/uniapp/lok\u97F3\u4E50/pages/setting/setting.vue"]]);
wx.createComponent(Component);
