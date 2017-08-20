'use strict';
var fs = require('fs');
var http = require('http');
var port = process.env.PORT || 1337;
var spawn = require('child_process').spawn;
var express = require('express');
var routes = require

var app = express();
var server = http.createServer(app).listen(port);

var io = require("socket.io").listen(server);

io.sockets.on("connection", function (socket) {

    socket.on("connected", function (value) {

    });

    socket.on("execOnServer", function (data) {
        var execOut = spawn('..\\Cmd2Web\\bin\\Debug\\Cmd2Web.exe', [ data.toString("utf-8") ]);

        execOut.stdout.on('data', function (data) {
            io.sockets.emit("ServerMsg", { value: data.toString("utf-8") });
            console.log(`stdout: ${data.toString("utf-8")}`);
        });

        execOut.on('exit', function (code) {
            console.log(code.toString());
            io.sockets.emit("ServerMsg", { value: "Exec is done : " + code.toString() });
        });

        io.sockets.emit("ServerMsg", { value: "Message from client via Server : " + data });
    });
});

app.get('/', function (req, res) {
    fs.readFile('./index.html', 'UTF-8', function (err, data) {
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.end(data);
    });
});

app.get('*.jpg', function (req, res) {
    console.log(req);
    fs.readFile('.' + req.originalUrl,function(err, data){  
      res.set('Content-Type', 'image/jpg'); 
      res.send(data); 
    });
});

app.get('*.png', function (req, res) {
    console.log(req);
    fs.readFile('.' + req.originalUrl,function(err, data){  
      res.set('Content-Type', 'image/png'); 
      res.send(data); 
    });
});

