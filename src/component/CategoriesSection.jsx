import React from "react";
import kids from "../assets/image/kids.jpg"
import manclothes from "../assets/image/manclothes.jpg"
import manclothe from "../assets/image/manclothes.jpg"
export default function CategoriesSections(){
    
     const categories=[
        {
            title:"Men",
            imageUrl:manclothes,
        },
        {
            title:"WoMen",
            imageUrl:manclothe,
        },
        {
            title:"Kids",
            imageUrl:kids,
        }
     ]
    return(
        <>
          <div className="container mx-auto grid grid-cols-1 sm:grid-cols-3 gap-6 cursor-pointer ">
            {categories.map((category,index)=>(
                <div key={index} className="relative h-64 transform transition-transform duration-300">
                <img src={category.imageUrl} alt="" className="w-full h-full object-cover rounded-lg shadow-md"/>
                 <div className="absolute top-20 left-12">
                  <p className="text-xl font-bold">{category.title}</p>
                  <p className="text-gray-600">View All</p>
                 </div>
                
                </div>
            ))}
          </div>
        </>
    )
}