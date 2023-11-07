import AuthNavbar from 'pages/Frontend/Components/AuthNavbar/AuthNavbar'
import React from 'react'
import {BiSolidUser} from "react-icons/bi"
import bucket from "../../../accests/images/bucket.svg"
import { Link } from 'react-router-dom'
export default function SelectAccount() {
  return (
    <section>
        <AuthNavbar />
        <section className='mt-[20px]'>
            <div className='text-center'>
               <h1 className='text-[#BF1017] text-[34px] font-[700]'>SellOut</h1>
               <p className='text-[16px] font-[400]'>Please select below</p>
            </div>
            <div className='flex justify-center lg:gap-[24px] md:gap-[5px] gap-[5px] lg:flex-nowrap md:flex-wrap flex-wrap' >
              <button className='py-[18px] px-[26px] mt-[102px] focus:border-[2px] focus:border-[#000]  rounded-[8px]  border-[#E1E1E1] border-[1px]  gap-[198px]' style={{display:"flex", justifyContent:"center", alignItems:"center"}}>
                <div className='text-[22px] font-[600] text-[#252525]'>
                Personal
                </div>
                <div>
                <BiSolidUser className='h-[34px] w-[34px]'/>
                </div>
              </button>
              <button className='py-[18px] px-[26px] mt-[102px] focus:border-[2px] focus:border-[#000]  rounded-[8px]  border-[#E1E1E1] border-[1px] flex justify-center item-center gap-[198px]' style={{display:"flex", justifyContent:"center", alignItems:"center"}}>
                <div className='text-[22px] font-[600] text-[#252525]'>
                Business
                </div>
                <div>
                  <img src={bucket} alt="bucket" />
                </div>
              </button>
            </div>
            <div className='mt-[25vh] flex lg:justify-end md:justify-center justify-center md:mr-[0px] mr-[0px] lg:mr-[15vh]'>
              <Link to={"/authentication/enablelocation"} className='w-[182px] h-[48px] py[8px]  bg-[#BF1017] rounded-[8px] text-white font-[700] text-[18px]' style={{display:"flex", justifyContent:"center", alignItems:"center"}}>
                Next
              </Link>
            </div>
        </section>
    </section>
  )
}
