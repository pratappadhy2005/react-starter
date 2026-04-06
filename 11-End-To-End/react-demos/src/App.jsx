import Greeting from "./components/Greeting"
import ProductInfo from "./components/ProductInfo"
import UserList from "./components/UserList"
import ProductList from "./components/ProductList"
import OrderDetails from "./components/props/OrderDetails"


const App = () => {
  return (
    <div>
      <Greeting />
      <ProductInfo />
      <UserList />
      <ProductList />
      <OrderDetails />
    </div>
  )
}

export default App