var express = require('express'),
app = express(),
path = require('path'),
bodyParser = require('body-parser'),
reddit = require('./modules/reddit.js');

var SERVER_PORT = 3000;

app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, 'dist')));


app.post('/search', function (req, res) {
	console.log(req.body);
	var query = req.body.query ? req.body.query : '';
  	reddit.search(query, res);
});

app.listen(SERVER_PORT);
console.log('Listening on port ' + SERVER_PORT);