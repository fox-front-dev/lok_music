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
  __name: "charts",
  setup(__props) {
    let current = common_vendor.ref(0);
    let statusBarHeight = common_vendor.ref(0);
    const changeView = (index) => {
      if (index == current.value)
        return;
      current.value = index;
    };
    common_vendor.onMounted(() => {
      gettitleheight();
      gettoplist();
      toplistartist();
      highquality();
    });
    let toplist = common_vendor.ref({});
    let toplistid = common_vendor.ref("");
    const gettoplist = async () => {
      await http_req.axios.allToplist().then((res) => {
        toplist.value = res.data.list[0];
        toplistid.value = res.data.list[0].id;
      }).catch((err) => {
        setTimeout(() => {
          gettoplist();
        }, 1e3);
      });
      getsheetallsongs();
    };
    let sheetsonglist = common_vendor.ref([]);
    const getsheetallsongs = async () => {
      await http_req.axios.getsheetallsongs({
        id: toplistid.value
      }).then((res) => {
        sheetsonglist.value = res.data.songs;
        sheetsonglist.value.length = 20;
      }).catch((err) => {
        setTimeout(() => {
          getsheetallsongs();
        }, 1e3);
      });
    };
    const gettitleheight = () => {
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
    };
    let toplistart = common_vendor.ref([]);
    let toplistart2 = common_vendor.ref([]);
    const toplistartist = async () => {
      await http_req.axios.toplistartist().then((res) => {
        toplistart2.value = res.data.list.artists;
        toplistart.value = [...toplistart2.value];
        toplistart.value.length = 20;
      }).catch((err) => {
        setTimeout(() => {
          toplistartist();
        }, 1e3);
      });
    };
    let highqualitydata = common_vendor.ref({
      limit: 20,
      before: ""
    });
    let highqualitylist = common_vendor.ref([]);
    const highquality = async () => {
      await http_req.axios.highquality(highqualitydata.value).then((res) => {
        highqualitylist.value = res.data.playlists;
        highqualitydata.value.before = res.data.lasttime;
      }).catch((err) => {
        setTimeout(() => {
          highquality();
        }, 1e3);
      });
    };
    return (_ctx, _cache) => {
      return {
        a: common_vendor.t(common_vendor.unref(current) == 0 ? "\u6B4C\u66F2" : common_vendor.unref(current) == 1 ? "\u4E13\u8F91" : "\u6B4C\u624B"),
        b: common_vendor.o((...args) => _ctx.get && _ctx.get(...args)),
        c: common_vendor.t(common_vendor.unref(toplist).name),
        d: common_vendor.n(common_vendor.unref(current) == 0 ? "bordergreen" : ""),
        e: common_vendor.o(($event) => changeView(0)),
        f: common_vendor.n(common_vendor.unref(current) == 1 ? "bordergreen" : ""),
        g: common_vendor.o(($event) => changeView(1)),
        h: common_vendor.n(common_vendor.unref(current) == 2 ? "bordergreen" : ""),
        i: common_vendor.o(($event) => changeView(2)),
        j: common_vendor.f(common_vendor.unref(sheetsonglist), (item, index, i0) => {
          return {
            a: common_vendor.t(index + 1),
            b: item.al.picUrl,
            c: common_vendor.t(item.name),
            d: common_vendor.f(item.ar, (i, k1, i1) => {
              return {
                a: common_vendor.t(i.name)
              };
            }),
            e: "514f111e-0-" + i0
          };
        }),
        k: common_vendor.p({
          type: "more-filled",
          color: "#B9B9B9",
          size: "25"
        }),
        l: common_vendor.unref(current) == 0,
        m: common_vendor.f(common_vendor.unref(highqualitylist), (item, index, i0) => {
          return {
            a: common_vendor.t(index + 1),
            b: item.coverImgUrl,
            c: common_vendor.t(item.name),
            d: common_vendor.t(item.creator.nickname),
            e: common_vendor.t(item.shareCount),
            f: "514f111e-1-" + i0
          };
        }),
        n: common_vendor.p({
          type: "more-filled",
          color: "#B9B9B9",
          size: "25"
        }),
        o: common_vendor.unref(current) == 1,
        p: common_vendor.f(common_vendor.unref(toplistart), (item, index, i0) => {
          return {
            a: common_vendor.t(index < 3 ? "Hot" : index + 1 + ""),
            b: common_vendor.n(index < 3 ? "hot" : ""),
            c: item.picUrl,
            d: common_vendor.t(item.name),
            e: common_vendor.t(item.score),
            f: "514f111e-2-" + i0
          };
        }),
        q: common_vendor.p({
          type: "more-filled",
          color: "#B9B9B9",
          size: "25"
        }),
        r: common_vendor.unref(current) == 2,
        s: common_vendor.unref(statusBarHeight) + "px",
        t: common_vendor.n(common_vendor.unref(store_index.store).state.css_style ? "gray_filter" : "")
      };
    };
  }
};
var MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-514f111e"], ["__file", "/Users/fox/project/uniapp/lok\u97F3\u4E50/pages/trending/charts/charts.vue"]]);
wx.createPage(MiniProgramPage);
