(function() {
var app = angular.module("currentsee", ["ngRoute"]); // create the module

app.config(function($routeProvider) {
    $routeProvider.when("/form", {
        templateUrl: "views/form.html",
        controller: 'formController'

    });
    $routeProvider.when("/result", {
        templateUrl: "views/result.html",
        controller: 'resultController'



    });


    $routeProvider.otherwise({
        templateUrl: "views/surprise.html",
    });
});

})();
