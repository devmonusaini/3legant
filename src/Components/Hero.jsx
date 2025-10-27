import React from 'react'

const Hero = () => {
  return (
    <div className="relative flex justify-center items-center flex-col h-screen sm:px-10 px-4">
      {/* Background Image */}
      <div className="absolute inset-0 bg-[url('assets/hero-bg.png')] bg-cover bg-center bg-no-repeat bg-black bg-blend-screen "></div>

      {/* Gradient Overlay */}
      <div className="absolute inset-0 md:bg-[url('assets/bg-image.png')] bg-[url('assets/hero-mobile.png')]  md:bg-cover bg-contain   bg-center bg-no-repeat opacity-80"></div>

      {/* content  */}
<div className="max-w-[1240px] mx-auto grid md:grid-cols-2 grid-cols-1 md:grid-rows-1 grid-rows-2  z-10  ">
  <div className="w-full flex md:justify-start justify-end md:items-start items-center flex-col gap-4 md:order-1 order-last ">
    <h1 className=" heading text-primary font-semibold">More than</h1>
    <h1 className=" heading text-primary font-semibold">just a game.</h1>
    <h1 className=" heading text-primary font-semibold">It's a lifestyle.</h1>
    <p className="max-w-[524px] text-primary  md:text-xl sm:text-lg  md:text-start text-center font-extralight">
      Whether you’re just starting out, have played your whole life or you're a Tour pro, your swing is like a fingerprint.
    </p>
    <button className="w-fit bg-brandbg md:px-10 px-6 md:py-4 py-2 rounded-xl md:text-lg text-sm font-normal cursor-pointer">
      Shopping Now
    </button>
  </div>
  <div className='md:order-2 order-1 '></div>
</div>



    </div>
  )
}

export default Hero
