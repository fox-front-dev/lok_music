import http from "./http.js"
// 搜索
	let timestamp ;
const search = (data) => {
	timestamp = new Date().getTime()
	return http.get({
		url: "/search",
		data: {
			...data,
			timestamp
		}
	})
}
const logout=()=>{
	return http.get({
		url:"/logout",
		
	})
}
// 登录
const login = (data) => {
	 timestamp = new Date().getTime()
	return http.get({
		url: "/login/cellphone",
		data: {
			...data,
			timestamp
		}
	})
}
//验证码
const captcha = (data) => {
	timestamp = new Date().getTime()
	return http.get({
		url: "/captcha/sent",
		data: {
			...data,
			timestamp
		}
	})
}
//注册
const register = (data) => {
	timestamp = new Date().getTime()
	return http.get({
		url: "/register/cellphone",
		data: {
			...data,
			timestamp
		}
	})
}
// 游客 
const anonimous = () => {
	return http.get({
		url: "/register/anonimous"
	})
}
// 推荐歌单
const recommendsheet = (data) => {
	timestamp = new Date().getTime()
	return http.get({
		url: "/personalized",
		data: {
			...data,
			timestamp
		}
	})
}
// 精品歌单
const highquality=(data)=>{
	timestamp = new Date().getTime()
	return http.get({
		url:"/top/playlist/highquality",
		data:{
			...data,
			timestamp
		}
	})
}
//热门话题
const hottopic = (data) => {
	timestamp = new Date().getTime()
	return http.get({
		url: "/hot/topic",
		data: {
			...data,
			timestamp
		}
	})
}
// 电台榜单 热门
const hotdjtoplist = (data) => {
	timestamp = new Date().getTime()
	return http.get({
		url: "/dj/toplist",
		data: {
			...data,
			timestamp
		}
	})
}
// 获取推荐音乐（新音乐）
const recommendmusic = (data) => {
	timestamp = new Date().getTime()
	return http.get({
		url: "/personalized/newsong",
		data: {
			...data,
			timestamp
		}
	})
}
// 获取热门歌手
const hotartists = (data) => {
	timestamp = new Date().getTime()
	return http.get({
		url: "/top/artists",
		data: {
			...data,
			timestamp
		}
	})
}
// 搜索
const searchs = (data) => {
	timestamp = new Date().getTime()
	return http.get({
		url: "/search",
		data: {
			...data,
			timestamp
		}
	})
}
//推荐电台
const djprogram = () => {
	return http.get({
		url: "/personalized/djprogram"
	})
}
// 热门电台
const hotdj = (data) => {
	timestamp = new Date().getTime()
	return http.get({
		url: "/dj/hot",
		data: {
			...data,
			timestamp
		}
	})
}
// 获取二维码登录第一次key

const getqrkey = (data) => {
	timestamp = new Date().getTime()
	return http.get({
		url: "/login/qr/key",
		data: {
			...data,
			timestamp
		}
	})
}
// 获取二维码登录第二次 base64图片
const getqrbase64 = (data) => {
	timestamp = new Date().getTime()
	return http.get({
		url: "/login/qr/create",
		data: {
			...data,
			timestamp
		}
	})
}
//第三次，获取二维码状态 状态
const getqrstatus = (data) => {
	
	 timestamp = new Date().getTime()
	return http.get({
		url: "/login/qr/check",
		data: {
			...data,
			timestamp
		}
	})
}
// 获取用户信息
const getuserInfo = () => {
	return http.get({
		url: "/user/account"
	})
}
// 判断当前登录状态
const loginstatus = () => {
	return http.get({
		url: "/login/status"
	})
}
// 获取用户内（朋友）所有动态
const getuserallevent = (data) => {
	timestamp = new Date().getTime()
	return http.get({
		url: "/event",
		data: {
			...data,
			timestamp
		}
	})
}
// 获取音乐详情
const getsongsInfo = (data) => {
	timestamp = new Date().getTime()
	return http.get({
		url: "/song/detail",
		data: {
			...data,
			timestamp
		}
	})
}
// 每日推荐
const dailyrecommend = (data) => {
	timestamp = new Date().getTime()
	return http.get({
		url: "/recommend/resource",
		data: {
			...data,
			timestamp
		}
	})
}
// 每日推荐歌曲
const dailyrecommendsongs = (data) => {
	timestamp = new Date().getTime()
	return http.get({
		url: "/recommend/songs",
		data: {
			...data,
			timestamp
		}
	})
}
// 获取用户歌单
const userplaylist = (data) => {
	timestamp = new Date().getTime()
	return http.get({
		url: "/user/playlist",
		data: {
			...data,
			timestamp
		}
	})
}
// 获取已收藏的专辑
const sublistalbum = (data) => {
	timestamp = new Date().getTime()
	return http.get({
		url: "/album/sublist",
		data: {
			...data,
			timestamp
		}
	})
}
// 喜欢音乐列表
const lovesongslist=(data)=>{
	timestamp = new Date().getTime()
	return http.get({
		url:"/likelist",
		data:{
			...data,
			timestamp
		}
	})
}
// h获取歌单所有音乐
const getsheetallsongs=(data)=>{
	timestamp = new Date().getTime()
	return http.get({
		url:"/playlist/track/all",
		data:{
			timestamp,
			...data
		}
	})
}
// 获取歌单详情
const songsheepsInfo=(data)=>{
	timestamp = new Date().getTime()
	return http.get({
		url:"/playlist/detail",
		data:{
			timestamp,
			...data
		}
	})
}
// 获取动态评论
const getcommentevent=(data)=>{
	timestamp = new Date().getTime()
	return http.get({
		url:"/comment/event",
		data:{
			timestamp,
			...data
		}
	})
}
// 分享动态
const shareevent=(data)=>{
	timestamp = new Date().getTime()
	return http.get({
		url:"/share/resource",
		data:{
			timestamp,
			...data
		}
	})
}
// 最近播放音乐
const lastplaysong=(data)=>{
	timestamp = new Date().getTime()
	return http.get({
		url:"/record/recent/song",
		data:{
			timestamp,
			...data
		}
	})
}
// 检测昵称
const checknickname=(data)=>{
	timestamp = new Date().getTime()
	return http.get({
		url:"/nickname/check",
		data:{
			timestamp,
			...data
		}
	})
}
// 所有榜单
const allToplist=()=>{
	timestamp = new Date().getTime()
	return http.get({
		url:"/toplist"
	})
}
// 歌手榜
const toplistartist=()=>{
	return http.get({
		url:"/toplist/artist"
	})
}
// 新建歌单
const createplaylist=(data)=>{
	timestamp = new Date().getTime()
	return http.get({
		url:"/playlist/create",
		data:{
			timestamp,
			...data
		}
	})
}
// 获取音乐url
const getsongsurl=(data)=>{
	timestamp = new Date().getTime()
	return http.get({
		url:"/song/url",
		data:{
			timestamp,
			...data
		}
	})
}
// banner
const banner=()=>{
	return http.get({
		url:"/banner?type=2"
	})
}

export default {
	search,
	login,
	captcha,
	register,
	anonimous,
	recommendsheet,
	hottopic,
	hotdjtoplist,
	recommendmusic,
	hotartists,
	searchs,
	djprogram,
	hotdj,
	getqrkey,
	getqrbase64,
	getqrstatus,
	getuserInfo,
	loginstatus,
	getuserallevent,
	getsongsInfo,
	dailyrecommend,
	dailyrecommendsongs,
	userplaylist,
	sublistalbum,
	lovesongslist,
	getsheetallsongs,
	songsheepsInfo,
	getcommentevent,
	shareevent,
	lastplaysong,
	checknickname,
	logout,allToplist,toplistartist,highquality,createplaylist,getsongsurl,banner,
	
}
