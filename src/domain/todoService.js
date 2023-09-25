// domain/todoService.js
import Todo from './todoModel';

class TodoService {
  // Simulated database (for demonstration)
  todos = [];

  getAll() {
    return this.todos;
  }

  add(text) {
    const newTodo = new Todo(Date.now(), text, false);
    this.todos.push(newTodo);
    return newTodo;
  }

  toggle(id) {
    const todo = this.todos.find((t) => t.id === id);
    if (todo) {
      todo.completed = !todo.completed;
    }
    return todo;
  }
}

export default TodoService;
