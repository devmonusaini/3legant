import React from 'react'
import { GoArrowRight } from "react-icons/go";
import latestArticleImage1 from "../assets/letestArticles1.png";
import latestArticleImage2 from "../assets/letestArticles2.png";
import latestArticleImage3 from "../assets/letestArticles3.png";

const LetestArticles = () => {
    const articles = [
        {
            id: 1,
            title: "Air Jordan x Travis Scott Event",
            image: latestArticleImage1 ,
       
        },
        {
            id: 2,
            title: "The timeless classics on the green",
            image: latestArticleImage2,
          
        },
        {
            id: 3,
            title: "The 2023 Ryder Cup",
            image: latestArticleImage3,
           
        }
    ];
  return (
    <>
    <div className='max-w-[1240px] mx-auto py-10 flex flex-col  justify-center items-center px-4 '>
        <div className='w-full flex justify-between items-center'>
              <h2 className="sm:text-4xl text-2xl  font-semibold text-secondary text-start">
            Latest Articles
        </h2>
        <button className='text-secondary font-2xl font-medium flex justify-center items-center gap-2  border-b border-black/100 pb-0.5'>
            View More <span><GoArrowRight/></span>
        </button>

        </div>
        <div className='w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 my-10'>
            {articles.map((article) => (
                <div key={article.id} className=' h-full  flex flex-col items-start justify-start '>
                    <img src={article.image} alt={article.title} className='w-full max-h-[309px] object-cover  mb-4' />
                    <h3 className='w-full text-start text-xl font-medium my-2'>{article.title}</h3>
                     <button className='text-secondary font-2xl font-medium flex justify-center items-center gap-2  border-b border-black/100 pb-0.5 '>
            View More <span><GoArrowRight/></span>
        </button>
                </div>
            ))}
        </div>

    </div>
 


    </>
  )
}

export default LetestArticles