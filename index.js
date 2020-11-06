var app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http);
var port = process.env.PORT || 3000;

app.get('/', function(req, res){
  res.sendFile(__dirname + '/index.html');
});

io.on('connection', function(socket){
  console.log("conected")
  socket.on('chat message', function(msg){
    const output = `${msg.id}:  ${msg.message}`
    io.emit('chat message', output);
  });
});

http.listen(port, function(){
  console.log('listening on *:' + port);
});