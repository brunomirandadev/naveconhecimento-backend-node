var http = require('http');
var c = require('./compare');

http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/html'});
  res.write("O maior numero eh " + c.compare(1,3,2000));
  res.end();
}).listen(8080);