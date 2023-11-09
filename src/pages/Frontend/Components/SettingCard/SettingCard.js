import React from 'react'
import { Link } from 'react-router-dom'
import next from "../../../../accests/images/nextarrow.svg";
export default function SettingCard(props) {
  return (
    <Link
    to={props.herf}
    className="bg-white shadow-md lg:w-[35%] md:w-[35%] w-[80%] px-[10px] py-[31px] flex justify-between items-center rounded-[12px]"
  >
    <div className="flex justify-between items-center">
      <div className="flex items-center gap-2">
        <img src={props.icon} alt="" />
        <p className="text-[20px] font-[400]">{props.text}</p>
      </div>
    </div>
    <div>
      <img src={next} alt="" />
    </div>
  </Link>
  )
}
