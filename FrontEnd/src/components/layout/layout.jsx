/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from "react";
import NavBar from "../navbar/NavBar";
import Footer from "../footer/Footer";


function layout({ children }) {
  return (
    <div className="w-full container">
      {/* Navbar */}
      <NavBar />

      {/* Content */}
      <div>{children}</div>

      {/* Footer */}
      <Footer />
    </div>
  )
}

export default layout
