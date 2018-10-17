//newslist 新闻列表
//1:加载相应模块 express pool
const express = require("express");
const pool = require("../pool");
//2:创建路由对象
var router = express.Router();
//3:处理不同请求
//功能一：新闻列表
router.get("/list",(req,res)=>{
  //1:参数 无参数
  //2:sql  SELECT id,title,img_url,click,add_time //FROM news
  var sql = " SELECT id,title,img_url,click,add_time";
     sql += " FROM news";
  pool.query(sql,(err,result)=>{
     if(err)throw err;
  //3:返回json格式
     res.send({code:1,msg:result});
  })   
});

//功能二:显示指定新闻详细信息
router.get("/detail",(req,res)=>{
  //1:参数 id
  var id = req.query.id;
  //2:sql  SELECT id,title,add_time,click,img_url
  //       FROM news WHERE id = ?
  var sql =" SELECT id,title,add_time,click";
     sql +=" ,img_url FROM news WHERE id = ?"       
  //3:json {code:1,msg:[]}
  pool.query(sql,[id],(err,result)=>{
     if(err)throw err;
     res.send({code:1,msg:result});
  });
})
//4:将路由对象导出
module.exports = router;