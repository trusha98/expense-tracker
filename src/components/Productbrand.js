import React from "react";
import Product from "../assets/product.png";
import Facebook from "../assets/facebook.png";
import Google from "../assets/google.png";
import Cocacola from "../assets/cocacola.png";
import Linkedin from "../assets/linkedin.png";
import Samsung from "../assets/samsung.png";

export default function Productbrand() {
  return (
    <div>
      <section
        className="product bg-[#FF7235] 
        bg-gradient-to-tr from-[#FF723566] to-[#FFFFFF66]
         mx-auto px-6 sm:px-10 md:px-16 lg:px-24 py-16 mt-20
      "
      >
        <div className="mb-0 mt-10 lg:-mb-[64px] md:-mb-[64px] sm:-mb-[65px]">
          <img src={Product} alt="" className="" />
        </div>
      </section>

     <section className="bg-white py-12">
  <div className=" mx-auto px-6 sm:px-10 md:px-16 lg:px-24">
    <div className="flex flex-wrap items-center justify-center lg:justify-between gap-8">
      
      <img src={Facebook} alt="Facebook" className="w-[90px] sm:w-[85px] md:w-[100px] lg:w-[140px]" />
      <img src={Google} alt="Google" className="w-[90px] sm:w-[85px] md:w-[100px] lg:w-[140px]" />
      <img src={Cocacola} alt="Cocacola" className="w-[90px] sm:w-[85px] md:w-[100px] lg:w-[140px]" />
      <img src={Linkedin} alt="LinkedIn" className="w-[90px] sm:w-[85px] md:w-[100px] lg:w-[140px]" />
      <img src={Samsung} alt="Samsung" className="w-[90px] sm:w-[85px] md:w-[100px] lg:w-[140px]" />

    </div>
  </div>
</section>
    </div>
  );
}
