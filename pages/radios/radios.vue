<template>
	<scroll-view scroll-y>
	<view class="radios_content" :style="{paddingTop:statusBarHeight+'px'}">
		<view class="title">
			<view class="title_left">
				电台
			</view>
		</view>
		<view class="change_tabs">
			<view :class="current==0?'bordergreen':''" @click="changeView(0)">
				排行榜
			</view>
			<view :class="current==1?'bordergreen':''" @click="changeView(1)">
				推荐
			</view>
		</view>
		<view class="curren0" v-show="current==0">
			<view class="video_swiper">
				<view class="uni-margin-wrap">
					<swiper class="swiper" :duration="500" next-margin="50px">
						<swiper-item v-for="item,index in djprogramlist">
							<view class="swiper-item1 ">
								<image lazy-load :src="item.picUrl" mode="" class="video_css"></image>
								<view class="swiper-item1_title">
									<view class="content">
										{{item.name}}
									</view>
									<view class="icon">
										<uni-icons color="#e2e2e2" style="vertical-align: middle;" type="headphones"
											size="20"></uni-icons>
										<text>{{item.program.adjustedPlayCount}}</text>
									</view>
								</view>
							</view>
						</swiper-item>
					</swiper>
				</view>
			</view>
			<view class="popular">
				<view class="popular_title">
					流行的
					<view>
						<uni-icons type="forward" size="20"></uni-icons>
					</view>
				</view>
				<view class="popular_content">
					<view class="content_item" v-for="item,index in hotdjlist">
						<image lazy-load :src="item.picUrl" style="width: 80rpx;height: 80rpx;border-radius: 50%;" mode="">
						</image>
						<view class="popular_item_content">
							<view class="top">
								{{item.rcmdtext}}
							</view>
							<view class="bottom">
								{{item.name}}
							</view>
						</view>
						<view class="popular_item_right">
							<uni-icons type="headphones" style="vertical-align: middle;" size="19"></uni-icons>
							<text style="line-height: 80rpx;font-size: 14px;">
								{{Math.round(item.playCount/10000)}}万
							</text>
						</view>
					</view>
				</view>
			</view>
		</view>
		<view class="curren1" v-show="current==1">
			123213
		</view>
	</view>
	</scroll-view>
</template>

<script setup>
	import {
		ref,
		getCurrentInstance,
		onMounted
	} from "vue"
	import store from "../../store/index.js"
	import axios from "../../http/req.js"
	const proxy = getCurrentInstance()
	let statusBarHeight = ref(0)
	let current = ref(0)


	const changeView = (index) => {
		if (index == current.value) return
		current.value = index
	}

	const touchable = () => {
		console.log(123);
	}
	onMounted(() => {
		statusBarHeight.value = store.state.phoneInfo.statusbarHeight
		getdjprogram()
		gethotdj()
	})
	// 推荐电台dj
	let djprogramlist = ref([])
	const getdjprogram = async () => {
		await axios.djprogram().then(res => {
			djprogramlist.value = res.data.result
		})
	}
	// 热门电台
	let hotdjlist = ref([])
	const gethotdj = async () => {
		await axios.hotdj({
			limit: 10
		}).then(res => {
			hotdjlist.value = res.data.djRadios
		})
	}
</script>

<style scoped>
	.title {
		margin-top: 20rpx;
		height: 150rpx;
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

	.change_tabs {
		display: flex;
		border-bottom: 1px solid #eee;
		padding-left: 30rpx;
		padding-right: 30rpx;

	}

	.change_tabs>view {
		flex: 1;
		text-align: center;
		border-left: 1px solid transparent;
		border-right: 1px solid transparent;
		border-bottom: 1px solid transparent;
		padding-bottom: 20rpx;
	}

	.bordergreen {
		border-left: 1px solid #b8e7d1 !important;
		border-right: 1px solid #b8e7d1 !important;
		border-bottom: 1px solid #88d6b1 !important;
		border-bottom-left-radius: 5rpx;
		border-bottom-right-radius: 5rpx;
	}

	.video_swiper {
		margin: 30rpx 0 0 30rpx;
	}

	.swiper>.swiper-item1:nth-child(1) {
		margin-left: 0rpx !important;
		background-color: #eee;
		position: relative;
	}

	.video {
		position: absolute;
		top: 30rpx;
		z-index: 99;
		height: 340rpx;
		width: 100%;
	}

	.swiper-item1 {
		margin-left: 20rpx;
		background-color: rgb(243, 243, 243);
		height: 470rpx !important;
		border-radius: 10px;
		padding: 20rpx;
		box-sizing: border-box;
	}

	::v-deep uni-swiper {
		height: 470rpx;
	}

	::v-deep swiper {
		height: 470rpx;
	}

	.video_css {
		border-radius: 10px;
		width: 100%;
		height: 330rpx;
	}

	.swiper-item1_title {
		display: flex;
		margin-top: 15rpx;
		width: 100%;
	}

	.content {
		width: 60%;
		display: -webkit-box;
		overflow: hidden;
		text-overflow: ellipsis;
		word-wrap: break-word;
		white-space: normal;
		-webkit-line-clamp: 2;
		-webkit-box-orient: vertical;
		/* flex: 1; */
		font-size: 14px;
		align-items: center;
		font-weight: bold;
	}

	.icon {
		flex: 1;
		display: flex;
		align-items: center;
		font-size: 14px;
		position: absolute;
		right: 10px;
	}

	.icon>text {
		margin-left: 10rpx;
	}

	.popular {
		padding: 30rpx;
	}

	.popular_title {
		display: flex;
		font-size: 24px;
		border-bottom: 1px solid #eee;
		padding-bottom: 10rpx;
	}

	.popular_title>view {
		flex: 1;
		text-align: right;

	}

	.content_item {
		margin-top: 30rpx;
		height: 80rpx;
		display: flex;
	}

	.popular_item_content {
		margin-left: 20rpx;
		width: 60%;
		overflow: hidden;
		text-overflow: ellipsis;
		display: -webkit-box;
		-webkit-line-clamp: 1;
		-webkit-box-orient: vertical;

	}

	.popular_item_right {
		flex: 1;
		/* text-align: center; */
	}

	.top {
		font-size: 16px;
		overflow: hidden;
		text-overflow: ellipsis;
		display: -webkit-box;
		-webkit-line-clamp: 1;
		-webkit-box-orient: vertical;
	}

	.bottom {
		font-size: 14px;
	}

	.popular_content {
		padding-bottom: 240rpx;
	}
	scroll-view {
		height: 100vh;
	}
</style>
