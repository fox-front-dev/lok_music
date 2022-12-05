<script>
	import "@/static/font/font_iss/iconfont.css";
	export default {
		data() {
			return {
				pausePlay: null,
				channelId: 'Ba-KeepAlive',
				channelName: "Ba-KeepAlive",
				title: "lok音乐",
				content: "lok音乐正在运行",
				dataResult: "",
				type: undefined,
				keepAlive: null
			}
		},
		methods: {
			register() { //注册
				this.keepAlive.register({
						channelId: this.channelId,
						channelName: this.channelName,
						title: this.title,
						content: this.content,
						backgroundMusicEnabled: true,
						musicInterval: 2
					},
					(res) => {});
			},
			isRunning() { //是否正在运行
				this.keepAlive.isRunning((res) => {
					if (!res.isRunning) {
						this.register()
						this.restart()
					}
				});
			},
			restart() { //重启
				this.keepAlive.restart((res) => {
					//console.log(res);
				});
			},
			unregister() { //注销
				this.keepAlive.unregister((res) => {
					//console.log(res);

				});
			},
			whiteList() { //获取并打开白名单
				this.keepAlive.whiteList({
					isDialog: true,
					reason: "轨迹服务",
					whiteType: 0,
				}, (res) => {
					// console.log(res);

				});
			},
			openWhiteList() { //打开白名单
				try {
					var list = JSON.parse(this.dataResult);
					this.keepAlive.openWhiteList({
						isDialog: true,
						reason: "轨迹服务",
						type: list[0].type,
					}, (res) => {
						// console.log(res);
					});
				} catch (e) {
					// uni.showToast({
					// 	title: "请先获取有效的白名单项",
					// 	icon: "none",
					// 	duration: 3000
					// })
				}
			},
			getWhiteList() { //获取白名单项
				this.keepAlive.getWhiteList({
					whiteType: 0,
				}, (res) => {
					this.dataResult = res.data ? JSON.stringify(res.data) : "";
					//console.log(this.dataResult);
				});
			},
		},
		onLaunch: function() {
			// app打包取消注释
			// return
			this.keepAlive = uni.requireNativePlugin('Ba-KeepAlive')
			this.$store.state.musicPlay.player.onEnded(() => {
				this.$store.commit("next")
			})

			this.$store.state.musicPlay.player.onError(() => {
				this.$store.commit("next")
			})
			this.$store.state.musicPlay.player.onPlay(() => {
				this.isRunning()
			})
		},
		onShow: function() {
			//console.log("onShow");
		},
		onHide: function() {}
	}
</script>

<style>
	@import "@/static/font/font_iss/iconfont.css";
	.gray_filter{
		filter: grayscale(85%) saturate(80%);
	}
	/* 
		加载动画公公样式
	 */
	.loader {
	  width: 48px;
	  height: 48px;
	  margin: auto;
	  position: relative;
	}
	
	.loader:before {
	  content: '';
	  width: 48px;
	  height: 5px;
	  background: #90f910;
	  position: absolute;
	  top: 60px;
	  left: 0;
	  border-radius: 50%;
	  animation: shadow324 0.5s linear infinite;
	}
	
	.loader:after {
	  content: '';
	  width: 100%;
	  height: 100%;
	  background: #6cf913;
	  position: absolute;
	  top: 0;
	  left: 0;
	  border-radius: 4px;
	  animation: jump7456 0.5s linear infinite;
	}
	
	@keyframes jump7456 {
	  15% {
	    border-bottom-right-radius: 3px;
	  }
	
	  25% {
	    transform: translateY(9px) rotate(22.5deg);
	  }
	
	  50% {
	    transform: translateY(18px) scale(1, .9) rotate(45deg);
	    border-bottom-right-radius: 40px;
	  }
	
	  75% {
	    transform: translateY(9px) rotate(67.5deg);
	  }
	
	  100% {
	    transform: translateY(0) rotate(90deg);
	  }
	}
	
	@keyframes shadow324 {
	
	  0%,
	    100% {
	    transform: scale(1, 1);
	  }
	
	  50% {
	    transform: scale(1.2, 1);
	  }
	}
</style>
