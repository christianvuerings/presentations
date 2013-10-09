function Ctrl($http, $scope) {
  $http.get('facebook.com/gradiv/rss.php').success(function(data){
    $scope.feeds = data.results;
  });
}
