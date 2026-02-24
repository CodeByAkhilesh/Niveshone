import React from "react";

const Button = ({ btnName, to, target }) => {
  return (
    <a
      href={to}
      rel="noopener noreferrer"
      target={target ? target : ""}
      className="px-10 py-2 text-center text-lg font-semibold rounded-md 
                           bg-linear-to-r from-[#3aab50] to-[#268eff] 
                           text-black shadow-lg cursor-pointer"
    >
      {btnName}
    </a>
  );
};

export default Button;
