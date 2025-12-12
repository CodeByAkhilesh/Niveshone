import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";

import "swiper/css";

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
    <div className="flex-col flex items-center justify-center my-auto  mt-40 py-10">
        <h1 className="text-3xl md:text-4xl mx-5 xl:w-[1210px] lg:text-6xl font-bold text-white mb-10 lg:mb-25 tracking-tighter">We work with <span className="bg-gradient-to-r from-[#3aab50] to-[#268eff] bg-clip-text text-transparent">40+ AMCs in India!</span></h1>
    <div className="w-[310px] h-[390px] md:w-[703px] lg:w-[958px] bg-gradient-to-r from-[#3aab50] to-[#268eff] xl:w-[1210px] rounded-2xl lg:h-80 items-center flex z-10">
      <Swiper
  modules={[Autoplay]}
  loop={true}
  speed={3000}
  autoplay={{
    delay: 0,
    disableOnInteraction: false,
  }}
  allowTouchMove={false}
  dir="ltr"
  className="w-full"

  breakpoints={{
    0: {          // 👈 Mobile
      slidesPerView: 1,
      spaceBetween: 0,
    },
    480: {        // Small mobile
      slidesPerView: 1,
      spaceBetween: 15,
    },
    768: {        // Tablet
      slidesPerView: 3,
      spaceBetween: 20,
    },
    1024: {       // Laptop / Desktop
      slidesPerView: 5,
      spaceBetween: 20,
    }
  }}
>
  {amcLogos.map((logo, index) => (
    <SwiperSlide
      key={index}
      className="flex items-center justify-center"
    >
      <img
        src={logo}
        alt={`AMC Logo ${index}`}
        className="
          w-[280px] h-[150px]        // 👈 Mobile size → big
          lg:w-[160px] lg:h-auto     // 👈 Desktop size
          object-contain
        "
      />
    </SwiperSlide>
  ))}
</Swiper>
    </div>
    <div className="back-border w-[310px] h-[390px] md:w-[703px] lg:w-[958px] xl:w-[1210px] rounded-2xl lg:h-80 border-[#268eff] border -rotate-2 absolute mt-26 sm:mt-18 lg:mt-35"></div>
    </div>
  );
};

export default OurPartnerAMCs;
