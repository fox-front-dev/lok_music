<template>
	<scroll-view @scroll="scroll_event" scroll-y @scrolltolower="scrolltolower">

		<view class="home_content" :class="store.state.css_style?'gray_filter':''"
			:style="{paddingTop:statusBarHeight+'px'}">
			<view class="title">
				<view class="title_left">
					音乐室
					<view>
						音乐列表
					</view>
				</view>
				<view class="title_right">
					<image lazy-load v-if="!store.state.userInfo.userAvatar" style="width: 50px;height: 50px;"
						src="../../static/image/Avatar.png" mode=""></image>
					<image lazy-load v-else style="width: 50px;height: 50px;border-radius:50% ;"
						:src="store.state.userInfo.userAvatar" mode=""></image>
				</view>
			</view>

			<view class="loader" style="margin-top: 30vh;" v-if="loadingStatus">

			</view>
			<view class="home_meaus" v-show="!loadingStatus">
				<view class="meaus_item" v-for="item,index in home_meaus" @click="gotoPage(index)">
					<image lazy-load style="width: 40rpx;height: 40rpx;vertical-align: middle;" :src="item.imgurl"
						mode="">
					</image>
					{{item.name}}
					<view class="meaus_right">
						<uni-icons type="right" size="20"></uni-icons>
					</view>
				</view>
			</view>
			<view class="SongsSheets" v-show="!loadingStatus">
				<view class="sheets_title">
					每日推荐
					<view class="sheets_right">
						<uni-icons @click="gotoPage(4)" type="forward" size="16"></uni-icons>
					</view>
				</view>
				<view class="swiperModel" v-show="!loadingStatus">
					<view class="uni-margin-wrap">
						<swiper class="swiper" display-multiple-items="3" next-margin="26px">
							<swiper-item v-for="item,index in recommendsheetlist">
								<view class="swiper-item" @click="gotoPage(7,item.id)">
									<view class="imageView">
										<image lazy-load :src="item.picUrl" style="width:100%;height: 100%;">
										</image>
									</view>
									<view class="swiper_content">
										{{item.name}}
									</view>
								</view>

							</swiper-item>
						</swiper>
					</view>
				</view>
			</view>
			<view class="comment" v-if="loginStatus" v-show="!loadingStatus">
				<view class="comment_title sheets_title">
					热门话题
				</view>
				<view class="swiper_comment">
					<swiper class="swiper swiper-style" next-margin="40rpx">
						<swiper-item v-for="item,index in hottopiclist">
							<view class="swiper-item3 uni-bg-red">
								<view class="swiper-item3-item-style">
									<view class="swiper-item3-item-style_item">
										<view class="swiper-item3-item-style_title">
											{{item.title}}
										</view>
										<view class="swiper-item3-item-style_title2">
											22w热度
										</view>
										<view class="swiper-item3-item-style_title3">
											{{item.text[0]?item.text[0]:"暂无内容"}}
										</view>
									</view>
									<image lazy-load class="swiper-item3-item-style-image" v-if="item.sharePicUrl"
										:src="item.sharePicUrl" mode=""></image>
								</view>
							</view>
						</swiper-item>
					</swiper>
				</view>
			</view>
			<view class="loginstatus swiper-item3-item-style" @click="gotoPage()" v-if="!loginStatus"
				v-show="!loadingStatus">
				还未<text>登录</text>？点击立马解锁内容
			</view>

			<view class="event_item" @click="gotoPage(6,item)" v-if="loginStatus"
				v-for="item,index in useralleventdatares" v-show="!loadingStatus">
				<view class="event_item_title">
					<image lazy-load class="event_item_title_avart" :src="item.user.avatarUrl"></image>
					<view class="event_item-name">
						<view class="event_item-name-title">
							{{item.user.nickname}}
						</view>
						<view class="event_item-name-time">
							{{item.showTime2}}
						</view>
					</view>
				</view>
				<view class="event_item_content">
					{{item.msg2}}
				</view>
				<view class="event_item_image" v-if="item.pics.length">
					<image lazy-load mode="aspectFill" v-for="item,index in item.pics" class="event_item_image-item"
						:src="item.originUrl"></image>
				</view>
				<view class="playmusic_item" v-if="item.song2">
					<image lazy-load class="playmusic_item-image" :src="item.song2.album.picUrl"></image>
					<view class="playmusic_item-right">
						<view class="playmusic_item-right-title">
							{{item.song2.name}}
						</view>
						<view class="playmusic_item-right-art">
							{{item.song2.album.artists[0].name}}
						</view>
					</view>
				</view>
				<view class="click_btn" v-show="!loadingStatus">
					<view class="">
						<uni-icons color="#9194AE" type="redo" size="20"></uni-icons>
						{{item.info.commentThread.hotCount}}
					</view>
					<view class="">
						<uni-icons color="#9194AE" type="chatboxes" size="20"></uni-icons>{{
							item.info.commentThread.commentCount
						}}
					</view>
					<view class="">
						<uni-icons color="#9194AE" type="hand-up" size="20"></uni-icons>{{
							item.info.commentThread.likedCount
						}}
					</view>
				</view>
			</view>
		</view>

		<view class="issuance" v-if="issuanceStatus&&loginStatus" @click="gotoPage(5)" v-show="!loadingStatus">
			发布
		</view>

	</scroll-view>

</template>

<script setup>
	import {
		ref,
		getCurrentInstance,
		onMounted,
		nextTick
		// onPageScroll
	} from "vue"
	import {
		onLoad,
		onShow
	} from "@dcloudio/uni-app";
	import shape1 from "../../static/image/Shape1.png"
	import shape2 from "../../static/image/Shape2.png"
	import shape3 from "../../static/image/Shape3.png"
	import shape4 from "../../static/image/Shape4.png"
	import store from "../../store/index.js"
	import req from "../../http/req.js"
	import uniStorage from "../../uniStorage/index.js"
	import axios from "../../http/req.js"
	let loadingStatus = ref(true)
	let issuanceStatus = ref(false)
	let loginStatus = ref(false)
	const proxy = getCurrentInstance()
	let token = ref('')
	let statusBarHeight = ref(0)
	// '歌单','专辑','音乐','歌手'
	let home_meaus = [{
		name: '歌单',
		imgurl: shape1
	}, {
		name: '专辑',
		imgurl: shape2
	}, {
		name: '音乐',
		imgurl: shape3
	}, {
		name: '歌手',
		imgurl: shape4
	}, ]
	let audioAction = ref({
		method: 'pause'
	})
	onMounted(() => {
		gettitleheight()
		getrecommondsongsheet()
		userInfo()
		gethottopic()
		if (uniStorage.getStorage("userId")) {
			getuserallevent()
			usersongsheet(store.state.userId)
			getUserInfo()
		}
	})


	// 上一页返回时调用函数
	onLoad(() => {
		uni.$on('refreshData', () => {
			useralleventdata.value.lasttime = ""
			useralleventdata.value.pagesize = 20
			useralleventdatares.value = []
			getuserallevent()
		})

	})
	// 获取用户所有的动态(朋友也算)
	let useralleventdata = ref({
		pagesize: 20,
		lasttime: ""
	})
	let useralleventdatares = ref([])
	const getuserallevent = async () => {
		await axios.getuserallevent(useralleventdata.value).then(res => {
			// console.log(res);
			if (res.data.event) {
				useralleventdata.value.lasttime = res.data.lasttime
				useralleventdatares.value = useralleventdatares.value.concat(res.data.event)
				useralleventdatares.value.forEach(item => {
					// 获取时间
					let date = new Date(item.showTime)
					let year = date.getFullYear() >= 10 ? date.getFullYear() : "0" + date
						.getFullYear()
					let month = date.getMonth() + 1 >= 10 ? date.getMonth() + 1 : "0" + date
						.getMonth() + 1
					let dates = date.getDate() >= 10 ? date.getDate() : "0" + date.getDate()
					item.showTime2 = year + "-" + month + "-" + dates
					if ("song" in JSON.parse(item.json)) {
						item.song2 = JSON.parse(item.json).song
					}
					if ("msg" in JSON.parse(item.json)) {
						item.msg2 = JSON.parse(item.json).msg
					}
				})

			}
		}).catch(err=>{
			setTimeout(()=>{
				getuserallevent()
			},1000)
		})
	}
	// 获取用户信息
	const getUserInfo = async () => {
		await axios.getuserInfo({
			uid: store.state.userId
		}).then(res => {
			userInfo.value = res.data
			store.commit("userInfo", {
				userId: res.data.account.id,
				userAvatar: res.data.profile.avatarUrl,
				nickname: res.data.profile.nickname
			})
			setTimeout(() => {
				loadingStatus.value = false
			}, 1000)
		}).catch(err=>{
			setTimeout(()=>{
				getUserInfo()
			},1000)
		})
	}
	// 获取用户喜欢的音乐歌单
	let songssheetlist = ref("")
	const usersongsheet = async (uid) => {
		await axios.userplaylist({
			uid,
			limit: 1
		}).then(res => {
			songssheetlist.value = res.data.playlist[0].id
			// console.log(songssheetlist.value);
			// 获取用户喜欢的歌单中的音乐
			getsheetallsongs(songssheetlist.value)
		}).catch(err=>{
			setTimeout(()=>{
				usersongsheet(uid)
			},1000)
		})
	}
	// 滚动事件
	const scroll_event = (event) => {
		if (event.detail.scrollTop >= 710 && !issuanceStatus.value) {
			issuanceStatus.value = true
		} else if (event.detail.scrollTop < 710 && issuanceStatus.value) {
			issuanceStatus.value = false
		}
	}
	// 用户登录状态
	const userInfo = () => {
		//判断是否有token，没有就给游客
		store.commit("userId", uniStorage.getStorage("userId"))
		store.commit("token", uniStorage.getStorage("token"))
		if (store.state.token && store.state.userId) {
			loginStatus.value = true
		}
		if (!store.state.token) {
			anonimous()
		}
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
	// 滚动到底部加载
	const scrolltolower = async () => {
		getuserallevent()
	}
	// 游客登录
	const anonimous = async () => {
		await axios.anonimous().then(res => {
			if (res.data.code == 200) {
				uniStorage.setStorage("token", res.data.cookie)
			}
		}).catch(err=>{
			setTimeout(()=>{
				anonimous()
			},1000)
		})
	}
	// 获取推荐歌单
	let recommendsheetlist = ref([])
	const getrecommondsongsheet = async () => {
		await axios.recommendsheet({
			limit: 10
		}).then(res => {
			recommendsheetlist.value = res.data.result
		}).catch(err=>{
			setTimeout(()=>{
				getrecommondsongsheet()
			},1000)
		})
	}
	// 热门话题
	let hottopiclist = ref()
	const gethottopic = async () => {
		await axios.hottopic({
			limit: 6,
			offset: 1
		}).then(res => {
			hottopiclist.value = res.data.hot
			if (!(uniStorage.getStorage("userId"))) {
				setTimeout(() => {
					loadingStatus.value = false
				}, 1000)
			}

		}).catch(err=>{
			setTimeout(()=>{
				gethottopic()
			},1000)
		})
	}
	// 根据音乐歌单id获取用户歌单的音乐
	const songslist = ref([])
	const getsheetallsongs = async (id) => {
		await axios.getsheetallsongs({
			id
		}).then(res => {
			songslist.value = res.data.songs
			store.commit("changeMusic", {
				musiclist: songslist.value,
				index: 0
			})
			
		}).catch(err=>{
			setTimeout(()=>{
				getsheetallsongs(id)
			},1000)
		})
	}

	//前往别的页面
	const gotoPage = (item, songsid) => {
		if (store.state.token && store.state.userId) {
			switch (item) {
				case 0:
					uni.navigateTo({
						url: "/pages/home/playlists/playlists"
					})
					break
				case 1:
					uni.navigateTo({
						url: "/pages/home/albums/albums"
					})
					break
				case 2:
					uni.navigateTo({
						url: `/pages/home/songs/songs?songssheetId=${songssheetlist.value}&userId=${store.state.userId}`,
					})
					break
				case 3:
					uni.showToast({
						title: "功能未实现，太简单了不想做",
						icon: 'none'
					})
					return
					uni.navigateTo({
						url: "/pages/home/artists/artists"
					})
					break
				case 4:
					uni.navigateTo({
						url: "/pages/home/dailyrecommendations/dailyrecommendations"
					})
					break
				case 5:
					uni.navigateTo({
						url: "/pages/home/issuanceTrends/issuanceTrends",
						events: {
							acceptDataFromOpenedPage() {
								console.log(213);
							},
							someEvent() {
								console.log(345);
							}
						}
					})
					break
				case 6:
					uni.navigateTo({
						url: `/pages/home/event/event?event=${JSON.stringify(songsid)}`,
					})
					break
				case 7:
					uni.navigateTo({
						url: `/pages/home/songs/songs?songssheetId=${songsid}`
					})
					break

			}
		} else {
			uni.navigateTo({
				url: "/pages/login/login/login"
			})
		}
	}
</script>

<style scoped>
	.home_content {
		box-sizing: border-box;
		padding-bottom: 260rpx;

	}

	.home_content .title {
		margin-top: 20rpx;
		height: 200rpx;
		display: flex;
		padding: 30rpx;
		justify-content: space-between;
		box-sizing: border-box;
	}

	.title_left {
		font-size: 30px;
	}

	.title_left view {
		margin-top: 10rpx;
		font-size: 18px;
	}

	.title_right {
		line-height: 200rpx;
	}

	.home_meaus {
		border-top: 1px solid #e6e6e6;
		padding: 20rpx;
	}

	.meaus_item:nth-child(1) {
		margin-top: 0;
	}

	.meaus_item {
		margin-top: 20rpx;
		line-height: 80rpx;
		height: 80rpx;
		align-items: center;
		font-size: 18px;
		display: flex;
		background-color: #F3F3F3;
		padding-left: 10px;
		padding-right: 10px;
		border-radius: 10px;
	}

	.meaus_item>image {
		margin-right: 10px;
	}

	.meaus_right {
		flex: 1;
		text-align: right;
	}

	.sheets_title {
		display: flex;
		justify-content: space-between;
		margin: 30rpx;
		font-size: 24px;
		/* padding-bottom: 30rpx; */
		border-bottom: 1px solid #e6e6e6;
	}

	.sheets_right {
		font-size: 16px;
		display: flex;
		align-items: center;
	}

	.swiper-item {
		margin: 0 15px;
	}

	.imageView {
		width: 100%;
		height: 160rpx;
		border-radius: 10px;
		overflow: hidden;
		background-color: #e6e6e6;
	}

	.swiper_content {
		width: 100%;
		display: -webkit-box;
		overflow: hidden;
		z-index: 10;
		text-overflow: ellipsis;
		word-wrap: break-word;
		white-space: normal;
		-webkit-line-clamp: 2;
		-webkit-box-orient: vertical;
		text-align: center;
		font-size: 12px;
		margin-top: 5px;
	}

	.SongsSheets {
		height: 400rpx;
		overflow: hidden;
	}

	.swiper-item3 {
		/* background-color: #e6e6e6; */
		width: 100%;
		height: 300rpx;
		/* border: 1px solid #e6e6e6; */
		/* background-color: aqua; */
		padding: 15px;
		box-sizing: border-box;
	}

	.swiper-item3-item-style {
		width: 100%;
		height: 100%;
		background-color: white;
		border-radius: 6px;
		box-shadow: 0 0 10px 5px rgba(0, 0, 0, 0.3);
		padding: 20px;
		box-sizing: border-box;
		position: relative;

	}

	.swiper-item3-item-style_title {
		font-size: 16px;
		white-space: nowrap;
		overflow: hidden;
		text-overflow: ellipsis;
	}

	.swiper-item3-item-style_title2 {
		font-size: 12px;
	}

	.swiper-item3-item-style-image {
		width: 80px;
		height: 80px;
		border-radius: 10px;
		position: absolute;
		right: 10px;
		top: 50%;
		transform: translateY(-50%);
	}

	.swiper-item3-item-style_title3 {
		font-size: 14px;
		text-overflow: -o-ellipsis-lastline;
		width: 60%;
		overflow: hidden;
		/* margin-top: 10rpx; */
		position: absolute;
		bottom: 20px;
		text-overflow: ellipsis;
		display: -webkit-box;
		-webkit-line-clamp: 2;
		-webkit-box-orient: vertical;
		/* width: 70%; */
	}

	.swiper-item3-item-style_item {
		width: 60%;
	}

	.event_item {
		padding: 15px;
		box-sizing: border-box;
	}

	.event_item_title {
		display: flex;
		position: relative;
	}

	.event_item_title_avart {
		width: 40px;
		height: 40px;
		border-radius: 50%;
	}

	.event_item-name {
		/* margin-left: 10px; */
		position: absolute;
		left: 50px;
	}

	.event_item-name-title {
		font-size: 14px;
		font-weight: bold;
	}

	.event_item-name-time {
		font-size: 12px;
		color: #545454;
	}

	.event_item_content {

		margin-left: 50px;
		font-size: 14px;
		padding-right: 15px;
		text-overflow: -o-ellipsis-lastline;
		overflow: hidden;
		text-overflow: ellipsis;
		display: -webkit-box;
		-webkit-line-clamp: 5;
		-webkit-box-orient: vertical;
	}

	.event_item_image {
		/* width: 100%; */
		margin-left: 50px;
		display: flex;
		justify-content: space-between;
		flex-wrap: wrap;
	}

	.event_item_image-item {
		/* height:	100px; */
		width: 48%;
		height: 150px;
		border-radius: 10px;
		margin-top: 10px;
	}

	.click_btn {
		display: flex;
		margin-left: 50px;
		margin-top: 20px;
	}

	.click_btn>view {

		font-size: 14px;
		display: flex;
		align-items: center;
		color: #9194AE;
	}

	.click_btn>view:nth-child(2) {
		margin-left: 50px;
		font-size: 14px;
		display: flex;
		align-items: center;
		color: #9194AE;
	}

	.click_btn>view:nth-child(3) {
		margin-left: 50px;
		font-size: 14px;
		display: flex;
		align-items: center;
		color: #9194AE;
	}

	.playmusic_item {
		height: 100rpx;
		margin-left: 50px;
		margin-top: 10px;
		background-color: #e6e6e6;
		border-radius: 10rpx;
		padding-left: 10px;
		display: flex;
		align-items: center;
	}

	.playmusic_item-image {
		width: 80rpx;
		height: 80rpx;
		border-radius: 10rpx;
	}

	.playmusic_item-right {
		margin-left: 10px;
	}

	.playmusic_item-right-title {
		font-size: 14px;
	}

	.playmusic_item-right-art {
		font-size: 12px;
		color: #545454;
	}

	.issuance {
		position: fixed;
		border-radius: 50%;
		top: 70%;
		right: 20px;
		background-color: rgba(255, 115, 97, 0.9);
		text-align: center;
		display: flex;
		align-items: center;
		font-size: 12px;
		justify-content: space-around;
		color: white;
		width: 40px;
		height: 40px;
		animation: issunacean 1s;
	}

	.loginstatus {
		width: 80%;
		margin: 30px auto;
		font-size: 14px;
		text-align: center;
	}

	.loginstatus text {
		color: #4891ff;
		margin-left: 4px;
		margin-right: 4px;
	}


	@keyframes issunacean {
		0% {
			opacity: 0;
		}

		100% {
			opacity: 1;
		}
	}

	::v-deep uni-swiper {
		height: 300rpx;
	}

	scroll-view {
		height: 100vh;
	}

	/* 
	 */
</style>
