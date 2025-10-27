import React, { useState, useEffect, useRef, useContext } from "react";
import product1 from "../assets/product1.png";
import product2 from "../assets/product2.png";
import product3 from "../assets/product3.png";
import product4 from "../assets/product4.png";
import { TiStarFullOutline } from "react-icons/ti";
import { storeContext } from "../context/storeContext";

const Feature = () => {
  const [active, setActive] = useState(0);
  const sliderRef = useRef(null);
  const { Product_Data , addToCart  } = useContext(storeContext);


  const slides = [
    { id: 0, img: product1, product_name: "Shark - Men's cabretta white golf glove " },
    { id: 1, img: product2, product_name: "Greg Norman - Men's Shark Logo Golf Polo Shirt " },
    { id: 2, img: product3, product_name: "G/FORE - Mens Left Glove Snow 2023 " },
    { id: 3, img: product4, product_name: "Utility Rover-R Double Strap Bag All Black - 2023 " },
    { id: 4, img: product1, product_name: "Shark - Men's cabretta white golf glove " },
    { id: 5, img: product2, product_name: "Greg Norman - Men's Shark Logo Golf Polo Shirt " },
  ];

  // number of visible cards based on screen size
  const getVisibleCount = () => {
    if (window.innerWidth < 768) return 1; // mobile
    if (window.innerWidth < 1024) return 2; // tablet
    return 4; // desktop
  };

  const [visibleCount, setVisibleCount] = useState(getVisibleCount());

  useEffect(() => {
    const handleResize = () => setVisibleCount(getVisibleCount());
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const maxIndex = slides.length - visibleCount;

  // scroll to card when radio clicked
  const scrollToIndex = (index) => {
    if (!sliderRef.current) return;
    const slider = sliderRef.current;
    const cardWidth = slider.scrollWidth / slides.length;
    slider.scrollTo({
      left: index * cardWidth,
      behavior: "smooth",
    });
    setActive(index);
  };

  return (
    <div className="max-w-[1240px] mx-auto py-10 px-4">
      {/* Heading + Radio buttons */}
      <div className="flex justify-between items-center mb-6 flex-wrap gap-4">
        <h2 className="text-2xl md:text-3xl font-semibold">Featured</h2>
        <div className="flex gap-3">
          {[...Array(maxIndex + 1)].map((_, index) => (
            <input
              key={index}
              type="radio"
              name="slider"
              checked={active === index}
              onChange={() => scrollToIndex(index)}
              className="h-3 w-3 md:h-4 md:w-4 cursor-pointer accent-[#6C7275]"
            />
          ))}
        </div>
      </div>

      {/* Slider (scrollable) */}
      <div
        ref={sliderRef}
        className="relative w-full overflow-x-auto scroll-smooth snap-x snap-mandatory scroll-hidden"
        onScroll={(e) => {
          const scrollLeft = e.target.scrollLeft;
          const cardWidth = e.target.scrollWidth / slides.length;
          setActive(Math.round(scrollLeft / cardWidth));
        }}
      >
        <div className="flex gap-4">
          {Product_Data.map((item ) => (
            <div
              key={item.id}
              className="flex-shrink-0 w-full sm:w-1/2 lg:w-1/4 snap-start"
            >
              {/* Product Card */}
              <div className="relative w-full h-[300px] md:h-[349px] flex items-center justify-center overflow-hidden bg-[#F3F5F7] group rounded-lg">
                {/* HOT Tag */}
                <div className="absolute top-4 left-4 z-10 bg-primary font-semibold text-xs md:text-sm py-1 px-3 rounded-md">
                  HOT
                </div>

                {/* Product Image */}
                <img
                  src={item.img}
                  alt={`Product ${item.id + 1}`}
                  className="w-full h-full object-cover scale-[1.05]"
                />

                {/* Add to Cart Button */}
                <button className="w-[calc(100%-32px)] absolute bottom-6 left-4 z-10 bg-secondary text-primary text-center rounded-lg font-medium py-2 md:py-3 px-4 cursor-pointer 
                  opacity-0 group-hover:opacity-100 
                  transition-all duration-500 ease-in-out"
                  onClick={() => addToCart(item.id)}

                  >
                  Add To Cart
                </button>
              </div>

              {/* Rating */}
              <div className="flex justify-start items-center text-lg my-2 text-secondary">
                {Array(5).fill().map((_, i) => (
                  <TiStarFullOutline key={i} />
                ))}
              </div>

              {/* Product Info */}
              <div>
                <h3 className="text-base md:text-lg font-semibold text-secondary">
                  {item.product_name}
                </h3>
                <p className="text-sm font-semibold text-secondary mt-1">${item.price.toFixed(2)}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Feature;
