import React from "react";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="py-6 px-4 flex items-center justify-center flex-col gap-4 bg-black text-green-300">
      <div className="flex flex-col items-center justify-center gap-2 max-w-sm text-center">
        <Link href="/">
          <h1 className="text-2xl font-extrabold text-green-400 tracking-tighter hover:text-green-600 transition-all duration-300">
            Mountain Dew
          </h1>
        </Link>
        <p className="text-sm text-green-200">
          Fuel your passion. Unleash the thrill. Stay energized with Mountain Dew!
        </p>
      </div>
      <p className="text-sm text-green-100">
        &copy; {new Date().getFullYear()} Mountain Dew. All rights reserved.
      </p>
    </footer>
  );
};

export default Footer;
