import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";


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

const Slider = () => {
  return (
    <div className="w-full">
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
  )
}

export default Slider
