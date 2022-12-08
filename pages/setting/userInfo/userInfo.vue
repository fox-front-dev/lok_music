<template>
	<view class="userInfo">
		<view class="userInfo_first">
			<view class="userInfo_first-item" @click="click(item.key)" v-for="item,index in userInfo.first">
				<text>{{item.key}}</text>
				<view class="">
					<image v-if="item.msg=='头像'&&item.value!=''" class="headPortrait" :src="item.value" mode=""></image>
					<image v-else-if="item.msg=='头像'" class="headPortrait" src="/static/image/Avatar.png" mode="">
					</image>
				</view>
				<text v-show="item.msg=='text'">{{item.value}}</text>
			</view>
		</view>
		<view class="userInfo_first second">
			<view class="userInfo_first-item" @click="click(item.key)" v-for="item,index in userInfo.second">
				<text>{{item.key}}</text>
				<text v-if="item.msg=='text'">{{item.value}}</text>
			</view>
		</view>
	</view>
	<uni-popup ref="inputDialog" type="dialog">
		<uni-popup-dialog ref="inputClose" mode="input" title="修改昵称"  placeholder="请输入要修改的昵称"
			@confirm="inputover"></uni-popup-dialog>
	</uni-popup>
</template>

<script setup>
	import {
		ref,
		getCurrentInstance,
		onMounted
	} from "vue"
	import unistroage from "../../../uniStorage/index.js"
	import axios from "../../../http/req.js"
	let proxy = getCurrentInstance()
	
	let userInfo = ref({
		first: [{
			key: "头像",
			msg: "头像",
			value: false
		}, {
			key: "昵称",
			msg: "text",
			value: "lok"
		}, {
			key: "性别",
			msg: "text",
			value: "男"
		}, {
			key: "二维码",
			msg: "image",
			value: ""
		}],
		second: [{
			key: "生日",
			msg: "text",
			value: "未设置"
		}, {
			key: "账号绑定",
			msg: "text",
			value: "未填写"
		}, {
			key: "音乐标签",
			msg: "text",
			value: "选择标签"
		}, {
			key: "简介",
			msg: "text",
			value: "还没有简介"
		}, ]
	})
	let userId = ref("")
	onMounted(() => {
		userId.value = unistroage.getStorage("userId")
		binding()
		getUserInfo()
	})
	// 获取绑定的个人信息
	const binding = async () => {
		await axios.binding({
			uid: userId.value
		}).then(res => {
			userInfo.value.second[1].value = JSON.parse(res.data.bindings[0]["tokenJsonStr"]).cellphone
		})
	}
	// 获取个人信息
	const getUserInfo = async () => {
		await axios.getuserInfo({
			uid: userId.value
		}).then(res => {
			userInfo.value.first[2].value = res.data.profile.gender == "0" ? "男" : "女"
			userInfo.value.first[0].value = res.data.profile.avatarUrl
			if (res.data.profile.birthday > 0) {
				let date = new Date(res.data.profile.birthday)
				userInfo.value.second[0].value = date.getFullYear() + "-" + (date.getMonth() + 1) + "-" +
					date.getDate()
			}
			userInfo.value.second[3].value = res.data.profile.signature
			userInfo.value.first[1].value = res.data.profile.nickname
		})
	}

	const click = (item) => {
		uni.showToast({
			title:"该页面修改用户暂无接口",
			icon:"none"
		})
		switch (item) {
			case "头像":
				break
			case "昵称":
				proxy.refs.inputDialog.open()
				break
			case "性别":
				break
			case "二维码":
				break
			case "生日":
				break
			case "账号绑定":
				break
			case "音乐标签":
				break
			case "简介":
				break
		}
	}
	const inputover=(nickname)=>{
		return
		axios.updateUserInfo({
			nickname,
			time
		}).then(res=>{
			console.log(res);
		})
	}
</script>

<style scoped>
	.userInfo {
		background-color: #e6e6e6;
		height: 100vh;
	}

	.userInfo_first {
		transform: translateY(10px);
	}

	.userInfo_first-item {
		background-color: white;
		display: flex;
		padding: 15px;
		box-sizing: border-box;
		height: 50px;
		align-items: center;
		justify-content: space-between;
		border-bottom: 1px solid #e6e6e6;
		font-size: 14px;
	}

	.second {
		margin-top: 10px;
	}

	.headPortrait {
		width: 40px;
		height: 40px;
		border-radius: 50%;
	}
</style>
