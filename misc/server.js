// modules =================================================
var express        	= require('express'),
	app            	= express(),
	bodyParser     	= require('body-parser'),
	favicon 		= require('serve-favicon'),
	methodOverride 	= require('method-override'),
	twit			= require('twitter'),
	twitter			= new twit({
		consumer_key: 'G6qhrX3QXEJtfnUqjNkC6SfHe',
		consumer_secret: 'bknaqgC44g7MJwamBqnrY0oTFx39RU72e9bbUcHESqaG2ALiAp',
		access_token_key: '2835451023-9ncvaNTpljmvwmtCN8jDpZVnyGwnNpGqjgU57Aa',
		access_token_secret: 'OAGP6vgroHL5sRvSabd2liJmEVFkQzJat2hZWNvrBiHvk'
	});

// configuration ===========================================
// config files

var port = process.env.PORT || 8080; // set our port

// get all data/stuff of the body (POST) parameters
app.use(bodyParser.json()); // parse application/json
app.use(bodyParser.json({ type: 'application/vnd.api+json' })); // parse application/vnd.api+json as json
app.use(bodyParser.urlencoded({ extended: true })); // parse application/x-www-form-urlencoded
app.use(favicon(__dirname + '/public/img/favicon.png'));
app.use(methodOverride('X-HTTP-Method-Override')); // override with the X-HTTP-Method-Override header in the request. simulate DELETE/PUT
app.use(express.static(__dirname + '/public')); // set the static files location /public/img will be /img for users

// routes ==================================================

app.get('/tweets', function(req, res){
	var params = {screen_name: 'Elmore_Official', count: 30};
	twitter.get('statuses/user_timeline', params, function(error, tweets, response){
	  if (!error) {
	    res.send(tweets);
	  }
	});
});

app.get('*', function(req, res) {
        res.sendfile('./public/index.html');
});

// start app ===============================================
app.listen(port);
console.log('Magic happens on port ' + port); 			// shoutout to the user
exports = module.exports = app; 						// expose app