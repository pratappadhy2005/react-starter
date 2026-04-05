import React from 'react'

const Expressions = () => {
    const myName = "Pratappadhy"

    const multiply = (a, b) => {
        return a * b
    }

    const specialClass = "special-class"

    return (
        <div>
            <h1>Expressions</h1>
            <br />
            <p>2+2={2 + 2}</p>
            <br />
            <p>2*2={2 * 2}</p>
            <br />
            <p>My Name: {myName}</p>
            <p> My Friend List: {["Pratappadhy", "Raj", "Ankit"]}</p>
            <br />
            <p> My Friend List: {["Pratappadhy", "Raj", "Ankit"].join(", ")}</p>
            <br />
            <p>2*3={multiply(2, 3)}</p>
            <br />
            <p className={specialClass}>Special Class</p>
        </div>
    )
}

export default Expressions
