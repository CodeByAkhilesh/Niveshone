import React from "react";
import { RiArrowDownSLine } from "@remixicon/react";

const FaqCard = ({ faqs, id, handleClick, activeId }) => {
  return (
    <article
      onClick={() => handleClick(id)}
      className={`${activeId == id ? "max-h-80" : "max-h-23 xl:max-h-20"} overflow-hidden border border-[#268eef] rounded-lg shadow-[#73a3d2] shadow-md px-5 py-4 transition-all duration-600 ease-linear cursor-pointer w-full`}
    >
      <div className="h-12 w-full flex items-center justify-between font-bold text-gray-200">
        <h5 className="text-white text-xl md:text-[30px] font-semibold flex items-center tracking-tighter md:tracking-normal">
          {faqs.question}
        </h5>
        <span
          className={`${
            activeId == id ? "rotate-180" : ""
          } transition-all duration-400 delay-125 ease-in-out`}
        >
          <RiArrowDownSLine />
        </span>
      </div>
      <p className="text-white mt-5">{faqs.answer}</p>
    </article>
  );
};

export default FaqCard;
