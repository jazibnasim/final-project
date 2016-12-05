var app = angular.module('currentsee');

//Creates the Set and Get for information

app.factory('wordsService', function(){
	var userName = "";
	var userAdjective = "";
	var userVerb = "";
	var userNoun = "";
	var userNoun2 = "";
	var userVerb2 = "";
	var userAdjective2 = "";



	return {

		//SET

		saveName: function(name){
			userName = name;
		},

		saveAdjective: function (adjective){
			userAdjective = adjective;
		},

		saveVerb: function (verb){
			userVerb = verb;
		},

		saveNoun: function (noun){
			userNoun = noun;
		},

		saveNoun2: function (noun2){
			userNoun2 = noun2;
		},

		saveVerb2: function (verb2){
			userVerb2 = verb2
		},

		saveAdjective2: function (adjective2){
			userAdjective2 = adjective2;
		},


		//GET

		getName: function(){
			return userName;
		},

		getAdjective: function(){
			return userAdjective;
		},

		getVerb: function(){
			return userVerb;
		},

		getNoun: function(){
			return userNoun;
		},

		getNoun2: function(){
			return userNoun2;
		},

		getVerb2: function(){
			return userVerb2;
		},

		getAdjective2: function(){
			return userAdjective2;
		},


	};
});
