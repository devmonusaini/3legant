import React, { useEffect, useState } from 'react';
import avatar_2 from "../assets/avatar_2.png"

import { MdOutlinePhotoCamera } from "react-icons/md";
import { BiEditAlt } from "react-icons/bi";
import AccountDetails from '../Components/AccountDetails';
import Wishlist from '../Components/Wishlist';
const AccountPage = () => {
    const [expiry, setExpiry] = useState(""); // MM/YY format
    const [rawDate, setRawDate] = useState(""); // YYYY-MM-DD (for picker)
    const [activeTab, setActiveTab] = useState("account-details");








    const handleChange = (e) => {
        const value = e.target.value;
        setRawDate(value);

        const pickedDate = new Date(value);
        if (!isNaN(pickedDate)) {
            const month = String(pickedDate.getMonth() + 1).padStart(2, "0");
            const year = pickedDate.getFullYear().toString().slice(-2);
            setExpiry(`${month}/${year}`); // store MM/YY
        }
    };
    const OrderHistory = [
        {
            id: 1,
            number_id: "3458_789",
            date: "October 17 , 2023",
            status: "Delived",
            price: "$1200.00"

        },
        {
            id: 2,
            number_id: "3458_743",
            date: "October 12 , 2023",
            status: "Delived",
            price: "$3700.00"

        },
        {
            id: 3,
            number_id: "3442_789",
            date: "October 11 , 2023",
            status: "Delived",
            price: "$670.00"

        },
        {
            id: 4,
            number_id: "3458_789",
            date: "October 06 , 2023",
            status: "Delived",
            price: "$845.00"

        },
    ]


    return (
        <>
            <div className='max-w-[1240px] mx-auto px-4 md:py-10 py-2 flex justify-center items-center flex-col'>
                <div className='w-full mt-10 flex justify-center items-center flex-col '>
                    <h1 className='w-full md:leading-[56px] text-2xl sm:text-4xl md:text-5xl font-medium text-center text-secondary'>
                        My Account
                    </h1>

                    <div className='w-full mt-10 grid md:grid-cols-3 grid-cols-1 xl:gap-16 md:gap-6 gap-4  '>

                        <div className='w-full h-fit flex justify-start items-start flex-col gap-2 bg-cardbg rounded-lg py-6'>
                            <div className='w-full flex justify-center items-center flex-col gap-3'>
                                <div className='relative flex justify-center items-center  w-[100px] h-[100px]'>
                                    <img src={avatar_2} alt="" className='w-full h-full object-cover rounded-full' />
                                    <div className='absolute right-0 bottom-0 border-2 border-primary cursor-pointer bg-black text-primary  flex justify-center items-center text-2xl rounded-full  p-1'>
                                        <MdOutlinePhotoCamera />
                                    </div>
                                </div>
                                <h2 className='w-full text-center capitalize sm:text-xl text-base font-semibold'>Sofia Harvestz</h2>

                            </div>

                            {/* Tab buttons */}
                            <div className="w-full flex justify-start items-start flex-col border-b border-gray-200">
                                <button
                                    onClick={() => setActiveTab("account-details")}
                                    className={`w-full text-start px-4 text-base  border-b-2  py-2 ${activeTab === "account-details" ? " border-gray-400  font-semibold text-black" : "text-fontText border-cardbg"
                                        }`}
                                >
                                    Account
                                </button>
                                <button
                                    onClick={() => setActiveTab("address")}
                                    className={`w-full text-start px-4 text-base  border-b-2 py-2 ${activeTab === "address" ? " border-gray-400  font-semibold text-black" : "text-fontText border-cardbg"
                                        }`}
                                >
                                    Address
                                </button>
                                <button
                                    onClick={() => setActiveTab("order")}
                                    className={`w-full text-start px-4 text-base  border-b-2 py-2 ${activeTab === "order" ? " border-gray-400  font-semibold text-black" : "text-fontText border-cardbg"
                                        }`}
                                >
                                    Order
                                </button>
                                <button
                                    onClick={() => setActiveTab("wishlist")}
                                    className={`w-full text-start px-4 text-base  border-b-2 py-2 ${activeTab === "wishlist" ? " border-gray-400  font-semibold text-black" : "text-fontText border-cardbg"
                                        }`}
                                >
                                    Wishlist
                                </button>
                                <button

                                    className="w-full text-start px-4 text-base  border-b-2 py-2 border-cardbg"
                                >
                                    Logout
                                </button>

                            </div>

                            {/* Tab content */}



                        </div>

                        <div className="w-full flex justify-start items-start flex-col md:col-span-2 ">
                            {activeTab === "account-details" && <AccountDetails /> }
                            {activeTab === "address" &&
                                <div className=' w-full   flex justify-start items-start flex-col  h-fit    '>
                                    <h4 className='text-xl    font-medium'>Address </h4>
                                    <div className='w-full grid sm:grid-cols-2 grid-cols-1 gap-5  mt-4'>
                                        <div className='flex justify-start items-start flex-col p-4 border-2 border-gray-300 rounded-lg'>
                                            <div className='w-full flex justify-between items-center flex-row '>
                                                <h6 className='font-semibold text-sm text-secondary '>Billing Address </h6>
                                                <button className='text-formText font-extrabold text-sm flex justify-center items-center flex-row gap-1'>
                                                    <span className='font-bold text-lg'> < BiEditAlt /></span>
                                                    Edit
                                                </button>
                                            </div>
                                            <table className="w-full text-xs mt-4 border-separate border-spacing-y-2">
                                                <tr>
                                                    <td>Sofia Havertz</td>
                                                </tr>
                                                <tr>
                                                    <td>(+91 797687235123)</td>
                                                </tr>
                                                <tr>
                                                    <td>345 Long Island, NewYork, United States</td>
                                                </tr>
                                            </table>

                                        </div>
                                        <div className='flex justify-start items-start flex-col p-4 border-2 border-gray-300 rounded-lg'>
                                            <div className='w-full flex justify-between items-center flex-row '>
                                                <h6 className='font-semibold text-sm text-secondary '>Billing Address </h6>
                                                <button className='text-formText font-extrabold text-sm flex justify-center items-center flex-row gap-1'>
                                                    <span className='font-bold text-lg'> < BiEditAlt /></span>
                                                    Edit
                                                </button>
                                            </div>
                                            <table className="w-full text-xs mt-4 border-separate border-spacing-y-2">
                                                <tr>
                                                    <td>Sofia Havertz</td>
                                                </tr>
                                                <tr>
                                                    <td>(+91 797687235123)</td>
                                                </tr>
                                                <tr>
                                                    <td>345 Long Island, NewYork, United States</td>
                                                </tr>
                                            </table>

                                        </div>

                                    </div>




                                </div>}
                            {activeTab === "order" && <div className=' w-full   flex justify-start items-start flex-col  h-fit    '>
                                <h4 className='text-xl    font-medium'>Order History </h4>
                                <div className='w-full sm:flex hidden gap-5  mt-4'>
                                    <table className="w-full  border-separate border-spacing-y-5">
                                        <thead className="w-full " >
                                            <tr>
                                                <th className="text-left text-formText font-normal text-sm">Number ID</th>
                                                <th className="text-left text-formText font-normal text-sm">Dates</th>
                                                <th className="text-left text-formText font-normal text-sm">Status</th>
                                                <th className="text-left text-formText font-normal text-sm">Price</th>
                                            </tr>
                                        </thead>

                                        <tbody className="w-full">
                                            {OrderHistory.map((item) => (
                                                
                                                <tr key={item.number_id}  className="border-b-2 border-gray-300">
                                                    <td className="text-left font-normal text-sm">{item.number_id}</td>
                                                    <td className="text-left font-normal text-sm">{item.date}</td>
                                                    <td className="text-left font-normal text-sm">{item.status}</td>
                                                    <td className="text-left font-normal text-sm">{item.price}</td>
                                                </tr>
                                            ))}
                                        </tbody>
                                    </table>



                                </div>

                                <div className='w-full flex sm:hidden  mt-4'>
                                    <table className="w-full  border-separate border-spacing-y-5 ">


                                        {OrderHistory.map((item) => (
                                            <div key={item.number_id} className='w-full border-b-2 border-gray-300'>
                                                <tr className='w-full'>
                                                    <th className="text-left text-formText font-normal text-sm">Number ID</th>
                                                    <td className="text-left px-4 font-normal text-sm">{item.number_id}</td>
                                                </tr>
                                                <tr>
                                                    <th className="text-left text-formText font-normal text-sm">Dates</th>
                                                    <td className="text-left px-4 font-normal text-sm">{item.date}</td>

                                                </tr>
                                                <tr>
                                                    <th className="text-left text-formText font-normal text-sm">Status</th>

                                                    <td className="text-left px-4 font-normal text-sm">{item.status}</td>
                                                </tr>
                                                <tr>
                                                    <th className="text-left text-formText font-normal text-sm">Price</th>

                                                    <td className="text-left px-4 font-normal text-sm">{item.price}</td>
                                                </tr>


                                            </div>
                                        ))}

                                    </table>



                                </div>




                            </div>}
                            {activeTab === "wishlist" &&
                          <Wishlist/>
                            }
                        </div>





                    </div>
                </div>
            </div>
        </>
    );
}

export default AccountPage;

