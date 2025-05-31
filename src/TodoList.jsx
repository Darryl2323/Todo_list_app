import React, { useState } from 'react';
import './TodoList.css'; // Import CSS

function TodoList() {
  const [todos, setTodos] = useState([]);
  const [input, setInput] = useState('');

  const handleAddTodo = (e) => {
    e.preventDefault();
    if (input.trim() === '') return;
    setTodos([...todos, { text: input, completed: false }]);
    setInput('');
  };

  const toggleTodo = (index) => {
    const newTodos = [...todos];
    newTodos[index].completed = !newTodos[index].completed;
    setTodos(newTodos);
  };

  const deleteTodo = (index) => {
    const newTodos = todos.filter((_, i) => i !== index);
    setTodos(newTodos);
  };

  return (
    <div className="todo-container">
      <h2>My Todo List🖊️ </h2>
      <form onSubmit={handleAddTodo} className="todo-form">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Enter a task"
          className="todo-input"
        />
        <button type="submit" className="add-btn">Add</button>
      </form>
      <ul className="todo-list">
        {todos.map((todo, index) => (
          <li key={index} className="todo-item">
            <input
              type="checkbox"
              checked={todo.completed}
              onChange={() => toggleTodo(index)}
            />
            <span className={todo.completed ? 'completed' : ''}>
              {todo.text}
            </span>
            <button onClick={() => deleteTodo(index)} className="delete-btn">Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TodoList;