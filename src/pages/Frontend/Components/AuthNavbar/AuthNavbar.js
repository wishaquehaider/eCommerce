import React from 'react'
import {IoIosArrowBack} from "react-icons/io"
import { Link } from 'react-router-dom'

export default function AuthNavbar() {


    const handleGoBack = () => {
      window.history.back(); 
    };

  return (
    <div className='bg-[#F2F2F2] py-[36px] md:px-[90px] px-[10px] lg:px-[146px]'>
      <Link>
        <IoIosArrowBack size={30} className='cursor-pointer' onClick={handleGoBack}/>
      </Link>
   
    </div>
  )
}
