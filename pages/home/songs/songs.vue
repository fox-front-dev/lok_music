<template>
	<view :class="loadingStatus?'':'songs'" style="box-sizing: border-box;" :style="{paddingTop:statusBarHeight+'px'}">
		<!-- <uni-load-more iconType="circle" /> -->
		<view class="goback">
			<uni-icons @click="gobacks" type="back" size="20"></uni-icons>
		</view>
		<uni-load-more :showText="false"  iconType="snow" style="margin-top: 40vh;" status="loading" v-show="loadingStatus" />	
		<view  v-show="!loadingStatus" >
			<view class="songs_title">
				歌单
			</view>
			<view class="songs_act">
				<image class="songs_act_image" :src="songslists.coverImgUrl" mode=""></image>
				<view class="songs_act_right">
					<view>
						<view class="songs_act_right_title">
							{{songslists.name}}
						</view>
						<view class="songs_act_right_content">
							<image class="songs_act_right_content_image" :src="songslists.creator.avatarUrl" mode="">
							</image>
							{{songslists.creator.nickname}}
						</view>
						<view class="Comment">
							{{songslists.playCount}}次播放
						</view>
					</view>
				</view>
			</view>
			<view class="songsPlayList">
				<view class="playall" @click="playAll">
					播放全部
					<view class="playall_image_border">
						<image class="playall_image" src="../../../static/image/play.png" mode=""></image>
					</view>
				</view>
				
				<view class="songList" v-for="item,index in songslist" v-if="(songslist.length)" @click="changeMusic(index)">
					<view class="songIndex">
						{{index+1}}
					</view>
					
					<view class="songs_info">
						<view class="songs_info_title">
							{{item.name}}
						</view>
			
						<view class="songs_info_author">
							<text v-for="i,index in item.ar">
								{{i.name}}
								<text v-if="index!=item.ar.length-1">, </text>
							</text>
						</view>
					</view>
				</view>
				<view class="nomusic" v-else="!(songslist.length)">
					暂无音乐,请先添加<text style="color: blue;">音乐</text>
				</view>
			</view>
		</view>
	</view>
	<playtabbar :meauStatus="true"></playtabbar>
</template>

<script setup>
	import {
		ref,
		getCurrentInstance,
		nextTick
	} from "vue"
	import store from "../../../store/index.js"
	import axios from "../../../http/req.js"
	import debounce from "../../../common/debounce.js"
	import playtabbar from "../../../common/play_tabbar.vue"
	import {
		onLoad,
		onShow
	} from "@dcloudio/uni-app";
	let statusBarHeight = ref()
	const proxy = getCurrentInstance()
	let loadingStatus=ref(true)
	// 自定义返回键
	const gobacks = () => {
		uni.navigateBack(-1)
	}
	nextTick(()=>{
		
	})
	onLoad((option) => {
		//获取手机信息，例如状态栏高度
		uni.getSystemInfo({
			success(res) {
				if (res.statusBarHeight == 0) return
				statusBarHeight.value = res.statusBarHeight
				store.commit("phoneInfo", {
					statusbarHeight: res.statusBarHeight
				})
			}
		})
		// getsongsplaylist(option.songssheetId)
		songsheepsInfo(option.songssheetId)
		getsheetallsongs(option.songssheetId)
	})
	// 获取歌单用户信息
	let songslists = ref({
		creator:{nickname:""}
	})
	const songsheepsInfo= async (id)=>{
		await axios.songsheepsInfo({id}).then(res=>{
			songslists.value=res.data.playlist
		})
	}
	
	// 根据音乐歌单id获取用户歌单的音乐
	const songslist=ref([])
	const getsheetallsongs=async(id)=>{
		await axios.getsheetallsongs({id}).then(res=>{
			songslist.value=res.data.songs
			setTimeout(()=>{
				loadingStatus.value=false
			},1000)
		}) 
	}
	// 全部播放
	const playAll=()=>{
		store.commit("changeMusic",{musiclist:songslist.value,index:0})
		store.commit("stop",0)
		store.commit("play")
	}
	// 选择从index处播放音乐
	let musicIndex=ref(0)
	const changeMusic=(index)=>{
		musicIndex.value=index
		debounces()
	}
	// 防抖函数
	const debounces=debounce(()=>{
			store.commit("changeMusic",{musiclist:songslist.value,index:musicIndex.value})
			store.commit("stop",musicIndex.value)
			store.commit("play")
		},1000)
</script>

<style scoped>
	.songs {
		background-color: azure;
	}

	.goback {
		margin-top: 8px;
		padding-left: 15px;
	}

	.songs_title {
		font-size: 40rpx;
		font-family: SourceHanSansCN;
		font-weight: bold;
		/* color: #546C8C; */
		padding: 15px;
	}

	.songs_act {
		display: flex;
		padding-bottom: 10px;

	}

	.songs_act_image {
		height: 200rpx;
		width: 200rpx;
		overflow: hidden;
		border-radius: 10px;
		/* margin-top: 40rpx; */
		margin-left: 30rpx;


	}

	.songs_act_right {
		font-size: 12px;
	}

	.songs_act_right_title {
		
		font-size: 16px;
		font-family: Adobe Heiti Std;
		font-weight: normal;
		margin-left: 14px;
	}

	.songs_act_right_content {
		margin-top: 16rpx;
		margin-left: 14px;
	}

	.songs_act_right_content_image {
		width: 35rpx;
		height: 35rpx;
		border-radius: 50%;
		vertical-align: middle;
		margin-right: 10rpx;
	}

	.Comment {
		background-color: #546C8C;
		border-radius: 20px;
		text-align: center;
		line-height: 20px;
		margin-left: 14px;
		color: white;
		padding-left: 20rpx;
		padding-right: 20rpx;
		margin-top: 15px;
		max-width: 60%;
		font-size: 12px;
	}

	.songsPlayList {
		margin-top: 30px;
		height: 100%;
		/* border-top: 1px solid #546C8C; */
		border-top-left-radius: 10px;
		border-top-right-radius: 10px;
		background-color: white;
		box-shadow: 0 -5px 10px 1px rgba(0, 0, 0, 0.1);
		padding: 15px 15px 30px 15px;
	}

	.playall {
		line-height: 40rpx;
		display: flex;
		align-items: center;
	}

	.playall_image_border {
		position: relative;
		width: 30rpx;
		height: 30rpx;
		border-radius: 50%;
		border: 1px solid black;
		margin-left: 5px;
	}

	.playall_image {
		position: absolute;
		top: 50%;
		left: 53%;
		transform: translate(-50%,-50%);
		width: 20rpx;
		height: 20rpx;
		/* vertical-align: middle; */
	}

	.songList {
		display: flex;
		align-items: center;
		height: 90rpx;
		margin-top: 10px;
	}

	.songIndex {
		width: 12vw;
		text-align: center;
		font-size: 13px;
	}

	
	.songs_info{
		display: flex;
		width: 70%;
		flex-direction: column;
		/* margin-left: 10px; */
	}
	.songs_info_title {
		font-size: 16px;
		overflow: hidden;
		  	display: -webkit-box;
		    -webkit-line-clamp: 1;
		    -webkit-box-orient: vertical;
			/* width: 70%; */
	}

	.songs_info_author {
		font-size: 14px;
		 /* flex: 1; */
		 overflow: hidden;
		   	display: -webkit-box;
		     -webkit-line-clamp: 1;
		     -webkit-box-orient: vertical;
			 width: 200px;
	}
	.nomusic{
		text-align: center;
		margin-top: 20px;
	}
</style>
