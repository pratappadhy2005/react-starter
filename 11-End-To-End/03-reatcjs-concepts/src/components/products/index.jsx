import ProductItem from './components/product-item.jsx'

const dummyProductData = [
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

function ProductList() {
    return (
        <div>
            <h3>ECommerce Project</h3>
            <ProductItem product={dummyProductData[0]} />
            <ProductItem product={dummyProductData[1]} />
            <ProductItem product={dummyProductData[2]} />
        </div>
    )
}

export default ProductList