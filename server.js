// set up the express application
var express = require('express');
var fs = require('fs');
var app = express();

// in order to handle static files
app.use(express.static('public'))

var index = fs.readFileSync('index.html');

// endpoint for entry to the site
app.get('/', (err, res) => {
  res.writeHead(200, {'Content-Type': 'text/html'});
	res.end(index);
});

// just used for testing and trying things out
app.get('/working', (err, res) => {
  res.status(200);
  res.json({ working: true });
  res.end();
});

// endpoint for the link to the amazon buy site
app.get('/amazon', (err, res) => {
  res.status(200);
  res.send('https://www.amazon.com/');
  res.end();
});

var des = "- Use of solar energy\n- Adapted to your biological cycle\n- Brighter in the morning " +
          "and it decreases with the time\n- Differents lights colours\n- Long lasting\n- LED bulbs" +
          " have a life expectancy of operational work up to 100, 000 hours or eleven years of "+
          "non-stop operation.";

app.get('/description', (req,res) => {
    if (req.query.json === "true") {
      res.status(200);
      res.json({ description: des });
      res.end();
    } else if (req.query.json === "false") {
      res.status(200);
      res.send(des);
      res.end();
    } else {
      res.status(400);
      res.json({error: {
        code: 400,
        description: "Invalid parameters"}});
      res.end();
    }
});

var port = 3000;

app.listen(port, () => {
  console.log('Server running on port ' + port + '...');
});
