import React, { useContext, useEffect, useRef, useState } from 'react'
import { GoArrowLeft } from "react-icons/go";
import vector from '../assets/Vector.svg'
import search from "../assets/search.svg"
import userimg from "../assets/user.svg"
import bag from "../assets/bag.png"
import { TfiClose } from "react-icons/tfi";
import { IoIosArrowDown } from "react-icons/io";
import { IoIosMenu } from "react-icons/io";
import { Link, useNavigate } from 'react-router-dom';
import CartSidebar from './CartSidebar';
import { MdLogout ,MdOutlineHome } from "react-icons/md";

import { storeContext } from '../context/storeContext';
import SummaryApi from '../common';
const Navbar = () => {
  const navigate = useNavigate();
  const {getTotalCart,user ,fetchUser}=useContext(storeContext)
  const [userDetailsbox , setUserDetailsbox] = useState(false)
  const [advertisement, setAdvertisement] = useState(true);
  const [isOpen, setIsOpen] = useState(false);
  const [showCart, setShowCart] = useState(false);

const boxRef = useRef(null);

// Close the box when clicking outside
useEffect(() => {
    fetchUser();
    const handleClickOutside = (event) => {
      if (boxRef.current && !boxRef.current.contains(event.target)) {
        setUserDetailsbox(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);



const handleLogout = async () => {
  try {
    await fetch(SummaryApi.Logout.url, {
      method: SummaryApi.Logout.method,
      credentials: "include", // ✅ include cookies
    });

    // Optional: clear localStorage/sessionStorage
    localStorage.clear();
    sessionStorage.clear();
     // Reload the page
    window.location.reload();

    // Navigate to login after 2 seconds
    setTimeout(() => {
      navigate("/sign-in");
    }, 2000);
  } catch (error) {
    console.error("Logout error:", error);
  }
};
 
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
            <h1 className=" text-[20px] md:text-[24px] font-bold">3legant</h1>
          </div>

          <ul className="md:flex hidden gap-8">
            <Link to="/" className="cursor-pointer text-secondary text-[14px] font-normal">Home</Link>
            <li className="cursor-pointer text-secondary text-[14px] font-normal flex justify-center flex-row items-center  gap-2">Shop <span className='text-sm'><IoIosArrowDown /></span></li>
            <Link to="/product-details" className="cursor-pointer text-secondary text-[14px] font-normal flex justify-center flex-row items-center  gap-2">Product <span className='text-sm'><IoIosArrowDown /></span></Link>
            <Link to="/contact-us" className="cursor-pointer text-secondary text-[14px] font-normal">Contact Us</Link >
          </ul>
          <div className='relative  z-50 flex justify-center items-center flex-row  gap-1 md:gap-2 text-secondary  font-bold'>
            {/* <div className='w-[20px] md:w-[24px] h-[20px] md:h-[24px]'> <img src={search} alt="" /></div> */}
            <button   onClick={() => (user ? setUserDetailsbox(true) :navigate("/sign-in") )} className='w-[20px] md:w-[24px] h-[20px] md:h-[24px]'>  {user ? <p className='bg-[#01969b] rounded-full px-1 py-[2px] text-center text-white font-light text-sm'>{user.name.charAt(0).toUpperCase()}</p> : <img src={userimg} alt="" />}
</button>

            <button onClick={() => setShowCart(true)} className='w-[20px] md:w-[24px] h-[20px] md:h-[24px] relative'> 
              <img src={bag} alt="" />
              
              <div className={`${getTotalCart()===0?"hidden": "flex"} w-[16px] md:w-[18px] h-[16px] md:h-[18px] bg-secondary  justify-center items-center rounded-full absolute -top-2 -right-2 `}> <span className='text-primary  text-[10px]'> {getTotalCart()}</span></div> 
              </button>
           {
            userDetailsbox && (
              <div   ref={boxRef} className='absolute  w-[200px]   right-2 py-2 top-6 bg-white  border-2 border-gray  rounded-xl flex justify-start items-start flex-col px-1'> 
              <p className='w-full text-base  text-black font-medium px-2 '>{user.name}</p>
               <p className='w-full text-sm  text-gray-600 font-medium px-2'>{user.email}</p> 
               <div className='h-[1px] w-full bg-gray-500 my-1'></div>
               <Link to="/" className='w-full px-2 py-1 rounded-sm hover:bg-gray-200 font-medium text-base flex justify-between items-center'><span>Home</span><span className='text-xl font-normal'><MdOutlineHome /></span> </Link>
               <button onClick={handleLogout} className='w-full px-2 py-1 rounded-sm hover:bg-gray-200 font-medium text-base flex justify-between items-center'><span>Log Out</span><span><MdLogout/></span> </button>
               </div>
            )
           }


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
              <Link  to="/" onClick={()=>setIsOpen(false)} className="cursor-pointer text-secondary text-[14px] font-normal">Home</Link>
              <Link  onClick={()=>setIsOpen(false)} className="cursor-pointer text-secondary text-[14px] font-normal flex justify-center flex-row items-center gap-2">
                Shop <span className="text-sm"><IoIosArrowDown /></span>
              </Link>
              <Link to="/product-details" onClick={()=>setIsOpen(false)} className="cursor-pointer text-secondary text-[14px] font-normal flex justify-center flex-row items-center gap-2">
                Product <span className="text-sm"><IoIosArrowDown /></span>
              </Link>
              <Link to="contact-us" onClick={()=>setIsOpen(false)} className="cursor-pointer text-secondary text-[14px] font-normal">Contact Us</Link>
            </ul>
          </div>
        </div>

      )}

      {/* cart popup */}
      {showCart && (
        <CartSidebar setShowCart={setShowCart} />
      )}

    </>
  )
}

export default Navbar
