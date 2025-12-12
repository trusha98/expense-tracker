import React from "react";

export default function Work() {
  return (
    <div>
      <section className="xl:h-[600px] mx-auto px-[150px] py-22 mt-20">
        <div className="flex lg:flex-col lg:text-center xl:flex-row">
          <h1 className="text-[88px] font-bold text-[#292830] xl:w-[65%] lg:w-full leading-none">
            The Product we work with.
          </h1>
          <p className=" text-[#BDBDBD] text-[22px]  xl:w-[35%] lg:w-full mt-10">
            Tellus lacus morbi sagittis lacus in. Amet nisl at mauris enim
            aumsan nisi, tincidunt vel. Enim ipsum, at quis ullamcorper eget ut.
          </p>
        </div>
        <div className="flex lg:flex-col xl:flex-row justify-center gap-6 mt-10">
          <div className="bg-white rounded-lg p-10 flex flex-col items-center justify-center hover:shadow-xl hover:cursor-pointer">
            <div className="text-base flex items-center justify-center bg-[#FFBD740D] p-8 rounded-full">
              <i className="fa-solid fa-desktop text-[#FF7235]"></i>
            </div>
            <h2 className="text-[35px] font-normal mb-2">Cross platform</h2>
            <p className="text-[#BDBDBD] text-[20px] text-center">
              Elit esse cillum dolore eu fugiat nulla pariatur
            </p>
          </div>
          <div className="bg-white rounded-lg p-10 flex flex-col items-center justify-center hover:shadow-xl hover:cursor-pointer">
            <div className="text-base flex items-center justify-center bg-[#E2598B0D] p-8 rounded-full">
              <i className="fa-regular fa-cloud text-[#E2598B]"></i>
            </div>
            <h2 className="text-[35px] font-normal mb-2">Cloud server</h2>
            <p className="text-[#BDBDBD] text-[20px] text-center">
              Elit esse cillum dolore eu fugiat nulla pariatur
            </p>
          </div>
          <div className="bg-white rounded-lg p-10 flex flex-col items-center justify-center hover:shadow-xl hover:cursor-pointer">
            <div className="text-base flex items-center justify-center bg-[#4D12EE0D] p-8 rounded-full">
              <i className="fa-solid fa-desktop text-[#4D12EE]"></i>
            </div>
            <h2 className="text-[35px] font-normal mb-2">Pure Javascript</h2>
            <p className="text-[#BDBDBD] text-[20px] text-center">
              Elit esse cillum dolore eu fugiat nulla pariatur
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
