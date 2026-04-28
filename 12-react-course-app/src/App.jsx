import './App.css'
import { useState } from 'react'

function Greeting({ name, age }) {
  return (
    <div>
      <h1>Hello React, I am {name} and I am {age} years old.</h1>
    </div>
  )
}
function App() {
  const [showGreeting, setShowGreeting] = useState(true);
  function toggleShowGreeting() {
    showGreeting ? setShowGreeting(false) : setShowGreeting(true)
  }
  return (
    <div>
      <button onClick={toggleShowGreeting}>Click Me</button>
      {
        showGreeting && <Greeting name="Prayan" age="30" />
      }
    </div>
  )
}

export default App