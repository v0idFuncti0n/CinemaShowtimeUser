'use strict';

angular.module('myApp.cinema', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/cinema', {
    templateUrl: 'cinema/cinema.html',
    controller: 'CinemaCtrl'
  });
}])

.controller('CinemaCtrl', ["$scope","$http", function($scope,$http) {
    let movieContainer = angular.element(document.querySelector(".movies-container"))[0];
    let calendarContainer = angular.element(document.querySelector(".calendar-container"))[0];

    $scope.calendarScrollLeft = function ($event) {
        $event.preventDefault();
        calendarContainer.scrollLeft += $event.deltaY;
    }

    $scope.movieScrollLeft = function ($event) {
        $event.preventDefault();
        movieContainer.scrollLeft += $event.deltaY;
    };

    $scope.todayDate = [];
    //to get Movies
    $scope.allMovies = [];

    $scope.getDays = function () {
        var tempDate = [];
        tempDate.push(new Date());
        for (var i = 1; i <= 14; i++) {
            tempDate.push(new Date());
            tempDate[i].setDate(tempDate[i].getDate() + i);
        }
        $scope.todayDate = tempDate;
    };
    $scope.getDays();

    $scope.test= function (date){
        var sentDate = new Date(date);
        var dateString = sentDate.getFullYear() + "-" + (sentDate.getMonth() + 1) +"-" + sentDate.getDate();
        // use dateString to send request from the API ( get movieByDate)
        $http.get("http://localhost:8080/api/movies/byDate/" + dateString)
            .then(function success(response){
                $scope.allMovies = response.data;
                console.log(response.data);
            },function error(response){
                console.log(response);
            });

        console.log(dateString);
    };

    $scope.test($scope.todayDate[0]);

    $scope.activate = function ($event) {
        let dayItems = angular.element(document.querySelector(".active"));
        for (let i = 0; i < dayItems.length; i++) {
            // Remove the class 'active' if it exists
            dayItems[i].classList.remove('active');
        }
        $event.currentTarget.classList.add("active");
        console.log($event.currentTarget);
    }
}]);