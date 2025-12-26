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
    {
      question: "React aur Tailwind sath kaise use kare?",
      answer: "React components me Tailwind classes use karke.",
    },
    {
      question: "React aur Tailwind sath kaise use kare?",
      answer: "React components me Tailwind classes use karke.",
    },
    {
      question: "React aur Tailwind sath kaise use kare?",
      answer: "React components me Tailwind classes use karke.",
    },
  ]);

  const [activeIndex, setActiveIndex] = useState(null);

  const handleClick = (i) => {
    setActiveIndex(activeIndex === i ? null : i);
  };

  return (
    <div className="xl:w-302.5 mx-auto py-5 px-5 md:px-10 md:py-25">
      <h1 className="text-white text-5xl md:text-6xl font-bold pb-20">FAQ's</h1>
      <div className="w-full flex flex-col justify-between flex-wrap gap-y-10 pb-10 md:pb-2">
        {faqs.map((faq, index) => {
          return (
            <FaqCard
              key={index}
              i={index}
              handleClick={handleClick}
              faqs={faq}
              activeIndex={activeIndex}
            />
          );
        })}
      </div>
    </div>
  );
};

export default FaqSection;
