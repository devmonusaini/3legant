import { createContext, useState } from "react";
import { Product_Data } from "../assets/assetsData.js";
import { useNavigate } from "react-router-dom";
import SummaryApi from "../common/index.js";
export const  storeContext = createContext(null);

const StoreContextProvider = ({children})=>{
    const navigate=useNavigate();
    const [cartItem , setCartItem]= useState({});
    const [user , setUser]=useState(null)
     const [selectedShipping, setSelectedShipping] = useState(0); // default shipping 0

  const addToCart = (itemId) => {
    if(user){

      setCartItem((prev) => {
        if (!prev[itemId]) {
          return { ...prev, [itemId]: 1 };
        }
        return { ...prev, [itemId]: prev[itemId] + 1 };
      });
    }else{
      navigate("/sign-in")
    }
  };


     const removeFromCart = (itemId) => {
       setCartItem((prev) => ({ ...prev, [itemId]: prev[itemId] - 1 }));
     };

       const getTotalCart = () => {
  let totalCart = 0;

  for (const item in cartItem) {
    if (cartItem[item] > 0) {
        totalCart += cartItem[item];
      }

  }

  return totalCart;
};

  const getTotalCartAmount = () => {
  let totalAmount = 0;

  for (const item in cartItem) {
    if (cartItem[item] > 0) {
      // convert item to number for comparison
      let itemInfo = Product_Data.find((product) => product.id === Number(item));
      if (itemInfo) {
        totalAmount += itemInfo.price * cartItem[item];
      }
    }
  }

  return totalAmount;
};
 const fetchUser = async () => {
  try {
    const res = await fetch(SummaryApi.userDetail.url, {
      method: SummaryApi.userDetail.method,
      credentials: "include", // ✅ important for cookies
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (!res.ok) {
      console.error("Failed to fetch user. Status:", res.status);
      return;
    }

    const data = await res.json();
    if (data.success) {
      setUser(data.user); // ✅ store user in state
    } else {
      console.warn("No user data:", data.message);
    }
  } catch (err) {
    console.error("Error fetching user:", err);
  }
};



   

   const contextValue ={
    Product_Data,
    addToCart,
    getTotalCart,
    cartItem,
    setCartItem,
    removeFromCart,
    getTotalCartAmount,
    selectedShipping,
    setSelectedShipping,
    user,
    fetchUser

   }

    return (
        <storeContext.Provider value={contextValue}>
            {children}
        </storeContext.Provider>
    )
}

export default StoreContextProvider;