angular.module('carFire')
.controller('carCtrl', function($scope, carsService, carRef, commentsRef){
//   var currentCarId = $stateParams.carId;
  $scope.car = carRef;
//   $scope.comments = carsService.getComments(currentCarId);
  $scope.comments = commentsRef;

  $scope.addComments = function(comment){
    carsService.addComments(comment, currentCarId );
  };
});
