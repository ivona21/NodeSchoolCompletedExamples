var fs = require('fs');
var path = require('path');
var directoryName = process.argv[2];
var extensionFilter = process.argv[3];

fs.readdir(directoryName, function(err, files){
   if (err)
        return console.error(err);

   files.forEach(function(file){
        if (path.extname(file) == '.' + extensionFilter) {
            console.log(file);
        }
   });
});

