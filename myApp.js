/**
 * Created by Kamil on 2017-03-27.
 */

var app = angular.module('mainApp', ['ngRoute']);

app.config(['$locationProvider', function ($locationProvider) {
    $locationProvider.hashPrefix('');
}]);

//routings
app.config(function($routeProvider) {
    $routeProvider
        .when('/', {
            templateUrl: 'views/home.html',
            controller: 'PasswordController'
        })
        .when('/opening', {
            templateUrl: 'views/opening.html',
            controller: 'PasswordController'
        })
        .when('/xyz', {
            templateUrl: 'views/1-1.html',
            controller: 'PasswordController'
        })
        .when('/meeting', {
            templateUrl: 'views/meeting.html',
            controller: 'PasswordController'

        })
        .when('/water', {
            templateUrl: 'views/water.html',
            controller: 'PasswordController'
        })
        .when('/uop', {
            templateUrl: 'views/uop',
            controller: 'PasswordController'
        })
        .when('/last', {
            templateUrl: 'views/last.html',
            controller: 'PasswordController'
        })
        .when('/help', {
            templateUrl: 'views/help.html',
            controller: 'PasswordController'
        })
        .otherwise({
            redirectTo: '/'
        })
});


