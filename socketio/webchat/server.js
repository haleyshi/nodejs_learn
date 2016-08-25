var express = require('express');
var path = require('path');
var app = express();
var server = require('http').Server(app);
var io = require('socket.io')(server);

var port = 8080;
var users = [];

app.use(express.static(path.join(__dirname, "public")));

io.on('connection', function(socket) {
	console.log('new connection made');

	// Join private room
	socket.on('join-private', function(data) {
		socket.join('private');
		console.log(data.nickname + ' joined private');
	});

	socket.on('private-chat', function(data) {
		socket.broadcast.to('private').emit('show-message', data.message);
	});

	// Show all users when first logged in
	socket.on('get-users', function(data) {
		socket.emit('all-users', users);
	});

	// When new socket joins
	socket.on('join', function(data) {
		socket.nickname = data.nickname;
		var userObj = {
			nickname: data.nickname,
			socketid: socket.id
		}

		users.push(userObj);
		console.log(users);
		io.emit('all-users', users);
	});

	// Send a message
	socket.on('send-message', function(data) {
		io.emit('message-received', data);
	});

	// Send a like to the user of your choice
	socket.on('send-like', function(data) {
		console.log(data);
		socket.broadcast.to(data.like).emit('user-liked', data);
	});

	socket.on('disconnect', function(data) {
		users = users.filter(function(item) {
			return item.nickname !== socket.nickname;
		});
		io.emit('all-users', users);
	});
});

server.listen(port, function() {
	console.log("Listening on port " + port);
});