var http = require('http');

http.createServer(function(request, response){
	//200 OK
	response.writeHead(200, {'Content-Type' : 'text/plain'});

	// sent
	response.end("Hello Node.js\n");
}).listen(8888);

console.log("Server running at http://127.0.0.1:8888");