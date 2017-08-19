'use strict';
var fs = require('fs');
var http = require('http');
var port = process.env.PORT || 1337;
var exec = require('child_process').exec;

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
        exec('dir', (error, stdout, stderr) => {
            if (error) {
                console.error(`exec error: ${error}`);
                return;
            }
            io.sockets.emit("ServerMsg", { value: stdout.toString() });
            console.log(`stdout: ${stdout}`);
            console.log(`stderr: ${stderr}`);
        });
        io.sockets.emit("ServerMsg", { value: "Message from client via Server : " + data });
    });
});
