"use strict";
var common_vendor = require("../../../common/vendor.js");
var http_req = require("../../../http/req.js");
var store_index = require("../../../store/index.js");
var uniStorage_index = require("../../../uniStorage/index.js");
require("../../../http/http.js");
if (!Array) {
  const _easycom_uni_icons2 = common_vendor.resolveComponent("uni-icons");
  _easycom_uni_icons2();
}
const _easycom_uni_icons = () => "../../../uni_modules/uni-icons/components/uni-icons/uni-icons.js";
if (!Math) {
  _easycom_uni_icons();
}
const _sfc_main = {
  __name: "playlists",
  setup(__props) {
    let index = common_vendor.ref(true);
    common_vendor.ref(true);
    let firstopen = common_vendor.ref(false);
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
      userplaylist();
    });
    let addsongsheetname = common_vendor.ref("");
    const addsongsheet = async () => {
      await http_req.axios.createplaylist({
        name: addsongsheetname.value
      }).then((res) => {
        if (res.data.code == 200) {
          common_vendor.index.showToast({
            title: "\u521B\u5EFA\u6210\u529F",
            icon: "none"
          });
        }
      }).catch((err) => {
        setTimeout(() => {
          addsongsheet();
        }, 1e3);
      });
    };
    let userplayreslist = common_vendor.ref([]);
    const userplaylist = async () => {
      let uid = uniStorage_index.unistorage.getStorage("userId");
      await http_req.axios.userplaylist({ uid }).then((res) => {
        userplayreslist.value = res.data.playlist;
      });
    };
    const gotopage = (item) => {
      common_vendor.index.navigateTo({
        url: `/pages/home/songs/songs?songssheetId=${item.id}`
      });
    };
    return (_ctx, _cache) => {
      return {
        a: common_vendor.p({
          type: "back",
          size: "30"
        }),
        b: common_vendor.o(goback),
        c: common_vendor.unref(addsongsheetname),
        d: common_vendor.o(($event) => common_vendor.isRef(addsongsheetname) ? addsongsheetname.value = $event.detail.value : addsongsheetname = $event.detail.value),
        e: common_vendor.o(addsongsheet),
        f: common_vendor.p({
          type: "plus-filled",
          color: "#00AC5A",
          size: "30"
        }),
        g: common_vendor.f(common_vendor.unref(userplayreslist), (item, index2, i0) => {
          return {
            a: item.coverImgUrl,
            b: common_vendor.t(item.name),
            c: common_vendor.o(($event) => gotopage(item))
          };
        }),
        h: common_vendor.n(!common_vendor.unref(index) ? "ani" : ""),
        i: common_vendor.n(common_vendor.unref(index) && common_vendor.unref(firstopen) ? "ani2" : ""),
        j: common_vendor.n(common_vendor.unref(store_index.store).state.css_style ? "gray_filter" : ""),
        k: common_vendor.unref(statusBarHeight) + "px"
      };
    };
  }
};
var MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-6a3d4dfc"], ["__file", "/Users/fox/project/uniapp/lok\u97F3\u4E50/pages/home/playlists/playlists.vue"]]);
wx.createPage(MiniProgramPage);
