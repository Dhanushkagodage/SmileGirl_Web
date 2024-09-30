/* eslint-disable no-unused-vars */
import React from "react";

function footer() {
  return (
    <div className="w-full bg-black h-[300px]  ">
      <div className="grid grid-cols-5  justify-around lg:px-10 xl:px-10 sm:px-12 md:px-20 px-10 text-gray-400 pt-10 justify-items-center font-poppins">
        {/* text column1 */}
        <div className="">
          <h1 className="text-xl font-extrabold text-custom-pink sm:text-2xl md:text-3xl lg:text-4xl">
            Smile{" "}
            <span className="text-xl font-extrabold text-white sm:text-2xl md:text-3xl lg:text-4xl font-ReggaeOne">
              G
            </span>
            irl
          </h1>
        </div>
        {/* text column2 */}
        <div className="grid grid-cols-1 invisible xl:visible font-semibold px-4">
          <div className="">
            <h1>5123 Market St. #22B </h1>
            <h1>Charlottesville, California 44635</h1>
          </div>
          <div className="pt-24 text-[13px]">
            <h1>Phone: (123) 456-7890</h1>
            <h1>Email: Smilegirl@gmail.com</h1>
          </div>
        </div>

        {/* text column3 */}
        <div className="text-[10px] sm:text-[12px] md:text-[13px] lg:text-[15px]">
          <ul>
            <li>Home</li>
            <li>Shop</li>
            <li>Blog</li>
            <li>About</li>
            <li>Contact</li>
          </ul>
        </div>

        {/* text column4 */}
        <div className="text-[10px] sm:text-[12px] md:text-[13px] lg:text-[15px]">
          <h1>Follow Us</h1>
          <h1>Facebook</h1>
          <h1>Twitter</h1>
          <h1>Instagram</h1>
        </div>

        {/* text column5 */}
        <div className="text-[10px] sm:text-[12px] md:text-[13px] lg:text-[15px]">
          <button className="bg-custom-pink rounded-full hover:bg-black-600 text-white flex justify-center items-center w-8 h-8">
            <i className="fas fa-arrow-up text-white"></i>
          </button>
        </div>
      </div>
    </div>
  );
}

export default footer;
