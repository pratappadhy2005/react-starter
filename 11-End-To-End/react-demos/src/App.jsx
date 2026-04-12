import Greeting from "./components/Greeting"
import ProductInfo from "./components/ProductInfo"
import UserList from "./components/UserList"
import ProductList from "./components/ProductList"
import OrderDetails from "./components/props/OrderDetails"
import Parent from "./components/children/Parent"
import Password from "./components/conditional/Password"
import Cart from "./components/Cart"
import { FaCartArrowDown } from "react-icons/fa";
import { MdComputer } from "react-icons/md";
import ProfileCard from "./components/styledemo/ProfileCard"
import StyleCard from "./components/styledemo/StyleCard"



const App = () => {
  return (
    <div>
      <ProfileCard />
      <StyleCard />
    </div>
  )
}

export default App