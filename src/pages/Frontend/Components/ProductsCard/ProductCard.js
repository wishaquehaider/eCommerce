import React from 'react'
import man from "../../../../accests/images/man.png";
import menu from "../../../../accests/images/menu.svg";
import product from "../../../../accests/images/product.png";
import chat from "../../../../accests/images/chat.svg";
import forward from "../../../../accests/images/forward.svg";
import bookmark from "../../../../accests/images/bookmark.svg";
import PromocCraousel from '../PromocCraousel/PromocCraousel';

export default function ProductCard() {
  return (
    <div>
    <div className='flex justify-center'>
       <div className=" lg:w-[80%] md:w-[90%] w-[90%] bg-white h-fit shadow-md shadow-[rgba(0, 0, 0, 0.08)] rounded-xl py-5">
      <div className="flex items-center gap-2 justify-between px-[12px] pb-3">
        <div className="flex items-center gap-2">
          <img src={man} alt="img" className="w-[36px] h-[36px]" />
          <div className="">
            <h1 className="text-[16px] font-bold text-black text-opacity-70">
              Clay Mcintyre
            </h1>
            <p className="text-[#777777] text-[10px] font-light">5 hr ago</p>
          </div>
        </div>

        <img src={menu} className="w-[22px] h-[22px] " />
      </div>
      <img src={product} className="w-[100%] h-auto pb-3" />

      <div className="flex justify-between pb-3">
        <div className="flex gap-3">
          <img src={chat} className="p-3" />
          <img src={forward} className="p-3" />
        </div>
        <div>
          <img src={bookmark} className="p-3" />
        </div>
      </div>

      <div className="px-2 pb-6">
        <div className="flex justify-between items-center">
          <h3 className="text-[18px] font-normal text-[#03071E]">Modern jeans</h3>
          <h3 className="text-[22px] font-bold text-[#03071E]">$83.0</h3>
        </div>
          <p className="text-[16px] font-light text-[#252525]">New stock - available in all sizes</p>
      </div>
      
      <div className="flex gap-6 justify-center">
        <button className="lg:px-[5px] w-[45%] md:px-[10px] px-5 py-2 border-[2px] border-[#BF1017] rounded-lg font-[700] text-[#BF1017]">Add to basket</button>
        <button className="lg:px-[5px]  w-[45%] md:px-[10px] px-5 py-2  bg-[#BF1017] rounded-lg text-[#FFF]">Buy Now</button>
      </div>
    </div>
    </div>
 
    </div>
  )
}
