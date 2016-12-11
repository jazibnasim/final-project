
//i believe this goes in the server somewhere -neal

app.get('/tweets/:name/:city', function(req, res){
    var searchquery = req.params.name + ' ' + req.params.city;
    twitter.get('search/tweets', {q: searchquery, count: 6}, function(error, tweets, response) {
        //if no errors, send our tweets to our
        if (!error) {
            res.send(tweets);
        }
    });
});