import React, { useState } from 'react'
import cart1 from '../assets/cart1.png';
import cart2 from '../assets/cart2.png';
import Thankyou from '../assets/Thank you.png'
const Complete = () => {
        const [activeStep, setActiveStep] = useState(3); // Start at step 1
    
        const steps = [
            { id: 1, label: "Shopping Cart" },
            { id: 2, label: "Checkout Details" },
            { id: 3, label: "Order Complete" },
        ];
  return (
      <div className='max-w-[1240px] mx-auto px-4 md:py-10 py-6 flex justify-center items-center flex-col'>
                    <div className='w-full mt-10 flex justify-center items-center flex-col '>
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
                     
                    </div>
                    <div className='max-w-[600px] w-full   flex justify-center items-center flex-col sm:px-8 md:px-12 px-2 shadow-2xl mt-10 py-12 '>
                         <img src={Thankyou} alt="thankyou" className='h-8 w-auto ' />
                         <h2 className='text-3xl font-medium max-w-[300px] text-center mt-4 '>
                            Your order has been received 
                         </h2>
                         <div className='flex justify-center items-center flex-row flex-wrap gap-4 p-4'>
                            <div className='relative max-w-[80px] flex justify-center items-center bg-cardbg  '>
                                <img src={cart1} alt="" className='w-full h-[100px] object-contain ' />
                                <div className='absolute -top-2 -right-2 h-5 w-5 flex justify-center items-center text-xs font-semibold  bg-black rounded-full text-primary '>
                                    1
                                </div>

                            </div>
                                 <div className='relative max-w-[80px] flex justify-center items-center bg-cardbg  '>
                                <img src={cart2} alt="" className='w-full h-auto object-contain ' />
                                <div className='absolute -top-2 -right-2 h-5 w-5 flex justify-center items-center text-xs font-semibold  bg-black rounded-full text-primary '>
                                    1
                                </div>

                            </div>
                            

                         </div>
                         <div className='w-fit flex justify-center items-center flex-col gap-2'>
                     <table>
  <tbody>
    <tr>
      <td className="text-xs pr-4">Order code :</td>
      <td className="text-xs text-black font-semibold">#1234_56789</td>
    </tr>
    <tr>
      <td className="text-xs pr-4">Date :</td>
      <td className="text-xs text-black font-semibold">October 19, 2023</td>
    </tr>
    <tr>
      <td className="text-xs pr-4">Total :</td>
      <td className="text-xs text-black font-semibold">$1,235.00</td>
    </tr>
    <tr>
      <td className="text-xs pr-4">Payment method :</td>
      <td className="text-xs text-black font-semibold">Credit Card</td>
    </tr>
  </tbody>
</table>
<button className='py-2 px-6 bg-black rounded-2xl w-fit text-primary text-xs font-light mt-4 '>
    Purchase history
</button>


                         </div>
                    </div>
                </div>
  )
}

export default Complete