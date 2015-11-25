function sayHello() {
	console.log("Hello 施启扬大包子！");
}

var timer = setTimeout(sayHello, 2000);

clearTimeout(timer);