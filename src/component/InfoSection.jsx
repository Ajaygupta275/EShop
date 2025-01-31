import React from "react";
import { FaHeadset, FaMoneyBillWave, FaShippingFast, FaTag } from "react-icons/fa";

export default function InfoSection(){
    const infoItems=[
        {
          icon:<FaShippingFast className="text-3xl text-red-600"/>,
           title:"Free Shipping",
           description:"Get Your Oders deliverd with no extra cost",
        },

        {
            icon:<FaHeadset  className="text-3xl text-red-600"/>,
             title:"Support 24/7",
             description:"We are assits any times ",
        },

        {
            icon:<FaTag  className="text-3xl text-red-600"/>,
             title:"Discount",
             description:"Enjoy the best prices on our products",
        },

        {
            icon:<FaMoneyBillWave  className="text-3xl text-red-600"/>,
             title:"100% Money Back Gauranty",
             description:"Full Refund You are satisfied",
        },
        {
            icon:<FaTag  className="text-3xl text-red-600"/>,
             title:"Discount",
             description:"Enjoy the best prices on our products",
        },
        
    ]
    
   return(
    <>
       <div className="bg-white pb-8 pt-12">
         <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4 ">
            {infoItems.map((items,index)=>(
              <div key={index} className="flex flex-col items-center text-center p-4 border rounded-lg shadow-md transform transition-transform duration-300 hover:scale-105 cursor-pointer">
                  {items.icon}
                  <h3 className="mt-4 text-xl font-semibold">{items.title}</h3>
                  <p className="mt-2 text-gray-600">{items.description}</p>
              </div>

            ))}
         </div>
       </div>
    </>
   )
}