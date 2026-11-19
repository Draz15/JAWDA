import React from "react";
import { Link } from "react-router";
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const Footer = () => {
  return (
    <footer className="flex flex-col justify-end gap-y-10 h-fit px-4 pt-14 items-baseline bg-[#012016]">
      <div className="footer-data flex justify-between gap-4 md:gap-6 w-full h-40 flex-wrap md:flex-nowrap mb-41 sm:mb-15 md:mb-2">
        {/* start part */}
        <div className="titles text-center space-y-6 w-fit md:w-[26%]">
          <h3 className="title text-3xl sm:text-2xl md:text-3xl lg:text-4xl font-medium tracking-[.5rem] text-[#795500]">
            JAWDA
          </h3>
          <p className="subTitle text-sm xl:text-base tracking-widest text-[#cecece7e] ml-3 w-full">
            EDITORIAL ARTISANRY
          </p>
        </div>

        {/* middle part  */}
        <div className="w-full sm:w-[50%] md:min-w-[35%]  flex justify-around md:justify-between gap-4 md:gap-6 my-4 sm:my-0">


          <ul className="space-y-1 text-center md:w-[50%]">
            <li className="mb-4 text-xs md:text-sm text-[#725001] tracking-[.32rem] md:tracking-[.45rem] font-medium">
              CURATION
            </li>
            <li className="text-white hover:text-[#725001] duration-100 transition-all">
              <Link className="text-xs md:text-sm" to="">
                About
              </Link>
            </li>
            <li className="text-white hover:text-[#725001] duration-100 transition-all">
              <Link className="text-xs md:text-sm" to="">
                The Archive
              </Link>
            </li>
          </ul>

          {/* ===================================================================== */}

          <ul className="space-y-1 text-center md:w-[50%]">
            <li className="mb-4 text-xs md:text-sm text-[#725001] tracking-[.32rem] md:tracking-[.45rem] font-medium">
              CONTACT
            </li>
            <li className="text-white hover:text-[#725001] duration-100 transition-all">
              <Link className="text-xs md:text-sm" to="">
                Concierge
              </Link>
            </li>
            <li className="text-white hover:text-[#725001] duration-100 transition-all">
              <Link className="text-xs md:text-sm" to="">
                Global Studio
              </Link>
            </li>
          </ul>


        </div>

        {/* end part  */}

        <div className="flex flex-col justify-between items-end w-full md:w-[42%] text-left md:text-right px-4 md:px-0 mt-4 md:mt-0">
          <form
            action=""
            className="space-y-2 mr-auto md:mr-0 md:ml-auto w-full md:w-fit"
          >
            <p className="text-[#725001] text-sm lg:text-md sm:font-medium lg:font-semibold uppercase tracking-[.34rem] lg:tracking-[.45rem] pb-2">
              Join The Inner Circle
            </p>
            <div className="flex justify-between">
              <input
                type="text"
                placeholder="Enter your email"
                className="outline-0 text-sm lg:text-[1.1rem] font-normal text-[#cececed3]"
              />

              <input
                type="button"
                value="JOIN"
                className="text-xs lg:text-sm font-semibold cursor-pointer tracking-[.5rem] lg:tracking-[.59rem] uppercase text-[#cececef0] hover:text-[#725001] transition-all duration-200"
              />
            </div>
            <div className="h-[1.3px] w-full md:ml-auto bg-[#725001] my-2"></div>
          </form>

          <div className="accounts flex gap-x-6 mr-auto md:mr-0 md:ml-auto mt-2 md:mt-1">
            <a
              href=""
              className="p-1.5 md:p-2 rounded-full bg-[#795500] hover:bg-[#543d05] duration-300 transition-all"
            >
              <FaFacebookF className="text-lg text-white" />
            </a>
            <a
              href=""
              className="p-1.5 md:p-2 rounded-full bg-[#795500] hover:bg-[#543d05] duration-300 transition-all"
            >
              <FaInstagram className="text-lg text-white" />
            </a>
            <a
              href=""
              className="p-1.5 md:p-2 rounded-full bg-[#795500] hover:bg-[#543d05] duration-300 transition-all"
            >
              <FaXTwitter className="text-lg text-white" />
            </a>
          </div>
        </div>
      </div>

      <hr className="text-[#ffffff43] w-full h-fit" />

      <div className="copy-rights h-20 flex justify-between w-full items-baseline">
        <p className="text-[#cecece7e] text-[.5rem] sm:text-sm md:text-base select-none">
          {" "}
          &copy; 2026 JAWDA STUDIO. ALL RIGHTS RESERVED.
        </p>
        <ul className="accounts flex gap-x-2 sm:gap-x-6">
          <li className="text-[.5rem] sm:text-xs select-none text-[#cecece7e] md:text-sm sm:font-medium uppercase">
            PRIVACY
          </li>
          <li className="text-[.5rem] sm:text-xs select-none text-[#cecece7e] md:text-sm sm:font-medium uppercase">
            TERMS
          </li>
          <li className="text-[.5rem] sm:text-xs select-none text-[#cecece7e] md:text-sm sm:font-medium uppercase">
            SUSTAINABILITY
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
