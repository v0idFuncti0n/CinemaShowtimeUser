'use strict';

angular.module('myApp.cinema', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/cinema', {
    templateUrl: 'cinema/cinema.html',
    controller: 'CinemaCtrl'
  });
}])

.controller('CinemaCtrl', ["$scope", function($scope) {
    let movieContainer = angular.element(document.querySelector(".movies-container"))[0];
    let calendarContainer = angular.element(document.querySelector(".calendar-container"))[0];
    $scope.calendarScrollLeft = function ($event) {
        $event.preventDefault();
        calendarContainer.scrollLeft += $event.deltaY;
    }

    $scope.movieScrollLeft = function ($event) {
        $event.preventDefault();
        movieContainer.scrollLeft += $event.deltaY;
    }
}]);