import React, { useEffect, useRef, useState } from "react";
import { useProduct } from "../context/ProductContext";
import { cases } from "../reducers/Cases";
import { NavLink, useParams } from "react-router";
import active from "../assets/css/button.module.css";
import { FiSearch } from "react-icons/fi";
import { LuShoppingBag } from "react-icons/lu";
import { IoCloudyNight } from "react-icons/io5";
import { MdNightsStay } from "react-icons/md";
import icon from "../assets/media/svg/jawda_logo_dark.svg";
import { FaRegUser } from "react-icons/fa";
import { useCart } from "react-use-cart";

import gsap from "gsap";

const Navbar = () => {
  const { state, dispatch } = useProduct();
  const { nightMode } = state;
  const { items } = useCart();
  const navRef = useRef(null);
  const [currentLocation, setCurrentLocation] = useState("");

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline();

      tl.from(".nav-bar", {
        y: -30,
        opacity: 0,
        duration: 0.8,
        ease: "power2.out",
      })
        .from(
          ".nav-icon",
          {
            x: -25,
            opacity: 0,
            duration: 0.7,
            ease: "power2.out",
          },
          0.3,
        )
        .from(
          ".nav-pages li",
          {
            y: -15,
            opacity: 0,
            duration: 0.5,
            stagger: 0.12,
            ease: "power2.out",
          },
          0.4,
        )
        .from(
          ".nav-NavLinks li",
          {
            y: -15,
            opacity: 0,
            duration: 0.5,
            stagger: 0.12,
            ease: "power2.out",
          },
          0.5,
        );
    }, navRef);

    return () => ctx.revert();
  }, []);

  useEffect(() => {
    setCurrentLocation(location.pathname.replace("/", ""));
  }, [location.pathname]);

  return (
    <React.Fragment>
      <nav
        ref={navRef}
        className="nav-bar fixed top-0 left-0 z-50 h-24 w-full bg-[#012016e1] px-4 py-2 flex justify-between items-center"
      >
        <div className="nav-content flex md:gap-x-6 lg:gap-x-12 w-[60%]">
          <div className="nav-icon">
            <img src={icon} className="w-32 xl:w-40" alt="" />
          </div>

          <ul className="nav-pages text-white hidden md:flex items-center gap-x-10 font-['Playfair'] text-lg xl:text-xl select-none">
            <li className="">
              <NavLink
                className={({ isActive }) =>
                  `${isActive ? active.active : ""} hover:text-[#ffdea8] transition-all`
                }
                to="/"
              >
                HOME
              </NavLink>
            </li>

            <li className="">
              <NavLink
                className={({ isActive }) =>
                  `${isActive ? active.active : ""} hover:text-[#ffdea8] transition-all`
                }
                to="/collections"
              >
                COLLECTIONS
              </NavLink>
            </li>

            <li className="">
              <NavLink
                className={({ isActive }) =>
                  `${isActive ? active.active : ""} hover:text-[#ffdea8] transition-all`
                }
                to="/about"
              >
                ABOUT
              </NavLink>
            </li>
          </ul>
        </div>

        <ul className="nav-NavLinks text-white flex gap-x-8 md:gap-x-12 ">
          {currentLocation == "" && (
            <li className="cursor-pointer select-none">
              <FaRegUser 
                onClick={() => {
                  dispatch({ type: cases.CLICKED_SEARCH });
                }}
                strokeWidth={2}
                className="text-xl xl:text-2xl hover:text-[#ffdea8] transition-all"
              />
            </li>
          )}

          {currentLocation != "" && (
            <li className="cursor-pointer select-none">
              <FiSearch
                onClick={() => {
                  dispatch({ type: cases.CLICKED_SEARCH });
                }}
                strokeWidth={2}
                className="text-xl xl:text-2xl hover:text-[#ffdea8] transition-all"
              />
            </li>
          )}

          <li className="cursor-pointer relative select-none">
            <LuShoppingBag
              onClick={() => {
                dispatch({ type: cases.CLICKED_SIDEBAR });
              }}
              strokeWidth={2}
              className="text-xl xl:text-2xl hover:text-[#ffdea8] transition-all"
            />
            <span className="absolute select-none bg-[#ffdea8] top-[-35%] px-1 rounded-2xl right-[-20%] text-xs font-medium">
              {items.length}
            </span>
          </li>

          <li
            className="cursor-pointer select-none"
            onClick={() => dispatch({ type: cases.CLICKED_NIGHT_MODE })}
          >
            {nightMode ? (
              <MdNightsStay className="text-xl xl:text-2xl hover:text-[#ffdea8] transition-all" />
            ) : (
              <IoCloudyNight className="text-xl xl:text-2xl hover:text-[#ffdea8] transition-all" />
            )}
          </li>
        </ul>
      </nav>
    </React.Fragment>
  );
};

export default Navbar;
