import React from 'react'
import Home from './Home/Home'
import About from './About/About'
import { Routes, Route } from 'react-router-dom'
import CartScreen from './CartScreen/CartScreen'
import Settings from './Settings/Settings'


function index() {
  return (
    <main>
    <Routes>
      <Route path='/'>
          <Route  index element={<Home/>}/>
          <Route path='/about' element={<About/>}/>
          <Route path='/cart' element={<CartScreen/>}/>
          <Route path='/settings' element={<Settings/>}/>
      </Route>
  </Routes>
  </main>
  )
}

export default index;