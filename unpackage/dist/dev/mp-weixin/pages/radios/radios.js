"use strict";
var common_vendor = require("../../common/vendor.js");
var store_index = require("../../store/index.js");
var http_req = require("../../http/req.js");
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
  __name: "radios",
  setup(__props) {
    let statusBarHeight = common_vendor.ref(0);
    let current = common_vendor.ref(0);
    const changeView = (index) => {
      if (index == current.value)
        return;
      current.value = index;
    };
    common_vendor.onMounted(() => {
      statusBarHeight.value = store_index.store.state.phoneInfo.statusbarHeight;
      getdjprogram();
      gethotdj();
    });
    let djprogramlist = common_vendor.ref([]);
    const getdjprogram = async () => {
      await http_req.axios.djprogram().then((res) => {
        djprogramlist.value = res.data.result;
      }).catch((err) => {
        setTimeout(() => {
          getdjprogram();
        }, 1e3);
      });
    };
    let hotdjlist = common_vendor.ref([]);
    const gethotdj = async () => {
      await http_req.axios.hotdj({
        limit: 10
      }).then((res) => {
        hotdjlist.value = res.data.djRadios;
      }).catch((err) => {
        setTimeout(() => {
          gethotdj();
        }, 1e3);
      });
    };
    return (_ctx, _cache) => {
      return {
        a: common_vendor.n(common_vendor.unref(current) == 0 ? "bordergreen" : ""),
        b: common_vendor.o(($event) => changeView(0)),
        c: common_vendor.n(common_vendor.unref(current) == 1 ? "bordergreen" : ""),
        d: common_vendor.o(($event) => changeView(1)),
        e: common_vendor.f(common_vendor.unref(djprogramlist), (item, index, i0) => {
          return {
            a: item.picUrl,
            b: common_vendor.t(item.name),
            c: "40ce6ac6-0-" + i0,
            d: common_vendor.t(item.program.adjustedPlayCount)
          };
        }),
        f: common_vendor.p({
          color: "#e2e2e2",
          type: "headphones",
          size: "20"
        }),
        g: common_vendor.p({
          type: "forward",
          size: "20"
        }),
        h: common_vendor.f(common_vendor.unref(hotdjlist), (item, index, i0) => {
          return {
            a: item.picUrl,
            b: common_vendor.t(item.rcmdtext),
            c: common_vendor.t(item.name),
            d: "40ce6ac6-2-" + i0,
            e: common_vendor.t(Math.round(item.playCount / 1e4))
          };
        }),
        i: common_vendor.p({
          type: "headphones",
          size: "19"
        }),
        j: common_vendor.unref(current) == 0,
        k: common_vendor.unref(current) == 1,
        l: common_vendor.unref(statusBarHeight) + "px",
        m: common_vendor.n(common_vendor.unref(store_index.store).state.css_style ? "gray_filter" : "")
      };
    };
  }
};
var Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-40ce6ac6"], ["__file", "/Users/fox/project/uniapp/lok\u97F3\u4E50/pages/radios/radios.vue"]]);
wx.createComponent(Component);
