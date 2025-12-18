import React from 'react'
import useEmblaCarousel from 'embla-carousel-react'


export default function Slider() {
 const [emblaRef] = useEmblaCarousel()
  return (
    <>
    <section className='px-[150px] py-22 mt-15'>
    <h1 className="text-[72px] font-bold mb-4 text-gray-800 text-center leading-none">
            We have millions of<br/> best wishers
          </h1>

         <div className="embla overflow-hidden" ref={emblaRef}>
      <div className="embla__container flex">
        <div className="embla__slide flex-none w-full min-w-0">Slide 1</div>
        <div className="embla__slide flex-none w-full min-w-0">Slide 2</div>
        <div className="embla__slide flex-none w-full min-w-0">Slide 3</div>
         <div className="embla__slide flex-none w-full min-w-0">Slide 4</div>
        <div className="embla__slide flex-none w-full min-w-0">Slide 5</div>
        <div className="embla__slide flex-none w-full min-w-0">Slide 6</div>
      </div>
    </div>
   </section>
    </>
  )
}
