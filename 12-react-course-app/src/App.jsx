import './App.css'
import { Route, Routes } from 'react-router-dom'
import Navbar from './components/Navbar'
import { useState } from 'react'
import AuthContext from './components/AuthContext'
import { useContext } from 'react'
import UseEffect from './components/sideeffects/UseEffect'
import FetchUserData from './components/sideeffects/FetchUserData'

function Profile() {
  const { user } = useContext(AuthContext)
  return (
    <section className="page">
      <h1>Profile</h1>
      <p className="profile-tag">Name: {user.name}</p>
      <p>Here you could show more user info from the context.</p>
    </section>
  )
}

function Login() {
  const [name, setName] = useState('')
  const { user, setUser } = useContext(AuthContext)

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!name.trim()) {
      return;
    }
    setUser({ name, isAuthenticated: true })
  }

  return (
    <section className="page">
      <h1>Login</h1>
      <p>Sign in to access your account.</p>

      <form onSubmit={handleSubmit}>
        <label htmlFor="username">Username:</label>
        <input type="text" id="username" name="username" onChange={(e) => setName(e.target.value)} />
        <button type="submit">Login</button>
      </form>
      <p>Authenticated: {user.isAuthenticated ? 'Yes' : 'No'}</p>
    </section>
  )
}

function Home() {
  const { user } = useContext(AuthContext)
  return (
    <section className="page">
      <h1>Home</h1>
      User is Authenticated: {user.isAuthenticated ? 'Yes' : 'No'}
      <p>Welcome to the home page. {user.name}</p>
    </section>
  )
}

function About() {
  return (
    <section className="page">
      <h1>About</h1>
      <p>This page can describe your app.</p>
    </section>
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
  const [user, setUser] = useState({ name: '', isAuthenticated: false })

  function handleLogin() {
    setUser({ name: 'Pratappadhy', isAuthenticated: true })
  }

  function handleLogout() {
    setUser({ name: '', isAuthenticated: false })
  }

  return (
    <div>
      <FetchUserData />
    </div>
  )
}

export default App
