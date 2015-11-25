process.on('exit', function(code) {
	console.log("Exit Code:", code);
});

var start = process.hrtime();

process.stdout.write("Hello, Shi Qiyang!\n");

process.argv.forEach(function(val, index, array) {
	console.log(index + ": " + val);
});

console.log(process.execPath);

console.log(process.platform);

console.log("当前工作目录：", process.cwd());
console.log("当前版本：", process.version);
console.log(process.memoryUsage());

console.log("运行时间：", process.uptime());
console.log("当前时间：", process.hrtime());
console.log("运行时间：", process.hrtime(start));

console.log("End of process!");