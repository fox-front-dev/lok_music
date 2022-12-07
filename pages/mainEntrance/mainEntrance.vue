<template>
	<view class="main" >
		<home v-if="ctabbarItem===0"></home>
		<trending v-if="ctabbarItem===1"></trending>
		<search v-if="ctabbarItem===2"></search>
		<radios v-if="ctabbarItem===3"></radios>
		<setting v-if="ctabbarItem===4"></setting>
		<playTabbar v-if="store.state.musicPlay.playMusicList"></playTabbar>
		<tabbar @ctabbarItem="ctabbarEvent"></tabbar>
	</view>
</template>

<script setup>
	import home from "../home/home.vue"
	import trending from "../trending/trending.vue"
	import search from "../search/search.vue"
	import radios from "../radios/radios.vue"
	import setting from "../setting/setting.vue"
	import tabbar from "../../common/tabbar.vue"
	import playTabbar from "../../common/play_tabbar.vue"
	import store from "../../store/index.js"
	import unistorage from "../../uniStorage/index.js"
	import {
		ref,
		onMounted,
		getCurrentInstance
	} from "vue"
	const proxy = getCurrentInstance()
	let ctabbarItem = ref(0)
	const ctabbarEvent = (value) => {
		ctabbarItem.value = 0
		ctabbarItem.value = value
	}

</script>

<style scoped>

</style>
