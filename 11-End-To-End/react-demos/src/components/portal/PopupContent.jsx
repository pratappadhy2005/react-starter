import { createPortal } from 'react-dom'

const PopupContent = ({ copied }) => {
    return createPortal(
        <section>

            {
                copied && (
                    <div style={{ position: 'absolute', top: 100, left: 100 }}>
                        <p>Copied</p>
                    </div>
                )
            }
        </section>,
        document.querySelector('#portal')
    )
}

export default PopupContent
