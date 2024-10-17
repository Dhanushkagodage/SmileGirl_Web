/* eslint-disable no-unused-vars */
import React from "react";
import Layout from "../../../components/layout/layout";
import Shoecard from "../../../components/shoecard/shoecard";
import { FiPlusCircle } from "react-icons/fi";
import { useNavigate } from 'react-router-dom';

function allProducts() {
  const shoecardsArray = Array(12).fill(0);
  const navigate = useNavigate();
  return (
    <Layout>
      <div className=" bg-gray-100 xl:pb-14 lg:pb-14 md:pb-10 sm:pb-6 pb-6 xl:px-26 lg:px-26 xl:px-26 sm:px-8 md:px-20 px-8 xl:py-8 lg:py-8 md:py-8 sm:py-6 py-6">
      <div className="flex justify-between items-center">
          <h1 className="text-[11px] sm:text-[12px] md:text-[15px] lg:text-[16px] font-semibold text-black font-poppins">All Products</h1>
          <button className="bg-black hover:bg-black-600 text-white text-hite py-1 xl:px-4 lg:px-4 md:px-4 sm:px-2 px-2 justify-center   font-Poppins  font-semibold"
          onClick={() => navigate('/addproduct')}>
            <div className=" flex items-center text-[10px] sm:text-[11px] md:text-[15px] lg:text-[16px]">
            <FiPlusCircle className="mr-2"/>
            ADD PRODUCT
            </div>
          </button>
        </div> 
        <div className=" w-full grid bg-white rounded-xl  md:py-[20px] py-[10px] sm:py[10px] md:px-[40px] sm:px[10px]  px-[10px] gap-10  xl:grid-flow-col lg:grid-flow-row md:grid-flow-row sm:grid-flow-row grid-flow-row text-[12px] sm:text-[12px] md:text-[12px] lg:text-[14px] xl:text-[14px font-poppins mt-4">
          <div className=" grid xl:grid-cols-4 lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-3 grid-cols-3  my-10 lg:gap-10 xl:gap-10 sm:gap-4 md:gap-6 gap-4">
            {shoecardsArray.map((_, index) => (
              <div key={index}>
                <Shoecard />
              </div>
            ))}
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default allProducts;
