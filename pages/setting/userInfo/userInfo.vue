<template>
	<view class="userInfo">
		<view class="userInfo_first">
			<view class="userInfo_first-item" v-for="item,index in userInfo.first">
				<text>{{item.key}}</text>
				<image v-if="item.msg=='image1'" src="" mode=""></image>
				<text  v-if="item.msg=='text'">{{item.value}}</text>
			</view>
		</view>
	</view>
</template>

<script setup>
	import{ref,getCurrentInstance,onMounted} from "vue"
	import unistroage from "../../../uniStorage/index.js"
	import axios from "../../../http/req.js"
	let proxy =getCurrentInstance()
	let userInfo=ref({
		first:[{
			key:"头像",
			msg:"image",
			value:"123"
		},{
			key:"昵称",
			msg:"text",
			value:"lok"
		},{
			key:"性别",
			msg:"text",
			value:"男"
		},{
			key:"二维码",
			msg:"image",
			value:""
		}]
	})

</script>

<style scoped>
	.userInfo{
		background-color: #e6e6e6;
		height: 100vh;
	}
	.userInfo_first{
		background-color: white;
		transform: translateY(10px);
	}
	.userInfo_first-item{
		display: flex;
		padding: 15px;
		align-items: center;
		justify-content: space-between;
		border-bottom: 1px solid #e6e6e6;
	}
</style>
