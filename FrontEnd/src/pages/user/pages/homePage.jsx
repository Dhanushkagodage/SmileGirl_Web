/* eslint-disable no-unused-vars */
import React from "react";
import homepageBg from "../../../assets/homepagebg.png";
import Layout from "../../../components/layout/layout";
import Shoecard from "../../../components/shoecard/shoecard";

function HomePage() {
  return (
    <Layout>
      {/* Page-specific content */}
      <div className="xl:h-[550px] md:h-[400px] sm:h-[300px] bg-gradient-to-r from-white to-pink-400 relative overflow-hidden w-full">
        <div className="grid grid-cols-2 justify-between lg:px-26 xl:px-26 md:px-20 sm:px-12 xs:px-12 px-12">
          {/* Text content */}
          <div className="text-left lg:py-28 xl:py-28 sm:py-12 py-6">
            <h1 className="font-bold text-black sm:text-[25px] md:text-[30px] lg:text-[48px] font-Poppins">
              Step Confidently In Style.
            </h1>
            <p className="text-[11px] sm:text-[12px] md:text-[15px] lg:text-[20px] font-Poppins font-light opacity-60 pt-3">
              All footwear collection designed for the modern woman by Smile Girl
            </p>
            <div className="text-left pt-5">
              <button className="bg-black hover:bg-black-600 text-white py-2 px-6 justify-center text-[11px] sm:text-[12px] md:text-[15px] lg:text-[20px] font-Poppins xl:py-2 xl:px-10 ">
                Shop Now!
              </button>
            </div>
          </div>

          {/* Responsive image */}
          <div className="object-cover w-full xl:px-10">
            <img
              src={homepageBg}
              alt="homepage background"
              loading="lazy"
              className="max-w-full xl:h-[550px] md:h-[300px] sm:h-[300px] object-cover"
            />
          </div>
        </div>
      </div>

      {/* New Arrivals Section */}
      <div className="w-full mt-5 grid">
        <div className="text-center grid">
          <h1 className="font-normal text-black sm:text-[25px] md:text-[30px] lg:text-[48px] font-Poppins">
            New Arrivals
          </h1>
          <h1 className="text-[11px] sm:text-[12px] md:text-[15px] lg:text-[20px] font-Poppins font-light opacity-60">
            Say hello to our newest collection
          </h1>
        </div>
        <div className="text-center w-full grid grid-cols-4 mt-5">
          <Shoecard />
          <Shoecard />
          <Shoecard />
          <Shoecard />
        </div>
      </div>

      <div className="w-full mt-5 grid">
        <div className="text-center grid">
          <h1 className="font-normal text-black sm:text-[25px] md:text-[30px] lg:text-[48px] font-Poppins">
          This Month’s Best Sellers
          </h1>
          <h1 className="text-[11px] sm:text-[12px] md:text-[15px] lg:text-[20px] font-Poppins font-light opacity-60">
          Discover the hottest picks of the month!
          </h1>
        </div>
        <div className="text-center w-full grid grid-cols-4 mt-5">
          <Shoecard />
          <Shoecard />
          <Shoecard />
          <Shoecard />
        </div>
      </div>
    </Layout>
  );
}

export default HomePage;
