import React from 'react'

const ComponentTwo = ({ counter, onClick }) => {
    return (
        <div>
            <p>ComponentTwo: {counter}</p>
            <button onClick={onClick}>Click me</button>
        </div>
    )
}

export default ComponentTwo
