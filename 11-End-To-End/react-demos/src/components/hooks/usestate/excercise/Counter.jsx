import React, { useState } from 'react'

const Counter = () => {
    const [counter, setCounter] = useState(0)
    const clickHandler = () => {
        setCounter(counter + 1)
    }
    return (
        <div>
            <h1>Counter: {counter}</h1>
            <button onClick={clickHandler}>Click me</button>
        </div>
    )
}

export default Counter