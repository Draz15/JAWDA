import React from "react";
import { FaArrowRight } from "react-icons/fa6";
import gsap from 'gsap';

const Header = ({ image }) => {
    
////////////////// handel animation section  //////////////////////

 const onEnter = (e)=> gsap.to(".icon", { x: 10, duration: 0.3 })
 const onLeave = (e)=> gsap.to(".icon", { x: 0, duration: 0.3 })


  return (
    <header className="w-full h-screen relative">

        {/* display image */}
      <img
        src={image}
        className="w-full h-full object-top object-cover"
        alt=""
      />

      <div className="over-lay flex items-center p-5 md:p-8 absolute top-0 lef-0 w-full h-full bg-[#fff79d3f]">
 
 {/* start hero section  */}

        <div className="header-content space-y-16 min-w-80">

          <div className="statements space-y-8 max-w-2xl">
            <h3 className="font-['Playfair'] tracking-wide md:tracking-wider text-3xl md:text-5xl text-[#ffedc4]">
              Quality, Made Simple.
            </h3>
            <p className="font-['Inter'] text-xl md:text-2xl md:tracking-wide leading-6 md:leading-9 text-[#fdf4df]">
              Discover accessories that bridge artisanal heritage with
              contemporary minimalism. Quiet luxury for the modern wardrobe.
            </p>
          </div>

          <button onMouseEnter={() => onEnter()}  onMouseLeave={() => onLeave()} className="header-btn flex gap-4 items-center justify-center text-xl font-medium cursor-pointer py-4 md:py-6 px-6 md:px-10 rounded-xl text-[#795500] bg-[#fff9ea]">
            <span className="">Explore The Archive</span>
            <FaArrowRight className="icon" />
          </button>
        </div>

      </div>
    </header>
  );
};

export default Header;
