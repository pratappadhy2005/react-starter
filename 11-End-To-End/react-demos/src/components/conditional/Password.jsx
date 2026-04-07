import React from 'react'
import ValidPassword from './ValidPassword'
import InvalidPassword from './InvalidPassword'

const Password = (props) => {
    return (
        <div>
            {props.isValid ? <ValidPassword /> : <InvalidPassword />}
        </div>
    )
}

export default Password
