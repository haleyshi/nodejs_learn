var net = require('net');

var client = net.connect({port: 8090}, function() {
	console.log('Connect to Server!');
});

client.on('data', function(data) {
	console.log('Receive data from server:', data.toString());
	client.end();
});

client.on('end', function() {
	console.log('Close the connection with server!');
});