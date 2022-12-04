"use strict";
var common_vendor = require("../../../common/vendor.js");
var store_index = require("../../../store/index.js");
require("../../../http/req.js");
require("../../../http/http.js");
require("../../../uniStorage/index.js");
const _sfc_main = {
  __name: "artists",
  setup(__props) {
    let statusBarHeight = common_vendor.ref(0);
    let indexList = common_vendor.ref([
      "A",
      "B",
      "C",
      "D",
      "E",
      "F",
      "G",
      "H",
      "I",
      "J",
      "K",
      "L",
      "M",
      "N",
      "O",
      "P",
      "Q",
      "R",
      "S",
      "T",
      "U",
      "V",
      "W",
      "X",
      "Y",
      "Z"
    ]);
    let toview = common_vendor.ref();
    let data = common_vendor.ref([
      {
        id: "A",
        data: []
      },
      {
        id: "B",
        data: []
      },
      {
        id: "C",
        data: []
      },
      {
        id: "D",
        data: []
      },
      {
        id: "E",
        data: []
      },
      {
        id: "F",
        data: []
      },
      {
        id: "G",
        data: []
      },
      {
        id: "Z",
        data: []
      }
    ]);
    const select_id = (id) => {
      toview.value = id;
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
    });
    return (_ctx, _cache) => {
      return {
        a: common_vendor.f(common_vendor.unref(data), (item, index, i0) => {
          return {
            a: common_vendor.t(item.id),
            b: common_vendor.f(20, (item2, index2, i1) => {
              return {};
            }),
            c: item.id,
            d: index
          };
        }),
        b: common_vendor.unref(toview),
        c: common_vendor.n(common_vendor.unref(store_index.store).state.css_style ? "gray_filter" : ""),
        d: common_vendor.f(common_vendor.unref(indexList), (item, index, i0) => {
          return {
            a: common_vendor.t(item),
            b: common_vendor.o(($event) => select_id(item))
          };
        })
      };
    };
  }
};
var MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-0b792752"], ["__file", "/Users/fox/project/uniapp/lok\u97F3\u4E50/pages/home/artists/artists.vue"]]);
wx.createPage(MiniProgramPage);
