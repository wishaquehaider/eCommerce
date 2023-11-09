import React from 'react'
import Topbar from '../Components/Topbar/Topbar'
import Iconsbar from '../Components/IconsBar/Iconsbar'
import HeaderBar from '../Components/HeaderBar/HeaderBar'
import cartIcon from "../../../accests/images/cartIcon.svg"
import { Link } from 'react-router-dom'

export default function CartScreen() {
  return (
    <>
     <Topbar/>
     <Iconsbar/>
     <HeaderBar title="Shopping basket"/>
     <div className=' w-[100%] mt-[179px] flex flex-col justify-center items-center'>
        <div className='text-center'>
            <div className='flex justify-center'>

            <img src={cartIcon} alt="" />
            </div>
            <div className='text-[38px] font-[700] text-[#252525] '>
            Cart is empty
            <p className='text-[26px] font-[400] mt-[18px]'>We hope you find something you like!</p>
            </div>
        </div>
         <div className=' my-[77px]'>
            <Link to={"/"} className='text-[#BF1017] text-[28px] font-[700] underline'>Click here to explore</Link>
         </div>
     </div>
    </>
  )
}
