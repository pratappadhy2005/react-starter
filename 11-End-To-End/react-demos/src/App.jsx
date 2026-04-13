import { useState } from "react"
const App = () => {
  const [count, setCount] = useState(0)
  console.log(count);

  //Array Destructuring
  const [names, setNames] = useState(['Pratappadhy', 'Pratap', 'Padhy'])
  console.log(names);

  return (
    <div>
      <h1>Count: {count}</h1>
      <button style={{ padding: '10px 20px' }} onClick={() => setCount(count + 1)}>+</button><br />
      <br />
      <button style={{ padding: '10px 20px' }} onClick={() => setCount(count - 1)}>-</button>
      {
        names.map((name, index) => (
          <div key={index}>{name}</div>
        ))
      }

      <button style={{ padding: '10px 20px' }} onClick={() => setNames([...names, 'Prayan'])}>Add Name</button>
      <br />
      <button style={{ padding: '10px 20px' }} onClick={() => setNames(names.filter((name) => name !== 'Pratap'))}>Remove Name</button>
      <br />
      <button style={{ padding: '10px 20px' }} onClick={() => setNames(names.map((name) => (name === 'Padhy' ? 'Prayan' : name)))}>Update One Friend</button>
    </div>
  )
}

export default App