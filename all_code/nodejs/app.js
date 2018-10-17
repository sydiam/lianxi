//app.js
//1:引相应模块 express 
const express = require("express");

//1.1: 加载路由模块 路由= 请求方式 请求地址 处理函数
//                     app.get("/list",(req,res)=>{})
const routerImage = require("./router/imagelist");
const routerNews = require("./router/newslist");
//2:创建express对象
var app = express();
//加载跨域模块
var cors = require('cors');
//配置跨域模块;允许哪个地址跨域访问
app.use(cors(
 {
  origin: ['http://127.0.0.1:8080',
	  'http://localhost:8080'],
	  credentials:true
}));
//3:绑定监听端口
app.listen(3000)
//4:指定静态目录 public
app.use(express.static(__dirname+"/public"));
//5:将路由模块挂载入口文件
app.use("/imagelist",routerImage);
app.use("/newslist",routerNews);

