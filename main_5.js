var events = require('events');

var emitter = new events.EventEmitter();

emitter.on('event1', function(arg1, arg2) {
	console.log('listener1_1', arg1, arg2);
});

emitter.on('event1', function(arg1, arg2) {
	console.log('listener1_2', arg1, arg2);
});

emitter.once('event1', function(arg1, arg2) {
	console.log('one time listener', arg1, arg2);
});

console.log("Number of listeners: ", require('events').EventEmitter.listenerCount(emitter, 'event1'));
emitter.emit('event1', "Hello", "World");
console.log("Number of listeners: ", require('events').EventEmitter.listenerCount(emitter, 'event1'));
emitter.emit('event1', "2nd", "chance");
console.log("Number of listeners: ", require('events').EventEmitter.listenerCount(emitter, 'event1'));