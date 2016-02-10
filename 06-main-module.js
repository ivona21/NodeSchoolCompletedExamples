var filterByExtension = require('./6-helping-module');
var directoryName = process.argv[2];
var extensionFilter = process.argv[3];

filterByExtension(directoryName, extensionFilter, function(err, data){
       if (err){
           console.error(err);
       } else {
           data.forEach(function(filteredFile){
               console.log(filteredFile);
           });
       }
});
