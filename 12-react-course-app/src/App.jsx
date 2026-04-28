import './App.css'
import { useState } from 'react'
import TodoList from './components/TodoList'

function Greeting({ name, age }) {
  return (
    <div>
      <h1>Hello React, I am {name} and I am {age} years old.</h1>
    </div>
  )
}
function App() {
  const [name, setName] = useState('');
  function handleChange(e) {
    setName(e.target.value);
  }
  return (
    <div>
      <input onChange={handleChange} type="text" placeholder="Enter your name" />
      <Greeting name={name} age="30" />
      <TodoList />
    </div>
  )
}

export default App