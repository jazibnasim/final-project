$http({
        method: 'POST',
        url:'https://maps.googleapis.com/maps/api/place/textsearch/json?'
        header: {
            'query': 'grandcircus',
            'key': 'AIzaSyCTKPL7rYEGDsf6NT_AFO8991Gb9QY3C-Y'
        }
        }).then(function successCallback(response){
            console.log("success", response);
         }, function errorCallback(response){
            console.log("Error", response);
   });
