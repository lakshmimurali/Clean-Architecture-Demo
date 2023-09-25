// presentation/App.js
import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addTodo, toggleTodo } from '../application/actions';
import { selectTodos } from '../application/selectors';
import TodoList from './components/TodoList';

const App = () => {
  const todos = useSelector(selectTodos);
  const dispatch = useDispatch();
  const [newTodoText, setNewTodoText] = useState('');

  const handleAddTodo = () => {
    if (newTodoText.trim() !== '') {
      dispatch(addTodo(newTodoText));
      setNewTodoText('');
    }
  };

  return (
    <div>
      <h1>Todo List</h1>
      <input
        type="text"
        value={newTodoText}
        onChange={(e) => setNewTodoText(e.target.value)}
      />
      <button onClick={handleAddTodo}>Add</button>
      <TodoList todos={todos} toggleTodo={(id) => dispatch(toggleTodo(id))} />
    </div>
  );
};

export default App;
