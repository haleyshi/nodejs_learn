var fs = require("fs");

fs.readFile('input.txt', function (err, data) {
	if (err)
		return console.error(err);

	console.log(data.toString());
});

console.log("非阻塞／异步程序结束！");