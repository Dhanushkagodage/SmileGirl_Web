// eslint-disable-next-line no-unused-vars
import React from "react";
import FavouriteCard from "./components/favouriteCard";

// eslint-disable-next-line react/prop-types
function FavouriteDrawer({ isOpen, toggleFavDrawer }) {
  if (!isOpen) return null; // Do not render if the drawer is not open

  return (
    <div className="absolute top-0 right-0 h-screen z-50">
      {/* Overlay */}
      <div
        className="fixed inset-0 bg-black bg-opacity-50"
        onClick={toggleFavDrawer}
      ></div>

      {/* Drawer */}
      <div className="absolute top-0 right-0 w-[250px] sm:w-[250px] md:w-[300px] lg:w-[350px] h-full bg-white shadow-lg">
        <div className="flex  p-4 h-14 border-b-2 border-gray-300 items-center">
          <div className="flex ml-auto items-center">
            <h2 className="text-[11px] sm:text-[12px] md:text-[15px] lg:text-[16px] font-bold">WISH LIST</h2>
            <i className="fas fa-heart xl:ml-2 lg:ml-2 ml-1 text-[11px] sm:text-[12px] md:text-[15px] lg:text-[16px]"></i>
          </div>
          <div className="ml-auto text-[16px] sm:text-[16px] md:text-[20px] lg:text-[28px]">
            <button onClick={toggleFavDrawer} className="">
              &times; {/* Close button */}
            </button>
          </div>
        </div>

        {/* Favourite cards */}

        <FavouriteCard />

        <FavouriteCard />

        <FavouriteCard />
      </div>
    </div>
  );
}

export default FavouriteDrawer;
