import React from 'react'
import Heroimg from "../assets/hero.png"
// import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import Productbrand from "./Productbrand";


export default function Hero(props) {
  return (
    <div>
        <section className=" mx-auto px-[150px] py-22 mt-20 md:px-[80px]">
            <div className="xl:flex xl:flex-col lg:flex-row justify-center gap-5 ">
                <div className="xl:w-1/2 xl:flex xl:flex-col  justify-center lg:width-full lg:mb-4 lg:text-center">
                <h1 className="text-[88px] font-bold mb-4 text-gray-800 leading-[100px] md:text-[65px] md:text-center">
           Track your Expenses to Save Money 11
          </h1>
          <p className="text-[#BDBDBD] mt-5 text-[22px] md:text-center"> Hsdselps you to organize your income and expenses</p>
          <div className="xl:flex md:text-center gap-4">
          <button className="bg-[#FF7235] text-white px-6 py-4 font-normal rounded mt-6  text-[24px] md:px-4 md:py-2 md:text-[20px]">
             Try free demo {/*<KeyboardArrowDownIcon/> */}
          </button>
            <button className="text-[#BDBDBD] text-[24px] mt-6">
            — Web, iOs and Android
          </button>
          </div>
          </div>

          <div className="xl:w-1/2 xl:flex xl:flex-col justify-center lg:width-full lg:mb-10 lg:mt-10 md:mt-10">
                <img src={Heroimg} alt="" className='xl:w-[500px] '/>
          </div>
          
            </div>
        </section>
        <Productbrand/>
    </div>
  )
}
