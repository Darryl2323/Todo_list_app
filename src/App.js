import React from 'react';
import TodoList from './TodoList';

function App() {
  return (
    <div className="App">
      <h1 style={{ textAlign: 'center', marginTop: '20px' }}>📒 Another day, Another to do list 📌 </h1>
      <TodoList />
    </div>
  );
}

export default App;