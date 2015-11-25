buf = new Buffer(256);

len = buf.write("施国煌的大儿子是施启扬", 'utf8');

console.log("Write Bytes lenght: ", len);
console.log("Bytes are: ", buf.toString('utf8', 0, len));

//json = buf.toJSON();
//console.log(json);

var buffer1 = new Buffer("I love you ");
var buffer2 = new Buffer("Money");
var buffer3 = Buffer.concat([buffer1, buffer2]);
var buffer4 = new Buffer(20);

console.log(buffer3.toString());
buffer3.copy(buffer4, 0, 3, 5);
console.log(buffer4.toString('utf8', 0, 2));

var buffer5 = buffer3.slice(3, 8);
console.log(buffer5.toString());
buffer3.write("abcdefghijklmnopqrstuvwxyz");
console.log(buffer5.toString());
console.log(buffer5.length);

var buffer6 = new Buffer(30);
buffer6.fill(97, 0, 30);
console.log(buffer6.toString());
