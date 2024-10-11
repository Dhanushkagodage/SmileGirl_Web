/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from "react";
import NavBar from "../navbar/navBar";
import Footer from "../footer/Footer";


function layout({ children }) {
  return (
    
    <div className="w-full justify-center items-center align-middle">
      <div className="absolute m-0 p-0 ">
      {/* Navbar */}
      <NavBar />

      {/* Content */}
      <div className="pt-14">{children}</div>

      {/* Footer */}
      <Footer />
    </div>
    </div>
  )
}

export default layout
