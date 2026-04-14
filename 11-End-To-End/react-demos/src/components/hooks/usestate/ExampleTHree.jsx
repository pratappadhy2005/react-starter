import React, { useState } from 'react'

const ExampleTHree = () => {
    const [name, setName] = useState(() => {
        const saveName = localStorage.getItem('name')
        if (saveName) {
            return saveName
        } else {
            return 'Default Name'
        }
    })
    return (
        <div>
            <h1>ExampleTHree</h1>
            <p>Name: {name}</p>
            <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
            <button onClick={() => localStorage.setItem('name', name)}>Save Name</button>
        </div>
    )
}

export default ExampleTHree
