"use strict";
var common_vendor = require("../../../common/vendor.js");
var common_debounce = require("../../../common/debounce.js");
var http_req = require("../../../http/req.js");
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
  __name: "register",
  setup(__props) {
    let inputstatus = common_vendor.ref(true);
    let textstatus = common_vendor.ref(true);
    let passwordstatus = common_vendor.ref(true);
    let formInfo = common_vendor.ref({
      captcha: "",
      phone: "",
      password: "",
      password2: "",
      nickname: ""
    });
    const getCodeText = common_vendor.ref("\u83B7\u53D6\u9A8C\u8BC1\u7801");
    const goback = () => {
      common_vendor.index.navigateBack({
        delta: 1
      });
    };
    const checkusername = () => {
      d();
    };
    const d = common_debounce.debounce(() => {
      http_req.axios.checknickname({ nickname: formInfo.value.nickname }).then((res) => {
        if (res.data.duplicated) {
          textstatus.value = false;
        } else {
          textstatus.value = true;
        }
      });
    }, 1e3);
    const passwordstatusinput = () => {
      if (formInfo.value.password.length <= 6) {
        passwordstatus.value = false;
      } else {
        passwordstatus.value = true;
      }
    };
    const getcatch = async () => {
      if (getCodeText.value == "\u83B7\u53D6\u9A8C\u8BC1\u7801") {
        if (!/^1[3456789]\d{9}$/.test(formInfo.value.phone)) {
          common_vendor.index.showToast({
            title: "\u624B\u673A\u53F7\u9519\u8BEF",
            duration: 2e3,
            icon: "none"
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
            phone: formInfo.value.phone
          }).then((res) => {
            inputstatus.value = false;
          });
        }
      }
    };
    const register = async () => {
      if (formInfo.value.password != formInfo.value.password2) {
        common_vendor.index.showToast({
          title: "\u4E24\u6B21\u5BC6\u7801\u8F93\u5165\u7684\u4E0D\u4E00\u81F4",
          icon: "none"
        });
      } else {
        if (formInfo.value.captcha) {
          inputstatus.value = true;
          await http_req.axios.register(formInfo.value).then((res) => {
            console.log(res);
            if (res.data.code == 200) {
              common_vendor.index.showToast({
                title: "\u529F\u80FD\u672A\u6D4B\u8BD5\uFF0C\u5982\u679C\u6CE8\u518C\u5931\u8D25\u8BF7\u8054\u7CFB\u6211",
                icon: "none"
              });
              uniStorage_index.unistorage.setStorage("token", res.data.token);
              uniStorage_index.unistorage.setStorage("userId", res.data.account.id);
              common_vendor.index.redirectTo({
                url: "/pages/mainEntrance/mainEntrance"
              });
            } else {
              common_vendor.index.showToast({
                title: "\u6CE8\u518C\u5931\u8D25\uFF0C\u8BF7\u7A0D\u540E\u518D\u8BD5",
                icon: "none"
              });
            }
          });
        }
      }
    };
    return (_ctx, _cache) => {
      return common_vendor.e({
        a: common_vendor.unref(inputstatus)
      }, common_vendor.unref(inputstatus) ? {
        b: common_vendor.unref(formInfo).phone,
        c: common_vendor.o(($event) => common_vendor.unref(formInfo).phone = $event.detail.value)
      } : {}, {
        d: !common_vendor.unref(inputstatus)
      }, !common_vendor.unref(inputstatus) ? {
        e: common_vendor.unref(formInfo).phone,
        f: common_vendor.o(($event) => common_vendor.unref(formInfo).phone = $event.detail.value)
      } : {}, {
        g: common_vendor.t(getCodeText.value),
        h: common_vendor.o(getcatch),
        i: common_vendor.o([($event) => common_vendor.unref(formInfo).nickname = $event.detail.value, checkusername]),
        j: common_vendor.n(common_vendor.unref(textstatus) ? "" : "redtext"),
        k: common_vendor.unref(formInfo).nickname,
        l: common_vendor.o([($event) => common_vendor.unref(formInfo).password = $event.detail.value, passwordstatusinput]),
        m: common_vendor.n(common_vendor.unref(passwordstatus) ? "" : "redtext"),
        n: common_vendor.unref(formInfo).password,
        o: common_vendor.unref(formInfo).password2,
        p: common_vendor.o(($event) => common_vendor.unref(formInfo).password2 = $event.detail.value),
        q: common_vendor.unref(formInfo).captcha,
        r: common_vendor.o(($event) => common_vendor.unref(formInfo).captcha = $event.detail.value),
        s: common_vendor.o(register),
        t: common_vendor.o(goback),
        v: common_vendor.p({
          color: "green",
          type: "redo-filled",
          size: "18"
        }),
        w: common_vendor.o(goback),
        x: common_vendor.n(_ctx.store.state.css_style ? "gray_filter" : "")
      });
    };
  }
};
var MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-417ad080"], ["__file", "/Users/fox/project/uniapp/lok\u97F3\u4E50/pages/login/register/register.vue"]]);
wx.createPage(MiniProgramPage);
