/* eslint-disable no-unused-vars */
import React from "react";
import Layout from "../../../components/layout/layout";
import ProfilePic from "../../../assets/profile.jpg";
import { FiPlusCircle } from "react-icons/fi";
import { useNavigate } from 'react-router-dom';

function OrdersList() {
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
      <div className="bg-gray-100 xl:pb-14 lg:pb-14 md:pb-10 sm:pb-6 pb-6 xl:px-26 lg:px-26 xl:px-26 sm:px-8 md:px-20 px-8 xl:py-8 lg:py-8 md:py-8 sm:py-6 py-6">
      <div className="flex justify-between items-center">
          <h1 className="text-[11px] sm:text-[12px] md:text-[15px] lg:text-[16px] font-semibold text-black font-poppins">Orders List</h1>
          <button className="bg-black hover:bg-black-600 text-white text-hite py-1 xl:px-4 lg:px-4 md:px-4 sm:px-2 px-2 justify-center   font-Poppins  font-semibold"
          onClick={() => navigate('/addproduct')}>
            <div className=" flex items-center text-[10px] sm:text-[11px] md:text-[15px] lg:text-[16px]">
            <FiPlusCircle className="mr-2"/>
            ADD PRODUCT
            </div>
          </button>
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

export default OrdersList;
