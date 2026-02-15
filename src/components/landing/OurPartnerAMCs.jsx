import React from "react";
import GradientBackground from "../ui/GradientBackground";
import Slider from "../ui/Slider";
import SectionTitle from "../ui/SectionTitle";

const OurPartnerAMCs = () => {
  return (
    <section className="flex-col flex items-center justify-center my-auto mt-10  md:mt-20 py-10">

      {/* Heading  */}
      <header className="mx-5 xl:w-302.5 md:w-175.75 lg:w-240">
        <SectionTitle title={"We work with"} gradientTitle={" 40+ AMCs in India!"} />
      </header>
      <figure className="w-77.5 h-97.5 md:w-175.75 lg:w-239.5 xl:w-302.5 rounded-2xl lg:h-80 text-black items-center flex z-10 relative">
        <GradientBackground content={<Slider />} />
      </figure>
    </section>
  );
};

export default OurPartnerAMCs;
