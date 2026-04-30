import './App.css'
import SignUpForm from './components/SignUpForm'
import { Route, Routes, Link } from 'react-router-dom'

function Greeting({ name, age }) {
  return (
    <div>
      <h1>Hello React, I am {name} and I am {age} years old.</h1>
    </div>
  )
}

function Home() {
  return (
    <div>
      <h1>Home</h1>
    </div>
  )
}

function About() {
  return (
    <div>
      <h1>About</h1>
    </div>
  )
}

function NotFound() {
  return (
    <div>
      <h1>404</h1>
    </div>
  )
}

function Footer() {
  return (
    <div>
      <p>Footer</p>
    </div>
  )
}

function App() {
  return (
    <div>
      <nav style={{ display: 'flex', justifyContent: 'center' }}>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About</Link></li>
        </ul>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/*" element={<NotFound />} />
      </Routes>
      <div>
        <Footer />
      </div>
    </div>
  )
}

export default App