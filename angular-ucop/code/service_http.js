function Ctrl($http, $scope) {
  $http.get('twitter.com/UC_Newsroom').success(function(data){
    $scope.tweets = data.results;
  });
}
