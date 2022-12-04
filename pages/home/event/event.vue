<template>
	<view class="event"  :class="store.state.css_style?'gray_filter':''" :style="{paddingTop:statusBarHeight+'px'}">
		<view class="goback">
			<uni-icons @click="gobacks" type="back" size="20"></uni-icons>
			动态
		</view>
		<view class="event_title">
			<image class="event_title_avart" :src="data.user.avatarUrl" mode=""></image>
			<view class="event_title_title">
				{{data.user.nickname}}
				<view class="event_title_time">
					{{data.showTime2}}
				</view>
			</view>
			<view class="event_title_Focus">
				<uni-icons color="red" type="plusempty" size="16"></uni-icons>
				关注
			</view>
		</view>
		<view class="event_content">
			{{data.msg2}}
		</view>
		<view class="event_a" v-show="false">
			<uni-icons color="#115ab3" type="paperclip" size="16"></uni-icons>
			网页链接
		</view>
		<view class="event_a" v-show="false">
			#
			黑胶聊天室
		</view>
		<view class="event_image">
			<image v-for="i in data.pics" class="event_image_image" :src="i.originUrl" mode="aspectFill"></image>
		</view>
		<view class="event_music" v-if="data.song2">
			<image class="event_music_image" :src="data.song2.img80x80" mode=""></image>
			<view class="event_music_content">
				<view>
					{{data.song2.name}}
				</view>
				<view>
					{{data.song2.artists[0].name}}
				</view>
			</view>
		</view>
		<view class="event_iconmeau">
			<view class="">
				评论<text>96</text>
			</view>
			<view class="">
				转发<text>96</text>
			</view>
			<view class="">
				赞<text>96</text>
			</view>
		</view>
		<view  class="event_iconmeau_content">
			<view v-if="tabsStatus==1" class="event_iconmeau_first">
				<view class="event_iconmeau_first_title">
					精彩评论
				</view>
				<view class="event_item" @click="gotoPage(6)" v-for="item,index in commenteventlist2">
					<view class="event_item_title">
						<image class="event_item_title_avart" :src="item.user.avatarUrl" mode=""></image>
						<view class="event_item-name">
							<view class="event_item-name-title">
								{{item.user.nickname}}
							</view>
							<view class="event_item-name-time">
								{{item.timeStr}}
							</view>
							
						</view>
						<view class="zan">
							{{item.likedCount}}
							<uni-icons v-if="false" type="hand-up-filled" size="20"></uni-icons>
							<uni-icons type="hand-up" size="20"></uni-icons>
						</view>
					</view>
					<view class="event_item_content">
						{{item.content}}
					
					</view>
					<view class="showmoretext">
						{{item.commentobj.length}}条回复<uni-icons type="forward" size="12"></uni-icons>
					</view>
				</view>
			</view>
			<view v-else-if="tabsStatus==2" class="event_iconmeau_first">
				345
			</view>
			<view v-else class="event_iconmeau_first">
				678
			</view>
		</view>
	</view>
</template>

<script setup>
	import {
		onLoad,
		onShow
	} from "@dcloudio/uni-app";
	import{ref} from "vue"
	import store from "../../../store/index.js"
	import axios from "../../../http/req.js"
	let statusBarHeight = ref()
	// 自定义返回键
	const gobacks = () => {
		uni.navigateBack(-1)
	}
	let tabsStatus=ref(1)
	let data=ref({artists:[""]})
	
	onLoad((option) => {
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
		data.value=JSON.parse(option.event)
		getcommentevent()
	})
	// 动态消息
	let  commenteventlist=ref([])
	let commenteventlist2=ref([])
	const getcommentevent=()=>{
		axios.getcommentevent({threadId:data.value.xInfo.info.threadId}).then(res=>{
			commenteventlist.value=res.data.hotComments
		
		let commenteventlist_firstfitler=[]
		let commenteventlist_secondfitler=[]
		commenteventlist.value.forEach((item,index)=>{
			if(!item.beReplied.length){
				item.commentobj=[]
				commenteventlist_firstfitler.push(item)
			}else{
				commenteventlist_secondfitler.push(item)
			}

		})
	
		commenteventlist_firstfitler.forEach((item1,index1)=>{
			commenteventlist_secondfitler.forEach((item2,index2)=>{
				if(item1.commentId==item2.parentCommentId){
					item1.commentobj.push(item2)
				}else{

					item1.commentobj=[]
				}
			})
		})
		commenteventlist2.value=commenteventlist_firstfitler
		}).catch(err=>{
			setTimeout(()=>{
				getcommentevent()
			},1000)
		})
	}
</script>

<style scoped>
	.event {
		padding: 15px;
		min-height: 100vh;
		box-sizing:border-box;
		/* background-color: #F3F9FF; */
	}

	.goback {
		display: flex;
		align-items: center;
		margin-top: 10px;
		font-size: 18px;
	}

	.event_title {
		display: flex;
		margin-top: 20px;
		align-items: center;
		position: relative;
	}

	.event_title_avart {
		width: 40px;
		height: 40px;
		border-radius: 50%;
	}

	.event_title_time {
		color: #b0b0b0;
		font-size: 12px;
	}

	.event_title_title {
		margin-left: 10px;
		font-size: 14px;
		font-weight: bold;
	}

	.event_title_Focus {
		position: absolute;
		right: 10px;
		font-size: 12px;
		display: flex;
		align-items: center;
		border: 1px solid red;
		padding: 3px 10px;
		color: red;
		border-radius: 20px;
	}

	.event_content {
		font-size: 14px;
		color: black;
		margin-top: 20px;
	}

	.event_image {
		display: flex;
		flex-wrap: wrap;
		margin:  10px auto;
		/* justify-content: space-between; */
	}

	.event_image_image {
		width: 32%;
		height: 100px;
		margin-top: 5px;
		margin-left: 5px;
	}

	.event_a {
		color: #115ab3;
		margin-top: 10px;
	}

	.event_music {
		background-color: #e4e4e4;
		margin-top: 10px;
		border-radius: 10px;
		height: 60px;
		display: flex;
		align-items: center;
	}

	.event_music_image {
		width: 80rpx;
		height: 80rpx;
		border-radius: 10px;
		margin-left: 10px;

	}

	.event_music_content>view {
		margin-left: 10px;
	}

	.event_music_content>view:nth-child(1) {
		font-size: 14px;
	}

	.event_music_content>view:nth-child(2) {
		font-size: 12px;
		color: #6c6b6c;
	}
	.event_iconmeau_content{
		margin-top: 10px;
	}
	.event_iconmeau{
		display: flex;
		border-bottom: 1px solid #e3e3e3;
		padding-bottom: 5px;
		margin-left: -15px;
		margin-right: -15px;
		padding-left: 15px;
	}
	.event_iconmeau>view{
		margin-top: 10px;
		color: #383839;
	}
	.event_iconmeau>view>text{
		font-size: 12px;
		margin-left: 5px;
		color: #515051;
	}
	.event_iconmeau>view:nth-child(1){
		
	}.event_iconmeau>view:nth-child(2){
		margin-left: 30px;
	}.event_iconmeau>view:nth-child(3){
		margin-left: 30px;
	}
	.event_iconmeau_first_title{
		font-weight: bold;
		font-size: 14px;
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
		border-radius: 5px;
	}
	
	.event_item-name {
		/* margin-left: 10px; */
		position: absolute;
		left: 50px;
	}
	.zan{
		position: absolute;
		right: 20px;
		font-size: 12px;
		color: #545454;
		display: flex;
		align-items: center;	
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
	.showmoretext{
		margin-left: 50px;
		margin-top: 5px;
		font-size: 12px;
		color: #115ab3;
	}
	
	
</style>
