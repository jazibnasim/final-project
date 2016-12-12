



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

});

app.controller('resultController', function($scope, currentseeFactory, $http){
    // function retrieveForm(words){
    var searchWords = currentseeFactory.getsearchWords();
    console.log(searchWords);

    var name = searchWords.name
    var city = searchWords.city

    // $http({
    //         method: 'GET',
    //         url:'https://maps.googleapis.com/maps/api/place/textsearch/json',
    //         params: {
    //             'query': name + " " + city,
    //             'key': 'AIzaSyCTKPL7rYEGDsf6NT_AFO8991Gb9QY3C-Y'

    //         }
    //         }).then(function successCallback(response){

    //            $scope.photos = [];

    //             console.log("success", response);
    //             for(var i = 0; i <= 6; i++) {
    //               $scope.photos.push($scope.photosrc = "https://maps.googleapis.com/maps/api/place/photo?maxwidth=350&photoreference="+response.data.results[i].photos[0].photo_reference+"&key=AIzaSyCTKPL7rYEGDsf6NT_AFO8991Gb9QY3C-Y");
    //             }
    //             // console.log(testArray);
    //             // var photoRef = response.data.results[0].photos[0].photo_reference;



    //          }, function errorCallback(response){
    //             console.log("Error", response);

    //           $scope.photos = []
    //    });
      $http({
            method: 'GET',
            url:'http://localhost:3000/tweets',
            params: {
                name: "Katoi",
                city: "Detroit"

            }
            }).then(function successCallback(response){

               $scope.tweets = [];

                console.log("twitter", response);
                for(var i = 0; i < response.data.statuses.length; i++) {
                  $scope.tweets.push(
                    { created_at:response.data.statuses[i].created_at, 
                      text: response.data.statuses[i].text,
                      screen_name: response.data.statuses[i].user.screen_name,
                      profile_image_url: response.data.statuses[i].user.profile_image_url}
                    );
                }
                // console.log(testArray);
                // var photoRef = response.data.results[0].photos[0].photo_reference;
                console.log("my scope.tweets is", $scope.tweets);


             }, function errorCallback(response){
                console.log("Error", response);

              $scope.tweets = []
       });

});
