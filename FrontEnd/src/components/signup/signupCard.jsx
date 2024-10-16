// eslint-disable-next-line no-unused-vars
import React from "react";

// eslint-disable-next-line react/prop-types
function SignupCard({ isOpen, toggleSignupCard }) {
  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 bg-gray-900 bg-opacity-50 flex items-center justify-center z-50 lg:px-26 xl:px-26 sm:px-8 md:px-20 px-8"
      onClick={toggleSignupCard}
    >
      <div
        className="bg-white lg:px-14 xl:px-14 sm:px-8 md:px-6 px-6 py-8 rounded-lg shadow-lg relative xl:w-[40%] lg:w-[40%] md:w-[80%] sm:w-[80%] w-[80%] h-auto"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex justify-center">
          <h2 className="text-[14px] sm:text-[16px] md:text-[18px] lg:text-[20px font-semibold mb-4 text-center font-poppins">
            Sign up
          </h2>
          <i
            className="fas fa-times text-2xl absolute top-4 right-4 cursor-pointer"
            onClick={toggleSignupCard}
          ></i>
        </div>
        <form className="text-[12px] sm:text-[12px] md:text-[12px] lg:text-[14px] xl:text-[14px]">
          <div className="mb-4">
            <label
              htmlFor="email"
              className="block font-medium text-gray-700 mb-1 font-poppins"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              placeholder="Enter your email"
              className="w-full block xl:p-2 lg:p-2 md:p-2 sm:p-1.5 p-1.5 border border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500 font-poppins"
              required
            />
          </div>
          <div className="mb-6">
            <label
              htmlFor="password"
              className="block  font-medium text-gray-700 mb-1 font-poppins"
            >
              Password
            </label>
            <input
              type="password"
              id="password"
              placeholder="Enter your password"
              className="w-full block xl:p-2 lg:p-2 md:p-2 sm:p-1.5 p-1.5 border border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500 font-poppins"
              required
            />
          </div>
          <button
            type="submit"
            className="xl:p-1.5 lg:p-1.5 md:p-1 sm:p-1 p-1.5 text-[12px] sm:text-[14px] md:text-[16px] lg:text-[16px] font-medium w-full bg-custom-pink text-white py-2 rounded-md hover:bg-pink-500 transition duration-200 font-poppins"
          >
            SIGN UP
          </button>
        </form>
        <p className="text-[12px] sm:text-[12px] md:text-[12px] lg:text-[14px] xl:text-[14px] text-center mt-4 font-poppins">
          Already have an account? <br />
          <span className="text-custom-pink cursor-pointer font-poppins font-medium">
            Login
          </span>
        </p>
      </div>
    </div>
  );
}

export default SignupCard;
