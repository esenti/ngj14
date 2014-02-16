var express = require('express');

var app = express();
var server = require('http').createServer(app);
var io = require('socket.io').listen(server);

var codes = {}

server.listen(8080);

app.get('/', function (req, res) {
  res.sendfile(__dirname + '/index.html');
});

app.use("/", express.static(__dirname));

io.sockets.on('connection', function (socket) {
  var code = 'dupa1';
  codes[code] = socket;

  socket.on('server-hello', function() {
    socket.emit('hello', { code: code });
  });

  socket.on('key', function (data) {
    console.log(data.key);
  });

  socket.on('action', function (data) {
    console.log(data.action);
  });

  socket.on('cient-hello', function (data) {
    console.log(codes[data.code]);
  });


});
