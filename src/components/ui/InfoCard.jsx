import React from "react";

const InfoCard = ({ cardData }) => {
  return (
    <article className="h-96 w-80 border-2 border-[#268eff] text-white px-4 py-5 flex flex-col items-center shrink-0 rounded-xl shadow-xl shadow-[#268eff]">
      <img
        className="h-31.25 w-31.25 object-contain"
        loading="lazy"
        decoding="async"
        src={cardData.img}
        alt={cardData.alt}
      />
      <h3 className="text-2xl font-bold mt-6 mb-3">{cardData.heading}</h3>
      <p className="text-center text-lg">{cardData.para}</p>
    </article>
  );
};

export default InfoCard;
