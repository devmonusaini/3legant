import React from 'react'
import aboutImg from '../assets/AboutImage.png'
import { GoArrowRight } from "react-icons/go";
import address from '../assets/store 01.png'
import call from '../assets/call.png'
import email from '../assets/mail.png'
import delivery from '../assets/Delivery.png'
import money from '../assets/money.png'
import secure from '../assets/secure.png'
const Contact = () => {

    
    return (
        <>
        <div className='max-w-[1240px] mx-auto px-4 md:py-16 py-6 flex justify-start items-center flex-col'>
            <div className='w-full  flex flex-col justify-start items-start '>
                <h1 className='md:max-w-[670px]  md:leading-[56px] text-2xl sm:text-4xl md:text-5xl font-medium text-left'>
                    We believe in sustainable decor. We’re passionate about life at home.
                </h1>
                <p className='md:max-w-[780px] py-4 text-left sm:text-base text-sm'>
                    Our features timeless furniture, with natural fabrics, curved lines, plenty of mirrors and classic design, which can be incorporated into any decor project. The pieces enchant for their sobriety, to last for generations, faithful to the shapes of each period, with a touch of the present

                </p>
                <div className='w-full grid md:grid-cols-2 grid-cols-1 gap-4 mt-4 bg-cardbg '>
                    <img className='w-full h-full object-contain' src={aboutImg} />
                    <div className='w-full flex flex-col justify-center items-start px-10 '>
                        <h1 className='w-full  md:leading-[56px] text-2xl sm:text-4xl font-medium text-left'>
                            About Us
                        </h1>
                        <p className='w-full py-4 text-left'>
                            3legant is a gift & decorations store based in HCMC, Vietnam. Est since 2019.


                        </p>
                        <p className='w-full text-left'>

                            Our customer service is always prepared to support you 24/7

                        </p>
                        <button className='my-4 text-secondary font-light flex justify-center items-center flex-row gap-2 border-b-2 border-secondary pb-1'>
                            Shop Now <span><GoArrowRight /></span>
                        </button>

                    </div>
                </div>
                <div className='w-full mt-10 flex justify-center items-center flex-col '>
                    <h1 className='w-full  md:leading-[56px] text-2xl sm:text-4xl font-medium text-center'>
                        Contact Us
                    </h1>
                    <div className='w-full py-4 grid sm:grid-cols-3 grid-cols-1 gap-4'>
                        <div className='w-full flex justify-center items-center flex-col bg-cardbg gap-2 p-4 py-10 rounded-sm'>

                            <img className='w-[32px] h-[32px] object-contain' src={address} />
                            <h4 className='text-base font-semibold uppercase '>
                                Address
                            </h4>
                            <p className='sm:text-base text-xs font-normal '>
                                234 Hai Trieu, Ho Chi Minh City,
                                Viet Nam
                            </p>
                        </div>
                        <div className='w-full flex justify-center items-center flex-col bg-cardbg gap-2 p-4 py-10 rounded-sm'>

                            <img className='w-[32px] h-[32px] object-contain' src={call} />
                            <h4 className='text-base font-semibold uppercase '>
                                Contact Us
                            </h4>
                            <p className='sm:text-base text-xs font-normal '>
                                +84 123 456 789
                            </p>
                        </div>
                        <div className='w-full flex justify-center items-center flex-col bg-cardbg gap-2 p-4 py-10 rounded-sm'>

                            <img className='w-[32px] h-[32px] object-contain' src={email} />
                            <h4 className='text-base font-semibold uppercase '>
                                Email
                            </h4>
                            <p className='sm:text-base text-xs font-normal '>
                                hello@3legant.com
                            </p>
                        </div>
                    </div>
                </div>
                <div className='w-full grid md:grid-cols-2 grid-cols-1 gap-4 mt-6 '>
                    <div className='w-full flex justify-start items-start flex-col order-2 md:order-1 md:mt-0 mt-5 '>
                        <form action="" className='w-full flex flex-col justify-start items-start'>
                            <div className='w-full flex flex-col justify-start items-start gap-2'>
                                <label className='text-formText font-medium text-sm sm:text-base'>Full Name</label>
                                <input type="text" placeholder='Enter your name' className='w-full sm:py-3 py-2 border border-formText rounded-lg font-lg sm:px-4 px-2 font-light ' />
                            </div>
                            <div className='w-full flex flex-col justify-start items-start gap-2 mt-4'>
                                <label className='text-formText font-medium text-sm sm:text-base'>Your Email</label>
                                <input type="email" placeholder='Enter your email' className='w-full sm:py-3 py-2 border border-formText rounded-lg font-lg sm:px-4 px-2 font-light ' />
                            </div>
                            <div className='w-full flex flex-col justify-start items-start gap-2 mt-4'>
                                <label className='text-formText font-medium text-sm sm:text-base'>Message</label>
                                <textarea placeholder='Type your message here...' className='w-full sm:py-3 py-2 border border-formText rounded-lg font-lg sm:px-4 px-2 font-light  h-[150px]' />
                            </div>
                            <button type="submit" className='mt-4 bg-brand text-primary px-10 py-2 rounded-lg font-exrtalight'>Send Message</button>
                        </form>
                    </div>
                    <div className="w-full min-h-[260px] flex justify-center items-center order-1 md:order-2">
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14229.196382961141!2d75.78300506288312!3d26.9257309704546!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x396db3f649d0be79%3A0x5b74a6809e35e33!2sPESHAWRI!5e0!3m2!1sen!2sin!4v1755871736139!5m2!1sen!2sin"
                            width="100%"
                            height="100%"
                            style={{ border: 0 }}
                            allowFullScreen
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                        ></iframe>
                    </div>

                </div>
                 
            </div>

        </div>
       <div className="w-full mt-6 flex justify-center items-center flex-col bg-cardbg">
  {/* Parent container centered with max-width */}
  <div className="max-w-[1240px] w-full mx-auto py-4">
    <div className="w-full grid sm:grid-cols-4 grid-cols-2 gap-4">

      <div className="w-full flex justify-start items-start flex-col gap-2 p-4 py-10 rounded-sm ">
        <img className=" w-[32px] sm:w-[48px]  h-[32px] sm:h-[48px] object-contain" src={delivery} />
        <h4 className=" text-base sm:text-xl font-medium capitalize">Free Shipping</h4>
        <p className="sm:text-base text-xs text-formText font-normal">
          order above $200
        </p>
      </div>

      <div className="w-full flex justify-start items-start flex-col gap-2 p-4 py-10 rounded-sm ">
        <img className=" w-[32px] sm:w-[48px]  h-[32px] sm:h-[48px] object-contain" src={money} />
        <h4 className=" text-base sm:text-xl font-medium capitalize">Money-back</h4>
        <p className="sm:text-base text-xs text-formText font-normal">
          30 days guarantee
        </p>
      </div>

      <div className="w-full flex justify-start items-start flex-col gap-2 p-4 py-10 rounded-sm ">
        <img className=" w-[32px] sm:w-[48px]  h-[32px] sm:h-[48px] object-contain" src={secure} />
        <h4 className=" text-base sm:text-xl font-medium capitalize">Secure Payments</h4>
        <p className="sm:text-base text-xs text-formText font-normal">
          secure by stripe
        </p>
      </div>

      <div className="w-full flex justify-start items-start flex-col gap-2 p-4 py-10 rounded-sm ">
        <img className=" w-[32px] sm:w-[48px]  h-[32px] sm:h-[48px] object-contain" src={call} />
        <h4 className=" text-base sm:text-xl font-medium capitalize">24/7 Support</h4>
        <p className="sm:text-base text-xs text-formText font-normal">
          Phone and Email support
        </p>
      </div>

    </div>
  </div>
</div>

    </>
    )
}

export default Contact