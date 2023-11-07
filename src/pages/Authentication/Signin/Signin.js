import React from 'react'

export default function Signin() {
  return (
    <section class="text-gray-600 body-font lg:mx-[20vh] mx-[5px] md:mx-[20px]">
  <div class="container px-5 py-24 mx-auto flex flex-wrap items-center">
    <div class="lg:w-3/5 md:w-1/2 md:pr-16 lg:pr-0 pr-0">
      <h1 class=" font-[700] text-[60px] text-[#BF1017]">SellOut</h1>
      <p class="leading-relaxed mt-2 w-[80%]">SellOut helps you sell the stuff you want to the people you want.</p>
    </div>
    <div class="lg:w-2/6 md:w-1/2  rounded-lg p-8 flex flex-col md:ml-auto w-full mt-10 md:mt-0">
      <div class="relative mb-4">
        <label for="full-name" class="leading-7 text-sm text-gray-600">Email:</label>
        <input type="text" id="full-name" name="full-name" class="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"/>
      </div>
      <div class="relative mb-4">
        <label for="email" class="leading-7 text-sm text-gray-600">Password:</label>
        <input type="password" id="email" name="email" class="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"/>
      </div>
      <p className='text-sm text-end -mt-2'>Forgot Password</p>
      <div className='text-center mt-10'>

      <button class="text-white bg-[#BF1017] border-0 py-2 px-8 focus:outline-none  rounded-[8px] w-[60%] text-lg">Sign in</button>
      </div>
      <p class="text-xs text-gray-500 mt-10 text-center">Don’t have an account?</p>
      <div className='text-center mt-5'>

      <button class="text-black bg-transparent border border-black border-1 py-2 px-4 focus:outline-none  rounded text-sm w-[60%]">Create an Account</button>
      </div>

    </div>
  </div>
</section>
  )
}
