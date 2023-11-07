import AuthNavbar from 'pages/Frontend/Components/AuthNavbar/AuthNavbar'
import React from 'react'
import { Link } from 'react-router-dom'

export default function EnterBirthday() {
  return (
    <div>
        <AuthNavbar/>
        <section className='flex justify-center mt-10 '>
            <div>
               <h1 className='font-[700] text-[32px]'>When is your birthday?</h1>
               <p className='text-[#777]'>Your birthday won’t be shown publicly.</p>
               <input type="date" className='border-b-2 border-gray-300 w-[100%] mt-10 focus:outline-none'/>

               <Link to={"/authentication/photoverification"}>
               <button className='  bg-[#BF1017] w-[100%] mb-5 py-[8px] text-white font-[700] text-[18px] rounded-[8px] mt-10'>
                Next
            </button>
               
               </Link>
            </div>
        </section>
    </div>
  )
}
