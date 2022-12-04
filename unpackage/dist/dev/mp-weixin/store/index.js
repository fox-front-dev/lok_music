"use strict";
var common_vendor = require("../common/vendor.js");
var http_req = require("../http/req.js");
const store = common_vendor.createStore({
  state: {
    phoneInfo: {
      statusbarHeight: 0
    },
    token: "",
    userId: "",
    userInfo: {
      nickname: "\u8BF7\u767B\u5F55",
      userId: "",
      userAvatar: ""
    },
    musicPlay: {
      playMusicList: [],
      playMusicURL: "",
      schedule: 0,
      player: common_vendor.index.getBackgroundAudioManager(),
      maxtime: 0,
      playStatus: false,
      musicIndex: 0
    },
    musicInfo: {
      musicName: "\u7545\u4EAB\u751F\u6D3B",
      musicAuthor: ["lok\u97F3\u4E50"],
      musicImage: "",
      musicPlayStatus: false,
      firstPlay: true
    },
    css_style: false
  },
  mutations: {
    phoneInfo(state, val) {
      state.phoneInfo = val;
    },
    token(state, val) {
      state.token = val;
    },
    userId(state, val) {
      state.userId = val;
    },
    userInfo(state, val) {
      state.userInfo = val;
    },
    changeMusic(state, val) {
      state.musicPlay.playMusicList = val.musiclist;
      state.musicPlay.musicIndex = val.index;
      state.musicPlay.player.autoplay = true;
    },
    async play(state, val) {
      state.musicInfo.firstPlay = false;
      state.musicInfo.musicName = state.musicPlay.playMusicList[state.musicPlay.musicIndex].name;
      state.musicInfo.musicImage = state.musicPlay.playMusicList[state.musicPlay.musicIndex].al.picUrl;
      state.musicInfo.musicPlayStatus = true;
      let list = [];
      state.musicPlay.playMusicList[state.musicPlay.musicIndex].ar.forEach((item) => {
        list.push(item.name);
      });
      state.musicInfo.musicAuthor = list;
      await http_req.axios.getsongsurl({
        id: state.musicPlay.playMusicList[state.musicPlay.musicIndex].id
      }).then((res) => {
        state.musicPlay.playMusicURL = res.data.data[0];
      });
      state.musicPlay.player.src = state.musicPlay.playMusicURL.url;
    },
    async next(state) {
      state.musicPlay.musicIndex++;
      state.musicInfo.musicName = state.musicPlay.playMusicList[state.musicPlay.musicIndex].name;
      state.musicInfo.musicImage = state.musicPlay.playMusicList[state.musicPlay.musicIndex].al.picUrl;
      state.musicInfo.musicPlayStatus = true;
      let list = [];
      state.musicPlay.playMusicList[state.musicPlay.musicIndex].ar.forEach((item) => {
        list.push(item.name);
      });
      state.musicInfo.musicAuthor = list;
      await http_req.axios.getsongsurl({
        id: state.musicPlay.playMusicList[state.musicPlay.musicIndex].id
      }).then((res) => {
        state.musicPlay.playMusicURL = res.data.data[0];
      });
      state.musicPlay.player.src = state.musicPlay.playMusicURL.url;
    },
    stop(state, val) {
      state.musicPlay.musicIndex = val;
      state.musicPlay.player.stop();
    },
    pause(state) {
      state.musicPlay.player.pause();
    },
    continueplay(state) {
      state.musicPlay.player.play();
    }
  },
  actions: {}
});
exports.store = store;
