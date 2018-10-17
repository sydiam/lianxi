//router.js 加载所有组件并且指定访问路径

import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import About from './views/About.vue'
//1.1:加载Home组件
import HomeContainer from "./components/tabbar/HomeContainer.vue"
//1.2:加载MemberContainer组件
import MemberContainer from "./components/tabbar/MemberContainer.vue";
//1.3加载ShopContainer组件
import ShopContainer from "./components/tabbar/ShopContainer.vue"
//1.4加载SearchContainer组件
import SearchContainer from "./components/tabbar/SearchContainer.vue"
//1.5加载NewsList.vue组件
import NewsList from "./components/news/NewsList.vue"

Vue.use(Router)
export default new Router({
  routes: [
      //path      组件访问路径
      //compoent  组件
      //redirect  重定向-->自动跳转
      //如果访问 /home a <router-link to="/home">..
      //如果访问 /   自动将请求路径改 /home
      {path:"/",redirect:"/home"},
      {path:"/home",component: HomeContainer},
      {path:"/member",component:MemberContainer},
      {path:"/cart",component:ShopContainer},
      {path:"/search",component:SearchContainer},  
      {path:"/home/newslist",component:NewsList},     
  ]
})
