
var express = require('express');
var app = express();
twit = require('twitter'),
	twitter = new twit({
		consumer_key: '',
		consumer_secret: '',
		access_token_key: '',
		access_token_secret: ''
	});

app.use(express.static(__dirname + '/public'))

app.get('/tweets/:name/:city', function(req, res){
    var searchquery = req.params.name + ' ' + req.params.city;
    twitter.get('search/tweets', {q: searchquery, count: 6}, function(error, tweets, response) {
        //if no errors, send our tweets to our
        if (!error) {
            res.send(tweets);
        }
    });
});

var server = app.listen(3000, function () {
var port = server.address().port;
console.log('Example app listening at http://localhost:%s', port);
});