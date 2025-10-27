import React from 'react'
import { FaInstagram } from "react-icons/fa";
import { SlSocialFacebook } from "react-icons/sl";
import { FiYoutube } from "react-icons/fi";
import paymentMethod from "../assets/paymentMethods.png";
const Footer = () => {
  return (
   <div className='w-full h-fit bg-black pt-20 pb-10 px-4' >
    <div className='max-w-[1240px] mx-auto  flex flex-col justify-center items-center gap-10'>
    <div className='w-full  grid grid-cols-1 md:grid-cols-2  gap-6 '>

        <div className='flex flex-col justify-start items-start gap-4'>
            <h2 className='sm:text-[30px] text-[20px] font-medium text-white'>3legant</h2>
            <p className='max-w-[200px] sm:text-lg text-sm text-white'>More than just a game. It’s a lifestyle. </p>
            <div className='flex flex-row justify-start items-start gap-4 my-5'>
               <a className=' text-xl sm:text-2xl font-thin  text-primary' href=""><FaInstagram /></a>
               <a className=' text-xl sm:text-2xl font-thin  text-primary' href=""><SlSocialFacebook /></a>
               <a className=' text-xl sm:text-2xl font-thin  text-primary' href=""><FiYoutube /></a>
            </div>

        </div>
        <div className='grid sm:grid-cols-3 grid-cols-1 gap-4'>
            <div className='w-full flex flex-col justify-start items-start gap-2'>
                <h3 className='text-sm sm:text-lg  text-white'>Page</h3>
                <a href="" className='sm:text-sm text-xs text-primary font-extralight my-2'>Home</a>
                <a href="" className='sm:text-sm text-xs text-primary font-extralight my-2'>Shop</a>
                <a href="" className='sm:text-sm text-xs text-primary font-extralight my-2'>Product</a>
                <a href="" className='sm:text-sm text-xs text-primary font-extralight my-2'>Articles</a>
                <a href="" className='sm:text-sm text-xs text-primary font-extralight my-2'>Contact Us</a>
            </div>
     <div className='w-full flex flex-col justify-start items-start gap-2'>
                <h3 className='text-lg  text-primary font-light'>Info</h3>
                 <a href="" className='sm:text-sm text-xs text-primary font-extralight my-2'>Shopping Policy </a>
                <a href="" className='sm:text-sm text-xs text-primary font-extralight my-2'>Return & refund</a>
                <a href="" className='sm:text-sm text-xs text-primary font-extralight my-2'>Support</a>
                <a href="" className='sm:text-sm text-xs text-primary font-extralight my-2'>FAQs</a>
         
            </div>     <div className='w-full flex flex-col justify-start items-start gap-2'>
                <h3 className='text-lg  text-primary font-light'>Office</h3>
                 <a href="" className='sm:text-sm text-xs text-primary font-extralight my-2'>43111 Hai Trieu street District 1, HCMC Vietnam</a>
                <a href="" className='sm:text-sm text-xs text-primary font-extralight my-2'>84-756-3237</a>
             
            </div>
        </div>

    </div>
    <div className='h-[1px] w-full bg-[#6C7275]  opacity-80'></div>
    <div className='w-full flex justify-between items-center sm:flex-row flex-col-reverse gap-4'>
        <div className='w-full flex flex-wrap sm:flex-row flex-col-reverse sm:justify-start justify-center sm:items-start items-center gap-2 '>

        <p className='text-sm text-primary font-extralight'> © 2023 3legant. All rights reserved.</p>
        <p className='text-sm text-[#6C7275]'> | Privacy Policy   Terms of Service</p>
        </div>
         <img className='sm:h-[32px] h-[24px]' src={paymentMethod} />
    </div>


   </div>
   </div>
  )
}

export default Footer