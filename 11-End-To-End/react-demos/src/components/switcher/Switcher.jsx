import React, { useState } from 'react'

const Switcher = () => {
    const [isOn, setIsOn] = useState(true)
    return (
        <div>
            {
                isOn && (
                    <p>On</p>
                )
            }
            {
                !isOn && (
                    <p>Off</p>
                )
            }
            <input type="text" key={isOn} />
            <button onClick={() => setIsOn(!isOn)}>Toggle</button>


        </div>
    )
}

export default Switcher
