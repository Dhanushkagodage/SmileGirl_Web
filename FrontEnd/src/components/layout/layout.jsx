/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from "react";
import NavBar from "../navbar/navBar";
import Footer from "../footer/footer";

function layout({ children }) {
  return (
    <div className="w-full justify-center items-center align-middle">
      <div className="">
        {/* Navbar */}
        <NavBar />

        {/* Content */}
        <div className="xl:pb-14 lg:pb-14 md:pb-10 sm:pb-6 pb-6 pt-14 ">
          {children}
        </div>

        {/* Footer */}
        <Footer />
      </div>
    </div>
  );
}

export default layout;
