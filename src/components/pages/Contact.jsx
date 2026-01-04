import React from "react";
import Button from "../Button";
import Navbar from "../Navbar";
import Footer from "../Footer";

const Contact = () => {
  return (
    <div>
      <Navbar />
      <div className="w-280 mx-auto pt-0.5 min-h-screen">
        <div className="border border-[#268eff] h-117 w-full text-white rounded-2xl overflow-hidden flex justify-around mt-35">
          <img
            src="https://images.leadconnectorhq.com/image/f_webp/q_80/r_1200/u_https://assets.cdn.filesafe.space/Rtb2945nBeIor8lTKMZj/media/ee1fd369-bcfd-4b15-b8c5-1ee1067ddbfe.png"
            alt=""
          />
          <div className="left-content flex flex-col justify-center w-1/2 ">
            <h3 className="font-bold text-3xl text-[#268eff]">Contact Us</h3>
            <p>To get in touch, please use the details or references provided below. I will respond as soon as possible.</p>
            <h4 className="text-2xl font-bold pt-4">+91-7232933333</h4>
            <h4 className="text-2xl font-bold pt-4">Niveshonefs@gmail.com</h4>
            <div className="pt-5">
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
