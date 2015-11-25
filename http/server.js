//                     url.parse(string).query
//                                           |
//           url.parse(string).pathname      |
//                       |                   |
//                     ------ -------------------
//http://localhost:8888/start?foo=bar&hello=world
//                                ---       -----
//                                 |          |
//                                 |          |
//              querystring(string)["foo"]    |
//                                            |
//                         querystring(string)["hello"]

var http = require('http');
var url = require('url');

function start(route) {
  function onRequest(request, response) {
    var pathname = url.parse(request.url).pathname;
    console.log("Request for ", pathname + " received");

    route(pathname);

    response.writeHead(200, {'Content-Type': 'text/plain'});
    response.write("Hello - " + pathname);
    response.end();
  }

  http.createServer(onRequest).listen(8888);
  console.log("Server start!");
}

exports.start = start;