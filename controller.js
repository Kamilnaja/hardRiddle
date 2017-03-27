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
            template: 'Welcome user on default'
        })
        .when('/another', {
            template: 'Welcome user again'
        })
        .when('/thirdriddle', {
            template: 'Let fight with third riddle'
        })
        .otherwise({
            redirectTo: '/'
        })
})