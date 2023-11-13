import AuthNavbar from 'pages/Frontend/Components/AuthNavbar/AuthNavbar'
import React, { useRef } from 'react'
import photovarify from "../../../accests/images/photovarify.svg"
import { Link } from 'react-router-dom'

export default function PhotoVerification() {


  const videoRef = useRef(null);

  const startCamera = async () => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ video: true });
      if (videoRef.current) {
        videoRef.current.srcObject = stream;
      }
    } catch (error) {
      console.error('Error accessing camera:', error);
    }
  };

  const stopCamera = () => {
    const stream = videoRef.current.srcObject;
    const tracks = stream.getTracks();

    tracks.forEach(track => {
      track.stop();
    });

    videoRef.current.srcObject = null;
  };


  return (
    <div>
        
        <AuthNavbar/>
        <section className='flex justify-center item-center my-[10vh] '>
           <div>
            <h1 className='font-[700] text-[37px]'>Photo Verification</h1>
            <p className='w-[80%]'>Please verify yourself so we can keep our platform safe and free from scammers and fraudsters.</p>
            <div className='bg-[#D9D9D9] my-3 flex justify-center items-center rounded-md cursor-pointer' onClick={startCamera}>

            <img src={photovarify} alt="" />
            </div>
            <p className='w-[80%]'>We will NOT make this public. It mill be kept private as part of our Privacy Policy.</p>
            <Link to={"/authentication/selectaccount"}>
            
            <button onClick={startCamera} className='bg-[#BF1017] w-[100%] py-[8px] text-white font-[700] text-[18px] rounded-[8px] mt-3'>
                Take Photo
            </button>
            </Link>
           </div>
        </section>
    </div>
  )
}
