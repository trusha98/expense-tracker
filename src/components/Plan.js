import React from "react";

export default function Plan() {
  return (
    <>
      <section className="mx-auto px-4 sm:px-6 md:px-16 lg:px-32 py-12 mt-15">
        <h1 className="text-[32px] sm:text-[36px] md:text-[44px] lg:text-[60px] font-bold text-gray-800 text-center mb-10 leading-tight">
          Choose your flexible plan.
        </h1>

        <div className="flex flex-col sm:flex-col md:flex-row lg:flex-row flex-wrap justify-center gap-6">
          <div className="bg-white rounded-lg border p-6 flex-1 w-full sm:w-full md:w-1/3 lg:w-1/3 text-center hover:shadow-xl hover:border-none cursor-pointer">
            <i className="fa-solid fa-bag-shopping text-[#4D12EE] text-3xl mb-4"></i>
            <p className="text-[32px] sm:text-[32px] font-bold mb-4">Starter Plan</p>
            <ul className="text-[#292830] mb-6 space-y-2 text-[18px]">
              <li><i className="fa-solid fa-check text-[#BDBDBD]"></i> Store unlimited data</li>
              <li><i className="fa-solid fa-check text-[#BDBDBD]"></i> Export to pdf, xls, csv</li>
              <li><i className="fa-solid fa-check text-[#BDBDBD]"></i> Cloud server support</li>
            </ul>
            <span className="text-[24px] font-bold block">
              $9.99
              <span className="text-[20px] font-normal text-[#BDBDBD]"> /year</span>
            </span>
            <p className="text-[#BDBDBD] mb-5">up to 3 users + $1.99 per user</p>
            <button className="border border-[#FF7235] text-[#FF7235] px-4 py-2 rounded font-normal flex items-center justify-center mx-auto">
              Get this <i className="fa-solid fa-arrow-right ml-2"></i>
            </button>
          </div>

          <div className="bg-white rounded-lg border p-6 flex-1 w-full sm:w-full md:w-1/3 lg:w-1/3 text-center hover:shadow-xl hover:border-none cursor-pointer">
            <i className="fa-solid fa-bag-shopping text-[#FF7235] text-3xl mb-4"></i>
            <p className="text-[32px] sm:text-[32px] font-bold mb-4">Silver Plan</p>
            <ul className="text-[#292830] mb-6 space-y-2 text-[18px]">
              <li><i className="fa-solid fa-check text-[#BDBDBD]"></i> Store unlimited data</li>
              <li><i className="fa-solid fa-check text-[#BDBDBD]"></i> Export to pdf, xls, csv</li>
              <li><i className="fa-solid fa-check text-[#BDBDBD]"></i> Cloud server support</li>
            </ul>
            <span className="text-[24px] font-bold block">
              $19.99
              <span className="text-[20px] font-normal text-[#BDBDBD]"> /year</span>
            </span>
            <p className="text-[#BDBDBD] mb-5">up to 3 users + $1.99 per user</p>
            <button className="bg-[#FF7235] text-white px-4 py-2 rounded font-normal flex items-center justify-center mx-auto">
              Get this <i className="fa-solid fa-arrow-right ml-2"></i>
            </button>
          </div>

          <div className="bg-white rounded-lg border p-6 flex-1 w-full sm:w-full md:w-1/3 lg:w-1/3 text-center hover:shadow-xl hover:border-none cursor-pointer">
            <i className="fa-solid fa-bag-shopping text-[#4D12EE] text-3xl mb-4"></i>
            <p className="text-[32px] sm:text-[32px] font-bold mb-4">Diamond Plan</p>
            <ul className="text-[#292830] mb-6 space-y-2 text-[18px]">
              <li><i className="fa-solid fa-check text-[#BDBDBD]"></i> Store unlimited data</li>
              <li><i className="fa-solid fa-check text-[#BDBDBD]"></i> Export to pdf, xls, csv</li>
              <li><i className="fa-solid fa-check text-[#BDBDBD]"></i> Cloud server support</li>
            </ul>
            <span className="text-[24px] font-bold block">
              $29.99
              <span className="text-[20px] font-normal text-[#BDBDBD]"> /year</span>
            </span>
            <p className="text-[#BDBDBD] mb-5">up to 3 users + $1.99 per user</p>
            <button className="border border-[#FF7235] text-[#FF7235] px-4 py-2 rounded font-normal flex items-center justify-center mx-auto">
              Get this <i className="fa-solid fa-arrow-right ml-2"></i>
            </button>
          </div>
        </div>
      </section>
    </>
  );
}
