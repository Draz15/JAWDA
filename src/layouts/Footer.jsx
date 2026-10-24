import React from "react";
import { Link } from "react-router";
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const Footer = () => {
  return (
    <footer className="flex flex-col justify-end gap-y-20 h-[50vh] p-4 items-center bg-[#f7f3ea]">
      <div className="footer-data flex justify-between w-full">
        <div className="titles text-center space-y-6">
          <h3 className="title text-4xl tracking-[.5rem] text-[#795500]">
            JAWDA
          </h3>
          <p className="subTitle tracking-widest text-[#414845] ml-3">
            EDITORIAL ARTISANRY
          </p>
        </div>
        <div className="links w-60 flex justify-between- sm:justify-evenly gap-x-4 text-center">
          <ul className="space-y-1">
            <li className="mb-4 text-sm">CURATION</li>
            <li className="text-gray-700 hover:text-black duration-100 transition-all">
              <Link className="" to="">
                About
              </Link>
            </li>
            <li className="text-gray-700 hover:text-black duration-100 transition-all">
              <Link className="" to="">
                The Archive
              </Link>
            </li>
          </ul>
          <ul className="space-y-1">
            <li className="mb-4 text-sm">CONTACT</li>
            <li className="text-gray-700 hover:text-black duration-100 transition-all">
              <Link className="" to="">
                Concierge
              </Link>
            </li>
            <li className="text-gray-700 hover:text-black duration-100 transition-all">
              <Link className="" to="">
                Global Studio
              </Link>
            </li>
          </ul>
        </div>
      </div>
      <div className="copy-rights flex justify-between w-full items-center">
        <p className="text-[#414845]">
          {" "}
          &copy; 2026 JAWDA STUDIO. ALL RIGHTS RESERVED.
        </p>
        <div className="accounts flex gap-x-6">
          <a href="" className="p-2 rounded-full bg-[#795500] hover:bg-[#543d05] duration-300 transition-all">
            <FaFacebookF className="text-lg text-white" />
          </a>
          <a href="" className="p-2 rounded-full bg-[#795500] hover:bg-[#543d05] duration-300 transition-all">
            <FaInstagram className="text-lg text-white" />
          </a>
          <a href="" className="p-2 rounded-full bg-[#795500] hover:bg-[#543d05] duration-300 transition-all">
            <FaXTwitter  className="text-lg text-white"/>
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
