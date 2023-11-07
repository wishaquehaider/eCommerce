import AuthNavbar from 'pages/Frontend/Components/AuthNavbar/AuthNavbar'
import React from 'react'

export default function EnableLocation() {
  return (
    <section>
        <AuthNavbar/>
        <div className='flex justify-center '>
            <div>

        <p className='text-end lg:ml-[50vh] md:ml-[5vh] ml-[0vh] mr-[4px] font-[500] text-[16px] my-5 w-[100%]'>Skip</p>
               <h1 className='font-[700] text-[32px]'>Enable location</h1>
               <p className='text-[#777] w-[80%]'>Enable location while using the app so we can show you Sellers and Services in your area.</p>
               <img src="" alt="image" />
               <button className='  bg-[#BF1017] w-[100%] mb-5 py-[8px] text-white font-[700] text-[18px] rounded-[8px] mt-10'>
                Enable
            </button>
            </div>
        </div>
    </section>
  )
}
