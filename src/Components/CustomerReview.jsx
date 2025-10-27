import React, { useState } from 'react'
import { IoIosStar, IoIosStarOutline } from "react-icons/io";
import avatar_1 from "../assets/avatar_1.png"
import avatar_2 from "../assets/avatar_2.png"

import { FaArrowRightLong } from "react-icons/fa6";

import Emoji from "../assets/Emoji.png"
const CustomerReview = () => {
    const [reviewOpen, setReviewOpen] = useState(false)

    const ReviewData = [
        {
            id: 1,
            user: "Sofia Harvetz",
            image: avatar_2,
            reviewMessage: "I bought it 3 weeks ago and now come back just to say “Awesome Product”. I really enjoy it. At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupt et quas molestias excepturi sint non provident."
        },
                {
            id: 2,
            user: "Nicolas jenson",
            image: avatar_1,
            reviewMessage: "I bought it 3 weeks ago and now come back just to say “Awesome Product”. I really enjoy it. At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupt et quas molestias excepturi sint non provident."
        },
              {
            id: 3,
            user: "Sofia Harvetz",
            image: avatar_2,
            reviewMessage: "I bought it 3 weeks ago and now come back just to say “Awesome Product”. I really enjoy it. At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupt et quas molestias excepturi sint non provident."
        },
                {
            id: 4,
            user: "Nicolas jenson",
            image: avatar_1,
            reviewMessage: "I bought it 3 weeks ago and now come back just to say “Awesome Product”. I really enjoy it. At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupt et quas molestias excepturi sint non provident."
        }
    ]
    return (
        <div className='w-full flex justify-start items-start flex-col sm:gap-4 gap-2'>
            <h2 className='md:text-3xl sm:text-2xl text-xl   font-medium  mt-6'>Customer Review </h2>
            <div className='flex justify-center items-center   flex-row'>
                <span className='text-sm text-secondary '><IoIosStar /></span>
                <span className='text-sm text-secondary '><IoIosStar /></span>
                <span className='text-sm text-secondary '><IoIosStar /></span>
                <span className='text-sm text-secondary '><IoIosStar /></span>
                <span className='text-sm text-secondary '><IoIosStarOutline /></span>
                <span className='text-sm ml-2 text-secondary font-light '>11 Reviews</span>


            </div>
            <h3 className='text-base font-semibold ml-[20%] mt-5'>Tray Table</h3>
            <div className='relative w-full flex justify-between items-center sm:mt-2 mt-8 border-2 p-3 border-gray-300 rounded-lg'>
                {
                    reviewOpen && (

                        <div className='w-full flex justify-between items-center'>

                            <textarea placeholder='Share your thoughts ' className='w-full   outline-none rounded-lg font-light  h-[100px]' />

                            <button className='w-fit text-nowrap p-3 bg-black rounded-full  text-primary'><FaArrowRightLong /></button>
                        </div>

                    )
                }
                <img src={Emoji} alt="" className={`absolute -top-10 right-10 ${reviewOpen === true ? "hidden " : "flex"}`} />
                <div className={`w-full  justify-end items-end ${reviewOpen === true ? "hidden " : "flex"}`}>

                    <button onClick={() => setReviewOpen(true)} className="w-fit text-nowrap p-2 bg-black rounded-full  px-5 text-primary ">write review</button>
                </div>
            </div>
            <div className='w-full flex justify-center items-center flex-col sm:mt-4 mt-4 sm:gap-8 gap-4 '>
                <div className='w-full flex justify-between items-start sm:flex-row flex-col  gap-4'>
                    <h2 className='sm:text-2xl text-xl font-medium '>11 Reviews</h2>
                    <div className='max-w-[270px] w-full border border-gray-300  p-1  px-2 rounded-lg '>

                        <select name="" id="" className='w-full outline-none' >
                            <option value="" defaultValue="Newest">Newest </option>
                        </select>
                    </div>
                </div>
                       {
                        ReviewData.map((item, index) => (
                <div className='w-full flex justify-start items-start gap-4 flex-col py-4 border-b-2 border-gray-300'>
             
                            <div key={index} className="w-full flex justify-start items-start flex-col gap-4 ">
                                <div className="w-full flex justify-start items-start sm:gap-10 gap-4 flex-row">
                                    <img src={item.image} alt={item.user} className="w-[56px] h-[56px]" />
                                    <div className="w-full flex justify-center items-start flex-col gap-2">
                                        <h3 className="text-base text-black font-medium">{item.user}</h3>

                                        {/* Rating Stars */}
                                        <div className="flex justify-center items-center flex-row gap-1">
                                            {[...Array(5)].map((_, i) => (
                                                <span key={i} className="text-sm text-secondary">
                                                    <IoIosStar />
                                                </span>
                                            ))}
                                        </div>
                                    </div>
                                </div>

                                {/* Review Text */}
                                <div className="w-full flex justify-start items-start flex-col sm:pl-24">
                                    <p className="text-sm font-normal text-formText">
                                        {item.reviewMessage}
                                    </p>

                                    {/* Actions */}
                                    <div className="flex justify-center items-center flex-row gap-4 mt-3 ml-10">
                                        <button className="text-xs text-secondary">Like</button>
                                        <button className="text-xs text-secondary">Reply</button>
                                    </div>
                                </div>
                            </div>
                </div>
                        ))
                    }




            </div>
        </div>
    )
}

export default CustomerReview