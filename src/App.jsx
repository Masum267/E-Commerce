import './App.css'
import About from './Component/About'
import Cart from './Component/Cart'
import Home from './Component/Home'
import Navbar from './Component/Navbar'
import Product from './Component/Product'
import Products from './Component/Products'
import { Route, Routes } from 'react-router-dom'

function App() {

  return (
    <>
      <Navbar />
    <Routes>
      <Route path='/' element={<Home/>} />
      <Route path='/products' element={<Products/>} />
      <Route path='/products/:id' element={<Product/>} />
      <Route path='/about' element={<About/>} />
      <Route path='/cart' element={<Cart/>} />
    </Routes>
    </>
  )
}

export default App
