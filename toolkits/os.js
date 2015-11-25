var os = require('os');

console.log('endianness:', os.endianness());
console.log('type:', os.type());
console.log('platform:', os.platform());
console.log('totalmem:', os.totalmem());
console.log('freemem:', os.freemem());