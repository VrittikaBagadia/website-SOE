var express = require('express');
var fs = require('fs');

// Set up the express app
var app = express();
app.use(express.static('public'))

var index = fs.readFileSync('index.html');

app.get('/', (err, res) => {
  res.writeHead(200, {'Content-Type': 'text/html'});
	res.end(index);
});

var port = 3000;

app.listen(port, () => {
  console.log(`server running on port ` + port);
});