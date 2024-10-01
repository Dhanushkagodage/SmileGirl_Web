/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import { Link } from "react-router-dom";

function NavBar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="inline-flex items-center justify-between w-full bg-white h-14 lg:px-26 xl:px-26 sm:px-12 md:px-20 px-12">
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
          <li>
            <Link to="/" className="text-sm sm:text-base md:text-lg lg:text-xl">
              Home
            </Link>
          </li>
          <li>
            <Link to="/shop" className="text-sm sm:text-base md:text-lg lg:text-xl">
              Shop
            </Link>
          </li>
          <li>
            <Link to="/customize" className="text-sm sm:text-base md:text-lg lg:text-xl">
              Customize
            </Link>
          </li>
          <li>
            <Link to="/about" className="text-sm sm:text-base md:text-lg lg:text-xl">
              About
            </Link>
          </li>
          <li>
            <Link to="/contact" className="text-sm sm:text-base md:text-lg lg:text-xl">
              Contact
            </Link>
          </li>
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
            <Link to="/products" className="">
              <i className="fas fa-shopping-cart"></i>
            </Link>
          </li>
          <li>
            <Link to="/about" className="">
              <i className="fas fa-heart"></i>
            </Link>
          </li>
          <li>
            <Link to="/contact" className="">
              <i className="fas fa-user"></i>
            </Link>
          </li>
        </ul>
      </nav>

      {/* Menu button for small screens */}
      <button className="block lg:hidden" onClick={toggleMenu}>
        <i className="fas fa-bars"></i>
      </button>

      {/* Mobile menu - visible only on small and medium screens */}
      {isMenuOpen && (
        <nav className="absolute left-0 w-full bg-white top-14 lg:hidden">
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
    </div>
  );
}

export default NavBar;
