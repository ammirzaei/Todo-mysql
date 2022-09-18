const todoUtils = require("../Utils/todos");

class Todo {
  constructor(id, text, isCompleted = false) {
    this.id = id;
    this.text = text;
    this.isCompleted = isCompleted;
  }

  AddTodo(callback) {
    todoUtils.fetchTodos((todos) => {
      const filterTodo = todos.filter((todo) => todo.id === this.id);
      if (filterTodo.length === 0) {
        todos.push(this);
        todoUtils.saveTodos(todos, (err) => {
          callback(err);
        });
      } else callback("Duplicate Id!");
    });
  }
  static GetAllTodo(callback) {
    todoUtils.fetchTodos((todos) => {
      const filterCompletedTodos = todos.filter(
        (todo) => todo.isCompleted === true
      );
      const filterRemainingTodos = todos.filter(
        (todo) => todo.isCompleted === false
      );
      callback(
        todos,
        filterCompletedTodos.length,
        filterRemainingTodos.length
      );
    });
  }
  static DeleteTodo(id, callback) {
    todoUtils.fetchTodos((todos) => {
      const filterTodos = todos.filter((todo) => todo.id != id);
      if (filterTodos.length !== todos.length) {
        todoUtils.saveTodos(filterTodos, (err) => {
          callback(err);
        });
      } else callback("Not Found Todo!");
    });
  }
  static ChangeToCompleted(id, callback) {
    todoUtils.fetchTodos((todos) => {
      const todoIndex = todos.findIndex((todo) => todo.id == id);
      if (todoIndex !== -1) {
        todos[todoIndex].isCompleted = true;
        todoUtils.saveTodos(todos, (err) => {
          callback(err);
        });
      } else callback("Not Found Todo!");
    });
  }
  // static GetCountTodoCompleted() {
  //   todoUtils.fetchTodos((todos) => {
  //     console.log('ss');

  //   });
  // }
}

module.exports = Todo;
