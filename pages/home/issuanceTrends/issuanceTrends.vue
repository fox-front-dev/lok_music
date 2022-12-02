<template>
	<view class="issuanceTrends" :style="{paddingTop:statusBarHeight+'px'}">
		<view class="issuanceTrends_title">
			<uni-icons type="back" @click="gobacks" size="20"></uni-icons>
			发图文
			<view class="issuancebtn" @click="send">
				发布
			</view>
		</view>
		<view class="issuanceTest">
			<uni-easyinput borderColor="white" maxlength="-1" :placeholderStyle="placeholderStyle" autoHeight focus
				:inputBorder="false" type="textarea" v-model="testvalue" placeholder="Tips:该页面没有接口,除了分享音乐和文字,其他功能暂未实现">
			</uni-easyinput>
		</view>
		<view class="changeimage">
			<view class="example-body">
				<uni-file-picker ref="files" :auto-upload="false" limit="9"></uni-file-picker>
			</view>
		</view>
		<view class="changemusic" v-if="selectmusicval">
			<view class="scroll_item_item2" >
				<image class="scroll_item_image" :src="selectmusicval[0].al.picUrl" mode=""></image>
				<view class="songsname">
					<view class="songsname_top">
						{{selectmusicval[0].name}}
					</view>
					<view class="songsname_bottom">
						<text v-for="item in selectmusicval[0].ar">{{item.name}}&nbsp;</text>
					</view>
				</view>
			</view>
		</view>
		<view class="iconmeau">
			<view>
				<uni-icons @click="gotoselectsongsPage()" color="#676767" size="23" custom-prefix="iconfont"
					type="icon-music"></uni-icons>
			</view>
			<view>
				<uni-icons @click="uploadImage" color="#676767" size="25" custom-prefix="iconfont" type="icon-tupian">
				</uni-icons>
			</view>
			<view>
				<uni-icons @click="recorderManagers" color="#676767" size="25" custom-prefix="iconfont"
					type="icon-maikefeng"></uni-icons>
			</view>
			<view>
				<uni-icons color="#676767" size="23" custom-prefix="iconfont" type="icon-aite"></uni-icons>
			</view>
			<view class="selectPeople" v-if="selectPeople">
				<view class="">
					粉丝可见
				</view>
				<view class="">
					自己可见
				</view>
			</view>
			<view class="changepeople" @click="changeselectPeople">
				所有人可见
				<uni-icons v-if="!selectPeople" custom-prefix="custom-icon" type="bottom" size="12"></uni-icons>
				<uni-icons v-if="selectPeople" custom-prefix="custom-icon" type="top" size="12"></uni-icons>
			</view>
		</view>
	</view>
	<uni-popup ref="popup" type="bottom">
		<view class="recorderManagerpopup">
			<view class="around1" @click="tempFile('play')" v-if="tempFilePath">
				播放
			</view>
			<view class="around" @touchstart="startrecorder">
				<uni-icons v-if="!startrecordericon" color="white" type="mic-filled" size="40"></uni-icons>
				<uni-icons v-if="startrecordericon" color="white" type="spinner-cycle" size="40"></uni-icons>
			</view>
			<view class="around2" @click="tempFile('del')" v-if="tempFilePath">
				删除
			</view>
		</view>

	</uni-popup>
	<uni-popup ref="popup2" type="bottom">
		<view class="selectmusic">
			<view class="selectmusic_container">
				<view class="select_input_view">
					<input v-model="selectsongs" placeholder="请搜索要分享的音乐" type="text">
					<view @click="searchbtn">
						<uni-icons type="search" size="20"></uni-icons>
					</view>

				</view>
				<view class="scroll-container">
					<scroll-view scroll-y="true" class="scroll-Y">
						<view  class="scroll_item">
							<view v-if="!selectvalue.length">
								<view class="scroll_item_item"  @click="selectmusic(item.data.id)"  v-for="item , index in lastplaymusic">
									<image class="scroll_item_image" :src="item.data.al.picUrl" mode=""></image>
									<view class="songsname">
										<view class="songsname_top">
											{{item.data.name}}
										</view>
										<view class="songsname_bottom">
											<text v-for="i in item.data.ar">{{i.name}}&nbsp;</text>
										</view>
									</view>
								</view>
							</view>
							<view v-if="selectvalue.length">
								<view class="scroll_item_item"  @click="selectmusic(item.id)"  v-for="item , index in selectvalue">
									<view class="indexsum" >
										{{index+1}}
									</view>
									<view class="songsname">
										<view class="songsname_top">
											{{item.album.name}}
										</view>
										<view class="songsname_bottom">
											<text v-for="i in item.artists">{{i.name}}&nbsp;</text>
										</view>
									</view>
								</view>
							</view>
							
						</view>
					</scroll-view>
				</view>
			</view>
		</view>
	</uni-popup>
</template>

<script setup>
	import {
		ref,
		getCurrentInstance,
		onMounted
	} from "vue"
	import store from "../../../store/index.js"
	import axios from "../../../http/req.js"
	let statusBarHeight = ref()
	let testvalue = ref("")
	let placeholderStyle = "font-size:16px"
	let selectPeople = ref(false)
	let startrecordericon = ref(false)
	// 录音路径s
	let tempFilePath = ref("")
	let selectsongs=ref("")
	const recorderManager = ref()
	const proxy = getCurrentInstance()
	// let
	// 自定义返回键
	const gobacks = () => {
		setTimeout(()=>{
			uni.$emit('refreshData');
			uni.navigateBack(-1)
		},1000)
	}
	// 点击搜索按钮
	const selectvalue=ref([])
	const searchbtn=async()=>{
		if(selectsongs.value){
			await axios.search({keywords:selectsongs.value}).then(res=>{
			// lastplaymusic.value=[]
			selectvalue.value=res.data.result.songs
			})
		}else{
			return
		}
	}
	const changeselectPeople = () => {
		selectPeople.value = !selectPeople.value
	}
	//上传文件
	const uploadImage = () => {
		proxy.refs.files.chooseFiles()
	}
	//播放或者删除音频
	const tempFile = (flag) => {
		if (flag == "play") {
			const innerAudioContext = uni.createInnerAudioContext();
			innerAudioContext.src = tempFilePath.value; //播放的地址(上面录的本地地址)
			innerAudioContext.play();
		} else {
			tempFilePath.value = ""
		}
	}
	//打开录音popup
	const recorderManagers = () => {
		proxy.refs.popup.open()
	}
	//点击开启录音
	const startrecorder = () => {
		if (!startrecordericon.value && !tempFilePath.value) {
			startrecordericon.value = !startrecordericon.value
			const options = { //参数
				duration: 600000,
				sampleRate: 44100,
				numberOfChannels: 1,
				encodeBitRate: 192000,
				format: 'mp3',
				frameSize: 50
			}
			recorderManager.value.start(options)

		} else if (tempFilePath.value) {
			uni.showToast({
				title: '已经存在录音了',
				duration: 2000
			});
			return
		} else {
			startrecordericon.value = !startrecordericon.value
			recorderManager.value.stop()
		}
	}
	// 打开选择音乐的popup
	const gotoselectsongsPage = () => {
		getlastplaysong()
		proxy.refs.popup2.open()
	}
	// 获取最近播放音乐
	const lastplaymusic=ref([])
	const getlastplaysong=async()=>{
		await axios.lastplaysong({}).then(res=>{
			lastplaymusic.value=res.data.data.list
		})
	}
	// 选择music
	let selectmusicval=ref('')
	let musicid=ref("")
	const selectmusic=async(id)=>{

		await axios.getsongsInfo({ids:id}).then(res=>{
			selectmusicval.value=res.data.songs
		})
		musicid.value=id
		proxy.refs.popup2.close()
	}
	
	// 发送到动态
	const send=async()=>{
		await axios.shareevent({id:musicid.value,type:"song",msg:testvalue.value}).then(res=>{
			gobacks()
		})
	}
	onMounted(() => {
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
		recorderManager.value=uni.getRecorderManager()
		// 监听录音结束
		recorderManager.value.onStop((e)=>{
			tempFilePath.value=e.tempFilePath
		})

	})
</script>

<style scoped>
	.issuanceTrends {
		/* background-color: #ccc; */
		margin-top: 10px;
	}

	.issuanceTrends_title {
		display: flex;
		align-items: center;
		padding-left: 10px;
		font-size: 18px;
		font-weight: bold;
		border-bottom: 1px solid #ccc;
		padding-bottom: 10px;
		box-sizing: border-box;
	}

	.issuancebtn {
		color: white;
		font-size: 12px;
		background-color: red;
		border-radius: 15px;
		width: 50px;
		text-align: center;
		line-height: 25px;
		position: absolute;
		right: 10px;

	}

	.issuanceTest {
		margin-top: 10px;
		font-size: 16px;
		padding: 15px;
	}

	.changeimage {
		padding: 10px;
	}

	.iconmeau {
		display: flex;
		position: fixed;
		bottom: 0;
		border-top: 1px solid #ccc;
		width: 100%;
		height: 100rpx;
		padding: 10px;
		box-sizing: border-box;
	}

	.iconmeau>view {
		display: flex;
		align-items: center;
	}

	.iconmeau>view:nth-child(1) {}

	.iconmeau>view:nth-child(2) {
		margin-left: 20px;
	}

	.iconmeau>view:nth-child(3) {
		margin-left: 20px;
	}

	.iconmeau>view:nth-child(4) {
		margin-left: 20px;
	}

	.changepeople {
		color: #676767;
		font-size: 12px;
		border: 1px solid #676767;
		border-radius: 15px;
		padding-left: 10px;
		padding-top: 5px;
		padding-bottom: 5px;
		padding-right: 10px;
		position: absolute;
		right: 10px;
		top: 50%;
		transform: translateY(-50%);
	}

	.selectPeople {
		width: 100px;
		height: 60px;
		position: absolute;
		display: flex;
		flex-direction: column;
		bottom: 100rpx;
		border-radius: 5px;
		right: 5px;
		align-items: center;
		background-color: #f8f8f8;
		border: 1px solid #eeeeee;
		animation: selectPeoplean 1s;
	}

	.selectPeople>view {
		height: 50%;
		width: 100%;
		justify-content: space-around;
		display: flex;
		align-items: center;
		/* color: #676767; */

	}

	.selectPeople>view:nth-child(1) {
		border-bottom: 1px solid #eeeeee;

	}

	.recorderManagerpopup {
		width: 100%;
		background-color: white;
		height: 500rpx;
	}


	::v-deep .uni-easyinput__content-textarea {
		font-size: 16px;
		/* height: auto; */
	}

	::v-deep .file-picker__box-content {
		border: none !important;
	}

	::v-deep .icon-add {
		width: 0 !important;
	}

	.around {
		width: 100px;
		height: 100px;
		border-radius: 50%;
		background-color: red;
		display: flex;
		align-items: center;
		justify-content: space-around;
	}

	.around1 {
		width: 50px;
		height: 50px;
		border-radius: 50%;
		background-color: deepskyblue;
		display: flex;
		align-items: center;
		color: white;
		justify-content: space-around;
	}

	.around2 {
		width: 50px;
		height: 50px;
		border-radius: 50%;
		background-color: #b9b9b9;
		display: flex;
		align-items: center;
		color: white;
		justify-content: space-around;
	}

	.recorderManagerpopup {
		display: flex;
		border-top-left-radius: 10px;
		border-top-right-radius: 10px;

		align-items: center;
		justify-content: space-around;
	}

	.selectmusic {
		background-color: white;
		height: 66vh;
		width: 100vw;
		border-top-left-radius: 10px;
		border-top-right-radius: 10px;
		padding-top: 10px;
	}

	.select_input_view {
		width: 80%;
		height: 30px;
		border-radius: 10px;
		overflow: hidden;
		display: flex;
		border: 1px solid #ccc;
		margin: 0 auto;
		align-items: center;
	}

	.select_input_view>input {
		width: 85%;
		height: 100%;
		padding-left: 10px;
		padding-right: 10px;
		box-sizing: border-box;
	}

	.select_input_view>view {
		flex: 1;
		height: 100%;
		background-color: beige;
		border-left: 1px solid #ccc;
		display: flex;
		align-items: center;
		justify-content: center; 
	}

	.scroll-Y {
		height: 58vh;
		margin-top: 2vh;
		padding: 10px;
		box-sizing: border-box;
	}

	@keyframes selectPeoplean {
		from {
			opacity: 0;
		}

		to {
			opacity: 1;
		}
	}
	.scroll_item_item{
		display: flex;
		align-items: center;
		margin-top: 10px;

	}
	.scroll_item_item2{
		display: flex;
		align-items: center;
		margin-top: 10px;
		width: 80%;
		background-color: #efefef;
		padding: 8px;
		border-radius: 5px;
		margin: 0 auto;
	}
	.scroll_item_image{
		width: 40px;
		height: 40px;
		border-radius: 5px;
		border-radius: 5px;
		margin-right: 10px;
		
	}
	.songsname_top{
		font-size: 14px;
		font-weight: bold;
	}
	.songsname_bottom{
		font-size: 12px;
	}
	.indexsum{
		width: 10%;
		/* text-align: center; */
		justify-content: center;
		display: flex;
		align-items: center;
	}
</style>
