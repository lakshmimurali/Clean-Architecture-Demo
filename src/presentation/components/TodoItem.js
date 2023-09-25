// presentation/components/TodoItem.js
import React from 'react';

const TodoItem = ({ text, onClick, completed }) => (
  <li
    onClick={onClick}
    style={{ textDecoration: completed ? 'line-through' : 'none' }}
  >
    {text}
  </li>
);

export default TodoItem;
