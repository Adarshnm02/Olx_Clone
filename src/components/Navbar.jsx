import React, { useState } from "react";
import * as image from "../assets";
import Login from "./Login";

const Navbar = () => {
  const [LoginPop, setLoginPop] = useState(false);

  return (
    <>
      <nav className="flex items-center justify-between p-4 bg-gray-100 shadow-md">
        <div className="flex items-center space-x-4">
          <img src={image.olx} className="w-11 h-9" alt="OLX Logo" />
          <div className="flex border-2 border-gray-300 w-64 p-2 border-black bg-white">
            <img src={image.lens} className="w-6 h-5 mt-1" alt="Lens Icon" />
            <input placeholder="Location" className="ml-2 outline-none w-40" />
            <img src={image.arrow} className="w-8 h-7" alt="Arrow Icon" />
          </div>
        </div>
        <div className="flex items-center space-x-4 h-12 ml-4 border-2 border-black bg-white">
          <input
            placeholder="Find Cars, Mobile phones and more"
            className="ml-3 w-96 outline-none"
          />
          <img src={image.search} alt="Search Icon" className="w-[78px]" />
        </div>

        <div className="flex items-center space-x-4">
          <div className="flex h-12 p-3 ml-4 cursor-pointer">
            <h1 className="font-semibold">ENGLISH</h1>
            <img src={image.arrow} className="w-8 h-7" alt="Arrow Icon" />
          </div>

          <div
            onClick={() => setLoginPop(!LoginPop)}
            className="flex h-12 p-3 ml-4 cursor-pointer underline hover:no-underline"
          >
            <h1 className="font-bold text-lg">Login</h1>
          </div>

          <div className="w-28 flex h-12 p-2 ml-4 cursor-pointer rounded-full border border-yellow-500">
            <h1 className="font-bold text-lg ml-3">+ SELL</h1>
          </div>
        </div>
      </nav>
      {LoginPop && <Login />}
    </>
  );
};

export default Navbar;
