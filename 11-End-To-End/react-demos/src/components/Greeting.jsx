import React from 'react'

const Greeting = () => {
    const greetingMessage = "Hello, World!"
    const currentDate = new Date()
    const currentYear = currentDate.getFullYear()
    return (
        <div>
            <h1>{greetingMessage} - {currentYear}</h1>
            <p>Current Year: {currentYear}</p>
        </div>
    )
}

export default Greeting
