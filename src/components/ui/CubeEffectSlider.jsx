import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import sliderImg1 from "../../assets/sliderImages/webHeroImg-1.webp";
import sliderImg2 from "../../assets/sliderImages/webHeroImg-2.webp";
import sliderImg3 from "../../assets/sliderImages/webHeroImg-3.webp";

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
          src={sliderImg1}
          alt="Nivesh One Financial Services providing mutual fund investment and SIP planning"
          loading="lazy"
        />
      </SwiperSlide>

      <SwiperSlide>
        <img
          className="h-full w-full object-cover rounded-2xl"
          src={sliderImg2}
          alt="Professional mutual fund advisor analyzing investment growth and portfolio performance"
          loading="lazy"
        />
      </SwiperSlide>

      <SwiperSlide>
        <img
          className="h-full w-full object-cover rounded-2xl"
          src={sliderImg3}
          alt="Happy couple planning long term financial security through mutual fund investments"
          loading="lazy"
        />
      </SwiperSlide>
    </Swiper>
  );
};

export default CubeEffectSlider;
