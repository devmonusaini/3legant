import React from 'react'
import CategoryImg1 from "../assets/category-product1.png";
import CategoryImg2 from "../assets/category-product2.png";
import CategoryImg3 from "../assets/category-product3.png";
import CategoryImg4 from "../assets/category-product4.png";
import CategoryImg5 from "../assets/category-product5.png";
import CategoryImg6 from "../assets/category-product6.png";
import OfferCard from "../assets/OfferCard.png";

const Category = () => {

    const CategoryData = [
        {
            id: 1,
            name: "Golf Clubs",
            image: CategoryImg1
        },
        {
            id: 2,
            name: "Golf Balls",
            image: CategoryImg2
        },
        {
            id: 3,
            name: "Golf Bags",
            image: CategoryImg3
        },
        {
            id: 4,
            name: "Clothing & Rainwear",
            image: CategoryImg4
        },
        {
            id: 5,
            name: "Footwear",
            image: CategoryImg5
        }
        , {
            id: 6,
            name: "Accessories",
            image: CategoryImg6
        }
    ]


    return (

        <>
            <div className='max-w-[1240px] mx-auto py-10 flex flex-col  justify-center items-center px-4'>
                <h2 className="heading-category font-semibold">Shop by Category</h2>
            <div className='w-full grid grid-cols-2 lg:grid-cols-3 md:gap-6 sm:gap-4  gap-2 mt-10'>
                {CategoryData.map((category) => (
                    <div className='w-full ' key={category.id}>
                    <div key={category.id} className='bg-[#F3F5F7] sm:h-[309px] h-fit p-4 rounded-lg flex flex-col items-center'>
                        <img src={category.image} alt={category.name} className='w-full h-full sm:object-cover object-contain rounded-lg mb-4' />
                        
                    </div>
                    <h3 className='w-full text-center text-xl font-semibold my-4'>{category.name}</h3>
                    </div>
                ))}

            </div>
            </div>
            <div className='w-full h-auto grid grid-cols-1 md:grid-cols-2  py-10'>
                <div className='w-full '><img  className='w-full h-full object-fill ' src={OfferCard} /></div>
                <div className='flex flex-col justify-center items-start text-center  p-10 bg-secondary gap-2 '>
                    <h4 className=' uppercase text-brandbg '>Limited Edition</h4>
                    <h2 className='md:text-[40px] sm:text-[32px] text-[24px] font-medium text-primary'>Hurry up! 30% OFF</h2>
                    <p className='sm:text-lg text-sm text-start font-light  text-primary'>Find clubs that are right for your game</p>
                    <h3 className='sm:text-lg text-sm text-primary font-light mt-4'>Offer expire In : </h3>
                    <div className='flex justify-center items-center gap-4 mt-2'>
                        <div className='sm:h-14 h-10 sm:w-14 w-10  sm:text-4xl text-xl font-semibold bg-primary text-secondary flex justify-center items-center text-center'>02</div>
                        <div className='sm:h-14 h-10 sm:w-14 w-10  sm:text-4xl text-xl font-semibold bg-primary text-secondary flex justify-center items-center text-center'>12</div>
                        <div className='sm:h-14 h-10 sm:w-14 w-10  sm:text-4xl text-xl font-semibold bg-primary text-secondary flex justify-center items-center text-center'>45</div>
                        <div className='sm:h-14 h-10 sm:w-14 w-10  sm:text-4xl text-xl font-semibold bg-primary text-secondary flex justify-center items-center text-center'>05</div>
                    </div>

                    <button className='mt-6 bg-brandbg text-secondary px-6  sm:py-3 py-1 sm:text-xl text-sm rounded-lg font-medium'>Shop Now</button>
                </div>
            </div>
        </>
    )
}

export default Category