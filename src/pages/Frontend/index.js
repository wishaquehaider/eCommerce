import React from 'react'
import Home from './Home/Home'
import About from './About/About'
import { Routes, Route } from 'react-router-dom'


function index() {
  return (
    <main>
    <Routes>
      <Route path='/'>
          <Route  index element={<Home/>}/>
          <Route path='/about' element={<About/>}/>
      </Route>
  </Routes>
  </main>
  )
}

export default index;