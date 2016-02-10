var http = require('http');
var url = require('url');
var expectedPath1 = '/api/parsetime';
var expectedPath2 = '/api/unixtime';
var port = process.argv[2];
var output;

http.createServer(function(request, response){
    var parsedUrl = url.parse(request.url, true);
    console.log(parsedUrl.pathname);
    var time = new Date(parsedUrl.query.iso);
    if (parsedUrl.pathname == expectedPath1){
        output = {
            hour: time.getHours(),
            minute: time.getMinutes(),
            second: time.getSeconds()
        }
    } else if (parsedUrl.pathname == expectedPath2) {
        output = {
            unixtime: time.getTime()
        }
    }
    response.writeHead(200, {'Content-Type' : 'application/json'});
    response.end(JSON.stringify(output));
}).listen(port);