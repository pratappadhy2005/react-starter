import ProductItem from './components/product-item.jsx'
import "./style.css"

function ProductList(props) {

    const flag = true;

    function renderTextBlock(getFlag) {
        return getFlag ? <h4>Product List</h4> : <h4>No Product List</h4>
    }

    let textBlock = renderTextBlock(flag)

    return (
        <div>
            <h3>ECommerce Project</h3>
            {
                textBlock
            }

            {
                props.dummyProductData.map((product, index) => (
                    <ProductItem key={index} product={product} />
                ))
            }
        </div>
    )
}

export default ProductList