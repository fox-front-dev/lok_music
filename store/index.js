import {
	createStore
} from 'vuex'
import axios from "../http/req.js"

const store = createStore({
	state: {
		//手机状态栏高度
		phoneInfo: {
			statusbarHeight: 0
		},
		token: "",
		userId: "",
		userInfo: {
			nickname: "请登录",
			userId: "",
			userAvatar: ""
		},
		musicPlay: {
			// 播放列表
			playMusicList: [],
			playMusicURL: "",

			// 当前时常
			schedule: 0,
			// 播放器实例
			player: uni.getBackgroundAudioManager(),
			// 总时长
			maxtime: 0,
			// 播放器状态
			playStatus: false,
			// 音乐索引
			musicIndex: 0,
			// musicStop:null
		},
		musicInfo: {
			musicName: "畅享生活",
			musicAuthor: ["lok音乐"],
			musicImage: "",
			musicPlayStatus: false,
			firstPlay: true
		},
		// 控制是否哀悼模式 false否，true是
		css_style:false
	},
	mutations: {
		//收入手机状态栏高度
		phoneInfo(state, val) {
			state.phoneInfo = val
		},
		token(state, val) {
			state.token = val
		},
		userId(state, val) {
			state.userId = val
		},
		userInfo(state, val) {
			state.userInfo = val
		},
		// 选择要播放的音乐
		changeMusic(state, val) {
			state.musicPlay.playMusicList = val.musiclist
			state.musicPlay.musicIndex = val.index
			state.musicPlay.player.autoplay = true;
		},

		// 开始播放音乐
		async play(state, val) {
			state.musicInfo.firstPlay = false
			state.musicInfo.musicName = state.musicPlay.playMusicList[state.musicPlay.musicIndex].name
			state.musicInfo.musicImage = state.musicPlay.playMusicList[state.musicPlay.musicIndex].al.picUrl
			state.musicInfo.musicPlayStatus = true
			let list = []
			state.musicPlay.playMusicList[state.musicPlay.musicIndex].ar.forEach(item => {
				list.push(item.name)
			})
			state.musicInfo.musicAuthor = list
			await axios.getsongsurl({
				id: state.musicPlay.playMusicList[state.musicPlay.musicIndex].id
			}).then(res => {
				state.musicPlay.playMusicURL = res.data.data[0]
			})
		
			state.musicPlay.player.src = state.musicPlay.playMusicURL.url

		},

		// 下一首
		async next(state) {
			state.musicPlay.musicIndex++;
			state.musicInfo.musicName = state.musicPlay.playMusicList[state.musicPlay.musicIndex].name
			state.musicInfo.musicImage = state.musicPlay.playMusicList[state.musicPlay.musicIndex].al.picUrl
			state.musicInfo.musicPlayStatus = true
			let list = []
			state.musicPlay.playMusicList[state.musicPlay.musicIndex].ar.forEach(item => {
				list.push(item.name)
			})
			state.musicInfo.musicAuthor = list
			await axios.getsongsurl({
				id: state.musicPlay.playMusicList[state.musicPlay.musicIndex].id
			}).then(res => {
				state.musicPlay.playMusicURL = res.data.data[0]
			})
			// 取出音乐总时间
			// state.musicPlay.maxtime = state.musicPlay.playMusicURL.time+2000
			// 
			state.musicPlay.player.src = state.musicPlay.playMusicURL.url

		},
		// 停止播放
		stop(state, val) {
			state.musicPlay.musicIndex = val
			state.musicPlay.player.stop();
		},
		// 暂停播放
		pause(state) {
			state.musicPlay.player.pause()
		},
		// 继续播放
		continueplay(state) {
			
			state.musicPlay.player.play()
		}
		
	},
	actions: {
		//相当于异步的操作,不能直接改变state的值，只能通过触发mutations的方法才能改变
	}
})
export default store
