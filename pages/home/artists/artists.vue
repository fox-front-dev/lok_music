<template>
	<view class="songs" :class="store.state.css_style?'gray_filter':''" style="box-sizing: border-box;" >
		<!-- <view class="title" :style="{paddingTop:statusBarHeight+'px'}">
			<uni-icons @click="goback" style="vertical-align: middle;" type="back" size="30"></uni-icons>
			<view class="title_left">
				音乐
			</view>
		</view> -->
		<view class="songs_container">
			<scroll-view scroll-y="true"  class="scroll-container" scroll-with-animation="true"
				:scroll-into-view="toview">
				<view :id="item.id" v-for="item,index in data" :key="index">
					<view class="scroll_id-style">
						<!-- ABCDEFG标题 -->
						{{item.id}}
					</view>
					<!-- 元素遍历 -->
					<view class="scrolly_item" v-for="item,index in 20">
						<image class="scrolly_image" src="../../../static/image/demo.jpeg" mode=""></image>
						<view class="scrolly_item-info">
							<view class="scrolly-title">
								标题
							</view>
							<view class="scrolly-name">
								作者
							</view>
						</view>
					</view>

				</view>

			</scroll-view>

			

		</view>
	</view>
	<view class="letter-nav">
		<view class="item" v-for="item,index in indexList" @click="select_id(item)">
			{{item}}
		</view>
	</view>
	
</template>

<script setup>
	import {
		ref,
		getCurrentInstance,
		onMounted
	} from "vue"
	import store from "../../../store/index.js"
	let statusBarHeight = ref(0)
	let indexList = ref(['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S',
		'T', 'U', 'V', 'W', 'X', 'Y', 'Z'
	])
	let toview = ref()
	let data = ref([

		{
			id: 'A',
			data: []
		},
		{
			id: 'B',
			data: []
		},
		{
			id: 'C',
			data: []
		},
		{
			id: 'D',
			data: []
		}, {
			id: 'E',
			data: []
		}, {
			id: 'F',
			data: []
		}, {
			id: 'G',
			data: []
		},
		{
			id: 'Z',
			data: []
		}
	])
	const goback = () => {
		uni.navigateBack(1)
	}
	const select_id = (id) => {
		toview.value = id
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
	})
</script>

<style scoped>
	.title {
		height: 160rpx;
		display: flex;
		padding: 0 30rpx;
		/* justify-content: space-between; */
		box-sizing: border-box;
		/* border-bottom: 1px solid #eeeeee; */
		align-items: center;
		position: fixed;
		width: 100%;
		background-color: white;
		z-index: 1;
		/* margin-top: 30rpx; */
	}

	.scrolly_image {
		width: 80rpx;
		height: 80rpx;
		border-radius: 50%;
		margin-right: 20rpx;
	}

	.songs {
		padding-bottom: 30rpx;
		/* box-sizing: border-box; */
		background-color: #ffffff;
	}


	.songs_container {
		/* padding-top: 156rpx; */
		box-sizing: border-box;
		/* margin-top: 30rpx; */
	}

	.title_left {
		font-size: 30px;

	}

	.letter-nav {
		position: fixed;
		top: 50%;
		right: 20rpx;
		transform: translateY(-50%);
		font-size: 14px;
		justify-content: space-around;
		z-index: 1;
	}

	.item {
		width: 30rpx;
		text-align: center;
	}

	.scroll-container {
		height: 100vh;

	}

	.scrolly_item {
		height: 80rpx;
		/* line-height: 80rpx; */
		display: flex;
		margin-top: 20rpx;
		padding: 0 10px;
	}

	.scroll_id-style {
		font-size: 18px;
		padding-left: 20px;
		/* background-color: #eeeeee; */
		border-bottom: 1px solid #eeeeee;
		margin-top: 20rpx;
		padding-bottom: 20rpx;
	}
</style>
