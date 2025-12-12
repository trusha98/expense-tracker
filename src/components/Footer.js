import React from "react";
import Img1 from "../assets/f1.png";
import Img2 from "../assets/f2.png";
import Logo from "../assets/Logo.png";

export default function Footer() {
  return (
    <>
      <section className="xl:h-[700px] lg:h-[750px] product mt-20 px-[150px] py-12 bg-[#FF7235] bg-gradient-to-tr from-[#FF723566] to-[#FFFFFF66]">
        <div className="flex justify-center flex-col mt-5">
          <h1 className="text-white text-[72px] font-bold mb-4  text-center leading-none mt-10">
            20M+ downloaded from 32 diffrent countires
          </h1>
          <p className="text-white text-center text-[36px]">
            Try demo for 7 days with full features.
          </p>
          <div className=" flex items-center justify-center gap-6 mt-6">
            <button className="bg-white text-[#FF7235] px-6 py-4 font-normal rounded text-[24px]">
              Try free demo
            </button>
          </div>

          <img
            src={Img2}
            alt=""
            className="xl:w-[445px] relative xl:-top-[100px] right-[76px] lg:-top-[67px] lg:w-[400px]"
          />
          <img
            src={Img1}
            alt=""
            className="w-[445px] relative xl:-top-[430px] xl:left-[650px] lg:-right-[370px] lg:-top-[352px] lg:w-[400px]"
          />
        </div>
      </section>

      <section className="product mt-20 px-[150px] ">
        <div className="flex justify-between  flex-row">
          <div className="">
             <img src={Logo} alt="" className="img-fluid w-[112px]" />
          </div>
          <div className="flex flex-col ">
             <h4 className="uppercase mb-3 font-semibold text=[#292830]">Links</h4>
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
            <div className="flex flex-col ">
               <h4 className="uppercase mb-3 font-semibold text=[#292830]">Legal</h4>
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
          <div className="">
            <h4 className="uppercase mb-3 font-semibold text=[#292830]">Newsletter</h4>

            <p className="text-[#BDBDBD]">Over 25000 people have subscribed</p>
             <div className="flex flex-row">
            <input type="email" name="email" id="email" placeholder="Enter your email" className="rounded border mt-2 p-3 w-[250px]"/>
            <button className="bg-[#FF7235] text-white p-none rounded font-normal w-[78px] h-[41px] relative top-[13px] right-[81px]">Subscribe</button>
            </div>
            <p className="text-[#BDBDBD] mt-1 text-[14px]">We don’t sell your email and spam</p>
          </div>
        </div>
        <hr className="mt-6"/>
        <div className="mt-3 flex justify-between  flex-row text-[#292830]">
          <div className="flex gap-3 flex-row">
            <span >Privacy & Terms</span>
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
