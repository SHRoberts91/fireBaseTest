var app = angular.module('carFire', ['ui.router', 'firebase']);
app.config(function ($stateProvider, $urlRouterProvider, $httpProvider) {
    $stateProvider
    .state('Cars', {
      url: '/cars',
      templateUrl: 'js/cars/carsTmpl.html',
      controller: 'carsCtrl',
      resolve: {
        carsRef: function(carsService) {
            return carsService.getCars();
        }
      }
    })
    .state('Car', {
      url: '/cars/:carId',
      templateUrl: 'js/car/carTmpl.html',
      controller: 'carCtrl',
      resolve: {
        carRef: function(carsService, $stateParams) {
            return carsService.getCar($stateParams.carId);
        },
        commentsRef: function(carsService, $stateParams) {
            return carsService.getComments($stateParams.carId);
        }
      }
    });
    $urlRouterProvider.otherwise('/cars');
  });
