import React from 'react'
import Child from "./Child"

const Parent = () => {
    return (
        <div>
            <Child>
                <h1>Child content</h1>
                <p>Child content</p>
            </Child>
            <Child>
                <h1>Child content2</h1>
                <p>Child content2</p>
            </Child>
        </div>
    )
}

export default Parent
