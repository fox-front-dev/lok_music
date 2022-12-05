<template>
	<view class="loader" style="margin-top: 30vh;" v-show="loadingStatus"></view>
	<view  class="detailedInformation"  v-show="!loadingStatus">
		
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
				<view class="detailedInformation_center-style_image">
					<image class="detailedInformation_center_image" :src="musicInfo.al.picUrl" mode=""></image>
				</view>
				<view class="radio"></view>
			</view>
		</view>
		<view class="bottom_item">
			<view class="progress">
				<view class="startTime">时间</view>
				<view class="progress-box">
					<progress  :percent="pgList[3]" activeColor="#10AEFF" stroke-width="3" />
				</view>
				<view class="endTime">总时间</view>
			</view>
			<view class="iconMeaus">
				<view class="">
					<uni-icons custom-prefix="iconfont" color="white" type="icon-xunhuanbofang" size="30"></uni-icons>
					<uni-icons custom-prefix="iconfont" v-if="false"  color="white" type="icon-24gl-repeat2" size="30"></uni-icons>
				</view>
				<view class="">
					<uni-icons  custom-prefix="iconfont" class="uni-icons"  color="white" type="icon-shangyishoushangyige" size="30"></uni-icons>
					
				</view>
				<view class="">
					<uni-icons custom-prefix="iconfont"  class="uni-icons"  color="white" type="icon-pause-full" size="30"></uni-icons>
					<uni-icons  custom-prefix="iconfont"  v-if="false" class="uni-icons"  color="white" type="icon-kaishi1" size="30"></uni-icons>
			
				</view>
				<view class="">
					<uni-icons  custom-prefix="iconfont" class="uni-icons"  color="white" type="icon-xiayigexiayishou" size="30"></uni-icons>
				</view>
				<view class="">
					<uni-icons  class="uni-icons"  color="white" type="bars" size="30"></uni-icons>
				</view>
			</view>
		</view>
	</view>

</template>

<script setup>
	import {
		ref,
		getCurrentInstance,
		nextTick
	} from "vue"
	import store from "../../store/index.js"
	import axios from "../../http/req.js"
	import debounce from "../../common/debounce.js"
	import {
		onLoad,
		onShow,
		onUnload
	} from "@dcloudio/uni-app";
	let musicId = ref("")
	let statusBarHeight = ref("")
	let pgList = ref([0, 0, 0, 0])
	let loadingStatus=ref(true)
	onLoad((option) => {
		statusBarHeight.value = store.state.phoneInfo.statusbarHeight
		musicId.value = option.id
		getMusicInfo()
	})
	const goBack = () => {
		uni.navigateBack({
			delta: 1,
			animationType: 'slide-out-bottom',
			animationDuration: 700
		})
	}
	// 
	let musicInfo = ref({})
	const getMusicInfo = async () => {
		await axios.getsongsInfo({
			ids: musicId.value
		}).then(res => {
			musicInfo.value = res.data.songs[0]
			setTimeout(()=>{
				loadingStatus.value=false
			},1000)
		})
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

	.iconsview {}

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
		width: 70vw;
		height: 70vw;
		border-radius: 50%;
		background-color: black;
		margin: 60px auto;
		position: relative;
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

	.detailedInformation_center-style_image {
		width: 100%;
		height: 100%;
		animation: roler 5s linear infinite;
	}
	.progress{
		display: flex;
		align-items: center;
		
	}
	.progress-box{
		flex: 1;
	}
	.startTime{
		width: 100rpx;
		text-align: center;
	}
	.endTime{
		width: 140rpx;		
		 text-align: center;
	}
	.iconMeaus{
		display: flex;
		width: 80%;
		margin: 20px auto;
		justify-content: space-between;
		align-items: center;
	}
	.iconMeaus>view{
		width: 10vw;
		height: 10vw;
		text-align: center;
		position: relative;
	}
	.iconMeaus>view:nth-child(3){
		width: 15vw;
		height: 15vw;
		border: 1px solid white;
		border-radius: 50%;
	}
	.uni-icons{
		position: absolute;
		top: 50%;
		left: 50%;
		transform: translate(-50%,-50%);
	}
	.bottom_item{
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
