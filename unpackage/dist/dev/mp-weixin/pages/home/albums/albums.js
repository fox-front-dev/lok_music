"use strict";
var common_vendor = require("../../../common/vendor.js");
var store_index = require("../../../store/index.js");
var http_req = require("../../../http/req.js");
require("../../../http/http.js");
require("../../../uniStorage/index.js");
if (!Array) {
  const _easycom_uni_icons2 = common_vendor.resolveComponent("uni-icons");
  _easycom_uni_icons2();
}
const _easycom_uni_icons = () => "../../../uni_modules/uni-icons/components/uni-icons/uni-icons.js";
if (!Math) {
  _easycom_uni_icons();
}
const _sfc_main = {
  __name: "albums",
  setup(__props) {
    let statusBarHeight = common_vendor.ref(0);
    const goback = () => {
      common_vendor.index.navigateBack(1);
    };
    common_vendor.onMounted(() => {
      common_vendor.index.getSystemInfo({
        success(res) {
          if (res.statusBarHeight == 0)
            return;
          statusBarHeight.value = res.statusBarHeight;
          store_index.store.commit("phoneInfo", {
            statusbarHeight: res.statusBarHeight
          });
        }
      });
      getsublistalbum();
    });
    let albumlist = common_vendor.ref([]);
    const getsublistalbum = async () => {
      await http_req.axios.sublistalbum({}).then((res) => {
        albumlist.value = res.data.data;
      }).catch((err) => {
        setTimeout(() => {
          getsublistalbum();
        }, 1e3);
      });
    };
    return (_ctx, _cache) => {
      return {
        a: common_vendor.p({
          type: "back",
          size: "30"
        }),
        b: common_vendor.o(goback),
        c: common_vendor.f(common_vendor.unref(albumlist), (item, index, i0) => {
          return {
            a: item.picUrl,
            b: common_vendor.t(item.name)
          };
        }),
        d: common_vendor.n(common_vendor.unref(store_index.store).state.css_style ? "gray_filter" : ""),
        e: common_vendor.unref(statusBarHeight) + "px"
      };
    };
  }
};
var MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-80346010"], ["__file", "/Users/fox/project/uniapp/lok\u97F3\u4E50/pages/home/albums/albums.vue"]]);
wx.createPage(MiniProgramPage);
