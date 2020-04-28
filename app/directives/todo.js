angular
  .module('todoApp.todoDirective', ['todoApp.todoService'])
  .directive('todo', ['TodoService', function(TodoService) {
    return {
      restrict: 'E',
      scope: {
        id: '@'
      },
      templateUrl: 'directives/todo.html',
      link: (scope, element, attrs) => {
        const id = attrs.id;
        scope.todo = TodoService.get(parseInt(id));
        scope.removeTodo = id => TodoService.remove(id);
      }
    }
  }]);

