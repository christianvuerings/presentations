(function(angular, TiltSlider) {
  'use strict';

  var TOKEN = '10494940.05eee21.4bd37daf3c6f483ead52603fc3424614';
  var instatag = 'howestgoesusa';

  angular.module('howestgoesusa.controllers', []);
  angular.module('howestgoesusa', ['howestgoesusa.controllers']);

  angular.module('howestgoesusa.controllers').controller('MainController', function($http, $scope) {

    var parsePictures = function(data) {
      $scope.items = data.data;

      window.setTimeout(function() {
        var tilt = new TiltSlider(document.getElementById('slideshow'));
        tilt.options.speed = 100;
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

})(window.angular, window.TiltSlider);
