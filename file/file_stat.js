var file = require('fs');

file.stat('input.txt', function(err, stats) {
	if (err) {
		return console.error(err);
	}

	console.log(stats);
	console.log("Is a File?", stats.isFile());
	console.log("Is a Directory?", stats.isDirectory());
});