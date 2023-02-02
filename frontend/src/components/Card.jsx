
import React from 'react';
import Data from './carddata';

const Card = () => {

    return (

        <section class="footer-link body-font  mx-auto ">
        <div class="container p-2 mx-auto my-2 content-center  ">
          <div class="flex flex-wrap mx-auto   ">
        


           { Data.map((dataitem) => (
           
            <div class="lg:w-[24%] md:w-1/2   border-2 border-gray-200 rounded-lg mx-auto my-[15px]">
              <a class="block relative h-68 rounded overflow-hidden">
              
              <img src={dataitem.image} alt="" className="object-cover object-center w-full rounded-t-md h-72 dark:bg-gray-500" />
        
              </a>
              <div class="my-4">
              <h2 className="text-xl text-[#353B42] font-semibold tracking-wide text-left ml-4">{dataitem.title}</h2>       
              
              </div>
            </div>
              ))}

            </div>
          </div>
        </section>
         
            )

        
    
 
}

export default Card

