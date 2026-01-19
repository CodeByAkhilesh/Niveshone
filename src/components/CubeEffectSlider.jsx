import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

// Swiper CSS
import "swiper/css";
import "swiper/css/effect-cube";
import "swiper/css/pagination";
import "swiper/css/autoplay";

// Modules
import { Navigation, Pagination, Autoplay, EffectCube } from "swiper/modules";

const CubeEffectSlider = () => {
  return (
    <Swiper
      modules={[EffectCube, Pagination, Autoplay]}
      effect="cube"
      grabCursor={true}
      cubeEffect={{
        shadow: true,
        slideShadows: true,
        shadowOffset: 20,
        shadowScale: 0.94,
      }}
      pagination={{ clickable: true }}
      autoplay={{
        delay: 4000,
        disableOnInteraction: false,
      }}
      loop={true}
      className="mySwiper"
      style={{
        width: "450px",
        height: "450px",
      }}
    >
      <SwiperSlide>
        <img
          className="h-full w-full object-cover rounded-2xl"
          src="src\assets\webHeroImg-1.png"
          alt="image"
        />
      </SwiperSlide>

      <SwiperSlide>
        <img
          className="h-full w-full object-cover rounded-2xl"
          src="src\assets\webHeroImg-2.png"
          alt="image"
        />
      </SwiperSlide>

      <SwiperSlide>
        <img
          className="h-full w-full object-cover rounded-2xl"
          src="src\assets\webHeroImg-3.png"
          alt="image"
        />
      </SwiperSlide>
    </Swiper>
  );
};

export default CubeEffectSlider;
