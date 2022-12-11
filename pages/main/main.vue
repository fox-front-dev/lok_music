<template>
	<view class="main_container">
		<view class="showNumber">
			{{time}}s
		</view>
		<text>广告位招租(开玩笑)</text>
	</view>
</template>

<script setup>
	import {ref,onMounted} from "vue"
	import unistorage from "../../uniStorage/index.js"
	import axios from "../../http/req.js"
	let time=ref(3)
	onMounted(()=>{
		let Interval=setInterval(()=>{
			if(time.value<=0) {
				uni.redirectTo({
					url:"/pages/mainEntrance/mainEntrance"
				})
				clearInterval(Interval)
				time.value=3
			}
			time.value--
		},1000)
	})
</script>

<style scoped>
.main_container{
	height: 100vh;
	width: 100vw;
	background-color: aqua;
	display: flex;
	align-items: center;
	justify-content: center;
	position: relative;
}
.showNumber{
	width: 30px;
	height: 30px;
	border-radius: 50%;
	text-align: center;
	line-height:30px;
	font-size: 14px;
	background-color: antiquewhite;
	position: absolute;
	top: 50px;
	right: 20px;
}
</style>
