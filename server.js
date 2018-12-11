var express = require('express');
var app = express();
var http = require('http');
var fs = require('fs');

var index = fs.readFileSync('index.html');
var port = 3000;
app.use(express.static('public'))

http.createServer(function (req, res) {
  if (req.url === '/') { // asking for the html page
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.end(index);
  } else { // asking for a static resource file
    fs.createReadStream('public' + req.url).pipe(res);
  }
}).listen(port);
