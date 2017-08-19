'use strict';
var fs = require('fs');
var http = require('http');
var port = process.env.PORT || 1337;
var spawn = require('child_process').spawn;

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
        var execOut = spawn('..\\Cmd2Web\\bin\\Debug\\Cmd2Web.exe');

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
