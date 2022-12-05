"use strict";
var common_vendor = require("../../../common/vendor.js");
var store_index = require("../../../store/index.js");
var http_req = require("../../../http/req.js");
var common_debounce = require("../../../common/debounce.js");
require("../../../http/http.js");
require("../../../uniStorage/index.js");
if (!Array) {
  const _easycom_uni_icons2 = common_vendor.resolveComponent("uni-icons");
  _easycom_uni_icons2();
}
const _easycom_uni_icons = () => "../../../uni_modules/uni-icons/components/uni-icons/uni-icons.js";
if (!Math) {
  (_easycom_uni_icons + playtabbar)();
}
const playtabbar = () => "../../../common/play_tabbar.js";
const _sfc_main = {
  __name: "songs",
  setup(__props) {
    let statusBarHeight = common_vendor.ref();
    let loadingStatus = common_vendor.ref(true);
    const gobacks = () => {
      common_vendor.index.navigateBack(-1);
    };
    common_vendor.nextTick(() => {
    });
    common_vendor.onUnload(() => {
      console.log(123);
    });
    common_vendor.onLoad((option) => {
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
      songsheepsInfo(option.songssheetId);
      getsheetallsongs(option.songssheetId);
    });
    let songslists = common_vendor.ref({
      creator: {
        nickname: "",
        coverImgUrl: ""
      }
    });
    const songsheepsInfo = async (id) => {
      await http_req.axios.songsheepsInfo({
        id
      }).then((res) => {
        songslists.value = res.data.playlist;
      }).catch((err) => {
        setTimeout(() => {
          songsheepsInfo(id);
        }, 1e3);
      });
    };
    const songslist = common_vendor.ref([]);
    const getsheetallsongs = async (id) => {
      await http_req.axios.getsheetallsongs({
        id
      }).then((res) => {
        songslist.value = res.data.songs;
        setTimeout(() => {
          loadingStatus.value = false;
        }, 1e3);
      }).catch((err) => {
        setTimeout(() => {
          getsheetallsongs(id);
        }, 1e3);
      });
    };
    const playAll = () => {
      store_index.store.commit("changeMusic", {
        musiclist: songslist.value,
        index: 0
      });
      store_index.store.commit("stop", 0);
      store_index.store.commit("play");
    };
    let musicIndex = common_vendor.ref(0);
    const changeMusic = (index) => {
      musicIndex.value = index;
      debounces();
    };
    const debounces = common_debounce.debounce(() => {
      store_index.store.commit("changeMusic", {
        musiclist: songslist.value,
        index: musicIndex.value
      });
      store_index.store.commit("stop", musicIndex.value);
      store_index.store.commit("play");
    }, 1e3);
    return (_ctx, _cache) => {
      return common_vendor.e({
        a: common_vendor.o(gobacks),
        b: common_vendor.p({
          type: "back",
          size: "20"
        }),
        c: common_vendor.unref(loadingStatus)
      }, common_vendor.unref(loadingStatus) ? {} : {}, {
        d: common_vendor.unref(songslists).coverImgUrl,
        e: common_vendor.t(common_vendor.unref(songslists).name),
        f: common_vendor.unref(songslists).creator.avatarUrl,
        g: common_vendor.t(common_vendor.unref(songslists).creator.nickname),
        h: common_vendor.t(common_vendor.unref(songslists).playCount > 1e4 ? Math.round(common_vendor.unref(songslists).playCount / 1e4) + "\u4E07" : common_vendor.unref(songslists).playCount),
        i: common_vendor.o(playAll),
        j: songslist.value.length
      }, songslist.value.length ? {
        k: common_vendor.f(songslist.value, (item, index, i0) => {
          return {
            a: common_vendor.t(index + 1),
            b: common_vendor.t(item.name),
            c: common_vendor.f(item.ar, (i, index2, i1) => {
              return common_vendor.e({
                a: common_vendor.t(i.name),
                b: index2 != item.ar.length - 1
              }, index2 != item.ar.length - 1 ? {} : {});
            }),
            d: common_vendor.o(($event) => changeMusic(index))
          };
        })
      } : {}, {
        l: !songslist.value.length,
        m: !common_vendor.unref(loadingStatus),
        n: common_vendor.n(common_vendor.unref(store_index.store).state.css_style ? "gray_filter" : ""),
        o: common_vendor.n(common_vendor.unref(loadingStatus) ? "" : "songs"),
        p: common_vendor.unref(statusBarHeight) + "px",
        q: common_vendor.p({
          meauStatus: true
        })
      });
    };
  }
};
var MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-279f1b76"], ["__file", "/Users/fox/project/uniapp/lok\u97F3\u4E50/pages/home/songs/songs.vue"]]);
wx.createPage(MiniProgramPage);
