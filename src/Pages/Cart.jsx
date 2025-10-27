import React, { useContext, useEffect, useState } from "react";
import cart1 from "../assets/cart1.png";
import cart2 from "../assets/cart2.png";
import ccc from "../assets/ticket-percent.png";
import { TfiClose } from "react-icons/tfi";
import { Link } from "react-router-dom";
import { storeContext } from "../context/storeContext";
const Cart = () => {
  const {
    cartItem,
    Product_Data,
    removeFromCart,
    getTotalCartAmount,
    addToCart,
    selectedShipping,
    setSelectedShipping,

  } = useContext(storeContext);


  const handleShippingChange = (e) => {
    setSelectedShipping(parseFloat(e.target.value));
  };

  const [activeStep, setActiveStep] = useState(1); // Start at step 1

  const steps = [
    { id: 1, label: "Shopping Cart" },
    { id: 2, label: "Checkout Details" },
    { id: 3, label: "Order Complete" },
  ];

  return (
    <>
      <div className="max-w-[1240px] mx-auto px-4 md:py-10 py-6 flex justify-center items-center flex-col">
        <div className="w-full sm:mt-10 flex justify-center items-center flex-col ">
          <h1 className="w-full md:leading-[56px] text-2xl sm:text-4xl md:text-5xl font-medium text-center text-secondary">
            Cart
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
                  <p className={`text-sm font-medium ${textClass}`}>
                    {step.label}
                  </p>
                </div>
              );
            })}
          </div>
          <div className="w-full mt-10 grid md:grid-cols-3 grid-cols-1 gap-4  ">
            <div className=" w-full md:col-span-2  ">
              <table className="w-full">
                <thead className="w-full ">
                  <tr className="w-full border-b-2 border-black/20 ">
                    <th className="text-left text-sm font-medium text-secondary pb-2">
                      Product
                    </th>
                    <th className="text-left text-sm font-medium text-secondary pb-2">
                      Quantity
                    </th>
                    <th className="text-left text-sm font-medium text-secondary pb-2">
                      Price
                    </th>
                    <th className="text-left text-sm font-medium text-secondary pb-2 sm:block hidden">
                      Total
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {Product_Data.map((item, index) => {
                    if (cartItem[item.id] > 0) {
                      return (
                        <tr className="w-full border-b border-black/20 ">
                          <td className="py-4 flex justify-start items-center gap-2">
                            <img
                              className=" w-[50px] sm:w-[80px]  h-[50px] sm:h-[80px] object-contain"
                              src={item.img}
                              alt="product"
                            />
                            <div className="flex flex-col justify-start items-start">
                              <h3 className="sm:text-sm text-xs font-medium text-secondary">
                                {item.name}
                              </h3>
                              <p className="text-xs font-normal text-secondary">
                                Color: Red
                              </p>
                              <button
                                className="sm:text-sm text-xs font-normal text-secondary sm:flex justify-center items-center flex-row gap-2 hidden "
                                onClick={() => removeFromCart(item.id)}
                              >
                                <span>
                                  <TfiClose />
                                </span>{" "}
                                Remove
                              </button>
                            </div>
                          </td>
                          <td className="sm:text-sm text-xs font-normal text-secondary">
                            <div className=" flex justify-center items-center flex-row gap-4 border border-formText w-fit px-2 py-1 rounded-lg ">
                              <button
                                className="  flex justify-center items-center text-lg font-semibold text-secondary"
                                onClick={() => removeFromCart(item.id)}
                              >
                                -
                              </button>
                              <div className=" ">{cartItem[item.id]}</div>
                              <button
                                className="  flex justify-center items-center text-lg font-semibold text-secondary"
                                onClick={() => addToCart(item.id)}
                              >
                                +
                              </button>
                            </div>
                          </td>
                          <td className="sm:text-sm text-xs font-normal text-secondary">
                            <div className="w-fit flex justify-center gap-2 items-center flex-col ">
                              <span>${item.price.toFixed(2)}</span>
                              <button
                                className="sm:text-sm text-xs font-normal text-secondary sm:hidden flex  justify-center items-center flex-row sm:gap-0 gap-1 "
                                onClick={() => removeFromCart(item.id)}
                              >
                                <span>
                                  <TfiClose />
                                </span>{" "}
                                Remove
                              </button>
                            </div>
                          </td>
                          <td className="sm:text-sm text-xs font-semibold text-secondary sm:table-cell hidden  h-fit">
                            ${getTotalCartAmount().toFixed(2)}
                          </td>
                        </tr>
                      );
                    }
                  })}
                </tbody>
              </table>
            </div>
            <div className=" w-full md:col-span-1  flex justify-start items-start flex-col p-4 rounded-lg h-fit   border border-black order-3 md:order-2  ">
              <h4>cart summary</h4>
              <div className="w-full flex flex-col gap-2 mt-4">
                {/* Option 1 */}
                <div className="group w-full">
                  <label
                    className="group w-full flex justify-between items-center border border-formText px-3 py-2 rounded-lg cursor-pointer transition
                    group-has-[:checked]:bg-gray-200 group-has-[:checked]:border-black"
                  >
                    <div className="flex items-center gap-2">
                      <input
                        type="radio"
                        name="shipping"
                        className="accent-[#6C7275] cursor-pointer"
                        value={0}
                        onChange={handleShippingChange}
                        defaultChecked
                      />
                      <span className="text-sm font-normal text-secondary">
                        Free Shipping
                      </span>
                    </div>
                    <span className="text-sm font-normal text-secondary">
                      $0.00
                    </span>
                  </label>
                </div>

                {/* Option 2 */}
                <div className="group w-full">
                  <label
                    className="group w-full flex justify-between items-center border border-formText px-3 py-2 rounded-lg cursor-pointer transition
                    group-has-[:checked]:bg-gray-200 group-has-[:checked]:border-black"
                  >
                    <div className="flex items-center gap-2">
                      <input
                        type="radio"
                        name="shipping"
                        className="accent-[#6C7275] cursor-pointer"
                        value={15}
                        onChange={handleShippingChange}
                      />
                      <span className="text-sm font-normal text-secondary">
                        Express Shipping
                      </span>
                    </div>
                    <span className="text-sm font-normal text-secondary">
                      +$15.00
                    </span>
                  </label>
                </div>
                {/* Option 3 */}
                <div className="group w-full">
                  <label
                    className=" w-full flex justify-between items-center border border-formText px-3 py-2 rounded-lg cursor-pointer transition
                    group-has-[:checked]:bg-gray-200 group-has-[:checked]:border-black"
                  >
                    <div className="flex items-center gap-2">
                      <input
                        type="radio"
                        name="shipping"
                        value={(getTotalCartAmount() * 0.21).toFixed(2)}
                      
                        onChange={handleShippingChange}
                        className="accent-[#6C7275] cursor-pointer"
                      />
                      <span className="text-sm font-normal text-secondary">
                        Pick Up
                      </span>
                    </div>
                    <span className="text-sm font-normal text-secondary">
                      %21.00
                    </span>
                  </label>
                </div>
              </div>

              <div className="w-full flex justify-between items-center mt-4">
                <p className="text-sm font-normal text-secondary">Subtotal</p>
                <p className="text-sm font-normal text-secondary">
                  ${getTotalCartAmount().toFixed(2)}
                </p>
              </div>

              <div className="w-full flex justify-between items-center mt-2 border-t-2 border-black/20 pt-2">
                <h3 className="text-base font-medium text-secondary">Total</h3>
                <h3 className="text-base font-medium text-secondary">
                  ${(selectedShipping + getTotalCartAmount()).toFixed(2)}
                </h3>
              </div>
              <Link
                to="/check-out"
                className="w-full text-center flex justify-center items-center p-2 font-extralight rounded-lg bg-black text-primary mt-4"
              >
                Checkout
              </Link>
            </div>
            <div className="w-full flex justify-start items-start flex-col mt-4 gap-2 order-2 md:order-3">
              <h3 className="text-base font-medium text-secondary">
                Have a coupon?
              </h3>
              <p className="text-sm font-light text-formText">
                Add your code for an instant cart discount
              </p>
              <div className="w-full flex justify-start items-center gap-2  border border-formText px-3 p-2 ">
                <div className="w-full flex justify-start items-center gap-2 ">
                  <img
                    className="w-[20px] h-[20px] object-contain"
                    src={ccc}
                    alt="coupon"
                  />
                  <input
                    type="text"
                    placeholder="coupon code"
                    className="w-full   sm:text-sm text-xs  font-light outline-none "
                  />
                </div>
                <button className="sm:text-sm text-xs font-normal text-secondary  ">
                  Apply
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Cart;
