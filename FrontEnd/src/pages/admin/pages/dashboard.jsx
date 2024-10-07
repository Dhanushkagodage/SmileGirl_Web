/* eslint-disable no-unused-vars */
import React from "react";
import Layout from "../../../components/layout/layout";
import { LuPackage2 } from "react-icons/lu";
import GraphChart from "../components/graphchart/graphChart";
import { FiPlusCircle } from "react-icons/fi";

function dashboard() {
  return (
    <Layout>
      <div className="py-[20px] px-[80px] bg-gray-100">
        <div className="flex justify-between">
          <h1 className="text-[18px] font-semibold text-black font-poppins">Dashboard</h1>
          <button className="bg-black hover:bg-black-600 text-white text-hite py-1 px-6 justify-center text-[16px]  font-Poppins  font-semibold">
            <div className="flex items-center">
            <FiPlusCircle className="mr-2"/>
            ADD PRODUCT
            </div>
          
          </button>
        </div>
        <div className="grid grid-flow-col h-[470px] gap-[10px] mt-5 w-full font-poppins">
          <div className="bg-white rounded-xl  ">
            <h1 className="text-[15px] font-semibold text-gray-800 p-5 ml-[60px]">
            Sale Orders Graph
            </h1>
            <GraphChart />
          </div>
          <div className="grid grid-flow-row gap-[10px]  ">
            <div className="bg-white h-[150px] rounded-xl w-[300px] py-5 px-5">
              <h1 className="text-[15px] font-semibold text-gray-800">
                Total Orders
              </h1>
              <div className="flex tems-center mt-4">
                <div className="bg-custom-pink text-white w-[50px] h-[50px] rounded-lg flex justify-center items-center">
                  <LuPackage2 className="w-[40px] h-[40px] " />
                </div>
                <h1 className="text-[30px] font-bold text-black ml-10">
                  1000
                </h1>
              </div>
            </div>
            <div className="bg-white h-[150px] rounded-xl w-[300px] py-5 px-5">
              <h1 className="text-[15px] font-semibold text-gray-800">
                Shipped Orders
              </h1>
              <div className="flex tems-center mt-4">
                <div className="bg-custom-pink text-white w-[50px] h-[50px] rounded-lg flex justify-center items-center">
                  <LuPackage2 className="w-[40px] h-[40px] " />
                </div>
                <h1 className="text-[30px] font-bold text-black ml-10">
                  1000
                </h1>
              </div>
            </div>
            <div className="bg-white h-[150px] rounded-xl w-[300px] py-5 px-5">
              <h1 className="text-[15px] font-semibold text-gray-800">
                Total Stock
              </h1>
              <div className="flex tems-center mt-4">
                <div className="bg-custom-pink text-white w-[50px] h-[50px] rounded-lg flex justify-center items-center">
                  <LuPackage2 className="w-[40px] h-[40px] " />
                </div>
                <h1 className="text-[30px] font-bold text-black ml-10">
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
