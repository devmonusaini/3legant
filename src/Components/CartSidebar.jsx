import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { TfiClose } from "react-icons/tfi";
import { storeContext } from "../context/storeContext";
const CartSidebar = ({ setShowCart }) => {
  const { cartItem, Product_Data,removeFromCart,getTotalCartAmount } = useContext(storeContext);

  return (
    <div className=" fixed top-0 left-0 w-full h-full bg-black/70 z-50 flex justify-center items-center">
      <div className="bg-primary max-w-[400px] md:w-[400px] h-screen p-6  absolute right-0 top-0 bottom-0">
        <button
          className="absolute top-4 right-4 text-secondary text-xl"
          onClick={() => setShowCart(false)}
        >
          <TfiClose />
        </button>
        <h2 className="text-secondary text-lg font-semibold mb-4"> Cart</h2>
        {/* Cart items would go here */}
        <div className="h-full flex justify-between items-center flex-col gap-4 pb-10">
          <div className="w-full h-[calc(100%-200px)]  overflow-y-auto scroll-hidden ">
            {Product_Data.map((item, index) =>{
            if(cartItem[item.id]>0){

              return(
                
                <div className="w-full h-fit flex justify-between items-center gap-4 p-2 border-b border-black/20">
                <div className="flex justify-start items-start gap-2">
                  <img
                    className="w-[60px] h-full object-cover rounded-lg"
                    src={item.img}
                    alt="Product"
                  />
                  <div className="flex flex-col justify-start items-start gap-1">
                    <h3 className="text-secondary text-sm font-semibold">
                      {item.product_name}
                    </h3>
                    <p className="text-secondary text-xs font-light">
                      Color: Black
                    </p>
                    <p className="text-secondary text-xs font-light">Qty: {cartItem[item.id]}</p>
                    
                  </div>
                </div>
                <span className="text-secondary text-sm font-semibold">
                  ${item.price.toFixed(2)}
                </span>
                <button className="text-secondary text-base font-semibold"onClick={()=>removeFromCart(item.id)}>x</button>
              </div>
            )}})}
          
          </div>
          <div className=" w-full flex justify-start items-start flex-col">
            <div className="w-full flex justify-between items-center font-light text-secondary text-sm py-2 border-b border-black/20">
              <h4>Subtotal</h4> <h4>${getTotalCartAmount()}</h4>
            </div>
            <div className="w-full flex justify-between items-center font-medium text-secondary text-lg py-2 ">
              <h3>Total</h3> <h3>${getTotalCartAmount()}</h3>
            </div>
            <Link
              to="/check-out"
              onClick={() => setShowCart(false)}
              className="w-full text-center flex justify-center items-center p-2 font-extralight rounded-lg bg-black text-primary mt-2"
            >
              Checkout
            </Link>
            <Link
              to="/cart"
              onClick={() => setShowCart(false)}
              className="self-center text-center flex justify-center items-center p-1  font-medium border-b-2 border-black/20  text-black mt-2"
            >
              View Cart
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartSidebar;
