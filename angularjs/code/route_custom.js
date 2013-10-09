// isPublic: true

angular.service('gradDivService', ['$route', function($route) {
  if (!$route.current.isPublic) {
    // Redirect
  }
}]);
