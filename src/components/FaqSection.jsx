import React, { useState } from "react";
import FaqCard from "./FaqCard";

const FaqSection = () => {
  const [faqs, setFaqs] = useState([
    {
      question: "React kya hai?",
      answer: "React ek JavaScript library hai UI banane ke liye.",
    },
    {
      question: "Tailwind CSS kya hai?",
      answer: "Tailwind ek utility-first CSS framework hai.",
    },
    {
      question: "React aur Tailwind sath kaise use kare?",
      answer: "React components me Tailwind classes use karke.",
    },
  ]);

  const [activeIndex, setActiveIndex] = useState(null);

  const handleClick = (i)=>{
       setActiveIndex(activeIndex ===  i ? null : i)
  }

  return (
    <div className="w-302.5 mx-auto py-25">
      <h1 className="text-white text-6xl font-bold pb-20">FAQ's</h1>
      <div className="w-full flex justify-between flex-wrap gap-y-10">
        {faqs.map((faq, index)=>{
          return(
               <FaqCard  key={index} i={index} handleClick={handleClick} faqs={faq} activeIndex={activeIndex}/>
          )
        })}
      </div>
    </div>
  );
};

export default FaqSection;
