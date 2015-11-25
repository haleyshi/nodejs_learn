//const fs = require('fs');
const child_process = require('child_process');

for (var i=0; i<3; i++) {
	var workProcess1 = child_process.exec('node support.js ' + i, function(err, stdout, stderr) {
		if (err) {
			console.log(err.stack);
			console.log('Error Code:', err.code);
			console.log('Signal Received:', err.signal);
			console.log('stderr[EXEC]:', stderr);
		} else {
			console.log('stdout[EXEC]:', stdout);
		}	
	});

	workProcess1.on('exit', function(code) {
		console.log("Child Porcess [EXEC] Exit with Exit Code:", code);
	});
}

for (var i=0; i<3; i++) {
	var workProcess2 = child_process.spawn('node', ['support.js', i+10]); 

	workProcess2.stdout.on('data', function(data) {
		console.log('stdout[SPAWN]:', data.toString());
	});

	workProcess2.stderr.on('data', function(data) {
		console.log('stderr[SPAWN]:', data.toString());
	});

	workProcess2.on('close', function(code) {
		console.log("Child Porcess [SPAWN] Exit with Exit Code:", code);
	});
}

for (var i=0; i<3; i++) {
	var workProcess3 = child_process.fork('support.js', [i+100]); 

	workProcess3.on('close', function(code) {
		console.log("Child Porcess [FORK] Exit with Exit Code:", code);
	});
}