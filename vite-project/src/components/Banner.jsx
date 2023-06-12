import React, { useState } from "react";
import {
  boom,
  heavybass,
  magsafe,
  opencricket,
  openear,
  quickcharge,
  smartclipper,
  watch,
  wrapit,
} from "../assets/index";
import {BsChevronRight, BsChevronLeft} from 'react-icons/bs'

const Banner = () => {

    const [slide, setSlide] = useState(0)

const prevSlide = () => {
setSlide(slide === 0 ? 8 : (prev) => prev - 1)
};


const nextSlide = () => {
    setSlide(slide === 8 ? 0 : (prev) => prev + 1)

};
console.log(slide);


  const images = [
    boom,
    heavybass,
    magsafe,
    opencricket,
    openear,
    quickcharge,
    smartclipper,
    watch,
    wrapit,
  ];

  return (
    <div className="w-screen h-full overflow-x-hidden overflow-hidden">
      <div className="w-screen relative overflow-x-hidden">
        <div style={{transform: `translateX(-${slide * 100}vw)`}}
        className="w-[400vw] h-full flex transition-transform duration-1000">
          <img
            src={images[0]}
            alt="bannerimage"
            className="w-screen h-full object-cover"
            loading="priority"
          />
          <img
            src={images[1]}
            alt="bannerimage"
            className="w-screen h-full object-cover"
            loading="priority"
          />
          <img
            src={images[2]}
            className="w-screen h-full object-cover"
            loading="priority"
          />
          <img
            src={images[3]}
            alt="bannerimage"
            className="w-screen h-full object-cover"
            loading="priority"
          />
          <img
            src={images[4]}
            alt="bannerimage"
            className="w-screen h-full object-cover"
            loading="priority"
          />
          <img
            src={images[5]}
            alt="bannerimage"
            className="w-screen h-full object-cover"
            loading="priority"
          />
          <img
            src={images[6]}
            alt="bannerimage"
            className="w-screen h-full object-cover"
            loading="priority"
          />
          <img
            src={images[7]}
            alt="bannerimage"
            className="w-screen h-full object-cover"
            loading="priority"
          />
          <img
            src={images[8]}
            alt="bannerimage"
            className="w-screen h-full object-cover"
            loading="priority"
          />
        </div>

        <div className="absolute w-fit left-0 right-0 mx-auto flex gap-10 bottom-[30px]">
            <div onClick={prevSlide} className="w-14 h-12 border-[1px] border-gray-700 flex items-center justify-center hover: cursor-pointer 
            hover:bg-gray-700 hover:text-white active:bg-gray-900 duration-300  "><BsChevronLeft className="text-2xl"/></div>
            <div onClick={nextSlide} className="w-14 h-12 border-[1px] border-gray-700 flex items-center justify-center hover: cursor-pointer 
            hover:bg-gray-700 hover:text-white active:bg-gray-900 duration-300  "><BsChevronRight className="text-2xl"/></div>

        </div>
      </div>
    </div>
  );
};

export default Banner;
