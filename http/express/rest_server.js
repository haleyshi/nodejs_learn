var express = require('express');
var fs = require('fs');

var app = express();

var server = app.listen(8091, function() {
	var host = server.address().address;
	var port = server.address().port;
	console.log('Server is listening on: http://%s:%s', host, port);
});

app.get('/listUsers', function(req, res) {
	fs.readFile(__dirname + "/users.json", 'utf8', function(err, data) {
		if (err) {
			res.status(500).send('Read file error!');
		} else {
			res.end(data);
		}		
	});
});

var add_user = {
	"user4": {
		"name": "shiguolei",
		"password": "password4",
		"id": 4
	}
};

app.get('/addUser', function(req, res) {
	fs.readFile(__dirname + "/users.json", 'utf8', function(err, data) {
		if (err) {
			res.status(500).send("Read file Error!");
		} else {
			data = JSON.parse(data);
			data["user4"] = add_user["user4"];
			res.end(JSON.stringify(data));
		}
	});
});

app.get("/listUser/:id", function(req, res) {
	fs.readFile(__dirname + "/users.json", 'utf8', function(err, data) {
		if (err) {
			res.status(500).send('File read error!');
		} else {
			data = JSON.parse(data);
			var user = data["user" + req.params.id];
			res.end(JSON.stringify(user));
		}
	});
});

var delete_id = 2;

app.get('/deleteUser', function(req, res) {
	fs.readFile(__dirname + "/users.json", 'utf8', function(err, data) {
		if (err) {
			res.status(500).send({'error': err.message});
		} else {
			data = JSON.parse(data);
			delete data["user" + delete_id];
			res.end(JSON.stringify(data));
		}
	});
});