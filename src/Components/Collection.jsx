import React from "react";
import ManSet from "../assets/ManSet.png";
import WomanSet from "../assets/WomanSet.png";
import JuniorSet from "../assets/JuniorSet.png";
import { GoArrowRight } from "react-icons/go";

const Collection = () => {
  return (
    
    <div className="max-w-[1240px] h-fit mx-auto flex flex-col gap-10 py-10 px-4">
        <h2 className="heading-category font-semibold text-secondary text-start">
            Shop Collections
        </h2>
    <div className="w-full h-fit  grid sm:grid-flow-col sm:grid-rows-2  sm:grid-cols-2 grid-cols-1 gap-4">
      {/* Left big card */}
    
      <div className="row-span-3 w-full h-fit bg-[#F3F5F7] rounded-xl overflow-hidden flex flex-col items-center py-2">
        <img src={JuniorSet} alt="Junior" className=" w-full  h-auto object-cover" />
        <div className="w-full flex justify-start items-start flex-col px-10 mb-10">
            <h2 className="sm:text-4xl text-xl text-secondary font-semibold text-center ">Junior Set</h2>
            <button className=" sm:text-lg text-sm text-secondary  pb-0.5 mt-2   flex justify-center items-center gap-2  border-b border-black/100">Collections <span className="font-thin"><GoArrowRight/></span></button>
        </div>
      </div>

      {/* Top right card */}
      <div className=" col-span-2 w-full h-full bg-[#F3F5F7] rounded-xl overflow-hidden flex flex-row justify-between items-end py-2" >
         <div className="w-full flex justify-start items-start flex-col pl-10 mb-10">
            <h2 className="sm:text-4xl text-xl text-secondary font-semibold text-center ">Men's Set</h2>
            <button className="sm:text-lg text-sm text-secondary  pb-0.5 mt-2   flex justify-center items-center gap-2  border-b border-black/100">Collections <span className="font-thin"><GoArrowRight/></span></button>
        </div>
        <img src={ManSet} alt="Man" className="w-auto h-full object-cover" />
      </div>

      {/* Bottom right card */}
      <div className="col-span-2 row-span-2 w-full h-full bg-[#F3F5F7] rounded-xl overflow-hidden flex flex-row justify-between items-end py-2">
         <div className="w-full flex justify-start items-start flex-col pl-10 mb-10">
            <h2 className="sm:text-4xl text-xl text-secondary font-semibold text-center ">Women's Set</h2>
            <button className="sm:text-lg text-sm text-secondary  pb-0.5 mt-2   flex justify-center items-center gap-2  border-b border-black/100">Collections <span className="font-thin"><GoArrowRight/></span></button>
        </div>
        <img src={WomanSet} alt="Woman" className="w-auto h-full object-cover" />
        
      </div>
    </div>
    </div>
  );
};

export default Collection;
