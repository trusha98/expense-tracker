import React from "react";

export default function About(props) {
  return (
    <>
      <section className="mx-auto px-4 sm:px-6 md:px-16 lg:px-32 py-12 mt-20">
        <div
          className={`flex flex-col md:flex-row items-center justify-center gap-10 ${
            props.imageLeft ? "md:flex-row" : "md:flex-row-reverse"
          }`}
        >
          <div className="w-full md:w-1/2 flex justify-center md:justify-start lg:justify-center">
            <img
              src={props.imageUrl}
              alt=""
              className="w-[250px] sm:w-[300px] md:w-[350px] lg:w-[400px] xl:w-[450px]"
            />
          </div>

          <div className="w-full md:w-1/2 flex flex-col justify-center text-center md:text-left px-4 sm:px-0">
            <p className="uppercase text-[#BDBDBD] text-sm sm:text-base md:text-lg lg:text-xl">
              {props.title}
            </p>
            <h1 className="mt-2 text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-800 leading-snug">
              {props.subtitle}
            </h1>
            <p className="text-[#BDBDBD] mt-4 text-sm sm:text-base md:text-lg lg:text-xl leading-relaxed">
              {props.description}
            </p>
            <div className="mt-6 flex justify-center md:justify-start">
              <button className="text-[#FF7235] text-lg sm:text-xl md:text-2xl flex items-center gap-2">
                {props.button} <i className="fa-solid fa-arrow-right mt-1"></i>
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
