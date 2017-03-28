/**
 * Created by Kamil on 2017-03-27.
 */
var app = angular.module('mainApp', ['ngRoute']);
app.config(['$locationProvider', function ($locationProvider) {
    $locationProvider.hashPrefix('');
}]);
app.controller('MyController', function ($scope) {

});

app.config(function($routeProvider) {
    $routeProvider
        .when('/', {
            template:
                `<h1>Welcome user on default</h1>
                <p>Lets fight with first riddle</p>
                <p>Gdy będziesz gotowy, wpisz odpowiedź w input</p>
`
        })
        .when('/another', {
            template: `Welcome user again`
        })
        .when('/thirdriddle', {
            template: `Let fight with third riddle`
        })
        .otherwise({
            redirectTo: '/'
        })
})