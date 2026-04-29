import './App.css'
import SignUpForm from './components/SignUpForm'

function Greeting({ name, age }) {
  return (
    <div>
      <h1>Hello React, I am {name} and I am {age} years old.</h1>
    </div>
  )
}
function App() {
  return (
    <div>
      <SignUpForm />
    </div>
  )
}

export default App