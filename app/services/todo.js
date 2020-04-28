angular
  .module('todoApp.todoService', [])
  .service('TodoService', function() {
    const todos = [{
      id: 1,
      description: 'Todo 1'
    }, {
      id: 2,
      description: 'Todo 2'
    }]
    let autoIncr = 3;

    return {
      get(id) {
        return todos.find(_ => _.id === id)
      },
      list() {
        return todos;
      },
      add(description) {
        if (!!description) {
          todos.push({ id: autoIncr, description })
          autoIncr++;
        }
      },
      remove(id) {
        const index = todos.findIndex(_ => _.id === id);
        if (index === -1) {
          return;
        }
        todos.splice(index, 1);
      }
    }
  });
