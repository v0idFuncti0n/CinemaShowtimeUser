'use strict';

angular.module('myApp.cinema', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/cinema', {
    templateUrl: 'cinema/cinema.html',
    controller: 'CinemaCtrl'
  });
}])

.controller('CinemaCtrl', [function() {

}]);