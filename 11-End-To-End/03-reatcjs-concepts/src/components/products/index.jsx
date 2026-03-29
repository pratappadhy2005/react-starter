import ProductItem from './components/product-item.jsx'

function ProductList(props) {
    return (
        <div>
            <h3>ECommerce Project</h3>{
                props.dummyProductData.map((product, index) => (
                    <ProductItem key={index} product={product} />
                ))
            }
        </div>
    )
}

export default ProductList