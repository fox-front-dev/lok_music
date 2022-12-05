<template>
	<view v-if="loginStatus"  :class="store.state.css_style?'gray_filter':''">
		<view class="login">
			<image style="width: 100%;height: 100%;" src="../../../static/image/firefox.png" mode=""></image>
		</view>
		<view class="login_title">
			lok音乐
		</view>
		<view class="form form--address">
			<view class="form_item ">
				<input type="text" placeholder="手机号码" v-model="login_data.phone">
			</view>
			<view class="form_item">
				<input type="text" placeholder="密码" v-model="login_data.password">
			</view>
			<button class="logbtn" @click="login(1)">登录</button>
		</view>
		<view class="changePassword">
			<view class="changePassword_icon">
				<uni-icons type="loop" color="white" size="16"></uni-icons>
			</view>
			<text @click="changeloginStatus(true)">验证码登录</text>
			
		</view>
		<!-- 扫码登录 -->
		<view class="gotoqj" >
			<view class="changePassword_icon">
				<uni-icons type="loop" color="white" size="16"></uni-icons>
			</view>
			<text @click="gotoqj">go扫码登录</text>
		</view>
		
		<view class="sign_up">
			<view>
				<uni-icons @click="goregister" color="green" type="redo-filled" size="18">
				</uni-icons>
				<text @click="goregister">注册</text>
			</view>
		</view>
	</view>
	<!-- //验证码登录 -->
	<view class="codelogin" v-if="!loginStatus"  :class="store.state.css_style?'gray_filter':''">
		<view class="login">
			<image style="width: 100%;height: 100%;" src="../../../static/image/firefox.png" mode=""></image>
		</view>
		<view class="login_title">
			lok音乐
		</view>
		<view class="form form--address">
			<view class="form_item ">
				<input type="text" placeholder="手机号码" v-model="login_data2.phone">
			</view>
			<view class="form_item for_item2">
				<input type="text" placeholder="验证码" v-model="login_data2.captcha">
				<view @click="getCode">{{getCodeText}}</view>
			</view>
			<button class="logbtn" @click="login(2)">登录</button>
		</view>
		<view class="changePassword">
			<view class="changePassword_icon">
				<uni-icons type="loop" color="white" size="16"></uni-icons>
			</view>
			<text @click="changeloginStatus(false)">密码登录</text>
		</view>
		<view class="sign_up">
			<view>
				<uni-icons @click="goregister" color="green" type="redo-filled" size="18">
				</uni-icons>
				<text @click="goregister">注册</text>
			</view>
		</view>
	</view>
</template>

<script setup>
	import {
		ref,
		onMounted
	} from "vue"
	import axios from "../../../http/req.js"
	import unstorage from "../../../uniStorage/index.js"
	import store from "../../../store/index.js"
	let login_data = ref({
		phone: "",
		password: ""
	})
	let login_data2 = ref({
		phone: "",
		captcha: ""
	})
	let getCodeText = ref("获取验证码")
	let loginStatus = ref(true)
	let login = async (index) => {
		if (index == 1) {
			if ((!(/^1[3456789]\d{9}$/.test(login_data.value.phone)))) {
				uni.showToast({
					title: '手机号填写错误',
					duration: 2000,
					icon: "none"
				});
			} else {
				await axios.login(login_data.value).then(res => {
					if (res.data.code !== 200) {
						uni.showToast({
							title: "请稍后重试，或者验证码登录",
							duration: 2000,
							icon: "none"
						})
					} else {
						if (res.code == 200) {
							unstorage.setStorage("token", res.data.token)
						} else {
							uni.showToast({
								title: '请稍后重试',
								duration: 2000,
								icon: "none"
							});
						}
					}
				})
			}
		} else if (index == 2) {
			if ((!(/^1[3456789]\d{9}$/.test(login_data2.value.phone)))) {
				uni.showToast({
					title: '手机号填写错误',
					duration: 2000,
					icon: "none"
				});
			} else {
				if (login_data2.value.captcha) {
					await axios.login(login_data2.value).then(res => {
						if (res.data.code == 200) {
							unstorage.setStorage("token", res.data.token)
							unstorage.setStorage("userId", res.data.account.id)
							uni.redirectTo({
								url: "/pages/mainEntrance/mainEntrance"
							})
						} else {
							uni.showToast({
								title: '请稍后重试',
								duration: 2000,
								icon: "none"
							});
						}
					})
				}
			}


		}

	}
	//获取验证码
	const getCode = async () => {
		if (getCodeText.value == "获取验证码") {
			if (!(/^1[3456789]\d{9}$/.test(login_data2.value.phone))) {
				uni.showToast({
					title: '手机号错误',
					duration: 2000,
					icon: "error"
				});
			} else {
				getCodeText.value = 60
				let mysetInterval = setInterval(() => {
					getCodeText.value--
					if (getCodeText.value <= 0) {
						clearInterval(mysetInterval)
						getCodeText.value = "获取验证码"
					}
				}, 1000)
				await axios.captcha({
					phone: login_data2.value.phone
				})
			}

		}
	}
	let inputstyle = {
		borderColor: "black"
	}
	const goregister = () => {
		uni.navigateTo({
			url: "/pages/login/register/register"
		})
	}
	const changeloginStatus = (val) => {
		loginStatus.value = !val
	}
	// 扫码登录页面
	const gotoqj=()=>{
		uni.navigateTo({
			url:"/pages/login/scan/scan"
		})
	}
	onMounted(() => {

	})
</script>

<style scoped>
	.login {
		text-align: center;
		width: 120rpx;
		height: 120rpx;
		margin: 15vh auto 0 auto;
	}

	.form--address {
		margin-top: 150rpx;
	}

	.login_title {
		font-size: 18px;
		text-align: center;
		margin-top: 20rpx;
	}

	.form_item {
		margin-top: 60rpx;
		border-bottom: 1px solid #eee;
		width: 80%;
		margin: 0 auto;
		height: 84rpx;
	}

	.form_item>input {
		height: 100%;
	}

	.logbtn {
		width: 80%;
		background-color: green;
		height: 100rpx;
		margin-top: 60rpx;
		line-height: 100rpx;
	}

	.changePassword_icon {
		background-color: #b9b9b9;
		width: 40rpx;
		height: 40rpx;
		margin-right: 10rpx;
		border-radius: 10rpx;
		display: flex;
		justify-content: space-around;
		align-items: center;
		line-height: 40rpx;
	}

	.changePassword {
		font-size: 16px;
		justify-content: center;
		margin-top: 40rpx;
		display: flex;
		flex: 1;
		align-items: center;
		line-height: 40rpx;
	}

	.sign_up {
		text-align: center;
		position: fixed;
		bottom: 80rpx;
		width: 100%;
		font-size: 18px;
		color: green;
	}

	.for_item2 {
		display: flex;
		justify-content: space-between;
	}

	.for_item2>view {

		line-height: 88rpx;
		width: 5em;
		text-align: center;
	}
	.gotoqj{
		display: flex;
		text-align: center;
		justify-content: center;
		margin-top: 10px;
	}
</style>
