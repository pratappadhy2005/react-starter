import './App.css'
import ClassBasedComponent from './components/class-based-component.jsx'
import FunctionalComponent from './components/functional-component.jsx'
import ProductList from './components/products/index.jsx'

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
function App() {

  return (
    <div className="App">
      <h1>React JS Concepts 2026</h1>
      <ClassBasedComponent />
      {/* <FunctionalComponent /> */}
      {/* <ProductList dummyProductData={dummyProductData} /> */}
    </div>
  )
}

export default App
