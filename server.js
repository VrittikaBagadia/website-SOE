var express = require('express');
var fs = require('fs');
var app = express();
app.use(express.static('public'))

var index = fs.readFileSync('index.html');

app.get('/', (err, res) => {
  res.writeHead(200, {'Content-Type': 'text/html'});
	res.end(index);
});

// app.get('/working', (err, res) => {
//   res.status(200);
//   res.json({ working: true });
//   res.end();
// });

// app.get('/amazon', (err, res) => {
//   res.status(200);
//   res.send('https://www.amazon.com/');
//   res.end();
// });

var port = 3000;

app.listen(port, () => {
  console.log(`server running on port ` + port);
});