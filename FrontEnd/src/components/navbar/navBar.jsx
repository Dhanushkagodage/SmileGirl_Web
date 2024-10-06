// eslint-disable-next-line no-unused-vars
import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import FavouriteDrawer from "../favouritedrawer/favouriteDrawer";
import ShopcartDrawer from "../shopcartdrawer/shopcartDrawer";
import LoginCard from "../login/loginCard";

function NavBar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isfavDrawerOpen, setIsfavDrawerOpen] = useState(false);
  const [iscartDrawerOpen, setIsCartDrawerOpen] = useState(false);
  const [isLoginCardOpen, setIsLoginCardOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  const toggleFavDrawer = () => {
    setIsfavDrawerOpen(!isfavDrawerOpen);
  };

  const toggleCartDrawer = () => {
    setIsCartDrawerOpen(!iscartDrawerOpen);
  };

  const toggleLoginCard = () => {
    setIsLoginCardOpen(!isLoginCardOpen);
  };

  return (
    <div className="relative inline-flex items-center justify-between w-full bg-white h-14 lg:px-26 xl:px-26 sm:px-12 md:px-20 px-12">
      <div className="inline-flex">
        <h1 className="text-xl font-extrabold text-custom-pink sm:text-2xl md:text-3xl lg:text-4xl">
          Smile{" "}
          <span className="text-xl font-extrabold text-black sm:text-2xl md:text-3xl lg:text-4xl font-ReggaeOne">
            G
          </span>
          irl
        </h1>
      </div>

      {/* First nav - visible on lg screens */}
      <nav className="hidden lg:flex">
        <ul className="inline-flex space-x-10 font-medium">
          <NavLink
            to="/"
            className={({ isActive }) =>
              `text-lg ${
                isActive ? "underline underline-offset-4 " : ""
              }`
            }
          >
            Home
          </NavLink>
          <NavLink
            to="/shop"
            className={({ isActive }) =>
              `text-lg ${
                isActive ?"underline underline-offset-4 " : ""
              }`
            }
          >
            Shop
          </NavLink>
          <NavLink
            to="/customize"
            className={({ isActive }) =>
              `text-lg ${
                isActive ? "underline underline-offset-4 " : ""
              }`
            }
          >
            Customize
          </NavLink>
          <NavLink
            to="/about"
            className={({ isActive }) =>
              `text-lg ${
                isActive ? "underline underline-offset-4 " : ""
              }`
            }
          >
            About
          </NavLink>
          <NavLink
            to="/contact"
            className={({ isActive }) =>
              `text-lg ${
                isActive ? "underline underline-offset-4 " : ""
              }`
            }
          >
            Contact
          </NavLink>
        </ul>
      </nav>

      {/* Second nav (icons) - always visible */}
      <nav className="items-end">
        <ul className="inline-flex space-x-5 text-sm font-extrabold sm:text-base md:text-lg lg:text-xl">
          <li>
            <Link to="/" className="">
              <i className="fas fa-search"></i>
            </Link>
          </li>
          <li>
            <button onClick={toggleCartDrawer} className="text-black">
              {" "}
              {/* Button to open the drawer */}
              <i className="fas fa-shopping-cart"></i>
            </button>
          </li>
          <li>
            <button onClick={toggleFavDrawer} className="text-black">
              {" "}
              {/* Button to open the drawer */}
              <i className="fas fa-heart"></i>
            </button>
          </li>
          <li>
            <button onClick={toggleLoginCard} className="text-black">
              <i className="fas fa-user"></i>
            </button>
          </li>
        </ul>
      </nav>

      {/* Menu button for small screens */}
      <button className="block lg:hidden z-50" onClick={toggleMenu}>
        <i className="fas fa-bars"></i>
      </button>

      {/* Mobile menu - visible only on small and medium screens */}
      {isMenuOpen && (
        <nav className="absolute left-0 w-full bg-white top-14 lg:hidden z-40">
          <ul className="flex flex-col items-center space-y-5 text-base font-medium sm:text-lg md:text-xl">
            <li>
              <Link to="/" className="">
                Home
              </Link>
            </li>
            <li>
              <Link to="/shop" className="">
                Shop
              </Link>
            </li>
            <li>
              <Link to="/customize" className="">
                Customize
              </Link>
            </li>
            <li>
              <Link to="/about" className="">
                About
              </Link>
            </li>
            <li>
              <Link to="/contact" className="">
                Contact
              </Link>
            </li>
          </ul>
        </nav>
      )}
      <FavouriteDrawer
        isOpen={isfavDrawerOpen}
        toggleFavDrawer={toggleFavDrawer}
      />
      <ShopcartDrawer
        isOpen={iscartDrawerOpen}
        toggleCartDrawer={toggleCartDrawer}
      />
      <LoginCard isOpen={isLoginCardOpen} toggleLoginCard={toggleLoginCard} />
    </div>
  );
}

export default NavBar;
