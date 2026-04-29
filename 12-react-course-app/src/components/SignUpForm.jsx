import React, { useState } from 'react'

const SignUpForm = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault()
        alert(`Email: ${email}, Password: ${password}`)
    }
    return (
        <div style={{ maxWidth: '400px', margin: '2rem auto' }}>
            <h1>Sign Up Form</h1>
            <form onSubmit={handleSubmit}>
                <div style={{ marginBottom: '10px' }}>
                    <label htmlFor="username">Username:</label>
                    <input type="text" id="username" name="username" value={email} onChange={(e) => setEmail(e.target.value)} />
                </div>
                <div style={{ marginBottom: '10px' }}>
                    <label htmlFor="password">Password:</label>
                    <input type="password" id="password" name="password" value={password} onChange={(e) => setPassword(e.target.value)} />
                </div>
                <div style={{ marginBottom: '10px' }}>
                    <input type="submit" value="Sign Up" />
                </div>
            </form>
        </div>
    )
}

export default SignUpForm
