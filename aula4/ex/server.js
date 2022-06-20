var http = require('http');
var url = require('url');
var fs = require('fs');
var oper = require('./operacao');

http.createServer(function (req, res) {
  var q = url.parse(req.url, true);
  var filename = "." + q.pathname;
  var op = q.query.op;
  fs.readFile(filename, function(err, data) {
    if (err) {
      res.writeHead(404, {'Content-Type': 'text/html'});
      return res.end("404 Not Found");
    }
    if (op == 'sum' && (q.pathname == '/index.html'  ||
                          q.pathname == '/summer.html' ||  
                          q.pathname == '/winter.html' ||  
                          q.pathname == '/fall.html'   ||
                          q.pathname == '/spring.html')){
      total = oper.sum(q.query.n1, q.query.n2);
      res.writeHead(200, {'Content-Type': 'text/html'});
      var texto = '<p>SOMA!</p></br>'
      texto = texto + total.toString();
      res.write(texto);
      return res.end();
    }
    if (op == 'sub' && (q.pathname == '/index.html'  ||
                        q.pathname == '/summer.html' ||  
                        q.pathname == '/winter.html' ||  
                        q.pathname == '/fall.html'   ||
                        q.pathname == '/spring.html')) {
      total = oper.sub(q.query.n1, q.query.n2);
      res.writeHead(200, {'Content-Type': 'text/html'});
      var texto = '<p>SUBTRACAO!</p></br>'
      texto = texto + total.toString();
      res.write(texto);
      return res.end();
    }
    if (op == 'mul' && (q.pathname == '/index.html'  ||
                        q.pathname == '/summer.html' ||  
                        q.pathname == '/winter.html' ||  
                        q.pathname == '/fall.html'   ||
                        q.pathname == '/spring.html')){
      var total = oper.mult(q.query.n1, q.query.n2);
      res.writeHead(200, {'Content-Type': 'text/html'});
      var texto = '<p>MULTIPLICACAO!</p></br>';
      texto = texto + total.toString();
      res.write(texto);
      return res.end();
    }
    if (op == 'div' && (q.pathname == '/index.html'  ||
                        q.pathname == '/summer.html' ||  
                        q.pathname == '/winter.html' ||  
                        q.pathname == '/fall.html'   ||
                        q.pathname == '/spring.html')){
      total = oper.div(q.query.n1, q.query.n2);
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