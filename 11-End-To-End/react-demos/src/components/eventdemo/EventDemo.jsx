import React from 'react'

const EventDemo = () => {
    const clickMe = () => console.log(Math.random() * 10)
    return (
        <div style={{ display: "flex", justifyContent: "center", alignItems: "center", width: "100px" }}>
            <button style={{ backgroundColor: "red", color: "white" }} onClick={clickMe}>Click me</button>
        </div>
    )
}

export default EventDemo
