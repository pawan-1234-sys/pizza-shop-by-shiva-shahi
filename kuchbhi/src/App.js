import "./App.css";
// import { Container } from "react-bootstrap";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import TopBar from "./components/TopBar";
import About from "./components/About";
import Contact from "./components/Contact";
import Policy from "./components/Policy";
import NavBar from "./components/NavBar";
import HomeScreen from "./screens/HomeScreen";
import CartScreen from "./screens/CartScreen";
import Registe from "./screens/Registe";
import Login from "./screens/Login";
import OrderScreen from "./screens/OrderScreen";
import AdminScreen from "./screens/AdminScreen";


// import MeroSlider from "./components/MeroSlider";

//iske baad wala hm apne mn se kiye hain
import Pizzaslist from "./components/Admin/Pizzaslist";
import AddNewPizza from "./components/Admin/AddNewPizza";
import OrderList from "./components/Admin/OrderList";
import Userlist from "./components/Admin/Userlist";
import EditPizza from "./components/Admin/EditPizza";



// iske pahle wala hm apne mn se kiye hain

function App() {
  return (
    <>
    <BrowserRouter>


    <TopBar/>
    <NavBar/>

    <Routes> 

{/* iske baad wala hm apne mn se kiye hain */}
    <Route path="/admin/userlist" element={<Userlist />} ></Route>
    <Route path="/admin/pizzalist" element={<Pizzaslist />} ></Route>
    <Route path="/admin/addnewpizza" element={<AddNewPizza />} ></Route>
    <Route path="/admin/orderlist" element={<OrderList />} ></Route>
    <Route path="/admin/editpizza/:pizzaId" element={< EditPizza/>} ></Route>
  
{/* iske pahle wala hm apne mn se kiye hain */}


        <Route path="/admin" element={<AdminScreen />} ></Route>
        <Route path="/orders" element={<OrderScreen />} ></Route>
        <Route path="/login" element={<Login />} ></Route>
        <Route path="/register" element={<Registe />} ></Route>
        <Route path="/about" element={<About />} ></Route>
        <Route path="/cart" element={<CartScreen />} ></Route>

        <Route path="/contact" element={<Contact />} ></Route>
        <Route path="/policy" element={<Policy />} ></Route>
        <Route path="/" element={<HomeScreen />} ></Route>

        {/* <Route path="/" element={<MeroSlider/>} ></Route> */}



      </Routes>


    </BrowserRouter>
    </>
  );
}

export default App;


