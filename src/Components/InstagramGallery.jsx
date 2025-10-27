import React from 'react'
import instageramImage1 from "../assets/instagram1.png";
import instageramImage2 from "../assets/instagram2.png";
import instageramImage3 from "../assets/instagram3.png";
import instageramImage4 from "../assets/instagram4.png";
import instageramImage5 from "../assets/instagram5.png";
import instageramImage6 from "../assets/instagram6.png";
const InstagramGallery = () => {
  return (
    <div className='w-full h-fit   flex justify-center items-center flex-col '>
        <h4 className='text-center uppercase text-[#6C7275] text-md  font-semibold'>newsfeed</h4>
        <h2 className='sm:text-4xl text-2xl font-semibold text-secondary '>Instagram</h2>
        <p className='sm:text-lg text-sm text-center text-secondary my-2 px-4'>Follow us on social media for more discount & promotions</p>
        <a href="" className='text-[#6C7275] font-medium sm:text-xl text-medium'>@3legant_official</a>
        <div className='w-full h-auto mt-10'>
            <div className='w-full grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 '>
                <img src={instageramImage1} alt="Instagram 1" className='w-full max-h-[280px] object-cover ' />
                <img src={instageramImage2} alt="Instagram 2" className='w-full max-h-[280px] object-cover ' />
                <img src={instageramImage3} alt="Instagram 3" className='w-full max-h-[280px] object-cover ' />
                <img src={instageramImage4} alt="Instagram 4" className='w-full max-h-[280px] object-cover ' />
                <img src={instageramImage5} alt="Instagram 5" className='w-full max-h-[280px] object-cover ' />
                <img src={instageramImage6} alt="Instagram 6" className='w-full max-h-[280px] object-cover ' />
            </div>
        </div>
    </div>
  )
}

export default InstagramGallery