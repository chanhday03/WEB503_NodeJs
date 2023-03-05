//library
var http = require('http');
http.createServer(function(req , res){
    res.writeHead(200,{"Content-Type" : "text/html"});
    res.write('Hi Chanh');
    res.end();
}).listen(9999);