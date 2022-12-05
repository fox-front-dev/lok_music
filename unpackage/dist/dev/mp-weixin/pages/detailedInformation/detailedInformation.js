"use strict";
var common_vendor = require("../../common/vendor.js");
var store_index = require("../../store/index.js");
require("../../http/req.js");
require("../../http/http.js");
require("../../uniStorage/index.js");
if (!Array) {
  const _easycom_uni_icons2 = common_vendor.resolveComponent("uni-icons");
  _easycom_uni_icons2();
}
const _easycom_uni_icons = () => "../../uni_modules/uni-icons/components/uni-icons/uni-icons.js";
if (!Math) {
  _easycom_uni_icons();
}
const _sfc_main = {
  __name: "detailedInformation",
  setup(__props) {
    let musicId = common_vendor.ref("");
    let statusBarHeight = common_vendor.ref("");
    common_vendor.onLoad((option) => {
      statusBarHeight.value = store_index.store.state.phoneInfo.statusbarHeight;
      musicId.value = option.id;
    });
    return (_ctx, _cache) => {
      return {
        a: common_vendor.p({
          type: "bottom",
          size: "25"
        }),
        b: common_vendor.unref(statusBarHeight) + "px"
      };
    };
  }
};
var MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-4d2d2940"], ["__file", "/Users/fox/project/uniapp/lok\u97F3\u4E50/pages/detailedInformation/detailedInformation.vue"]]);
wx.createPage(MiniProgramPage);
