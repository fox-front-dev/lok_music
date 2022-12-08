// 存储数据
const setStorage=(key,data)=>{
	uni.setStorage({
		key,
		data:JSON.stringify(data),
		success(val) {
			
		},fail() {
			
		}
	})
}
// 获取数据
const getStorage=(key)=>{
	const data=uni.getStorageSync(key)
	if(data){
		// console.log(JSON.parse(data));
		return JSON.parse(data)
	}else{
		return ""
	}
	
}
//删除数据
const removeStorage=(key)=>{
	uni.removeStorageSync(key)
}
//清空数据
const clearStorage=()=>{
	uni.clearStorage()
}
export default{
	setStorage,
	getStorage,
	removeStorage,
	clearStorage
}