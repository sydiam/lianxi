//1:引入模块 express
const express = require("express");
const pool = require("../pool");
//2:创建对象 router
var router =  express.Router();

//3:处理请求 GET /list
/**
 * 图片轮播查询列表
 */
router.get("/list",(req,res)=>{
  //3.1:参数 无参数    
  //3.2:sql  
  //SELECT id,img_url,title FROM imagelist;
  var sql = "SELECT id,img_url,title FROM imagelist";
  pool.query(sql,(err,result)=>{
      //判断查询结果是否出现错误，如果出现直接抛出
      if(err)throw err;
      //console.log(result);//数组
      //将结果返回客户端 
      //#返回数据    1 正确 -1 -2 .. 失败
      //告诉客户成功还是失败
      //#返回查询结果
      //3.3:返回数据格式
      res.send({code:1,msg:result});
  });
})
//4:导出router对象  
//app.js  加载路由模块
module.exports = router;