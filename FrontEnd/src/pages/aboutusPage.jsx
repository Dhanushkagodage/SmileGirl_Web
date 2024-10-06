/* eslint-disable react/jsx-no-comment-textnodes */
/* eslint-disable no-unused-vars */
import React from "react";
import Layout from "../components/layout/layout";

function aboutusPage() {
  return (
    <Layout>
      <div className="grid grid-cols-1 items-center justify-center text-center pt-10 pb-10 sm:px-10 md:px-10 px-10">
        <div>
          <h1 className="text-xl font-extrabold text-black sm:text-2xl md:text-3xl lg:text-4xl font-poppins">
            Welcome to Smile Girl
          </h1>
          <p className="text-[11px] sm:text-[12px] md:text-[15px] lg:text-[16px] font-poppins font-light opacity-60 pt-2">
            At Smile Girl, we believe that every step should be taken with
            confidence and style. As a leading online destination for           
            fashionable ladies&apos; footwear, we are dedicated to offering a curated
            selection of shoes that blend comfort with trendsetting designs.
          </p>
          <p className="text-[11px] sm:text-[12px] md:text-[15px] lg:text-[16px] font-poppins font-light opacity-60 pt-2">
            Our journey began with a passion for empowering women through
            stylish footwear choices. We understand the importance of finding
            shoes that not only look good but feel great. From casual flats to
            elegant heels, we’ve got something for every occasion.
          </p>
        </div>
      </div>
      <div className="grid xl:grid-cols-2 lg:grid-cols-2 md:grid-cols-1 items-start justify-center xl:px-52 lg:px-52 md:px-30 sm:px-20 px-10 mb-10 mt-7 sm:grid-cols-1">
        <div className="grid grid-cols-1">
          <div className="mb-8">
            <h2 className="text-lg font-semibold text-black font-poppins">
              Our Mission
            </h2>
            <p className="text-sm font-light text-gray-500 font-poppins">
              To provide women with high-quality, fashionable footwear that
              combines elegance, comfort, and durability at an affordable price.
            </p>
          </div>
          <div className="mb-8">
            <h2 className="text-lg font-semibold text-black font-poppins">
              Why Choose Us?
            </h2>
            <p className="text-sm font-light text-gray-500 font-poppins">
              We prioritize customer satisfaction and strive to offer a seamless
              shopping experience. With our curated collections, you can be
              sure to find the perfect shoes for every season and occasion.
            </p>
          </div>
        </div>
        <div className="grid grid-cols-1">
          <div className="mb-8">
            <h2 className="text-lg font-semibold text-black font-poppins">
              Quality & Craftsmanship
            </h2>
            <p className="text-sm font-light text-gray-500 font-poppins">
              Every pair of shoes at Smile Girl is crafted with care, ensuring
              durability and style. We work closely with our designers to bring
              you the latest trends without compromising on comfort.
            </p>
          </div>
          <div className="mb-8">
            <h2 className="text-lg font-semibold text-black font-poppins">
              Stay Connected
            </h2>
            <p className="text-sm font-light text-gray-500 font-poppins">
              Follow us on social media @smilegirl for updates on new arrivals,
              exclusive discounts, and more!
            </p>
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default aboutusPage;
