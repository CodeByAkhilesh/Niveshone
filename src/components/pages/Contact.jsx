import React from "react";
import Button from "../Button";
import Navbar from "../Navbar";
import Footer from "../Footer";

const Contact = () => {
  return (
    <div>
      <Navbar />
      <div className="px-3 lg:px-20 xl:px-0 xl:w-280 mx-auto pt-0.5 min-h-screen">
        <h1 className="text-3xl md:text-4xl mx-5 xl:w-302.5 lg:text-6xl font-bold text-white mb-10 lg:mb-25 tracking-tighter mt-25 md:mt-35">
        Let’s Discuss Your Mutual Fund{" "}
        <span className="bg-linear-to-r from-[#3aab50] to-[#268eff] bg-clip-text text-transparent">
          Investment Needs
        </span>
      </h1>
        <div className="w-full md:w-110 lg:w-full text-white rounded-2xl md:overflow-hidden flex flex-col lg:flex-row items-center justify-between mb-20 xl:mb-0 mx-auto">
          <img
            src="https://images.leadconnectorhq.com/image/f_webp/q_80/r_1200/u_https://assets.cdn.filesafe.space/Rtb2945nBeIor8lTKMZj/media/ee1fd369-bcfd-4b15-b8c5-1ee1067ddbfe.png"
            alt=""
          />
          <div className="left-content flex flex-col md:justify-center lg:w-1/2 mx-10 my-10 ">
            <h3 className="font-bold text-3xl text-[#268eff]">Contact Us</h3>
            <p>
              To get in touch, please use the details or references provided
              below. I will respond as soon as possible.
            </p>
            <h4 className="text-2xl font-bold pt-4">+91-7232933333</h4>
            <h4 className="text-2xl font-bold pt-4">Niveshonefs@gmail.com</h4>
            <div className="pt-5 mx-auto lg:mx-0">
              <Button btnName={"Chat on whatsapp"} />
            </div>
          </div>
        </div>
        <div className="border border-[#268eff] rounded-2xl mt-25 mb-20 mx-auto">
          <h1 className="text-4xl text-[#268eff] font-bold text-center mt-15">
            Contect Us Form
          </h1>
          <form action="#" className="w-1/2 mx-auto flex flex-col gap-10 mt-8 mb-20">
            <input className="border-b border-white text-gray-400 font-medium text-xl" type="text" placeholder="Full Name" />
            <input className="border-b border-white text-gray-400 font-medium text-xl" type="text" placeholder="Email" />
            <input className="border-b border-white text-gray-400 font-medium text-xl text-wrap" type="text" placeholder="Message" />
            <Button btnName={"Submit"}/>
          </form>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Contact;
