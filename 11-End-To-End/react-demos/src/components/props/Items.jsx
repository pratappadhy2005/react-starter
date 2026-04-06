import React from 'react'

const Items = (props) => {
    return (
        <div>
            <h3>Order Items</h3>
            {props.orderItems.map((item, index) => (
                <div key={index}>
                    <p>{item.itemName}</p>
                    <p>Price: {item.itemPrice}</p>
                    <p>Quantity: {item.itemQuantity}</p>
                </div>
            ))}
        </div>
    )
}

export default Items
