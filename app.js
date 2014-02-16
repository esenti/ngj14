var express = require('express');

var app = express();
var server = require('http').createServer(app);
var io = require('socket.io').listen(server);

codes = {}

server.listen(80);

app.get('/', function (req, res) {
  res.sendfile(__dirname + '/index.html');
});

app.use("/", express.static(__dirname));

io.sockets.on('connection', function (socket) {
  var code = '1' + Math.floor(Math.random() * 10000);

  socket.on('server-hello', function() {
    codes[code] = {};
    socket.emit('hello', { code: code });
    codes[code].server = socket;
  });

  socket.on('key', function (data) {
    console.log(data);
    console.log(codes);
    codes[data.code].client.emit('key', {key: data.key});
  });

  socket.on('append', function (data) {
    codes[data.code].client.emit('append');
  });

  socket.on('virus', function (data) {
    codes[data.code].server.emit('virus', {virus: data.virus});
  });

  socket.on('client-hello', function (data) {
    codes[data.code].client = socket;

    console.log(codes);
    codes[data.code].server.emit('client-connected');
  });


});
