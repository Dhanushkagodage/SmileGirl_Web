/* eslint-disable no-undef */
/* eslint-disable react/jsx-no-undef */
/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import Layout from "../../../components/layout/layout";
import Image from "../../../assets/1.jpg";
import { FaEnvelope, FaWhatsapp } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import Footer from "../../../components/footer/Footer";
import FavouriteDrawer from "../components/favouritedrawer/favouriteDrawer";
import ShopcartDrawer from "../components/shopcartdrawer/shopcartDrawer";
import LoginCard from "../../../components/login/loginCard";

function aboutShoe() {
  const rating = 4;
  const navigate = useNavigate();

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
    <div className=" absolute  justify-center items-center align-middle">
      <div className=" inline-flex items-center justify-between w-full bg-white h-14 lg:px-26 xl:px-26 sm:px-12 md:px-20 px-12">
        <div className="inline-flex">
          <h1 className="text-xl font-extrabold text-custom-pink sm:text-2xl md:text-3xl lg:text-4xl">
            Smile{" "}
            <span className="text-xl font-extrabold text-black sm:text-2xl md:text-3xl lg:text-4xl font-ReggaeOne">
              G
            </span>
            irl
          </h1>
        </div>

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
      </div>
      <div className="px-14 py-2">
        <div className="flex text-gray-500 font-poppins font-light items-center ">
          <button
            className="bg-white rounded-full hover:bg-black-600 border-2 flex justify-center items-center w-8 h-8 mr-2"
            onClick={() => navigate(-1)}
          >
            <i className="fa-solid fa-arrow-left"></i>
          </button>
          <h1>Shop/About Footwear/ Basic Braided Sliders</h1>
        </div>
        <div className="bg-gray-50 mt-2 grid mb-5 py-10 rounded-lg">
          <div className=" grid grid-flow-col gap-2 h-[500px]  justify-start ml-40">
            {/* images section */}
            <div className="grid grid-flow-col justify-start">
              {/* 3 images */}
              <div className="grid grid-flow-row gap-[10px] justify-end mr-[40px]">
                <div className="">
                  <img
                    src={Image}
                    alt="shoe"
                    loading="lazy"
                    className="object-cover h-[150px]"
                  />
                </div>
                <div className="">
                  <img
                    src={Image}
                    alt="shoe"
                    loading="lazy"
                    className="object-cover h-[150px]"
                  />
                </div>
                <div className="">
                  <img
                    src={Image}
                    alt="shoe"
                    loading="lazy"
                    className="object-cover h-[150px]"
                  />
                </div>
              </div>
              {/* 1 image */}
              <div className="">
                <img
                  src={Image}
                  alt="shoe"
                  loading="lazy"
                  className="object-cover h-[490px] "
                />
              </div>
            </div>

            {/* description section */}
            <div className="justify-self-start font-poppins ml-[40px]">
              {/* name */}
              <h1 className="text-[20px] font-medium text-black">
                Basic Braided Sliders
              </h1>

              {/* price */}
              <h1 className="text-[20px] font-medium text-black">
                Rs.6,800.00
              </h1>

              {/* rating */}
              <div className="flex  items-center mb-4">
                {[...Array(5)].map((_, index) => (
                  <span
                    key={index}
                    className={`text-custom-pink text-[25px] ${
                      index < rating ? "fill" : ""
                    }`}
                  >
                    {index < rating ? "★" : "☆"}
                  </span>
                ))}
              </div>
              {/* colors */}
              <div className="mb-4 grid ">
                <h1 className="text-[20px] font-medium text-black mb-2">
                  Colors :
                </h1>
                <div className="flex gap-2">
                  <button className="w-[30px] h-[30px]  bg-black rounded"></button>
                  <button className="w-[30px] h-[30px]  bg-white rounded border-[1px] border-black"></button>
                  <button className="w-[30px] h-[30px]  bg-red-500 rounded"></button>
                  <button className="w-[30px] h-[30px]  bg-yellow-200 rounded"></button>
                </div>
              </div>

              {/* sizes */}
              <div className="mb-6 grid ">
                <h1 className="text-[20px] font-medium text-black mb-2 font-poppins">
                  Sizes :
                </h1>
                <div className="flex gap-2">
                  <button className="w-[30px] h-[30px]  bg-black rounded text-white">
                    3
                  </button>
                  <button className="w-[30px] h-[30px]  bg-white rounded border-[1px] border-black">
                    4
                  </button>
                  <button className="w-[30px] h-[30px]  bg-white rounded border-[1px] border-black">
                    5
                  </button>
                  <button className="w-[30px] h-[30px]  bg-white rounded border-[1px] border-black">
                    6
                  </button>
                  <button className="w-[30px] h-[30px]  bg-white rounded border-[1px] border-black">
                    7
                  </button>
                  <button className="w-[30px] h-[30px]   bg-white rounded border-[1px] border-black">
                    8
                  </button>
                  <button className="w-[30px] h-[30px]   bg-white rounded border-[1px] border-black">
                    9
                  </button>
                </div>
              </div>
              {/* buttons */}
              <div className="flex gap-5 mb-4">
                <button className="text-white bg-custom-pink  py-2 w-40">
                  ADD TO CART
                </button>
                <button className="text-white bg-black  py-2  w-40">
                  BUY NOW
                </button>
              </div>

              <div>
                <h1 className="text-[20px] font-medium text-black">
                  Do you have a question?
                </h1>
                <h1 className="text-[16px] font-medium text-gray-600 mb-2">
                  Contact our customer service.
                </h1>
                <div className="grid grid-flow-col gap-5  justify-start">
                  <div className="flex flex-col items-center justify-start">
                    <FaWhatsapp className="w-10 h-10" />
                    <h1>WhatsApp</h1>
                    <h1>+91 123456789</h1>
                  </div>
                  <div className="flex flex-col items-center justify-start">
                    <FaEnvelope className="w-10 h-10" />
                    <h1>Email</h1>
                    <h1>smilegirl@gmail.com</h1>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="mt-10 font-poppins">
            <div className="mb-4 bg-gray-300 border-y-2 border-black py-2">
              <h1 className="text-[20px] font-medium text-black ml-6">
                More Details
              </h1>
            </div>
            <div className="grid grid-flow-col px-6 py-2 ">
              <div>
                <h1 className="text-[20px] font-medium text-black underline underline-offset-4">
                  About Product :
                </h1>
                <div className="mt-4 ml-2">
                  <h1 className="text-[16px] font-medium text-gray-600 ">
                    Colors : Black ,Maroon
                  </h1>
                  <h1 className="text-[16px] font-medium text-gray-600 ">
                    Gender : Ladies
                  </h1>
                  <h1 className="text-[16px] font-medium text-gray-600 ">
                    Material : Synthetic
                  </h1>
                  <h1 className="text-[16px] font-medium text-gray-600 ">
                    Type of Wear : Flatforms
                  </h1>
                </div>
              </div>
              <div>
                <h1 className="text-[20px] font-medium text-black underline underline-offset-4">
                  Delivery Fee :
                </h1>
                <div className="mt-4 ml-2">
                  <h1 className="text-[16px] font-medium text-gray-600 ">
                    - Delivery fees vary based on your location and order total.
                  </h1>
                  <h1 className="text-[16px] font-medium text-gray-600 ">
                    - Enjoy free delivery on orders over Rs 10,000
                  </h1>
                </div>
              </div>
              <div>
                <h1 className="text-[20px] font-medium text-black underline underline-offset-4">
                  Look After Product :
                </h1>
                <div className="mt-4 ml-2">
                  <h1 className="text-[16px] font-medium text-gray-600 ">
                    Just here for the care instructions?
                  </h1>
                  <h1 className="text-[16px] font-medium text-gray-600 mt-6">
                    Yeah, we know it. <br />
                    Use a toothbrush or soft shoe brush to remove dirt.
                  </h1>
                </div>
              </div>
            </div>
          </div>
          <div className="mt-10 font-poppins">
            <div className="mb-4 bg-gray-300 border-y-2 border-black py-2">
              <h1 className="text-[20px] font-medium text-black ml-6">
                Reviews
              </h1>
            </div>
            <div className="grid grid-flow-col px-6 py-2 height-auto"></div>
          </div>
        </div>
      </div>
      <Footer />
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

export default aboutShoe;
