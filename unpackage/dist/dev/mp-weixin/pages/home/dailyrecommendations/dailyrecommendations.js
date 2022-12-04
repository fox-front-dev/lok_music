"use strict";
var common_vendor = require("../../../common/vendor.js");
var http_req = require("../../../http/req.js");
var store_index = require("../../../store/index.js");
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
  __name: "dailyrecommendations",
  setup(__props) {
    let statusBarHeight = common_vendor.ref();
    const gobacks = () => {
      common_vendor.index.navigateBack(-1);
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
      getDailyrecommend();
      getdailyrecommendsongs();
    });
    let dailyrecommendreslist = common_vendor.ref([]);
    const getDailyrecommend = async () => {
      await http_req.axios.dailyrecommend({}).then((res) => {
        dailyrecommendreslist.value = res.data.recommend;
      });
    };
    let dailyrecommendsongslist = common_vendor.ref([]);
    const getdailyrecommendsongs = async () => {
      await http_req.axios.dailyrecommendsongs({}).then((res) => {
        dailyrecommendsongslist.value = res.data.data.dailySongs;
        dailyrecommendsongslist.value.length = 20;
      });
    };
    return (_ctx, _cache) => {
      return {
        a: common_vendor.o(gobacks),
        b: common_vendor.p({
          type: "back",
          size: "20"
        }),
        c: common_vendor.f(common_vendor.unref(dailyrecommendreslist), (item, index, i0) => {
          return {
            a: item.picUrl
          };
        }),
        d: common_vendor.f(common_vendor.unref(dailyrecommendsongslist), (item, index, i0) => {
          return {
            a: item.al.picUrl,
            b: common_vendor.t(item.name),
            c: common_vendor.t(item.ar[0].name)
          };
        }),
        e: common_vendor.t("\u64AD\u653E"),
        f: common_vendor.n(common_vendor.unref(store_index.store).state.css_style ? "gray_filter" : ""),
        g: common_vendor.unref(statusBarHeight) + "px"
      };
    };
  }
};
var MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-47143558"], ["__file", "/Users/fox/project/uniapp/lok\u97F3\u4E50/pages/home/dailyrecommendations/dailyrecommendations.vue"]]);
wx.createPage(MiniProgramPage);
