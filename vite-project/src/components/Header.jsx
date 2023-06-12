import React from "react";
import { ecologo, cartimage, Profile } from "../assets/index";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const Header = () => {
  const productData = useSelector((state) => state.bazar.productData);
const userInfo = useSelector((state) => state.bazar.userInfo)
  return (
    <div className="w-full h-20 bg-white border-b-[1px] border-b-gray-800 font-titleFont sticky top-0 z-50">
      <div className="max-w-screen-xl h-full mx-auto flex items-center justify-between">
        <Link to="/">
          <div>
            <img className="w-12" src={ecologo} alt="headerlogo" />
          </div>
        </Link>

        <div className="flex items-center gap-7">
          <ul className="flex items-center gap-7">
            <Link to="/">
              <li className="text-base text-black font-bold hover:text-orange-900 hover:underline underline-offset-2 decoration-[1px] cursor-pointer duration-300">
                Home
              </li>
            </Link>

            <li className="text-base text-black font-bold hover:text-orange-900 hover:underline underline-offset-2 decoration-[1px] cursor-pointer duration-300">
              Pages
            </li>
            <li className="text-base text-black font-bold hover:text-orange-900 hover:underline underline-offset-2 decoration-[1px] cursor-pointer duration-300">
              Shop
            </li>
            <li className="text-base text-black font-bold hover:text-orange-900 hover:underline underline-offset-2 decoration-[1px] cursor-pointer duration-300">
              Element
            </li>
            <li className="text-base text-black font-bold hover:text-orange-900 hover:underline underline-offset-2 decoration-[1px] cursor-pointer duration-300">
              Blog
            </li>
          </ul>

          <Link to="/cart">
            <div className="relative">
              <img src={cartimage} alt="cart-img" className="w-11" />
              <span className="absolute w-5 top-2.5 left-3.5 text-sm flex items-center justify-center font-semibold font-titleFont text-black">
                {productData.length}
              </span>
            </div>
          </Link>

          <Link to="/login">
            <img
              src={userInfo? userInfo.image: Profile}
              alt="profile icon"
              className="w-8 rounded-full "
            />
          </Link>

          {userInfo && <p>{userInfo.name}</p>}
        </div>
      </div>
    </div>
  );
};

export default Header;
