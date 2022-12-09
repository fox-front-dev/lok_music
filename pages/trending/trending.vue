<template>
	<view class="loader" style="margin-top: 30vh;" v-show="loadingStatus"></view>
	<scroll-view scroll-y :class="store.state.css_style?'gray_filter':''" v-show="!loadingStatus">
		<view class="trending_content" :style="{paddingTop:statusBarHeight+'px'}">
			<view class="trending_title">
				<view class="title_left">
					排行榜
					<view>
						2022 10-29
					</view>
				</view>
				<view class="title_right">
					<image lazy-load v-if="!store.state.userInfo.userAvatar" style="width: 50px;height: 50px;"
						src="../../static/image/Avatar.png" mode=""></image>
					<image v-else lazy-load style="width: 50px;height: 50px;border-radius:50% ;"
						:src="store.state.userInfo.userAvatar" mode=""></image>
				</view>
			</view>
			<view class="trendingSwiper" style="border-top: 1px solid #e6e6e6;">
				<view class="uni-margin-wrap">
					<swiper class="swiper" :autoplay="false" :duration="500" display-multiple-items="1"
						next-margin="20px">
						<swiper-item v-for="item in bannerlist">
							<view class="swiper-item2">
								<image lazy-load class="swiper-item2_image" :src="item.pic" mode=""></image>
							</view>
						</swiper-item>
					</swiper>
				</view>
			</view>
			<view class="hotsongs">
				新星音乐
				<view class="right">
					<uni-icons type="forward" @click="gocharts" size="20"></uni-icons>
				</view>
			</view>
			<view class="trendingSwiper" style="padding-top: 0rpx;">
				<view class="uni-margin-wrap">
					<swiper class="swiper" :autoplay="false" :duration="500" display-multiple-items="1"
						next-margin="30px">
						<swiper-item v-for="item in recommendmusiclist">
							<view class="swiper-item ">
								<view class="swiper-item1" @click="gotodetailedInformation(item_re)" v-for="item_re in item">
									<view class="imageview">
										<image lazy-load style="height: 40px;width: 40px;border-radius: 20rpx;"
											:src="item_re.picUrl" mode=""></image>
									</view>
									<view class="swiper-item_content">
										<view class="swiper-item_content_title">
											{{item_re.name}}
										</view>
										<view class="swiper-item_content_co">
											{{item_re.song.artists[0].name}}
										</view>
									</view>
								</view>
							</view>
						</swiper-item>
					</swiper>
				</view>
			</view>
			<view class="hotsongs" style="margin-top: 10px;">
				热门歌手
				<view class="right">
					<uni-icons @click="gocharts" type="forward" size="20"></uni-icons>
				</view>
			</view>
			<view class="newAlbums">
				<swiper class="swiper" :autoplay="false" :duration="500" display-multiple-items="3" next-margin="30px">
					<swiper-item v-for="item in hotartistslist">
						<view class="swiper-item3 ">
							<image lazy-load :src="item.picUrl" style="width: 100%;height: 180rpx; border-radius: 10px;"
								mode=""></image>
						</view>
						<view class="albums_name">
							{{item.name}}
						</view>
					</swiper-item>
				</swiper>
			</view>
			<view class="hotsongs" style="margin-top: 10px;">
				热门音乐
				<view class="right">
					<uni-icons @click="gocharts" type="forward" size="20"></uni-icons>
				</view>
			</view>
			<view class="hotMusic">
				<view>
					<view class="hotMusic_item" v-for="item in hotmusiclist"  @click="gotodetailedInformation(item)">
						{{item.name}}
						<view>
							<uni-icons type="forward" size="12"></uni-icons>
						</view>
					</view>
				</view>
			</view>

		</view>
	</scroll-view>
</template>

<script setup>
	import {
		ref,
		onMounted
	} from "vue"
	import store from "../../store/index.js"
	import axios from "../../http/req.js"
	import uniStorage from "../../uniStorage/index.js";
	let statusBarHeight = ref(0)
	let loadingStatus=ref(true)
	const gocharts = () => {
		uni.navigateTo({
			url: "/pages/trending/charts/charts"
		})
	}
	onMounted(() => {
		uni.preloadPage({url: "/pages/detailedInformation/detailedInformation"})
		statusBarHeight.value = store.state.phoneInfo.statusbarHeight
		getdjtoplist()
		getrecommendmusic()
		gethotartists()
		gethotmusic()
		banner()
	})
	// banner
	let bannerlist=ref([])
	const banner=()=>{
		axios.banner().then(res=>{
			bannerlist.value=res.data.banners
				loadingStatus.value=false
		}).catch(err => {
			setTimeout(() => {
				banner()
			}, 1000)
		})
	}
	// dj电台排行榜
	let djtoplist = ref()
	const getdjtoplist = async () => {
		await axios.hotdjtoplist({
			type: "new",
			limit: 6,
			offset: 0
		}).then(res => {
			djtoplist.value = res.data.toplist
		}).catch(err => {
			setTimeout(() => {
				getdjtoplist()
			}, 1000)
		})
	}
	//新星音乐
	const recommendmusiclist = ref([])
	const getrecommendmusic = async (index) => {
		await axios.recommendmusic({
			limit: 9
		}).then(res => {
			let list = []
			// recommendmusiclist.value=res.data.result
			res.data.result.forEach((item, index) => {
				if ((index + 1) % 3 == 0) {
					list = list.concat(item)
					recommendmusiclist.value.push(list)
					list = []
				} else {
					list = list.concat(item)
				}
			})
		}).catch(err => {
			setTimeout(() => {
				getrecommendmusic(index)
			}, 1000)
		})
	}
	// 获取热门歌手
	const hotartistslist = ref()
	const gethotartists = async () => {
		await axios.hotartists({
			limit: 10
		}).then(res => {
			hotartistslist.value = res.data.artists
		}).catch(err => {
			setTimeout(() => {
				gethotartists()
			}, 1000)
		})
	}
	// 获取推荐音乐
	let hotmusiclist = ref([])
	const gethotmusic = async () => {
		await axios.recommendmusic({
			limit: 20
		}).then(res => {
			res.data.result.forEach((item, index) => {
				if (index >= 10) {
					hotmusiclist.value = hotmusiclist.value.concat(item)
				}
			})
		}).catch(err => {
			setTimeout(() => {
				gethotmusic()
			}, 1000)
		})
	}
	// 前往音乐详情页面
	const gotodetailedInformation=(...arg)=>{
		uni.navigateTo({
			url:`/pages/detailedInformation/detailedInformation?id=${arg[0].id}`
		})
	}
</script>

<style scoped>
	.trending_content {
		padding-bottom: 240rpx;
	}

	.trending_content>.trending_title {
		margin-top: 20rpx;
		height: 200rpx;
		display: flex;
		padding: 30rpx;
		justify-content: space-between;
		box-sizing: border-box;

	}

	.title_left {
		font-size: 30px;
	}

	.title_left>view {
		margin-top: 10rpx;
		font-size: 18px;
	}

	.title_right {
		line-height: 200rpx;
	}

	.swiper-item1 {
		height: 90rpx;
		margin-top: 16rpx;
		display: flex;
		margin-right: 10px;
	}

	.trendingSwiper {
		/* padding: 30rpx;
		box-sizing: border-box; */
		margin: 15px;
	}

	.swiper-item_content {
		padding-left: 20rpx;
		/* overflow: hidden; */
		width: 70%;

	}

	.swiper-item_content_title {
		width: 100%;
		font-size: 16px;
		overflow: hidden;
		text-overflow: ellipsis;
		display: -webkit-box;
		-webkit-box-orient: vertical;
		-webkit-line-clamp: 1;
	}

	.swiper-item_content_co {
		font-size: 14px;
		overflow: hidden;
		width: 100%;
		text-overflow: ellipsis;
		display: -webkit-box;
		-webkit-box-orient: vertical;
		-webkit-line-clamp: 1;
	}

	.swiper-item2 {
		height: 100%;
		margin-right: 10px;
		border-radius: 10px;
		box-sizing: border-box;
		/* padding: 20rpx; */
		position: relative;
		overflow: hidden;
	}

	.swiper-item2_image {
		height: 100%;
		width: 100%;
		position: absolute;
		top: 0;
	}

	.swiper-item2_item {
		position: absolute;
		/* bottom: 30rpx; */
		display: flex;
		flex-wrap: wrap;
		flex-direction: column;
		justify-content: space-between;
		/* align-items: center; */
		height: 100%;
		/* padding: 15px; */
		box-sizing: border-box;
	}

	.info {
		/* position: absolute;
		bottom: 10px;
		left: 10px; */

	}

	.info_name {
		font-size: 20px;
		color: green;
		font-weight: bold;
	}

	.info_ac {
		font-size: 14px;
		color: green;
	}

	.star {
		border-radius: 10px;
		background-color: rgb(255, 255, 255);
		display: flex;
		width: 120rpx;
		line-height: 60rpx;
		font-size: 16px;
		height: 60rpx;
		padding-left: 10px;
		/* z-index: 11; */

	}

	.hotsongs {
		margin-left: 15px;
		margin-right: 15px;
		font-size: 24px;
		border-bottom: 1px solid #e6e6e6;
		padding-bottom: 20rpx;
		display: flex;
	}

	.right {
		flex: 1;
		text-align: right;
	}

	.newAlbums {
		height: 240rpx;
		overflow: hidden;
		padding-top: 15px;
		padding-bottom: 15px;
	}

	.swiper-item3 {
		margin-left: 30rpx;
		margin-right: 20rpx;
	}

	.albums_name {
		display: -webkit-box;
		overflow: hidden;
		text-overflow: ellipsis;
		word-wrap: break-word;
		white-space: normal;
		-webkit-line-clamp: 2;
		-webkit-box-orient: vertical;
		margin-right: 20rpx;
		font-size: 14px;
		text-align: center;
	}

	.hotMusic>view {
		display: flex;
		flex-wrap: wrap;
		padding: 30rpx;
		justify-content: space-between;
	}

	.hotMusic_item {
		box-sizing: border-box;
		display: flex;
		width: 48%;
		height: 88rpx;
		background-color: #F3F3F3;
		margin-top: 20rpx;
		line-height: 88rpx;
		border-radius: 10px;
		padding-left: 30rpx;
		padding-right: 20rpx;
		font-size: 14px;
		-webkit-box-orient: vertical;
		-webkit-line-clamp: 1;
		overflow: hidden;
	}

	.hotMusic_item>view {
		flex: 1;
		text-align: right;
	}
	::v-deep .swiper {
		height: 320rpx !important;
	}
	
	scroll-view {
		height: 100vh;
	}
</style>
