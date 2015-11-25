var file = require('fs');

var data = "施启扬是个乖乖的小朋友！\n我们大家都很喜欢他！";

var writerStream = file.createWriteStream('output.txt');

writerStream.write(data, 'UTF8');

writerStream.end();

writerStream.on('finish', function() {
	console.log("文件写入完成！");
});

writerStream.on('error', function(err) {
	console.log(err.stack);
});

console.log("End of process!");