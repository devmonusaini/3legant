import React, { useState } from 'react'
import { GoArrowLeft } from "react-icons/go";
import vector from '../assets/Vector.svg'
import search from "../assets/search.svg"
import user from "../assets/user.svg"
import bag from "../assets/bag.png"
import { TfiClose } from "react-icons/tfi";
import { IoIosArrowDown } from "react-icons/io";
import { IoIosMenu } from "react-icons/io";
import { Link } from 'react-router-dom';
import CartSidebar from './CartSidebar';
import Login from './Login';
const Navbar = () => {

  const [advertisement, setAdvertisement] = useState(true);
  const [isOpen, setIsOpen] = useState(false);
  const [showCart, setShowCart] = useState(false);
  const [loginOpen, setLoginOpen] = useState(false);
  const [account , setAccount] = useState("Sign in");

  return (
    <>
      <nav className="navbar">
        {advertisement && (
          <div className=" bg-brandbg h-10 flex justify-center items-center flex-row md:gap-6 gap-3  text-brandtext relative" >
            <img src={vector} alt="" className='md:h-[16px] h-[10px]' />
            <span className="text-brandtext font-poppins text-[10px]  md:text-[14px] font-bold">30% off storewide--Limited time! </span>
            <button className='flex justify-center items-center flex-row md:gap-2 gap-1 cursor-poiter text-[10px] md:text-[14px] text-brandtext font-bold'>Shop Now <span><GoArrowLeft /></span></button>
            <button onClick={() => setAdvertisement(false)} className='flex justify-center items-center flex-row gap-2 cursor-pointer text-[10px] md:text-[14px] text-brandtext font-bold absolute right-0 mr-4'>
              <span className='text-[14px]'><TfiClose /></span>
            </button>
          </div>
        )}
        <div className=" max-w-[1240px] h-[60px] mx-auto flex justify-between items-center px-4 py-2 bg-primary font-poppins">
          <div className='flex justify-center items-center flex-row gap-2'>
            <button className='md:hidden block ' onClick={() => setIsOpen(true)}><IoIosMenu /></button>
            <h1 className=" text-[16px] md:text-[24px] font-bold">3legant</h1>
          </div>

          <ul className="md:flex hidden gap-8">
            <Link to="/" className="cursor-pointer text-secondary text-[14px] font-normal">Home</Link>
            <li className="cursor-pointer text-secondary text-[14px] font-normal flex justify-center flex-row items-center  gap-2">Shop <span className='text-sm'><IoIosArrowDown /></span></li>
            <Link to="/product-details" className="cursor-pointer text-secondary text-[14px] font-normal flex justify-center flex-row items-center  gap-2">Product <span className='text-sm'><IoIosArrowDown /></span></Link>
            <Link to="/contact-us" className="cursor-pointer text-secondary text-[14px] font-normal">Contact Us</Link >
          </ul>
          <div className='flex justify-center items-center flex-row  gap-1 md:gap-2 text-secondary  font-bold'>
            <div className='w-[16px] md:w-[24px] h-[16px] md:h-[24px]'> <img src={search} alt="" /></div>
            <button onClick={() => setLoginOpen(true)} className='w-[16px] md:w-[24px] h-[16px] md:h-[24px]'> <img src={user} alt="" /></button>

            <button onClick={() => setShowCart(true)} className='w-[16px] md:w-[24px] h-[16px] md:h-[24px]'> <img src={bag} alt="" /></button>
            <div className='w-[14px] md:w-[22px] h-[14px] md:h-[22px] bg-secondary flex justify-center items-center rounded-full '> <span className='text-primary md:text-sm text-[8px]'> 2</span></div>


          </div>
        </div>
      </nav>
      {isOpen && (
        <div
          className={`md:hidden bg-black/70 fixed top-0 left-0 bottom-0 w-full h-[120%] z-50 flex justify-start items-start overscroll-none transition-opacity duration-500 ${isOpen ? "opacity-100 visible" : "opacity-0 invisible"
            }`}
        >
          <div
            className={`bg-primary w-[80%] h-[120%] p-4 flex flex-col justify-start items-start
  transform transition-transform duration-1000 ease-in-out
  ${isOpen ? "translate-x-0" : "-translate-x-full"}`}
          >

            <div className="w-full flex justify-between items-center">
              <h1 className="text-[16px] md:text-[24px] font-bold">3legant</h1>
              <button
                className="text-black text-xl"
                onClick={() => setIsOpen(false)}
              >
                <TfiClose />
              </button>
            </div>
            <ul className="flex flex-col gap-4 mt-4 px-5 justify-start items-start">
              <li className="cursor-pointer text-secondary text-[14px] font-normal">Home</li>
              <li className="cursor-pointer text-secondary text-[14px] font-normal flex justify-center flex-row items-center gap-2">
                Shop <span className="text-sm"><IoIosArrowDown /></span>
              </li>
              <li className="cursor-pointer text-secondary text-[14px] font-normal flex justify-center flex-row items-center gap-2">
                Product <span className="text-sm"><IoIosArrowDown /></span>
              </li>
              <li className="cursor-pointer text-secondary text-[14px] font-normal">Contact Us</li>
            </ul>
          </div>
        </div>

      )}

      {/* cart popup */}
      {showCart && (
        <CartSidebar setShowCart={setShowCart} />
      )}
      {
        loginOpen && (
          <Login setLoginOpen={setLoginOpen} setAccount={setAccount} account={account}/>
        )
      }
    </>
  )
}


export default Navbar

