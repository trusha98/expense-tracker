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
         
          <div className="w-full flex justify-center lg:justify-center mt-6 lg:mt-16">
  <img
    src={props.imageUrl}
    alt=""
    className="w-[250px] sm:w-[300px] md:w-[350px] lg:w-[400px]"
  />
</div>

          <div className="w-full  flex flex-col justify-center text-center  px-4 sm:px-0">
            <p className="uppercase text-[#BDBDBD] text-sm sm:text-base md:text-lg lg:text-xl">
              {props.title}
            </p>
            <h1 className="mt-2 text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-800 leading-none">

              {props.subtitle}
            </h1>
            <p className="text-[#BDBDBD] mt-4 text-sm sm:text-base md:text-lg lg:text-xl leading-none">
              {props.description}
            </p>
            <div className="mt-6 flex justify-center">
              <button className="text-[#FF7235] text-lg sm:text-xl md:text-2xl flex items-center gap-2">
                {props.button} <i className="fa-solid fa-arrow-right mt-2"></i>
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
