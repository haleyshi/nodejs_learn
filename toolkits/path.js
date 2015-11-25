var path = require('path');

console.log("normalization:", path.normalize('/test/test1/1slash//2slash/tab/..'));
console.log("join:", path.join('/test', 'test1', '1slash/2slash', 'tab', '..'));

console.log("resolve:", path.resolve('test.js'));
console.log("ext name:", path.extname('test.js'));