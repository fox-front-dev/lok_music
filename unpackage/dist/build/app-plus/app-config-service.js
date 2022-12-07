
  ;(function(){
  let u=void 0,isReady=false,onReadyCallbacks=[],isServiceReady=false,onServiceReadyCallbacks=[];
  const __uniConfig = {"pages":[],"globalStyle":{"backgroundColor":"#ffffff","bounce":"none","navigationBar":{"backgroundColor":"#ffffff","titleText":"uni-app","type":"default","titleColor":"#000000"},"isNVue":false},"nvue":{"compiler":"uni-app","styleCompiler":"uni-app","flex-direction":"column"},"renderer":"auto","appname":"lok音乐","splashscreen":{"alwaysShowBeforeRender":true,"autoclose":true},"compilerVersion":"3.6.5","entryPagePath":"pages/mainEntrance/mainEntrance","entryPageQuery":"","realEntryPagePath":"","networkTimeout":{"request":60000,"connectSocket":60000,"uploadFile":60000,"downloadFile":60000},"locales":{}};
  const __uniRoutes = [{"path":"pages/mainEntrance/mainEntrance","meta":{"isQuit":true,"isEntry":true,"enablePullDownRefresh":false,"navigationBar":{"titleText":"mainEntrance","style":"custom","type":"default"},"isNVue":false}},{"path":"pages/trending/charts/charts","meta":{"enablePullDownRefresh":false,"backgroundColor":"#ffffff","navigationBar":{"backgroundColor":"#ffffff","titleText":"","style":"custom","type":"default"},"isNVue":false}},{"path":"pages/login/login/login","meta":{"enablePullDownRefresh":false,"navigationBar":{"titleText":"login","style":"custom","type":"default"},"isNVue":false}},{"path":"pages/login/register/register","meta":{"enablePullDownRefresh":false,"navigationBar":{"titleText":"register","style":"custom","type":"default"},"isNVue":false}},{"path":"pages/home/playlists/playlists","meta":{"enablePullDownRefresh":false,"backgroundColor":"#ffffff","navigationBar":{"backgroundColor":"#ffffff","titleText":"","style":"custom","type":"default","titleColor":"#000000"},"isNVue":false}},{"path":"pages/home/albums/albums","meta":{"enablePullDownRefresh":false,"backgroundColor":"#ffffff","navigationBar":{"backgroundColor":"#ffffff","titleText":"","style":"custom","type":"default","titleColor":"#000000"},"isNVue":false}},{"path":"pages/home/songs/songs","meta":{"enablePullDownRefresh":false,"backgroundColor":"#ffffff","scrollIndicator":"none","navigationBar":{"backgroundColor":"#ffffff","titleText":"音乐","style":"custom","type":"float","bounce":"none","background":"#ffffff","titleColor":"#000000"},"isNVue":false}},{"path":"pages/home/artists/artists","meta":{"enablePullDownRefresh":false,"backgroundColor":"#ffffff","scrollIndicator":"none","navigationBar":{"backgroundColor":"#ffffff","titleText":"歌手","type":"default","titleColor":"#000000"},"isNVue":false}},{"path":"pages/home/dailyrecommendations/dailyrecommendations","meta":{"enablePullDownRefresh":false,"navigationBar":{"titleText":"dailyrecommendations","style":"custom","type":"default"},"isNVue":false}},{"path":"pages/home/issuanceTrends/issuanceTrends","meta":{"enablePullDownRefresh":false,"navigationBar":{"titleText":"issuanceTrends","style":"custom","type":"default"},"isNVue":false}},{"path":"pages/home/event/event","meta":{"enablePullDownRefresh":false,"navigationBar":{"titleText":"event","style":"custom","type":"default"},"isNVue":false}},{"path":"pages/login/scan/scan","meta":{"enablePullDownRefresh":false,"navigationBar":{"titleText":"扫码登录","type":"default"},"isNVue":false}},{"path":"pages/detailedInformation/detailedInformation","meta":{"enablePullDownRefresh":false,"navigationBar":{"titleText":"detailedInformation","style":"custom","type":"default"},"isNVue":false}}].map(uniRoute=>(uniRoute.meta.route=uniRoute.path,__uniConfig.pages.push(uniRoute.path),uniRoute.path='/'+uniRoute.path,uniRoute));
  __uniConfig.styles=[];//styles
  __uniConfig.onReady=function(callback){if(__uniConfig.ready){callback()}else{onReadyCallbacks.push(callback)}};Object.defineProperty(__uniConfig,"ready",{get:function(){return isReady},set:function(val){isReady=val;if(!isReady){return}const callbacks=onReadyCallbacks.slice(0);onReadyCallbacks.length=0;callbacks.forEach(function(callback){callback()})}});
  __uniConfig.onServiceReady=function(callback){if(__uniConfig.serviceReady){callback()}else{onServiceReadyCallbacks.push(callback)}};Object.defineProperty(__uniConfig,"serviceReady",{get:function(){return isServiceReady},set:function(val){isServiceReady=val;if(!isServiceReady){return}const callbacks=onServiceReadyCallbacks.slice(0);onServiceReadyCallbacks.length=0;callbacks.forEach(function(callback){callback()})}});
  service.register("uni-app-config",{create(a,b,c){if(!__uniConfig.viewport){var d=b.weex.config.env.scale,e=b.weex.config.env.deviceWidth,f=Math.ceil(e/d);Object.assign(__uniConfig,{viewport:f,defaultFontSize:16})}return{instance:{__uniConfig:__uniConfig,__uniRoutes:__uniRoutes,global:u,window:u,document:u,frames:u,self:u,location:u,navigator:u,localStorage:u,history:u,Caches:u,screen:u,alert:u,confirm:u,prompt:u,fetch:u,XMLHttpRequest:u,WebSocket:u,webkit:u,print:u}}}}); 
  })();
  