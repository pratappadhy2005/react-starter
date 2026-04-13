import ProfileCard from "./components/styledemo/ProfileCard"
import StyleCard from "./components/styledemo/StyleCard"
import EventDemo from "./components/eventdemo/EventDemo"
import Copy from "./components/eventdemo/Copy"
import { useState } from "react"
const App = () => {
  const [count, setCount] = useState(0)
  console.log(count);

  return (
    <div>
      <h1>Count: {count}</h1>
      <button style={{ padding: '10px 20px' }} onClick={() => setCount(count + 1)}>+</button><br />
      <br />
      <button style={{ padding: '10px 20px' }} onClick={() => setCount(count - 1)}>-</button>
    </div>
  )
}

export default App