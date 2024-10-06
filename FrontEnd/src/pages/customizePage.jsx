/* eslint-disable no-unused-vars */
import React from "react";
import Layout from "../components/layout/layout";

function customizePage() {
  return (
    <Layout>
      <div className="grid grid-cols-1 items-center justify-center text-center pt-10 pb-10 sm:px-10 md:px-10">
        <div>
          <h1 className="text-xl font-extrabold text-custom-pink sm:text-2xl md:text-3xl lg:text-4xl font-poppins">
            Smile{" "}
            <span className="text-xl font-extrabold text-black sm:text-2xl md:text-3xl lg:text-4xl font-ReggaeOne">
              G
            </span>
            irl{" "}
            <span className="text-xl font-extrabold text-black sm:text-2xl md:text-3xl lg:text-4xl font-poppins">
              BY YOU!
            </span>
          </h1>
          <h1 className="text-[11px] sm:text-[12px] md:text-[15px] lg:text-[16px] font-Poppins font-light opacity-60 ">
            The creativity is still in your hands. Make something they’ve never
            seen before by creating your own iconic Heels or Flats with Smile
            Girl By You.
          </h1>
        </div>
      </div>
      <div className="grid grid-cols-1 items-center justify-center   xl:px-52 lg:px-52 md:px-30 sm:px-20 px-10 mb-10">
        <div className="mb-6">
          <label className="block mb-2 text-sm font-medium text-black  font-poppins">
            First name :
          </label>
          <input
            type="text"
            id="first_name"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
            placeholder="Enter Your Name"
            required
          />
        </div>
        <div className="mb-6">
          <label className="block mb-2 text-sm font-medium text-black  font-poppins">
            Contact Number :
          </label>
          <input
            type="text"
            id="contact_number"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
            placeholder="Enter your Contact Number"
            required
          />
        </div>
        <div className="mb-6 w-full ">
          <label className="block mb-2 text-sm font-medium text-black font-poppins">
            Select Style:
          </label>
          <select
            id="options"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 md:p-3 lg:p-4"
          >
            <option value="default">Select your Style</option>
            <option value="option1">Flat</option>
            <option value="option2">Low Heal</option>
            <option value="option3">High Heal</option>
          </select>
        </div>

        <div className="mb-6 grid grid-cols-2 items-center justify-center gap-6">
          <div>
            <label className="block mb-2 text-sm font-medium text-black font-poppins">
              Color :
            </label>
            <select
              id="options"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 md:p-3 lg:p-4 "
            >
              <option value="default">Select color you want</option>
              <option value="option1">Black</option>
              <option value="option2">Maroon</option>
              <option value="option3">Brown</option>
            </select>
          </div>
          <div>
            <label className="block mb-2 text-sm font-medium text-black font-poppins">
              Size :
            </label>
            <select
              id="options"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 md:p-3 lg:p-4"
            >
              <option value="default">Select size you want</option>
              <option value="option1">3</option>
              <option value="option2">4</option>
              <option value="option3">5</option>
              <option value="option3">6</option>
              <option value="option3">7</option>
              <option value="option3">8</option>
              <option value="option3">9</option>
            </select>
          </div>
        </div>

        <div className="mb-6">
          <label className="block mb-2 text-sm font-medium text-black font-poppins">
            Upload your inspiration :
          </label>
          <label className="block text-sm font-medium text-gray-400 font-poppins">
            If you have a design in mind, you can upload it here in JPG, JPEG,
            or PNG format:
          </label>
          <button className="bg-black hover:bg-gray-700 text-white text-sm rounded-lg font-poppins block px-10 py-2 mt-4">
            Choose File
          </button>
        </div>

        <div className="mb-6">
          <label className="block mb-2 text-sm font-medium text-black font-poppins">
            Message :
          </label>
          <textarea
            id="message"
            rows="4"
            className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 "
            placeholder="Enter Your Message"
          ></textarea>
        </div>

        <div className="mb-6 flex justify-end">
          <button className="bg-gray-500 hover:bg-gray-700 text-white text-sm rounded-lg font-poppins block px-10 py-2 mr-2">
            Cancel
          </button>
          <button className="bg-black hover:bg-gray-700 text-white text-sm rounded-lg font-poppins block px-10 py-2 ">
            Submit
          </button>
        </div>
      </div>
    </Layout>
  );
}

export default customizePage;
