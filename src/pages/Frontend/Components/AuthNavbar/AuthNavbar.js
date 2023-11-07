import React from 'react'
import {IoIosArrowBack} from "react-icons/io"
import { Link } from 'react-router-dom'

export default function AuthNavbar() {
  return (
    <div className='bg-[#F2F2F2] py-[36px] px-[148px]'>
      <Link>
        <IoIosArrowBack size={30} className='cursor-pointer'/>
      </Link>
   
    </div>
  )
}
