<template>
	<view class="setting_content" :style="{paddingTop:statusBarHeight+'px'}"  :class="store.state.css_style?'gray_filter':''">
		<view class="title">
			<image v-if="!store.state.userInfo.userAvatar" style="width: 50px;height: 50px;" src="../../static/image/Avatar.png" mode="">
			</image>
			<image v-else style="width: 50px;height: 50px;border-radius:50% ;" :src="store.state.userInfo.userAvatar" mode=""></image>
			<view class="username">
				{{ store.state.userInfo.nickname}}
			</view>
			<view>
				<uni-icons type="compose" size="20"></uni-icons>
			</view>
		</view>
		<view class="btnMeau">
			<view class="first">
				<view class="left">
					<view>
						个人信息
					</view>
				</view>
				<view class="left">
					<view>消息</view>
				</view>
			</view>
			<view class="bottom">
				<view @click="gologin">
					{{testlogin}}
				</view>
			</view>
		</view>

	</view>
</template>

<script setup>
	import {
		ref,
		onMounted
	} from "vue"
	import store from "../../store/index.js"
	import axios from "../../http/req.js"
	import unistorage from "../../uniStorage/index.js";
	let statusBarHeight = ref(0)
	let testlogin = ref("登录")
	let token = ref("")
	let userinfo = ref({
		nickname: "请登录",
		avt: ""
	})

	const gologin = () => {
		if (token.value) {
			unistorage.clearStorage()
			store.commit("userId", null)
			store.commit("token", null)
			axios.logout()
		}
		uni.redirectTo({
			url: "/pages/login/login/login"
		})
	}
	onMounted(() => {
		statusBarHeight.value = store.state.phoneInfo.statusbarHeight
		token.value = unistorage.getStorage("token")
		if (token.value && unistorage.getStorage("userId")) {
			// unstorage.removeStorage("token")
			testlogin.value = "退出登录"
		} else {
			testlogin.value = "登录"
		}
		userinfo.value.nickname = store.state.userInfo.nickname
		userinfo.value.avt = store.state.userInfo.userAvatar
	})
</script>

<style scoped>
	.title {
		margin-top: 60rpx;
		padding: 30rpx;
		justify-content: space-between;
		text-align: center;
	}

	.username {
		margin-top: 30rpx;
	}

	.first {
		margin-top: 40rpx;
		display: flex;
		justify-content: space-around;
	}

	.left>view {
		background-color: #1c9651;
		height: 100rpx;
		border-radius: 50rpx;
		text-align: center;
		color: white;
		width: 260rpx;
		line-height: 100rpx;
	}

	.bottom {
		width: 100%;
		padding-top: 60rpx;
	}

	.bottom>view {
		width: 80%;
		background-color: #1c9651;
		margin: 0 auto;
		height: 100rpx;
		border-radius: 50rpx;
		text-align: center;
		color: white;
		line-height: 100rpx;
	}
</style>
