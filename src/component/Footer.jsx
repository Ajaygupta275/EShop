import React from "react";
import {FaFacebook,FaGithub,FaLinkedin,FaTwitter} from 'react-icons/fa'
import {Link} from 'react-router-dom'
export default function Footer(){
    return(
       <>
        <footer className="bg-gray-800  text-white py-8 px-4 md:px-16 lg:px-24">
          <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
            <p>
              Your one steps for all your needs.Shop with use and Experience the best Online Shooping Experience
            </p>
            <div>
              <h3>E-Shop</h3>
              <p>
                You one-steps fot all your needs. Shop with use and Experience the best Online
                Shoping
              </p>
            </div>
            <div className="flex flex-col md:items-center">
              <h4 className="text-lg font-semibold">Quick Links</h4>
              <ul className="mt-4 space-y-2">
                <li>
                  <Link  className="hover:underline" to='/'>Home</Link>
                </li>
                <li>
                  <Link className="hover:underline" to='/shop'>Shop</Link>
                  </li>

                  <li>
                  <Link className="hover:underline" to='/contact'>Contact</Link>
                  </li>
                  <li>
                  <Link className="hover:underline" to='/about'>About</Link>
                  </li>
                
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold ">Follow Us</h4>
              <div className="flex space-x-4 mt-4">
                <a href="" className="hover:text-gray-400"><FaFacebook/> </a>
                <a href=""  className="hover:text-gray-400"><FaTwitter/> </a>
                <a href=""  className="hover:text-gray-400"><FaGithub/> </a>
                <a href=""  className="hover:text-gray-400"><FaLinkedin/> </a>
              
              </div>
              <form className="flex items-center justify-center mt-8">
                <input type="email" placeholder="Enter Email" className="w-full p-2 rounded-l-lg bg-gray-800 border-gray-600"/>
                <button className="bg-red-600 text-white px-4 py-2 rounded-r-lg border border-gray">Subscribe</button> 
              </form>
            </div>
          </div>
          <div className="mt-8 border-t border-gray-700 pt-4">

            <div className="conatiner mx-auto flex flex-col md:flex-row justify-between items-center">
              <p>&copy; 2024 e-shop All right reserved</p>
              <div className="flex space-x-4 mt-4 md:mt-0">
                <a href="">Privacy Policy</a>
                <a href="">Term & Condition</a>
              </div>
            </div>
          </div>
        </footer>
       </>
    );
}