<script>
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
	/*每个页面公共css */
	/* @font-face{
		font-family: "pf";
		src: url("./static/font/pf.ttf");
	}
	*{
		font-family: "pf";
	} */
</style>
