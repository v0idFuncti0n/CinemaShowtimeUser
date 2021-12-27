'use strict';

angular.module('myApp.cinema', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/cinema', {
    templateUrl: 'cinema/cinema.html',
    controller: 'CinemaCtrl'
  });

  var app = angular.module('myApp', []);
    app.controller( "MyCtrl", ['$scope', function($scope) {
        $scope.date = new Date();
    }]);
}])

.controller('CinemaCtrl', ["$scope", function($scope) {
    let movieContainer = angular.element(document.querySelector(".movies-container"))[0];
    let calendarContainer = angular.element(document.querySelector(".calendar-container"))[0];
    $scope.calendarScrollLeft = function ($event) {
        $event.preventDefault();
        calendarContainer.scrollLeft += $event.deltaY;
    };

    $scope.movieScrollLeft = function ($event) {
        $event.preventDefault();
        movieContainer.scrollLeft += $event.deltaY;
    };

    $scope.todayDate = [];
    var tempDate = [];
    tempDate.push(new Date());
    for (var i = 1; i <= 14; i++) {
        tempDate.push(new Date());
        tempDate[i].setDate(tempDate[i].getDate() + i);
    }
    $scope.todayDate = tempDate;
    $scope.test= function (date){
        var sentDate = new Date(date);
        var dateString = sentDate.getFullYear() + "-" + sentDate.getMonth() +"-" + sentDate.getDay();
        // use dateString to send request from the API ( get movieByDate)

        console.log(dateString);
    };
}]);