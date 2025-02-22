import React from "react";
import Card from "./Card";

const Content = () => {
  return (
    <section className="py-12 px-4 flex flex-col items-center justify-center mx-4 bg-green-50 rounded-2xl shadow-md gap-12">
      <div className="flex flex-col items-center justify-center gap-2">
        <h2 className="text-4xl font-extrabold text-green-900 tracking-tighter">
          Extreme Energy
        </h2>
        <p className="text-xl text-green-800 text-center max-w-lg">
          Power up with our most electrifying drinks and unleash your inner beast!
        </p>
      </div>
      <div className="flex flex-col items-center justify-center gap-5">
        <Card name="Mountain Dew Original" image="/mountain-dew-original.png" />
        <Card name="Mountain Dew Baja Blast" image="/mountain-dew-baja.png" />
        <Card name="Mountain Dew Code Red" image="/mountain-dew-code-red.png" />
      </div>
    </section>
  );
};

export default Content;
