import React from 'react'

const JSXRules = () => {
    return (
        <div>
            <h1>JSX Rules</h1>
            <br />
            <h2>1. JSX must return a single root element</h2>
            <p className='test'>JSX must return a single root element. You cannot return multiple elements or fragments.</p>
            <br />
            <h2>2. Element must be closed</h2>
            <p className='test'>You must close all elements in JSX.</p>
            <br />
            <h2>3. Attribute must be quoted</h2>
            <p className='test'>You must quote all attributes in JSX and should be camelCase.</p>
            <br />
        </div>
    )
}

export default JSXRules
