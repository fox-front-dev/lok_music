"use strict";
var common_vendor = require("./vendor.js");
var common_assets = require("./assets.js");
var store_index = require("../store/index.js");
require("../http/req.js");
require("../http/http.js");
require("../uniStorage/index.js");
const _sfc_main = {
  __name: "tabbar",
  setup(__props) {
    const proxy = common_vendor.getCurrentInstance();
    let ctabbarItem = common_vendor.ref(0);
    let tabbar = common_vendor.ref([
      {
        name: "\u97F3\u4E50\u9986",
        cimage: common_assets.library2,
        unimage: common_assets.library1
      },
      {
        name: "\u6392\u884C\u699C",
        cimage: common_assets.data2,
        unimage: common_assets.data1
      },
      {
        name: "\u641C\u7D22",
        cimage: common_assets.search2,
        unimage: common_assets.search1
      },
      {
        name: "\u7535\u53F0",
        cimage: common_assets.radio2,
        unimage: common_assets.radio1
      },
      {
        name: "\u8BBE\u7F6E",
        cimage: common_assets.setting2,
        unimage: common_assets.setting1
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
      return {
        a: common_vendor.f(common_vendor.unref(tabbar), (item, index, i0) => {
          return {
            a: common_vendor.unref(ctabbarItem) == index ? item.cimage : item.unimage,
            b: common_vendor.t(item.name),
            c: common_vendor.n(common_vendor.unref(ctabbarItem) == index ? "fontcolor" : ""),
            d: common_vendor.o(($event) => changeTabbar(index))
          };
        }),
        b: common_vendor.n(common_vendor.unref(store_index.store).state.css_style ? "gray_filter" : "")
      };
    };
  }
};
var Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-6b6b6164"], ["__file", "/Users/fox/project/uniapp/lok\u97F3\u4E50/common/tabbar.vue"]]);
wx.createComponent(Component);
