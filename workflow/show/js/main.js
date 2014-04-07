(function(angular) {
  'use strict';

  var TOKEN = '10494940.05eee21.4bd37daf3c6f483ead52603fc3424614';
  var instatag = 'howestgoesusa';

  angular.module('howestgoesusa.controllers', []);
  var ccdash = angular.module('howestgoesusa', [
    'howestgoesusa.controllers'
  ]);

  angular.module('howestgoesusa.controllers').controller('MainController', function($http, $scope) {

    var parsePictures = function(data) {
      var output = {};

      // Group items by 2
      var j = 0;
      for (var i = 0; i < data.data.length; i++) {
        var item = data.data[i];

        if (!output[i - j]) {
          output[i - j] = [];
        }
        output[i - j].push(item);

        if (j === 1) {
          j = 0;
        } else {
          j++;
        }
      }

      $scope.items = output;

      window.setTimeout(function() {
        new TiltSlider( document.getElementById( 'slideshow' ) );
      }, 3000);
    };

    var getPictures = function() {
      var url = 'https://api.instagram.com/v1/tags/' + instatag + '/media/recent';

      $http.jsonp(url, {
        params: {
          'access_token': TOKEN,
          'callback': 'JSON_CALLBACK'
        }
      }).success(parsePictures);
    };

    getPictures();
  });

})(window.angular);
