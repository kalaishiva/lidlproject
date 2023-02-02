import React from 'react'

const Footer5 = () => {
  return (
    <section class="text-gray-600 body-font bg-[#4E5761]">
  <div class="container px-5 py-10 mx-auto  ">
    <div class="flex flex-wrap -m-4  justify-center text-center ">
      <div class="flex p-4 sm:w-1/5 w-1/2 ">
        <img class="w-[150px]" src='https://www.lidl.de/static/assets/c2c0806f-87d2-49fe-a638-1ff839af83a3.png'/>
         </div>
      <div class="flex p-4 sm:w-1/5 w-1/2">
       <img class="w-[150px]" src='https://www.lidl.de/static/assets/hdj-2022_Siegel-90464.png'/>
      </div>
      <div class="flex p-4 sm:w-1/5 w-1/2">
        <img class="w-[100px] h-[160px]" src='https://www.lidl.de/static/assets/retail-award2022-82380.jpg'/> 
        </div>
        <div class="flex p-4 sm:w-1/5 w-1/2">
        <img class="w-[150px]" src='	https://www.lidl.de/static/assets/ffbd4eee-8d85-4f9f-9905-fc4f6241fbc2.png'/> 
        </div>
        <div class="flex p-4 sm:w-1/5 w-1/2">
        <img class="w-[150px]" src='https://www.lidl.de/static/assets/d6fc779a-23fe-4316-8da2-df4b062adbb7.png'/> 
        </div>
     
    </div>
  </div>
  <div  style={{ borderTop: "1px solid #fff ", marginLeft: 140, marginRight: 200 }}></div>

	<div className="container flex justify-between  mx-auto py-8 text-gray-700   text-[23px] md:justify-center md:space-x-8">
		
        <ul className="items-stretch text-white text-[17px] hidden space-x-3 md:flex">
			<li className="flex">
				<a rel="noopener noreferrer" href="#" className="flex items-center px-4 -mb-1  dark:border-transparent">Imprint</a>
			</li>
			<li className="flex">
				<a rel="noopener noreferrer" href="#" className="flex items-center px-4 -mb-1 dark:border-transparent">Conditions</a>
			</li>
			<li className="flex">
				<a rel="noopener noreferrer" href="#" className="flex items-center px-4 -mb-1 dark:border-transparent ">Privacy Policy</a>
			</li>  
		<li className="flex">
				<a rel="noopener noreferrer" href="#" className="flex items-center px-4 -mb-1 border-b-2  dark:border-transparent">Additional legal information</a>
			</li>
			<li className="flex">
				<a rel="noopener noreferrer" href="#" className="flex items-center px-4 -mb-1 border-b-2 dark:border-transparent">Right of withdrawal</a>
			</li>
			<li className="flex">
				<a rel="noopener noreferrer" href="#" className="flex items-center px-4 -mb-1 border-b-2 dark:border-transparent">Compliance</a>
			</li>
            <li className="flex">
				<a rel="noopener noreferrer" href="#" className="flex items-center px-4 -mb-1 border-b-2 dark:border-transparent">Disposal of old electronic devices</a>
			</li>
			
		</ul>
	</div>
</section>
  )
}

export default Footer5