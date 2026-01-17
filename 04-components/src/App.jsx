import React from 'react'
import Card from './components/Card'
import Navbar from './components/Navbar'

const App = () => {
  const user = 'Harsh'
  const age = 25
  return (
    <div>
      <Card />
      <Card />
      <Navbar />
      <Navbar />
    </div>
  )
}

export default App
