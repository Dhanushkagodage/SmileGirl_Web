/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import Layout from "../components/layout/layout";
import shopbgimage from "../assets/shoppagebg.png";
import Shoecard from "../components/shoecard/shoecard";
import Pagination from "../components/pagination/pagination";

function ShopPage() {
  const [selectedOption, setSelectedOption] = useState("");

  const handleChange = (event) => {
    setSelectedOption(event.target.value);
  };

  const shoecardsArray = Array(12).fill(0);

  return (
    <Layout>
      <div className="relative">
        {/* Background Image */}
        <img
          src={shopbgimage}
          alt="shopbgimage"
          className="w-full xl:h-[550px] md:h-[400px] sm:h-[300px] object-cover"
        />

        {/* Gradient Overlay */}
        <div className="absolute top-0 left-0 w-full xl:h-[550px] md:h-[400px] sm:h-[300px] bg-gradient-to-r from-white/20 to-pink-400/65"></div>

        {/* Additional Content (if needed) */}
        <div className="absolute top-0 left-0 w-full xl:h-[550px] md:h-[400px] sm:h-[300px] flex justify-center items-center text-center">
          <h1 className="font-bold text-black sm:text-[25px] md:text-[30px] lg:text-[48px] font-Poppins justify-center">
            Find your sole mate <br /> at Smile Girl
          </h1>
        </div>
      </div>
      <div className=" grid-cols-2 flex justify-between lg:py-[30px] xl:py-[30px] md:py-[20px] sm:py-[15px] xs:py-[15px] py-[15px]">
        <div>
          <h1>Showing 1–18 of 348 results</h1>
        </div>
        <div className="flex justify-end">
          <select
            id="options"
            value={selectedOption}
            onChange={handleChange}
            className=" bg-black text-white px-[10px] py-[5px] "
          >
            <option value="">Sorted by all</option>
            <option value="option1">Sorted by latest</option>
            <option value="option2">Sorted by popular</option>
            <option value="option3">Sorted by all</option>
          </select>
        </div>
      </div>
      {/* <div className="text-center w-full grid grid-cols-4 mt-5">
          <Shoecard />
          <Shoecard />
          <Shoecard />
          <Shoecard />
        </div> */}

      <div className="text-center w-full grid grid-cols-4  mt-5">
        {shoecardsArray.map((_, index) => (
          <div key={index}>
            <Shoecard />
          </div>
        ))}
      </div>
      <div className="flex justify-center pt-5 pb-7">
      <Pagination />
      </div>

      
    </Layout>
  );
}

export default ShopPage;
