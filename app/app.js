'use strict';

// Declare app level module which depends on views, and core components
angular.module('todoApp', [
    'ngRoute',
    'todoApp.viewsHome',
    'todoApp.viewsTodo',
    'todoApp.todoService',
    'todoApp.todoDirective'
  ]).
  config(['$locationProvider', '$routeProvider', function($locationProvider, $routeProvider) {
    $locationProvider.hashPrefix('!');
    $routeProvider.otherwise({redirectTo: '/home'});
  }]);
