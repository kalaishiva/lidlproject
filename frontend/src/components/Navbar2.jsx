import React from 'react'

const Navbar2 = () => {
  return (
    <div>
        <header className="p-4  dark:text-gray-800">
	<div className="container flex justify-around h-16 mx-auto">
		<a rel="noopener noreferrer" href="#" aria-label="Back to homepage" className="flex items-center p-2">
			<img src='https://www.lidl.de/static/assets/c6855ba1-a17c-468f-b8b0-09fdab67dea7.svg' />
		</a>


        <fieldset className=" dark:text-gray-400 
">
    <div className="flex 
 ">
		<input type="text" name="price" id="price" placeholder="What are you searching for? " className="flex  border border-red-600 w-[390px] rounded-l-[4px]  px-[12px] py-[12px] sm:text-sm   dark:border-gray-700  dark:bg-gray-100 " />
		<span className="flex items-center px-4 rounded-r-[4px] pointer-events-none sm:text-sm  dark:bg-[#fff000] border border-black">
        <i class="fa-sharp fa-solid fa-magnifying-glass "></i>
        </span>  
	</div>
</fieldset>


		<ul className="items-stretch hidden space-x-3 md:flex">
			<li className="flex">
				<a rel="noopener noreferrer" href="#" className="flex items-center px-4 -mb-1 border-b-2 dark:border-transparent">Lidl Insider</a>
			</li>
			<li className="flex">
				<a rel="noopener noreferrer" href="#" className="flex items-center px-4 -mb-1 border-b-2 dark:border-transparent">Brochures</a>
			</li>
			<li className="flex">
				<a rel="noopener noreferrer" href="#" className="flex items-center px-4 -mb-1 border-b-2 dark:border-transparent  ">My branch</a>
			</li>
			<li className="flex">
				<a rel="noopener noreferrer" href="#" className="flex items-center px-4 -mb-1 border-b-2 dark:border-transparent">My account</a>
			</li>
            <li className="flex">
				<a rel="noopener noreferrer" href="#" className="flex items-center px-4 -mb-1 border-b-2 dark:border-transparent  ">Bookmarks</a>
			</li>
			<li className="flex">
				<a rel="noopener noreferrer" href="#" className="flex items-center px-4 -mb-1 border-b-2 dark:border-transparent">Shopping cart</a>
			</li>
		</ul>
		<button className="flex justify-end p-4 md:hidden">
			<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6">
				<path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
			</svg>
		</button>
	</div>
</header>
    </div>
  )
}

export default Navbar2