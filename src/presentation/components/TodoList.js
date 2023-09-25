// presentation/components/TodoList.js
import React from 'react';

const TodoList = ({ todos, toggleTodo }) => (
  <ul>
    {todos.map((todo) => (
      <li
        key={todo.id}
        onClick={() => toggleTodo(todo.id)}
        style={{ textDecoration: todo.completed ? 'line-through' : 'none' }}
      >
        {todo.text}
      </li>
    ))}
  </ul>
);

export default TodoList;
