import React from 'react'
import Myorder from '../Myorders/Myorders'
import ProductCard from '../ProductsCard/ProductCard'
import SuggestedSeller from '../SuggestedSellers/SuggestedSeller'

export default function HeroSectios() {
  return (
    <div className='flex justify-between mx-[31px]'>
        <div className='hidden md:hidden lg:flex  '>
            <Myorder/>
        </div>
        <div className='flex justify-center'>
            <ProductCard/>
        </div>
        <div  className='hidden md:hidden lg:flex'>
            <SuggestedSeller/>
        </div>
    </div>
  )
}
