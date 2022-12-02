import unistorage from "../uniStorage/index.js"
let baseUrl = "http://81.68.206.160:3000"
export default {
	get(opt) {
		return new Promise((resolve, reject) => {
			uni.request({
				data:opt.data||{},
				url: baseUrl +opt.url,
				method:opt.methods||"GET",
				header: {
					"content-type": " application/json; charset=utf-8",
					//设置用户访问的token信息
					"Authorization":unistorage.getStorage('token')
				},
				success: (data) => {
					resolve(data)
				},
				fail:(err) => {
					reject(err)
				}
			})
		})
	},
	post(opt) {
		return new Promise((resolve, reject) => {
			uni.request({
				data:opt.data,
				url: baseUrl +opt.url,
				method: opt.method||"POST",
				header: {
					"content-type": " application/json; charset=utf-8",
					//设置用户访问的token信息
					Authorization:uni.getStorageSync('token')
				},
				success: (data) => {
					resolve(data)
				},
				fail: (err) => {
					reject(err)
				}
			})
		})

	}
}
