import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";

import "swiper/css";

const amcLogos = [
  "src/assets/AMCs-img/sbi.svg",
  "https://mf.nipponindiaim.com/SiteCollectionImages/nipponindia-mutual-fund-logo.webp?v=1",
  "https://www.sbimf.com/Content/Images/black.svg",
  "src/assets/AMCs-img/logo.webp",
  "https://www.axismf.com/assets/images/shared/header/axis_logo.svg",
  "https://www.tatamutualfund.com/images/logo-lg.avif",
  "src/assets/AMCs-img/axis.png",
  "src/assets/AMCs-img/hdfc.png",
  "src/assets/AMCs-img/icici.png",
  "src/assets/AMCs-img/kotak.png",
  "src/assets/AMCs-img/motilal.webp",
  
  // ...add more
];

const OurPartnerAMCs = () => {
  return (
    <div className="flex-col flex items-center justify-center my-auto  mt-40 py-10">
        <h1 className="lg:w-[1210px] text-6xl font-bold text-white mb-15">We work with <span className="bg-gradient-to-r from-[#3aab50] to-[#268eff] bg-clip-text text-transparent">40+ AMCs in India!</span></h1>
    <div className="bg-gradient-to-r from-[#3aab50] to-[#268eff] lg:w-[1210px] rounded-2xl h-80 items-center flex ">
      <Swiper
        modules={[Autoplay]}
        slidesPerView={5}
        spaceBetween={20}
        loop={true}
        speed={3000}
        autoplay={{
          delay: 0,
          disableOnInteraction: false,
        }}
        allowTouchMove={false}
        className="w-full"
        dir="ltr"   // 👈 left to right
      >
        {amcLogos.map((logo, index) => (
          <SwiperSlide key={index} className="h-[50px]">
            <img
              src={logo}
              alt={`AMC Logo ${index}`}
              className="w-[120px] h-auto object-contain"
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
    </div>
  );
};

export default OurPartnerAMCs;
