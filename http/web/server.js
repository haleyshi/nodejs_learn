var http = require('http');
var url = require('url');
var fs = require('fs');

http.createServer(function(request, response) {
	var pathname = url.parse(request.url).pathname;

	console.log('Request for', pathname, "received!");

	fs.readFile(pathname.substr(1), function(err, data) {
		if (err) {
			console.log(err);
			response.writeHead(404, {'Content-Type': 'text/html'});
			response.write(err.message);
		} else {
			response.writeHead(200, {'Content-Type': 'text/html'});
			response.write(data.toString());
		}

		response.end();
	});
}).listen(8081, function() {
	console.log('Server start on port 8081.');
});