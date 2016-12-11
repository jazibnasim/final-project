//this is his revision of our result controller section -neal

app.controller('resultController', function($scope, currentseeFactory, $http){
    var searchWords = currentseeFactory.getsearchWords();
    console.log(searchWords);
    var name = searchWords.name
    var city = searchWords.city
    $scope.photos = [];
    $scope.tweets = [];
    
    activate();

    function activate(){
        //get photos
        return dataservice.getPhotos(name, city)
            .then(function(data) {
                $scope.photos = data;
            });
        //get tweets
        return dataservice.getTweets(name, city)
            .then(function(data) {
                $scope.tweets = data;
            });
    };

    function dataservice($http) {
    	return {
            getPhotos: getPhotos,
            getTweets: getTweets
        };
        function getPhotos(name, city) {
            var params: {
                'query': name + " " + city,
                'key': 'AIzaSyCTKPL7rYEGDsf6NT_AFO8991Gb9QY3C-Y'
            }
            return $http.get('https://maps.googleapis.com/maps/api/place/textsearch/json', params)
                .then(getPhotosComplete)
                .catch(getPhotosFailed);

            function getPhotosComplete(response) {
                console.log("success", response);
                var photos =[];
                for(var i = 0; i <= 5; i++) {
                  photos.push(var photosrc = "https://maps.googleapis.com/maps/api/place/photo?maxwidth=350&photoreference="+response.data.results[i].photos[0].photo_reference+"&key=AIzaSyCTKPL7rYEGDsf6NT_AFO8991Gb9QY3C-Y");
                }
                return photos;
            }

            function getPhotosFailed(error) {
                console.log('Failed to get photos');
            }
        }
        function getTweets(name, city){
            return $http.get('/tweets/:' + name + '/:' + city)
            .then(getTweetsComplete)
                .catch(getTweetsFailed);

            function getTweetsComplete(response) {
                return response.data;
            }

            function getTweetsFailed(error) {
                console.log('Failed to get tweets');
            }
        }
    }
    
    
});
