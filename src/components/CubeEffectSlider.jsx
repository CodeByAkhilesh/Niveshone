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
        delay: 2000,
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
          src="https://cdn.pixabay.com/photo/2018/09/22/11/34/business-3695073_1280.jpg"
          alt="image"
        />
      </SwiperSlide>

      <SwiperSlide>
        <img
          className="h-full w-full object-cover rounded-2xl"
          src="https://cdn.pixabay.com/photo/2020/11/03/15/32/doctor-5710160_1280.jpg"
          alt="image"
        />
      </SwiperSlide>

      <SwiperSlide>
        <img
          className="h-full w-full object-cover rounded-2xl"
          src="https://cdn.pixabay.com/photo/2020/05/01/08/29/portrait-5115894_1280.jpg"
          alt="image"
        />
      </SwiperSlide>
    </Swiper>
  );
};

export default CubeEffectSlider;
