angular.module('carFire').service('carsService', function($firebaseArray, $firebaseObject){
  var url = 'https://carfire9000.firebaseio.com/';

  this.getCars = function() {
    var ref = new Firebase(url+'cars');
    return $firebaseArray(ref);
  };

  this.getCar = function(carId) {
    var ref = new Firebase(url+'cars/'+carId);
    return $firebaseObject(ref);
  };

  this.getComments = function(carId) {
    var ref = new Firebase(url+'comments/'+carId);
    return $firebaseArray(ref);
  };
  this.addCar= function(newCar) {
    var ref = new Firebase(url+'/cars');
    return $firebaseArray(ref).$add(newCar);
  };
  this.addComments = function(comment,carId){
    var ref = new Firebase(url+'comments/'+carId);
    return $firebaseArray(ref).$add(comment);
  };
});
