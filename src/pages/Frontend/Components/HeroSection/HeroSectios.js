import React from 'react'
import Myorder from '../Myorders/Myorders'
import ProductCard from '../ProductsCard/ProductCard'
import SuggestedSeller from '../SuggestedSellers/SuggestedSeller'
import PromocCraousel from '../PromocCraousel/PromocCraousel'

export default function HeroSectios() {
  return (
    <div className='flex justify-between mx-[31px] '>
        <div className='hidden md:hidden lg:flex shadow-md  pr-3'>
            <Myorder/>
        </div>
        <div className='fle justify-center mt-[31px]'>
          <div>
          </div>
          <div>

          <PromocCraousel/>
          </div>
            <ProductCard/>
        </div>
        <div  className='hidden md:hidden lg:flex shadow-lg pl-3'>
            <SuggestedSeller/>
        </div>
    </div>
  )
}
