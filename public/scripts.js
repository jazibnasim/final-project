

(function() {

//Module is setup here with ngRoute dependency injection
var app = angular.module("currentsee", ["ngRoute"]); 


// Creates the route
app.config(function($routeProvider) {

// Link to  Form View
    $routeProvider.when("/form", {
        templateUrl: "views/form.html",
        controller: 'formController'

    });

// Link to  Result View
    $routeProvider.when("/result", {
        templateUrl: "views/result.html",
        controller: 'resultController'
});
    $routeProvider.when("/about",{
    	templateUrl: "views/about.html",
    	controller: "aboutController"
    });


//Main Page View


    $routeProvider.otherwise({
        templateUrl: "views/surprise.html",
    });
});

})();
