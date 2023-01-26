import React from 'react'

const Navbar4 = () => {
  return (
    <div className='  flex mx-auto w-[80%]   text-[15px] justify-center  '>

        	<div className="flex   text-gray-700   md:justify-center md:space-x-8">
	<button aria-label="Slide back" type="button" className=" 
 focus:outline-none focus:focus:ring-2 focus:ring-offset-2 focus:ring-gray-400">
		<svg width="8" height="14" fill="none" viewBox="0 0 8 14" xmlns="http://www.w3.org/2000/svg" className="w-4 h-4">
			<path d="M7 1L1 7L7 13" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path>
		</svg>
	</button>
    </div>
    
	<div className="container overflow-x-auto  justify-between  mx-auto text-gray-700    md:justify-center md:space-x-8">
		
        <ul className="items-stretch whitespace-nowrap text-[18px] mt-1 mb-2 hidden space-x-3 md:flex">
			<li className="flex 
">
				<a rel="noopener noreferrer" href="#" className=" flex items-center 
  px-4 ">WinterSale</a>
			</li>
			<li className="flex">
				<a rel="noopener noreferrer" href="#" className="flex items-center px-4  dark:border-transparent">Power Weeks</a>
			</li>
			<li className="flex">
				<a rel="noopener noreferrer" href="#" className="flex items-center px-4  dark:border-transparent ">Fashion</a>
			</li>  
		<li className="flex">
				<a rel="noopener noreferrer" href="#" className="flex items-center px-4  text-red-600 dark:border-transparent">Household & Kitchen</a>
			</li>
			<li className="flex">
				<a rel="noopener noreferrer" href="#" className="flex items-center px-4  dark:border-transparent">Reside</a>
			</li>
			<li className="flex">
				<a rel="noopener noreferrer" href="#" className="flex items-center px-4  dark:border-transparent">Hardware Store
                </a>
			</li>
            <li className="flex">
				<a rel="noopener noreferrer" href="#" className="flex items-center px-4  dark:border-transparent">Baby Child</a>
			</li>
			<li className="flex">
				<a rel="noopener noreferrer" href="#" className="flex items-center px-4  dark:border-transparent">Multimedia</a>
			</li>
            <li className="flex">
				<a rel="noopener noreferrer" href="#" className="flex items-center px-4  dark:border-transparent">Outdoors & Sports</a>
			</li>
			<li className="flex">
				<a rel="noopener noreferrer" href="#" className="flex items-center px-4  dark:border-transparent">Wine & Spirits</a>
			</li>
            <li className="flex">
				<a rel="noopener noreferrer" href="#" className="flex items-center px-4  dark:border-transparent">Health</a>
			</li>
            <li className="flex">
				<a rel="noopener noreferrer" href="#" className="flex items-center px-4  dark:border-transparent">Garden & Balcony</a>
			</li>
			<li className="flex">
				<a rel="noopener noreferrer" href="#" className="flex items-center px-4  dark:border-transparent">Pet Supplies</a>
			</li>
            <li className="flex">
				<a rel="noopener noreferrer" href="#" className="flex items-center px-4  dark:border-transparent">Prepaid Cards & Vouchers</a>
			</li>
		</ul>
	</div>


    <div className=" flex   mx-auto text-gray-700    md:justify-center md:space-x-8">

	<button aria-label="Slide forward" id="next" className="
  ">
		<svg width="8" height="14" viewBox="0 0 8 14" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-4 h-4">
			<path d="M1 1L7 7L1 13" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path>
		</svg>
	</button>
    </div>

</div>
 
  )
}

export default Navbar4