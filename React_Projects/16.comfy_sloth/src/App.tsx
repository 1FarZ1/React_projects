import './App.css'
import {Routes,Route,BrowserRouter} from "react-router-dom"
import Home from './pages/Home'
import About from './pages/About'
import Error from './pages/Error'
import CheckOut from './pages/CheckOut'
import Product from './pages/Product'
import SingleProduct from './pages/SingleProduct'
import Cart from './pages/Cart'
import NavBar from './components/NavBar'
import Sidebar from './components/SideBar'
import Footer from './components/Footer'
 
function App() {

  return (
    <BrowserRouter>
    <NavBar/>
    <Sidebar/>
      <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/about" element={<About/>}/>
          <Route path="/checkOut" element={<CheckOut/>}/>
          <Route path="/cart" element={<Cart/>}/>
          <Route path="/products" element={<Product/>}/>
          <Route path="/products/:id" element={<SingleProduct/>}/>
          <Route path="*" element={<Error/>}/>
        </Routes>
    <Footer/>
    </BrowserRouter>
  )
}

export default App
