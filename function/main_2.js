function execute(someFunction, value) {
	someFunction(value);
}

execute(function(value) {console.log(value);}, "Hello");