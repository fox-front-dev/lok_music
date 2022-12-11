<template>
	<view class="loader" style="margin-top: 30vh;" v-if="loadingStatus"></view>
	<view class="detailedInformation" v-if="!loadingStatus">

		<image class="imagebackground" :src="musicInfo.al.picUrl" mode=""></image>
		<view :style="[{marginTop:statusBarHeight+'px'}]" class="detailedInformation_title">
			<view class="detailedInformation_title-style">
				<view class="iconsview">
					<uni-icons type="bottom" size="20" @click="goBack"></uni-icons>
				</view>
				<view class="">
					{{musicInfo.name}}
					<view class="">
						<text v-for="item,index in musicInfo.ar">{{item.name}}&nbsp;</text>
					</view>
				</view>
			</view>
		</view>
		<view class="detailedInformation_center">
			<view class="detailedInformation_center-style">
				<view class="detailedInformation_center-style_image"
					:class="playbackstate?'animation running':'animation pause'">
					<image class="detailedInformation_center_image" :src="musicInfo.al.picUrl" mode=""></image>
				</view>
				<view class="radio"></view>
			</view>
		</view>
		<view class="bottom_item">
			<view class="progress">
				<view class="startTime"></view>
				<view class="progress-box">
					<progress :percent="!playbackstate?percent:store.state.musicPlay.percent" activeColor="#10AEFF" stroke-width="3" />
				</view>
				<view class="endTime"></view>
			</view>
			<view class="iconMeaus">
				<view class="">
					<uni-icons custom-prefix="iconfont" v-if="randomBFStatus" @click="randomBF(true)" color="white"
						type="icon-xunhuanbofang" size="30"></uni-icons>
					<uni-icons custom-prefix="iconfont" v-if="!randomBFStatus" @click="randomBF(false)" color="white"
						type="icon-24gl-repeat2" size="30">
					</uni-icons>
				</view>
				<view class="">
					<uni-icons custom-prefix="iconfont" class="uni-icons" @click="previous" color="white"
						type="icon-shangyishoushangyige" size="30"></uni-icons>
				</view>
				<view class="">
					<uni-icons custom-prefix="iconfont" @click="changePlaybackstate(false)" v-if="playbackstate"
						class="uni-icons" color="white" type="icon-pause-full" size="30"></uni-icons>
					<uni-icons v-if="!playbackstate" @click="changePlaybackstate(true)" custom-prefix="iconfont"
						class="uni-icons" color="white" type="icon-kaishi1" size="30"></uni-icons>

				</view>
				<view class="">
					<uni-icons custom-prefix="iconfont" @click="next" class="uni-icons" color="white"
						type="icon-xiayigexiayishou" size="30"></uni-icons>
				</view>
				<view class="">
					<uni-icons class="uni-icons" color="white" type="bars" size="30"></uni-icons>
				</view>
			</view>
		</view>
	</view>

</template>

<script setup>
	import {
		ref,
		getCurrentInstance,
		nextTick,
		watch,
		computed
	} from "vue"
	import store from "../../store/index.js"
	import axios from "../../http/req.js"
	import debounce from "../../common/debounce.js"
	import {
		onLoad,
		onShow,
		onUnload
	} from "@dcloudio/uni-app";
	import uniStorage from "../../uniStorage/index.js";
	let musicId = ref("")
	let statusBarHeight = ref("")
	let pgList = ref([0, 0, 0, 0])
	let loadingStatus = ref(true)
	let playbackstate = ref(false)
	let progress=ref(0)
	onLoad((option) => {
		// 计算通知栏高度
		statusBarHeight.value = store.state.phoneInfo.statusbarHeight
		// 取出是否按照顺序播放
		randomBFStatus.value = uniStorage.getStorage("rando")
		// 设置歌曲id值
		musicId.value = option.id
		getMusicInfo()
		// 判断当前是否播放该音乐，修改暂停和播放的图标
		let playMusic=store.state.musicPlay.playMusicList[store.state.musicPlay.musicIndex]
		if(playMusic.id!=musicId.value){
			playbackstate.value=false
		}else{
			playbackstate.value=true
		}
	})
	// 返回上一页
	const goBack = () => {
		uni.navigateBack({
			delta: 1,
			animationType: 'slide-out-bottom',
			animationDuration: 700
		})
	}
	// 监听如果下一首，则修改当前页面的信息
	watch(() => store.state.musicPlay.musicIndex, (newVal, oldVal) => {
		let obj = store.state.musicPlay.playMusicList[store.state.musicPlay.musicIndex]
		musicInfo.value = obj
	})
	// 
	
	// 获取音乐详情信息
	let musicInfo = ref({})
	const getMusicInfo = async () => {
		await axios.getsongsInfo({
			ids: musicId.value
		}).then(res => {
			musicInfo.value = res.data.songs[0]
			setTimeout(() => {
				loadingStatus.value = false
			}, 1000)
		})
	}
	// 播放音乐
	const changePlaybackstate = (bool) => {
		playbackstate.value = bool
		// 判断当前是否在播放当前音乐,如果是播放当前的音乐，点击播放之后让他继续。如果不是则重新播放
		if (bool) {
			let playMusic=store.state.musicPlay.playMusicList[store.state.musicPlay.musicIndex]
			if(playMusic.id!=musicId.value){
				store.state.musicPlay.percent=0
				store.commit("PlayOutMusic", musicInfo.value)
			}else{
				store.commit("continueplay")
			}
		} else {
			store.commit("pause")
		}
	}
	const previous = () => {
		store.commit("previous")
	}
	// 下一首
	const next = () => {
		store.commit("next")
	}
	// 随机播放
	let randomBFStatus = ref(false)
	const randomBF = (bool) => {
		randomBFStatus.value = !bool
		// 设置随机播放
		uniStorage.setStorage("rando", !bool)
		store.commit("rando", !bool)
	}
</script>

<style scoped>
	.detailedInformation {
		box-sizing: border-box;
		height: 100vh;
		overflow: hidden;
	}

	.iconsview {
		position: absolute;
		left: 30px;
	}

	.detailedInformation_title {
		width: 100%;
		text-align: center;
		font-size: 18px;
		font-weight: bold;
	}

	.detailedInformation_title-style {
		display: flex;
		justify-content: space-between;
		padding-top: 10px;
		box-sizing: border-box;
		align-items: center;
	}


	.detailedInformation_title-style>view {
		flex: 1;
	}

	.imagebackground {
		height: 100%;
		width: 100%;
		z-index: -1;
		position: absolute;
		filter: blur(60px);
	}

	.detailedInformation_center-style {
		position: relative;
		width: 70vw;
		height: 70vw;
		border-radius: 50%;
		background-color: black;
		margin: 60px auto;
	}

	.detailedInformation_center_image {
		transform: translate(-50%, -50%);
		width: 45vw;
		height: 45vw;
		position: absolute;
		top: 50%;
		left: 50%;
		border-radius: 50%;
		border: 1px solid white;
		overflow: hidden;
	}

	.animation {
		animation: roler 5s linear infinite;
	}

	.pause {
		animation-play-state: paused;
	}

	.running {
		animation-play-state: running;
	}

	.detailedInformation_center-style_image {
		width: 100%;
		height: 100%;

	}

	.progress {
		display: flex;
		align-items: center;

	}

	.progress-box {
		flex: 1;
	}

	.startTime {
		width: 50rpx;
		text-align: center;
	}

	.endTime {
		width: 50rpx;
		text-align: center;
	}

	.iconMeaus {
		display: flex;
		width: 80%;
		margin: 20px auto;
		justify-content: space-between;
		align-items: center;
	}

	.iconMeaus>view {
		width: 10vw;
		height: 10vw;
		text-align: center;
		position: relative;
	}

	.iconMeaus>view:nth-child(3) {
		width: 15vw;
		height: 15vw;
		border: 1px solid white;
		border-radius: 50%;
	}

	.uni-icons {
		position: absolute;
		top: 50%;
		left: 50%;
		transform: translate(-50%, -50%);
	}

	.bottom_item {
		color: white;
		font-size: 12px;
		position: fixed;
		bottom: 10px;
		width: 100%;
	}

	@keyframes roler {
		0% {
			transform: rotate(0deg);
		}

		100% {
			transform: rotate(360deg);
		}
	}
</style>
