import React from "react";

export default function Work() {
  return (
    <div>
      <section className="h-auto mx-auto px-4 sm:px-6 md:px-16 lg:px-32 py-12 mt-20">
        <div className="flex flex-col lg:flex-row items-center lg:items-start text-center lg:text-left gap-4">
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-[60px] font-bold text-gray-800 lg:basis-[65%] leading-relaxed">
            The Product we work with.
          </h1>
          <p className="text-[#BDBDBD] mt-4 text-sm sm:text-base md:text-lg lg:text-xl lg:basis-[35%] leading-relaxed">
            Tellus lacus morbi sagittis lacus in. Amet nisl at mauris enim aumsan nisi, tincidunt vel. Enim ipsum, at quis ullamcorper eget ut.
          </p>
        </div>

       <div className="flex flex-col sm:flex-col md:flex-col lg:flex-row justify-center gap-6 mt-10">
  <div className="bg-white rounded-lg p-6 sm:p-8 lg:p-10 flex flex-col items-center justify-center hover:shadow-xl cursor-pointer w-full lg:w-1/3">
    <div className="flex items-center justify-center bg-[#FFBD740D] p-6 sm:p-8 rounded-full">
      <i className="fa-solid fa-desktop text-[#FF7235] text-xl sm:text-[22px]"></i>
    </div>
    <h2 className="text-[20px] sm:text-3xl lg:text-[24px] font-normal mb-2 mt-4 text-center">
      Cross platform
    </h2>
    <p className="text-[#BDBDBD] text-base sm:text-lg lg:text-[15px] text-center">
      Elit esse cillum dolore eu fugiat nulla pariatur
    </p>
  </div>

  <div className="bg-white rounded-lg p-6 sm:p-8 lg:p-10 flex flex-col items-center justify-center hover:shadow-xl cursor-pointer w-full lg:w-1/3">
    <div className="flex items-center justify-center bg-[#E2598B0D] p-6 sm:p-8 rounded-full">
      <i className="fa-regular fa-cloud text-[#E2598B] text-xl sm:text-[22px]"></i>
    </div>
      <h2 className="text-[20px] sm:text-3xl lg:text-[24px] font-normal mb-2 mt-4 text-center">

      Cloud server
    </h2>
    <p className="text-[#BDBDBD] text-base sm:text-lg lg:text-[15px] text-center">
      Elit esse cillum dolore eu fugiat nulla pariatur
    </p>
  </div>

  <div className="bg-white rounded-lg p-6 sm:p-8 lg:p-10 flex flex-col items-center justify-center hover:shadow-xl cursor-pointer w-full lg:w-1/3">
    <div className="flex items-center justify-center bg-[#4D12EE0D] p-6 sm:p-8 rounded-full">
      <i className="fa-solid fa-desktop text-[#4D12EE] text-xl sm:text-[22px]"></i>
    </div>
    <h2 className="text-[20px] sm:text-3xl lg:text-[24px] font-normal mb-2 mt-4 text-center">
      Pure Javascript
    </h2>
    <p className="text-[#BDBDBD] text-base sm:text-lg lg:text-[15px] text-center">
      Elit esse cillum dolore eu fugiat nulla pariatur
    </p>
  </div>
</div>

      </section>
    </div>
  );
}
