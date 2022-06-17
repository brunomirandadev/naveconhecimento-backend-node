var http = require('http');
var url = require('url');
var soma = require('./modulesum');

http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/html'});
  var q = url.parse(req.url, true).query;
  var txt = q.year + " " + q.month;
  var total = soma.sum(q.num1, q.num2);
  txt = txt + "</br></br> A soma de num1 + num2 eh: " + total.toString();  
  res.end(txt); 
}).listen(8080);