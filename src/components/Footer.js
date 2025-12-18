import React from "react";
import Img1 from "../assets/f1.png";
import Img2 from "../assets/f2.png";
import Logo from "../assets/Logo.png";

export default function Footer() {
  return (
    <>
      <section className="mt-20 px-6 sm:px-10 md:px-16 lg:px-24 py-12 bg-[#FF7235] bg-gradient-to-tr from-[#FF723566] to-[#FFFFFF66]">
        <div className="flex flex-col items-center relative">
          <h1 className="text-white text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-center leading-none mt-10">
            20M+ downloaded from 32 diffrent countires
          </h1>
          <p className="text-white text-center text-lg sm:text-xl md:text-2xl lg:text-3xl mt-4">
            Try demo for 7 days with full features.
          </p>
          <div className=" flex items-center justify-center gap-6 mt-6">
            <button className="bg-white text-[#FF7235] px-6 py-3 sm:py-4 font-normal rounded text-base sm:text-lg md:text-xl lg:text-2xl">
              Try free demo
            </button>
          </div>
<div className="relative w-full mt-10 flex justify-center gap-4 flex-wrap">
          <img
            src={Img2}
            alt=""
            className="w-[200px] sm:w-[250px] md:w-[350px] lg:w-[400px] xl:w-[445px]"
          />
          <img
            src={Img1}
            alt=""
            className="w-[200px] sm:w-[250px] md:w-[350px] lg:w-[400px] xl:w-[445px]"
          />
        </div>
        </div>
      </section>

      <section className="product mx-auto px-6 sm:px-10 md:px-16 lg:px-24 py-16 mt-20">
        <div className="flex flex-col sm:flex-wrap sm:flex-row md:flex-row justify-between gap-10">
          <div className="w-full sm:w-1/2 md:w-auto">
            <img src={Logo} alt="" className="w-[112px]" />
          </div>
          <div className="flex flex-col w-full sm:w-1/2 md:w-auto">
            <h4 className="uppercase mb-3 font-semibold text=[#292830]">
              Links
            </h4>
            <ul className="  text-gray-700 ">
              <li className="mt-1">
                <a href="/" className="hover:text-gray-900">
                  Home
                </a>
              </li>

              <li className="mt-1">
                <a href="/" className="hover:text-gray-900">
                  About us
                </a>
              </li>
              <li className="mt-1">
                <a href="/" className="hover:text-gray-900">
                  Careers
                </a>
              </li>
              <li className="mt-1">
                <a href="/" className="hover:text-gray-900">
                  Features
                </a>
              </li>

              <li className="mt-1">
                <a href="/" className="hover:text-gray-900">
                  Pricing
                </a>
              </li>
              <li className="mt-1">
                <a href="/" className="hover:text-gray-900">
                  Blog
                </a>
              </li>
            </ul>
          </div>
          <div className="flex flex-col w-full sm:w-1/2 md:w-auto">
            <h4 className="uppercase mb-3 font-semibold text=[#292830]">
              Legal
            </h4>
            <ul className="  text-gray-700">
              <li className="mt-1">
                <a href="/" className="hover:text-gray-900">
                  Terms of use
                </a>
              </li>

              <li className="mt-1">
                <a href="/" className="hover:text-gray-900">
                  Terms of conditions
                </a>
              </li>
              <li className="mt-1">
                <a href="/" className="hover:text-gray-900">
                  Privecy policy
                </a>
              </li>
              <li className="mt-1">
                <a href="/" className="hover:text-gray-900">
                  Cookie policy
                </a>
              </li>
            </ul>
          </div>
          <div className="w-full sm:w-1/2 md:max-w-sm">
            <h4 className="uppercase mb-3 font-semibold text=[#292830]">
              Newsletter
            </h4>

            <p className="text-[#BDBDBD]">Over 25000 people have subscribed</p>
            <div className="flex flex-row">
              <input
                type="email"
                name="email"
                id="email"
                placeholder="Enter your email"
                className="rounded border mt-2 p-3 w-[250px]"
              />
              <button className="bg-[#FF7235] text-white p-none rounded font-normal w-[78px] h-[41px] relative top-[13px]  sm:right-[81px]">
                Subscribe
              </button>
            </div>
            <p className="text-[#BDBDBD] mt-1 text-[14px]">
              We don’t sell your email and spam
            </p>
          </div>
        </div>
        <hr className="mt-6" />
        <div className="mt-3 flex justify-between  flex-row text-[#292830]">
          <div className="flex gap-3 flex-row">
            <span>Privacy & Terms</span>
            <span>Contact Us</span>
          </div>
          <div className="">
            <span>Copyright @ 2022 xpence</span>
          </div>
          <div className="gap-4 flex">
            <i class="fa-brands fa-square-facebook"></i>
            <i class="fa-brands fa-square-twitter"></i>
            <i class="fa-brands fa-square-twitter"></i>
            {/* <i class="fa-brands fa-square-linkedin"></i> */}
          </div>
        </div>
      </section>
    </>
  );
}
