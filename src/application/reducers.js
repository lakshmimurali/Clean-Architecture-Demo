// application/reducers.js
import { ADD_TODO, TOGGLE_TODO } from './actions';
import { loadTodos, saveTodos } from '../infrastructure/localStorage';

const initialState = {
  todos: loadTodos(),
};

const todoReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TODO:
      const newTodo = {
        id: Date.now(),
        text: action.payload,
        completed: false,
      };
      const updatedTodos = [...state.todos, newTodo];
      saveTodos(updatedTodos);
      return { todos: updatedTodos };

    case TOGGLE_TODO:
      const toggledId = action.payload;
      const updatedTodosToggled = state.todos.map((todo) =>
        todo.id === toggledId ? { ...todo, completed: !todo.completed } : todo
      );
      saveTodos(updatedTodosToggled);
      return { todos: updatedTodosToggled };

    default:
      return state;
  }
};

export default todoReducer;
