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
  __name: "event",
  setup(__props) {
    let statusBarHeight = common_vendor.ref();
    const gobacks = () => {
      common_vendor.index.navigateBack(-1);
    };
    let tabsStatus = common_vendor.ref(1);
    let data = common_vendor.ref({ artists: [""] });
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
      data.value = JSON.parse(option.event);
      getcommentevent();
    });
    let commenteventlist = common_vendor.ref([]);
    let commenteventlist2 = common_vendor.ref([]);
    const getcommentevent = () => {
      http_req.axios.getcommentevent({ threadId: data.value.xInfo.info.threadId }).then((res) => {
        commenteventlist.value = res.data.hotComments;
        let commenteventlist_firstfitler = [];
        let commenteventlist_secondfitler = [];
        commenteventlist.value.forEach((item, index) => {
          if (!item.beReplied.length) {
            item.commentobj = [];
            commenteventlist_firstfitler.push(item);
          } else {
            commenteventlist_secondfitler.push(item);
          }
        });
        commenteventlist_firstfitler.forEach((item1, index1) => {
          commenteventlist_secondfitler.forEach((item2, index2) => {
            if (item1.commentId == item2.parentCommentId) {
              item1.commentobj.push(item2);
            } else {
              item1.commentobj = [];
            }
          });
        });
        commenteventlist2.value = commenteventlist_firstfitler;
      });
    };
    return (_ctx, _cache) => {
      return common_vendor.e({
        a: common_vendor.o(gobacks),
        b: common_vendor.p({
          type: "back",
          size: "20"
        }),
        c: common_vendor.unref(data).user.avatarUrl,
        d: common_vendor.t(common_vendor.unref(data).user.nickname),
        e: common_vendor.t(common_vendor.unref(data).showTime2),
        f: common_vendor.p({
          color: "red",
          type: "plusempty",
          size: "16"
        }),
        g: common_vendor.t(common_vendor.unref(data).msg2),
        h: common_vendor.p({
          color: "#115ab3",
          type: "paperclip",
          size: "16"
        }),
        i: common_vendor.f(common_vendor.unref(data).pics, (i, k0, i0) => {
          return {
            a: i.originUrl
          };
        }),
        j: common_vendor.unref(data).song2
      }, common_vendor.unref(data).song2 ? {
        k: common_vendor.unref(data).song2.img80x80,
        l: common_vendor.t(common_vendor.unref(data).song2.name),
        m: common_vendor.t(common_vendor.unref(data).song2.artists[0].name)
      } : {}, {
        n: common_vendor.unref(tabsStatus) == 1
      }, common_vendor.unref(tabsStatus) == 1 ? {
        o: common_vendor.f(common_vendor.unref(commenteventlist2), (item, index, i0) => {
          return common_vendor.e({
            a: item.user.avatarUrl,
            b: common_vendor.t(item.user.nickname),
            c: common_vendor.t(item.timeStr),
            d: common_vendor.t(item.likedCount)
          }, {}, {
            g: "83b238a4-4-" + i0,
            h: common_vendor.t(item.content),
            i: common_vendor.t(item.commentobj.length),
            j: "83b238a4-5-" + i0
          });
        }),
        p: common_vendor.p({
          type: "hand-up",
          size: "20"
        }),
        q: common_vendor.p({
          type: "forward",
          size: "12"
        }),
        r: common_vendor.o(($event) => _ctx.gotoPage(6))
      } : common_vendor.unref(tabsStatus) == 2 ? {} : {}, {
        s: common_vendor.unref(tabsStatus) == 2,
        t: common_vendor.n(common_vendor.unref(store_index.store).state.css_style ? "gray_filter" : ""),
        v: common_vendor.unref(statusBarHeight) + "px"
      });
    };
  }
};
var MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-83b238a4"], ["__file", "/Users/fox/project/uniapp/lok\u97F3\u4E50/pages/home/event/event.vue"]]);
wx.createPage(MiniProgramPage);
