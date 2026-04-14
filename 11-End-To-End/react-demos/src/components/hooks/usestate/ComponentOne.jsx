import React from 'react'

const ComponentOne = ({ counter, onClick }) => {
    return (
        <div>
            <p>ComponentOne: {counter}</p>
            <button onClick={onClick}>Click me</button>
        </div>
    )
}

export default ComponentOne
