"use strict";
var common_vendor = require("../../common/vendor.js");
var store_index = require("../../store/index.js");
var common_debounce = require("../../common/debounce.js");
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
  __name: "search",
  setup(__props) {
    let statusBarHeight = common_vendor.ref(0);
    let searchData = common_vendor.ref({
      keywords: "",
      offset: 0,
      limit: 20
    });
    common_vendor.onMounted(() => {
      statusBarHeight.value = store_index.store.state.phoneInfo.statusbarHeight;
    });
    let searchresult = common_vendor.ref([]);
    const inputclick = common_debounce.debounce(function() {
      http_req.axios.searchs(searchData.value).then((res) => {
        if (res.data.result) {
          searchresult.value = res.data.result.songs;
        } else {
          searchresult.value = [];
        }
      });
    }, 1e3);
    const scrolltolower = async () => {
      searchData.value.offset++;
      await http_req.axios.searchs({
        keywords: searchData.value.keywords,
        offset: searchData.value.offset * searchData.value.limit,
        limit: 20
      }).then((res) => {
        if (res.data.result && res.data.result.songs) {
          searchresult.value = searchresult.value.concat(res.data.result.songs);
        } else {
          common_vendor.index.showToast({
            title: "\u5DF2\u7ECF\u5212\u5230\u5E95\u90E8\u4E86",
            icon: "none"
          });
        }
      });
    };
    return (_ctx, _cache) => {
      return {
        a: common_vendor.o([($event) => common_vendor.unref(searchData).keywords = $event.detail.value, (...args) => common_vendor.unref(inputclick) && common_vendor.unref(inputclick)(...args)]),
        b: common_vendor.unref(searchData).keywords,
        c: common_vendor.f(common_vendor.unref(searchresult), (item, index, i0) => {
          return common_vendor.e({
            a: common_vendor.t(item.name),
            b: common_vendor.t(item.artists[0].name),
            c: index % 2 == 0
          }, index % 2 == 0 ? {
            d: "4cedc0c6-0-" + i0,
            e: common_vendor.p({
              type: "heart",
              size: "30"
            })
          } : {}, {
            f: index % 2 != 0
          }, index % 2 != 0 ? {
            g: "4cedc0c6-1-" + i0,
            h: common_vendor.p({
              type: "heart-filled",
              size: "30"
            })
          } : {});
        }),
        d: common_vendor.unref(statusBarHeight) + "px",
        e: common_vendor.o(scrolltolower),
        f: common_vendor.n(common_vendor.unref(store_index.store).state.css_style ? "gray_filter" : "")
      };
    };
  }
};
var Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-4cedc0c6"], ["__file", "/Users/fox/project/uniapp/lok\u97F3\u4E50/pages/search/search.vue"]]);
wx.createComponent(Component);
