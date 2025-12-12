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
      <section className="product xl:h-[679px] px-[150px] py-12 bg-[#FF7235] bg-gradient-to-tr from-[#FF723566] to-[#FFFFFF66]">
        <div className="xl:mb-0 xl:mt-10 lg:-mb-[48px]">
          <img src={Product} alt="" className="" />
        </div>
      </section>

      <section className="brand bg-white h-[200px] px-[150px] py-12">
        <div className="flex justify-between items-center">
          <img src={Facebook} alt="" className="xl:w-[150px] lg:w-[120px]"/>
          <img src={Google} alt="" className="xl:w-[150px] lg:w-[120px]"/>
          <img src={Cocacola} alt="" className="xl:w-[150px] lg:w-[120px]"/>
          <img src={Linkedin} alt="" className="xl:w-[150px] lg:w-[120px]"/>
          <img src={Samsung} alt="" className="xl:w-[150px] lg:w-[120px]"/>
        </div>
      </section>
    </div>
  );
}
