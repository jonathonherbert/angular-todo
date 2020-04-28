'use strict';

angular.module('todoApp.viewsTodo', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/todo', {
    templateUrl: 'views/todo/todo.html',
    controller: 'TodoCtrl'
  });
}])

.controller('TodoCtrl', ['$scope', 'TodoService', function($scope, TodoService) {
  $scope.todos = TodoService.list();

  $scope.addCurrentTodo = () => TodoService.add($scope.currentTodoDescription);
}]);

