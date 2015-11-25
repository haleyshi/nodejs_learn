var events = require('events');

var emitter = new events.EventEmitter();

var listener1 = function listener1() {
	console.log("listener1");
}

var listener2 = function listener2() {
	console.log("listener2");
}

emitter.on('event', listener1);
emitter.addListener('event', listener2);

console.log("Listeners number for event: ", new require('events').EventEmitter.listenerCount(emitter, 'event'));

emitter.emit('event');

emitter.removeListener('event', listener2);

console.log("Listeners number for event: ", new require('events').EventEmitter.listenerCount(emitter, 'event'));

emitter.emit('event');
