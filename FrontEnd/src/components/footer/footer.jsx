/* eslint-disable no-unused-vars */
import React from "react";

function Footer() {
  return (
    <div className="w-full bg-black h-[full]">
      <div className="grid grid-flow-col justify-around lg:px-10 xl:px-10 sm:px-12 md:px-20 px-10 text-gray-400 justify-items-center font-poppins  py-10">
        {/* text column1 */}
        <div className="flex  ">
          <h1 className="font-extrabold text-custom-pink text-[18px] sm:text-[20px] md:text-[26px] lg:text-[32px] font-poppins">
            Smile{" "}
            <span className="font-extrabold text-white text-[18px] sm:text-[20px] md:text-[28px] lg:text-[34px] font-ReggaeOne">
              G
            </span>
            irl
          </h1>
        </div>
        {/* text column2 */}
        <div className="hidden sm:hidden md:hidden lg:grid xl:grid grid-cols-1 xl:w-full font-semibold px-4">
          <div className="text-[14px]">
            <h1>5123 Market St. #22B</h1>
            <h1>Charlottesville, California 44635</h1>
          </div>
          <div className="pt-20 text-[12px]">
            <h1>Phone: (123) 456-7890</h1>
            <h1>Email: Smilegirl@gmail.com</h1>
          </div>
        </div>

        {/* text column3 */}
        <div className="text-[10px] sm:text-[10px] md:text-[12px] lg:text-[14px]  ">
          <ul>
            <li>Home</li>
            <li>Shop</li>
            <li>Blog</li>
            <li>About</li>
            <li>Contact</li>
          </ul>
        </div>

        {/* text column4 */}
        <div className="text-[10px] sm:text-[10px] md:text-[12px] lg:text-[14px ] ">
          <h1>Follow Us</h1>
          <h1>Facebook</h1>
          <h1>Twitter</h1>
          <h1>Instagram</h1>
        </div>

        {/* text column5 */}
        <div className="text-[10px] sm:text-[10px] md:text-[12px] lg:text-[14px]  ">
          <button className="bg-custom-pink rounded-full hover:bg-black-600 text-white flex justify-center items-center w-8 h-8">
            <i className="fas fa-arrow-up text-white"></i>
          </button>
        </div>
      </div>
    </div>
  );
}

export default Footer;
