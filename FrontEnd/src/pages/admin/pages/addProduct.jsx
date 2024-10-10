/* eslint-disable no-unused-vars */
import React from "react";
import Layout from "../../../components/layout/layout";
import Image from "../../../assets/1.jpg";
import { IoIosCheckmarkCircle } from "react-icons/io";
import { CiImageOn } from "react-icons/ci";

function addProduct() {
  const sizes = [
    { size: 3 },
    { size: 4 },
    { size: 5 },
    { size: 6 },
    { size: 7 },
    { size: 8 },
    { size: 9 },
  ];

  return (
    <Layout>
      <div className="py-[20px] px-[80px]  bg-gray-100">
        <div>
          {" "}
          <h1 className="text-[18px] font-semibold text-black font-poppins">
            Add Product
          </h1>
        </div>
        <div className="grid bg-white rounded-xl lg:grid-flow-col py-[20px] px-[40px] gap-10 md:grid-flow-row">
          <div className="">
            <div className="mb-6">
              <label className="block mb-2 text-sm font-medium text-black  font-poppins">
                Product Name :
              </label>
              <input
                type="text"
                id="product_name"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
                placeholder="Enter product name"
                required
              />
            </div>
            <div className="grid grid-flow-col gap-4">
              <div className="mb-6">
                <label className="block mb-2 text-sm font-medium text-black  font-poppins">
                  SKU :
                </label>
                <input
                  type="text"
                  id="sku"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
                  placeholder="SKU00001"
                  required
                  disabled
                />
              </div>
              <div className="mb-6">
                <label className="block mb-2 text-sm font-medium text-black  font-poppins">
                  Rental Price :
                </label>
                <input
                  type="text"
                  id="rental_price"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
                  placeholder="Enter rental price"
                  required
                />
              </div>
            </div>
            <div className="grid grid-cols-2  gap-4">
              <div className="mb-6 w-full ">
                <label className="block mb-2 text-sm font-medium text-black font-poppins">
                  Colors :
                </label>
                <select
                  id="options"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                >
                  <option value="default">Select Color</option>
                  <option value="option1">Black</option>
                  <option value="option2">Marron</option>
                  <option value="option3">Cream</option>
                </select>
              </div>
              <div className="mb-6 w-full ">
                <label className="block mb-2 text-sm font-medium text-black font-poppins">
                  Material :
                </label>
                <select
                  id="options"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
                >
                  <option value="default">Select Material</option>
                  <option value="option1">Leather</option>
                  <option value="option2">synthetic</option>
                  <option value="option3">canvas</option>
                  <option value="option4">velvet</option>
                </select>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="mb-6 w-full ">
                <label className="block mb-2 text-sm font-medium text-black font-poppins">
                  Select Style :
                </label>
                <select
                  id="options"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
                >
                  <option value="default">Select your Style</option>
                  <option value="option1">Flat</option>
                  <option value="option2">Low Heal</option>
                  <option value="option3">High Heal</option>
                </select>
              </div>
              <div className="mb-6 w-full ">
                <label className="block mb-2 text-sm font-medium text-black font-poppins">
                  Select Style:
                </label>
                <select
                  id="options"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
                >
                  <option value="default">Select your Style</option>
                  <option value="option1">Flat</option>
                  <option value="option2">Low Heal</option>
                  <option value="option3">High Heal</option>
                </select>
              </div>
            </div>
            <div className=" font-poppins">
              <div className="mb-6 w-full">
                <label className="block mb-2 text-sm font-medium text-black font-poppins">
                  Stock Quantity :
                </label>
                <div className="grid grid-cols-2 gap-2">
                  {sizes.map((item, index) => (
                    <div
                      key={index}
                      className="flex gap-2 items-center w-full "
                    >
                      <div className="bg-black text-white px-2 py-2.5 rounded-lg text-[14px]">
                        Size {item.size}
                      </div>
                      <div>
                        <input
                          type="text"
                          id={`rental_price_${item.size}`}
                          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5"
                          required
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
          <div className="grid grid-flow-row h-[300px]">
            <label className="block mb-2 text-sm font-medium text-black font-poppins">
              Product Gallery :
            </label>
            <div className="grid grid-flow-col ">
              <img
                src={Image}
                alt="shoe"
                loading="lazy"
                className="object-cover h-[300px] rounded-md "
              />
              <div className="grid grid-flow-row">
                <div className="flex  h-[50px] items-center">
                  <img
                    src={Image}
                    alt="shoe"
                    loading="lazy"
                    className="object-cover h-[50px] rounded-md "
                  />
                  <div className="text-[13px] border-b-4 border-custom-pink  w-full m-3 ">
                    thumbnail :thumbnail.jpg
                  </div>
                  <IoIosCheckmarkCircle className="text-custom-pink text-[30px]" />
                </div>
                <div className="flex  h-[50px] items-center">
                  <img
                    src={Image}
                    alt="shoe"
                    loading="lazy"
                    className="object-cover h-[50px] rounded-md "
                  />
                  <div className="text-[13px] border-b-4 border-custom-pink  w-full m-3 ">
                    thumbnail :thumbnail.jpg
                  </div>
                  <IoIosCheckmarkCircle className="text-custom-pink text-[30px]" />
                </div>
                <div className="flex  h-[50px] items-center">
                  <img
                    src={Image}
                    alt="shoe"
                    loading="lazy"
                    className="object-cover h-[50px] rounded-md "
                  />
                  <div className="text-[13px] border-b-4 border-custom-pink  w-full m-3 ">
                    thumbnail :thumbnail.jpg
                  </div>
                  <IoIosCheckmarkCircle className="text-custom-pink text-[30px]" />
                </div>
                <div className="flex  h-[50px] items-center">
                  <img
                    src={Image}
                    alt="shoe"
                    loading="lazy"
                    className="object-cover h-[50px] rounded-md "
                  />
                  <div className="text-[13px] border-b-4 border-custom-pink  w-full m-3 ">
                    thumbnail :thumbnail.jpg
                  </div>
                  <IoIosCheckmarkCircle className="text-custom-pink text-[30px]" />
                </div>
              </div>
            </div>
            <div className="grid grid-cols-2 mt-5 gap-4">
              <div className="h-[150px] bg-gray-50 rounded-md outline-dotted outline-gray-500 outline-1 w-[250px] flex items-center justify-center">
                <div className="grid grid-rows-3 text-center items-center justify-center">
                  <div className="flex items-center justify-center mb-1">
                    <CiImageOn className="text-sky-500 text-[30px] text-center " />
                  </div>
                  <p className="text-gray-800 text-[12px] mb-1">
                    Drop your imager here, or browse <br />
                    Jpeg, png are allowed
                  </p>
                  <div className="text-gray-800 text-[12px] bg-sky-500 px-1 py-1">
                    Upload Image
                  </div>
                </div>
              </div>

              <div className="mb-6 w-full ">
                <label className="block mb-2 text-sm font-medium text-black font-poppins ">
                  Description :
                </label>
                <textarea
                  id="message"
                  rows="5"
                  className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 "
                  placeholder="Leave a comment..."
                ></textarea>
              </div>
            </div>
            <div className="flex gap-4 justify-end items-end mt-4">
              <button
                type="submit"
                className="
                w-[200px] text-white bg-custom-pink hover:bg-pink-400 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm  px-5 py-2.5 text-center"
              >
                Add Product
              </button>
              <button
                className="w-[200px] text-white bg-gray-700 hover:bg-gray-400 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm  px-5 py-2.5 text-center"
                type="button"
              >
                Cancel
              </button>

            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default addProduct;
