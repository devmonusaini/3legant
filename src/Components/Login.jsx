import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import login from '../assets/login.png'
import { TfiClose } from "react-icons/tfi";
import { FiEye, FiEyeOff } from "react-icons/fi";

const Login = ({ setLoginOpen, setAccount, account }) => {


  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent reload
    console.log("Form submitted:", value);
  };

  return (
    <div className='w-screen h-screen   fixed top-0 z-50 bg-black/70 flex justify-center items-center py-10 px-4 '>
      <div className='max-w-[1240px] w-full grid md:grid-cols-2 grid-cols-1  bg-primary rounded-xl overflow-hidden relative top-0  '>
        <div className='w-full h-full flex justify-center items-center bg-cardbg'>
          <img className='w-full sm:max-h-[560px] max-h-[300px] object-contain ' src={login} />
        </div>
        <div className='w-full flex  justify-center items-start flex-col sm:p-20 p-4  gap-3'>
          <h3 className='text-xl sm:text-2xl  capitalize'> {account} </h3>
       {
            account === "Sign up" ? (
       
                  <p className='text-xs text-formText'>
                Already have an account?
                <span className='text-brandbg'>
                  <button onClick={() => setAccount("Sign in")}> Sign in</button>
                </span>
              </p>
            ) : (
                 <p className='text-xs text-formText'>
                Don't have an account yet?
                <span className='text-brandbg'>
                  <button onClick={() => setAccount("Sign up")}> Sign up</button>
                </span>
              </p>
            )
       }
          <form action="" onSubmit={handleSubmit} className='w-full flex justify-start items-start flex-col gap-3'>
            {
              account === "Sign up" && (
                <>
                  <input type="text" placeholder='Your Name' className='w-full text-sm py-2 border-b border-formText outline-none' />
                  <input type="text" placeholder='User Name' className='w-full text-sm py-2 border-b border-formText outline-none' />
                </>

              )
            }
            <input type="email" placeholder='Email Address' className='w-full text-sm py-2 border-b border-formText outline-none' />
             {account !== "Forgot password" && (
            <div className='w-full relative '>
              <input type={showPassword === true ? "text" : "password"} placeholder='Password' className='w-full text-sm py-2 border-b border-formText outline-none' />
              <button onClick={() => setShowPassword(prev => !prev)} className='absolute right-2 top-1'>{showPassword === true ? <FiEyeOff /> : <FiEye />}</button>
            </div>
             )}
            {
              account === "Sign up" && (
                <div className='w-full relative '>
                  <input type={showConfirmPassword === true ? "text" : "password"} placeholder='Confirm Password' className='w-full text-sm py-2 border-b border-formText outline-none' />
                  <button onClick={() => setShowConfirmPassword(prev => !prev)} className='absolute right-2 top-1'>{showConfirmPassword === true ? <FiEyeOff /> : <FiEye />}</button>
                </div>
              )
            }
          {
            account !== "Forgot password" && (

            
              account === "Sign up" ? (
                <div className='w-full flex justify-start items-center flex-row py-2 gap-2'>

                  <input type="checkbox" name="policy" className='accent-secondary' />
                  <p className='text-formText text-xs'>I agree with <span className='text-secondary'>Privacy Policy</span> and  <span className='text-secondary'>Terms of Use</span></p>
                </div>
              ) : (
                <div className='w-full flex justify-between items-center'>

                  <div className='w-full flex justify-start items-center flex-row py-2 gap-2'>

                    <input type="checkbox" name="remember" className='accent-secondary' />
                    <p className='text-formText text-xs'>Remember Me</p>
                  </div>
                  <button className='text-sm font-semibold text-nowrap' onClick={() => setAccount("Forgot password")}>Forgot password?</button>
                </div>
              )
          )
          }
            

            <button type="submit" className='w-full p-2 bg-black rounded-lg font-light text-sm text-primary capitalize mt-4'> {account}</button>
          </form>

        </div>
        <button onClick={() => setLoginOpen(false)} className='absolute top-1 right-1 cursor-pointer bg-black text-primary font-semibold rounded-full p-2 text-base'>

          <TfiClose />
        </button>
      </div>
    </div>
  )
}

export default Login