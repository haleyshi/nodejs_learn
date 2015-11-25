var file = require('fs');
var zlib = require('zlib');

var reader = file.createReadStream('input.txt.gz');
var writer = file.createWriteStream('input_2.txt');

reader.pipe(zlib.createGunzip()).pipe(writer);

console.log("解压完成！");