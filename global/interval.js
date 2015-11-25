var round = 0;
function sayHello() {
	if (round >= 10) {
		console.timeEnd('wait');
		console.timeEnd('total');
		console.log("Exit after 10 rounds.");
		clearInterval(timer);
	} else {
		console.timeEnd('wait');
		console.time('wait');
		console.log("Hello,round", round);
		round++;
	}
}

console.time('wait');
console.time('total');
var timer = setInterval(sayHello, 2000);
