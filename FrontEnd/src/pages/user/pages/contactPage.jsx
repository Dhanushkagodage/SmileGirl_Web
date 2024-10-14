/* eslint-disable no-unused-vars */
import React from "react";
import Layout from "../../../components/layout/layout";

function contactPage() {
  return (
    <Layout>
      <div className="xl:mt-5 lg:mt-5 md:mt-3 sm:mt-2 mt-2 lg:px-26 xl:px-26 sm:px-8 md:px-20 px-8 ">
      <div className="grid grid-cols-1 items-center justify-center text-center ">
        <div>
          <h1 className="text-xl font-extrabold text-blackk sm:text-2xl md:text-3xl lg:text-4xl font-poppins">
            Just say hello… <br />
            We are always here to help.
          </h1>
          <h1 className="text-[11px] sm:text-[12px] md:text-[15px] lg:text-[16px] font-Poppins font-light opacity-60 pt-2">
            We’re here to help & answer any question you might have. So we look
            forward to hearing from you. Please don’t hesitate to contact us
            anytime. We are always open to discuss.
          </h1>
        </div>
      </div>
      <div className="grid xl:grid-cols-2 lg:grid-cols-2 md:grid-cols-1 items-start justify-center   xl:px-30 lg:px-30 md:px-20 sm:px-20 px-10  mt-7  sm:grid-cols-1 text-[12px] sm:text-[12px] md:text-[12px] lg:text-[14px] xl:text-[14px]">
        <div className="grid grid-cols-1">
          <div className="mb-8">
            <label className="block mb-2 font-medium text-black  font-poppins">
              Address :
            </label>
            <h1 className="block mb-2 font-light text-gray-500  font-poppins">
              #146/2, Kandy Road, Ihala Biyanwila, Kadawatha.
            </h1>
          </div>
          <div className="mb-8">
            <label className="block mb-2  font-medium text-black  font-poppins">
              Email :
            </label>
            <h1 className="block mb-2  font-light text-gray-500  font-poppins">
              smilegril@gmail.com
            </h1>
          </div>
          <div className="mb-8">
            <label className="block mb-2  font-medium text-black  font-poppins">
              Phone Number :
            </label>
            <h1 className="block mb-2  font-light text-gray-500  font-poppins">
              077 123 4567
            </h1>
          </div>
          <div className="mb-8">
            <label className="block mb-2  font-medium text-black  font-poppins">
              Facebook :
            </label>
            <h1 className="block mb-2 font-light text-gray-500  font-poppins">
              @smilegirl
            </h1>
          </div>
        </div>
        <div className="grid grid-cols-1">
          <div className="mb-6">
            <label className="block mb-2  font-medium text-black  font-poppins">
              Your Name:
            </label>
            <input
              type="text"
              id="name"
              className="bg-gray-50 border border-gray-300 text-gray-900  rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full xl:p-2 lg:p-2 md:p-2 sm:p-1.5 p-1.5  "
              placeholder="Enter your Name"
              required
            />
          </div>
          <div className="mb-6">
            <label className="block mb-2  font-medium text-black  font-poppins">
              Your Email :
            </label>
            <input
              type="text"
              id="email"
              className="bg-gray-50 border border-gray-300 text-gray-900  rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full xl:p-2 lg:p-2 md:p-2 sm:p-1.5 p-1.5  "
              placeholder="Enter your Email"
              required
            />
          </div>
          <div className="mb-6">
            <label className="block mb-2 text-sm font-medium text-black  font-poppins">
              Contact Number :
            </label>
            <input
              type="text"
              id="phone"
              className="bg-gray-50 border border-gray-300 text-gray-900  rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full xl:p-2 lg:p-2 md:p-2 sm:p-1.5 p-1.5  "
              placeholder="Enter your Phone Number"
              required
            />
          </div>
          <div className="mb-6">
            <label className="block mb-2  font-medium text-black  font-poppins">
              Subject :
            </label>
            <input
              type="text"
              id="subject"
              className="bg-gray-50 border border-gray-300 text-gray-900  rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full xl:p-2 lg:p-2 md:p-2 sm:p-1.5 p-1.5 "
              placeholder="Enter your Subject"
              required
            />
          </div>
          <div className="mb-6">
            <label className="block mb-2  font-medium text-black  font-poppins">
              Message :
            </label>
            <textarea
              id="message"
              className="bg-gray-50 border border-gray-300 text-gray-900  rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  "
              placeholder="Enter your Message"
              required
            ></textarea>
          </div>
          <div className=" flex justify-end">
            <button className="bg-gray-500 hover:bg-gray-700 text-white  rounded-lg font-poppins block px-6 py-2 mr-2 xl:px-10 lg:px-10 md:px-8 sm:px-6 ">
              Cancel
            </button>
            <button className="bg-black hover:bg-gray-700 text-white  rounded-lg font-poppins block px-6 py-2 mr-2 xl:px-10 lg:px-10 md:px-8 sm:px-6 ">
              Submit
            </button>
          </div>
        </div>
      </div>
      </div>
    </Layout>
  );
}

export default contactPage;
