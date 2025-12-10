import React from "react";
import { Typewriter } from "react-simple-typewriter";

const TextTypingEffect = () => {
  return (
    <div className="">
      
      {/* Typing Text */}
      <h1 className="font-bold bg-gradient-to-r from-[#3aab50] to-[#268eff] bg-clip-text text-transparent">
        <Typewriter
          words={['The Right Strategy', 'Expert Fund Selection', 'Zero Financial Stress']}
          loop={true}
          cursor={false}
          typeSpeed={70}
          deleteSpeed={50}
          delaySpeed={1500}
        />
      </h1>
    </div>
  );
};

export default TextTypingEffect;
