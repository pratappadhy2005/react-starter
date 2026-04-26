import React from 'react'
import { useState, useEffect } from 'react'

const UseEffectDataFetchDemo = () => {
    const [data, setData] = useState([])

    useEffect(() => {
        async function fetchData() {
            const res = await fetch('https://jsonplaceholder.typicode.com/users')
            const json = await res.json()
            console.log('json', json)
            if (json && json.length > 0) {
                setData(json)
            }
        }
        fetchData()
    }, [])

    return (
        <div>
            <h1>Users</h1>
            <ul>
                {data.map(user => (
                    <li key={user.id}>{user.name}</li>
                ))}
            </ul>
        </div>
    )
}

export default UseEffectDataFetchDemo
