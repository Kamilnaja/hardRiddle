/**
 * Created by Kamil on 2017-03-27.
 */
var app = angular.module('mainApp', ['ngRoute']);

app.config(function($routeProvider) {
    $routeProvider
        .when('/', {
            template: 'Welcome user on default'
        })
        .when('/another', {
            template: 'Welcome user again'
        })
        .otherwise({
            redirectTo: '/'
        })
})