function SpicyCtrl($scope) {
  $scope.spice = 'very';
  $scope.spicy = function(spice) {
    $scope.spice = spice;
  };
}
