import { useState, useEffect } from 'react'

const UseEffectDemo = () => {
    const [value, setValue] = useState(0)


    useEffect(() => {
        if (value === 0) {
            return
        }
        console.log('value', value)
    }, [value])

    return (
        <div>
            <input type="text" value={value} onChange={(e) => setValue(e.target.value)} />
            <button onClick={() => setValue(value + 1)}>Add</button>
            <p>Value: {value}</p>
        </div>
    )
}

export default UseEffectDemo
