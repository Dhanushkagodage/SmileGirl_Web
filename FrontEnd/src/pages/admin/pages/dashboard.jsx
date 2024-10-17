/* eslint-disable no-unused-vars */
import React from "react";
import Layout from "../../../components/layout/layout";
import { LuPackage2 } from "react-icons/lu";
import GraphChart from "../components/graphchart/graphChart";
import { FiPlusCircle } from "react-icons/fi";
import { useNavigate } from 'react-router-dom';
import ProfilePic from "../../../assets/profile.jpg";

function dashboard() {
  const navigate = useNavigate();

  const orders = [
    {
      product: "Sneakers",
      orderId: "ORD12345",
      date: "2024-10-15",
      customerName: "Alice Smith",
      status: "Delivered",
      amount: "$80.00",
    },
    {
      product: "Heels",
      orderId: "ORD12346",
      date: "2024-10-16",
      customerName: "Beth Johnson",
      status: "Canceled",
      amount: "$95.00",
    },
    {
      product: "Flats",
      orderId: "ORD12347",
      date: "2024-10-17",
      customerName: "Cathy Lee",
      status: "Processing",
      amount: "$45.00",
    },
    {
      product: "Flats",
      orderId: "ORD12347",
      date: "2024-10-17",
      customerName: "Cathy Lee",
      status: "Processing",
      amount: "$45.00",
    },
    {
      product: "Flats",
      orderId: "ORD12347",
      date: "2024-10-17",
      customerName: "Cathy Lee",
      status: "Processing",
      amount: "$45.00",
    },
  ];

  return (
    <Layout>
      <div className="max-h-full xl:px-26 lg:px-26 xl:px-26 sm:px-8 md:px-20 px-8 xl:py-8 lg:py-8 md:py-8 sm:py-6 py-6 bg-gray-100 w-screen  text-[11px] sm:text-[12px] md:text-[15px] lg:text-[16px] xl:pb-14 lg:pb-14 md:pb-10 sm:pb-6 pb-6 ">
        <div className="flex justify-between items-center">
          <h1 className="text-[11px] sm:text-[12px] md:text-[15px] lg:text-[16px] font-semibold text-black font-poppins">Dashboard</h1>
          <button className="bg-black hover:bg-black-600 text-white text-hite py-1 xl:px-4 lg:px-4 md:px-4 sm:px-2 px-2 justify-center   font-Poppins  font-semibold"
          onClick={() => navigate('/addproduct')}>
            <div className=" flex items-center text-[10px] sm:text-[11px] md:text-[15px] lg:text-[16px]">
            <FiPlusCircle className="mr-2"/>
            ADD PRODUCT
            </div>
          </button>
        </div>  
        <div className="grid xl:grid-flow-col lg:grid-flow-col md:grid-flow-row sm:grid-flow-row grid-flow-row gap-[10px] mt-4 font-poppins ">
          <div className="bg-white rounded-xl  ">
            <h1 className="text-[11px] sm:text-[12px] md:text-[15px] lg:text-[16px] font-semibold text-gray-800 p-5 ml-[60px]">
            Sale Orders Graph
            </h1>
            <GraphChart className="xl:h-[400px] lg:h-[400px] md:h-[300px] sm:h-[300px] h-[300px] w-full " />
          </div>
          <div className="grid xl:grid-flow-row lg:grid-flow-row md:grid-flow-col sm:grid-flow-col xs:grid-flow-col grid-flow-row  gap-[10px] ">
            <div className="bg-white  rounded-xl xl:py-5 lg:py-4 md:py-3 sm:py-2 py-1 xl:px-5 lg:px-5 md:px-5 sm:px-4 px-3">
              <h1 className="text-[11px] sm:text-[12px] md:text-[15px] lg:text-[16px] font-semibold text-gray-800">
                Total Orders
              </h1>
              <div className="flex items-center mt-4">
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
              <div className="flex items-center mt-4">
                <div className="bg-custom-pink text-white xl:w-[50px] lg:w-[50px] md:w-[40px] sm:w-[40px] w-[40px] xl:h-[50px] lg:h-[50px] md:h-[40px] sm:h-[40px] h-[40px] rounded-lg flex justify-center items-center">
                  <LuPackage2 className="xl:w-[40px] lg:w-[40px] md:w-[35px] sm:w-[30px] w-[30px] xl:h-[40px] lg:h-[40px] md:h-[35px] sm:h-[30px] h-[30px] " />
                </div>
                <h1 className="xl:text-[30px] lg:text-[30px] md:text-[25px] sm:text-[20px] text-[20px] font-bold text-black xl:ml-10 lg:ml-10 md:ml-8 sm:ml-6 ml-4">
                  1000
                </h1>
              </div>
            </div>
            <div className="bg-white  rounded-xl xl:py-5 lg:py-4 md:py-3 sm:py-3 py-3 xl:px-5 lg:px-5 md:px-5 sm:px-4 px-3 sm:">
              <h1 className="text-[11px] sm:text-[12px] md:text-[15px] lg:text-[16px] font-semibold text-gray-800">
                Total Stock
              </h1>
              <div className="flex items-center mt-4">
                <div className="bg-custom-pink text-white xl:w-[50px] lg:w-[50px] md:w-[40px] sm:w-[40px] w-[40px] xl:h-[50px] lg:h-[50px] md:h-[40px] sm:h-[40px] h-[40px] rounded-lg flex justify-center items-center">
                  <LuPackage2 className="xl:w-[40px] lg:w-[40px] md:w-[35px] sm:w-[30px] w-[30px] xl:h-[40px] lg:h-[40px] md:h-[35px] sm:h-[30px] h-[30px] " />
                </div>
                <h1 className="xl:text-[30px] lg:text-[30px] md:text-[25px] sm:text-[20px] text-[20px] font-bold text-black xl:ml-10 lg:ml-10 md:ml-8 sm:ml-6 ml-4">
                  1000
                </h1>
              </div>
            </div>
          </div>
        </div>
        <div className="w-full bg-white rounded-xl md:py-4 py-2 px-2 mt-4 overflow-x-auto">
          <div className="mb-4">
            <h1 className=" text-[12px] sm:text-[12px] md:text-[12px] lg:text-[14px] font-medium text-black font-poppins ">
              Recent Orders
            </h1>
          </div>

          <table className="w-full text-left  font-poppins rounded-md">
            <thead>
              <tr className="bg-gray-200 text-[10px] sm:text-[10px] md:text-[10px] lg:text-[12px] xl:text-[12px] overflow-x-clip">
                <th className="p-4 hidden md:table-cell lg:table-cell xl:table-cell ">
                  Product
                </th>
                <th className="p-4">Order ID</th>
                <th className="p-4 hidden md:table-cell lg:table-cell xl:table-cell">
                  Date
                </th>
                <th className="p-4">Customer Name</th>
                <th className="p-4">Status</th>
                <th className="p-4 hidden md:table-cell lg:table-cell xl:table-cell">
                  Amount
                </th>
              </tr>
            </thead>
            <tbody className="text-[8px] sm:text-[10px] md:text-[10px] lg:text-[12px] xl:text-[12px]">
              {orders.map((order, index) => (
                <tr key={index} className="border-b">
                  <td className="p-4 hidden md:table-cell lg:table-cell xl:table-cell">
                    {order.product}
                  </td>
                  <td className="p-4">{order.orderId}</td>
                  <td className="p-4 hidden md:table-cell lg:table-cell xl:table-cell">
                    {order.date}
                  </td>
                  <td className="p-4">
                    <div className="flex items-center gap-1">
                      <div className="rounded-full w-[20px] h-[20px] ">
                        <img
                          src={ProfilePic}
                          alt="profile"
                          className="object-cover w-full h-full rounded-full"
                        />
                      </div>
                      {order.customerName}
                    </div>
                  </td>
                  <td className="p-4 ">
                    <div className="flex items-center gap-1">
                      <div
                        className={`w-2 h-2 rounded-full ${
                          order.status === "Delivered"
                            ? "bg-green-500"
                            : order.status === "Canceled"
                            ? "bg-red-500"
                            : order.status === "Processing"
                            ? "bg-blue-500"
                            : "bg-gray-500"
                        }`}
                      ></div>
                      {order.status}
                    </div>
                  </td>
                  <td className="p-4 hidden md:table-cell lg:table-cell xl:table-cell">
                    {order.amount}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </Layout>
  );
}

export default dashboard;
