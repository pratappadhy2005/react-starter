import './App.css'
import ClassBasedComponent from './components/class-based-component.jsx'
import FunctionalComponent from './components/functional-component.jsx'
import ProductList from './components/products/index.jsx'

function App() {

  return (
    <div className="App">
      <h1>React JS Concepts 2026</h1>
      {/* <ClassBasedComponent />
      <FunctionalComponent /> */}
      <ProductList />
    </div>
  )
}

export default App
