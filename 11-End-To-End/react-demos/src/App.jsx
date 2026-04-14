import { useState } from "react"
const App = () => {
  const [count, setCount] = useState(0)
  console.log(count);
  const [movie, setMovie] = useState({
    name: 'Avatar',
    director: 'James Cameron',
    year: 2009,
  })

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

      <h1>Movie Name: {movie.name}</h1>
      <h1>Movie Director: {movie.director}</h1>
      <h1>Movie Year: {movie.year}</h1>
      <button style={{ padding: '10px 20px' }} onClick={() => setMovie({ ...movie, name: 'Avatar 2' })}>Update Movie Name</button>
      <button style={{ padding: '10px 20px' }} onClick={() => setMovie({ ...movie, director: 'Pratap Padhy' })}>Update Movie Director</button>
      <button style={{ padding: '10px 20px' }} onClick={() => setMovie({ ...movie, year: 2010 })}>Update Movie Year</button>
    </div>
  )
}

export default App