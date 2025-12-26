import React from "react";

const GoalsCard = ({ goalsData }) => {
  return (
    <div className="h-96 w-80 border-2 border-[#268eff] text-white px-4 py-5 flex flex-col items-center shrink-0 rounded-xl shadow-xl shadow-[#268eff]">
      <img
        className="h-31.25 w-31.25 object-contain"
        src={goalsData.img}
        alt=""
      />
      <h1 className="text-2xl font-bold mt-6 mb-3">{goalsData.headding}</h1>
      <p className="text-center text-lg">{goalsData.pera}</p>
    </div>
  );
};

export default GoalsCard;
