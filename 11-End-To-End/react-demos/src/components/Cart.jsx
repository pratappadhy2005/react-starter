import React from 'react'
import { FaCartArrowDown } from "react-icons/fa";


const Cart = () => {
    const items = [
        {
            id: 1,
            name: 'Item 1',
            price: 100,
            quantity: 2
        },
        {
            id: 2,
            name: 'Item 2',
            price: 200,
            quantity: 1
        }
    ]
    return (
        <div>
            <h1 style={{ color: "red", backgroundColor: "lightblue" }}> Cart Items </h1>
            {items.length > 0 && <h2>Total Price: {items.reduce((acc, cur) => acc + cur.price * cur.quantity, 0)}</h2>}
            {items.length > 0 && <ul>
                {items.map((item) => (
                    <li key={item.id}>
                        {item.name} - {item.quantity} x {item.price} = {item.price * item.quantity}
                    </li>
                ))}
            </ul>}
        </div>
    )
}

export default Cart
