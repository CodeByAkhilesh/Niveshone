import React from "react";
import CubeEffectSlider from "./CubeEffectSlider";
import TextTypingEffect from "./TextTypingEffect";
import Button from "./Button";

function HeroSection() {
  return (
    <section className="text-white md:max-h-[800px] w-full flex flex-col md:items-center md:w-full lg:max-w-[1210px] lg:mx-auto px-5 md:px-10 relative overflow-hidden lg:mt-18 md:flex md:flex-col lg:flex lg:flex-row">
      {/* Left Text Section */}
      <div className="md:w-full lg:w-[42vw] md:h-[500px] h-[300px] sm:h-[400px]">
        <h1 className="lg:text-6xl xl:text-6xl xl:mt-20 text-3xl sm:text-5xl lg:text-[35px] lg:mt-33 font-medium leading-tight mt-15">
          Invest For <br />
          A Future With <br />
          <span className="flex">
            <TextTypingEffect />
            <span className="cursorGradient bg-gradient-to-r from-[#3aab50] to-[#268eff] bg-clip-text text-transparent">
              |
            </span>
          </span>
        </h1>

        {/* Button */}
        <div className="mt-8">
          <Button btnName={"Create Acount"} />
        </div>
      </div>

      {/* Right Floating Circular Images */}
      <div className="w-[330px] h-[340px] sm:w-[380px] sm:h-[400px] md:w-[460px] lg:w-[420px] lg:h-[400px] xl:mr-0 rounded-2xl lg:ml-8 md:h-[500px] overflow-hidden relative shrink-0 mx-auto sm:mr-15 md:mt-20 lg:mt-0">
        <CubeEffectSlider />
      </div>

      {/* WhatsApp Floating Icon */}
      <a
        href="https://wa.me/+917984300926"
        className="whatsappIcon bg-green-500 w-12 h-12 flex items-center justify-center rounded-full fixed bottom-6 right-10 md:right-13 lg:right-13 hover:scale-110 transition z-10"
      >
        <img src="src\assets\whatsapp.png" alt="whatsapp" className="w-8" />
      </a>
    </section>
  );
}

export default HeroSection;
