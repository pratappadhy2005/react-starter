import { useState, useEffect } from 'react'

const UseEffect = () => {
    const [showCount, setShowCount] = useState(false)
    // Mounting  -> Update -> Unmounting
    return (
        <div>
            <h1>UseEffect</h1>
            <button onClick={() => setShowCount(!showCount)}>Show Count</button>
            {showCount && <Counter />}
        </div>
    )
}

function Counter() {
    const [count, setCount] = useState(0)

    useEffect(() => {
        console.log('Count Mounted:', count)
        return () => {
            console.log('Count Unmounted:', count)
        }
    }, [])

    useEffect(() => {
        console.log('Component Updated')
    }, [count])


    return (
        <div>
            <p>Count: {count}</p>
            <button onClick={() => setCount(count + 1)}>Click</button>
        </div>
    )
}

export default UseEffect
