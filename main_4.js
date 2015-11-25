var events = require('events');

var eventEmitter = new events.EventEmitter();

eventEmitter.on('some_event', function() {
	console.log("some_event happens!");
});

console.log("start and wait 10 seconds for some_event!");

setTimeout(function() {
	eventEmitter.emit('some_event');
}, 10000);

console.log("end of main process!");
