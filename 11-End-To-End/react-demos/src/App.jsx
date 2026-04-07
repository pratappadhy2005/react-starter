import Greeting from "./components/Greeting"
import ProductInfo from "./components/ProductInfo"
import UserList from "./components/UserList"
import ProductList from "./components/ProductList"
import OrderDetails from "./components/props/OrderDetails"
import Parent from "./components/children/Parent"



const App = () => {
  return (
    <div>
      <Greeting />
      <ProductInfo />
      <UserList />
      <ProductList />
      <OrderDetails />
      <Parent />
    </div>
  )
}

export default App