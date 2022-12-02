<template>
	<view class="qr-box">
		<image style="width: 100%;height: 100%;" :src="qrurl" mode=""></image>
	</view>
	
	<view class="qrlogin">
		{{test}}
	</view>
</template>

<script setup>
	import axios from "../../../http/req.js"
	import {
		ref,
		onMounted,
		onUnmounted
	} from "vue"
	import unistorage from "../../../uniStorage/index.js"
	let qrurl=ref("")
	let test=ref("请扫描二维码")
	let timer=ref(0)
	let checkqrInterval=ref()
	let qrcodekey=ref()
	const getqrcode = async () => {
		await axios.getqrkey().then(async (res) => {
			qrcodekey.value=res.data.data.unikey
			await axios.getqrbase64({key:res.data.data.unikey,qrimg:"1"}).then(res=>{
				qrurl.value=res.data.data.qrimg
			})
		})
	}
	const checkqrstatus= async ()=>{
		await axios.getqrstatus({key:qrcodekey.value}).then(res=>{
			if(res.data.code==800){
				clearInterval(checkqrInterval.value)
				test.value=res.data.message
			}else if(res.data.code==801||res.data.code==802){
				timer.value+=1
				test.value=res.data.message
				if(timer.value>=60){
					clearInterval(checkqrInterval.value)
					test.value=res.data.message
				}
			}else{
				unistorage.setStorage("token",res.data.cookie)
				test.value=res.data.message
				currentloginstatus()
				getuserInfo()
				clearInterval(checkqrInterval.value)
				// uni.redirectTo({
				// 	url:"/pages/mainEntrance/mainEntrance"
				// })
			}
		})
	}
	onpagehide(()=>{
		clearInterval(checkqrInterval.value)
	})
	// 判断当前登录状态
	const currentloginstatus = async () => {
		await axios.loginstatus().then(res => {
		})
	}
	// 获取用户信息
	const getuserInfo= async()=>{
		await axios.getuserInfo().then(res=>{
		})
	}
	onMounted(() => {
		getqrcode()
		checkqrInterval.value=setInterval(()=>{
			if(qrcodekey.value&&qrurl.value){
				checkqrstatus()
			}
		},1000)
		
	})
</script>

<style scoped>
	.qr-box {
		width: 400rpx;
		height: 360rpx;
		margin: 120px auto 0 auto;
	}

	.qrlogin {
		text-align: center;
		/* margin-top: 30px; */
		font-size: 14px;
	}
</style>
