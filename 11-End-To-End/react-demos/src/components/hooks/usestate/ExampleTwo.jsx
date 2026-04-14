import React, { useState } from 'react'

const ExampleTwo = () => {
    const [random, setRandom] = useState(() => {
        const initialValue = Math.floor(Math.random() * 100)
        return initialValue
    })

    const generateRandom = () => {
        setRandom(Math.floor(Math.random() * 100))
    }

    return (
        <div>
            <h1>Random Number: {random}</h1>
            <button onClick={generateRandom}>Click me</button>
        </div>
    )
}

export default ExampleTwo
