var net = require('net');
var strftime = require('strftime');
var port = process.argv[2];

net.createServer(function(socket){
    var currentTime = strftime('%Y-%m-%d %H:%M');
    socket.end(currentTime + '\n');
}).listen(port);