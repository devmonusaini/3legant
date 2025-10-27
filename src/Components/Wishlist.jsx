import React from 'react'
import cart1 from '../assets/cart1.png';
import cart2 from '../assets/cart2.png';
import cart4 from '../assets/cart2.png';
import cart5 from '../assets/cart2.png';
import cart6 from '../assets/cart2.png';
import { TfiClose } from "react-icons/tfi";
const Wishlist = () => {
    const WishlistData = [
        {
            id: 1,
            image: cart1,
            productName: "Tray Tables",
            color: "Black",
            price: "$1200.00"

        },

        {
            id: 2,
            image: cart2,
            productName: "Tray Tables",
            color: "Black",
            price: "$1200.00"

        },
        {
            id: 3,
            image: cart4,
            productName: "Tray Tables",
            color: "Black",
            price: "$1200.00"

        },
        {
            id: 4,
            image: cart5,
            productName: "Tray Tables",
            color: "Black",
            price: "$1200.00"

        },
        {
            id: 5,
            image: cart6,
            productName: "Tray Tables",
            color: "Black",
            price: "$1200.00"

        },
    ]

    return (
        <div className=' w-full   flex justify-start items-start flex-col  h-fit    '>
            <h4 className='text-xl    font-medium'>Order History </h4>
            <div className='w-full flex  gap-5  mt-4'>
        <table className="w-full table-auto border-collapse">
  <thead>
    <tr className="border-b-2 border-formText">
      <th className="py-3 text-left text-formText font-normal text-sm">Product</th>
      <th className="py-3 text-left text-formText font-normal text-sm sm:table-cell hidden">Price</th>
      <th className="py-3 text-left text-formText font-normal text-sm sm:table-cell hidden">Action</th>
    </tr>
  </thead>

  <tbody className=''>
    {WishlistData.map((item) => (
      <tr key={item.id} className="border-b-2 border-gray-300">
        <td className="text-left font-normal text-sm">
          <div className="flex justify-start items-center flex-row gap-2 my-2">
            <button><TfiClose /></button>
            <img src={item.image} className="w-[56px] h-[56px] object-contain" />
            <div className="flex justify-start items-start flex-col gap-1">
              <h4 className="text-sm font-medium">{item.productName}</h4>
              <p className="text-xs text-formText">Color: {item.color}</p>
              <p className="text-left font-normal text-xs sm:hidden block">{item.price}</p>
            </div>
          </div>
        </td>
        <td className="text-left font-normal text-xs sm:table-cell hidden">{item.price}</td>
        <td className="text-left font-normal text-sm">
          <div className="max-w-max bg-secondary text-primary text-center rounded-lg text-xs font-normal py-2 md:py-3 px-6 cursor-pointer">
            Add To Cart
          </div>
        </td>
      </tr>
    ))}
  </tbody>
</table>




            </div>

            <div className='w-full flex sm:hidden  mt-4'>
                <table className="w-full  border-separate border-spacing-y-5 ">




                </table>



            </div>




        </div>
    )
}

export default Wishlist