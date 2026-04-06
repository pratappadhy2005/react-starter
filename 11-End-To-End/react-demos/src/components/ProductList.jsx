import React from 'react'

const ProductList = () => {
    const products = [
        {
            id: 1,
            name: 'Product 1',
            price: 100,
            quantity: 10,
        },
        {
            id: 2,
            name: 'Product 2',
            price: 200,
            quantity: 20,
        },
        {
            id: 3,
            name: 'Product 3',
            price: 300,
            quantity: 30,
        },
    ]
    return (
        <div>
            <ul>
                {products.map(({ id, name, price, quantity }) => (
                    <li key={id}>{name} - {price} - {quantity}</li>
                ))}
            </ul>
        </div>
    )
}

export default ProductList
