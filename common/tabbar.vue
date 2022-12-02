<template>
	<view class="tabbar"  :class="store.state.css_style?'gray_filter':''">
		<view v-for="item,index in tabbar" @click="changeTabbar(index)">
			<view>
				<image style="width: 40rpx;height: 40rpx;" :src="ctabbarItem==index? item.cimage: item.unimage" mode="">
				</image>
			</view>
			<view class="tabbarfonts" :class="ctabbarItem==index?'fontcolor':''">
				{{item.name}}
			</view>
		</view>

	</view>
</template>

<script setup>
	import library1 from "../static/image/library1.png"
	import library2 from "../static/image/library2.png"
	import data1 from "../static/image/data1.png"
	import data2 from "../static/image/data2.png"
	import search1 from "../static/image/search1.png"
	import search2 from "../static/image/search2.png"
	import radio1 from "../static/image/radio1.png"
	import radio2 from "../static/image/radio2.png"
	import setting1 from "../static/image/setting1.png"
	import setting2 from "../static/image/setting2.png"
	import {
		ref,getCurrentInstance
	} from "vue"
	import store from "../store/index.js"
const proxy = getCurrentInstance()
	let ctabbarItem = ref(0)
	let tabbar = ref([{
			name: "音乐馆",
			cimage: library2,
			unimage: library1
		},
		{
			name: "排行榜",
			cimage: data2,
			unimage: data1
		},
		{
			name: "搜索",
			cimage: search2,
			unimage: search1
		},
		{
			name: "电台",
			cimage: radio2,
			unimage: radio1
		},
		{
			name: "设置",
			cimage: setting2,
			unimage: setting1
		},
	])
	const changeTabbar = (index) => {
		switch (index) {
			case 0:
				ctabbarItem.value = 0
				proxy.emit("ctabbarItem",0)
				break
			case 1:
				ctabbarItem.value = 1
				proxy.emit("ctabbarItem",1)
				break
			case 2:
				ctabbarItem.value = 2
				proxy.emit("ctabbarItem",2)
				break
			case 3:
				ctabbarItem.value = 3
				proxy.emit("ctabbarItem",3)
				break
			case 4:
				ctabbarItem.value = 4
				proxy.emit("ctabbarItem",4)
				break
		}
	}
</script>

<style scoped>
	.tabbar {
		display: flex;
		width: 100%;
		position: fixed;
		bottom: 0;
		font-size: 14px;
		padding-bottom: 30rpx;
		background-color: #eee;
		height: 80rpx;
		line-height: 80rpx;
		
	}

	.tabbar>view {
		flex: 1;
		text-align: center;

	}

	.tabbar>view>view {
		height: 30rpx;
	}

	.fontcolor {
		color: #1c9651;
	}
</style>
