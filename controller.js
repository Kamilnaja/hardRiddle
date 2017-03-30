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
        .when('/opening', {
            templateUrl: 'views/opening.html'
        })
        .when('/xyz', {
            templateUrl: 'views/1-1.html'
        })
        .when('/meeting', {
            templateUrl: 'views/meeting.html'
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
    $scope.pass1 = "urban exploration";
    $scope.pass2 = "murder";
    $scope.passValue = false;
    $scope.compare = function () {
        $scope.result = angular.equals($scope.pass1, $scope.riddleAnswer1);
        $scope.result2 = angular.equals($scope.pass2, $scope.riddleAnswer2);
        if ($scope.result === true){
            $scope.passValue1 = true;
        }
        if ($scope.result2 === true){
            $scope.passValue2 = true;
        }

    }
}]);

//declaration of second controller


