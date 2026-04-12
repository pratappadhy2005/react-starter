import React from 'react'

const Copy = () => {
    const copyHandler = (e) => {
        e.preventDefault()
        console.log("Copy me")
    }
    return (
        <p onCopy={copyHandler}>Loren ipsum dolor sit amet, consectetur adipiscing elit. Nulla auctor nunc ut nunc auctor, a auctor nunc.</p>
    )
}

export default Copy