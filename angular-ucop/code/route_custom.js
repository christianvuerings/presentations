// isPublic: true

angular.service('ucopService', ['$route', function($route) {
  if (!$route.current.isPublic) {
    // Redirect
  }
}]);
