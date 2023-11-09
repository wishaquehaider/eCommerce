import React from 'react'
import Slider from "react-slick"
import prome1 from "../../../../accests/images/itempromo1.png"
import prome2 from "../../../../accests/images/itempromo2.png"
import addprome from "../../../../accests/images/addprome.png"
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
export default function PromocCraousel() {

 
        var settings = {
          dots: false,
          infinite: false,
          speed: 500,
          slidesToShow: 6,
          slidesToScroll: 4,
          initialSlide: 0,
          responsive: [
            {
              breakpoint: 1024,
              settings: {
                slidesToShow: 6,
                slidesToScroll: 5,
                infinite: false,
                dots: false
              }
            },
            {
              breakpoint: 710,
              settings: {
                slidesToShow: 6,
                slidesToScroll: 2,
                initialSlide: 2
              }
            },
            {
              breakpoint: 480,
              settings: {
                slidesToShow: 4,
                slidesToScroll: 1
              }
            }
          ]
        };


  return (
    <div className='flex justify-center' >
    <div className='lg:w-[95vh] md:w-[70vh] w-[50vh]'>
    <Slider {...settings}>
      <div className='focus:outline-none'>
        <img src={addprome} alt="" className='cursor-pointer ' />
      </div>
      <div  className='focus:outline-none'>
      <img src={prome1} alt="" />
      </div>
      <div  className='focus:outline-none'>
      <img src={prome2} alt="" />
      </div>
      <div  className='focus:outline-none'>
      <img src={prome2} alt="" />
      </div>
      <div  className='focus:outline-none'>
      <img src={prome2} alt="" />
      </div >
      <div  className='focus:outline-none'>
      <img src={prome2} alt="" />
      </div>
      <div  className='focus:outline-none'>
      <img src={prome2} alt="" />
      </div>
      <div  className='focus:outline-none'>
      <img src={prome2} alt="" />
      </div>
      <div  className='focus:outline-none'>
      <img src={prome2} alt="" />
      </div>
    
    </Slider>
  </div>
  </div>
  )
}
