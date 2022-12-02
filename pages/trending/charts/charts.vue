<template>
	<scroll-view  scroll-y :show-scrollbar="false"  :class="store.state.css_style?'gray_filter':''">
	<view class="charts" :style="{paddingTop:statusBarHeight+'px'}">
		<view class="title">
			<view class="title_left" @click="get">
				{{current==0?"歌曲":current==1?"专辑":"歌手"}}
			</view>
		</view>
		<view class="change_tabs">
			<view :class="current==0?'bordergreen':''" @click="changeView(0)">
				{{toplist.name}}
			</view>
			<view :class="current==1?'bordergreen':''" @click="changeView(1)">
				歌单榜
			</view>
			<view :class="current==2?'bordergreen':''" @click="changeView(2)">
				歌手榜
			</view>
		</view>
		<view class="charts_content" v-show="current==0">
			<view class="charts_item" v-for="item,index in sheetsonglist ">
				<view class="charts_item1">
					{{index+1}}
				</view>
				<view class="charts_item2">
					<image lazy-load style="width: 100%;height: 100%;border-radius: 10px;" :src="item.al.picUrl" mode=""></image>
				</view>
				<view class="charts_item3">
					<view class="charts_item3_title">
						{{item.name}}
					</view>
					<view class="charts_item3_content">
						<text v-for="i in item.ar">{{i.name}}&nbsp;&nbsp;</text>
					</view>
				</view>
				<view class="charts_item4">
					<uni-icons type="more-filled" color="#B9B9B9" size="25"></uni-icons>
				</view>
			</view>
		</view>
		<view class="charts_albums" v-show="current==1">
			<view class="charts_albums_item" v-for="item,index in highqualitylist ">
				<view class="charts_albums_item1">
					{{index+1}}
				</view>
				<view class="charts_albums_item2">
					<image lazy-load style="width: 100%;height: 100%;border-radius: 10px;" :src="item.coverImgUrl" mode=""></image>
				</view>
				<view class="charts_albums_item3">
					<view class="charts_item3_title">
						{{item.name}}
					</view>
					<view class="charts_item3_content">
						
						<view class="reviews">
							{{item.creator.nickname}}
						</view>
						<view class="star">
							{{item.shareCount}}次分享
						</view>
					</view>
				</view>
				<view class="charts_albums_item4">
					<uni-icons type="more-filled" color="#B9B9B9" size="25"></uni-icons>
				</view>
			</view>
		</view>
		<view class="charts_content" v-show="current==2">
			<view class="charts_item" v-for="item,index in toplistart">
				<view class="charts_item1"  :class="index<3?'hot':''" >
					{{index<3?"Hot":index+1+""}}
				</view>
				<view class="charts_item2" >
					<image lazy-load style="width: 100%;height: 100%;border-radius: 10px;" :src="item.picUrl" mode=""></image>
				</view>
				<view class="charts_item3" >
					<view class="charts_item3_title"  >
						{{item.name}}
					</view>
					<view class="charts_item3_content" >
						{{item.score}}
					</view>
				</view>
				<view class="charts_item4">
					<uni-icons type="more-filled" color="#B9B9B9" size="25"></uni-icons>
				</view>
			</view>
		</view>
	</view>
	</scroll-view>
</template>

<script setup>
	import {
		ref,
		getCurrentInstance,
		onMounted
	} from "vue"
	import store from "../../../store/index.js"
	import axios from "../../../http/req.js"
	let current = ref(0)
	let statusBarHeight = ref(0)

	
	const changeView = (index) => {
		if (index == current.value) return
		current.value = index
	}
	onMounted(() => {
		gettitleheight()
		gettoplist()
		toplistartist()
		highquality()
	})
	// 获取所有榜单
	let toplist=ref({})
	let toplistid=ref("")
	const gettoplist= async()=>{
		await axios.allToplist().then(res=>{
			toplist.value=res.data.list[0]
			toplistid.value=res.data.list[0].id
		})
		getsheetallsongs()
	}
	// 获取排行版音乐
	let sheetsonglist=ref([])
	const getsheetallsongs= async()=>{
		await axios.getsheetallsongs({
		id:toplistid.value	
		}).then(res=>{
			sheetsonglist.value=res.data.songs
			sheetsonglist.value.length=20
		})
	}
	// 获取标题高度
	const gettitleheight = () => {
		//获取手机信息，例如状态栏高度
		uni.getSystemInfo({
			success(res) {
				if (res.statusBarHeight == 0) return
				statusBarHeight.value = res.statusBarHeight
				store.commit("phoneInfo", {
					statusbarHeight: res.statusBarHeight
				})
			}
		})
	}
	// 歌手排行榜
	let toplistart=ref([])
	let toplistart2=ref([])
	const toplistartist=async()=>{
		await axios.toplistartist().then(res=>{
			// console.log(res.data.list.artists);
			toplistart2.value=res.data.list.artists;
			toplistart.value=[...toplistart2.value]
			toplistart.value.length=20
		})
	}
	// 歌单榜
	let highqualitydata=ref({
		limit:20,
		before:""
	})
	let highqualitylist=ref([])
	const highquality=async()=>{
		await axios.highquality(highqualitydata.value).then(res=>{
			highqualitylist.value=res.data.playlists
			highqualitydata.value.before=res.data.lasttime
		})
	} 
	

</script>

<style scoped>
	.charts{
		padding-bottom: 60rpx;
	}
	.title {

		display: flex;
		padding:0 30rpx;
		justify-content: space-between;
		box-sizing: border-box;
	}

	.title_left {
		font-size: 30px;
	}

	.title_left>view {
		margin-top: 10rpx;
		font-size: 18px;
	}

	.title_right {
		line-height: 200rpx;
	}
	.change_tabs {
		display: flex;
		border-bottom: 1px solid #eee;
		padding-left: 30rpx;
		padding-right: 30rpx;
		margin-top: 44rpx;
	}
	
	.change_tabs>view {
		flex: 1;
		text-align: center;
		border-left: 1px solid transparent;
		border-right: 1px solid transparent;
		border-bottom: 1px solid transparent;
		padding-bottom: 20rpx;
	}
	
	.bordergreen {
		border-left: 1px solid #b8e7d1 !important;
		border-right: 1px solid #b8e7d1 !important;
		border-bottom: 1px solid #88d6b1 !important;
		border-bottom-left-radius: 5rpx;
		border-bottom-right-radius: 5rpx;
	}
	.charts_item{
		display: flex;
		margin-top: 30rpx;
	}
	.charts_item1{
		width: 80rpx;
		height: 80rpx;
		text-align: center;
		line-height: 80rpx;
		padding-left: 10rpx;
		box-sizing: border-box;

	}
	.charts_item2{
		width: 80rpx;
		height: 80rpx;
	}
	.charts_item3{
		margin-left: 20rpx;
	}
	.charts_item4{
		line-height: 88rpx;
		flex: 1;
		text-align: right;
		padding-right: 30rpx;
	}
	.charts_item3_title{
		font-size: 16px;
		  text-overflow: -o-ellipsis-lastline;
		  overflow: hidden;
		  text-overflow: ellipsis;
		  display: -webkit-box;
		  -webkit-line-clamp: 1;
		  line-clamp: 1;
		  -webkit-box-orient: vertical;
		  width: 12em;
	}
	.reviews{
		margin-top: 10rpx;
	}
	.charts_item3_content{
		font-size: 14px;
		width: 12em;
		display: flex;
		/* margin-top: 18rpx; */
		text-overflow: -o-ellipsis-lastline;
		overflow: hidden;
		text-overflow: ellipsis;
		display: -webkit-box;
		-webkit-line-clamp: 1;
		line-clamp: 1;
		-webkit-box-orient: vertical;
	}
	.charts_albums_item{
		height: 160rpx;
		display: flex;
		margin-top: 30rpx;
	}
	.charts_albums_item1{
		width: 80rpx;
		height: 160rpx;
		text-align: center;
		line-height: 160rpx;
		padding-left: 10rpx;
		box-sizing: border-box;
	}
	.charts_albums_item2{
		width: 160rpx;
		height: 160rpx;
	
	}
	.charts_albums_item3{
		margin-left: 20rpx;
	}
	.charts_albums_item4{
		line-height: 160rpx;
		flex: 1;
		text-align: right;
		padding-right: 30rpx;
	}
	.star{
		/* width: 100rpx; */
		height: 44rpx;
		border-radius: 10rpx;
		background-color: #eee;
		text-align: center;
		line-height: 44rpx;
		font-size: 12px;
		margin-top: 20rpx;
	}
	.hot{
		color:red
	}
	scroll-view {
		height: 100vh;
	}
</style>
