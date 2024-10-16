/* eslint-disable no-unused-vars */
import React from "react";
import Layout from "../../../components/layout/layout";
import { LuPackage2 } from "react-icons/lu";
import GraphChart from "../components/graphchart/graphChart";
import { FiPlusCircle } from "react-icons/fi";

function dashboard() {
  return (
    <Layout>
      <div className="xl:px-26 lg:px-26 xl:px-26 sm:px-8 md:px-20 px-8 xl:py-8 lg:py-8 md:py-8 sm:py-6 py-6 bg-gray-100 w-screen">
        <div className="flex justify-between">
          <h1 className="text-[11px] sm:text-[12px] md:text-[15px] lg:text-[16px] font-semibold text-black font-poppins">Dashboard</h1>
          <button className="bg-black hover:bg-black-600 text-white text-hite py-1 px-6 justify-center text-[16px]  font-Poppins  font-semibold">
            <div className=" flex items-center text-[11px] sm:text-[12px] md:text-[15px] lg:text-[16px]">
            <FiPlusCircle className="mr-2"/>
            ADD PRODUCT
            </div>
          
          </button>
        </div>
        <div className="grid xl:grid-flow-col lg:grid-flow-col md:grid-flow-row sm:grid-flow-row grid-flow-row h-[470px] gap-[10px] mt-5 font-poppins ">
          <div className="bg-white rounded-xl  ">
            <h1 className="text-[11px] sm:text-[12px] md:text-[15px] lg:text-[16px] font-semibold text-gray-800 p-5 ml-[60px]">
            Sale Orders Graph
            </h1>
            <GraphChart className="xl:h-[400px] lg:h-[400px] md:h-[300px] sm:h-[300px] h-[300px] w-full " />
          </div>
          <div className="grid xl:grid-flow-row lg:grid-flow-row md:grid-flow-col sm:grid-flow-col grid-flow-col  gap-[10px]  ">
            <div className="bg-white  rounded-xl xl:py-5 lg:py-4 md:py-3 sm:py-2 py-1 xl:px-5 lg:px-5 md:px-5 sm:px-4 px-3">
              <h1 className="text-[11px] sm:text-[12px] md:text-[15px] lg:text-[16px] font-semibold text-gray-800">
                Total Orders
              </h1>
              <div className="flex tems-center mt-4">
                <div className="bg-custom-pink text-white xl:w-[50px] lg:w-[50px] md:w-[40px] sm:w-[40px] w-[40px] xl:h-[50px] lg:h-[50px] md:h-[40px] sm:h-[40px] h-[40px] rounded-lg flex justify-center items-center">
                  <LuPackage2 className="xl:w-[40px] lg:w-[40px] md:w-[35px] sm:w-[30px] w-[30px] xl:h-[40px] lg:h-[40px] md:h-[35px] sm:h-[30px] h-[30px] " />
                </div>
                <h1 className="xl:text-[30px] lg:text-[30px] md:text-[25px] sm:text-[20px] text-[20px] font-bold text-black xl:ml-10 lg:ml-10 md:ml-8 sm:ml-6 ml-4">
                  1000
                </h1>
              </div>
            </div>
            <div className="bg-white  rounded-xl  xl:py-5 lg:py-4 md:py-3 sm:py-2 py-1 xl:px-5 lg:px-5 md:px-5 sm:px-4 px-3">
              <h1 className="text-[11px] sm:text-[12px] md:text-[15px] lg:text-[16px] font-semibold text-gray-800">
                Shipped Orders
              </h1>
              <div className="flex tems-center mt-4">
                <div className="bg-custom-pink text-white xl:w-[50px] lg:w-[50px] md:w-[40px] sm:w-[40px] w-[40px] xl:h-[50px] lg:h-[50px] md:h-[40px] sm:h-[40px] h-[40px] rounded-lg flex justify-center items-center">
                  <LuPackage2 className="xl:w-[40px] lg:w-[40px] md:w-[35px] sm:w-[30px] w-[30px] xl:h-[40px] lg:h-[40px] md:h-[35px] sm:h-[30px] h-[30px] " />
                </div>
                <h1 className="xl:text-[30px] lg:text-[30px] md:text-[25px] sm:text-[20px] text-[20px] font-bold text-black xl:ml-10 lg:ml-10 md:ml-8 sm:ml-6 ml-4">
                  1000
                </h1>
              </div>
            </div>
            <div className="bg-white  rounded-xl xl:py-5 lg:py-4 md:py-3 sm:py-2 py-1 xl:px-5 lg:px-5 md:px-5 sm:px-4 px-3">
              <h1 className="text-[11px] sm:text-[12px] md:text-[15px] lg:text-[16px] font-semibold text-gray-800">
                Total Stock
              </h1>
              <div className="flex tems-center mt-4">
                <div className="bg-custom-pink text-white xl:w-[50px] lg:w-[50px] md:w-[40px] sm:w-[40px] w-[40px] xl:h-[50px] lg:h-[50px] md:h-[40px] sm:h-[40px] h-[40px]rounded-lg flex justify-center items-center">
                  <LuPackage2 className="xl:w-[40px] lg:w-[40px] md:w-[35px] sm:w-[30px] w-[30px] xl:h-[40px] lg:h-[40px] md:h-[35px] sm:h-[30px] h-[30px] " />
                </div>
                <h1 className="xl:text-[30px] lg:text-[30px] md:text-[25px] sm:text-[20px] text-[20px] font-bold text-black xl:ml-10 lg:ml-10 md:ml-8 sm:ml-6 ml-4">
                  1000
                </h1>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default dashboard;
