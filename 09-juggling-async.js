var http = require('http');
var bl = require('bl');

var data = [3];
var counter = 0;

var writeDataInOrder = function(){
    data.forEach(function(piece){
        console.log(piece.toString());
    });
};

function f(index) {
    http.get(process.argv[2 + index], function (response) {
        response.pipe(bl(function (err, piece) {
            if (err) {
                console.error(err);
            } else {
                counter++;
                data[index] = piece;
            }
            if (counter == 3) {
                writeDataInOrder();
            }
        }));
    });
}

for (var i = 0; i < 3; i++){
    f(i);
}

