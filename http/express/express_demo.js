var express = require('express');
var bodyParser = require('body-parser');
var multer = require('multer');
var cookieParser = require('cookie-parser');
var fs = require('fs');

var app = express();

//var urlencodedParser = bodyParser.urlencoded({extended: false});

app.use(express.static('resources'));
app.use(bodyParser.urlencoded({extended: false}));
app.use(multer({dest: '/tmp/'}).array('image'));
app.use(cookieParser());

app.get('/register.htm', function(req, res) {
	res.sendFile(__dirname + "/" + 'register.htm');
});

app.get('/reg_post.htm', function(req, res) {
	res.sendFile(__dirname + "/" + 'reg_post.htm');
});

app.get('/file_upload.htm', function(req, res) {
	res.sendFile(__dirname + "/" + 'file_upload.htm');
});

app.get('/cookies', function(req, res) {
	res.send(req.cookies);
});

app.get('/reg_result', function(req, res) {
	response = {
		name : req.query.name,
		age  : req.query.age
	};

	res.end(JSON.stringify(response));
});

//app.post('/reg_result', urlencodedParser, function(req, res) {
app.post('/reg_result', function(req, res) {
	response = {
		name : req.body.name,
		age  : req.body.age
	};

	res.end(JSON.stringify(response));
});

app.post('/file_upload', function(req, res) {
	var dest_file = __dirname + "/resources/images/" + req.files[0].originalname;

	fs.readFile(req.files[0].path, function(err, data) {
		if (err) {
			response = {
				message: 'File upload failed - read error!',
				filename: req.files[0].originalname,
				result: 'false'
			};
			res.end(JSON.stringify(response));
		} else {
			fs.writeFile(dest_file, data, function(err) {
				if (err) {
					response = {
						message: 'File upload failed - write error!',
						filename: req.files[0].originalname,
						result: false
					};
					res.end(JSON.stringify(response));
				} else {
					response = {
						message: 'File upload successfully!',
						filename: req.files[0].originalname,
						result: true
					};
					res.end(JSON.stringify(response));
				}
			});
		}
	});
});

app.get('/', function(req, res) {
	res.send("Welcome to Qiyang's home!");
});

app.post('/', function(req, res) {
	res.send('POST Home');
});

app.delete('/user', function(req, res) {
	res.send('DELETE /user');
});

app.get('/users', function(req, res) {
	res.send('GET /users');
});

app.get('/ab*cd', function(req, res) {
	res.send('GET /ab*cd');
});

var server = app.listen(8081, function() {
	var host = server.address().address;
	var port = server.address().port;
	console.log('Server is listening on http://%s:%s', host, port);
});