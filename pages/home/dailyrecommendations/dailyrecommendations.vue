<template>
	<view class="dailyrecommendations" :class="store.state.css_style?'gray_filter':''" :style="{paddingTop:statusBarHeight+'px'}">
		<view class="goback">
			<uni-icons @click="gobacks" type="back" size="20"></uni-icons>
			每日推荐
		</view>
		<view class="uni-margin-wrap swiper_recommend">
			<swiper class="swiper" circular :duration="500" next-margin="100px">
				<swiper-item v-for="item,index in dailyrecommendreslist">
					<view class="swiper-item">
						<image mode="aspectFill" class="swiper-item_image" :src="item.picUrl"></image>
						<!-- <view class="seeweek">
							<uni-icons color="white" type="eye-filled" size="20"></uni-icons>
							{{Math.round(item.playcount/10000)}}万次点击
						</view> -->
						<!-- <view class="swiper_title">
							{{item.name}}
						</view> -->
					</view>
				</swiper-item>
			</swiper>
		</view>
		<view class="moreRecommend_title">
			更多推荐
		</view>
		<view class="moreRecommend_list">
			<view class="list_recommends" v-for="item,index in dailyrecommendsongslist">
				<image class="list_recommends_image" :src="item.al.picUrl" mode=""></image>
				<view class="list_recommends_info">
					<view class="list_recommends_info_title">
						{{item.name}}
					</view>
					<view class="list_recommends_info_synopsis">
						{{item.ar[0].name}}
					</view>
				</view>
				<view class="list_recommends_info_timer">
					{{"播放"}}
				</view>
			</view>
		</view>
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
	let statusBarHeight = ref()
	// 自定义返回键
	const gobacks = () => {
		uni.navigateBack(-1)
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
		getDailyrecommend()
		getdailyrecommendsongs()
		
	})
	// 获取每日推荐
	let dailyrecommendreslist=ref([])
	const getDailyrecommend= async()=>{
		await axios.dailyrecommend({}).then(res=>{
			dailyrecommendreslist.value=res.data.recommend
		})
	}
	// 获取每日歌曲
	let dailyrecommendsongslist=ref([])
	const getdailyrecommendsongs= async()=>{
		await axios.dailyrecommendsongs({}).then(res=>{
			dailyrecommendsongslist.value=res.data.data.dailySongs
			dailyrecommendsongslist.value.length=20
			
		})
	}
</script>

<style scoped>
	.dailyrecommendations {
		padding: 15px;
		min-height: 100vh;
		background-color:#F3F9FF ;
	}

	.dailyrecommendations .goback {
		display: flex;
		align-items: center;
		margin-top: 8px;
		font-size: 18px;
		font-family: Poppins-SemiBold, Poppins;
		font-weight: 600;
		color: #0C0F27;
		line-height: 28px;
	}

	.swiper-item_image {
		width: 100%;
		height: 100%;
		border-radius: 20px;
	}

	.swiper-item {
		width: 430rpx;
		height: 580rpx;
		/* background-color: antiquewhite; */
		overflow: none !important;
		position: relative;
	}
	.swiper_recommend {
		margin-top: 20px;
	}
	.seeweek {
		position: absolute;
		top: 15px;
		left: 15px;

	}
	.swiper_title{
		position: absolute;
		left: 15px;
		bottom: 160rpx;
		font-size: 20px;
		font-family: Poppins-SemiBold, Poppins;
		font-weight: 600;
		color: green;
		line-height: 25px;
		font-weight: 900;
	}

	::v-deep .swiper {
		width: 100%;
		height: 580rpx;
		/* background-color: white; */
	}
	.moreRecommend_title{
		font-size: 20px;
		font-family: Poppins-SemiBold, Poppins;
		font-weight: 600;
		color: #0C0F27;
		line-height: 20px;
		margin-top: 30px;
		margin-bottom: 15px;
	}
	.list_recommends{
		height: 160rpx;
		background-color: white;
		border-radius: 10px;
		display: flex;
		align-items: center;
		position: relative;
		margin-top: 10px;
	}
	.list_recommends_image{
		width:120rpx;
		height: 120rpx;
		border-radius: 16px;
		margin-right: 10px;
		margin-left: 10px;
	}
	.list_recommends_info_title{
		font-size: 14px;
		font-family: Poppins-SemiBold, Poppins;
		font-weight: 600;
		color: #0C0F27;
		
	}
	.list_recommends_info_synopsis{
		font-size: 12px;
		font-family: Poppins-Regular, Poppins;
		font-weight: 400;
		color: #9194AE;
		
	}
	.list_recommends_info_timer{
		background-color: #FFE9E6;
		color:#FF7361 ;
		width: 130rpx;
		height: 60rpx;
		border-radius: 35rpx;
		text-align: center;
		line-height: 60rpx;
		font-family: Poppins-Medium, Poppins;
		font-weight: 500;
		font-size: 12px;
		position: absolute;
		right: 10px;
	
	}
</style>
