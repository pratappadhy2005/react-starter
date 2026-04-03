import ProductItem from './components/product-item.jsx'
import "./style.css"
import { useState, useEffect } from 'react'

const initiaState = false;

function ProductList(props) {

    const [flag, setFlag] = useState(initiaState)

    useEffect(() => {
        //setFlag(!flag)
        console.log('run only on page load', flag)
    }, []) // This will run on component load

    return (
        <div>
            <h3>ECommerce Project</h3>
            <button onClick={() => setFlag(!flag)}>Click me</button>
            {
                flag ? <h4>Product List</h4> : <h4>No Product List</h4>
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