// eslint-disable-next-line no-unused-vars
import React, { useState } from "react";

function NavBar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="container inline-flex items-center justify-between w-full bg-white h-14" >
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
            <a href="/" className="text-sm sm:text-base md:text-lg lg:text-xl">
              Home
            </a>
          </li>
          <li>
            <a href="/shop" className="text-sm sm:text-base md:text-lg lg:text-xl">
              Shop
            </a>
          </li>
          <li>
            <a href="/customize" className="text-sm sm:text-base md:text-lg lg:text-xl">
              Customize
            </a>
          </li>
          <li>
            <a href="/about" className="text-sm sm:text-base md:text-lg lg:text-xl">
              About
            </a>
          </li>
          <li>
            <a href="/contact" className="text-sm sm:text-base md:text-lg lg:text-xl">
              Contact
            </a>
          </li>
        </ul>
      </nav>

      {/* Second nav (icons) - always visible */}
      <nav className="items-end">
        <ul className="inline-flex space-x-5 text-sm font-extrabold sm:text-base md:text-lg lg:text-xl">
          <li>
            <a href="/" className="">
              <i className="fas fa-search"></i>
            </a>
          </li>
          <li>
            <a href="/products" className="">
              <i className="fas fa-shopping-cart"></i>
            </a>
          </li>
          <li>
            <a href="/about" className="">
              <i className="fas fa-heart"></i>
            </a>
          </li>
          <li>
            <a href="/contact" className="">
              <i className="fas fa-user"></i>
            </a>
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
              <a href="/" className="">
                Home
              </a>
            </li>
            <li>
              <a href="/shop" className="">
                Shop
              </a>
            </li>
            <li>
              <a href="/customize" className="">
                Customize
              </a>
            </li>
            <li>
              <a href="/about" className="">
                About
              </a>
            </li>
            <li>
              <a href="/contact" className="">
                Contact
              </a>
            </li>
          </ul>
        </nav>
      )}
    </div>
  );
}

export default NavBar;
