var express = require('express');

var app = express();
var server = require('http').createServer(app);
var io = require('socket.io').listen(server);

var codes = []

server.listen(8080);

app.get('/', function (req, res) {
  res.sendfile(__dirname + '/index.html');
});

app.use("/", express.static(__dirname));

io.sockets.on('connection', function (socket) {
  var code = 'dupa1';
  codes.push(code);
  socket.emit('hello', { code: code });
  socket.on('my other event', function (data) {
    console.log(data);
  });
});
