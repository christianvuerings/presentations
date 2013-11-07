function SpicyCtrl($scope) {
  $scope.customSpice = 'very';
  $scope.spicy = function(spice) {
    $scope.spice = spice;
  };
}
