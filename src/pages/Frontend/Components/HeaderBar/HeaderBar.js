import React from 'react'

import arrow from "../../../../accests/images/backarrow.svg"
export default function HeaderBar(props) {
    const handleGoBack = () => {
        window.history.back(); 
      };
  return (
    <div className='w-[55%] flex justify-between items-center mt-[41px] mx-[32px]'>
        <div className='cursor-pointer' onClick={handleGoBack}>
          <img src={arrow} alt="" />
        </div>
        <div className='text-black lg:text-[32px] md:text-[20px] text-[16px] font-[700]'> 
            {props.title}
        </div>
    </div>
  )
}
