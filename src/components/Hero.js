import React from "react";
import Heroimg from "../assets/hero.png";
import Productbrand from "./Productbrand";

export default function Hero() {
  return (
    <div>
      <section className="mx-auto px-6 md:px-12 lg:px-[150px] py-20 mt-20">
        <div className="flex flex-col lg:flex-row items-center gap-10">
          <div className="lg:w-1/2">
            <h1 className="text-[32px] md:text-[44px] lg:text-[60px] font-bold text-gray-800 md:text-center sm:text-center">
              Track your Expenses to Save Money
            </h1>

            <p className="text-[#BDBDBD] mt-5 text-[14px] sm:text-[16px] md:text-[18px] lg:text-[22px] md:text-center sm:text-center">
              Helps you to organize your income and expenses
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 mt-6">
              <button
                className="bg-[#FF7235] text-white px-6 py-3 sm:py-4 rounded text-[16px] sm:text-[18px] md:text-[20px] lg:text-[22px]">
                Try free demo
              </button>

              <button className="text-[#BDBDBD] text-[14px] sm:text-[16px] md:text-[18px] lg:text-[20px]">
                — Web, iOS and Android
              </button>
            </div>
          </div>

          <div className="lg:w-1/2 flex justify-center">
            <img
              src={Heroimg}
              alt="Hero"
              className="w-[220px] sm:w-[280px] md:w-[380px] lg:w-[500px] xl:w-[560px] h-auto"
            />
          </div>
        </div>
      </section>

      <Productbrand />
    </div>
  );
}
