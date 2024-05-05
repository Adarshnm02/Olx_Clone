import React from "react";
import * as image from "../assets";

const Navbar = () => {
  return (
    <>
      <div className="flex p-4 bg-slate-100 shadow-md">
        <img src={image.olx} className="w-11 h-9" alt="OLX Logo" />
        <div className="flex border-2 border-spacing-1 w-64 p-2 border-black ml-5 bg-white">
          <img src={image.lens} className="w-6 h-5 mt-1" alt="Lens Icon" />
          <input placeholder="Location" className="ml-2 outline-none " />
          <img src={image.arrow} className="w-8 h-7" alt="Arrow Icon" />
        </div>
        <div className="flex h-12 ml-4 border-2 border-black bg-white">
          <input
            placeholder="Find Cars, Mobile phones and more"
            className="ml-3 w-96 outline-none"
          />
          <img src={image.search} alt="Search Icon" />
        </div>
        <div className="flex h-12 p-3 ml-10 cursor-pointer">
          <h1 className="font-semibold">ENGLISH</h1>
          <img src={image.arrow} className="w-8 h-7" alt="Arrow Icon" />
        </div>
        <div className="flex h-12 p-3 ml-6 cursor-pointer underline hover:no-underline">
          <h1 className="font-bold text-lg">Login</h1>
        </div>
        <div className="w-28 flex h-12 p-2 ml-6 cursor-pointer rounded-full border border-yellow-500">
          <h1 className="font-bold text-lg ml-3">+ SELL</h1>
        </div>
      </div>
    </>
  );
};

export default Navbar;
