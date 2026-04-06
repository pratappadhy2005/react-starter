import React from 'react'

const List = () => {
    const userInfo = [
        {
            name: "Pratap",
            age: 25,
            email: "pratap@example.com"
        },
        {
            name: "John Doe",
            age: 30,
            email: "john@example.com"
        },
        {
            name: "Jane Doe",
            age: 28,
            email: "jane@example.com"
        },
    ]
    return (
        <div>
            <ul>
                {userInfo.map(({ name, age, email }) => (
                    <li key={name}>{name} - {age} - {email}</li>
                ))}
            </ul>
        </div>
    )
}

export default List
