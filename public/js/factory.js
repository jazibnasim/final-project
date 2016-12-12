var app = angular.module('currentsee');

app.factory('currentseeFactory', function(){

	var searchWords = {};

	function setsearchWords(words) {
		searchWords = words;
		console.log("set", searchWords);
		return searchWords;
	}
	function getsearchWords(words) {
		console.log("get", searchWords);
		return searchWords;
	}
	
	return {
		getsearchWords: getsearchWords,
		setsearchWords: setsearchWords
	}

});

