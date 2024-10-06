// eslint-disable-next-line no-unused-vars
import React from "react";

// eslint-disable-next-line react/prop-types
function SignupCard({ isOpen, toggleSignupCard }) {
  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 bg-gray-900 bg-opacity-50 flex items-center justify-center z-50"
      onClick={toggleSignupCard}
    >
      <div
        className="bg-white px-20 py-8 pb-8 rounded-lg shadow-lg   relative w-[40%] h-[60%]"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex justify-center">
          <h2 className="text-2xl font-semibold mb-4 text-center font-poppins">
            Sign up
          </h2>
          <i
            className="fas fa-times text-2xl absolute top-4 right-4 cursor-pointer"
            onClick={toggleSignupCard}
          ></i>
        </div>
        <form>
          <div className="mb-4">
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700 mb-1 font-poppins"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              placeholder="Enter your email"
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500 font-poppins"
              required
            />
          </div>
          <div className="mb-6">
            <label
              htmlFor="password"
              className="block text-sm font-medium text-gray-700 mb-1 font-poppins"
            >
              Password
            </label>
            <input
              type="password"
              id="password"
              placeholder="Enter your password"
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500 font-poppins"
              required
            />
          </div>
          <button
            type="submit"
            className="w-full bg-custom-pink text-white py-2 rounded-md hover:bg-pink-500 transition duration-200 font-poppins"
          >
            Sign Up
          </button>
        </form>
        <p className="text-center mt-4 font-poppins">
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
