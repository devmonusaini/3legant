import React, { useState } from 'react'
import { IoIosStar, IoIosStarOutline } from "react-icons/io";
import { MdKeyboardArrowRight } from "react-icons/md";
import { FaRegHeart } from "react-icons/fa6";
import { IoMdArrowBack, IoMdArrowForward } from "react-icons/io";
import cart3 from "../assets/cart3.png";
import cart4 from "../assets/cart4.png";
import cart5 from "../assets/cart5.png";
import cart6 from "../assets/cart6.png";
import cart1 from "../assets/cart1.png";
import cart2 from "../assets/cart2.png";
import CustomerReview from '../Components/CustomerReview';

const ProductDetails = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [reviewOpen, setReviewOpen] = useState(false)
  const [activeTab, setActiveTab] = useState("review");
  const assetsData = [
    {
      id: 1,
      image: cart3
    },
    {
      id: 2,
      image: cart4
    },
    {
      id: 3,
      image: cart5
    },
    {
      id: 4,
      image: cart6
    }
  ]
  const nextSlide = () => {
    setCurrentIndex((prev) =>
      prev === assetsData.length - 1 ? 0 : prev + 1
    );
  };

  // Prev slide
  const prevSlide = () => {
    setCurrentIndex((prev) =>
      prev === 0 ? assetsData.length - 1 : prev - 1
    );
  };
  return (

    <div className='max-w-[1240px] mx-auto p-4 sm:my-10 my-2 '>
      <div className="w-full h-full grid md:grid-cols-2 grid-cols-1 gap-10 mt-4 ">
        <div className='w-full flex justify-between  items-center flex-col gap-5'>
          <div className="relative w-full h-full  flex flex-col justify-center items-center bg-cardbg p-5">

            <img
              src={assetsData[currentIndex].image}
              alt={`slide-${currentIndex}`}
              className="w-[90%] h-[500px] object-contain rounded-lg"
            />

            {/* Prev Button */}
            <button
              onClick={prevSlide}
              className="absolute left-6 top-1/2 -translate-y-1/2 bg-primary p-2 rounded-full "
            >
              <IoMdArrowBack />
            </button>

            {/* Next Button */}
            <button
              onClick={nextSlide}
              className="absolute right-6 top-1/2 -translate-y-1/2 bg-primary p-2 rounded-full "
            >
              <IoMdArrowForward />
            </button>



            <div className='absolute top-5 left-5 flex justify-start items-start flex-col gap-2'>
              <p className='bg-primary rounded-sm p-1 px-4 text-sm font-bold'> NEW</p>
              <p className='bg-brandbg rounded-sm p-1 px-4 text-base font-bold text-primary' >-50%</p>

            </div>
          </div>
          <div className='w-full grid grid-cols-3 gap-2 '>
            {assetsData
              .filter((item) => item.id !== 1) // 👈 remove id 1
              .map((item) => (
                <img
                  key={item.id}
                  src={item.image}
                  alt={`thumb-${item.id}`}
                  className='w-full h-full object-contain cursor-pointer'
                />
              ))}
          </div>
        </div>



        <div className='w-full flex justify-between items-center flex-col gap-5'>
          <div className="w-full flex flex-col justify-center items-start gap-4">

            <div className='flex justify-center items-center   flex-row'>
              <span className='text-sm text-secondary '><IoIosStar /></span>
              <span className='text-sm text-secondary '><IoIosStar /></span>
              <span className='text-sm text-secondary '><IoIosStar /></span>
              <span className='text-sm text-secondary '><IoIosStar /></span>
              <span className='text-sm text-secondary '><IoIosStar /></span>
              <span className='text-sm ml-2 text-secondary font-light '>11 Reviews</span>


            </div>
            <h2 className='font-normal text-3xl '>Tray Table</h2>
            <p className='text-xs font-normal text-formText max-w-[350px]'>Buy one or buy a few and make every space where you sit more convenient. Light and easy to move around with removable tray top, handy for serving snacks.</p>
            <div className='flex justify-center items-center flex-row gap-2 text-2xl text-black'><h4>$199.00</h4> <h4 className='text-xs text-formText line-through'>$400.00</h4></div>
            <div className='w-full flex justify-start items-start flex-col mt-5 gap-2'>
              <h6 className='text-sm font-semibold  text-formText'>
                Offer expire In:
              </h6>
              <div className='w-full flex justify-start items-start flex-row  gap-2'>
                <div className='flex justify-center items-center flex-col gap-1'>
                  <div className='h-[60px] w-[60px] flex justify-center items-center px-2 py-1 bg-cardbg text-[32px] font-semibold'>
                    02
                  </div>
                  <p className='text-xs text-formText capitalize'>days</p>
                </div>
                <div className='flex justify-center items-center flex-col gap-1'>
                  <div className='h-[60px] w-[60px] flex justify-center items-center px-2 py-1 bg-cardbg text-[32px] font-semibold'>
                    02
                  </div>
                  <p className='text-xs text-formText capitalize'>Hours</p>
                </div>
                <div className='flex justify-center items-center flex-col gap-1'>
                  <div className='h-[60px] w-[60px] flex justify-center items-center px-2 py-1 bg-cardbg text-[32px] font-semibold'>
                    02
                  </div>
                  <p className='text-xs text-formText capitalize'>Minutes</p>
                </div>
                <div className='flex justify-center items-center flex-col gap-1'>
                  <div className='h-[60px] w-[60px] flex justify-center items-center px-2 py-1 bg-cardbg text-[32px] font-semibold'>
                    02
                  </div>
                  <p className='text-xs text-formText capitalize'>seconds</p>
                </div>


              </div>

            </div>
            <div className='w-full flex justify-start items-start flex-col mt-5 gap-2'>
              <h6 className='text-sm font-semibold  text-formText'>
                Measurements
              </h6>
              <p className='font-light text-black gap-2 text-base'><span>17</span> <span>1/2x20</span> <span>5/8"</span></p>

            </div>
            <div className='w-full flex justify-start items-start flex-col mt-5 gap-2'>
              <h6 className='text-sm font-semibold  text-formText flex justify-center items-center  gap-1'>
                Choose Color <span ><MdKeyboardArrowRight /></span>
              </h6>
              <div className='w-full flex justify-start items-start flex-row gap-4'>

                <div className="flex justify-center items-center gap-2 flex-col">
                  <h4 className="text-sm">Black</h4>

                  {/* Hidden radio */}
                  <input
                    type="radio"
                    id="black"
                    name="color"   // same name for group
                    className="peer hidden"
                  />

                  {/* Box linked to radio */}
                  <label
                    htmlFor="black"
                    className="w-fit p-2 border border-gray-300 rounded-md cursor-pointer peer-checked:border-black"
                  >
                    <img src={cart1} alt="" className="w-[60px] h-auto" />
                  </label>
                </div>

                <div className="flex justify-center items-center gap-2 flex-col">
                  <h4 className="text-sm">Red</h4>

                  {/* Hidden radio */}
                  <input
                    type="radio"
                    id="red"
                    name="color"   // same name for group
                    className="peer hidden"
                  />

                  {/* Box linked to radio */}
                  <label
                    htmlFor="red"
                    className="w-fit p-2 border border-gray-300 rounded-md cursor-pointer peer-checked:border-black"
                  >
                    <img src={cart2} alt="" className="w-[60px] h-auto" />
                  </label>
                </div>

              </div>

            </div>
          </div>
          <div className='w-full flex justify-center items-center flex-col gap-5'>
            <div className='w-full flex justify-start items-start flex-row gap-4'>
              <div className='bg-cardbg h-full  px-5  gap-5 flex justify-center items-center flex-row '>
                <button className='font-normal text-base'>-</button>
                <h4 className='font-normal text-base'>1</h4>
                <button className='font-normal text-base'>+</button>

              </div>
              <button className='w-full border-2 border-secondary rounded-lg p-2 flex justify-center items-center  '>
                <span className='mr-2'><FaRegHeart /></span>Wishlist
              </button>

            </div>
            <button className='w-full bg-black rounded-lg text-primary p-3 text-sm font-light'>Add To Cart</button>
          </div>
          <div className='h-1 w-full bg-cardbg '></div>
          <div className='w-full flex justify-center items-center flex-col gap-5'>
            <div className='w-full flex justify-start items-start gap-2 flex-col'>

              <div className='w-full grid sm:grid-cols-3 grid-cols-2 gap-5 '>
                <h6 className='text-xs font-normal text-formText col-span-1'>SKU</h6>
                <p className='text-xs font-normal  sm:col-span-2'>117</p>

              </div>
              <div className='w-full grid sm:grid-cols-3 grid-cols-2 gap-5 '>
                <h6 className='text-xs font-normal text-formText col-span-1'>CATEGORY</h6>
                <p className='text-xs font-normal  sm:col-span-2'>Living Room , Bedroom</p>

              </div>

            </div>
          </div>
        </div>


      </div>
      <div className="w-full  mx-auto mt-10">
        {/* Tab buttons */}
        <div className="flex border-b border-gray-200">
          <button
            onClick={() => setActiveTab("addition-info")}
            className={`px-4 text-base py-2 ${activeTab === "addition-info" ? "border-b-2 border-gray-400 font-semibold" : "text-fontText"
              }`}
          >
            Addition Info
          </button>
          <button
            onClick={() => setActiveTab("questions")}
            className={`px-4 text-base py-2 ${activeTab === "questions" ? "border-b-2 border-gray-400 font-semibold" : "text-fontText"
              }`}
          >
            Questions
          </button>
          <button
            onClick={() => setActiveTab("review")}
            className={`px-4 text-base py-2 ${activeTab === "review" ? "border-b-2 border-gray-400 font-semibold" : "text-fontText"
              }`}
          >
            Review
          </button>
        </div>

        {/* Tab content */}
        <div className="">
          {activeTab === "addition-info" && <div>Content for Tab 1</div>}
          {activeTab === "questions" && <div>Content for Tab 2</div>}
          {activeTab === "review" &&
            <CustomerReview/>
          }
        </div>
      </div>

    </div>
  )
}

export default ProductDetails