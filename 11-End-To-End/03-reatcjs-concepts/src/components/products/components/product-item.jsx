import styles from './product-item.module.css'

function ButtonComponent() {
    return (
        <button className={styles.buttonstyle}>Click Here</button>
    )
}

function ProductItem({ product }) {
    return (
        <div style={{ margin: '20px 0' }}>
            <h4 className={styles.productTitle}>{product.name}</h4>
            <p>Price: {product.price}</p>
            <p>Quantity: {product.quantity}</p>
            <ButtonComponent className={styles.buttonstyle} />
        </div>
    )
}

export default ProductItem