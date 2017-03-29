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
    $scope.riddleAnswer1 = "";
    $scope.pass1 = "";
    $scope.evaluatePassword = function () {
        //sprawdź czy jest równe hasło i wartośc inputa
        if (userAnswer === $scope.secret) {
//przenieś do następnej strony
        }
    }
});

app.controller('ExampleController', ['$scope', function($scope){
    $scope.riddle1 = {};
    $scope.pass1 = "zegar";
    $scope.passValue = false;
    $scope.compare = function () {
        $scope.result = angular.equals($scope.pass1, $scope.riddleAnswer1);
        if ($scope.result === true){
            $scope.passValue = true;
        }
    }
}]);

//declaration of second controller


