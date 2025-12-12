import React from "react";

export default function Plan() {
  return (
    <>
      <section className=" mx-auto px-[150px] py-22 mt-15">
         <h1 className="text-[72px] font-bold mb-4 text-gray-800 text-center">
            Choose your flexible plan.
          </h1>
        <div className="flex xl:flex-row lg:flex-col gap-6 p-6">
         
          <div className="bg-white rounded-lg border p-6 flex-1 lg:text-center  hover:shadow-xl hover:border-none cursor-pointer">
            <i class="fa-solid fa-bag-shopping text-[#4D12EE]"></i>
            <p className="text-[32px] font-bold mb-4">Starter Plan</p>
            <ul className="text-[#292830] mb-6 space-y-2 text-[18px]">
              <li>
                <i class="fa-solid fa-check text-[#BDBDBD]"></i> Store unlimited
                data
              </li>
              <li>
                <i class="fa-solid fa-check text-[#BDBDBD]"></i> Export to pdf,
                xls, csv
              </li>
              <li>
                <i class="fa-solid fa-check text-[#BDBDBD]"></i> Cloud server
                support
              </li>
            </ul>
            <span className="text-[24px] font-bold  block">
              $9.99
              <span className="text-[20px] font-normal  text-[#BDBDBD]">
                /year
              </span>
            </span>
            <p className="text-[#BDBDBD] mb-5">up to 3 user + 1.99 per user</p>
            <button className="border border-[#FF7235] text-[#FF7235] px-4 py-2 rounded font-normal">
           Get this  <i className="fa-solid fa-arrow-right mt-2"></i>
          </button>
          </div>
            <div className="bg-white rounded-lg border p-6 flex-1 lg:text-center hover:shadow-xl hover:border-none cursor-pointer">
            <i class="fa-solid fa-bag-shopping text-[#FF7235]"></i>
            <p className="text-[32px] font-bold mb-4">Silver Plan</p>
            <ul className="text-[#292830] mb-6 space-y-2 text-[18px]">
              <li>
                <i class="fa-solid fa-check text-[#BDBDBD]"></i> Store unlimited
                data
              </li>
              <li>
                <i class="fa-solid fa-check text-[#BDBDBD]"></i> Export to pdf,
                xls, csv
              </li>
              <li>
                <i class="fa-solid fa-check text-[#BDBDBD]"></i> Cloud server
                support
              </li>
            </ul>
            <span className="text-[24px] font-bold  block">
              $19.99
              <span className="text-[20px] font-normal  text-[#BDBDBD]">
                /year
              </span>
            </span>
            <p className="text-[#BDBDBD] mb-5">up to 3 user + 1.99 per user</p>
           <button className="bg-[#FF7235] text-white px-4 py-2 rounded font-normal">
           Get this  <i className="fa-solid fa-arrow-right mt-2"></i>
          </button>
          </div>
            <div className="bg-white rounded-lg border p-6 flex-1 lg:text-center hover:shadow-xl hover:border-none cursor-pointer">
            <i class="fa-solid fa-bag-shopping text-[#4D12EE]"></i>
            <p className="text-[32px] font-bold mb-4">Diamond Plan</p>
            <ul className="text-[#292830] mb-6 space-y-2 text-[18px]">
              <li>
                <i class="fa-solid fa-check text-[#BDBDBD]"></i> Store unlimited
                data
              </li>
              <li>
                <i class="fa-solid fa-check text-[#BDBDBD]"></i> Export to pdf,
                xls, csv
              </li>
              <li>
                <i class="fa-solid fa-check text-[#BDBDBD]"></i> Cloud server
                support
              </li>
            </ul>
            <span className="text-[24px] font-bold  block">
              $29.99
              <span className="text-[20px] font-normal  text-[#BDBDBD]">
                /year
              </span>
            </span>
            <p className="text-[#BDBDBD] mb-5">up to 3 user + 1.99 per user</p>
            <button className="border border-[#FF7235] text-[#FF7235] px-4 py-2 rounded font-normal">
           Get this  <i className="fa-solid fa-arrow-right mt-2"></i>
          </button>
          </div>
        </div>
      </section>
    </>
  );
}
