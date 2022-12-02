<template>
	<view class="calendar">
		<view class="date">
			<text @click="opencalendar">{{timer.year}}-{{timer.month+1}}</text>
			<view style="display: flex;" >
				<view style="background-color: red;" @click="gobackMonth" >
					left
				</view>
				<view style="background-color: green;"  @click="nextMonth">
					right
				</view>
			</view>
		</view>
		<view class="week">
			<view class="week_item" v-for="item,index in week" >
				{{item}}
			</view>
		</view>
		
		<view class="week_date" :class="[allState?'openAllCalendar':'']">
			<view  v-for="item,index in dateList"  :class="[item==timer.date?'blueborder':'',selectTimer==item?'selecttimerbackground':'']" @click="gettimer(item)">
				<view class="">
					{{item}}
				</view>
			</view>
		</view>
		<view class="week_date2">
			<view v-for="item,index in weekDate">
				<view class="">
					{{item}}
				</view>
			</view>
		</view>
	</view>
</template>

<script setup>
	import {
		ref,
		getCurrentInstance,
		onMounted
	} from "vue"
	let week = ["天", "一", "二", "三", "四", "五", "六"]
	// 日期存放的list
	let dateList=ref([])
	//刚进入页面s显示的日期集合
	let weekDate=ref([])
	// 全部日历的状态
	let allState=ref(false)
	//
	let timer = ref({
		// 年
		year: 0,
		// 月
		month: 0,
		// 星期几
		day: 0,
		// 号
		date:0,
		// 本月第一天
		monthStartdate:0,
		// 每月多少天
		monthenddate:0
	})
		//选择的日期
	let selectTimer=ref()
	onMounted(() => {
		let date = new Date()
		getTimer(date)
		getfirstdate()
	})
	//获取日期
	const getTimer = (date) => {
		dateList.value=[]
		timer.value.year=date.getFullYear()
		timer.value.month=date.getMonth()
		timer.value.day=date.getDay()
		selectTimer.value=timer.value.date=date.getDate()
		timer.value.monthenddate=new Date(timer.value.year,timer.value.month+1,0).getDate()
		getmonthStartdate()
	}
	
	//获取改该月第一天是星期几
	const getmonthStartdate=()=>{
		let date=new Date(timer.value.year,timer.value.month,1)
		timer.value.monthStartdate=date.getDay()
		// console.log(timer.value.monthStartdate);
		for(let i=1;i<=timer.value.monthStartdate;i++){
			dateList.value.push(" ")
		}
		for(let i=1 ;i<=timer.value.monthenddate;i++){
			dateList.value.push(i)
		}
	}
	//显示上月的日期
	const gobackMonth=()=>{
		if(timer.value.month<=0){
			timer.value.month=11
			timer.value.year--
		}else{
			timer.value.month--
		}
		let date=new Date(timer.value.year,timer.value.month)
		getTimer(date)
	}
	//显示下一个月的日期
	const nextMonth=()=>{
		if(timer.value.month>11){
			timer.value.month=0
			timer.value.year++
		}else{
			timer.value.month++
		}
		let date=new Date(timer.value.year,timer.value.month)
		getTimer(date)
	}
	//选择日期
	const gettimer=(item)=>{
		selectTimer.value=item
		// console.log(timer.value.year);
		// console.log(timer.value.month);
		// console.log(item);
	}
	//获取进入页面的时候显示的日期
	const getfirstdate=()=>{
		for(let i=0;i<=timer.value.day;i++){
			if(timer.value.date-i<=0) {
				weekDate.value.push(" ")
				continue
			}
			weekDate.value.push(timer.value.date-i)
		}
		for(let i=1;i<7-timer.value.day;i++){
			weekDate.value.push(timer.value.date+i)
		}
		weekDate.value.sort()
	}
	//打开全部日历
	const opencalendar=()=>{
		allState.value=!allState.value
	}
</script>

<style scoped>
	.calendar {
		
	}
	.week {
		display: flex;
		justify-content: space-around;
		margin-top: 30rpx;
		margin-bottom: 30rpx;
	}
	.date{
		display: flex;
		justify-content: space-between;
	}

	.week_item {
		flex: 1;
		text-align: center;
	}
	.week_date{
		display: flex;
		flex-wrap: wrap;
		height: 0;
		overflow: hidden;
		position: absolute;
		background-color: #5C83FC;
	}
	.week_date>view{
		width: calc((100%)/7);
		height: 100rpx;
		line-height: 100rpx;
		text-align: center;
		box-sizing: border-box;
		/* margin: 10rpx; */
		
	}
	.blueborder{
		background: #FFFFFF;
		box-shadow: 0px 2px 4px 0px rgba(92,131,252,0.09);
		border-radius: 14px;
		border: 1px solid #5C83FC;
	}
	.selecttimerbackground{
		background: #5C83FC;
		box-shadow: 0px 2px 4px 0px rgba(92,131,252,0.12);
		border-radius: 14px;
		color: white;
	}
	.week_date2{
		display: flex;
		flex-wrap: wrap;
	}
	.week_date2>view{
		width: calc(100%/7);
		text-align: center;
	}
	
	.openAllCalendar{
		z-index: 90;
		animation: openAllCalendar 1s;
		animation-fill-mode:forwards;
	}
	
	@keyframes openAllCalendar{
		from{
			height: 0;

		}to{
			height:700rpx;

		}
	}
	
	
</style>
