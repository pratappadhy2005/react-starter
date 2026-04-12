import React from 'react'
import Card from './components/Card'

const App = () => {
  return (
    <div className="parent">
      <Card user="Pratap" age={25} img="https://randomuser.me/api/portraits/men/1.jpg" />
      <Card user="Aman" age={24} img="https://randomuser.me/api/portraits/men/2.jpg" />
      <Card user="Ankur" age={23} img="https://randomuser.me/api/portraits/men/3.jpg" />
    </div>
  )
}

export default App
