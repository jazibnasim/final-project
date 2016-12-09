var myModule = require('./resultTweet');

//
// var http = require('http');
//
//
// http.createServer(function(request, response) {
// response.writeHead(200, { "Content-type": "text/plain" });
// response.write(myModule.random);
// response.end();
// }).listen(8888);
//
// console.log(myModule.random);
// console.log("Now open http://localhost:8888");
// console.log("Press CTRL+C to stop this server.");


//
var express = require('express');
var app = express();
// respond with "Hello World!" on the homepage

//app.get('/', function (req, res) {
//  res.send(myModule.random);
//});

app.get('/api/tweets', function (req, res) {
  res.send(myModule.random());
});

//forward to index.html
app.use(express.static(__dirname + '/public'))

var server = app.listen(3000, function () {
var port = server.address().port;
console.log('Example app listening at http://localhost:%s', port);
});
