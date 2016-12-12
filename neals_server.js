
var express = require('express');
var app = express();
twit = require('twitter'),
	twitter = new twit({
		consumer_key: 'e4dPlJrNlpJFCjPkfB6YLegz3',
		consumer_secret: '0ChN1PSoJA8cEcZJP1RLoACD0HnGHo45ToK0PODCECKfRITPlb',
		access_token_key: '806166248212103169-K0dwcQu4FGg55cVIVTXo6wamB2yqs7O',
		access_token_secret: '8qkRhWUcXFlp03FdB3UP3I6BYJIcny3YTQ5Y8IDTRxn4u'
	});

app.use(express.static(__dirname + '/public'))

app.get('/tweets/:name/:city', function(req, res){
    var searchquery = req.params.name + ' ' + req.params.city;
    console.log("working");
    twitter.get('search/tweets', {q: searchquery, count: 6}, function(error, tweets, response) {
        console.log("it works");        //if no errors, send our tweets to our
        if (!error) {
            res.send(tweets);
        }

        else{
            res.send(error);
        }
    });
});

var server = app.listen(3000, function () {
var port = server.address().port;
console.log('Example app listening at http://localhost:%s', port);
});