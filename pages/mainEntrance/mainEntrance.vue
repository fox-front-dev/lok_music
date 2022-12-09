<template>
	<view class="main">
		<home v-if="ctabbarItem===0"></home>
		<trending v-if="ctabbarItem===1"></trending>
		<search v-if="ctabbarItem===2"></search>
		<radios v-if="ctabbarItem===3"></radios>
		<setting v-if="ctabbarItem===4"></setting>
		<playTabbar></playTabbar>
		<tabbar @ctabbarItem="ctabbarEvent"></tabbar>
	</view>
</template>

<script setup>
	import home from "/pages/home/home.vue"
	import trending from "/pages/trending/trending.vue"
	import search from "/pages/search/search.vue"
	import radios from "/pages/radios/radios.vue"
	import setting from "/pages/setting/setting.vue"
	import tabbar from "../../common/tabbar.vue"
	import playTabbar from "../../common/play_tabbar.vue"
	import store from "../../store/index.js"
	import unistorage from "../../uniStorage/index.js"
	import {
		ref,
		onMounted,
		getCurrentInstance
	} from "vue"
	import {
		onBackPress
	} from "@dcloudio/uni-app";
	const proxy = getCurrentInstance()
	let ctabbarItem = ref(0)
	const ctabbarEvent = (value) => {
		ctabbarItem.value = value
	}
	let keepAlive = ref(null)
	onMounted(() => {
		keepAlive.value = uni.requireNativePlugin('Ba-KeepAlive')
	})
	let first = ref(null);
	onBackPress(() => {
		if (!first.value) {
			first.value = 1;
			setTimeout(function() {
				first.value = null;
			}, 3000);
		} else {
			keepAlive.value.isRunning(res => {
				if (res.isRunning) {
					// 
					keepAlive.value.unregister()
				}
			})
		}
	})
</script>

<style scoped>

</style>
