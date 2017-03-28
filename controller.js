/**
 * Created by Kamil on 2017-03-27.
 */

var app = angular.module('mainApp', ['ngRoute']);

app.config(['$locationProvider', function ($locationProvider) {
    $locationProvider.hashPrefix('');
}]);

app.config(function($routeProvider) {
    $routeProvider
        .when('/', {
            templateUrl: 'views/home.html',
            controller: 'homeController'

        })
        .when('/another', {
            templateUrl: 'views/firstRiddle.html'
        })
        .otherwise({
            redirectTo: '/'
        })
});

app.controller('MyController', function ($scope) {
    $scope.userAnswer = "";
    $scope.pass1 = "secret";
    $scope.evaluatePassword = function () {
        //sprawdź czy jest równe hasło i wartośc inputa
        if (userAnswer === $scope.secret) {
            console.log("dupa");
        }
    }
});
//declaration of second controller
app.controller('homeController', function ($scope) {
});