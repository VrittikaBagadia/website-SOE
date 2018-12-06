var express = require('express');
var app = express();
app.use(express.static('public'))
var http = require('http');
var fs = require('fs');
var html = fs.readFileSync('index.html');

var port = 3000;
http.createServer(function (req, res) {
  if (req.url === '/') {
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.end(html);
  } else {
    fs.createReadStream('public' + req.url).pipe(res);
  }
}).listen(port);
