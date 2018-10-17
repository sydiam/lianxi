#db.sql  15:48
#1:创建指定库 web1805
#建议:库名;表名;列名;英文全小写
#建议:特殊要求[苹果手机 utf8mb4]
CREATE DATABASE web1805 CHARSET=UTF8;
#2:进入 web1805库中
USE web1805;
#3:创建一张表 用户表       2条
#表名 user;列名uid uname upwd;列类型?
#所有表都添加一列 id 记录编号  99%
#效率高 1000 / 1w
CREATE TABLE user(
   uid INT PRIMARY KEY AUTO_INCREMENT,
   uname VARCHAR(25),
   upwd  VARCHAR(32)
);
#4:创建一张表 图片轮播表   10条
CREATE TABLE imagelist(
  id INT PRIMARY KEY AUTO_INCREMENT,
  img_url VARCHAR(255),
  title   VARCHAR(255)
);
INSERT INTO imagelist VALUES(null,'banner1.png','phone');
INSERT INTO imagelist VALUES(null,'banner2.png','phone');
INSERT INTO imagelist VALUES(null,'banner3.png','phone');
INSERT INTO imagelist VALUES(null,'banner4.png','phone');
#创建新闻表 [id;title;add_time;click;img_url]
CREATE TABLE news(
  id INT PRIMARY KEY AUTO_INCREMENT,
  title VARCHAR(255),
  add_time DATETIME,
  click    INT,
  img_url  VARCHAR(255)
);
INSERT INTO news VALUES(null,'..1',now(),0,'banner1.png');
INSERT INTO news VALUES(null,'..2',now(),0,'banner2.png');
INSERT INTO news VALUES(null,'..3',now(),0,'banner3.png');
#16:43
#创建服务器程序 xuezi


#16:24 添加四条记录
#5:创建一张表 图片列表     10条
#6:添加数据
#原文  123           密文 23892389dsiosxjke38ds
INSERT INTO user VALUES(null,'tom',md5('123'));
INSERT INTO user VALUES(null,'jerry',md5('123'));
#7:完成用户登录
#？7:查询所有图片轮播表数据
#？8:查询所有图片列表表数据 


