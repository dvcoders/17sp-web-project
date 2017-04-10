var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var logger = require('morgan');

app.use(logger('dev'));
app.use(bodyParser.json());
app.use(express.static('public'));

app.get('/', function(req, res) {
  res.sendFile('/public/index.html');
});

app.post('/yak', function(req, res) {
  var message = req.body.message;
  var time = req.body.time;
  console.log("Time:", time);
  console.log("Message:", message);
  throw new Error('Haha');
});

app.use(function(req, res) {
  res.status(404);
  res.send("404!");
});

app.use(function(err, req, res, next) {
  res.status(500);
  res.send("500!");
});

app.listen(3000, function() {
  console.log('Listening on port 3000!');
});
