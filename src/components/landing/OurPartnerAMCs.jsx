import React from "react";
import GradientBackground from "../ui/GradientBackground";
import Slider from "../ui/Slider";

const OurPartnerAMCs = () => {
  return (
    <section className="flex-col flex items-center justify-center my-auto mt-10  md:mt-20 py-10">

      {/* Heading  */}
      <header>
        <h2 className="text-3xl md:text-4xl mx-5 lg:text-6xl font-bold text-white mb-10 lg:mb-25 tracking-tighter xl:w-302.5 md:w-175.75 lg:w-240">
          We work with{" "}
          <span className="bg-linear-to-r from-[#3aab50] to-[#268eff] bg-clip-text text-transparent">
            40+ AMCs in India!
          </span>
        </h2>
      </header>
      <figure className="w-77.5 h-97.5 md:w-175.75 lg:w-239.5 xl:w-302.5 rounded-2xl lg:h-80 text-black items-center flex z-10 relative">
        <GradientBackground content={<Slider />} />
      </figure>
    </section>
  );
};

export default OurPartnerAMCs;
