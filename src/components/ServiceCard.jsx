import React, { useState } from "react";

const ServiceCard = ({ serviceName, discription, index }) => {
  return (
    <div key={index} className="group relative">
      <div className="h-96.25 w-72.75 border border-[#268eff] rounded-2xl bg-black absolute top-0 z-10 px-7 py-10 group-hover:bg-linear-to-r from-[#3aab50] to-[#268eff] text-white hover:text-black cursor-pointer">
        <h1 className="text-4xl">{serviceName}</h1>
        <p className="text-xl font-medium tracking-wide pt-4">{discription}</p>
      </div>
      <div className="h-96.25 w-72.75 border border-[#268eff] rounded-2xl -rotate-3 bg-linear-to-r from-[#3aab50] to-[#268eff] group-hover:from-black group-hover:to-black"></div>
    </div>
  );
};

export default ServiceCard;
