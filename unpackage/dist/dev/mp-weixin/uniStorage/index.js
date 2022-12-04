"use strict";
var common_vendor = require("../common/vendor.js");
const setStorage = (key, data) => {
  common_vendor.index.setStorage({
    key,
    data: JSON.stringify(data),
    success(val) {
    },
    fail() {
    }
  });
};
const getStorage = (key) => {
  const data = common_vendor.index.getStorageSync(key);
  if (data) {
    return JSON.parse(data);
  } else {
    return "";
  }
};
const removeStorage = (key) => {
  common_vendor.index.removeStorageSync(key);
};
const clearStorage = () => {
  common_vendor.index.clearStorage();
};
var unistorage = {
  setStorage,
  getStorage,
  removeStorage,
  clearStorage
};
exports.unistorage = unistorage;
