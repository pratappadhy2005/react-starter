import Greeting from "./components/Greeting"
import ProductInfo from "./components/ProductInfo"
import UserList from "./components/UserList"
import ProductList from "./components/ProductList"

const App = () => {
  return (
    <div>
      <Greeting />
      <ProductInfo />
      <UserList />
      <ProductList />
    </div>
  )
}

export default App