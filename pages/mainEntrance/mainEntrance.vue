<template>
	<view class="main" >
		<home v-if="ctabbarItem===0"></home>
		<trending v-if="ctabbarItem===1"></trending>
		<search v-if="ctabbarItem===2"></search>
		<radios v-if="ctabbarItem===3"></radios>
		<setting v-if="ctabbarItem===4"></setting>
		<playTabbar v-show="store.state.musicPlay.playMusicURL"></playTabbar>
		<tabbar @ctabbarItem="ctabbarEvent"></tabbar>
		<uni-popup ref="popup" type="dialog">
			<uni-popup-dialog mode="base" content="请先打开权限,否则无法熄屏播放" message="成功消息" :duration="2000"
				:before-close="true" @close="close" @confirm="confirm"></uni-popup-dialog>
		</uni-popup>
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
	const info = ref({
		pausePlay: null,
		channelId: 'Ba-KeepAlive',
		channelName: "Ba-KeepAlive",
		title: "lok音乐",
		content: "lok音乐正在运行",
		dataResult: "",
		type: undefined
	})
	// 注册服务
	const register = () => { //注册
		let keepAlive = uni.requireNativePlugin('Ba-KeepAlive')
		keepAlive.register({
				channelId: info.value.channelId,
				channelName: info.value.channelName,
				title: info.value.title,
				content: info.value.content,
				backgroundMusicEnabled: true,
				musicInterval: 2
			},
			(res) => {});
	}
	// 获取并打开权限
	const whiteList2 = () => { //获取并打开白名单
		let keepAlive = uni.requireNativePlugin('Ba-KeepAlive')
		keepAlive.whiteList({
			isDialog: true,
			reason: "轨迹服务",
			whiteType: 0,
		}, (res) => {
			proxy.refs.popup.close()
			if(res.msg!="success"){
				uni.showToast({
					title:"请手动打开权限"
				})
			}
		});
	}
	const POWER_SERVICE = () => {
		// return
		let main = plus.android.runtimeMainActivity();
		let packName = main.getPackageName();
		let Context = plus.android.importClass("android.content.Context");
		let PowerManager = plus.android.importClass("android.os.PowerManager");
		// 获取电源类  
		let pm = main.getSystemService(Context.POWER_SERVICE);
		let whiteList = pm.isIgnoringBatteryOptimizations(packName);
		if (!whiteList && !unistorage.getStorage("firstOpenApp")) {
			proxy.refs.popup.open()
		}
	}
	const confirm = () => {
		whiteList2()
		return
		let main = plus.android.runtimeMainActivity();
		let packName = main.getPackageName();
		let Context = plus.android.importClass("android.content.Context");
		let PowerManager = plus.android.importClass("android.os.PowerManager");
		// 获取电源类  
		let pm = main.getSystemService(Context.POWER_SERVICE);
		let whiteList = pm.isIgnoringBatteryOptimizations(packName);
		try {
			let Uri = plus.android.importClass("android.net.Uri");
			let Settings = plus.android.importClass("android.provider.Settings");
			let packageURI = Uri.parse("package:" + packName);
			let intents = plus.android.newObject("android.content.Intent", Settings
				.ACTION_REQUEST_IGNORE_BATTERY_OPTIMIZATIONS, packageURI); // 电池  
			main.startActivity(intents);
		} catch {
			uni.showToast({
				title: "打开失败，请手动打开",
				icon: "none"
			})
		}
		proxy.refs.popup.close()
	}
	const close = () => {
		proxy.refs.popup.close()
		unistorage.setStorage("firstOpenApp", true)
		uni.showToast({
			title: "无法后台播放！请以后手动添加",
			icon: "none"
		})
	}
	onMounted(() => {
		// app打包取消注释
		POWER_SERVICE()
		register()
	})
</script>

<style scoped>

</style>
