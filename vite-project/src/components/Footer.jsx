import React from "react";
import { ecologo } from "../assets/index";
import {
  RiFacebookLine,
  RiInstagramLine,
  RiYoutubeLine,
  RiTwitterLine,
  RiGithubLine,
} from "react-icons/ri";
import {CgProfile} from 'react-icons/cg'
import {BsCart} from 'react-icons/bs'
import {CiLocationOn, CiDeliveryTruck} from 'react-icons/ci'

const Footer = () => {
  return (
    <div className="bg-black text-[#949494] py-20 font-titleFont">
      <div className="max-w-screen-xl mx-auto grid grid-cols-4">
        <div className="flex flex-col gap-6">
          <img src={ecologo} alt="logo" className="w-12" />
          <p className="text-white text-sm tracking-wide">Eqqusstore.com</p>
          <div className="flex gap-5 text-40px] text-gray-400">
            <RiFacebookLine className="hover:text-white duration-300 cursor-pointer" />
            <RiInstagramLine className="hover:text-white duration-300 cursor-pointer" />
            <RiYoutubeLine className="hover:text-white duration-300 cursor-pointer" />
            <RiTwitterLine className="hover:text-white duration-300 cursor-pointer" />
            <RiGithubLine className="hover:text-white duration-300 cursor-pointer" />
          </div>
        </div>

        <div>
          <h2 className="text-2xl font-semibold text-white mb-4 font-titleFont">Locate Us</h2>
          <div className="flex flex-col gap-2 text-base "> 
            <p>Company: Equss Communication</p>
            <p>Mobile: 09064035138</p>
            <p>Phone:070233574</p>
            <p>Email: nelsonndukwe800@gmail.com</p>
          </div>
        </div>

        <div className="flex gap-2 flex-col text-base"> 
        <h2 className="text-2xl font-semibold text-white mb-4 font-titleFont">Profile</h2>
        <p className="flex items-center gap-3 hover:text-white duration-300 cursor-pointer"><span><CgProfile/></span>My Account</p>
        <p className="flex items-center gap-3 hover:text-white duration-300 cursor-pointer"><span><BsCart/></span>Checkout</p>
        <p className="flex items-center gap-3 hover:text-white duration-300 cursor-pointer"><span><CiLocationOn/></span>Order Tracking</p>
        <p className="flex items-center gap-3 hover:text-white duration-300 cursor-pointer"><span><CiDeliveryTruck/></span>Help and Support</p>


        </div>


        <div className="flex flex-col gap-8 items-center justify-center">
          <input type="email" placeholder="Enter Email..." className="bg-transparent border px-4 text-sm w-[300px] py-3 "/>
          <button className="text-sm border p-3 text-white border-t-0 hover:bg-gray-900 active:bg-white active:text-black ">Subscribe</button>
          </div>


      

      </div>
    </div>
  );
};

export default Footer;
