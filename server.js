var express = require('express'),
app = express(),
path = require('path'),
reddit = require('./modules/reddit.js');

var SERVER_PORT = 3000;

//app.use(express.static(__dirname)); // Current directory is root
app.use(express.static(path.join(__dirname, 'dist'))); //  "public" off of current is root

app.listen(SERVER_PORT);
console.log('Listening on port ' + SERVER_PORT);