import { useState } from 'react'
import PopupContent from './PopupContent'

const CopyInput = () => {
    const [inputValue, setInputValue] = useState('')
    const [copied, setCopied] = useState(false)

    const handleCopy = () => {
        navigator.clipboard.writeText(inputValue).then(() => {
            setCopied(true)
            setTimeout(() => {
                setCopied(false)
            }, 1000)
        }).catch(() => {
            setCopied(false)
        })
    }

    return (
        <div>
            <input value={inputValue} onChange={(e) => setInputValue(e.target.value)} />
            <button onClick={handleCopy}>Copy</button>
            <p>{copied ? 'Copied' : 'Not Copied'}</p>
            <PopupContent copied={copied} />
        </div>
    )
}

export default CopyInput
