"use strict";
var common_vendor = require("../../../common/vendor.js");
var http_req = require("../../../http/req.js");
var uniStorage_index = require("../../../uniStorage/index.js");
var store_index = require("../../../store/index.js");
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
  __name: "login",
  setup(__props) {
    let login_data = common_vendor.ref({
      phone: "",
      password: ""
    });
    let login_data2 = common_vendor.ref({
      phone: "",
      captcha: ""
    });
    let getCodeText = common_vendor.ref("\u83B7\u53D6\u9A8C\u8BC1\u7801");
    let loginStatus = common_vendor.ref(true);
    let login = async (index) => {
      if (index == 1) {
        if (!/^1[3456789]\d{9}$/.test(login_data.value.phone)) {
          common_vendor.index.showToast({
            title: "\u624B\u673A\u53F7\u586B\u5199\u9519\u8BEF",
            duration: 2e3,
            icon: "none"
          });
        } else {
          await http_req.axios.login(login_data.value).then((res) => {
            if (res.data.code !== 200) {
              common_vendor.index.showToast({
                title: "\u8BF7\u7A0D\u540E\u91CD\u8BD5\uFF0C\u6216\u8005\u9A8C\u8BC1\u7801\u767B\u5F55",
                duration: 2e3,
                icon: "none"
              });
            } else {
              if (res.code == 200) {
                uniStorage_index.unistorage.setStorage("token", res.data.token);
              } else {
                common_vendor.index.showToast({
                  title: "\u8BF7\u7A0D\u540E\u91CD\u8BD5",
                  duration: 2e3,
                  icon: "none"
                });
              }
            }
          });
        }
      } else if (index == 2) {
        if (!/^1[3456789]\d{9}$/.test(login_data2.value.phone)) {
          common_vendor.index.showToast({
            title: "\u624B\u673A\u53F7\u586B\u5199\u9519\u8BEF",
            duration: 2e3,
            icon: "none"
          });
        } else {
          if (login_data2.value.captcha) {
            await http_req.axios.login(login_data2.value).then((res) => {
              if (res.data.code == 200) {
                uniStorage_index.unistorage.setStorage("token", res.data.token);
                uniStorage_index.unistorage.setStorage("userId", res.data.account.id);
                common_vendor.index.redirectTo({
                  url: "/pages/mainEntrance/mainEntrance"
                });
              } else {
                common_vendor.index.showToast({
                  title: "\u8BF7\u7A0D\u540E\u91CD\u8BD5",
                  duration: 2e3,
                  icon: "none"
                });
              }
            });
          }
        }
      }
    };
    const getCode = async () => {
      if (getCodeText.value == "\u83B7\u53D6\u9A8C\u8BC1\u7801") {
        if (!/^1[3456789]\d{9}$/.test(login_data2.value.phone)) {
          common_vendor.index.showToast({
            title: "\u624B\u673A\u53F7\u9519\u8BEF",
            duration: 2e3,
            icon: "error"
          });
        } else {
          getCodeText.value = 60;
          let mysetInterval = setInterval(() => {
            getCodeText.value--;
            if (getCodeText.value <= 0) {
              clearInterval(mysetInterval);
              getCodeText.value = "\u83B7\u53D6\u9A8C\u8BC1\u7801";
            }
          }, 1e3);
          await http_req.axios.captcha({
            phone: login_data2.value.phone
          });
        }
      }
    };
    const goregister = () => {
      common_vendor.index.navigateTo({
        url: "/pages/login/register/register"
      });
    };
    const changeloginStatus = (val) => {
      loginStatus.value = !val;
    };
    const gotoqj = () => {
      common_vendor.index.navigateTo({
        url: "/pages/login/scan/scan"
      });
    };
    common_vendor.onMounted(() => {
    });
    return (_ctx, _cache) => {
      return common_vendor.e({
        a: common_vendor.unref(loginStatus)
      }, common_vendor.unref(loginStatus) ? {
        b: common_vendor.unref(login_data).phone,
        c: common_vendor.o(($event) => common_vendor.unref(login_data).phone = $event.detail.value),
        d: common_vendor.unref(login_data).password,
        e: common_vendor.o(($event) => common_vendor.unref(login_data).password = $event.detail.value),
        f: common_vendor.o(($event) => common_vendor.unref(login)(1)),
        g: common_vendor.p({
          type: "loop",
          color: "white",
          size: "16"
        }),
        h: common_vendor.o(($event) => changeloginStatus(true)),
        i: common_vendor.p({
          type: "loop",
          color: "white",
          size: "16"
        }),
        j: common_vendor.o(gotoqj),
        k: common_vendor.o(goregister),
        l: common_vendor.p({
          color: "green",
          type: "redo-filled",
          size: "18"
        }),
        m: common_vendor.o(goregister),
        n: common_vendor.n(common_vendor.unref(store_index.store).state.css_style ? "gray_filter" : "")
      } : {}, {
        o: !common_vendor.unref(loginStatus)
      }, !common_vendor.unref(loginStatus) ? {
        p: common_vendor.unref(login_data2).phone,
        q: common_vendor.o(($event) => common_vendor.unref(login_data2).phone = $event.detail.value),
        r: common_vendor.unref(login_data2).captcha,
        s: common_vendor.o(($event) => common_vendor.unref(login_data2).captcha = $event.detail.value),
        t: common_vendor.t(common_vendor.unref(getCodeText)),
        v: common_vendor.o(getCode),
        w: common_vendor.o(($event) => common_vendor.unref(login)(2)),
        x: common_vendor.p({
          type: "loop",
          color: "white",
          size: "16"
        }),
        y: common_vendor.o(($event) => changeloginStatus(false)),
        z: common_vendor.o(goregister),
        A: common_vendor.p({
          color: "green",
          type: "redo-filled",
          size: "18"
        }),
        B: common_vendor.o(goregister),
        C: common_vendor.n(common_vendor.unref(store_index.store).state.css_style ? "gray_filter" : "")
      } : {});
    };
  }
};
var MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-1389b5f4"], ["__file", "/Users/fox/project/uniapp/lok\u97F3\u4E50/pages/login/login/login.vue"]]);
wx.createPage(MiniProgramPage);
