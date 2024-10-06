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
      <div className="absolute top-0 right-0 sm:w-[200px] md:w-[250px] lg:w-[350px] h-full bg-white shadow-lg">
        <div className="flex  p-4 h-14 border-b-2 border-gray-300 items-center">
          <div className="flex ml-auto items-center">
            <h2 className="text-xl font-bold">WISH LIST</h2>
            <i className="fas fa-heart ml-2"></i>
          </div>
          <div className="ml-auto">
            <button onClick={toggleFavDrawer} className="text-2xl">
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
