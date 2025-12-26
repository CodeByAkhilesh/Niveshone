import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import BgLayout from "../BgLayout";
import Slider from "../Slider";

const amcLogos = [
  "src/assets/AMCs-img/bandhan.png",
  "src/assets/AMCs-img/hdfc.png",
  "src/assets/AMCs-img/ppfas.png",
  "src/assets/AMCs-img/quant-1.png",
  "src/assets/AMCs-img/aditya.png",
  "src/assets/AMCs-img/axis.png",
  "src/assets/AMCs-img/nippon.png",
  "src/assets/AMCs-img/motilal.png",
  "src/assets/AMCs-img/tata.png",
  "src/assets/AMCs-img/kotak.png",
  "src/assets/AMCs-img/sbi.png",
  "src/assets/AMCs-img/icici.png",
  // ...add more
];

const OurPartnerAMCs = () => {
  return (
    <div className="flex-col flex items-center justify-center my-auto mt-10  md:mt-20 py-10">
      <h1 className="text-3xl md:text-4xl mx-5 xl:w-302.5 lg:text-6xl font-bold text-white mb-10 lg:mb-25 tracking-tighter">
        We work with{" "}
        <span className="bg-linear-to-r from-[#3aab50] to-[#268eff] bg-clip-text text-transparent">
          40+ AMCs in India!
        </span>
      </h1>
      <div className="w-77.5 h-97.5 md:w-175.75 lg:w-239.5 bg-amber-300 xl:w-302.5 rounded-2xl lg:h-80 items-center flex z-10 relative">
        <BgLayout content={<Slider />} />
      </div>
    </div>
  );
};

export default OurPartnerAMCs;
