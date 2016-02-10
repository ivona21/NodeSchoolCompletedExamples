var fs = require('fs');
var filePath = process.argv[2];

var lines = fs.readFileSync(filePath, 'utf8').split('\n');
console.log(lines.length - 1);