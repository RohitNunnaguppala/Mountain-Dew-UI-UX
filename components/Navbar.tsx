import React from "react";
import Link from "next/link";

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-black/80 backdrop-blur-md shadow-lg py-4 px-8 flex justify-between items-center transition-all duration-300">
      <Link href="/" aria-label="Home">
        <h1 className="text-2xl font-extrabold text-green-500 tracking-widest uppercase hover:text-green-400 transition-all duration-300">
          Mountain Dew
        </h1>
      </Link>
      <div className="flex items-center gap-6">
        <Link
          href="#products"
          className="text-green-300 font-medium tracking-wide hover:text-green-300/80 focus:outline-none transition-all duration-300"
        >
          Products
        </Link>
        <button className="bg-green-500 text-black font-bold px-5 py-2 rounded-lg hover:bg-green-600 hover:scale-105 focus:ring-2 focus:ring-green-400 transition-all duration-300 uppercase">
          Login
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
