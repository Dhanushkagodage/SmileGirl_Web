// eslint-disable-next-line no-unused-vars
import React from "react";
import NavBar from "../components/navbar/navBar";

function HomePage() {
  return (
    <div>
      <NavBar />
      <div className="flex justify-space items-center h-screen sm:h-96 md:h-96 lg:h-96 bg-gradient-to-r from-white to-pink-400 justify-between px-10">
        <div>
          <h1 className="sm:text-2xl lg:text-5xl font-bold justify-start">
            Step confidently <br />
            in style.
          </h1>
        </div>
        <div></div>
      </div>
      <div>
        <h1 className="text-5xl font-bold justify-start">
          Step confidently <br />
          in style.
        </h1>
      </div>
    </div>
  );
}

export default HomePage;
