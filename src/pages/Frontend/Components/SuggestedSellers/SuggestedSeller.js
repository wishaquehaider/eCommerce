import React from 'react'
import seller1 from "../../../../accests/images/Sseller.png"
import TrendingProducts from '../TrendingProducts/TrendingProducts'

export default function SuggestedSeller() {
  return (
    <div className='w-[40vh] mt-[36px]'>
        <div className='text-[16px] font-[500] '>
        Suggested sellers
        </div>
        <div className='flex justify-between items-center bg-white w-[100%] shadow-md p-[8px] rounded-[8px]  mt-5'>
            <div className='flex justify-center items-center'>
                <img src={seller1} alt="" /> &nbsp;
                <span> Elizabith Lee</span>
            </div>
            <div>
                <button className='bg-[#BF1017] text-white font-[400] px-[14px] py-[5px] rounded-full'>
                    Support
                </button>
            </div>
        </div>
        <div className='flex justify-between items-center bg-white w-[100%] shadow-md p-[8px] rounded-[8px]  mt-5'>
            <div className='flex justify-center items-center'>
                <img src={seller1} alt="" /> &nbsp;
                <span> Elizabith Lee</span>
            </div>
            <div>
                <button className='bg-[#BF1017] text-white font-[400] px-[14px] py-[5px] rounded-full'>
                    Support
                </button>
            </div>
        </div>
        <div className='flex justify-between items-center  w-[100%] bg-white shadow-md p-[8px] rounded-[8px]  mt-5'>
            <div className='flex justify-center items-center'>
                <img src={seller1} alt="" /> &nbsp;
                <span> Elizabith Lee</span>
            </div>
            <div>
                <button className='bg-[#BF1017] text-white font-[400] px-[14px] py-[5px] rounded-full'>
                    Support
                </button>
            </div>
        </div>
        <div className='w-[100%] flex-wrap'>

        <TrendingProducts/>
        </div>
    </div>
  )
}
