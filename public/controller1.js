var app = angular.module('currentsee');

app.controller('formController', ["$scope", "wordsService", function($scope, wordsService){

	$scope.save = function(){
		wordsService.saveName($scope.name);
		wordsService.saveAdjective($scope.adjective);
		wordsService.saveVerb($scope.verb);
		wordsService.saveNoun($scope.noun);
		wordsService.saveNoun2($scope.noun2);
		wordsService.saveVerb2($scope.verb2);
		wordsService.saveAdjective2($scope.adjective2);

		};

}]);
