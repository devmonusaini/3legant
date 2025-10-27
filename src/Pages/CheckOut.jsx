import React, { useContext, useEffect, useState } from 'react';
import cart1 from '../assets/cart1.png';
import cart2 from '../assets/cart2.png';
import ccc from '../assets/ticket-percent.png';
import money from '../assets/money.png';
import { storeContext } from '../context/storeContext';
import { Link } from 'react-router-dom';

const CheckOut = () => {
     const {
        cartItem,
        Product_Data,
        removeFromCart,
        getTotalCartAmount,
        addToCart,
        selectedShipping,
      } = useContext(storeContext);
    const [expiry, setExpiry] = useState(""); // MM/YY format
    const [rawDate, setRawDate] = useState(""); // YYYY-MM-DD (for picker)
    const [activeStep, setActiveStep] = useState(2); // Start at step 1

    const steps = [
        { id: 1, label: "Shopping Cart" },
        { id: 2, label: "Checkout Details" },
        { id: 3, label: "Order Complete" },
    ];





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



    return (
        <>
            <div className='max-w-[1240px] mx-auto px-4 md:py-10 py-6 flex justify-center items-center flex-col'>
                <div className='w-full sm:mt-10 flex justify-center items-center flex-col '>
                    <h1 className='w-full md:leading-[56px] text-2xl sm:text-4xl md:text-5xl font-medium text-center text-secondary'>
                        Check Out
                    </h1>
                    <div className="max-w-[760px] w-full py-6 grid sm:grid-cols-3 grid-cols-1 gap-4">
                        {steps.map((step) => {
                            let statusClass = "";
                            let circleClass = "";
                            let textClass = "";

                            if (step.id < activeStep) {
                                // ✅ Completed
                                statusClass = "border-b-2 border-brandbg";
                                circleClass = "bg-brandbg text-white";
                                textClass = "text-brandbg";
                            } else if (step.id === activeStep) {
                                // ⏳ In Progress
                                statusClass = "border-b-2 border-black";
                                circleClass = "bg-black text-white";
                                textClass = "text-black";
                            } else {
                                // ⬜ Not Started
                                statusClass = "border-b-2 border-[#B1B5C3]";
                                circleClass = "bg-[#B1B5C3] text-white";
                                textClass = "text-[#B1B5C3]";
                            }

                            return (
                                <div
                                    key={step.id}
                                    className={`w-full flex justify-start items-center flex-row gap-2 pb-2 ${statusClass}`}
                                >
                                    <div
                                        className={`h-8 w-8 flex justify-center items-center font-semibold text-base rounded-full ${circleClass}`}
                                    >
                                        {step.id}
                                    </div>
                                    <p className={`text-sm font-medium ${textClass}`}>{step.label}</p>
                                </div>
                            );
                        })}
                    </div>
                    <div className='w-full mt-10 grid md:grid-cols-5 grid-cols-1 gap-4  '>


                        <div className=' w-full flex justify-start items-start flex-col md:col-span-3 gap-4 '>
                            {/* contact information  */}
                            <div className=' w-full   flex justify-start items-start flex-col p-4 rounded-lg h-fit   border border-black  '>
                                <h4 className=''>Contact Information </h4>


                                <div className='w-full flex justify-start items-start flex-col gap-2 mt-4'>
                                    <div className='w-full grid sm:grid-cols-2 grid-cols-1 gap-2'>
                                        <div className='w-full flex flex-col justify-start items-start gap-2'>
                                            <label className='text-formText font-medium text-xs uppercase '>First Name</label>
                                            <input type="text" placeholder='First name' className='w-full  py-1 border border-formText rounded-md text-sm sm:px-3 px-2 font-light ' />
                                        </div>
                                        <div className='w-full flex flex-col justify-start items-start gap-2'>
                                            <label className='text-formText font-medium text-xs uppercase '>Last Name</label>
                                            <input type="text" placeholder='Last name' className='w-full  py-1 border border-formText rounded-md text-sm sm:px-3 px-2 font-light ' />
                                        </div>
                                    </div>
                                    <div className='w-full flex flex-col justify-start items-start gap-2'>
                                        <label className='text-formText font-medium text-xs uppercase '>Phone Number</label>
                                        <input type="number" placeholder='Phone number' className='w-full  py-1 border border-formText rounded-md text-sm sm:px-3 px-2 font-light ' />
                                    </div>
                                    <div className='w-full flex flex-col justify-start items-start gap-2'>
                                        <label className='text-formText font-medium text-xs uppercase '>Email Address</label>
                                        <input type="text" placeholder='Email address' className='w-full  py-1 border border-formText rounded-md text-sm sm:px-3 px-2 font-light ' />
                                    </div>
                                </div>


                            </div>

                            {/* Shipping Address */}
                            <div className=' w-full   flex justify-start items-start flex-col p-4 rounded-lg h-fit   border border-black  '>
                                <h4 className=''>Shipping Address  </h4>


                                <div className='w-full flex justify-start items-start flex-col gap-2 mt-4'>

                                    <div className='w-full flex flex-col justify-start items-start gap-2'>
                                        <label className='text-formText font-medium text-xs uppercase '>Sreet Address</label>
                                        <input type="text" placeholder='Street address' className='w-full  py-1 border border-formText rounded-md text-sm sm:px-3 px-2 font-light ' />
                                    </div>
                                    <div className='w-full flex flex-col justify-start items-start gap-2 '>
                                        <label className='text-formText font-medium text-xs uppercase '>Country</label>
                                       <div className='w-full  py-1 border border-formText rounded-md  sm:px-3 px-2  '>


                                        <select
                                            className="w-full text-sm font-light outline-none "
                                            defaultValue=""
                                        >
                                            <option value="" disabled>
                                                Select Country
                                            </option>
                                            <option value="india">India</option>
                                            <option value="usa">United States</option>
                                            <option value="uk">United Kingdom</option>
                                            <option value="canada">Canada</option>
                                            <option value="australia">Australia</option>
                                            <option value="germany">Germany</option>
                                            <option value="france">France</option>
                                            <option value="japan">Japan</option>
                                            <option value="china">China</option>
                                            <option value="brazil">Brazil</option>
                                        </select>
                                       </div>
                                    </div>

                                    <div className='w-full flex flex-col justify-start items-start gap-2'>
                                        <label className='text-formText font-medium text-xs uppercase '>Town / City</label>
                                        <input type="text" placeholder='Town / city' className='w-full  py-1 border border-formText rounded-md text-sm sm:px-3 px-2 font-light ' />
                                    </div>
                                    <div className='w-full grid sm:grid-cols-2 grid-cols-1 gap-2'>
                                    <div className='w-full flex flex-col justify-start items-start gap-2'>
                                        <label className='text-formText font-medium text-xs uppercase '>State</label>
                                        <input type="text" placeholder='State' className='w-full  py-1 border border-formText rounded-md text-sm sm:px-3 px-2 font-light ' />
                                    </div>
                                      <div className='w-full flex flex-col justify-start items-start gap-2'>
                                        <label className='text-formText font-medium text-xs uppercase '>Zip Code</label>
                                        <input type="number" placeholder='Zip code' className='w-full  py-1 border border-formText rounded-md text-sm sm:px-3 px-2 font-light ' />
                                    </div>
                                    </div>
                                    <div className='w-full flex justify-start itemx-start gap-2'>
                                        <input type="checkbox" className="accent-[#6C7275] cursor-pointer" />
                                         <label className='text-formText font-medium text-xs uppercase '>Use a different billing address [optional]</label>

                                    </div>
                                </div>


                            </div>
                            {/* /// Payment Method & Card Details */}

                            <div className=' w-full   flex justify-start items-start flex-col p-4 rounded-lg h-fit   border border-black  '>
                                <h4>Payment method</h4>
                                <div className="w-full flex flex-col gap-2 mt-4">

                                    {/* Option 1 */}
                                    <div className='group w-full'>

                                        <label className="group w-full flex justify-between items-center border border-formText px-3 py-2 rounded-md cursor-pointer transition
                    group-has-[:checked]:bg-gray-200 group-has-[:checked]:border-black">
                                            <div className="flex items-center gap-2">
                                                <input
                                                    type="radio"
                                                    name="payment"
                                                    className="accent-[#6C7275] cursor-pointer"
                                                    defaultChecked
                                                />
                                                <span className="text-xs font-normal text-secondary">Pay by Credit Card</span>
                                            </div>
                                            <span className="text-xs font-normal text-secondary"><img src={money} alt="" className='w-[20px] h-[20px]' /></span>
                                        </label>
                                    </div>

                                    {/* Option 2 */}
                                    <div className='group w-full'>
                                        <label className="group w-full flex justify-between items-center border border-formText px-3 py-2 rounded-md cursor-pointer transition
                    group-has-[:checked]:bg-gray-200 group-has-[:checked]:border-black">
                                            <div className="flex items-center gap-2">
                                                <input
                                                    type="radio"
                                                    name="payment"
                                                    className="accent-[#6C7275] cursor-pointer"
                                                />
                                                <span className="text-xs font-normal text-secondary">Paypal</span>
                                            </div>
                                            <span className="text-xs font-normal text-secondary"></span>
                                        </label>
                                    </div>


                                </div>
                                <div className='my-6 h-[1px] w-full  bg-black/20'></div>
                                <div className='w-full flex justify-start items-start flex-col gap-2'>
                                    <div className='w-full flex flex-col justify-start items-start gap-2'>
                                        <label className='text-formText font-medium text-xs uppercase '>Card Number</label>
                                        <input type="text" placeholder='1234-1234-1234' className='w-full  py-1 border border-formText rounded-md text-sm sm:px-3 px-2 font-light ' />
                                    </div>
                                    <div className='w-full grid sm:grid-cols-2 grid-cols-1 gap-2'>
                                        <div className='w-full flex flex-col justify-start items-start gap-2'>
                                            <label className='text-formText font-medium text-xs uppercase '>Expiration Date</label>
                                            <input
                                                type="text"
                                                placeholder="MM/YY"
                                                value={expiry}
                                                onFocus={(e) => {
                                                    e.target.type = "date"; // switch to date picker
                                                    e.target.value = rawDate; // show raw date for picker
                                                }}
                                                onBlur={(e) => {
                                                    e.target.type = "text"; // back to text after selection
                                                    e.target.value = expiry; // show MM/YY
                                                }}
                                                onChange={handleChange}
                                                className="w-full py-1 border border-formText rounded-md text-sm sm:px-3 px-2 font-light"
                                            />
                                        </div>
                                        <div className='w-full flex flex-col justify-start items-start gap-2'>
                                            <label className='text-formText font-medium text-xs uppercase'>CVC</label>
                                            <input type="text" placeholder='CVC code' className='w-full  py-1 border border-formText rounded-md text-sm sm:px-3 px-2 font-light ' />
                                        </div>

                                    </div>

                                </div>


                            </div>
                              <Link
                to="/complete"
                 className='w-full text-center flex justify-center items-center p-2 font-extralight rounded-lg bg-black text-primary mt-4'>Place Order</Link>
                        </div>

                        {/* /// Order Summary */}
                        <div className=' w-full md:col-span-2  flex justify-start items-start flex-col p-4 rounded-lg h-fit   border border-black  '>
                            <h4 className='sm:text-xl text-base font-medium '>Order summary</h4>
                              {Product_Data.map((item, index) => {
                    if (cartItem[item.id] > 0) {
                      return (
                            <div className='w-full border-b border-black/20 flex justify-between items-center pb-2'>
                                <div className='py-4 flex justify-start items-center gap-2'>
                                    <img className=' w-[50px] sm:w-[80px]  h-[50px] sm:h-[80px] object-contain' src={item.img} alt="product" />
                                    <div className='flex flex-col justify-start items-start gap-2'>
                                        <h3 className='sm:text-sm text-xs font-medium text-secondary'>{item.name}</h3>
                                        <p className='text-xs font-normal text-secondary'>Color: Red</p>
                                        <div className=' flex justify-center items-center flex-row gap-4 border border-formText w-fit px-2   '>
                                            <button className='  flex justify-center items-center text-lg font-semibold text-secondary' onClick={()=>removeFromCart(item.id)}>-</button>
                                            <div className=' '>{cartItem[item.id]}</div>
                                            <button className='  flex justify-center items-center text-lg font-semibold text-secondary'onClick={()=>addToCart(item.id)}>+</button>
                                        </div>
                                    </div>
                                </div>
                                <div className='w-fit flex justify-center gap-2 items-center  '>
                                    ${item.price.toFixed(2)}
                                </div>



                            </div>
                      )}})}
                            <div className='w-full h-10 flex justify-between items-center my-4 gap-2'>
                                <input type="text" placeholder='Input' className='w-full h-full  border border-formText rounded-lg font-lg sm:px-4 px-2 font-light ' />
                                <button className='h-full bg-black text-primary font-medium text-sm sm:px-6 px-4  rounded-lg '>Apply</button>

                            </div>
                            <div className='w-full flex justify-between items-center mt-2 border-b border-black/20 pb-2'>
                                <p className='text-sm font-normal text-secondary flex justify-center items-center gap-2 '> <span><img className='h-[16px] w-[16px]' src={ccc} alt="" /></span>JenkateMW</p>
                                <p className='text-sm font-normal text-brandbg'>-$25.00 [remove]</p>
                            </div>
                            <div className='w-full flex justify-between items-center mt-2 border-b border-black/20 pb-2'>
                                <p className='text-sm font-normal text-secondary'>Shipping</p>
                                <p className='text-sm font-normal text-secondary'>{selectedShipping===0?"Free":selectedShipping===15?"Express":"Pick Up"}</p>
                            </div>
                            <div className='w-full flex justify-between items-center mt-2'>
                                <p className='text-sm font-normal text-secondary'>Subtotal</p>
                                <p className='text-sm font-normal text-secondary'>${getTotalCartAmount().toFixed(2)}</p>
                            </div>

                            <div className='w-full flex justify-between items-center mt-2 border-t-2 border-black/20 pt-2'>
                                <h3 className='text-base font-medium text-secondary'>Total</h3>
                                <h3 className='text-base font-medium text-secondary'>${(selectedShipping+getTotalCartAmount()).toFixed(2)}</h3>
                            </div>

                        </div>




                    </div>
                </div>
            </div>
        </>
    );
}

export default CheckOut;

