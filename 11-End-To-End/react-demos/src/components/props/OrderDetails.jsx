import React from 'react'
import Items from './Items'

const OrderDetails = () => {
    const orderDetails = {
        orderId: 123456,
        customerName: 'Pratap Padhy',
        orderDate: '2023-08-15',
        orderTotal: 100.00,
        orderItems: [
            {
                itemName: 'Item 1',
                itemPrice: 50.00,
                itemQuantity: 2
            },
            {
                itemName: 'Item 2',
                itemPrice: 30.00,
                itemQuantity: 1
            }
        ]
    }
    return (
        <div>
            <h2>Order Details</h2>
            <p>Order ID: {orderDetails.orderId}</p>
            <p>Customer Name: {orderDetails.customerName}</p>
            <p>Order Date: {orderDetails.orderDate}</p>
            <p>Order Total: {orderDetails.orderTotal}</p>
            <Items orderItems={orderDetails.orderItems} />
        </div>
    )
}

export default OrderDetails
