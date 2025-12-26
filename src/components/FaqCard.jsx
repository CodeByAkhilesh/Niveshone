import React from "react";
import { RiArrowDownSLine } from "@remixicon/react";

const FaqCard = ({ faqs, i, handleClick, activeIndex }) => {
  return (
    <div
      onClick={() => handleClick(i)}
      className={`w-[49%] ${
        activeIndex == i ? "max-h-80" : "max-h-20"
      } overflow-hidden border border-[#268eef] rounded-lg shadow-[#73a3d2] shadow-md px-5 py-4 transition-all duration-600 ease-linear cursor-pointer w-full`}
    >
      <div className="h-12 w-full flex items-center justify-between font-bold text-gray-200">
        <h1 className="text-white text-2xl md:text-[30px] font-semibold flex items-center">
          {faqs.question}
        </h1>
        <span
          className={`${
            activeIndex == i ? "rotate-180" : ""
          } transition-all duration-400 delay-125 ease-in-out`}
        >
          <RiArrowDownSLine />
        </span>
      </div>
      <p className="text-white mt-5">{faqs.answer}</p>
    </div>
  );
};

export default FaqCard;
