import React, { useState } from 'react'

const ExampleOne = () => {
    const [counter, setCounter] = useState(() => {
        const initialValue = 10
        return initialValue
    })

    return (
        <div>
            <h1>ExampleOne: {counter}</h1>
            <button onClick={() => setCounter(counter + 1)}>Click me</button>
        </div>
    )
}

export default ExampleOne
