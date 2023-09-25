// application/reducers.js
import { ADD_TODO, TOGGLE_TODO } from './actions';
import { loadTodos, saveTodos } from '../infrastructure/localStorage';
import TodoService from '../domain/todoService'; // Import the domain service

// ...

const initialState = {
  todos: loadTodos(),
};

const todoReducer = (state = initialState, action) => {
  const todoService = new TodoService(); // Create an instance of the domain service

  switch (action.type) {
    case ADD_TODO:
      const newTodo = todoService.add(action.payload);
    // ...

    case TOGGLE_TODO:
      const toggledId = action.payload;
      const toggledTodo = todoService.toggle(toggledId);
    // ...

    default:
      return state;
  }
};

export default todoReducer;
