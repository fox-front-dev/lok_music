<template>
	<view class="playlists" :style="{paddingTop:statusBarHeight+'px'}">
		<view class="title" @click="goback">
			<uni-icons style="vertical-align: middle;" type="back" size="30"></uni-icons>
			<view class="title_left">
				歌单
			</view>
		</view>
		<view class="addSongsSheet">
			<input type="text" v-model="addsongsheetname" placeholder="请输入添加的歌单名称">
			<uni-icons @click="addsongsheet" type="plus-filled" color="#00AC5A" size="30"></uni-icons>
		</view>
		<view class="playlists_result" :class="[!index?'ani':'',index&&firstopen?'ani2':'']">
			<view class="playlists_result_item" v-for="item,index in userplayreslist" @click="gotopage(item)">
				<image class="playlists_result_image" :src="item.coverImgUrl" mode=""></image>
				<view   class="playlists_result_name">
					{{item.name}}
				</view>
				<!-- <view  v-if="(index==7)" class="showmore">
					查看全部<uni-icons style="vertical-align: middle;" type="arrow-right" size="18"></uni-icons>
				</view> -->
			</view>
		</view>
		<!-- <view v-if="userplayreslist.length>=8" class="selectmore" @click="addindex">
			{{index?"查看更多...":"缩起..."}}
		</view> -->
		<!-- <view class="title songsheets">
			收藏歌单
		</view>
		<view class="playlists_result2" :class="[!index2?'ani':'',index2&&firstopen?'ani2':'']">
			<view class="playlists_result_item" v-for="item,index in 8">
				<image v-if="!(index==7)" class="playlists_result_image" src="../../../static/image/demo.jpeg" mode=""></image>
				<view  v-if="!(index==7)" class="playlists_result_name">
					歌单名称歌单名称歌单名称歌单名称歌单名称歌单名称
				</view>
				<view  v-if="(index==7)" class="showmore">
					查看全部<uni-icons style="vertical-align: middle;" type="arrow-right" size="18"></uni-icons>
				</view>
			</view>
		</view>
		<view class="selectmore" @click="addindex2">
			{{index2?"查看更多...":"缩起..."}}
		</view> -->
	</view>
</template>

<script setup>
	import {
		ref,
		getCurrentInstance,
		onMounted
	} from "vue"
	import axios from "../../../http/req.js"
	import store from "../../../store/index.js"
	import unistorage from  "../../../uniStorage/index.js"
	let index=ref(true)
	let index2=ref(true)
	let firstopen=ref(false)
	let statusBarHeight = ref(0)
	// 控制个人歌单展开or收起
	const addindex=()=>{
		index.value=!index.value
		firstopen.value=true
	}
	// 控制收藏歌单展开or收起
	const addindex2=()=>{
		index2.value=!index2.value
		firstopen.value=true
	}
	// 返回
	const goback=()=>{
		uni.navigateBack(1)
	}
	onMounted(() => {
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
		userplaylist()
	})
	// 添加歌单
	let addsongsheetname=ref("")
	const addsongsheet=async()=>{
		await axios.createplaylist({
			name:addsongsheetname.value
		}).then(res=>{
			if(res.data.code==200){
				uni.showToast({
					title:"创建成功",
					icon:"none"
				})
			}
		})
	}
	// 获取用户歌单
	let userplayreslist=ref([])
	const userplaylist= async()=>{
		let uid=unistorage.getStorage("userId")
		await axios.userplaylist({uid}).then(res=>{
			// console.log(res);
			userplayreslist.value=res.data.playlist
			// if(userplayreslist.value.length>8){
			// 	userplayreslist.value.length=8
			// }
		})
	}
	const gotopage=(item)=>{
		uni.navigateTo({
			url:`/pages/home/songs/songs?songssheetId=${item.id}`
		})
	}
	
</script>

<style scoped>
	.playlists{
		padding-bottom: 60rpx;
	}
.title {
		/* height: 106rpx; */
		display: flex;
		padding: 0 30rpx;
		align-items: center;
		box-sizing: border-box;
		border-bottom: 1px solid #eeeeee;
	}

	.title_left {
		font-size: 30px;
	}

	.title_left>view {
		margin-top: 10rpx;
		font-size: 18px;
	}


	.addSongsSheet{
		display: flex;
		width: 80%;
		margin: 30rpx auto;
		height: 88rpx;
		line-height: 88rpx;
		background-color:#f3f3f3;
		padding-left: 20rpx;
		padding-right: 20rpx;
		border-radius: 20rpx;
	}
	.addSongsSheet >input{
		flex: 1;
		height: 100%;
		margin-right: 20rpx ;
	}
	.playlists_result{
		display: flex;
		flex-wrap: wrap;
		width: 90%;
		/* height: 700rpx; */
		margin: 0 auto;
		justify-content: space-between;
		overflow: hidden;
		
	}
	.ani{
		animation: showplaylists 1s;
		animation-fill-mode:forwards
	}
	.ani2{
		animation: playlists 1s;
		animation-fill-mode:forwards
	}
	.playlists_result_item{
		height: 350rpx;
		width: 45%;
	}
	.playlists_result_image{
		width: 100%;
		height: 250rpx;
		border-radius: 10px;
	}
	.playlists_result_name{
		font-size: 14px;
		text-align: center;
		overflow: hidden;
		text-overflow: ellipsis;
		white-space: nowrap;
		width: 100%;
	}
	.selectmore{
		text-align: center;
		border: 1px solid #00AC5A;
		width: 30%;
		margin: 40rpx auto;
		border-radius: 10px;
		font-size: 16px;
		color: #00AC5A;
	}
	.showmore{
		line-height: 250rpx;
		text-align: center;
		background-color: #eeeeee;
		border-radius: 20rpx;
	}
	.playlists_result2{
		display: flex;
		flex-wrap: wrap;
		width: 90%;
		height: 700rpx;
		margin: 60rpx auto;
		justify-content: space-around;
		overflow: hidden;
		
	}
	.songsheets{
		font-size: 30px;
	}
	@keyframes showplaylists{
		from{
			height: 700rpx;
		}to{
			height: 1450rpx;
		}
	}@keyframes playlists{
		from{
			height: 1450rpx;
		}to{
			height: 700rpx;
		}
	}
</style>
