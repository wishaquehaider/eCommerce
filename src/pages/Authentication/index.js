import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Signup from './Signup/Signup'

function index() {
  return (
    <Routes>
        <Route path='/singup' element={<Signup/>} />
    </Routes>
  )
}

export default index