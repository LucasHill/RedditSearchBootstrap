var express = require('express'),
app = express(),
path = require('path'),
bodyParser = require('body-parser'),
reddit = require('./modules/reddit.js');

var SERVER_PORT = 3000;

app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, 'dist')));

//PUT IN SEARCH ENDPOINT

app.listen(SERVER_PORT);
console.log('Listening on port ' + SERVER_PORT);