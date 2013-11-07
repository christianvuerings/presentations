// isPublic: true

angular.service('parcService', ['$route', function($route) {
  if (!$route.current.isPublic) {
    // Redirect
  }
}]);
