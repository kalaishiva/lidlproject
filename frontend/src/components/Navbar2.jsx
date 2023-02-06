import React from 'react'



const Navbar2 = () => {
  return (
    <div className='  container flex justify-between  m-auto w-[83%]'>
          <header className="   justify-center items-center dark:text-gray-800">
	            <div className="container flex justify-around  mx-auto">

		             <a rel="noopener noreferrer" href="#" aria-label="Back to homepage" className="flex items-center p-6">
			         <img src='https://www.lidl.de/static/assets/c6855ba1-a17c-468f-b8b0-09fdab67dea7.svg' className='scale-150 ' />
		             </a>


        <fieldset className=" dark:text-gray-400 m-[30px] ">
               <div className="flex ">
		          <input type="text" name="price" id="price" placeholder="What are you searching for? " className="flex  border border-red-600 w-[490px] rounded-l-[4px]  px-[12px] py-[12px] sm:text-sm   dark:border-gray-700  dark:bg-gray-100 " />
		          <span className="flex items-center px-4 rounded-r-[4px] pointer-events-none sm:text-sm  dark:bg-[#fff000] border border-black">
                  <i class="fa-sharp fa-solid fa-magnifying-glass "></i>
                  </span>  
	            </div>
        </fieldset>
		</div>
		</header>

    <section class=" text-gray-600 body-font ">
        <div class="container px-1 py-1 ">
          <ul class="flex   text-center gap-x-6  ">

		<li class=" mx-[8px]  sm:w-1/6 w-1/2 flex flex-col  justify-center items-center ">
        <h2 class="title-font  sm:text-4xl text-3xl text-gray-900 "><img src="https://www.lidl.de/static/assets/6c9ec68f-c9ba-49c1-8931-ef1a7b62663f.svg" className=" my-2 w-[30px] h-[30px]   " /></h2>
        <p class=" text-[14px] truncate ">Lidl Insiders</p>
         </li>

	  <li class=" p-1 mx-[8px] sm:w-1/6 w-1/2 flex flex-col  justify-center items-center ">
        <h2 class="title-font  sm:text-4xl text-3xl text-gray-900 "><img src="https://www.lidl.de/static/assets/443fc46b-8469-41b8-be66-6f561cb6735d.svg" className=" my-2 w-[30px] h-[30px]   " /></h2>
        <p class=" text-[14px]">Brochures</p>
      </li>
      <li class=" p-1 mx-[8px] sm:w-1/6 w-1/2 flex flex-col justify-center items-center">
        <h2 class="title-font  sm:text-4xl text-3xl text-gray-900"><img src="	https://www.lidl.de/n/header/icons/storesearch-7ca2a9ea4695f74b7d2af1d62dc0ecb2.svg" className=" my-2 w-[30px] h-[30px]"/></h2>
        <p class=" text-[14px] truncate">My branch</p>
      </li>
      <li class="  mx-[8px] sm:w-1/6 w-1/2 flex flex-col justify-center items-center">
        <h2 class="title-font  sm:text-4xl text-3xl text-gray-900"><img src="	https://www.lidl.de/cdn/assets/icons/1.0.0/user.svg" className=" my-2 w-[30px] h-[30px]"/></h2>
        <p class=" text-[14px] truncate">My account</p>
      </li>
      <li class=" p-1 mx-[8px] sm:w-1/6 w-1/2 flex flex-col justify-center items-center">
        <h2 class="title-font  sm:text-4xl text-3xl text-gray-900"><img src="https://www.lidl.de/cdn/assets/icons/1.0.0/heart.svg" className="my-2 w-[30px] h-[30px]"/></h2>
        <p class=" text-[14px]">Bookmarks</p>
      </li>
	  <li class=" p-1 mx-[8px] sm:w-1/6 w-1/2 flex flex-col justify-center items-center">
        <h2 class="title-font  sm:text-4xl text-3xl text-gray-900"><img src="	https://www.lidl.de/cdn/assets/icons/1.0.0/shopping-cart.svg" className=" my-2 w-[30px] h-[30px]"/></h2>
        <p class="  mx-[10px] text-[14px] truncate">Shopping cart</p>
      </li>
			
		
		</ul>
			</div>
			</section>
	</div>

    
  )
}

export default Navbar2