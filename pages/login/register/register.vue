<template>
	<view>
		<view class="logins">
			<image style="width: 100%;height: 100%;" src="../../../static/image/firefox.png" mode="aspectFill"></image>
		</view>
		<view class="login_title">
			注册
		</view>
		<view class="form ">
			<view class="form_item ">
				<input v-model='formInfo.phone' type="text" v-if="inputstatus" placeholder="手机号码">
				<input v-model='formInfo.phone' disabled v-if="!inputstatus" type="text" placeholder="手机号码">
				<view class="getcatch" @click="getcatch">
					{{getCodeText}}
				</view>
			</view>
			<view class="form_item">
				<input v-model='formInfo.nickname' @input="checkusername"  :class="textstatus?'':'redtext'" type="text" placeholder="用户名">
			</view>
			<view class="form_item">
				<input v-model='formInfo.password' @input="passwordstatusinput" :class="passwordstatus?'':'redtext'" type="text" placeholder="密码">
			</view>
			<view class="form_item">
				<input v-model='formInfo.password2' type="text" placeholder="确认密码">
			</view>
			<view class="form_item">
				<input v-model='formInfo.captcha' type="text" placeholder="验证码">
			</view>
			<button class="logbtn" @click="register">注册</button>
		</view>
		<view class="sign_up">
			<view>
				<uni-icons @click="goback" color="green" type="redo-filled" size="18"></uni-icons>
				<text @click="goback">返回</text>
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
	import debounce from "../../../common/debounce.js"
	import axios from "../../../http/req.js"
	import unstorage from "../../../uniStorage/index.js"
	const proxy = getCurrentInstance()
	let inputstatus = ref(true)
	let textstatus=ref(true)
	let passwordstatus=ref(true)
	let formInfo = ref({
		captcha: "",
		phone: "",
		password: "",
		password2: "",
		nickname: ""
	})
	const getCodeText = ref("获取验证码")

	const goback = () => {
		uni.navigateBack({
			delta: 1
		})
	}
	
	// 检查是否存在该昵称
	const checkusername=()=>{
		d()
	}
	// 验证昵称是否重复
	const d= debounce (()=>{
		 axios.checknickname({nickname:formInfo.value.nickname}).then(res=>{
			if(res.data.duplicated){
				textstatus.value=false
			}else{
				textstatus.value=true
			}
		})
	},1000)
	// 验证密码是否大于六位数
	const passwordstatusinput=()=>{
		if(formInfo.value.password.length<=6){
			passwordstatus.value=false
		}else{
			passwordstatus.value=true
		}
	}
	// 获取验证码
	const getcatch = async () => {
		if (getCodeText.value == "获取验证码") {
			if (!(/^1[3456789]\d{9}$/.test(formInfo.value.phone))) {
				uni.showToast({
					title: '手机号错误',
					duration: 2000,
					icon: "none"
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
					phone: formInfo.value.phone
				}).then(res=>{
					inputstatus.value = false
				})
			}
		}
	}
	// 注册
	const register = async () => {
		if(formInfo.value.password!=formInfo.value.password2){
			uni.showToast({
				title:"两次密码输入的不一致",
				icon:"none"
			})
		}else{
			if(formInfo.value.captcha){
				inputstatus.value = true
				await axios.register(formInfo.value).then(res=>{
					console.log(res);
					if(res.data.code==200){
						uni.showToast({
							title:"功能未测试，如果注册失败请联系我",
							icon:"none"
						})
						unstorage.setStorage("token", res.data.token)
						unstorage.setStorage("userId", res.data.account.id)
						
						uni.redirectTo({
							url: "/pages/mainEntrance/mainEntrance"
						})
						
					}else{
						uni.showToast({
							title:"注册失败，请稍后再试",
							icon:"none"
						})
					}
				})
				
			}
		}
	}
</script>

<style scoped>
	.logins {
		text-align: center;
		width: 120rpx;
		height: 120rpx;
		margin: 15vh auto 0 auto;
	}

	.getcatch {
		display: flex;
		align-items: center;
		font-size: 12px;
		width: 5em;
		flex: 1;
		justify-content: center;
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
		display: flex;
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

	.sign_up {
		text-align: center;
		position: fixed;
		bottom: 80rpx;
		width: 100%;
		font-size: 18px;
		color: green;
	}
	.redtext{
		color: red;
	}
</style>
