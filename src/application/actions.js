// application/actions.js
import TodoService from '../domain/todoService'; // Import the domain service

// ...

export const addTodo = (text) => (dispatch, getState) => {
  const todoService = new TodoService(); // Create an instance of the domain service
  const newTodo = todoService.add(text);
  dispatch({
    type: ADD_TODO,
    payload: newTodo,
  });
};

export const toggleTodo = (id) => (dispatch, getState) => {
  const todoService = new TodoService(); // Create an instance of the domain service
  const toggledTodo = todoService.toggle(id);
  dispatch({
    type: TOGGLE_TODO,
    payload: toggledTodo,
  });
};
