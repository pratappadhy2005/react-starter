import React from 'react'

const ProductInfo = () => {
    const productDetails = {
        productName: "React Dummies",
        productPrice: 29.99,
        productDescription: "A book on React for beginners"
    }
    return (
        <div>
            <h1>Product Info</h1>
            <p>Product Name: {productDetails.productName}</p>
            <p>Product Price: {productDetails.productPrice}</p>
            <p>Product Description: {productDetails.productDescription}</p>
        </div>
    )
}

export default ProductInfo
