// eslint-disable-next-line no-unused-vars
import React from "react";
import ShoecartCard from "./component/shoecartCard";

function shopcartDrawer({ isOpen, toggleCartDrawer }) {
  if (!isOpen) return null;

  return (
    <div className="absolute top-0 right-0 h-screen z-50">
      {/* Overlay */}
      <div
        className="fixed inset-0 bg-black bg-opacity-50"
        onClick={toggleCartDrawer}
      ></div>

      {/* Drawer */}
      <div className="absolute top-0 right-0 w-[250px] sm:w-[250px] md:w-[300px] lg:w-[350px] h-full bg-white shadow-lg">
        <div className="flex  p-4 h-14 border-b-2 border-gray-300 items-center">
          <div className="flex ml-auto items-center justify-center">
            <h2 className=" font-bold text-[11px] sm:text-[12px] md:text-[14px] lg:text-[14px]">
              MY CART
            </h2>
            <i className="fa-solid fa-cart-shopping xl:ml-2 lg:ml-2 ml-1 text-[11px] sm:text-[12px] md:text-[15px] lg:text-[16px]"></i>
          </div>
          <div className="ml-auto  text-[16px] sm:text-[16px] md:text-[20px] lg:text-[28px] ">
            <button onClick={toggleCartDrawer} className="">
              &times; {/* Close button */}
            </button>
          </div>
        </div>
        <ShoecartCard />
        <ShoecartCard />
        <ShoecartCard />
      </div>
    </div>
  );
}

export default shopcartDrawer;
