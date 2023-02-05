import React from 'react'
import safeorder from "../images/safeorder.svg";
import freereturn from "../images/freereturn.svg";
import returndays from "../images/90days.svg";
import packingstation from "../images/packingstation.svg";

const Footer2 = () => {
  return (
    <section class="text-gray-600 body-font bg-[#E3E4E5]">
  <div class="container px-5 py-10 mx-auto">
    <div class="flex flex-wrap -m-4 text-center ">

      <div class="p-4 sm:w-1/4 w-1/2 flex flex-col  justify-center items-center ">
        <h2 class="title-font font-medium sm:text-4xl text-3xl text-gray-900 "><img src={safeorder} className=" mb-3 w-[40px] h-[40px]   " /></h2>
        <p class="leading-relaxed ">Safe order</p>
      </div>
      <div class="p-4 sm:w-1/4 w-1/2 flex flex-col justify-center items-center">
        <h2 class="title-font font-medium sm:text-4xl text-3xl text-gray-900"><img src={freereturn} className="mb-3 w-[40px] h-[40px]"/></h2>
        <p class="leading-relaxed">Free returns</p>
      </div>
      <div class="p-4 sm:w-1/4 w-1/2 flex flex-col justify-center items-center">
        <h2 class="title-font font-medium sm:text-4xl text-3xl text-gray-900"><img src={returndays} className="mb-3 w-[40px] h-[40px]"/></h2>
        <p class="leading-relaxed">Return period of 90 days</p>
      </div>
      <div class="p-4 sm:w-1/4 w-1/2 flex flex-col justify-center items-center">
        <h2 class="title-font font-medium sm:text-4xl text-3xl text-gray-900"><img src={packingstation} className="mb-3 w-[40px] h-[40px]"/></h2>
        <p class="leading-relaxed">Delivery to packing station</p>
      </div>
    </div>
  </div>
</section>
  )
}

export default Footer2