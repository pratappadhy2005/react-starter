import React from 'react'

const TodoList = () => {
    const todos = [
        {
            id: 1,
            title: 'Learn React',
            completed: false
        },
        {
            id: 2,
            title: 'Build a React app',
            completed: false
        },
        {
            id: 3,
            title: 'Deploy the app',
            completed: false
        },
    ]
    return (
        <div>
            <h2>Todo List</h2>
            <ul>
                {todos.map(todo => (
                    <li key={todo.id}>
                        {todo.title}
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default TodoList
