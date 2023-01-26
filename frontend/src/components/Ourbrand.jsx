import React from 'react';
import parkside from '../images/parkside.webp';
import esmara from '../images/m_Esmara_LOGA_large.jpeg';
import crivit from '../images/m_Crivit_LOGB_large.jpeg';
import  meradiso from '../images/m_Meradiso_LOGB_large.jpeg';
import livergy  from '../images/m_Livergy_LOGA_large.jpeg';
import livarnoHome from '../images/Livarno_Home.jpeg';
import livarnoLiving from '../images/Livarno_Living.jpeg';
import silvercrest from '../images/bop-brandlogo-SilverCrest.svg';


const Ourbrand = () => {
  return (
    <>
    <div class="inline-flex items-center justify-center w-full">
    <hr class="w-[41%] h-px my-8 bg-gray-700 border-[1px] " />
    <div class=" px-3 font-medium text-gray-900   ">Our brands</div>
    <hr class="w-[41%] h-px my-8 bg-gray-900 border-[1px] " />
</div>

<section class="text-gray-600 body-font bg-[#FAFAFA]">
  <div class="container px-5 py-24 mx-auto">
    <div class="flex flex-wrap -m-4 text-center ">

      <div class="p-4 sm:w-1/6 w-1/2">
      <div class="rounded-full bg-white w-[200px] h-[200px] flex items-center justify-center">
        <img src={parkside} alt='Parkside' class="w-[180px] "/>
        </div>
      </div>
      <div class="p-4 sm:w-1/6 w-1/2">
      <div class="rounded-full bg-white w-[200px] h-[200px] flex items-center justify-center">
        <img src={silvercrest} alt='Parkside' class="w-[180px] "/>
        </div>
        </div>
        <div class="p-4 sm:w-1/6 w-1/2">
        <div class="rounded-full bg-white w-[200px] h-[200px] flex items-center justify-center">
        <img src={esmara} alt='esmara' class="w-[180px] "/>
        </div>
        </div>
        <div class="p-4 sm:w-1/6 w-1/2">
        <div class="rounded-full bg-white w-[200px] h-[200px] flex items-center justify-center">
        <img src={crivit} alt='crivit' class="w-[180px] "/>
        </div>
        </div>  <div class="p-4 sm:w-1/6 w-1/2">
        <div class="rounded-full bg-white w-[200px] h-[200px] flex items-center justify-center">
        <img src={meradiso} alt='meradiso' class="w-[180px] "/>
        </div>
        </div>
        <div class="p-4 sm:w-1/6 w-1/2">
        <div class="rounded-full bg-white w-[200px] h-[200px] flex items-center justify-center">
        <img src={crivit} alt='crivit' class="w-[180px] "/>
        </div>
        </div>
        <div class="p-4 sm:w-1/6 w-1/2">
        <div class="rounded-full bg-white w-[200px] h-[200px] flex items-center justify-center">
        <img src={livergy} alt='livergy' class="w-[180px] "/>
        </div>
        </div>
        <div class="p-4 sm:w-1/6 w-1/2">
        <div class="rounded-full bg-white w-[200px] h-[200px] flex items-center justify-center">
        <img src={livarnoHome} alt='livarnoHome' class="w-[180px] "/>
        </div>
        </div>
        <div class="p-4 sm:w-1/6 w-1/2">
        <div class="rounded-full bg-white w-[200px] h-[200px] flex items-center justify-center">
        <img src={livarnoLiving} alt='livarnoLiving' class="w-[180px] "/>
        </div>
        </div>
    </div>
  </div>
</section>


<div class="inline-flex items-center justify-center w-full">
    <hr class="w-[42%] h-px my-8 bg-gray-700 border-[1px] " />
    <div class=" px-3 font-medium text-gray-900   ">
    <i class="fa-solid fa-angle-down px-4"></i>
    </div>
    <hr class="w-[42%] h-px my-8 bg-gray-900 border-[1px] " />
</div>
</>
  )
}

export default Ourbrand