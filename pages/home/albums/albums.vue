<template>
	<view class="albums" :class="store.state.css_style?'gray_filter':''" :style="{paddingTop:statusBarHeight+'px'}">
		<view class="title" @click="goback">
			<uni-icons style="vertical-align: middle;" type="back" size="30"></uni-icons>
			<view class="title_left">
				专辑
			</view>
		</view>
		<view class="albums_container">
			<view class="albums_container_item1" v-for="item,index in albumlist">
				<image class="albums_image" :src="item.picUrl" mode=""></image>
				<view class="albums_name">
					{{item.name}}
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
	import store from "../../../store/index.js"
	import axios from "../../../http/req.js"
	let statusBarHeight = ref(0)
	const goback = () => {
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
		getsublistalbum()
	})
	// 获取收藏的专辑
	let albumlist=ref([])
	const getsublistalbum = async () => {
		await axios.sublistalbum({}).then(res => {
			albumlist.value=res.data.data
		})
	}
</script>

<style scoped>
	.title {
		height: 106rpx;
		display: flex;
		padding: 0 30rpx;
		/* justify-content: space-between; */
		box-sizing: border-box;
		border-bottom: 1px solid #eeeeee;
		align-items: center;
	}

	.albums {
		padding-bottom: 30rpx;
	}

	.title_left {
		font-size: 30px;
	}

	.albums_container {
		display: flex;
		flex-wrap: wrap;
		justify-content: space-between;
		margin-top: 30rpx;
		padding: 15px;
	}

	.albums_container_item1 {
		width: 330rpx;
		height: 440rpx;
		margin-top: 10px;
	}

	.albums_image {
		width: 330rpx;
		height: 330rpx;
		border-radius: 20rpx;
	}

	.albums_name {
		text-overflow: -o-ellipsis-lastline;
		overflow: hidden;
		text-overflow: ellipsis;
		display: -webkit-box;
		-webkit-line-clamp: 2;
		-webkit-box-orient: vertical;
		font-size: 16px;
		text-align: center;
	}
</style>
