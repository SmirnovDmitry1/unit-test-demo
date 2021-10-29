import { useState } from 'react'
import './App.css';
import Todo from './components/todo'


function App() {
  const todos = [
    {id: 1, title: 'olololo', completed: false},
    {id: 2, title: 'alalala', completed: true},
  ]

  return (
    <div className="App">
      {
        todos.map(item => <Todo todo={item} />)
      }
    </div>
  );
}

export default App;
