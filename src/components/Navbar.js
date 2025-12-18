import React from "react";
import Logo from "../assets/Logo.png";

export default function Navbar() {
  return (
    <>
      <nav className="bg-white">
        <div className=" mx-auto px-6 md:px-20 py-3 flex justify-between items-center">
          <img src={Logo} alt="" className="img-fluid w-[112px]" />
          <ul className=" md:flex space-x-6 text-gray-700">
            <li>
              <a href="/" className="hover:text-gray-900">
                Features
              </a>
            </li>
            <li>
              <a href="/" className="hover:text-gray-900">
                About us
              </a>
            </li>
            <li>
              <a href="/" className="hover:text-gray-900">
                Pricing
              </a>
            </li>
            <li>
              <a href="/" className="hover:text-gray-900">
                Feedback
              </a>
            </li>
          </ul>
          <button className="border border-[#FF7235] text-[#FF7235] px-4 py-2 rounded font-normal">
            Request a demo
          </button>
        </div>
      </nav>
     
      
    </>
  );
}
