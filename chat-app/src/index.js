var app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http);

app.get('/', function (req, res) {
    res.sendFile(__dirname + '/index.html');
});

io.on('connection', function (socket) {

    socket.on('disconnect', function () {
        //console.log('user disconnected');
    });

    socket.on('chat_mess', function (msg) {
        //console.log('chat_mess: ', msg);
        //io.emit('server-send', msg);
        //socket.emit('server-send', msg);
        socket.broadcast.emit('server-send', msg);
    });
});

http.listen(3000, function () {
    console.log('listening on 3000');
});