var fs = require('fs');
var path = require('path');

module.exports = function(directoryName, extensionFilter, callback){
    fs.readdir(directoryName, function(err, files){
       if (err){
           callback(err);
       } else {
           var filteredFiles = files.filter(function(file){
               return path.extname(file) == '.' + extensionFilter
           });
           callback(null, filteredFiles);
       }
    });
};