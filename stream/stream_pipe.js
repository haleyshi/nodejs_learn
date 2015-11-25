var file = require('fs');

var reader = file.createReadStream('input.txt');
var writer = file.createWriteStream('output_1.txt');

reader.pipe(writer);

console.log("End of process!");