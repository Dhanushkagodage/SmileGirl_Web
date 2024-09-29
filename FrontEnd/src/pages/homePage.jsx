/* eslint-disable no-unused-vars */
import React from "react";
import NavBar from "../components/navbar/navBar";
import homepageBg from "../assets/homepagebg.png"; // Import the image

function HomePage() {
  return (
    <div className="w-full container">
      <NavBar />
        {/* gradient background */}
        <div className="h-[600px]  bg-gradient-to-r from-white to-pink-400  relative overflow-hidden w-full">
          <div className="grid grid-cols-2  items-center justify-between">
            {/* text content */}
            <div className="text-left px-20">
               <h1 className=" font-bold text-black sm:text-[25px] md:text-30px] lg:text-[48px] font-Poppins ">Step confidently <br /> in style.</h1>
               <p className="text-sm sm:text-base md:text-lg lg:text-xl font-Poppins font-light opacity-60 pt-3">
               All footwear collection designed for the modern woman by Smile Girl
               </p>
               <div>
                <button className="bg-black hover:bg-black-600 text-white  py-2 px-6  mt-3 font-poppins">
                  Shop Now!
                </button>
               </div>
            </div>
            <div className="relative fixed max-h-fit">
              <img src={homepageBg} alt="homepage background" />
            </div>
          </div>

        </div>
        <div></div>
        <h1>Homepage</h1>
    </div>
  );
}

export default HomePage;
