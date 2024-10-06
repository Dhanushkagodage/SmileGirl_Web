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
      <div className="absolute top-0 right-0 sm:w-[200px] md:w-[250px] lg:w-[350px] h-full bg-white shadow-lg">
        <div className="flex  p-4 h-14 border-b-2 border-gray-300 items-center">
          <div className="flex ml-auto items-center">
            <h2 className="text-xl font-bold">MY CART</h2>
            <i className="fa-solid fa-cart-shopping ml-2"></i>
          </div>
          <div className="ml-auto">
            <button onClick={toggleCartDrawer} className="text-2xl">
              &times; {/* Close button */}
            </button>
          </div>
        </div>
        <ShoecartCard />

      <ShoecartCard />
      <ShoecartCard />
      </div>

      {/* Shopcart card */}

      
    </div>
  );
}

export default shopcartDrawer;
