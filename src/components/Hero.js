import React from 'react'
import Heroimg from "../assets/hero.png"
import Productbrand from "./Productbrand";

export default function Hero() {
  return (
    <div>
      <section className="mx-auto px-6 md:px-12 lg:px-[150px] py-20 mt-20">
        <div className="flex flex-col lg:flex-row items-center gap-10">

          <div className="lg:w-1/2 text-center lg:text-left">
            <h1 className="text-[42px] md:text-[65px] lg:text-[88px] font-bold text-gray-800 leading-tight">
              Track your Expenses to Save Money
            </h1>

            <p className="text-[#BDBDBD] mt-5 text-[18px] md:text-[22px]">
              Helps you to organize your income and expenses
            </p>

            <div className="flex flex-col md:flex-row items-center justify-center lg:justify-start gap-4 mt-6">
              <button className="bg-[#FF7235] text-white px-6 py-4 rounded text-[20px] md:text-[24px]">
                Try free demo
              </button>

              <button className="text-[#BDBDBD] text-[18px] md:text-[24px]">
                — Web, iOS and Android
              </button>
            </div>
          </div>

          <div className="lg:w-1/2 flex justify-center">
            <img 
              src={Heroimg} 
              alt="Hero" 
              className="w-[280px] md:w-[400px] lg:w-[500px]"
            />
          </div>

        </div>
      </section>

      <Productbrand />
    </div>
  )
}
