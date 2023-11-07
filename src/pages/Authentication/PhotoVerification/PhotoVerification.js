import AuthNavbar from 'pages/Frontend/Components/AuthNavbar/AuthNavbar'
import React from 'react'

export default function PhotoVerification() {
  return (
    <div>
        <AuthNavbar/>
        <section className='flex justify-center item-center mt-[10vh] '>
           <div>
            <h1 className='font-[700] text-[37px]'>Photo Verification</h1>
            <p className='w-[80%]'>Please verify yourself so we can keep our platform safe and free from scammers and fraudsters.</p>
            <img src="" alt="" />
            <p className='w-[80%]'>We will NOT make this public. It mill be kept private as part of our Privacy Policy.</p>
            <button className='bg-[#BF1017] w-[100%] py-[8px] text-white font-[700] text-[18px] rounded-[8px] mt-3'>
                Take Photo
            </button>
           </div>
        </section>
    </div>
  )
}
