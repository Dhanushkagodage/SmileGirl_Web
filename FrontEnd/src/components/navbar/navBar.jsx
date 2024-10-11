/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import FavouriteDrawer from "../../pages/user/components/favouritedrawer/favouriteDrawer";
import ShopcartDrawer from "../../pages/user/components/shopcartdrawer/shopcartDrawer";
import LoginCard from "../login/loginCard";

function NavBar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isfavDrawerOpen, setIsfavDrawerOpen] = useState(false);
  const [iscartDrawerOpen, setIsCartDrawerOpen] = useState(false);
  const [isLoginCardOpen, setIsLoginCardOpen] = useState(false);
  const [isAdmin, setIsAdmin] = useState(false);

  const navigate = useNavigate();

  // Load the admin mode from localStorage when the component mounts
  useEffect(() => {
    const savedMode = localStorage.getItem("isAdmin");
    if (savedMode) {
      setIsAdmin(JSON.parse(savedMode));
    }
    
  
  }, []);
  

  // Toggle the menu
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

  // Toggle between User and Admin mode and save it in localStorage
  const toggleUserMode = () => {
    const newMode = !isAdmin;
    setIsAdmin(newMode);
    localStorage.setItem("isAdmin", JSON.stringify(newMode)); // save the new mode to localStorage
    if (newMode) {
      navigate("/dashboard");
    } else {
      navigate("/");
    }
  };

  return (
    <div className="fixed inline-flex items-center justify-between w-full bg-white h-14 lg:px-26 xl:px-26 sm:px-12 md:px-20 px-12 z-50">
      <div className="inline-flex">
        <h1 className=" font-extrabold text-custom-pink text-[18px] sm:text-[20px] md:text-[26px] lg:text-[32px] font-poppins">
          Smile{" "}
          <span className=" font-extrabold text-black text-[18px] sm:text-[20px] md:text-[28px] lg:text-[34px] font-ReggaeOne">
            G
          </span>
          irl
        </h1>
      </div>

      {/* First nav - visible on lg screens */}
      <nav className="hidden lg:flex text-[16px]">
        <ul className="inline-flex space-x-10 font-medium ">
          {!isAdmin ? (
            <>
              <NavLink
                to="/"
                className={({ isActive }) =>
                  ` ${isActive ? "underline underline-offset-4 " : ""}`
                }
              >
                Home
              </NavLink>
              <NavLink
                to="/shop"
                className={({ isActive }) =>
                  ` ${isActive ? "underline underline-offset-4 " : ""}`
                }
              >
                Shop
              </NavLink>
              <NavLink
                to="/customize"
                className={({ isActive }) =>
                  ` ${isActive ? "underline underline-offset-4 " : ""}`
                }
              >
                Customize
              </NavLink>
              <NavLink
                to="/about"
                className={({ isActive }) =>
                  ` ${isActive ? "underline underline-offset-4 " : ""}`
                }
              >
                About
              </NavLink>
              <NavLink
                to="/contact"
                className={({ isActive }) =>
                  ` ${isActive ? "underline underline-offset-4 " : ""}`
                }
              >
                Contact
              </NavLink>
            </>
          ) : (
            <>
              <NavLink
                to="/dashboard"
                className={({ isActive }) =>
                  ` ${isActive ? "underline underline-offset-4 " : ""}`
                }
              >
                Dashboard
              </NavLink>
              <NavLink
                to="/allproducts"
                className={({ isActive }) =>
                  `${isActive ? "underline underline-offset-4 " : ""}`
                }
              >
                All Products
              </NavLink>
              <NavLink
                to="/orderslist"
                className={({ isActive }) =>
                  `${isActive ? "underline underline-offset-4 " : ""}`
                }
              >
                Orders List
              </NavLink>
              <NavLink
                to="/addproduct"
                className={({ isActive }) =>
                  `${isActive ? "underline underline-offset-4 " : ""}`
                }
              >
                Add Product
              </NavLink>
            </>
          )}
        </ul>
      </nav>

      {/* Second nav (icons) - always visible */}
      <nav className="items-end">
        <ul className="inline-flex space-x-5  font-extrabold xl:text-[16px] lg:text-[16px] md:text-[14px] sm:text-[12px] text-[12px] items-center">
          <li>
            <Link to="/" className="">
              <i className="fas fa-search"></i>
            </Link>
          </li>
          {!isAdmin && (
            <>
              <li>
                <button onClick={toggleCartDrawer} className="text-black">
                  {" "}
                  <i className="fas fa-shopping-cart"></i>
                </button>
              </li>
              <li>
                <button onClick={toggleFavDrawer} className="text-black">
                  {" "}
                  <i className="fas fa-heart"></i>
                </button>
              </li>
            </>
          )}
          <li>
            <button onClick={toggleLoginCard} className="text-black">
              <i className="fas fa-user"></i>
            </button>
          </li>
          <li>
            <button
              onClick={toggleUserMode}
              className="text-white bg-black py-1 px-5 text-[16px]"
            >
              {isAdmin ? "ADMIN" : "USER"}
            </button>
          </li>
        </ul>
      </nav>

      {/* Menu button for small screens */}
      <button className="block lg:hidden z-50 ml-4" onClick={toggleMenu}>
        <i className="fas fa-bars"></i>
      </button>

      {/* Mobile menu - visible only on small and medium screens */}
      {isMenuOpen && (
        <nav className="absolute left-0 w-full bg-white top-14 lg:hidden z-40">
          <ul className="flex flex-col items-center font-medium text-[14px] space-y-2">
            {!isAdmin ? (
              <>
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
              </>
            ) : (
              <>
                <li>
                  <Link to="/dashboard" className="">
                    Dashboard
                  </Link>
                </li>
                <li>
                  <Link to="/allproducts" className="">
                    All Products
                  </Link>
                </li>
                <li>
                  <Link to="/orderslist" className="">
                    Orders List
                  </Link>
                </li>
                <li>
                  <Link to="/addproduct" className="">
                    Add Product
                  </Link>
                </li>
              </>
            )}
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
