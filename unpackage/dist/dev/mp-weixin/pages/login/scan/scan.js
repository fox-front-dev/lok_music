"use strict";
var common_vendor = require("../../../common/vendor.js");
var http_req = require("../../../http/req.js");
var uniStorage_index = require("../../../uniStorage/index.js");
require("../../../http/http.js");
const _sfc_main = {
  __name: "scan",
  setup(__props) {
    let qrurl = common_vendor.ref("");
    let test = common_vendor.ref("\u8BF7\u626B\u63CF\u4E8C\u7EF4\u7801");
    let timer = common_vendor.ref(0);
    let checkqrInterval = common_vendor.ref();
    let qrcodekey = common_vendor.ref();
    const getqrcode = async () => {
      await http_req.axios.getqrkey().then(async (res) => {
        qrcodekey.value = res.data.data.unikey;
        await http_req.axios.getqrbase64({ key: res.data.data.unikey, qrimg: "1" }).then((res2) => {
          qrurl.value = res2.data.data.qrimg;
        });
      });
    };
    const checkqrstatus = async () => {
      await http_req.axios.getqrstatus({ key: qrcodekey.value }).then((res) => {
        if (res.data.code == 800) {
          clearInterval(checkqrInterval.value);
          test.value = res.data.message;
        } else if (res.data.code == 801 || res.data.code == 802) {
          timer.value += 1;
          test.value = res.data.message;
          if (timer.value >= 60) {
            clearInterval(checkqrInterval.value);
            test.value = res.data.message;
          }
        } else {
          uniStorage_index.unistorage.setStorage("token", res.data.cookie);
          test.value = res.data.message;
          currentloginstatus();
          getuserInfo();
          clearInterval(checkqrInterval.value);
        }
      });
    };
    onpagehide(() => {
      clearInterval(checkqrInterval.value);
    });
    const currentloginstatus = async () => {
      await http_req.axios.loginstatus().then((res) => {
      });
    };
    const getuserInfo = async () => {
      await http_req.axios.getuserInfo().then((res) => {
      });
    };
    common_vendor.onMounted(() => {
      getqrcode();
      checkqrInterval.value = setInterval(() => {
        if (qrcodekey.value && qrurl.value) {
          checkqrstatus();
        }
      }, 1e3);
    });
    return (_ctx, _cache) => {
      return {
        a: common_vendor.unref(qrurl),
        b: common_vendor.t(common_vendor.unref(test))
      };
    };
  }
};
var MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-506d47c0"], ["__file", "/Users/fox/project/uniapp/lok\u97F3\u4E50/pages/login/scan/scan.vue"]]);
wx.createPage(MiniProgramPage);
