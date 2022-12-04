"use strict";
var common_vendor = require("../common/vendor.js");
var uniStorage_index = require("../uniStorage/index.js");
let baseUrl = "http://81.68.206.160:3000";
var http = {
  get(opt) {
    return new Promise((resolve, reject) => {
      common_vendor.index.request({
        data: opt.data || {},
        url: baseUrl + opt.url,
        method: opt.methods || "GET",
        header: {
          "content-type": " application/json; charset=utf-8",
          "Authorization": uniStorage_index.unistorage.getStorage("token")
        },
        success: (data) => {
          resolve(data);
        },
        fail: (err) => {
          reject(err);
        }
      });
    });
  },
  post(opt) {
    return new Promise((resolve, reject) => {
      common_vendor.index.request({
        data: opt.data,
        url: baseUrl + opt.url,
        method: opt.method || "POST",
        header: {
          "content-type": " application/json; charset=utf-8",
          Authorization: common_vendor.index.getStorageSync("token")
        },
        success: (data) => {
          resolve(data);
        },
        fail: (err) => {
          reject(err);
        }
      });
    });
  }
};
exports.http = http;
