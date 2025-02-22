import React from "react";
import Image from "next/image";

interface CardProps {
  name: string;
  image: string;
}

const Card: React.FC<CardProps> = ({ name, image }) => {
  return (
    <div className="group w-full h-full bg-green-100 rounded-2xl flex flex-col md:flex-row items-center justify-center p-6 gap-12 shadow-lg">
      <Image
        src={image}
        alt={name}
        width={270}
        height={270}
        className="group-hover:-translate-y-1 transition-all duration-300 object-contain"
      />
      <div className="flex flex-col gap-6">
        <div className="flex flex-col text-green-900">
          <h3 className="lg:text-2xl text-xl font-semibold tracking-tighter">
            <span className="text-green-600">{name}</span>
          </h3>
          <p className="lg:text-lg">
            High-energy refreshment to keep you going!
          </p>
        </div>

        <div className="flex items-center gap-2">
          <button className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition-all duration-300">
            Power Up
          </button>
          <button className="bg-green-50 text-green-900 px-4 py-2 rounded-lg hover:bg-green-50/50 transition-all duration-300">
            Stay Hydrated
          </button>
        </div>
      </div>
    </div>
  );
};

export default Card;
