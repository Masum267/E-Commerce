import './App.css'
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
    </Routes>
    </>
  )
}

export default App
