import React from "react";
import Button from "../../components/ui/Button";
import Navbar from "../../components/layout/Navbar";
import Footer from "../../components/layout/Footer";
import { RiMailFill, RiPhoneFill } from "@remixicon/react";
import WhatsappIcon from "../../components/ui/WhatsappIcon";
import ContactForm from "./ContactForm";

const Contact = () => {
  return (
    <div>
      <Navbar />
      <div className="px-3 lg:px-20 xl:px-0 xl:w-280 mx-auto pt-0.5 min-h-screen">
        {/* page main headding */}
        <h1 className="text-3xl md:text-4xl mx-5 xl:w-302.5 lg:text-6xl font-bold text-white mb-10 lg:mb-20 mt-25 md:mt-35">
          Get in Touch{" "}
          <span className="bg-linear-to-r from-[#3aab50] to-[#268eff] bg-clip-text text-transparent">
            With Us.
          </span>
        </h1>
        <div className="w-full md:w-140 lg:w-full text-white rounded-2xl md:overflow-hidden flex flex-col lg:flex-row items-center justify-between mb-20 xl:mb-0 mx-auto border border-[#268eff] shadow-xl shadow-blue-400">
          <img
            src="https://images.leadconnectorhq.com/image/f_webp/q_80/r_1200/u_https://assets.cdn.filesafe.space/Rtb2945nBeIor8lTKMZj/media/ee1fd369-bcfd-4b15-b8c5-1ee1067ddbfe.png"
            alt=""
          />
          <div className="left-content flex flex-col md:justify-center lg:w-1/2 mx-10 md:mx-20 lg:mx-10 my-10 ">
            <h3 className="font-bold text-3xl text-[#268eff]">Contact Us</h3>
            <p className="xl:w-110">
              To get in touch, please use the details or references provided
              below. I will respond as soon as possible.
            </p>
            <h4 className="text-xl md:text-2xl font-bold pt-4 flex gap-4">
              <span>
                <RiPhoneFill />
              </span>
              +91-7232933333
            </h4>
            <h4 className="text-xl md:text-2xl font-bold pt-4 flex items-center gap-4">
              <span>
                <RiMailFill />
              </span>
              Niveshonefs@gmail.com
            </h4>
            <div className="pt-5 mx-auto lg:mx-0">
              <Button
                btnName={"Chat on whatsapp"}
                to={"https://wa.me/917984300929?text=Hi%20Mutual%20Fund"}
              />
            </div>
          </div>
        </div>
        {/* contect us form  */}
        <ContactForm/>
      </div>
      {/* WhatsApp Floating Icon */}
      <WhatsappIcon />
      <Footer />
    </div>
  );
};

export default Contact;
