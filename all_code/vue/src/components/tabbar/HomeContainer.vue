<template>
   <div class="app">
     <!--第一部分图片轮播图  默认高度为0-->
     <mt-swipe :auto="4000">
      <mt-swipe-item v-for="item in list">
         <img :src="item.img_url" />
      </mt-swipe-item>
     </mt-swipe>
     <!--第二部分六宫格-->
        <ul class="mui-table-view mui-grid-view mui-grid-9">
		            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
                <router-link to="/home/newslist">
		                    <img src="../../img/menu1.png" />
		                    <div class="mui-media-body">新闻资讯</div>
                </router-link>
                </li>
		            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
		                    <img src="../../img/menu2.png" />
		                    <div class="mui-media-body">图片分享</div></a></li>
		            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
		                    <img src="../../img/menu3.png" />
		                    <div class="mui-media-body">商品购买</div></a></li>
		            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
		                    <img src="../../img/menu4.png" />
		                    <div class="mui-media-body">发表评论</div></a></li>
		            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
		                    <img src="../../img/menu5.png" />
		                    <div class="mui-media-body">联系我们</div></a></li>
		            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
		                    <img src="../../img/menu6.png" />
		                    <div class="mui-media-body">自己开店</div></a></li>
		        </ul> 
   </div>
</template>
<script>
  //1:加载Toast组件
  import {Toast} from "mint-ui";
  //2:创建vue实例
  export default { 
    data(){
      return {
        list:[]
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
          var obj = result.body;
          if(obj.code == 1){    //返回成功数据
          //将返回数据保存list
          this.list = obj.msg;
          }else{   //返回失败数据
             //测试   this.$toast("数据加载失败")
             Toast("数据加载失败"); //脚手架 
          }
        }) 
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
 /*修改六宫格样式 背景颜色 图片大小 边框*/
 .app .mui-grid-view.mui-grid-9{
   background-color:#fff;
 }
 /*修改六宫格样式边框 */
 .app .mui-grid-view.mui-grid-9 .mui-table-view-cell{
   border:0;
 }
 /*图片大小 */
 .app .mui-grid-view.mui-grid-9 img{
    width:60px;
    height:60px;
 }



</style>