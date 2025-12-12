import React from "react";

export default function About(props) {
  return (
    <>
      <section className="mx-auto px-[150px] py-22 mt-20">
        <div
          className={`md:flex-row  xl:flex xl:flex-col lg:flex-row justify-center gap-5  ${
            props.imageLeft ? "" : "md:flex-row-reverse"
          }`}
        >
         
          <div className="xl:w-1/2 flex xl:flex-col lg:flex-row justify-center">
            <img
              src={props.imageUrl}
              alt=""
              className="xl:w-[400px] lg:mt-16"
            />
          </div>

          <div className="xl:w-1/2 xl:flex xl:flex-col  justify-center lg:width-full lg:mt-10 lg:text-center">
            <p className="uppercase text-[#BDBDBD] text-[22px]">
              {props.title}
            </p>
            <h1 className="text-[88px] font-bold mb-4 text-gray-800 leading-[100px]">
              {props.subtitle}
            </h1>
            <p className="text-[#BDBDBD] mt-5 text-[22px]">
              {props.description}
            </p>
            <div className="">
              <button className="text-[#FF7235] text-[24px] mt-6 xl:flex items-center gap-2">
                {props.button} <i className="fa-solid fa-arrow-right mt-2"></i>
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
