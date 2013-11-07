function Ctrl($http, $scope) {
  $http.get('blogs.parc.com/feed/').success(function(data){
    $scope.items = data.results;
  });
}
