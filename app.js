var http = require("http");
var fs = require('fs');
var mime = require('mime');

http.createServer(function(request, response) {
    console.log(request.url);
    if(request.url == '/') {
        fs.readFile('main_page.html', function(err, data) {
            if (err) {
                response.writeHead(404, 'Not Found');
                response.write('404: File Not Found!');
                return response.end();
            }
            response.writeHead(200, {"Content-Type": mime.getType(url)});
            response.write(data);
            response.end();
        });
    } else {
        var url = request.url.substring(1, request.url.length);
        fs.readFile(url, function(err, data) {
            if (err) {
                response.writeHead(404, 'Not Found');
                response.write('404: File Not Found!');
                return response.end();
            }
            response.writeHead(200, {"Content-Type": mime.getType(url)});
            response.write(data);
            response.end();
        });
    }
}).listen(process.env.PORT || 8888);