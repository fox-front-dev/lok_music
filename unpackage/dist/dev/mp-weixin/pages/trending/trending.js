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
  __name: "trending",
  setup(__props) {
    let statusBarHeight = common_vendor.ref(0);
    const gocharts = () => {
      common_vendor.index.navigateTo({
        url: "/pages/trending/charts/charts"
      });
    };
    common_vendor.onMounted(() => {
      statusBarHeight.value = store_index.store.state.phoneInfo.statusbarHeight;
      getdjtoplist();
      getrecommendmusic();
      gethotartists();
      gethotmusic();
    });
    let djtoplist = common_vendor.ref();
    const getdjtoplist = async () => {
      await http_req.axios.hotdjtoplist({
        type: "new",
        limit: 6,
        offset: 0
      }).then((res) => {
        djtoplist.value = res.data.toplist;
      });
    };
    const recommendmusiclist = common_vendor.ref([]);
    const getrecommendmusic = async (index) => {
      await http_req.axios.recommendmusic({
        limit: 9
      }).then((res) => {
        let list = [];
        res.data.result.forEach((item, index2) => {
          if ((index2 + 1) % 3 == 0) {
            list = list.concat(item);
            recommendmusiclist.value.push(list);
            list = [];
          } else {
            list = list.concat(item);
          }
        });
      });
    };
    const hotartistslist = common_vendor.ref();
    const gethotartists = async () => {
      await http_req.axios.hotartists({
        limit: 10
      }).then((res) => {
        hotartistslist.value = res.data.artists;
      });
    };
    let hotmusiclist = common_vendor.ref([]);
    const gethotmusic = async () => {
      await http_req.axios.recommendmusic({
        limit: 20
      }).then((res) => {
        res.data.result.forEach((item, index) => {
          if (index >= 10) {
            hotmusiclist.value = hotmusiclist.value.concat(item);
          }
        });
      });
    };
    return (_ctx, _cache) => {
      return common_vendor.e({
        a: !common_vendor.unref(store_index.store).state.userInfo.userAvatar
      }, !common_vendor.unref(store_index.store).state.userInfo.userAvatar ? {} : {
        b: common_vendor.unref(store_index.store).state.userInfo.userAvatar
      }, {
        c: common_vendor.f(common_vendor.unref(djtoplist), (item, k0, i0) => {
          return {
            a: item.picUrl,
            b: "2ac50026-0-" + i0,
            c: common_vendor.t(Math.round(item.score / 1e4)),
            d: common_vendor.t(item.name),
            e: common_vendor.t(item.rcmdtext)
          };
        }),
        d: common_vendor.p({
          type: "star-filled",
          color: "rgb(141, 141, 141)",
          size: "16"
        }),
        e: common_vendor.o(gocharts),
        f: common_vendor.p({
          type: "forward",
          size: "20"
        }),
        g: common_vendor.f(recommendmusiclist.value, (item, k0, i0) => {
          return {
            a: common_vendor.f(item, (item_re, k1, i1) => {
              return {
                a: item_re.picUrl,
                b: common_vendor.t(item_re.name),
                c: common_vendor.t(item_re.song.artists[0].name)
              };
            })
          };
        }),
        h: common_vendor.o(gocharts),
        i: common_vendor.p({
          type: "forward",
          size: "20"
        }),
        j: common_vendor.f(hotartistslist.value, (item, k0, i0) => {
          return {
            a: item.picUrl,
            b: common_vendor.t(item.name)
          };
        }),
        k: common_vendor.o(gocharts),
        l: common_vendor.p({
          type: "forward",
          size: "20"
        }),
        m: common_vendor.f(common_vendor.unref(hotmusiclist), (item, k0, i0) => {
          return {
            a: common_vendor.t(item.name),
            b: "2ac50026-4-" + i0
          };
        }),
        n: common_vendor.p({
          type: "forward",
          size: "12"
        }),
        o: common_vendor.unref(statusBarHeight) + "px",
        p: common_vendor.n(common_vendor.unref(store_index.store).state.css_style ? "gray_filter" : "")
      });
    };
  }
};
var Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-2ac50026"], ["__file", "/Users/fox/project/uniapp/lok\u97F3\u4E50/pages/trending/trending.vue"]]);
wx.createComponent(Component);
