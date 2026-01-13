import React, { useState } from "react";
import FaqCard from "./FaqCard";

const FaqSection = () => {
  const [faqs, setFaqs] = useState([
    {
      question: "What is a Mutual Fund?",
      answer: "A Mutual Fund is an investment option where money is collected from many investors and invested in shares, bonds, or other securities. The fund is managed by a professional fund manager.",
    },
    {
      question: "Are Mutual Funds safe?",
      answer: "Mutual Funds are market-linked investments, so they involve risk. The level of risk depends on the type of fund. Investors should understand their risk profile and investment goals before investing.",
    },
    {
      question: "What is SIP in Mutual Funds?",
      answer: "SIP (Systematic Investment Plan) is a method of investing a fixed amount regularly, usually monthly, in a Mutual Fund. It helps in disciplined investing and is generally used for long-term financial goals.",
    },
    {
      question: "What is the minimum amount required to invest in a Mutual Fund?",
      answer: "Many Mutual Fund schemes allow SIP investments starting from ₹500 per month. Minimum lump sum investment amounts may vary depending on the scheme.",
    },
    {
      question: "What is the difference between Mutual Funds and Fixed Deposits (FD)?",
      answer: "Fixed Deposits offer fixed returns, while Mutual Fund returns depend on market performance. Mutual Funds are generally considered for long-term goals, whereas FDs are seen as relatively low-risk investments.",
    },
    {
      question: "What should I consider before investing in Mutual Funds?",
      answer: "Before investing, investors should consider their financial goals, investment horizon, and risk tolerance. Reading scheme-related documents and understanding the investment product is important.",
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
