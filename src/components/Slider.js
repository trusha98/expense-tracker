import React from 'react'
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css';
import Sliderimg from "../assets/slider.png"

export default function Slider() {
  return (
    <>
      <section className='px-[150px] py-22 mt-20 mb-20'>
        <h1 className=" text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 text-gray-800 text-center leading-none">
          We have millions of<br /> best wishers
        </h1>
        <div className='mt-20'>
          <Splide
            options={{
              perPage: 4,
              gap: '1rem',
              autoplay: true,
              pagination: false,
              arrows: false,
              breakpoints: {
                1024: { 
                  perPage: 2,
                
                },
                640: { 
                  perPage: 1,
                  
                },
              }
            }}
          >
            <SplideSlide>
              <div className='flex flex-col border p-5'>
                <p className='text-[20px] text-black'>
                  Tellus lacus morbi sagittis lacus in. Amet nisl at mauris enim aumsan nisi, tincidunt vel. Enim ipsum, at quis ullamcorper eget ut.
                </p>
                <div className='flex flex-row items-center mt-5 gap-4'>
                  <img src={Sliderimg} alt="User Image" className="w-16 h-16 rounded-full object-cover" />
                  <div className='flex flex-row items-center '>
                    <b>Cameron Williamson,</b>
                    <p>CEO</p>
                  </div>
                </div>
              </div>
            </SplideSlide>
            <SplideSlide>
              <div className='flex flex-col border p-5'>
                <p className='text-[20px] text-black'>
                  Tellus lacus morbi sagittis lacus in. Amet nisl at mauris enim aumsan nisi, tincidunt vel. Enim ipsum, at quis ullamcorper eget ut.
                </p>
                <div className='flex flex-row items-center mt-5 gap-4'>
                  <img src={Sliderimg} alt="User Image" className="w-16 h-16 rounded-full object-cover" />
                  <div className='flex flex-row items-center '>
                    <b>Cameron Williamson,</b>
                    <p>CEO</p>
                  </div>
                </div>
              </div>
            </SplideSlide>
            <SplideSlide>
              <div className='flex flex-col border p-5'>
                <p className='text-[20px] text-black'>
                  Tellus lacus morbi sagittis lacus in. Amet nisl at mauris enim aumsan nisi, tincidunt vel. Enim ipsum, at quis ullamcorper eget ut.
                </p>
                <div className='flex flex-row items-center mt-5 gap-4'>
                  <img src={Sliderimg} alt="User Image" className="w-16 h-16 rounded-full object-cover" />
                  <div className='flex flex-row items-center '>
                    <b>Cameron Williamson,</b>
                    <p>CEO</p>
                  </div>
                </div>
              </div>
            </SplideSlide>
            <SplideSlide>
              <div className='flex flex-col border p-5'>
                <p className='text-[20px] text-black'>
                  Tellus lacus morbi sagittis lacus in. Amet nisl at mauris enim aumsan nisi, tincidunt vel. Enim ipsum, at quis ullamcorper eget ut.
                </p>
                <div className='flex flex-row items-center mt-5 gap-4'>
                  <img src={Sliderimg} alt="User Image" className="w-16 h-16 rounded-full object-cover" />
                  <div className='flex flex-row items-center '>
                    <b>Cameron Williamson,</b>
                    <p>CEO</p>
                  </div>
                </div>
              </div>
            </SplideSlide>
            <SplideSlide>
              <div className='flex flex-col border p-5'>
                <p className='text-[20px] text-black'>
                  Tellus lacus morbi sagittis lacus in. Amet nisl at mauris enim aumsan nisi, tincidunt vel. Enim ipsum, at quis ullamcorper eget ut.
                </p>
                <div className='flex flex-row items-center mt-5 gap-4'>
                  <img src={Sliderimg} alt="User Image" className="w-16 h-16 rounded-full object-cover" />
                  <div className='flex flex-row items-center '>
                    <b>Cameron Williamson,</b>
                    <p>CEO</p>
                  </div>
                </div>
              </div>
            </SplideSlide>
            <SplideSlide>
              <div className='flex flex-col border p-5'>
                <p className='text-[20px] text-black'>
                  Tellus lacus morbi sagittis lacus in. Amet nisl at mauris enim aumsan nisi, tincidunt vel. Enim ipsum, at quis ullamcorper eget ut.
                </p>
                <div className='flex flex-row items-center mt-5 gap-4'>
                  <img src={Sliderimg} alt="User Image" className="w-16 h-16 rounded-full object-cover" />
                  <div className='flex flex-row items-center '>
                    <b>Cameron Williamson,</b>
                    <p>CEO</p>
                  </div>
                </div>
              </div>
            </SplideSlide>
            <SplideSlide>
              <div className='flex flex-col border p-5'>
                <p className='text-[20px] text-black'>
                  Tellus lacus morbi sagittis lacus in. Amet nisl at mauris enim aumsan nisi, tincidunt vel. Enim ipsum, at quis ullamcorper eget ut.
                </p>
                <div className='flex flex-row items-center mt-5 gap-4'>
                  <img src={Sliderimg} alt="User Image" className="w-16 h-16 rounded-full object-cover" />
                  <div className='flex flex-row items-center '>
                    <b>Cameron Williamson,</b>
                    <p>CEO</p>
                  </div>
                </div>
              </div>
            </SplideSlide>
          </Splide>
        </div>
      </section>
    </>
  )
}
