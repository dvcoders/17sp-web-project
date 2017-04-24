var express = require('express');
var app = express();
var path = require('path');
var bodyParser = require('body-parser');
var logger = require('morgan');
var pg = require('pg');

var URL = "MY_URL"

pg.defaults.ssl = true;
var client = new pg.Client(URL);
client.connect();
 var query = client.query("SELECT * FROM posts", function(err, result) {
      console.log(result.rows[0]);
    })

app.use(logger('dev'));
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, 'public')));

app.get('/', function(req, res) {
  res.sendFile(path.join(__dirname, 'public/index.html'));
});

app.post('/yak', function(req, res) {
  var message = req.body.message;
  var time = req.body.time;
  console.log("Time:", time);
  console.log("Message:", message);
  client.query('Insert into posts (post, date) values ($1, $2)', [message, time], function(err, result) {
      console.log(result);
    })
});

app.get('/posts', function(req, res){
  var query = client.query("SELECT * FROM posts", function(err, result) {
      console.log(result.rows);
      res.send(result.rows);
    }) 
})

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
