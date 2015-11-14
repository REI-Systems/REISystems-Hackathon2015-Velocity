var http = require('http')
var port = process.env.PORT || 1337;
http.createServer(function(req, res) {
    console.log(req);
  res.writeHead(200, { 'Content-Type': 'text/plain' });
  res.end('Hello Velocity\n');
}).listen(port);