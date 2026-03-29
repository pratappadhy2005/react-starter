
function ButtonComponent() {
    return (
        <button>Click Here</button>
    )
}

function ProductItem({ product }) {
    return (
        <div>
            <h4>{product.name}</h4>
            <p>Price: {product.price}</p>
            <p>Quantity: {product.quantity}</p>
            <ButtonComponent />
        </div>
    )
}

export default ProductItem