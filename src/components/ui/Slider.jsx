import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import bandhanAmcLogo from "../../assets/AMCs-img/bandhan.png";
import hdfcAmcLogo from "../../assets/AMCs-img/hdfc.png";
import ppfasAmcLogo from "../../assets/AMCs-img/ppfas.png";
import quantAmcLogo from "../../assets/AMCs-img/quant.png";
import adityaAmcLogo from "../../assets/AMCs-img/aditya.png";
import axisAmcLogo from "../../assets/AMCs-img/axis.png";
import nipponAmcLogo from "../../assets/AMCs-img/nippon.png";
import motilalAmcLogo from "../../assets/AMCs-img/motilal.png";
import tataAmcLogo from "../../assets/AMCs-img/tata.png";
import kotakAmcLogo from "../../assets/AMCs-img/kotak.png";
import sbiAmcLogo from "../../assets/AMCs-img/sbi.png";
import iciciAmcLogo from "../../assets/AMCs-img/icici.png";

const amcLogos = [
  {
    id: "bandha-amc",
    img: bandhanAmcLogo,
    alt: "Bandhan Mutual Fund AMC partner of Nivesh One Financial Services",
  },
  {
    id: "hdfc-amc",
    img: hdfcAmcLogo,
    alt: "HDFC Mutual Fund AMC partner of Nivesh One Financial Services",
  },
  {
    id: "ppfas-amc",
    img: ppfasAmcLogo,
    alt: "Parag Parikh Mutual Fund AMC partner of Nivesh One Financial Services",
  },
  {
    id: "quant-amc",
    img: quantAmcLogo,
    alt: "Quant Mutual Fund AMC partner of Nivesh One Financial Services",
  },
  {
    id: "adity-birla-amc",
    img: adityaAmcLogo,
    alt: "Aditya Birla Sun Life Mutual Fund AMC partner of Nivesh One Financial Services",
  },
  {
    id: "axis-amc",
    img: axisAmcLogo,
    alt: "Axis Mutual Fund AMC partner of Nivesh One Financial Services",
  },
  {
    id: "nippon-india-amc",
    img: nipponAmcLogo,
    alt: "Nippon India Mutual Fund AMC partner of Nivesh One Financial Services",
  },
  {
    id: "motilal-oswal-amc",
    img: motilalAmcLogo,
    alt: "Motilal Oswal Mutual Fund AMC partner of Nivesh One Financial Services",
  },
  {
    id: "tata-amc",
    img: tataAmcLogo,
    alt: "Tata Mutual Fund AMC partner of Nivesh One Financial Services",
  },
  {
    id: "kotak-amc",
    img: kotakAmcLogo,
    alt: "Kotak Mutual Fund AMC partner of Nivesh One Financial Services",
  },
  {
    id: "sbi-amc",
    img: sbiAmcLogo,
    alt: "SBI Mutual Fund AMC partner of Nivesh One Financial Services",
  },
  {
    id: "icici-amc",
    img: iciciAmcLogo,
    alt: "ICICI Prudential Mutual Fund AMC partner of Nivesh One Financial Services",
  },
];

const Slider = () => {
  return (
    <>
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
          0: {
            // 👈 Mobile
            slidesPerView: 1,
            spaceBetween: 0,
          },
          480: {
            // Small mobile
            slidesPerView: 1,
            spaceBetween: 15,
          },
          768: {
            // Tablet
            slidesPerView: 3,
            spaceBetween: 20,
          },
          1024: {
            // Laptop / Desktop
            slidesPerView: 5,
            spaceBetween: 20,
          },
        }}
      >
        {amcLogos.map((obj) => (
          <SwiperSlide
            key={obj.id}
            className="flex items-center justify-center"
          >
            <img
              src={obj.img}
              alt={obj.alt}
              className="w-70 h-37.5 lg:w-40 lg:h-auto object-contain"
              loading="lazy"
              decoding="async"
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
};

export default Slider;
