var https = require("https")
var express = require("express")
var app = express() // 建立express物件
var parser = require("body-parser") //解析json格式
var server = https.createServer(app)
var multipart = require('connect-multiparty');
var multipartMiddleware = multipart();

module.exports = app;

server.listen(1234);
