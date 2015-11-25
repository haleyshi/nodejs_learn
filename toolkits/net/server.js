var net = require('net');

var server = net.createServer(function(connection) {
	console.log("client connected!");

	connection.on('end', function() {
		console.log('Client close the connection!');
	});

	connection.write('Hello, who are you?');
	connection.pipe(connection);
});

server.listen(8090, function() {
	console.log("Server is listening on port 8090...");
});