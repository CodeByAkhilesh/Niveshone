import React, { useState } from "react";
import FaqCard from "../ui/FaqCard";
import { faqsData } from "../../data/faqsData";

const FaqSection = () => {
  const [activeId, setActiveId] = useState(null);

  const handleClick = (i) => {
    setActiveId(activeId === i ? null : i);
  };

  return (
    <section className="xl:w-302.5 mx-auto py-5 px-5 md:px-10 md:py-25">
      {/* Hading  */}
      <header>
        <h2 className="text-white text-5xl md:text-6xl font-bold pb-20">
          FAQs
        </h2>
      </header>

      <ul className="w-full flex flex-col justify-between flex-wrap gap-y-10 pb-10 md:pb-2">
        {faqsData.map((faq) => {
          return (
            <li key={faq.id}>
              <FaqCard
                id={faq.id}
                handleClick={handleClick}
                faqs={faq}
                activeId={activeId}
              />
            </li>
          );
        })}
      </ul>
    </section>
  );
};

export default FaqSection;
