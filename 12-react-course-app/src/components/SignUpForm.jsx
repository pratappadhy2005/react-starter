import React, { useState } from 'react'
import { useForm } from 'react-hook-form'

const SignUpForm = () => {
    const { register, handleSubmit, formState } = useForm()

    const onSubmit = (data) => {
        alert(`Username: ${data.username}, Password: ${data.password}`)
    }

    return (
        <div style={{ maxWidth: '400px', margin: '2rem auto' }}>
            <h1>Sign Up Form</h1>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div style={{ marginBottom: '10px' }}>
                    <label htmlFor="username">Username:</label>
                    <input type="text" id="username" name="username" {...register('username', { required: "Username is required", minLength: { value: 8, message: "Username must be at least 8 characters long" } })} />
                    {formState.errors.username?.message && <p style={{ color: 'red' }}>{formState.errors.username.message}</p>}
                </div>
                <div style={{ marginBottom: '10px' }}>
                    <label htmlFor="password">Password:</label>
                    <input type="password" id="password" name="password" {...register('password', { required: "Password is required", minLength: { value: 8, message: "Password must be at least 8 characters long" } })} />
                    {formState.errors.password?.message && <p style={{ color: 'red' }}>{formState.errors.password.message}</p>}
                </div>
                <div style={{ marginBottom: '10px' }}>
                    <input type="submit" value="Sign Up" />
                </div>
            </form>
        </div>
    )
}

export default SignUpForm
