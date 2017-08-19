'use strict';
var fs = require('fs');
var http = require('http');
var port = process.env.PORT || 1337;

var server = http.createServer(function (req, res) {
    res.writeHead(200, { "Content-Type": "text/html" });
    var output = fs.readFileSync("./index.html", "utf-8");
    res.end(output);
}).listen(port);
var io = require("socket.io").listen(server);

io.sockets.on("connection", function (socket) {

    socket.on("connected", function (value) {

    });

    socket.on("execOnServer", function (data) {
        io.sockets.emit("ServerMsg", { value: "Message from client via Server : " + data });
    });
});
