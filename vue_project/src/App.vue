<template>
  <div class="app-container">
       <!--1：顶部固定导航栏 -->
       <mt-header fixed title="学子商城"></mt-header>
       <!--2: 多个组件切换  router-view -->
			 <router-view></router-view>
       <!--3: tabbar 固定在底端导航条-->
     <nav class="mui-bar mui-bar-tab">
			<router-link class="mui-tab-item mui-active" to="/home">
				<span class="mui-icon mui-icon-home"></span>
				<span class="mui-tab-label">首页</span>
			</router-link>
			<a class="mui-tab-item" href="#tabbar-with-chat">
				<span class="mui-icon mui-icon-contact">
        </span>
				<span class="mui-tab-label">会员</span>
			</a>
			<a class="mui-tab-item" href="#tabbar-with-contact">
				<span class="mui-icon mui-icon-extra mui-icon-extra-cart">
          <span class="mui-badge">0</span>
        </span>
				<span class="mui-tab-label">购物车</span>
			</a>
			<a class="mui-tab-item" href="#tabbar-with-map">
				<span class="mui-icon mui-icon-search"></span>
				<span class="mui-tab-label">搜索</span>
			</a>
		</nav>

        
  </div>
</template>
<style>
 /* mt-header 固定顶部布局显示组件 */
 /* tabbar    固定底部布局显示组件 */
 .app-container{
	 padding-top:40px;
	 padding-bottom:50px;
 }
</style>
