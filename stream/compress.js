var file = require('fs');
var zlib = require('zlib');

var reader = file.createReadStream('input.txt');
var writer = file.createWriteStream('input.txt.gz');

reader.pipe(zlib.createGzip()).pipe(writer);

console.log("文件压缩完成！");