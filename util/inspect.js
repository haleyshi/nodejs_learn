var util = require('util');

function Person(p_name) {
	this.name = p_name;
	this.toString = function() {
		return this.name;
	};
}

var baby = new Person("Shi Qiyang");
var beauty = new Person("Wu Qian");

console.log(util.inspect(beauty));
console.log(util.inspect(baby, true, null, true));
