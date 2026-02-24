import React from "react";
import Button from "./Button";

function ToolCard({ data }) {
  return (
    <article className="h-96 w-80 border-2 border-[#268eff] text-white px-4 py-5 flex flex-col items-center shrink-0 rounded-xl shadow-xl shadow-[#268eff]">
      <img
        className="h-20 w-20 object-contain"
        src={data.img}
        alt={data.alt || `${data.heading} calculator`}
        loading="lazy"
        decoding="async"
      />
      <h3 className="text-2xl font-bold mt-4 mb-3 text-[#268eff]">
        {data.heading}
      </h3>
      <p className="text-center text-lg">{data.para}</p>
      <div className="mt-10">
        <Button 
        btnName={"Calculate"} 
        to={data.link}
        target={"_blank"}
        />
      </div>
    </article>
  );
}

export default ToolCard;
