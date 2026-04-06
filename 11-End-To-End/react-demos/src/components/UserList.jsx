import React from 'react'

const UserList = () => {
    const userList = [
        {
            name: "Pratap",
            age: 25,
            email: "pratap@example.com"
        },
        {
            name: "Prayan",
            age: 30,
            email: "prayan@example.com"
        },
        {
            name: "Suchi",
            age: 28,
            email: "suchi@example.com"
        },
    ]
    return (
        <div>
            <ul>
                {userList.map(({ name, age, email }) => (
                    <li key={name}>{name} - {age} - {email}</li>
                ))}
            </ul>
        </div>
    )
}

export default UserList
