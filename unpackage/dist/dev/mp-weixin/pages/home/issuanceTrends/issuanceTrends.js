"use strict";
var common_vendor = require("../../../common/vendor.js");
var store_index = require("../../../store/index.js");
var http_req = require("../../../http/req.js");
require("../../../http/http.js");
require("../../../uniStorage/index.js");
if (!Array) {
  const _easycom_uni_icons2 = common_vendor.resolveComponent("uni-icons");
  const _easycom_uni_easyinput2 = common_vendor.resolveComponent("uni-easyinput");
  const _easycom_uni_file_picker2 = common_vendor.resolveComponent("uni-file-picker");
  const _easycom_uni_popup2 = common_vendor.resolveComponent("uni-popup");
  (_easycom_uni_icons2 + _easycom_uni_easyinput2 + _easycom_uni_file_picker2 + _easycom_uni_popup2)();
}
const _easycom_uni_icons = () => "../../../uni_modules/uni-icons/components/uni-icons/uni-icons.js";
const _easycom_uni_easyinput = () => "../../../uni_modules/uni-easyinput/components/uni-easyinput/uni-easyinput.js";
const _easycom_uni_file_picker = () => "../../../uni_modules/uni-file-picker/components/uni-file-picker/uni-file-picker.js";
const _easycom_uni_popup = () => "../../../uni_modules/uni-popup/components/uni-popup/uni-popup.js";
if (!Math) {
  (_easycom_uni_icons + _easycom_uni_easyinput + _easycom_uni_file_picker + _easycom_uni_popup)();
}
const _sfc_main = {
  __name: "issuanceTrends",
  setup(__props) {
    let statusBarHeight = common_vendor.ref();
    let testvalue = common_vendor.ref("");
    let placeholderStyle = "font-size:16px";
    let selectPeople = common_vendor.ref(false);
    let startrecordericon = common_vendor.ref(false);
    let tempFilePath = common_vendor.ref("");
    let selectsongs = common_vendor.ref("");
    const recorderManager = common_vendor.ref();
    const proxy = common_vendor.getCurrentInstance();
    const gobacks = () => {
      setTimeout(() => {
        common_vendor.index.$emit("refreshData");
        common_vendor.index.navigateBack(-1);
      }, 1e3);
    };
    const selectvalue = common_vendor.ref([]);
    const searchbtn = async () => {
      if (selectsongs.value) {
        await http_req.axios.search({ keywords: selectsongs.value }).then((res) => {
          selectvalue.value = res.data.result.songs;
        }).catch((err) => {
          setTimeout(() => {
            searchbtn();
          }, 1e3);
        });
      } else {
        return;
      }
    };
    const changeselectPeople = () => {
      selectPeople.value = !selectPeople.value;
    };
    const uploadImage = () => {
      proxy.refs.files.chooseFiles();
    };
    const tempFile = (flag) => {
      if (flag == "play") {
        const innerAudioContext = common_vendor.index.createInnerAudioContext();
        innerAudioContext.src = tempFilePath.value;
        innerAudioContext.play();
      } else {
        tempFilePath.value = "";
      }
    };
    const recorderManagers = () => {
      proxy.refs.popup.open();
    };
    const startrecorder = () => {
      if (!startrecordericon.value && !tempFilePath.value) {
        startrecordericon.value = !startrecordericon.value;
        const options = {
          duration: 6e5,
          sampleRate: 44100,
          numberOfChannels: 1,
          encodeBitRate: 192e3,
          format: "mp3",
          frameSize: 50
        };
        recorderManager.value.start(options);
      } else if (tempFilePath.value) {
        common_vendor.index.showToast({
          title: "\u5DF2\u7ECF\u5B58\u5728\u5F55\u97F3\u4E86",
          duration: 2e3
        });
        return;
      } else {
        startrecordericon.value = !startrecordericon.value;
        recorderManager.value.stop();
      }
    };
    const gotoselectsongsPage = () => {
      getlastplaysong();
      proxy.refs.popup2.open();
    };
    const lastplaymusic = common_vendor.ref([]);
    const getlastplaysong = async () => {
      await http_req.axios.lastplaysong({}).then((res) => {
        lastplaymusic.value = res.data.data.list;
      });
    };
    let selectmusicval = common_vendor.ref("");
    let musicid = common_vendor.ref("");
    const selectmusic = async (id) => {
      await http_req.axios.getsongsInfo({ ids: id }).then((res) => {
        selectmusicval.value = res.data.songs;
      }).catch((err) => {
        setTimeout(() => {
          selectmusic(id);
        }, 1e3);
      });
      musicid.value = id;
      proxy.refs.popup2.close();
    };
    const send = async () => {
      if (!testvalue.value) {
        common_vendor.index.showToast({
          title: "\u8BF7\u5148\u8F93\u5165\u5185\u5BB9",
          icon: "none"
        });
        return;
      }
      await http_req.axios.shareevent({ id: musicid.value, type: "song", msg: testvalue.value }).then((res) => {
        gobacks();
      }).catch((err) => {
        common_vendor.index.showToast({
          title: "\u7F51\u7EDC\u4E0D\u4F73\u8BF7\u7A0D\u540E\u518D\u8BD5",
          icon: "none"
        });
      });
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
      recorderManager.value = common_vendor.index.getRecorderManager();
      recorderManager.value.onStop((e) => {
        tempFilePath.value = e.tempFilePath;
      });
    });
    return (_ctx, _cache) => {
      return common_vendor.e({
        a: common_vendor.o(gobacks),
        b: common_vendor.p({
          type: "back",
          size: "20"
        }),
        c: common_vendor.o(send),
        d: common_vendor.o(($event) => common_vendor.isRef(testvalue) ? testvalue.value = $event : testvalue = $event),
        e: common_vendor.p({
          borderColor: "white",
          maxlength: "-1",
          placeholderStyle: common_vendor.unref(placeholderStyle),
          autoHeight: true,
          focus: true,
          inputBorder: false,
          type: "textarea",
          placeholder: "Tips:\u8BE5\u9875\u9762\u6CA1\u6709\u63A5\u53E3,\u9664\u4E86\u5206\u4EAB\u97F3\u4E50\u548C\u6587\u5B57,\u5176\u4ED6\u529F\u80FD\u6682\u672A\u5B9E\u73B0",
          modelValue: common_vendor.unref(testvalue)
        }),
        f: common_vendor.sr("files", "72546150-2"),
        g: common_vendor.p({
          ["auto-upload"]: false,
          limit: "9"
        }),
        h: common_vendor.unref(selectmusicval)
      }, common_vendor.unref(selectmusicval) ? {
        i: common_vendor.unref(selectmusicval)[0].al.picUrl,
        j: common_vendor.t(common_vendor.unref(selectmusicval)[0].name),
        k: common_vendor.f(common_vendor.unref(selectmusicval)[0].ar, (item, k0, i0) => {
          return {
            a: common_vendor.t(item.name)
          };
        })
      } : {}, {
        l: common_vendor.o(($event) => gotoselectsongsPage()),
        m: common_vendor.p({
          color: "#676767",
          size: "23",
          ["custom-prefix"]: "iconfont",
          type: "icon-music"
        }),
        n: common_vendor.o(uploadImage),
        o: common_vendor.p({
          color: "#676767",
          size: "25",
          ["custom-prefix"]: "iconfont",
          type: "icon-tupian"
        }),
        p: common_vendor.o(recorderManagers),
        q: common_vendor.p({
          color: "#676767",
          size: "25",
          ["custom-prefix"]: "iconfont",
          type: "icon-maikefeng"
        }),
        r: common_vendor.p({
          color: "#676767",
          size: "23",
          ["custom-prefix"]: "iconfont",
          type: "icon-aite"
        }),
        s: common_vendor.unref(selectPeople)
      }, common_vendor.unref(selectPeople) ? {} : {}, {
        t: !common_vendor.unref(selectPeople)
      }, !common_vendor.unref(selectPeople) ? {
        v: common_vendor.p({
          ["custom-prefix"]: "custom-icon",
          type: "bottom",
          size: "12"
        })
      } : {}, {
        w: common_vendor.unref(selectPeople)
      }, common_vendor.unref(selectPeople) ? {
        x: common_vendor.p({
          ["custom-prefix"]: "custom-icon",
          type: "top",
          size: "12"
        })
      } : {}, {
        y: common_vendor.o(changeselectPeople),
        z: common_vendor.n(common_vendor.unref(store_index.store).state.css_style ? "gray_filter" : ""),
        A: common_vendor.unref(statusBarHeight) + "px",
        B: common_vendor.unref(tempFilePath)
      }, common_vendor.unref(tempFilePath) ? {
        C: common_vendor.o(($event) => tempFile("play"))
      } : {}, {
        D: !common_vendor.unref(startrecordericon)
      }, !common_vendor.unref(startrecordericon) ? {
        E: common_vendor.p({
          color: "white",
          type: "mic-filled",
          size: "40"
        })
      } : {}, {
        F: common_vendor.unref(startrecordericon)
      }, common_vendor.unref(startrecordericon) ? {
        G: common_vendor.p({
          color: "white",
          type: "spinner-cycle",
          size: "40"
        })
      } : {}, {
        H: common_vendor.o(startrecorder),
        I: common_vendor.unref(tempFilePath)
      }, common_vendor.unref(tempFilePath) ? {
        J: common_vendor.o(($event) => tempFile("del"))
      } : {}, {
        K: common_vendor.sr("popup", "72546150-9"),
        L: common_vendor.p({
          type: "bottom"
        }),
        M: common_vendor.unref(selectsongs),
        N: common_vendor.o(($event) => common_vendor.isRef(selectsongs) ? selectsongs.value = $event.detail.value : selectsongs = $event.detail.value),
        O: common_vendor.p({
          type: "search",
          size: "20"
        }),
        P: common_vendor.o(searchbtn),
        Q: !selectvalue.value.length
      }, !selectvalue.value.length ? {
        R: common_vendor.f(lastplaymusic.value, (item, index, i0) => {
          return {
            a: item.data.al.picUrl,
            b: common_vendor.t(item.data.name),
            c: common_vendor.f(item.data.ar, (i, k1, i1) => {
              return {
                a: common_vendor.t(i.name)
              };
            }),
            d: common_vendor.o(($event) => selectmusic(item.data.id))
          };
        })
      } : {}, {
        S: selectvalue.value.length
      }, selectvalue.value.length ? {
        T: common_vendor.f(selectvalue.value, (item, index, i0) => {
          return {
            a: common_vendor.t(index + 1),
            b: common_vendor.t(item.album.name),
            c: common_vendor.f(item.artists, (i, k1, i1) => {
              return {
                a: common_vendor.t(i.name)
              };
            }),
            d: common_vendor.o(($event) => selectmusic(item.id))
          };
        })
      } : {}, {
        U: common_vendor.sr("popup2", "72546150-12"),
        V: common_vendor.p({
          type: "bottom"
        })
      });
    };
  }
};
var MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-72546150"], ["__file", "/Users/fox/project/uniapp/lok\u97F3\u4E50/pages/home/issuanceTrends/issuanceTrends.vue"]]);
wx.createPage(MiniProgramPage);
