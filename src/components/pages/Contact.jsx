import React from "react";
import Button from "../Button";
import Navbar from "../Navbar";
import Footer from "../Footer";

const Contact = () => {
  return (
    <div>
      <Navbar />
      <div className="px-3 lg:px-20 xl:px-0 xl:w-280 mx-auto pt-0.5 min-h-screen">
        <div className="border border-[#268eff] w-full md:w-110 lg:w-full text-white rounded-2xl md:overflow-hidden flex flex-col lg:flex-row items-center justify-around mt-25 md:mt-35 mb-20 xl:mb-0 mx-auto">
          <img
            src="https://images.leadconnectorhq.com/image/f_webp/q_80/r_1200/u_https://assets.cdn.filesafe.space/Rtb2945nBeIor8lTKMZj/media/ee1fd369-bcfd-4b15-b8c5-1ee1067ddbfe.png"
            alt=""
          />
          <div className="left-content flex flex-col md:justify-center lg:w-1/2 mx-10 my-10 ">
            <h3 className="font-bold text-3xl text-[#268eff]">Contact Us</h3>
            <p>To get in touch, please use the details or references provided below. I will respond as soon as possible.</p>
            <h4 className="text-2xl font-bold pt-4">+91-7232933333</h4>
            <h4 className="text-2xl font-bold pt-4">Niveshonefs@gmail.com</h4>
            <div className="pt-5 mx-auto lg:mx-0">
              <Button btnName={"Chat on whatsapp"} />
            </div>
          </div>
        </div>
      </div>
      <Footer/>
    </div>
  );
};

export default Contact;
