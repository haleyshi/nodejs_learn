var EventEmitter = require('events').EventEmitter;
var domain = require('domain');

var emitter1 = new EventEmitter();

var domain1 = domain.create();

domain1.on('error', function(err) {
	console.log('domain1 process:', err.message);
});

domain1.add(emitter1);

emitter1.on('error', function(err) {
	console.log('emitter1 process:', err.message);
});

emitter1.emit('error', new Error('emitter1 error will be handled by Listener'));

emitter1.removeAllListeners();

emitter1.emit('error', new Error('emitter1 error will be handled by domain1'));

var domain2 = domain.create();

domain2.on('error', function(err) {
	console.log('domain2 process:', err.message);
});

domain2.run(function() {
	var emitter2 = new EventEmitter();
	emitter2.emit('error', new Error('emitter2 error will be handled by domain2'));
});

domain1.remove(emitter1);

emitter1.emit('error', new Error('Error that without handler!'));