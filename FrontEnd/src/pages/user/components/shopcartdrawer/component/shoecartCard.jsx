// eslint-disable-next-line no-unused-vars
import React from "react";
import Image from "../../../../../assets/1.jpg";

function shoecartCard() {
  const rating = 4;
  return (
    <div className="grid grid-flow-col xl:px-6 lg:px-6 sm:px-2 md:px-4 px-3 py-3 border-b-2 border-gray-200 items-start  " >
      {/* image */}
      <div className="">
        <img
          src={Image}
          alt="shoe"
          loading="lazy"
          className="object-cover lg:h-[100px] md:h-[90px] sm:h-[80px] h-[80px]"
        />
      </div>

      {/* text */}
      <div className="justify-self-start grid-flow-row grid">
        <h1 className="text-[11px] sm:text-[12px] md:text-[14px] lg:text-[14px] font-medium text-black">
          Basic Braided Sliders
        </h1>
        <div className="flex items-center">
          {[...Array(5)].map((_, index) => (
            <span
              key={index}
              className={`text-custom-pink text-[14px] sm:text-[16px] md:text-[18px] lg:text-[20px] ${
                index < rating ? "fill" : ""
              }`}
            >
              {index < rating ? "★" : "☆"}
            </span>
          ))}
        </div>
        <div className="mt-2">
          <h1 className="text-[10px] sm:text-[10px] md:text-[12px] lg:text-[12px] font-light text-gray-500">
            Colors : Black
          </h1>
          <h1 className="text-[10px] sm:text-[10px] md:text-[12px] lg:text-[12px] font-light text-gray-500">
            price : Rs 2,500.00
          </h1>
        </div>
      </div>
      {/* icon */}
      <div className="justify-self-center items-start text-center text-[12px] sm:text-[14px] md:text-[14px] lg:text-[16px]">
        <i className="fa-solid fa-trash text-custom-pink"></i>
      </div>
    </div>
  );
}

export default shoecartCard;
