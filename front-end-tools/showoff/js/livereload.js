(function() {
  'use strict';

  // instatag is a global variable
  var token = '10494940.3fa15a3.08c78585c26f470e9048d164cd1aaf0b';
  var spinnerHtml = '<div class="css_spinner"><div class="half left"><div class="band"></div></div><div class="half right"><div class="band"></div></div></div>';

  var $imageContainer = $('#image-container');
  var renderOutput = function(output) {
    $imageContainer.html(output);
  };

  var parseData = function(data) {
    var output = '';
    if (data && data.data) {
      var items = data.data;
      for (var i = 0; i < items.length; i++) {
        // standard_resolution / thumbnail / low_resolution
        var image = items[i].images.thumbnail.url;
        output += '<img src="' + image + '" />';
      }
    } else {
      console.log('Couldn\'t get the right data');
    }
    renderOutput(output);
  };

  var showError = function() {
    renderOutput('<p>Couln\'t connect to the intertubes</p>');
  };

  var fireRequest = function() {
    $.ajax({
      'url': 'https://api.instagram.com/v1/tags/' + instatag + '/media/recent',
      'cache': false,
      'data': {
        'access_token': token
      },
      'dataType': 'jsonp',
      'error': showError,
      'success': parseData
    });
  };

  var init = function () {
    $('#tag').text('#' + instatag);
    $imageContainer.html(spinnerHtml);
    fireRequest();
  };

  init();
})();
