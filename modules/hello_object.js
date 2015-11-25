function Hello() {
	var name;
	this.setName = function(p_name) {
		name = p_name;
	}

	this.sayHello = function() {
		console.log("Hello, ", name);
	}
}

module.exports = Hello;