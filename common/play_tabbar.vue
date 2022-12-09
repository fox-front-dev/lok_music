<template>

	<view class="play_tabbar" v-show="!props.meauStatus" :class="store.state.css_style?'gray_filter':''">
		<view class="play_tabbar_1" :class="store.state.css_style?'play_tabbar_1_1':''"></view>
		<view class="playsetting">
			<image  v-show="!(musicInfo.musicImage)" src="../static/image/firefox.png" class="imagesetting" mode="">
			</image>
			<image  @click="gotodetailedInformation(musicInfo.id)" v-show="musicInfo.musicImage" :src="musicInfo.musicImage" class="imagesetting" mode=""></image>
			<view class="musicInfo"  @click="gotodetailedInformation(musicInfo.id)">
				<view class="title" style="font-size: 16px;">
					{{musicInfo.musicName}}
				</view>
				<view class="albums" style="font-size: 14px;">
					<text v-for="item in musicInfo.musicAuthor">{{item}}&nbsp;</text>
				</view>
			</view>
			<view class="right_">
				<view class="radioView">
					<image v-show="musicInfo.musicPlayStatus" class="imageadd " src="../static/image/stop.png" style=""
						mode="" @click="settingPlay(0)"></image>
					<image v-show="!musicInfo.musicPlayStatus" class="imageadd  imageadd2"
						src="../static/image/play.png" mode="" @click="settingPlay(1)"></image>
				</view>
				<image src="../static/image/next.png" style="width: 23px;height: 23px;" mode=""
					@click="store.commit('next')"></image>
			</view>
		</view>
	</view>
	<view class="" v-show="props.meauStatus">
		<view class="radioMeau_left"
			:class="[showMeauStatus?'':'tranX2',showMeauStatus&&firstOpen?'tranX2-2':'',store.state.css_style?'gray_filter':'']">
			<view class="titles" style="font-size: 16px;">
				<!-- {{musicInfo.musicName}} -->
				<uni-notice-bar :speed="300+'px'" scrollable single color="#000000" background-color="rgba(0,0, 0, 0)"
					:text="musicInfo.musicName" />
			</view>
			<image v-show="musicInfo.musicPlayStatus &&!showMeauStatus" class=" imageadd "
				src="../static/image/stop.png" style="" mode="" @click="settingPlay(0)"></image>
			<image v-show="!musicInfo.musicPlayStatus&&!showMeauStatus" class="imageadd " src="../static/image/play.png"
				mode="" @click="settingPlay(1)"></image>
			<image v-show="!showMeauStatus" src="../static/image/next.png" class="imageadd imageadd3"
				style="width: 23px;height: 23px;" mode="" @click="store.commit('next')"></image>

		</view>
		<view class="radioMeau_right" :class="store.state.css_style?'gray_filter':''">
			<!--  -->
			<image v-show="!(musicInfo.musicImage)" src="../static/image/firefox.png" class="imagesetting bradius"
				mode="" @click="showMeau"></image>
			<image v-show="musicInfo.musicImage" :src="musicInfo.musicImage" class="imagesetting bradius imageroles"
				:class="[roles?'':'rolesStop']" mode="" @click="showMeau"></image>
		</view>
	</view>
</template>
<script setup>
	import {
		ref,
		getCurrentInstance,
		watch,
		computed,
		onMounted,
		defineProps
	} from "vue"

	import store from "../store/index.js"
	let firstOpen = ref(false)
	let roles = ref(true)
	let props = defineProps({
		meauStatus: {
			type: Boolean,
			default: false
		}
	})
	let musicInfo = computed(() => {
		return store.state.musicInfo
	})
	const proxy = getCurrentInstance()
	// 前往音乐详情页面
	const gotodetailedInformation=(id)=>{
		if(!id) return
		uni.navigateTo({
			url:`/pages/detailedInformation/detailedInformation?id=${id}`
		})
	}
	const settingPlay = (index) => {
		if (index == 0) {
			store.state.musicInfo.musicPlayStatus = false
			roles.value = false
			store.commit("pause")
			return
		}
		if (!(store.state.musicInfo.musicPlayStatus) && store.state.musicInfo.firstPlay) {
			store.commit("play", 0)
			return
		}
		roles.value = true
		store.state.musicInfo.musicPlayStatus = true
		store.commit("continueplay")

	}
	const showMeauStatus = ref(true)
	const showMeau = () => {
		showMeauStatus.value = !showMeauStatus.value
		firstOpen.value = true
	}
</script>
<style scoped>
	.play_tabbar {
		position: fixed;
		bottom: 110rpx;
		width: 100%;
		height: 130rpx;
		display: flex;
		z-index: 99;
	}

	.rolesStop {
		animation-play-state: paused !important;
		-webkit-animation-play-state: paused !important;
	}

	.imageroles {
		animation: roles 8s linear infinite;
	}

	.play_tabbar_1 {
		position: absolute;
		left: 0;
		right: 0;
		top: 0;
		z-index: 9;
		width: 100%;
		height: 100%;
		backdrop-filter: blur(20px);
		background-color: rgba(238, 238, 238, 0.6);
		border-top-left-radius: 10px;
		border-top-right-radius: 10px;
	}

	.play_tabbar_1_1 {
		backdrop-filter: blur(40px) !important;
		background-color: rgba(238, 238, 238, 0.9) !important;
	}

	.playsetting {
		height: 100%;
		width: 100%;
		align-items: center;
		z-index: 10;
		display: flex;
	}

	.imagesetting {
		height: 40px;
		width: 40px;
		border-radius: 5px;
		vertical-align: middle;
		margin-left: 30rpx;
	}

	.musicInfo {
		margin-left: 10px;
	}

	.right_ {
		margin-right: 20px;
		align-items: center;
		flex: 1;
		display: flex;
		text-align: right;
		justify-content: flex-end;
	}

	.radioView {
		height: 80rpx;
		width: 80rpx;
		border-radius: 50%;
		box-shadow: 0 0 5px 0 rgba(0, 0, 0, 0.8);
		margin-right: 10px;
		/* text-align: center; */
		line-height: 80rpx;
		position: relative;
	}

	.imageadd {
		width: 20px;
		height: 20px;
		position: absolute;
		top: 50%;
		left: 50%;
		transform: translate(-50%, -50%);
	}

	.imageadd2 {
		left: 55% !important;
	}

	.imageadd3 {
		left: 65% !important;
	}

	.bradius {
		width: 70% !important;
		height: 70% !important;
		border-radius: 50%;
		vertical-align: middle;
		margin-left: 0rpx;
		box-shadow: 0 0 10px 11px rgba(0, 0, 0, 1);
	}

	.radioMeau_left {
		display: flex;
		align-items: center;
		padding-left: 15px;
		position: fixed;
		right: 15px;
		z-index: 998;
		bottom: 130rpx;
		height: 110rpx;
		width: 0%;
		background-color: white;
		backdrop-filter: blur(20px);
		background-color: rgba(238, 238, 238, 0.4);
		border-radius: 10px;
	}

	.tranX2 {
		animation: tranXright2 1.5s;
		animation-fill-mode: forwards;
	}

	.tranX2-2 {
		animation: tranXright22 1.5s;
		animation-fill-mode: forwards;
	}

	.radioMeau_right {
		position: fixed;
		right: 10px;
		z-index: 998;
		bottom: 130rpx;
		width: 110rpx;
		height: 110rpx;
		display: flex;
		align-items: center;
		justify-content: space-around;
		border-radius: 50%;
		box-shadow: 0 0 10px 5px rgba(0, 0, 0, 0.4);
	}

	.title {
		overflow: hidden;
		display: -webkit-box;
		-webkit-line-clamp: 1;
		-webkit-box-orient: vertical;
		word-break: break-all;
	}

	.titles {
		width: 70px;
		overflow: hidden;
		white-space: nowrap;
		display: -webkit-box;
		-webkit-line-clamp: 1;
		-webkit-box-orient: vertical;
		word-break: break-all;
	}

	::v-deep .uni-noticebar {
		padding: 10px 0;
		margin-bottom: 0;
	}


	@keyframes tranXright22 {
		0% {
			width: 50%;
			backdrop-filter: blur(20px);
			opacity: 1;
			background-color: rgba(238, 238, 238, 0.4);
		}

		100% {
			width: 110rpx;
			opacity: 0;
			backdrop-filter: blur(20px);
			background-color: rgba(238, 238, 238, 0.4);
		}
	}

	@keyframes tranXright2 {
		0% {
			width: 110rpx;
			backdrop-filter: blur(20px);
			opacity: 0;
			background-color: rgba(238, 238, 238, 0.4);
		}

		100% {
			width: 50%;
			opacity: 1;
			backdrop-filter: blur(20px);
			background-color: rgba(238, 238, 238, 0.4);
		}
	}

	@keyframes roles {
		0% {
			-webkit-transform: rotate(0deg);
		}

		50% {
			-webkit-transform: rotate(180deg);
		}

		100% {
			-webkit-transform: rotate(360deg);
		}
	}
</style>
