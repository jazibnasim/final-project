$http({
        method: 'GET',
        url:'https://maps.googleapis.com/maps/api/place/textsearch/json?&key=AIzaSyCTKPL7rYEGDsf6NT_AFO8991Gb9QY3C-Y'
        params: {
            'query': 'grandcircus'
        }
        }).then(function successCallback(response){
            console.log("success", response);
         }, function errorCallback(response){
            console.log("Error", response);
   });

   ////
   var insert  = 'meijer';
   $http.get('https://maps.googleapis.com/maps/api/place/textsearch/json?query='
   + insert +
   '&key=AIzaSyCTKPL7rYEGDsf6NT_AFO8991Gb9QY3C-Y').then(successCallback, errorCallback);



//
results.photos[6].photo_reference


$http({
        method: 'GET',
        url:'https://maps.googleapis.com/maps/api/place/photo?maxwidth=600&key=AIzaSyCTKPL7rYEGDsf6NT_AFO8991Gb9QY3C-Y'
        params: {
            'photoreference': '',

        }
        }).then(function successCallback(response){
            console.log("success", response);
         }, function errorCallback(response){
            console.log("Error", response);
   });
