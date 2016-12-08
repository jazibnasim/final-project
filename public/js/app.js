



//Module is setup here with ngRoute dependency injection
var app = angular.module("currentsee", ["ngRoute"]);


// Creates the route
app.config(function($routeProvider) {

// Link to  Form View


     $routeProvider.when("/form ", {
        templateUrl: "views/form.html",
        controller: 'formController'

    });

// Link to  Result View
    $routeProvider.when("/result", {
        templateUrl: "views/result.html",
        controller: 'resultController'
});

// Link to about view
    $routeProvider.when("/about",{
    	templateUrl: "views/about.html",
    	controller: "aboutController"
    });


//Main Page View


    $routeProvider.otherwise({
        templateUrl: "views/form.html",
        controller: 'formController'

    });
});



app.controller('formController', function($scope, currentseeFactory, $location, $http){
   $scope.saveForm = function(words){
    currentseeFactory.setsearchWords(words);
    $location.path('/result');
    console.log(words);
   };
  //  $http({
  //       method: 'POST',
  //       url:'https://api.twitter.com/oauth2/token'
  //       header: {
  //           'Content-Type': 'application/x-www-form-urlencoded',
  //           'Authorization': 'Basic ZTRkUGxKck5scEpGQ2pQa2ZCNllMZWd6MzowQ2hOMVBTb0pBOGNFY1pKUDFSTG9BQ0QwSG5HSG80NVRvSzBQT0RDRUNLZlJJVFBsYg=='
  //       }
  //       }).then(function successCallback(response){
  //           console.log("success", response);
  //        }, function errorCallback(response){
  //           console.log("Error", response);
  //  });
});

app.controller('resultController', function($scope, currentseeFactory, $http){
    // function retrieveForm(words){
    var searchWords = currentseeFactory.getsearchWords();
    console.log(searchWords);

    $http({
            method: 'GET',
            url:'https://maps.googleapis.com/maps/api/place/textsearch/json',
            params: {
                'query': 'grandcircus',
                'key': 'AIzaSyCTKPL7rYEGDsf6NT_AFO8991Gb9QY3C-Y'

            }
            }).then(function successCallback(response){

                console.log("success", response);
                var photoRef = response.data.results[0].photos[0].photo_reference



                $scope.photosrc = "https://maps.googleapis.com/maps/api/place/photo?maxwidth=600&photoreference="+photoRef+"&key=AIzaSyCTKPL7rYEGDsf6NT_AFO8991Gb9QY3C-Y";




             }, function errorCallback(response){
                console.log("Error", response);
       });



});
