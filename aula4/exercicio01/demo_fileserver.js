var http = require('http');
var url = require('url');
var fs = require('fs');
var oper = require('./operacao');

http.createServer(function (req, res) {
  var q = url.parse(req.url, true);
  var filename = "." + q.pathname;
  fs.readFile(filename, function(err, data) {
    if (err) {
      res.writeHead(404, {'Content-Type': 'text/html'});
      return res.end("404 Not Found");
    }
    if (q.pathname == "/soma.html" ) {
      var op = url.parse(req.url, true).query;
      total = oper.sum(op.n1, op.n2);
      res.writeHead(200, {'Content-Type': 'text/html'});
      var texto = '<p>SOMA!</p></br>'
      texto = texto + total.toString();
      res.write(texto);
      return res.end();
    }
    if (q.pathname == "/subtracao.html" ) {
      var op = url.parse(req.url, true).query;
      var total = oper.sub(op.n1, op.n2);
      res.writeHead(200, {'Content-Type': 'text/html'});
      var texto = '<p>SUBTRACAO!</p></br>'
      texto = texto + total.toString();
      res.write(texto);
      return res.end();
    }
    if (q.pathname == "/multiplicacao.html" ) {
      var op = url.parse(req.url, true).query;
      var total = oper.mult(op.n1, op.n2);
      res.writeHead(200, {'Content-Type': 'text/html'});
      var texto = '<p>MULTIPLICACAO!</p></br>'
      texto = texto + total.toString();
      res.write(texto);
      return res.end();
    }  
    if (q.pathname == "/divisao.html" ) {
      var op = url.parse(req.url, true).query;
      var total = oper.div(op.n1, op.n2);
      res.writeHead(200, {'Content-Type': 'text/html'});
      var texto = '<p>DIVISAO!</p></br>'
      texto = texto + total.toString();
      res.write(texto);
      return res.end();
    }
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write(data);
    return res.end();
  });
}).listen(8080);