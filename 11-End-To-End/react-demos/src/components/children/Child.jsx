import React from 'react'
import '../../index.css'

const Child = ({ children }) => {

    return (
        <div className="child">
            <h1>Child content</h1>
            {children}
        </div>
    )
}

export default Child
