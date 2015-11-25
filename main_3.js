var file = require('fs');

var fileReader = function read_file(err, data) {
	if (err) {
		//console.error(err);
	    console.info(err.stack);
	    return;
	}
	console.log(data.toString());
}

file.readFile('input.txt', fileReader);
file.readFile('input.log', fileReader);