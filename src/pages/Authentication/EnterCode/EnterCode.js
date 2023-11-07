import React from 'react'
import AuthNavbar from '../../Frontend/Components/AuthNavbar/AuthNavbar'

export default function () {
  return (
    <div>
        <AuthNavbar/>
        <section className='text-center '>
           <div className='flex flex-col justify-center mt-[10vh] item-center'>
            <h4 className='text-[black] text-[22px] font-[700]'>Enter 6-digit code</h4>
            <p>Your code was sent to +44 77425674908.</p>
           </div>
           <div className='mt-10 gap-[3px]'>
            <input type="phone" className='text-center border-b-2 border-gray-300 w-[7vh] focus:outline-none mx-5'/>
            <input type="phone" className='text-center border-b-2 border-gray-300 w-[7vh] focus:outline-none mx-5'/>
            <input type="phone" className=' text-center border-b-2 border-gray-300 w-[7vh] focus:outline-none mx-5'/>
            <input type="phone" className=' text-center border-b-2 border-gray-300 w-[7vh] focus:outline-none mx-5'/>
            <input type="phone" className='text-center border-b-2 border-gray-300 w-[7vh] focus:outline-none mx-5'/>
            <input type="phone" className='text-center border-b-2 border-gray-300 w-[7vh] focus:outline-none mx-5'/>
           </div>
           <div className='mt-10'>
            <p>Resend code: 57s</p>
           </div>
        </section>
    </div>
  )
}
