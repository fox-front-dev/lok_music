"use strict";
var common_vendor = require("../../common/vendor.js");
var common_assets = require("../../common/assets.js");
var store_index = require("../../store/index.js");
var http_req = require("../../http/req.js");
var uniStorage_index = require("../../uniStorage/index.js");
require("../../http/http.js");
if (!Array) {
  const _easycom_uni_icons2 = common_vendor.resolveComponent("uni-icons");
  _easycom_uni_icons2();
}
const _easycom_uni_icons = () => "../../uni_modules/uni-icons/components/uni-icons/uni-icons.js";
if (!Math) {
  _easycom_uni_icons();
}
const _sfc_main = {
  __name: "home",
  setup(__props) {
    let loadingStatus = common_vendor.ref(true);
    let issuanceStatus = common_vendor.ref(false);
    let loginStatus = common_vendor.ref(false);
    common_vendor.ref("");
    let statusBarHeight = common_vendor.ref(0);
    let home_meaus = [{
      name: "\u6B4C\u5355",
      imgurl: common_assets.shape1
    }, {
      name: "\u4E13\u8F91",
      imgurl: common_assets.shape2
    }, {
      name: "\u97F3\u4E50",
      imgurl: common_assets.shape3
    }, {
      name: "\u6B4C\u624B",
      imgurl: common_assets.shape4
    }];
    common_vendor.ref({
      method: "pause"
    });
    common_vendor.onMounted(() => {
      gettitleheight();
      getrecommondsongsheet();
      userInfo();
      gethottopic();
      if (uniStorage_index.unistorage.getStorage("userId")) {
        getuserallevent();
        usersongsheet(store_index.store.state.userId);
        getUserInfo();
      }
    });
    common_vendor.onLoad(() => {
      common_vendor.index.$on("refreshData", () => {
        useralleventdata.value.lasttime = "";
        useralleventdata.value.pagesize = 20;
        useralleventdatares.value = [];
        getuserallevent();
      });
    });
    let useralleventdata = common_vendor.ref({
      pagesize: 20,
      lasttime: ""
    });
    let useralleventdatares = common_vendor.ref([]);
    const getuserallevent = async () => {
      await http_req.axios.getuserallevent(useralleventdata.value).then((res) => {
        if (res.data.event) {
          useralleventdata.value.lasttime = res.data.lasttime;
          useralleventdatares.value = useralleventdatares.value.concat(res.data.event);
          useralleventdatares.value.forEach((item) => {
            let date = new Date(item.showTime);
            let year = date.getFullYear() >= 10 ? date.getFullYear() : "0" + date.getFullYear();
            let month = date.getMonth() + 1 >= 10 ? date.getMonth() + 1 : "0" + date.getMonth() + 1;
            let dates = date.getDate() >= 10 ? date.getDate() : "0" + date.getDate();
            item.showTime2 = year + "-" + month + "-" + dates;
            if ("song" in JSON.parse(item.json)) {
              item.song2 = JSON.parse(item.json).song;
            }
            if ("msg" in JSON.parse(item.json)) {
              item.msg2 = JSON.parse(item.json).msg;
            }
          });
        }
      }).catch((err) => {
        setTimeout(() => {
          getuserallevent();
        }, 1e3);
      });
    };
    const getUserInfo = async () => {
      await http_req.axios.getuserInfo({
        uid: store_index.store.state.userId
      }).then((res) => {
        userInfo.value = res.data;
        store_index.store.commit("userInfo", {
          userId: res.data.account.id,
          userAvatar: res.data.profile.avatarUrl,
          nickname: res.data.profile.nickname
        });
        setTimeout(() => {
          loadingStatus.value = false;
        }, 1e3);
      }).catch((err) => {
        setTimeout(() => {
          getUserInfo();
        }, 1e3);
      });
    };
    let songssheetlist = common_vendor.ref("");
    const usersongsheet = async (uid) => {
      await http_req.axios.userplaylist({
        uid,
        limit: 1
      }).then((res) => {
        songssheetlist.value = res.data.playlist[0].id;
        getsheetallsongs(songssheetlist.value);
      }).catch((err) => {
        setTimeout(() => {
          usersongsheet(uid);
        }, 1e3);
      });
    };
    const scroll_event = (event) => {
      if (event.detail.scrollTop >= 710 && !issuanceStatus.value) {
        issuanceStatus.value = true;
      } else if (event.detail.scrollTop < 710 && issuanceStatus.value) {
        issuanceStatus.value = false;
      }
    };
    const userInfo = () => {
      store_index.store.commit("userId", uniStorage_index.unistorage.getStorage("userId"));
      store_index.store.commit("token", uniStorage_index.unistorage.getStorage("token"));
      if (store_index.store.state.token && store_index.store.state.userId) {
        loginStatus.value = true;
      }
      if (!store_index.store.state.token) {
        anonimous();
      }
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
    const scrolltolower = async () => {
      getuserallevent();
    };
    const anonimous = async () => {
      await http_req.axios.anonimous().then((res) => {
        if (res.data.code == 200) {
          uniStorage_index.unistorage.setStorage("token", res.data.cookie);
        }
      }).catch((err) => {
        setTimeout(() => {
          anonimous();
        }, 1e3);
      });
    };
    let recommendsheetlist = common_vendor.ref([]);
    const getrecommondsongsheet = async () => {
      await http_req.axios.recommendsheet({
        limit: 10
      }).then((res) => {
        recommendsheetlist.value = res.data.result;
      }).catch((err) => {
        setTimeout(() => {
          getrecommondsongsheet();
        }, 1e3);
      });
    };
    let hottopiclist = common_vendor.ref();
    const gethottopic = async () => {
      await http_req.axios.hottopic({
        limit: 6,
        offset: 1
      }).then((res) => {
        hottopiclist.value = res.data.hot;
        if (!uniStorage_index.unistorage.getStorage("userId")) {
          setTimeout(() => {
            loadingStatus.value = false;
          }, 1e3);
        }
      }).catch((err) => {
        setTimeout(() => {
          gethottopic();
        }, 1e3);
      });
    };
    const songslist = common_vendor.ref([]);
    const getsheetallsongs = async (id) => {
      await http_req.axios.getsheetallsongs({
        id
      }).then((res) => {
        songslist.value = res.data.songs;
        store_index.store.commit("changeMusic", {
          musiclist: songslist.value,
          index: 0
        });
      }).catch((err) => {
        setTimeout(() => {
          getsheetallsongs(id);
        }, 1e3);
      });
    };
    const gotoPage = (item, songsid) => {
      if (store_index.store.state.token && store_index.store.state.userId) {
        switch (item) {
          case 0:
            common_vendor.index.navigateTo({
              url: "/pages/home/playlists/playlists"
            });
            break;
          case 1:
            common_vendor.index.navigateTo({
              url: "/pages/home/albums/albums"
            });
            break;
          case 2:
            common_vendor.index.navigateTo({
              url: `/pages/home/songs/songs?songssheetId=${songssheetlist.value}&userId=${store_index.store.state.userId}`
            });
            break;
          case 3:
            common_vendor.index.showToast({
              title: "\u529F\u80FD\u672A\u5B9E\u73B0\uFF0C\u592A\u7B80\u5355\u4E86\u4E0D\u60F3\u505A",
              icon: "none"
            });
            return;
          case 4:
            common_vendor.index.navigateTo({
              url: "/pages/home/dailyrecommendations/dailyrecommendations"
            });
            break;
          case 5:
            common_vendor.index.navigateTo({
              url: "/pages/home/issuanceTrends/issuanceTrends",
              events: {
                acceptDataFromOpenedPage() {
                  console.log(213);
                },
                someEvent() {
                  console.log(345);
                }
              }
            });
            break;
          case 6:
            common_vendor.index.navigateTo({
              url: `/pages/home/event/event?event=${JSON.stringify(songsid)}`
            });
            break;
          case 7:
            common_vendor.index.navigateTo({
              url: `/pages/home/songs/songs?songssheetId=${songsid}`
            });
            break;
        }
      } else {
        common_vendor.index.navigateTo({
          url: "/pages/login/login/login"
        });
      }
    };
    return (_ctx, _cache) => {
      return common_vendor.e({
        a: !common_vendor.unref(store_index.store).state.userInfo.userAvatar
      }, !common_vendor.unref(store_index.store).state.userInfo.userAvatar ? {} : {
        b: common_vendor.unref(store_index.store).state.userInfo.userAvatar
      }, {
        c: common_vendor.unref(loadingStatus)
      }, common_vendor.unref(loadingStatus) ? {} : {}, {
        d: common_vendor.f(common_vendor.unref(home_meaus), (item, index, i0) => {
          return {
            a: item.imgurl,
            b: common_vendor.t(item.name),
            c: "92bb8f34-0-" + i0,
            d: common_vendor.o(($event) => gotoPage(index))
          };
        }),
        e: common_vendor.p({
          type: "right",
          size: "20"
        }),
        f: !common_vendor.unref(loadingStatus),
        g: common_vendor.o(($event) => gotoPage(4)),
        h: common_vendor.p({
          type: "forward",
          size: "16"
        }),
        i: common_vendor.f(common_vendor.unref(recommendsheetlist), (item, index, i0) => {
          return {
            a: item.picUrl,
            b: common_vendor.t(item.name),
            c: common_vendor.o(($event) => gotoPage(7, item.id))
          };
        }),
        j: !common_vendor.unref(loadingStatus),
        k: !common_vendor.unref(loadingStatus),
        l: common_vendor.unref(loginStatus)
      }, common_vendor.unref(loginStatus) ? {
        m: common_vendor.f(common_vendor.unref(hottopiclist), (item, index, i0) => {
          return common_vendor.e({
            a: common_vendor.t(item.title),
            b: common_vendor.t(item.text[0] ? item.text[0] : "\u6682\u65E0\u5185\u5BB9"),
            c: item.sharePicUrl
          }, item.sharePicUrl ? {
            d: item.sharePicUrl
          } : {});
        }),
        n: !common_vendor.unref(loadingStatus)
      } : {}, {
        o: !common_vendor.unref(loginStatus)
      }, !common_vendor.unref(loginStatus) ? {
        p: common_vendor.o(($event) => gotoPage()),
        q: !common_vendor.unref(loadingStatus)
      } : {}, {
        r: common_vendor.unref(loginStatus)
      }, common_vendor.unref(loginStatus) ? {
        s: common_vendor.f(common_vendor.unref(useralleventdatares), (item, index, i0) => {
          return common_vendor.e({
            a: item.user.avatarUrl,
            b: common_vendor.t(item.user.nickname),
            c: common_vendor.t(item.showTime2),
            d: common_vendor.t(item.msg2),
            e: item.pics.length
          }, item.pics.length ? {
            f: common_vendor.f(item.pics, (item2, index2, i1) => {
              return {
                a: item2.originUrl
              };
            })
          } : {}, {
            g: item.song2
          }, item.song2 ? {
            h: item.song2.album.picUrl,
            i: common_vendor.t(item.song2.name),
            j: common_vendor.t(item.song2.album.artists[0].name)
          } : {}, {
            k: "92bb8f34-2-" + i0,
            l: common_vendor.t(item.info.commentThread.hotCount),
            m: "92bb8f34-3-" + i0,
            n: common_vendor.t(item.info.commentThread.commentCount),
            o: "92bb8f34-4-" + i0,
            p: common_vendor.t(item.info.commentThread.likedCount),
            q: common_vendor.o(($event) => gotoPage(6, item))
          });
        }),
        t: common_vendor.p({
          color: "#9194AE",
          type: "redo",
          size: "20"
        }),
        v: common_vendor.p({
          color: "#9194AE",
          type: "chatboxes",
          size: "20"
        }),
        w: common_vendor.p({
          color: "#9194AE",
          type: "hand-up",
          size: "20"
        }),
        x: !common_vendor.unref(loadingStatus),
        y: !common_vendor.unref(loadingStatus)
      } : {}, {
        z: common_vendor.n(common_vendor.unref(store_index.store).state.css_style ? "gray_filter" : ""),
        A: common_vendor.unref(statusBarHeight) + "px",
        B: common_vendor.unref(issuanceStatus) && common_vendor.unref(loginStatus)
      }, common_vendor.unref(issuanceStatus) && common_vendor.unref(loginStatus) ? {
        C: common_vendor.o(($event) => gotoPage(5)),
        D: !common_vendor.unref(loadingStatus)
      } : {}, {
        E: common_vendor.o(scroll_event),
        F: common_vendor.o(scrolltolower)
      });
    };
  }
};
var Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-92bb8f34"], ["__file", "/Users/fox/project/uniapp/lok\u97F3\u4E50/pages/home/home.vue"]]);
wx.createComponent(Component);
