import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Signup from './Signup/Signup'
import SelectAccount from './SelectAccount/SelectAccount'
import EnterCode from './EnterCode/EnterCode'
import PhotoVerification from './PhotoVerification/PhotoVerification'
import EnterBirthday from './Enterbirthday/EnterBirthday'
import EnableLocation from './EnableLocation/EnableLocation'
import Signin from './Signin/Signin'

function index() {
  return (
    <Routes>
        <Route path='/signup' element={<Signup/>} />
        <Route path='/signin' element={<Signin/>} />
        <Route path='/selectaccount' element={<SelectAccount/>} />
        <Route path='/entercode' element={<EnterCode/>} />
        <Route path='/photoverification' element={<PhotoVerification/>} />
        <Route path='/enterbirthday' element={<EnterBirthday/>} />
        <Route path='/enablelocation' element={<EnableLocation/>} />
    </Routes>
  )
}

export default index