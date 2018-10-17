//main.js  加载所有资源(组件;js/css/..)创建vue实例对象
import Vue from 'vue'
import App from './App.vue'
//1:加载路由模块
import router from './router'
//1.1:加载模块 VueResource(发送ajax请求)
import VueResource from 'vue-resource'
//1.2:将VueResource 注册vue
Vue.use(VueResource);
//1.3:将Mintui加载项目
//1.4:按需引入组件Header 顶部固定导航栏
//    按需引入组件Swipe,SwipeItem  图片轮播
import {Header,Swipe,SwipeItem} from "mint-ui"
//1.5:注册组件
Vue.component(Header.name,Header)     //注册Header
Vue.component(Swipe.name,Swipe)       //注册Swipe
Vue.component(SwipeItem.name,SwipeItem)//注册SwipeItem
//1.6:引入mui css
import "./lib/mui/css/mui.css"
import "./lib/mui/css/icons-extra.css"
//1.7:引入mint-ui 组件所需样式文件
//默认查找文件路径
//node_modules/mint-ui/lib/style.css
import "mint-ui/lib/style.css"





//2:是否是生产模式 false
Vue.config.productionTip = false

//3:创建vue实现对象挂载 public/index.html#app
new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
