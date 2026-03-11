import React from "react";
import { RiWhatsappLine } from "@remixicon/react";

const WhatsappIcon = () => {
  return (
    <a
      href="https://wa.me/917984300926?text=Hi%20Nivesh%20One"
      target="_blank"
      className="whatsappIcon bg-green-500 w-12 h-12 flex items-center justify-center rounded-full fixed bottom-6 right-3 md:right-5 lg:right-13 hover:scale-110 transition z-40"
    >
      <RiWhatsappLine />
    </a>
  );
};

export default WhatsappIcon;
