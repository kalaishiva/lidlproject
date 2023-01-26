import React from 'react';
import Fashion from '../images/02_Damenmode-110640.jpg';
import household from '../images/ea9d150b-53a1-48a5-864d-e3a46d7b1d8a.jpg';
/* import reside from '../images/frontend/src/images/a177f4fd-b926-49d2-b478-e7b81b5ac570.jpg'; 
import  hardware from '../images/frontend/src/images/576fa8c7-c54c-4796-94dc-85eca712df97-45525.jpg';
import babychild  from '../images/frontend/src/images/49616f3a-bbcc-401c-a722-8ec6d297a550.jpg';
 */import multimedia from '../images/Livarno_Home.jpeg';
//import outdoor from '../images/Livarno_Living.jpeg';
//import winespirits from '../images/bop-brandlogo-SilverCrest.svg';
/* import health from '../images/bop-brandlogo-SilverCrest.svg';
import Gardenbalcony from '../images/bop-brandlogo-SilverCrest.svg';
import petsupplies from '../images/bop-brandlogo-SilverCrest.svg';
import vouchers from '../images/bop-brandlogo-SilverCrest.svg'; */


const OurCategories = () => {
  return (
    <>
    <div class="inline-flex items-center justify-center w-full">
    <hr class="w-[41%] h-px my-8 bg-gray-700 border-[1px] " />
    <div class=" px-3 font-medium text-gray-900 ">Our Categories</div>
    <hr class="w-[41%] h-px my-8 bg-gray-900 border-[1px] " />
</div>

<section class="text-gray-600 body-font bg-[#FAFAFA]">
  <div class="container px-5 py-24 mx-auto">
    <div class="flex flex-wrap -m-4 text-center ">

      <div class="p-4 sm:w-1/6 w-1/2">
      <div class=" drop-shadow-lg  w-[12rem] h-[12rem] flex items-center justify-center">
        <img src={Fashion} alt='Parkside' class="w-[180px] rounded-full "/>
        
        </div>
        <div className='text-[#353B42] font-bold mt-[20px]'>Fashion</div>
      </div>
      <div class="p-4 sm:w-1/6 w-1/2">
      <div class=" drop-shadow-lg w-[12rem] h-[12rem] flex items-center justify-center">
        <img src={household} alt='Parkside' class="w-[180px] rounded-full"/>
        </div>
        <div className='text-[#353B42] font-bold mt-[20px]'>Household & Kitchen</div>
        </div>
        <div class="p-4 sm:w-1/6 w-1/2">
        <div class="drop-shadow-lg w-[200px] h-[200px] flex items-center justify-center">
        <img src="https://www.lidl.de/static/assets/a177f4fd-b926-49d2-b478-e7b81b5ac570.jpg" alt='esmara' class="w-[180px] rounded-full"/>
        </div>
        <div className='text-[#353B42] font-bold mt-[20px]'>Reside</div>
        </div>
        <div class="p-4 sm:w-1/6 w-1/2">
        <div class="drop-shadow-lg w-[200px] h-[200px] flex items-center justify-center">
        <img src="https://www.lidl.de/static/assets/576fa8c7-c54c-4796-94dc-85eca712df97-45525.jpg" alt='crivit' class="w-[180px] rounded-full"/>
        </div>
        <div className='text-[#353B42] font-bold mt-[20px]'>Hardware store</div>
        </div> 
         <div class="p-4 sm:w-1/6 w-1/2">
        <div class="drop-shadow-lg w-[200px] h-[200px] flex items-center justify-center">
        <img src="https://www.lidl.de/static/assets/49616f3a-bbcc-401c-a722-8ec6d297a550.jpg" alt='meradiso' class="w-[180px] rounded-full"/>
        </div>
        <div className='text-[#353B42] font-bold mt-[20px]'>Baby Child</div>
        </div>
        <div class="p-4 sm:w-1/6 w-1/2">
        <div class="drop-shadow-lg w-[200px] h-[200px] flex items-center justify-center">
        <img src="https://www.lidl.de/static/assets/be096988-0d9d-4540-a17e-2ebe453c2a5e.jpg" alt='crivit' class="w-[180px] rounded-full"/>
        </div>
        <div className='text-[#353B42] font-bold mt-[20px]'>Multimedia</div>
        </div>
        <div class="p-4 sm:w-1/6 w-1/2">
        <div class="drop-shadow-lg w-[200px] h-[200px] flex items-center justify-center">
        <img src="https://www.lidl.de/static/assets/07_Sport_Web-110681.jpg" alt='livergy' class="w-[180px] rounded-full"/>
        </div>
        <div className='text-[#353B42] font-bold mt-[20px]'>Outdoors & Sports</div>
        </div>
        <div class="p-4 sm:w-1/6 w-1/2">
        <div class="drop-shadow-lg w-[200px] h-[200px] flex items-center justify-center">
        <img src="https://www.lidl.de/static/assets/2761d142-1e59-424b-a33d-a90d4b7c4bd2.jpg" alt='livarnoHome' class="w-[180px] rounded-full"/>
        </div>
        <div className='text-[#353B42] font-bold mt-[20px]'>Wine & Spirits</div>
        </div>
        <div class="p-4 sm:w-1/6 w-1/2">
        <div class="drop-shadow-lg w-[200px] h-[200px] flex items-center justify-center">
        <img src="https://www.lidl.de/static/assets/8026ac3a-ecf3-455d-b233-5157af489675.jpg" alt='livarnoLiving' class="w-[180px] rounded-full"/>
        </div>
        <div className='text-[#353B42] font-bold mt-[20px]'>Health</div>
        </div> 
        <div class="p-4 sm:w-1/6 w-1/2">
        <div class="drop-shadow-lg w-[200px] h-[200px] flex items-center justify-center">
        <img src="https://www.lidl.de/static/assets/8de7a246-6b35-4e3f-bdfc-9bb631b2e9bf.jpg" alt='livarnoLiving' class="w-[180px] rounded-full"/>
        </div>
        <div className='text-[#353B42] font-bold mt-[20px]'>Garden & Balcony</div>
        </div>
         <div class="p-4 sm:w-1/6 w-1/2">
        <div class="drop-shadow-lg w-[200px] h-[200px] flex items-center justify-center">
        <img src="https://www.lidl.de/static/assets/9e84750f-34ab-4913-97e6-0ce016cabe7e.jpg" alt='livarnoLiving' class="w-[180px] rounded-full"/>
        </div>
        <div className='text-[#353B42] font-bold mt-[20px]'>Pet Supplies</div>
        </div>
        <div class="p-4 sm:w-1/6 w-1/2">
        <div class="drop-shadow-lg w-[200px] h-[200px] flex items-center justify-center">
        <img src="https://www.lidl.de/static/assets/61aa2a7c-ab13-481c-a0b7-74c6c411b84e.jpg" alt='livarnoLiving' class="w-[180px] rounded-full"/>
        </div>
        <div className='text-[#353B42] font-bold mt-[20px]'>Prepaid Cards & Vouchers</div>
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

export default OurCategories