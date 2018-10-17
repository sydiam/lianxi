<template>
   <div class="app">
     <!--第一部分图片轮播图  默认高度为0-->
     <mt-swipe :auto="4000">
      <mt-swipe-item v-for="item in list">
         <img :src="item" />
      </mt-swipe-item>
     </mt-swipe>
     <!--第二部分六宫格-->
        <ul class="mui-table-view mui-grid-view mui-grid-9">
		            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
		                    <span class="mui-icon mui-icon-home"></span>
		                    <div class="mui-media-body">Home</div></a></li>
		            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
		                    <span class="mui-icon mui-icon-email"><span class="mui-badge">5</span></span>
		                    <div class="mui-media-body">Email</div></a></li>
		            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
		                    <span class="mui-icon mui-icon-chatbubble"></span>
		                    <div class="mui-media-body">Chat</div></a></li>
		            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
		                    <span class="mui-icon mui-icon-location"></span>
		                    <div class="mui-media-body">location</div></a></li>
		            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
		                    <span class="mui-icon mui-icon-search"></span>
		                    <div class="mui-media-body">Search</div></a></li>
		            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
		                    <span class="mui-icon mui-icon-phone"></span>
		                    <div class="mui-media-body">Phone</div></a></li>
		            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
		                    <span class="mui-icon mui-icon-gear"></span>
		                    <div class="mui-media-body">Setting</div></a></li>
		            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
		                    <span class="mui-icon mui-icon-info"></span>
		                    <div class="mui-media-body">about</div></a></li>
		           <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
		                    <span class="mui-icon mui-icon-more"></span>
		                    <div class="mui-media-body">more</div></a></li>
		        </ul> 
   </div>
</template>
<script>
  export default {
    data(){
      return {
        list:[
          "http://127.0.0.1:3000/img/index/banner1.png",
          "http://127.0.0.1:3000/img/index/banner2.png",
          "http://127.0.0.1:3000/img/index/banner3.png",
          "http://127.0.0.1:3000/img/index/banner4.png"]
      }
    },
    created(){
      this.getImageList();
    },
    methods:{
      //1:HomeContainer.vue 发送ajax请求
      //  获取图片列表
      //选项一:axios         新解决方案(开始使用)
      //选项二:vue-resource  旧(公司大量在使用)
      getImageList(){
         this.$http.get("http://127.0.0.1:3000/imagelist/list").then(result=>{
             console.log(result)
         });
      }
    }
  }
</script>
<style>
 /*父元素高度为0 设置高度为 200px*/ 
 .app .mint-swipe{
   height:200px;
   background:#fff;
 }
 /*修改图片轮播中图片样式 自适应宽度 */
 .app .mint-swipe img{
   width:100%;
   height:100%;
 }
</style>