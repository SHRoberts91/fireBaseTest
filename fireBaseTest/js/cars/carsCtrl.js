angular.module('carFire')
.controller('carsCtrl', function($scope, carsService, carsRef){
  $scope.createNewCar = function(newCar) {
    carsService.addCar(newCar);
  };
  $scope.cars = carsRef;
});
