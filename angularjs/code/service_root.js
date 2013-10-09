angular.module('App', []);

function Ctrl($scope, $rootElement) {
  $scope.rootElement = $rootElement[0];
}
