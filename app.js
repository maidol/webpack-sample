var http = require('http');
var express = require('express');
var app = express();
// app.use("/app", express.static(__dirname + '/public'));
// app.use(express.static(__dirname + '/public'));
app.use(express.static(__dirname + '/build'));

// 创建服务端
http.createServer(app).listen('8888', function() {
	console.log('启动服务器完成');
});