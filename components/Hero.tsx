import React from "react";
import Image from "next/image";

const Hero = () => {
  return (
    <section className="relative w-full min-h-screen flex flex-col items-center justify-center text-center bg-gradient-to-b from-black via-[#102a10] to-[#1a3c1a] pt-16 pb-10 overflow-hidden">
      <h1 className="md:text-7xl text-5xl font-extrabold text-green-400 mt-16 tracking-tight drop-shadow-lg">
        Do the <span className="text-white">Dew</span>
      </h1>
      <p className="md:text-2xl text-lg text-green-200 mt-5 font-medium">
        Fuel the rush. <span className="text-white">Unleash the thrill.</span>
      </p>

      <div className="mt-12 flex justify-center">
        <Image
          src="/mountain-dew.png"
          alt="Mountain Dew Energy"
          width={665}
          height={375}
          layout="intrinsic"
          className="object-contain transition-transform duration-500 hover:scale-105 hover:rotate-1"
        />
      </div>
    </section>
  );
};

export default Hero;
