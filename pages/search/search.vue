<template>
	<scroll-view scroll-y @scrolltolower="scrolltolower"  :class="store.state.css_style?'gray_filter':''">
		<view class="search_content" :style="{paddingTop:statusBarHeight+'px'}">
			<view class="title">
				<view class="title_left">
					搜索
					<view class="input_search">
						<image class="input_left" src="../../static/image/search1.png" style="" mode=""></image>
						<input v-model="searchData.keywords" type="text" @input="inputclick"
							style="width: 100%;height: 72rpx;margin-left: 10rpx;" placeholder="search">
					</view>
				</view>
			</view>
			<view class="search_result">
				<view class="search_result_item" v-for="item,index in searchresult">
					<image src="../../static/image/demo.jpeg" class="search_result_item_image" mode=""></image>
					<view class="right_result">
						<view class="right_result_top">
							{{item.name}}
						</view>
						<view class="right_result_bottom">
							{{item.artists[0].name}}
						</view>
					</view>
					<view class="righ_result_right">
						<uni-icons v-if="index%2==0" type="heart" size="30"></uni-icons>
						<uni-icons v-if="index%2!=0" type="heart-filled" size="30"></uni-icons>
					</view>
				</view>
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
	import debounce from "../../common/debounce.js"
	import axios from "../../http/req.js"
	const proxy = getCurrentInstance()
	let statusBarHeight = ref(0)
	let searchData = ref({
		keywords: "",
		offset: 0,
		limit: 20
	})
	onMounted(() => {
		statusBarHeight.value = store.state.phoneInfo.statusbarHeight
	})
	// 搜索触发函数
	let searchresult = ref([])
	const inputclick = debounce(function() {
		axios.searchs(searchData.value).then(res => {
			if (res.data.result) {
				searchresult.value = res.data.result.songs
			} else {
				searchresult.value = []
			}
		})
	}, 1000)
	// 移到最下面调用函数
	const scrolltolower = async() => {
		searchData.value.offset++
		await axios.searchs({
			keywords: searchData.value.keywords,
			offset: searchData.value.offset*searchData.value.limit,
			limit: 20
		}).then(res => {
			if (res.data.result&&res.data.result.songs) {
				searchresult.value = searchresult.value.concat(res.data.result.songs)
			} else{
				uni.showToast({
					title:"已经划到底部了",
					icon:"none"
				})
			}
		})
	}
	
</script>

<style scoped>
	.search_content>.title {
		margin-top: 20rpx;
		height: 200rpx;
		padding: 30rpx 30rpx 0 30rpx;
		justify-content: space-between;
		border-bottom: 1px solid #eee;
	}

	.title_left {
		font-size: 30px;
	}

	.title_left>view {
		margin-top: 20rpx;
	}

	.input_search {
		display: flex;
		box-sizing: border-box;
		border: 1px solid #ccc;
		width: 100%;
		line-height: 72rpx;
		border-radius: 20rpx;
		padding-left: 20rpx;
		padding-right: 20rpx;
		align-items: center;
		background-color: rgb(230, 230, 230);
	}

	.input_left {
		width: 40rpx;
		height: 40rpx;
		line-height: 72rpx;
		vertical-align: middle;
		align-items: center;
	}

	.search_result {
		padding-bottom: 240rpx;
		margin-top: 40rpx;
	}

	.search_result_item {
		height: 140rpx;
		background-color: rgb(243, 243, 243);
		margin: 20rpx;
		border-radius: 10px;
		display: flex;
		align-items: center;
		padding: 20rpx;
		box-sizing: border-box;
	}

	.search_result_item_image {
		width: 100rpx;
		height: 100rpx;
		border-radius: 10px;
	}

	.right_result {
		margin-left: 20rpx;
	}

	.right_result_top {
		font-size: 16px;
	}

	.right_result_bottom {
		font-size: 14px;
	}

	.righ_result_right {
		flex: 1;
		text-align: right;
	}
	scroll-view{
		height: 100vh;
	}
</style>
