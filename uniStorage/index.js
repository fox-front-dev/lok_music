// 存储数据
const setStorage=(key,data)=>{
	uni.setStorage({
		key,
		data:JSON.stringify(data),
		success(val) {
			// console.log(val);
			// console.log("val");
		},fail() {
			// console.log(123);
		}
	})
}
// 获取数据
const getStorage=(key)=>{
	const data=uni.getStorageSync(key)
	if(data){
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