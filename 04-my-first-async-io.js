var fs = require('fs');
var filePath = process.argv[2];

fs.readFile(filePath, 'utf8', function(err, data){
    if (err)
        return console.error(err);

    var lines = data.split('\n');
    console.log(lines.length - 1);
});