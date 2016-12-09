var express = require('express');
var app = express();


var Twitter = require('node-twitter');
 
var twitterSearchClient = new Twitter.SearchClient({
    consumer_key:'e4dPlJrNlpJFCjPkfB6YLegz3',
    consumer_secret:'0ChN1PSoJA8cEcZJP1RLoACD0HnGHo45ToK0PODCECKfRITPlb',
    access_token:'806166248212103169 dnlSI0UJCuOcPZg5ZEy6sm1snHKiYFx',
    token_secret:'Ka32H9iIHmE4fYf85eFXO6FfknZhqFmEDXldWoWzB61Hf'
});


 
twitter.verifyCredentials('806166248212103169dnlSI0UJCuOcPZg5ZEy6sm1snHKiYFx','Ka32H9iIHmE4fYf85eFXO6FfknZhqFmEDXldWoWzB61Hf', 
	'q ', function(error, data, response) {
    if (error) {
        //something was wrong with either accessToken or accessTokenSecret 
        //start over with Step 1 
    } else {
        //accessToken and accessTokenSecret can now be used to make api-calls (not yet implemented) 
        //data contains the user-data described in the official Twitter-API-docs 
        //you could e.g. display his screen_name 
        console.log(data["screen_name"]);
    }
});

var server = app.listen(3000, function(){
	var port= server.address().port;
	  console.log('Example app listening at http://localhost:%s', port);