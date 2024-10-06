// eslint-disable-next-line no-unused-vars
import React from "react";
import Image from "../../../../../assets/1.jpg";

function shoecartCard() {
  const rating = 4;
  return (
    <div className="grid grid-flow-col px-6 py-2 border-b-2 border-gray-200 items-start " >
      {/* image */}
      <div className="">
        <img
          src={Image}
          alt="shoe"
          loading="lazy"
          className="object-cover h-[100px]"
        />
      </div>

      {/* text */}
      <div className="justify-self-start grid-flow-row grid">
        <h1 className="text-[14px] font-medium text-black">
          Basic Braided Sliders
        </h1>
        <div className="flex items-center">
          {[...Array(5)].map((_, index) => (
            <span
              key={index}
              className={`text-custom-pink text-[20px] ${
                index < rating ? "fill" : ""
              }`}
            >
              {index < rating ? "★" : "☆"}
            </span>
          ))}
        </div>
        <div className="mt-2">
          <h1 className="text-[12px] font-light text-gray-500">
            Colors : Black
          </h1>
          <h1 className="text-[12px] font-light text-gray-500">
            price : Rs 2,500.00
          </h1>
        </div>
      </div>
      {/* icon */}
      <div className="justify-self-end ">
        <i className="fa-solid fa-trash text-custom-pink"></i>
      </div>
    </div>
  );
}

export default shoecartCard;
